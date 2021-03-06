import React, { useState} from "react";
import {Nav,Navbar,NavbarBrand,NavbarToggler,Collapse,NavItem,Jumbotron,Button,Modal,ModalHeader,ModalBody,Input,Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Header=(props)=>{
    const [isNavOpen,setIsNavOpen]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [username,setUsername]=useState(null);
    const [password,setPassword]=useState(null);

    const toggleNav=()=>{
        setIsNavOpen((prevState)=>{
            return !prevState
        })
    }
    
    const toggleModal=()=>{
        setIsModalOpen((prevState)=>{
            return !isModalOpen
        })
    }

    const handleLogin=(event)=>{
        toggleModal();
        alert("Username: " + username + " Password: " + password);
        setUsername(null);
        setPassword(null)
        event.preventDefault();
    }
    const handleUsernameChange=(e)=>{
        setUsername((prevState)=>{
            return e.target.value;
        })
    }
    const handlePasswordChange=(e)=>{
        setPassword((prevState)=>{
            return e.target.value;
        })
    }
    return(
        <React.Fragment>
            <Navbar dark expand='md'>
                <div className='container'>
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className='mr-auto ' href='/'><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} height='30' width='41' alt='Ristorante Con Fusion' /></NavbarBrand>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/home'><span className='fa fa-home fa-lg'></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                <form onSubmit={handleLogin}>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            onChange={handleUsernameChange}/>
                        <Label htmlFor="password">Password</Label>
                        <Input type="text" id="password" name="password"
                            onChange={handlePasswordChange}/><br/>
                    <button type="submit" value="submit" color="primary">Login</button>
                </form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

export default Header;