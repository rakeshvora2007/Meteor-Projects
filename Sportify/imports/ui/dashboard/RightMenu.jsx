import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const style = {
  marginRight: 20,
};


const RightExample = () => (
<div>
  <div>
      <Paper style={{
    height: 200,
    width: 350,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
          position:'relative',
          overflow:'hidden'
  }} zDepth={4}><AppBar
          title="Upcoming Games"
          titleStyle={{textAlign:'left', fontSize:20, fontWeight:400, color: 'black'}}
          style={{
              backgroundColor:'rgba(255,255,255,0.8)',
              maxWidth:'100%',
              height:"50px",
              zIndex:3,
              position:'absolute'
          }}
          showMenuIconButton={false}
      /><img src="2.jpeg" width="100%" height="100%"/></Paper>
    </div>
    <div>
        <Paper style={{
            height: 200,
            width: 350,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            position:'relative',
            overflow:'hidden'
        }} zDepth={4}><AppBar
            title="Results"
            titleStyle={{textAlign:'left', fontSize:20, fontWeight:400, color: 'black'}}
            style={{
                backgroundColor:'rgba(255,255,255,0.8)',
                maxWidth:'100%',
                height:"50px",
                zIndex:3,
                position:'absolute'
            }}
            showMenuIconButton={false}
        /><img src="1.jpeg" width="100%"/></Paper>
    </div>
</div>
);

export default RightExample;
