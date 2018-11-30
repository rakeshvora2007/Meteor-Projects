import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {createContainer} from 'meteor/react-meteor-data'
import { Link } from 'react-router';
import {CreateGame} from '../../../api/createGame';
import TeamList from './Team-list'

const style = {
    height: 50,
    width: 50,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export class ViewGames extends Component {

    resolutions(){
        return CreateGame.find().fetch();
    }


 renderViewGames(){
     let cG = this.resolutions();
     if(cG.length < 1){
         return (<div>Loading</div>)
     }
     console.log(this.props.createGame);
  return this.resolutions().map((cg) => (
   <TeamList key={cg._id} cg={cg} />
  ));
 }

 render() {
     return (
         <div>
          <Paper style={{margin:20}} zDepth={4}>
           <List>
            <div>
               {this.renderViewGames()}
            </div>
           </List>
          </Paper>
         </div>
     );
 }

}

ViewGames.propTypes = {
 createGame: PropTypes.array.isRequired,
}

export default createContainer(() => {
Meteor.subscribe('createGame');
 return {
     createGame: CreateGame.find({}).fetch(),
 };
}, ViewGames);