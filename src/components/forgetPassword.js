import React, { createRef } from 'react';
import firebase from 'firebase';
import {Button,Card,Form } from 'react-bootstrap';
import Notiflix from 'notiflix-react';
import {Redirect,Link} from 'react-router-dom';
import  './css/login.css';
import Navbars from './navbar';


class ForgetPassword extends React.Component {
    constructor(){
        super();
        this.state = {
            redirect : null
        }
        this.emailId = createRef();
    }

    onSubmit = (event)=>{
        event.preventDefault();
        console.log(this.emailId.current.value);
        firebase.auth().sendPasswordResetEmail(this.emailId.current.value).then((value)=>{
            Notiflix.Notify.Success("Password Reset Link send to Registered Email Address");
            this.setState({
                redirect : '/login'
            });
        }).catch((error)=>{
            Notiflix.Notify.Failure(error.code);
        })
    }



    render(){
        if(this.state.redirect){
          return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
            <Navbars/>
            <div className="loginView">
                <Card style={{width:"30rem"}}>
                    <Card.Header> <h1>Forgot Password </h1></Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email Id </Form.Label>
                                    <Form.Control type="email" placeholder="Please Enter Your Email" required ref={this.emailId}/>
                                </Form.Group>
                                <Button onClick={this.onSubmit} type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer >
                        <Button style={{margin:"5px"}}>
                            <Link to="/login" style={{color:'white'}}>Log In</Link>
                        </Button>
                        <Button>
                            <Link to="/signup" style={{color:'white'}}>Sign Up</Link>
                        </Button>
                    </Card.Footer>
                </Card>      
            </div>
            </div>
        );
    }
}

export default ForgetPassword;