import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

import MenuExampleSimple from './NavigationMenu';
import RightExample from './RightMenu';
import Display from './Display/Display'
import DrawerOpenRightExample from "./DrawerRight";

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    color:'blue',
  },
};

export default class Dashboard extends Component {

constructor(props) {
       super(props);
       this.state = {name : 'NO MenuItem Selected'};
       }

select(newName){
    this.setState({
        name: newName
    });
}

  render(){
    return(
      <MuiThemeProvider>
        <div>
        <AppBar
          title="Sportify"
          style={{
            backgroundColor:'#6554f3'
          }}
          showMenuIconButton={false}
          iconElementRight={<DrawerOpenRightExample/>}
            />

          <div className="container-fluid">
          <div className="row">
            <div className = "col s12 m2 l2"><MenuExampleSimple onClick={this.select.bind(this)} /></div>
            <div className = "col s12 m7 l7"><Display name = {this.state.name} /></div>
            <div className = "col s12 m3 l3"><RightExample /></div>
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}
