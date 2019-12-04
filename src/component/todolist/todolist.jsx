import React from 'react';
import AddTodo from '../addtodo/addtodo';
import TodoListItem from '../todolistitem/todolistitem';
import {connect} from 'react-redux';
import {loadTodoList, addTodo, removeTodo} from '../../store/todolist/todolist_action';


class Todolist_Base extends React.Component {
    makeList(){
        const storeList = this.props.todolist;
        let counter = 0;
        let list = storeList.map(todoObj => {
            counter++;
            return <TodoListItem key = {counter} todoObj = {todoObj} removeTodo = {this.props.removeTodo}/>
        })
        return list;
    }
    render(){
        console.log('store props', this.props)
        let todoList = this.makeList();
        return(
            <div>
                <AddTodo addTodo = {this.props.addTodo}/>
                <ul>
                    List
                    {todoList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const todolist = state.todolist
    return todolist;
}

const mapDispatchToProps = dispatch => {
    return {
        loadTodo: list => dispatch(loadTodoList(list)),
        addTodo: todo => dispatch(addTodo(todo)),
        removeTodo: id => dispatch(removeTodo(id)) 
    }
}

const Todolist = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todolist_Base);

export default Todolist;