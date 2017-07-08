import React, {Component} from 'react';
import { ViewGames } from '../NavigationMenu/ViewGames';
import ViewResults from '../NavigationMenu/ViewResults';
import CardExampleWithAvatar from '../Feed';

class Display extends Component {

    ComponentHandler = () =>{
        let name1 = this.props.name;
        if (name1 == 'Rakesh') {
            return <ViewGames />;
        } else {
            return <CardExampleWithAvatar />;
        }
    }

    render() {
        return (<span>{this.ComponentHandler()}</span>);

    }
}
export default Display;
