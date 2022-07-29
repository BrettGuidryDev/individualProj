
const queries = {
    selectNameI:'select ingredient FROM ingredients where ingredient in ',
    
    selectIng: 'select * FROM ingredients',
    selectRec: 'select * FROM recipes',
    selectReq: 'select * FROM requirements',
    insertIng: 'INSERT INTO ingredients(ingredient) VALUES', 
    insertRec: 'INSERT INTO recipes(recipe) VALUES',
    insertReq: 'INSERT INTO requirements(recipe_id, ingredient_id) VALUES',
    selectIdR:    'select r._id FROM recipes r where recipe = ',
    selectIdI:    'select i._id FROM ingredients i where ingredient in ',
    delRec: 'delete from recipes',
    delIng: 'delete from ingredients',
    delReq: 'delete from requirements',

    
};
//INSERT INTO recipes(ingredient) VALUES ('baked chicken')
//INSERT INTO ingredients(ingredient) VALUES ('salt')
//INSERT INTO ingredients(ingredient) VALUES ('chicken')

module.exports = queries;