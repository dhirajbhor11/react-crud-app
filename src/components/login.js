import React, { createRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Card,InputGroup} from 'react-bootstrap';
import './css/login.css';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix-react';
import Navbars from './navbar'

class Login extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            passwordType : "password",
        }

        this.emailId = createRef();
        this.password = createRef();

    }


    handleSubmit = (event)=>{

        firebase.auth().signInWithEmailAndPassword(this.emailId.current.value,this.password.current.value).then((value)=>{
            Notiflix.Notify.Success("Welcome");
            console.log(value); 
        }).catch((error)=>{
            Notiflix.Notify.Failure(error.code);
            console.log(error);
        })
        event.preventDefault();
    }

    

    chagePasswordType = () =>{
        if(this.state.passwordType === 'password'){
            this.setState({
                passwordType : 'text'
            });
        }else{
            this.setState({
                passwordType : 'password'
            });
        }
    }


    render(){
        return(
            <div>
            <Navbars/>
            <div className="loginView">
                <Card style={{width:"30rem"}}>
                    <Card.Header> <h1> Log In</h1></Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email Id </Form.Label>
                                    <Form.Control type="email" placeholder="Please Enter Your Email" required ref={this.emailId}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control type={this.state.passwordType} placeholder="Enter Your Password"  minLength="8" required ref={this.password}/>
                                        <InputGroup.Append> 
                                            <InputGroup.Text onClick={this.chagePasswordType}>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 
                                                11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 
                                                4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                                <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                                </svg>
                                            </InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    <Link to="/forgetPasword">Forgot Password</Link>
                                </Form.Group>
                                <Button variant="primary" type="submit" id="loginButton" className="loginButton">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/signup">Sign Up</Link>
                        </Card.Footer>
                </Card>
            </div>
            </div>
        );
    }
}

export default Login;