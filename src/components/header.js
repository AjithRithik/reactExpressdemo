import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

export default class HeaderPane extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = { 
         }
    }

    render(){
        return(
            <div>
                <div className="header">
                    {
                         this.props.from === "MAIN" ? 
                        (
                            <div className="p15 flex row end-end">
                                <div className="caps">
                                   Player Profile
                                </div>
                             </div>
                        ) :
                        (
                            <div className="flex p10 row">
                                <IconButton onClick={this.props.closeDrawer}>
                                     <Icon className="tc--white" >navigate_next</Icon>
                                </IconButton>
                                <div className="flex flex-100 row bold center-center">
                                    <div className="caps">
                                        Profile Creation
                                    </div>
                                </div>
                             </div>
                        )
                    }
                </div>
            </div>
        );
    }
}