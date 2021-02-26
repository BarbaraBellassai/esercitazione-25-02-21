import "../assets/body.css";

import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
              <img src = {this.props.cover} alt = "body cover"/>
              <h3>{this.props.title}</h3> 
              <p>{this.props.description}</p>
            </div>
        )
    }
}
