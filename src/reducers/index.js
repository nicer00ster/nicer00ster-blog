import { combineReducers } from 'redux';
import appReducer from './app';
import mailReducer from './mail';

const rootReducer = combineReducers({
    app: appReducer,
    mail: mailReducer,
});

export default rootReducer;
