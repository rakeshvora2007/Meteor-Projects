import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import ViewGames from './NavigationMenu/ViewGames'

import GettingStartedExample from './Map';

const style = {
  marginRight: 20,
  marginTop: 20,
  marginLeft: 20,
  marginBottom: 20,
  labelColor: 'white'
};


const CardExampleWithAvatar = () => (
<div>
  <div>
  <Card style={style}>
    <CardHeader
      title="Rakesh Jain"
      subtitle="League Player"
      avatar="ST1.PNG"
      actAsExpander={true}
      showExpandableButton={true}
    >
    </CardHeader>
    <CardMedia expandable={true}>
      <GettingStartedExample />
    </CardMedia>
    <FloatingActionButton secondary={true} style={style} className='right'>
      <ContentAdd />
    </FloatingActionButton>
    <CardTitle title="King's Power Vs Lengend's Force" subtitle="Football Match" />
    <CardText expandable={true}>
      Write Whatever you think should be displayed here.
    </CardText>
    <CardActions>
      <RaisedButton label="Accept" primary={true} />
      <RaisedButton label="Decline" labelStyle={{color: 'white'}} buttonStyle={{backgroundColor:'Red'}} />
    </CardActions>
  </Card>
</div>
<div>
  <Card style={style}>
    <CardHeader
      title="AFC"
      subtitle="First Division Team"
      avatar="Olivier-Giroud-Arsenal-Injury-711368.jpg"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardMedia expandable={true}
      overlay={<CardTitle title="Fa Cup Winnner"/>}
    >
      <img src="chelsea-vs-arsenal.jpg" alt="Not Available"/>
    </CardMedia>
    <FloatingActionButton secondary={true} style={style} className='right'>
      <ContentAdd />
    </FloatingActionButton>
    <CardTitle title="Chelsea Vs Arsenal" subtitle="Football Match" />
    <CardText expandable={true}>
      Dream Match Begins.
    </CardText>
    <CardActions>
      <RaisedButton label="Accept" primary={true} />
      <RaisedButton label="Decline" labelStyle={{color: 'white'}} buttonStyle={{backgroundColor:'Red'}} />
    </CardActions>
  </Card>
  </div>
  <div>
  <Card style={style}>
    <CardHeader
      title="FCB"
      subtitle="La Liga Team"
      avatar="main-t.jpeg"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardMedia expandable={true}
      overlay={<CardTitle title="La Liga Winner"/>}
    >
      <img src="barcelona.jpg" alt="Not Available"/>
    </CardMedia>
    <FloatingActionButton secondary={true} style={style} className='right'>
      <ContentAdd />
    </FloatingActionButton>
    <CardTitle title="Barcelona Vs PSG" subtitle="Football Match" />
    <CardText expandable={true}>
      Write Whatever you think should be displayed here.
    </CardText>
    <CardActions>
      <RaisedButton label="Accept" primary={true} />
      <RaisedButton label="Decline" labelStyle={{color: 'white'}} buttonStyle={{backgroundColor:'Red'}} />
    </CardActions>
  </Card>
</div>
<div>
  <Card style={style}>
    <CardHeader
      title="Real Madrid"
      subtitle="First Class Professional Team"
      avatar="photo.jpg"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardMedia expandable={true}
      overlay={<CardTitle title="UCL Winner"/>}
    >
      <img src="nintchdbpict000297900511.jpg" alt="Not Available"/>
    </CardMedia>
    <FloatingActionButton secondary={true} style={style} className='right'>
      <ContentAdd />
    </FloatingActionButton>
    <CardTitle title="Real Madrid Vs Man City" subtitle="Football Match" />
    <CardText expandable={true}>
      Dream Match Begins.
    </CardText>
    <CardActions>
      <RaisedButton label="Accept" primary={true} />
      <RaisedButton label="Decline" labelStyle={{color: 'white'}} buttonStyle={{backgroundColor:'Red'}} />
    </CardActions>
  </Card>
  </div>
</div>
);

export default CardExampleWithAvatar;
