import { combineReducers } from 'redux'
import todolistReducers from './todolist/todolist_reducers';

export default combineReducers({
    todolist: todolistReducers
})