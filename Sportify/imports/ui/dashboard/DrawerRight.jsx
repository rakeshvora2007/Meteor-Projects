import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import IconButton from 'material-ui/IconButton';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Avatar from 'material-ui/Avatar';


export default class DrawerOpenRightExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Rakesh Jain"
                    labelPosition="after"
                    icon={<ActionAndroid />}
                    labelStyle={{color:'white'}}
                    buttonStyle={{backgroundColor:'darkorange'}}
                    onTouchTap={this.handleToggle}
                /> &nbsp;

                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    openSecondary={true}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <AppBar title="Rakesh Jain"
                            style={{backgroundColor:'darkorange'}}
                            iconElementLeft={<Avatar src="barcelona.jpg"
                                                     size={50}
                            />}
                    /><MenuItem onTouchTap={this.handleClose}> Setting</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Privacy Setting</MenuItem>
                    <MenuItem >Edit Profile</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Account Setting</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Log out</MenuItem>
                </Drawer>

            </div>
        );
    }
}