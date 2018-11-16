import { combineReducers } from 'redux';
import appReducer from './app';
import mailReducer from './mail';
import blogReducer from './blog';

const rootReducer = combineReducers({
    app: appReducer,
    mail: mailReducer,
    blog: blogReducer,
});

export default rootReducer;
