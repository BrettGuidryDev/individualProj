import React, { Component } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import router from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// class Rlist extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     componentDidMount(){fetch('http://localhost:3000/recipe')
//         .then((data) => data.json())
//         .then((res) => {
//             this.setState({res})
//             console.log('RLISTres', res)
//         })
//     }


    const Rlist = () => {
        const [ingredients, getIng] = useState([]);
        const [item, selectItem] = useState([]);
        

        
        const ings = async () => {
            await fetch('http://localhost:3000/recipe')
            .then(res => res.json())
            .then(data => {
                getIng(data)
            })
         }

         const tmplist = []
         for (const each of ingredients){
            tmplist.push(each.ingredient)
         } 

         const checBoxfunc = async (e) => {
            let updateList = item
            let removeList = []

            
            const addX = (e) => {updateList.push(e);
            console.log('AAEEEEAEEAEA',updateList)}  
            const removeX = (e) => {
                for (const each of item){
                    if (each !== e) removeList.push(each)
                }
                console.log('the part thats not working')
                updateList = removeList
            } 

            item.includes(e) ? removeX(e) : addX(e)
            console.log(updateList)
            await selectItem(item => updateList)
           
            console.log('item = ',item)
         }

    

    console.log('IngredientsObj: ',ingredients);
    const ING_LIST = tmplist.map((e, i) => <div><button value={e} onClick={()=>{checBoxfunc(e)}} className="ingItem" id={e} key={`ing${i+e}`}>{e}</button></div>)
    console.log('INGLIST!', ING_LIST);

    // const Rlist = () =>{
// render(){

    
    return(
        <div className="Rlist">
            <div className="sbarTest">
            <button id='b0' onClick={() => { ings()}}>
            pantry 
            </button>
                { ING_LIST }
            </div>
        </div>
    );
 
    };
// };
    


export default Rlist;