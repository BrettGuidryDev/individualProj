// const { query } = require('express');
const path = require('path')
const db = require('./dbConnect.js');
const queries = require('./DoStuff')
const express = require('express');
const { selectIng } = require('./DoStuff');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const recipeController = {}


const select = 'SELECT * FROM ingredients'


recipeController.getRecipe = async (req, res, next) => {
    try {
        const result = await db.query(select)
        res.locals.query = result.rows
        // console.log('TESTAPI',res.locals.query)
        return next();
    } catch (err){
        return next(err)
    }
}

recipeController.insertRecipe = async (req, res, next) => {
    try {
        console.log('QCONTROLLERRRR!!!',req.body)
        const {recipe, ingredients} = req.body

        if (!recipe[0]) {
            console.log('EMPTY RECIPE FIELD', recipe);
                 return next();
           }

        if (!ingredients[0]) {
            console.log('EMPTY INGREDIENT FIELD', ingredients);
                 return next();
           }

        ///get existing ingredient and recipe lists
        const ING_GET = await db.query(`${queries.selectIng}`)
        const existingI = ING_GET.rows.map(x => {return x.ingredient})

        const REC_GET = await db.query(`${queries.selectRec}`)
        const existingR = REC_GET.rows.map(x => {return x.recipe})

        
        console.log('!!!!TESTING!!!!', existingI ,existingR)
       
       
    // inserts the recipe name in the db
        if (!existingR.includes(recipe)){  console.log(existingR, '<existing new>', recipe)
            await db.query(`${queries.insertRec} ('${recipe}');`)
       
        // inserts each incoming ingredient into the db
        for(const each of ingredients){
            if (await db.query(`${queries.selectNameI}('${ingredients}')`))
            await db.query(`${queries.insertIng} ('${each}');`)
        }

       } else {console.log("RECIPE ALREADY THERE!!!")}

        // after the ingredients get pushed into the db 
        // this searches the db for each and puts their id
        // into the ingArr array for later use
        const ingArr = []  // ${test}
        for (const each of ingredients){
        const ingtmp = await db.query(`${queries.selectIdI} ('${each}');`)
        ingArr.push(ingtmp.rows[0]._id)
        // console.log('test!!!!inside', each, ingtmp.rows[0]._id )
        }
        
        // this bit first grabs the recipe id the same way as with the ingredients above
        // then puts recipe_id and the collection of ingredient_ids in to 
        // the requirements table
        const resTmp = await db.query(`${queries.selectIdR} '${recipe}'`)
        const resID = resTmp.rows[0]._id
        for(const each of ingArr){
        await db.query(`${queries.insertReq} (${resID},${each});`)
        }
         
        res.locals.data = req.body
        return next();
    } catch (err){
        return next(err)
    }

}

recipeController.delAll = async (req, res, next) => {
    await db.query(`${queries.delIng}`)
    await db.query(`${queries.delReq}`)
    await db.query(`${queries.delRec};`)
    return next(); 
}



module.exports = recipeController