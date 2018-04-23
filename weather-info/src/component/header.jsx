import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
               <h2> Welcome to Weather Info </h2>
               <p>Pleae enter a city name or zip code to know the weather of that particular city</p>
                </Jumbotron>  
            </div>
        );
    }
}

export default Header;