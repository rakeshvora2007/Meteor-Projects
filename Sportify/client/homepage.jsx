import React from 'react';
import {Meteor} from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from '../imports/ui/dashboard/dashboard';
import App from '../imports/ui/App';

injectTapEventPlugin();

Meteor.startup(() => {
  render(<Dashboard />,document.getElementById('render-target'));
})
