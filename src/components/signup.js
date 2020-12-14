import React, { createRef } from 'react';
import './css/signup.css';
import {Alert, Button, Card, Form, InputGroup }from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix-react';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            passwordType:'password',
            confirmPasswordType : 'password',
            passwordMatchAlert : 'none'
        }

        this.confirmPassword = React.createRef();
        this.password = React.createRef();
        this.name = React.createRef();
        this.emailId = React.createRef(); 
    }

    componentDidMount(){
        Notiflix.Notify.Init({});
    }

    checkPasswordForMatch =()=>{
        if(this.confirmPassword.current.value === this.password.current.value){
            this.setState({passwordMatchAlert:'none'});
            return true;
        }else{
            this.setState({passwordMatchAlert:'block'});
            return false;
        }
    }

    changePasswordType=(event)=>{
        if(this.state.passwordType === 'password'){
            this.setState({passwordType : 'text'});
        }else {
            this.setState({passwordType : 'password'});
        }
    }

    changeConfirmPasswordType=(event)=>{
        if(this.state.confirmPasswordType === 'password'){
            this.setState({confirmPasswordType : 'text'});
        }else {
            this.setState({confirmPasswordType : 'password'});
        }
    }

    onFormSubmit=(event)=>{
        if(!this.checkPasswordForMatch()){
            const element = this.confirmPassword.current;
            element.focus();
            event.preventDefault();
        }else {
            console.log(this.emailId.current.value+" && "+ this.password.current.value);
            firebase.auth().createUserWithEmailAndPassword(this.emailId.current.value,this.password.current.value).then((value)=>{
                console.log(value);
                Notiflix.Notify.Success(value.message);
            }).catch((error)=>{
                Notiflix.Notify.Failure(error.message);
            });
            event.preventDefault();
            
        }
    }


    getData=()=>{
        let myData = {
            "name" : this.name.current.value ,
            "emailId" : this.emailId.current.value ,
            "password" : this.password.current.value
        }

        return JSON.stringify(myData);
    }

    
    render(){
        return(
            <div className="signupForm">
                <Card style={{width:"40rem"}}>
                    <Card.Header><h1> Sign Up </h1></Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.onFormSubmit}>
                            <Form.Group >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" required ref={this.name}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email-Id</Form.Label>
                                <Form.Control type="email" required ref={this.emailId}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <InputGroup>
                                    <Form.Control type={this.state.passwordType} required minLength='8' onChange={this.checkPasswordForMatch} ref={this.password}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text onClick={this.changePasswordType}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 
                                            11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 
                                            4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                            <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                            </svg>
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <InputGroup>
                                    <Form.Control type={this.state.confirmPasswordType} required minLength='8' onChange={this.checkPasswordForMatch} ref={this.confirmPassword}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text onClick={this.changeConfirmPasswordType}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 
                                            11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 
                                            4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                            <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                            </svg>
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <small className="text-danger" style={{display:this.state.passwordMatchAlert}}>Password Not Match</small>
                            </Form.Group>
                            <Button type="submit"> 
                                Submit
                            </Button>
                        </Form>   
                    </Card.Body>
                    <Card.Footer>
                        <Link to="/login">Log In</Link>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}


export default Signup;