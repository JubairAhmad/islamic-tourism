import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const {AllContexts}=useAuth()
    const{user,logOut}=AllContexts;
    const{photoURL}=user;
    
    return (

/* <Navbar.Brand to="/home" className="fw-bold  text-white">COMOTO <span style={{color:"#65E6FA"}}>Express Deliver</span> </Navbar.Brand> */

        <div className='caption'>
            <Navbar expand="lg">
            <Container>
                
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand to="/home" className="fw-bold  text-white">ISLAMIC <span style={{color:"#65E6FA"}}>TOUR&TRAVELS</span> </Navbar.Brand>
                <Nav className="ms-auto header">
                    <Nav.Link as={NavLink} className="text-light" to="/home">Home</Nav.Link>
                    <Nav.Link  className="text-light" as={NavLink} to="/packages">Packages</Nav.Link>
                    <Nav.Link  className="text-light" as={NavLink} to="/about">About</Nav.Link>
                    
                    

                    {!user.displayName ?(<>
                    <Nav.Link as={NavLink} className='rounded-circle text-light ' style={{fontWeight:'900'}} to="/login">Login/Sign Up</Nav.Link>

                    </>):(
                       <>
                       <Nav.Link  className="text-light" as={NavLink} to="/manage">Manage Booking</Nav.Link>
                       <Nav.Link  className="text-light" as={NavLink} to="/mybooking">Booking</Nav.Link>
                       <Nav.Link  className="text-light" as={NavLink} to="/addnewshedule">Add Shedule</Nav.Link>
                       <span className="user-name "><img src={photoURL}  alt="" /></span>
                       <button onClick={logOut} className="log-btn text-light logout">Log Out</button></>
                    )}


                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
    );
};

export default Header;