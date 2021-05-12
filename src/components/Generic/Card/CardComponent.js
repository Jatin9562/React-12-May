import React, { Component } from 'react'
import './Card.css'

export class CardComponent extends Component {
 
    render() {
        return (
            <>
                <div data-testid='card' className={this.props.cardClass} style={{ backgroundColor: this.props.cardColor }}>
                    {this.props.cardText}
                </div>
            </>
        )
    }
}

export default CardComponent
