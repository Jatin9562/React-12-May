import React from 'react'
import './CSS/Sidebar.css'
import { SidebarData } from './SidebarData'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



function Sidebar() {
    return (
        <div >
            <div className="container">
              
                    <div className="SidebarNav">
                        <div className="row">
                            <div className="Image" style={{ padding: "60px" }}>
                                <img className="Image" src="steve.jpg" alt="Profile" />

                            </div>


                            <div className="text-align-center" style={{ padding: "30px" }} >
                                <h5>Anand Agarwal <ArrowRightAltIcon /></h5>
                                <p>anand.agarwal@gmail.com</p>


                            </div>

                        </div>

                        <ul className="SidebarList">
                            {SidebarData.map((val, key) => {
                                return (
                                    <li key={key}
                                        className="row" onClick={() => {
                                            window.location.pathname = val.link;
                                        }}>

                                        {/* <div id="icon">
                                            {val.Icon}
                                        </div> */}
                                        <div id="title">
                                            <b>{val.title}</b>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>




                    </div>
                  
                
            </div>
        </div>
    )
}

export default Sidebar
