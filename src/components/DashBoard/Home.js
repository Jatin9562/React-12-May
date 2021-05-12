import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './CSS/Home.css'
import Header from './Header'
import Template from './Template'
import { Redirect } from 'react-router'

export class Home extends Component {
    render() {
        if(!localStorage.getItem('username')){
            return <Redirect to='/'/>
        }
        return (
 
            <div className="Display container-fluid">
                <div >
                    <Sidebar />
                </div>
                    <div className="card-main">
                        <Header />
                        <br />
                        <Template />      
                </div>
            </div>
        )
    }
}

export default Home
