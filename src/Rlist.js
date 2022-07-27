import React, { Component } from 'react';
import { render } from 'react-dom';

class Rlist extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
}

render(){
    
    fetch('http://localhost:3000/recipe')
    .then((data) => data.json())
    .then((res) => {
        this.setState(res)
        console.log(res)
    })


    return(
        <dev>
            <dev>
                { res }
            </dev>
        </dev>
    );
};

    


export default Rlist