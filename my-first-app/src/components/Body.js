//import "../assets/body.css";
import Proptypse from "prop-types"
import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        const {cover,title,description} = this.props;
        return (
            <div>
              <img src = {cover} alt = "body cover"/>
              <h3>{title}</h3> 
              <p>{description}</p>
            </div>
        )
    }
}

Body.proptypse ={
    cover: Proptypse.string.isRequired,
    title: Proptypse.string.isRequired,
    description: Proptypse.string.isRequired
}