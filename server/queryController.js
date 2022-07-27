const path = require('path')
const db = require('./dbConnect.js');

const recipeController = {}


const selectRecipe = 'SELECT * FROM ingredients'


recipeController.getRecipe = async (req, res, next) => {
    try {
        const result = await db.query(selectRecipe)
        res.locals.query = result.rows
        // console.log('TESTAPI',res.locals.query)
        return next();
    } catch (err){
        return next(err)
    }
}
// recipeController.getRecipe = (req, res, next) => {
//     db.query(selectRecipe)
//         .then((data) => {
//             console.log(data)
//             res.locals.query = data
//             return next()
//         }).catch(err) 
// }



module.exports = recipeController