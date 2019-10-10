import React, {Component} from 'react';
import axios from 'axios';
import proImg from '../asserts/sachin.jpg';
import Moment from 'react-moment';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import ProfileCreation from './ProfileCreation';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    paper: {
      width:'calc(100% - 15%)',
      top: '48px'
    }
  };

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            profileData : [],
            isDraweropen:false,
            paper: {
                background: "blue"
              },
            isListLoding:true,
        };
    }

    componentDidMount(){
        axios.get('/api/getProfileList')
             .then(res=>{
                this.setState({
                    profileData : res ? res.data : [],
                    isListLoding:false
                });
             })
             .catch(err=>{
                 console.log('err');
             });
    }

    toggleDrawer(isOpen){
        this.setState({isDraweropen : isOpen});
    }

    render(){

        const { classes } = this.props;

        return(
            <div className="main-Container">
                <div className="bg-light-white"></div>
                <div className="p15">
                    <div className="flex row end-end pt10">
                        search holder
                    </div>
                    
                    {/* header bar */}
                    <div className="dashBoard-card flex row tc--blue mt10">
                        <div className="w20 flex row start-center"></div>
                        <div className="flex-30 flex row start-center">Team</div>
                        <div className="flex-40 flex row start-center">Profile Type</div>
                        <div className="flex-25 flex row end-end">
                            <IconButton>
                                <Icon className="tc--blue f18">filter_list</Icon>
                            </IconButton>
                        </div>
                    </div>

                    <div className="flex row tc--blue mt10 p10 header_tabel">
                        <div className="w20"></div>
                        <div className="flex-5"></div>
                        <div className="flex-25">Name</div>
                        <div className="flex-15">Team</div>
                        <div className="flex-15">Position Title</div>
                        <div className="flex-10">Type</div>
                        <div className="flex-25">Date Of Birth</div>
                    </div>
                     <div className="table_content">
                         { this.state.isListLoding ? 
                                (
                                    <div className="flex center-center h100p column">
                                        <div>
                                            <Fade
                                                in={this.state.isListLoding}
                                                style={{
                                                    transitionDelay: this.state.isListLoding ? '50ms' : '0ms',
                                                }}
                                                size={60}
                                                thickness={5}
                                                unmountOnExit
                                                >
                                                <CircularProgress />
                                            </Fade>
                                        </div>
                                     </div>
                                )
                                :
                                (
                                    
                                    this.state.profileData.length > 0 ?
                                    this.state.profileData.map(data =>
                                        (
                                            <div className="flex row p10 table-row start-center">
                                                <div className="w20 statusBorder"></div>
                                                <div className="flex-5">
                                                    <img src={proImg} alt="img" className="profileImg"/>
                                                </div>
                                                <div className="flex-25">
                                                    <div>{data.firstName + data.lastName}</div>
                                                    <div>{data.status}</div>
                                                </div>
                                                <div className="flex-15">{data.team}</div>
                                                <div className="flex-15">{data.title}</div>
                                                <div className="flex-10">{data.type}</div>
                                                <div className="flex-25">
                                                    <Moment format="DD/MM/YYYY">
                                                            {data.DOB}
                                                    </Moment>
                                                </div>
                                            </div>
                                        )
                                    ) 
                                    : 
                                    (<div className="center-start flex flex-100 mt10"> No Result Found </div>)
                                )
                            }

                            <div className="AddFabPosition">
                                <Fab color="primary" aria-label="Add" onClick={()=>this.toggleDrawer(true)}>
                                    <AddIcon />
                                </Fab>
                            </div>

                            <Drawer classes={{ paper: classes.paper}}
                                    anchor="right" 
                                    open={this.state.isDraweropen} 
                                    onClose={()=>this.toggleDrawer(false)}
                                    transitionDuration={{enter:500,exit:500}}
                                   >
                                <ProfileCreation closePane={()=>this.toggleDrawer(false)}/> 
                             </Drawer>  
                     </div>
                </div>
            </div>
        );
    }
}


Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Dashboard);