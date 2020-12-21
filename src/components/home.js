import React from 'react';
import { Link } from 'react-router-dom';
import Navbars from './navbar';


class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Navbars/>
                <Link to="/login"> Log In</Link>
                <br />
                <Link to="/signup">Sign up</Link>
            </div>
        );
    }
}

export default Home;