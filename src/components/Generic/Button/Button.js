import React, { Component } from 'react'

import {  Redirect } from 'react-router-dom';
import './Button.css'


export class Button extends Component {
    constructor(props){
        super(props);
        this.state={
            buttonRedirect:false,

        }
    }

    handleClick=(e)=>{
        this.setState({buttonRedirect:true})
    }
 
    render() {
        if(this.state.buttonRedirect){
        
            return <Redirect to="/dash" push/>
        }
        return (
            <div className='container' >
                <button data-testid='button' type="submit" disabled={!this.props.buttonCall} className={`button ${this.props.variant}`}
                onClick={this.handleClick}>{this.props.buttonName}</button>                
            </div>
        )
    }
}

export default Button