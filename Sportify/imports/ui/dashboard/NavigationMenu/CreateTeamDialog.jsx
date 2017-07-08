import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class CreateTeamDialog extends Component {
render(){
return(
<div>
    <Dialog
        title={this.props.title}
        actions={this.props.actions}
        modal={this.props.modal}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
      >
      <div className = "row">
      <div className = "col s12 m6 l6">
      <TextField
      hintText="Sport"
      floatingLabelStyle={{fontSize:20}}
      floatingLabelText="Sport"
      multiLine={true}
      rows={1}
      fullWidth={true}
      />
      </div>
      <div className = "col s12 m6 l6">
      <TextField
      hintText="Team Name"
      floatingLabelStyle={{fontSize:20}}
      floatingLabelText="Team Name"
      multiLine={true}
      rows={1}
      fullWidth={true}
      />
      </div>
      </div>

      </Dialog>
</div>
        );
    }
}
