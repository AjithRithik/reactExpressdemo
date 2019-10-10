import React, { Component } from 'react';
import LeftPane from './leftPane';
import MainContainer from './mainContainer';
import '../css/BaseLayout.css';

class Home extends Component {
    render(){
        return(
            <div className="flex row">
                <div className="flex-15">
                    <LeftPane />
                </div>

                <div className="flex-85">
                  <MainContainer />
                </div>
            </div>
        );
    }
}

export default Home;