import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import ForgetPassword from './forgetPassword';
import Home from './home';

class Routers extends React.Component{
    render(){
        return(

             <Router>
                <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/forgetPasword" component={ForgetPassword}></Route>
                <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default Routers;