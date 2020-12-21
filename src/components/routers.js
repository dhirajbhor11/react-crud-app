import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Dashboard from './dashboard';
import ForgetPassword from './forgetPassword';
import Home from './home';
import Navbars from './navbar';

class Routers extends React.Component{
    render(){
        return(

             <Router>
                <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/forgetPasword" component={ForgetPassword} />
                <Route path="/navbar" component={Navbars} />
                <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default Routers;