import {combineReducers} from 'redux';

import counter from './counter';
import ui from './ui';

const reduces = combineReducers({
  counter, ui
});

export default reduces;
