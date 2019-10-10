import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HeaderPane from './header';
import DashBoard from './Dashboard';
import Profile from './Profile';

export default class MainContainer extends Component {
  
    constructor(props) {
        super(props);
        this.state = { 
            isFrom:"MAIN"
         }
    }

    render(){
        return(
            <div>
                <HeaderPane from={this.state.isFrom}/>
                <Router>
                    <Route path="/dashBoard/" component= { DashBoard } />
                    <Route path="/profile/" component= { Profile } />
                </Router>
            </div>
        );
    }
}