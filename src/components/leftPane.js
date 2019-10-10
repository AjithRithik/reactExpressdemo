import React, { Component } from 'react';
import logo from '../asserts/ipl.png';

export default class LeftPane extends Component {
    render(){
        return(
            <div>
                {/* image Area */}
                <div className="flex row center-center pt20">
                    <img src={logo} alt="iplLog" className="w100"/>
                </div>

                {/* tabArea */}
                <div className="pt20">
                    <div className="flex row center-center bg-light-blue tc--white border_white_bottom navBar">
                        <div className="p15">
                            <div></div>   
                            <div>Dashboard</div>
                        </div>
                    </div>

                    <div className="flex row center-center bg-light-blue tc--white navBar">
                        <div className="p15">
                            <div></div>   
                            <div>Profile</div>
                        </div>
                    </div>
                </div>   
                
            </div>
        );
    }
}
