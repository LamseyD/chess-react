import { combineReducers } from 'redux'

import chess from './chess';
import auth from './auth';

export default combineReducers({
    chess, auth
});