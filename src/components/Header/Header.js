import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    const {user, logout,img} = useAuth();
    return (
        <div>
          <Navbar bg="primary" variant={"dark"} expand="lg" className="navbar">
        <Container>
          <Navbar.Brand to="/home">
            {/* <img src={img} alt="" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <h5 className="logo">Food Gunda</h5>
            <Nav
              className="m-auto my-2 my-lg-0"
              navbarScroll
            >
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/food">Food</NavLink>
              <NavLink to="/manageorder">Manag Order</NavLink>
              <NavLink to="/ordercart">Cart</NavLink>
              { user.email &&
                <span className="user-name"> Hello, {user.displayName}</span>
              }
          
                 { user.email ?
                 <button onClick={logout} className="btn-primary">Logout</button>
  
                 :
                 <NavLink to="/login" className="btn-primary">Login</NavLink>
                 }
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;