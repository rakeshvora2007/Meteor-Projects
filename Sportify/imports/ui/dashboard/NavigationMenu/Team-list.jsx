import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import Divider from 'material-ui/Divider';

import {List, ListItem} from 'material-ui/List';

const style = {
    height: 50,
    width: 50,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class TeamList extends Component {
    render() {
        return (
            <div>
            <div className='row'>
                <div className='col s2 m2 l2'>
                    <List>
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar
                                    src="barcelona.jpg"
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
                            <span>{this.props.cg.team} </span>
                            <span>Rating ***</span>
                        </h3>
                    </a>
                    <p>{this.props.cg.location}</p>
                    <p>{this.props.cg.sport}</p>
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
            </div>
        )
    }
}
