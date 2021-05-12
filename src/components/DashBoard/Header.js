import { Navbar, Nav } from 'react-bootstrap';
import './CSS/Header.css'
// import Avatar from '@material-ui/core/Avatar';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React, { Component } from 'react'
export class Header extends Component {

    render() {
        return (
            <>
                <h2 className="text-light">Motivation</h2>

                <Navbar collapseOnSelect expand="lg" variant="dark" className="Header">
                    {/* <Navbar.Brand href="/">Motivation</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="mr-auto">
                        <Nav.Link className="link-nav" href='/dash'>All</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Actions</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Podcast</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Video</Nav.Link>
                        <Nav.Link className="link-nav" href="/dash">Downloads</Nav.Link>
                        <Nav.Link id="playAll" className="link-nav btn-link text-dark" href="/dash">Play All</Nav.Link>
                    </Nav>
                    {/* <AvatarGroup className="avatar" max={4}>
                        <Avatar  alt="Remy Sharp" src="avatar1.jpg" />
                        <Avatar alt="Travis Howard" src="avatar2.jpg" />
                        <Avatar alt="Cindy Baker" src="avatar3.jpg" />
                        <Avatar alt="Agnes Walker" src="avatar4.jpg" />
                        <Avatar alt="Trevor Henderson" src="steve.jpg" />
                    </AvatarGroup> */}
                    </Navbar.Collapse>
                </Navbar>

            </>
        )
    }
}

export default Header


