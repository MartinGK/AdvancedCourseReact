import { combineReducers } from 'redux';
import commentsReducer from 'store/reducers/comments';
import authReducer from 'store/reducers/auth';

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
})