import React from 'react';
import { Card, Jumbotron,Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';

class Dashboard extends React.Component{
    constructor(){
        super();
    }
    handleLogOut = () =>{
        firebase.auth().signOut();
    }


    render(){
        return(
            <div>
                <Jumbotron>
                    <h1>Welcome </h1>
                </Jumbotron>
                <Card style={{width:'18rem'}}>
                    <Card.Img variant="top" />
                    <h3> User Loged In</h3>
                    <Button onClick={this.handleLogOut}>
                        Log Out
                    </Button>
                </Card>
            </div>
        );  
    }
}

export default  Dashboard;
