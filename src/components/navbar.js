import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Card,InputGroup, Nav,Navbar as BNavbar,DropdownButton,Dropdown,ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/database';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : null,
            userId : null
        }
        console.log(this.props.userStatus);
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                let db = firebase.firestore();
                db.collection('users').doc(user.uid).get().then((value)=>{
                    this.setState({
                        userName : value.data().name
                    });
                }).catch((error)=>{
                    console.log(error);
                })
            }else{
                this.setState({
                    userName : null
                });
            }
        })
    }

    handleLogOut=(event)=>{
        event.preventDefault();
        firebase.auth().signOut();
    }

    render(){
            return(
                <BNavbar bg="secondary" expand="lg">
            <BNavbar.Brand href="#home">React-Logo</BNavbar.Brand>
            <BNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BNavbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/"><Nav.Link>Home</Nav.Link></Link>   
                <Link to="/about"><Nav.Link>About</Nav.Link></Link>
                
              </Nav>
            {(this.state.userName)? <DropdownButton
                        as={ButtonGroup}
                    key="dark"
                    id="dropdown-button-drop-left"
                    variant="dark"
                    title={this.state.userName}
                    menuAlign="right"
                >
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item > <Button onClick={this.handleLogOut}>
                        Log Out
                    </Button></Dropdown.Item>
                </Dropdown.Menu>
            </DropdownButton> 
                :
                <div>
                <Link to="/signup" style={{color: '#FFF',margin: '20px'}}>Sign Up</Link>
                <Link to="/login" style={{color: '#FFF' }}>Log In</Link>
                </div>    
            }

            </BNavbar.Collapse>
          </BNavbar>
        );
    }
}

export default Navbar;