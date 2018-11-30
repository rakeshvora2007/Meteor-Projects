import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ViewGames from './NavigationMenu/ViewGames';
import CreateGameDialog from './NavigationMenu/CreateGameDialog';
import CreateTeamDialog from './NavigationMenu/CreateTeamDialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const style = {
    maxWidth:'90%'
};


export default class MenuExampleSimple extends Component {



constructor(props) {
       super(props);
       this.state = {OpenGameDialog: false, OpenTeamDialog:false};
       }

OpenCreateGameDialog = () => {
   this.setState({OpenGameDialog: true});
 };

 CloseCreateGameDialog = () => {
   this.setState({OpenGameDialog: false});
 };

 OpenCreateTeamDialog = () => {
    this.setState({OpenTeamDialog: true});
  };

  CloseCreateTeamDialog = () => {
    this.setState({OpenTeamDialog: false});
  };


    handleViewGames = () => {
        var name = 'Rakesh';
        this.props.onClick(name);
    };

    handleViewResults = () => {
        var name = 'Dhaval';
        this.props.onClick(name);
    };

 render(){

 const GameActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.CloseCreateGameDialog}
      />,
      <FlatButton
          type="submit"
        label="Submit"
        primary={true}
        onTouchTap={this.CloseCreateGameDialog}
      />,
    ];

const TeamActions = [
         <FlatButton
           label="Cancel"
           primary={true}
           onTouchTap={this.CloseCreateTeamDialog}
         />,
         <FlatButton
             type="submit"
           label="Submit"
           primary={true}
           onTouchTap={this.CloseCreateTeamDialog}
         />,
       ];

return(
<div>
  <Paper style={style}>
    <Menu style={style}>
      <MenuItem primaryText="Game Creater" onTouchTap={this.OpenCreateGameDialog}>
      <CreateGameDialog
          title="Game Creater"
          actions={GameActions}
          modal={false}
          open={this.state.OpenGameDialog}
          onRequestClose={this.CloseCreateGameDialog}
        />
      </MenuItem>

      <MenuItem primaryText="Games Created" onTouchTap={this.handleViewGames}/>
      <MenuItem primaryText="Game Received" onTouchTap={this.handleViewResults}/>
    </Menu>



  </Paper>
</div>
        );
    }
}
