const express = require('express');
const app = express();
const path = require('path');
const recipeController = require('./queryController.js')
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  // console.log('test!!!!!!!')
  return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/recipe', recipeController.getRecipe, (req, res) => {
  // console.log('test!!!!!!!', res.locals.query)
  return res.status(200).json(res.locals.query);
});














// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/public', express.static(path.join(__dirname, '../public')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
//   });
// }

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

