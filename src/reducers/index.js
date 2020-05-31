import {combineReducers} from 'redux';
import {questions} from './questionReducer';
import {users} from './userReducer';
import authedUser from './authedUser';




export default combineReducers({
    users,
    questions,  authedUser
})