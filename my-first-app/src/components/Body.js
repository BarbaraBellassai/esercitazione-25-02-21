//import "../assets/body.css";
import Proptypse from "prop-types"
import React, { Component } from 'react'
import Product from "./Product"

export default class Body extends Component {
    constructor (props){
        super(props);

        this.state ={
            showProducts: false,
        }
    }

    makeProductsVisible(){
        this.setState({showProducts: true})
    }

    render() {
        const {cover,title,description, products} = this.props;
        const {showProducts} = this.state
        return (
            <div>
              <img src = {cover} alt = "body cover"/>
              <h3>{title}</h3> 
              <p>{description}</p>
            
              <div className="products-container">
                {showProducts ? (
                products.map((product) => {
                return <li>{<Product image={product.image} title={product.title}/>}</li>;
                     })
                ) : (
              <button onClick={() => this.makeProductsVisible()}>
                Show products
              </button>
                )}
                </div> 
            </div>
        )}
        
}

Body.proptypse ={
    cover: Proptypse.string.isRequired,
    title: Proptypse.string.isRequired,
    description: Proptypse.string.isRequired
}