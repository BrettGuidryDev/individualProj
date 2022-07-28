// const { query } = require('express');
const path = require('path')
const db = require('./dbConnect.js');
const queries = require('./DoStuff')
const express = require('express');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const recipeController = {}


const select = 'SELECT * FROM requirements'


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
        // console.log('QCONTROLLERRRR!!!',req.body)
        const {recipe, ingredients} = req.body
    
        // inserts each incoming ingredient into the db
        for(const each of ingredients){
            await db.query(`${queries.insertIng} ('${each}');`)
        }

        
        // inserts the recipe name in the db
        await db.query(`${queries.insertRec} ('${recipe}');`)
       

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