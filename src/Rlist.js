import React, { Component } from 'react';
import { render } from 'react-dom';
import router from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class Rlist extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){fetch('http://localhost:3000/recipe')
        .then((data) => data.json())
        .then((res) => {
            this.setState({res})
            console.log('RLIST!!!!!', res)
        })
    }


render(){

    
    return(
        <dev>
            <dev>
                { JSON.stringify(this.state) }
            </dev>
        </dev>
    );

    };
};
    


export default Rlist