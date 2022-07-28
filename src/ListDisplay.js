import React, { Component } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import queries from '../server/DoStuff'

// class List extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { items: ["tmp",3,5,6,6,67,32,65,5,55,] }  //** */
//         this.test = this.test.bind(this);
//         this.addIngredient = this.addIngredient.bind(this)
//     }
  //     componentDidMount(){fetch('')
  //     .then((data) => data.json())
  //     .then((res) => {
  //         this.setState({res})
  //         console.log('RLIST!!!!!', res)
  //     })
  // }

  // addIngredient(){
  //     const ing = document.getElementById('fieldI').value;
  //     this.setState((state) => {items: state.items.push(ing)});  //** */
  //     console.log(this.state)

  //     // this.setState({items.push(ing}});
  // };

  // test(){
  //     // console.log('ListDisplayTESTTTTTT')  //** */
  //     return <div>{this.state.items}</div>
  // };

const List = () => {


  const [items, addItems] = useState([]);
  const [recipe, setRecipe] = useState([]);

  const ingList = items.map((e, i) => <div id={`item${i}`} key={i+e}>{e}</div>);
//   const recList = recipe.map((e, i) => <div id={`recipe${i}`} key={i+e}>{e}</div>);

  const addToRecipe = async () => {
    const idVal = document.getElementById('fieldR').value;
    // setRecipe((recipe[0] = idVal));
    if (!idVal) return recipe
    
    if (!recipe[0]) {
        console.log('idvalllll  ',idVal)
       await setRecipe((recipe[0] = idVal));
    }
    // if (recipe !== idVal) {
    //     console.log('current state ',recipe, "idVal = ",idVal)
    //     setRecipe([])
    // }
     else {
        return recipe
    }
  };

  const addToList = () => {
    addItems(items.concat(document.getElementById('fieldI').value));
  };

  const sendItems = async (recipe, ingredients) => {
    await fetch('http://localhost:3000/addRecipe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({recipe: recipe, ingredients: ingredients}),
    })
    setRecipe([]);
    addItems([]);
  }

  const delAll = async () => {
    await fetch('http://localhost:3000/delAll')
  }

//   console.log(items);
  return (
    <div>
      <input type='text' placeholder='Recipe' id='fieldR'></input>
      <input type='text' placeholder='required ingredient' id='fieldI'></input>
      <button id='b1' onClick={() => { addToRecipe(),addToList() }}>
        Add
      </button>
      <div>
        <h3>{recipe}</h3>
        {ingList}
      </div>
      <div>
        <button id='b2' onClick={() => sendItems(recipe, items)}>
          lock it in!
        </button>
        <button id='b3' onClick={() => delAll()}>
          burn it all down
        </button>
      </div>
    </div>
  );
};
// }  //** */ <button id='b1' onClick={this.addIngredient}>
export default List;
