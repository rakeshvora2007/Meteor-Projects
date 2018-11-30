import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card'
import RaiseButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, blue900} from 'material-ui/styles/colors';

const styles ={
  chip:{
    margin:4,
    color:'white',
  },
  wrapper:{
    display:'flex',
    flexWrap: 'wrap',
  },
  button:{
    margin:12,
  },
};

export default class Player extends Component {
  render(){
    return(
      <Card>
        <CardMedia
          overlay={<CardTitle title="John Smith" subtitle="Offence: 12 - Defence: 8" />}
        >
          <img src="messi.png" alt="" />
        </CardMedia>
        <CardText>
          <Chip
            backgroundColor={blue900}
            style={styles.chip}
          >
            <Avatar src="dj.jpg" />
            <b>Deletable Avatar Chip</b>
          </Chip>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
};
