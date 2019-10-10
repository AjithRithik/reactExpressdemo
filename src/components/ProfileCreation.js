import React, {Component} from 'react';
import HeaderPane from './header';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

class ProfileCreation extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { 
            isFrom:"DRAWER"
         }
    }

    render() { 
        return ( 
            <div>
                <div>
                    <HeaderPane from={this.state.isFrom} closeDrawer={this.props.closePane}/>
                </div>
                <div>
                    <form noValidate autoComplete="off" className="p20 pl10">
                        <div className="flex row flex-100">
                            
                            <div className="flex-80 row flex row-wrap">
                                <div className="w30p p10">
                                    <TextField
                                        id="first-name"
                                        label="First Name"
                                        className="w280"
                                        margin="dense"
                                        autoFocus={true}
                                        required={true}
                                        name="firstName"
                                        />
                                </div>   

                                <div className="w30p p10 pl10">
                                    <TextField
                                        id="last-name"
                                        label="Last Name"
                                        className="w280"
                                        margin="dense"
                                        required={true}
                                        name="lastName"
                                        />
                                </div>

                                <div className="w20p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w180"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div> 

                                <div className="w30p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w280"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div>  

                                <div className="w30p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w280"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div>  

                                
                                <div className="w30p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w180"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div>  

                                <div className="w30p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w280"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div> 


                                <div className="w30p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w280"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div> 


                                <div className="w30p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w180"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div> 

                                <div className="w30p p10">
                                    <TextField
                                        id="first-name"
                                        label="First Name"
                                        className="w280"
                                        margin="dense"
                                        autoFocus={true}
                                        required={true}
                                        name="firstName"
                                        />
                                </div> 

                                <div className="w15p p10 pl10">
                                    <InputLabel shrink html	For="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w120"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div>  

                                <div className="w15p p10 pl10">
                                    <InputLabel shrink html	Fo  r="age-label-placeholder">
                                        Age
                                    </InputLabel>
                                    <Select
                                        input={<Input name="Gender" id="gender-label-placeholder" />}
                                        displayEmpty
                                        name="Gender"
                                        className="w120"
                                        margin="dense"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="Male">Male</MenuItem>
                                        <MenuItem value="Female">Female</MenuItem>
                                        <MenuItem value="Others">Others</MenuItem>
                                    </Select>
                                </div>  

                                <div className="w30p p10 pl10"></div>

                                <div className="w30p p10 pl10">
                                    <TextField
                                        id="first-name"
                                        label="First Name"
                                        className="w280"
                                        margin="dense"
                                        autoFocus={true}
                                        required={true}
                                        name="firstName"
                                        />
                                </div>

                                <div className="w30p p10 pl10">
                                    <TextField
                                        id="first-name"
                                        label="First Name"
                                        className="w280"
                                        margin="dense"
                                        autoFocus={true}
                                        required={true}
                                        name="firstName"
                                        />
                                </div>

                                <div className="w30p p10 pl10"></div>

                            </div>

                            <div className="flex-20">World</div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default ProfileCreation;