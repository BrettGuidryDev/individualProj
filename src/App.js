import React from "react";
import { useEffect } from "react";




const App = () =>{
    useEffect(() => {
        fetch('http://localhost:3000/recipe')
        .then((data) => data.json())
        .then((res) => {console.log(res) })
    }, []);

    return (
        <h1>
            Welcome to React App thats build using Webpack and Babel separately
        </h1>
    )
}



// changed this file name from App.js to App.jsx 
// and added the "export default App" at the bottom
export default App;