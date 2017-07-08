import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

import DialogExampleModal from './dialog';

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

export default class App extends Component {
  render(){
    return(
      <MuiThemeProvider>
        <div>
        <AppBar
          title="RAMTOO"
          style={{
            backgroundColor:'DarkBlue'
          }}
          showMenuIconButton={false}
          iconElementRight={<DialogExampleModal/>}
            />
      </div>
      </MuiThemeProvider>
    )
  }
}
