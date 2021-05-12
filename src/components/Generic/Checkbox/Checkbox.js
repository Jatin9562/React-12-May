import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import './Checkbox.css'


export class Checkbox extends Component {
    render() {
        return (
            <div  >
                <Form.Group  data-testid='checkbox-label' controlId="formHorizontalCheck" >
                    <Col>
                        <Form.Check  className={`check ${this.props.size} `} data-testid='checkbox'  label={this.props.checkboxLabel} />
                    </Col>
                </Form.Group>

            </div>
        )
    }
}

export default Checkbox
