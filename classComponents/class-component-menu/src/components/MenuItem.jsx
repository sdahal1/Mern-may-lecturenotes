import React, { Component } from 'react';


class MenuItem extends Component {
    render() {
        //you can do regular js code here inside the render(){} function body but before the return
        console.log("**********",this.props)
        const {name, price, desc} = this.props
        return<div>
            <h1>Name: {name} </h1>
            <h3>Price: {price}</h3>
            <p>Description: {desc}</p>
        </div>
            
       
    }
}

export default MenuItem;

