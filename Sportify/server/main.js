import { Meteor } from 'meteor/meteor';
import { CreateGame } from '../imports/api/createGame';

Meteor.startup(() => {
    Meteor.publish('createGame', function() {
        return CreateGame.find({}).fetch();
    })
});
