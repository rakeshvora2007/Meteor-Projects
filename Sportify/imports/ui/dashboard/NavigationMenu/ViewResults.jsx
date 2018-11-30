import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const style = {
    height: 50,
    width: 50,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const ViewResults = () => (
    <div>
        <Paper style={{margin:20}} zDepth={4}>
            <List>
                <div className='row'>
                    <div className='col s2 m2 l2'>
                        <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={
                                    <Avatar
                                        src="chelsea-vs-arsenal.jpg"
                                        size={30}
                                        style={style}
                                    />
                                }
                            >
                            </ListItem>
                        </List>
                    </div>
                    <div className='col s4 m4 l4'>
                        <a href='#' >
                            <h3>
                                <span>Rakesh Jain </span>
                                <span>Rating ***</span>
                            </h3>
                        </a>
                        <p>Surat, Gujrat</p>
                        <p>Football Game</p>
                    </div>
                    <div className='col s4 m4 l4'>
                        <p>Location</p>
                        <p>Time and Date</p>
                        <p>How many Request were sent</p>
                    </div>
                    <div className='col s2 m2 l2'>
                        <p>Some Icon will be displayed here</p>
                    </div>
                </div>
                <Divider />
                <div className='row'>
                    <div className='col s2 m2 l2'>
                        <Paper style={style} zDepth={3} circle={true} />
                    </div>
                    <div className='col s4 m4 l4'>
                        <a href='#' >
                            <h3>
                                <span>Dhaval Jhardosh </span>
                                <span>Rating **</span>
                            </h3>
                        </a>
                        <p>Fullerton, California</p>
                        <p>Hockey Game</p>
                    </div>
                    <div className='col s4 m4 l4'>
                        <p>Location</p>
                        <p>Time and Date</p>
                        <p>How many Request were sent</p>
                    </div>
                    <div className='col s2 m2 l2'>
                        <p>Some Icon will be displayed here</p>
                    </div>
                </div>
                <Divider />
                <div className='row'>
                    <div className='col s2 m2 l2'>
                        <Paper style={style} zDepth={3} circle={true} />
                    </div>
                    <div className='col s4 m4 l4'>
                        <a href='#' >
                            <h3>
                                <span>Nilanj Gandhi </span>
                                <span>Rating ****</span>
                            </h3>
                        </a>
                        <p>Baroda, GJ</p>
                        <p>Carrom Game</p>
                    </div>
                    <div className='col s4 m4 l4'>
                        <p>Location</p>
                        <p>Time and Date</p>
                        <p>How many Request were sent</p>
                    </div>
                    <div className='col s2 m2 l2'>
                        <p>Some Icon will be displayed here</p>
                    </div>
                </div>
            </List>
        </Paper>
    </div>
);

export default ViewResults;
