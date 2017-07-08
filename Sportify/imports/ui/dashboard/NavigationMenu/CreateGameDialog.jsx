import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { CreateGame } from '../../../api/createGame';

export default class CreateGameDialog extends Component {

    submitPlayer(event) {
        event.preventDefault();
        console.log(this);
        CreateGame.insert({
            sport: this.refs.sport.getValue(),
            team: this.refs.team.getValue(),
            opponentTeam: this.refs.opponentTeam.getValue(),
            location: this.refs.location.getValue(),
            time: this.refs.time.getValue()
        });
        console.log("Success player submitted!");
    }
    render(){
return(
<div>
    <Dialog
        title={this.props.title}
        modal={true}
        open={this.props.open}
        onRequestClose={this.props.onRequestClose}
      >
        <form onSubmit={this.submitPlayer.bind(this)}>
        <div className = "row">
            <div className = "col s12 l6">
                <TextField
                    className="validate"
                    type="text"
                    ref="sport"
                    id="sport"
                    hintText="Choose Sport"
                    floatingLabelStyle={{fontSize:20}}
                    floatingLabelText="Choose Sport"
                    multiLine={true}
                    rows={1}
                    fullWidth={true}
                />
            </div>
            <div className = "col s12 l6">
                <TextField
                    className="validate"
                    type="text"
                    ref="team"
                    id="team"
                    hintText="Choose Team"
                    floatingLabelStyle={{fontSize:20}}
                    floatingLabelText="Choose Team"
                    multiLine={true}
                    rows={1}
                    fullWidth={true}
                />
            </div>
        </div>
        <div className = "row">
            <div className = "col s12 l6">
                <TextField
                    className="validate"
                    type="text"
                    ref="opponentTeam"
                    id="opponentTeam"
                    hintText="Opponent Team"
                    floatingLabelStyle={{fontSize:20}}
                    floatingLabelText="Opponent Team"
                    multiLine={true}
                    rows={1}
                    fullWidth={true}
                />
            </div>
            <div className = "col s12 m6 l6">
                <TextField
                    className="validate"
                    type="text"
                    ref="location"
                    id="location"
                    hintText="Location"
                    floatingLabelStyle={{fontSize:20}}
                    floatingLabelText="Location"
                    multiLine={true}
                    rows={1}
                    fullWidth={true}
                />
            </div>
        </div>
        <div className = "row">
            <div className = "col s12 m12 l12">
                <TextField
                    className="validate"
                    type="number"
                    ref="time"
                    id="time"
                    hintText="Time"
                    floatingLabelStyle={{fontSize:20}}
                    floatingLabelText="Time"
                    multiLine={true}
                    rows={1}
                    fullWidth={true}
                />
            </div>
        </div>
            <div style={{ textAlign: 'right', padding: 8, margin: '24px -24px -24px -24px' }}>
                {this.props.actions}
            </div>
        </form>

      </Dialog>
</div>
        );
    }
}
