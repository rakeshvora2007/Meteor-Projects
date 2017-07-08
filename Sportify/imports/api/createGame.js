import { Mongo } from 'meteor/mongo';

export const CreateGame = new Mongo.Collection('createGame');



const CreateGameSchema = new SimpleSchema({
    sport: { type: String },
    team: { type: String },
    opponentTeam: { type: String },
    location: { type: String },
    time: { type: Number },
});

CreateGame.attachSchema(CreateGameSchema);
