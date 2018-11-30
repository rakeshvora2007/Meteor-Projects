import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 900,
  },
};

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
var customContentStyle = {
  width: '30%',
  maxWidth: 'none',
  border:'5px solid black',
  backgroundColor:'#423'
};
export default class DialogExampleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        backgroundColor="#a4c639"
        label="Submit"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
          label="SIGN UP/ SIGN IN"
          labelStyle={{
            color:'white',
            fontWeight:'bolder',
          }}
          backgroundColor='#1e9316'
          onTouchTap={this.handleOpen}/>
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
          className="col s12"
        >

              <TabsExampleControlled/>

        </Dialog>
      </div>
    );
  }
}


class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="SIGN IN" value="a">
              <h2 style={styles.headline}>Login to Ramtoo</h2>
              <TextField
                hintText="Email Address"
                floatingLabelStyle={{fontSize:20}}
                floatingLabelText="E-mail"
                type="email"
                multiLine={true}
                rows={1}
                fullWidth={true}
              /><br />
              <TextField
                hintText="Enter Password"
                floatingLabelStyle={{fontSize:20}}
                floatingLabelText="Password"
                type="password"
                multiLine={true}
                rows={1}
                fullWidth={true}
              /><br />
              <p>Not having an account? <a>Signup here</a></p>
        </Tab>
        <Tab label="SIGN UP" value="b" style={{backgroundColor:'blue'}}>
                <h2 style={styles.headline}>Join Ramtoo</h2>

                <TextField
                  hintText="Enter your First Name"
                  floatingLabelStyle={{fontSize:20}}
                  floatingLabelText="First Name"
                  multiLine={true}
                  rows={1}
                  fullWidth={true}
                /><br/>
                <TextField
                  hintText="Enter your Last Name"
                  floatingLabelStyle={{fontSize:20}}
                  floatingLabelText="Last Name"
                  multiLine={true}
                  rows={1}
                  fullWidth={true}
                /><br/>
                <TextField
                  hintText="Email Address"
                  floatingLabelStyle={{fontSize:20}}
                  floatingLabelText="E-mail"
                  type="email"
                  multiLine={true}
                  rows={1}
                  fullWidth={true}
                /><br />
                <TextField
                  hintText="Enter Password"
                  floatingLabelStyle={{fontSize:20}}
                  floatingLabelText="Password"
                  type="password"
                  multiLine={true}
                  rows={1}
                  fullWidth={true}
                /><br />
                <TextField
                  hintText="A-Z,a-z,@#$% 0-9"
                  floatingLabelStyle={{fontSize:20}}
                  floatingLabelText="Confirm Password"
                  multiLine={true}
                  rows={1}
                  fullWidth={true}
                /><br/>
        </Tab>
      </Tabs>
    );
  }
}

const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    />
  </div>
);
