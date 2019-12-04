import React from 'react';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        let todoObj = this.makeListItemObj(this.state.value);
        this.props.addTodo(todoObj);
        this.setState({value: ''});
        event.preventDefault();
        }
    makeListItemObj(todo){
        return({ name: todo, status: false, remove: false})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
            Todo:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default AddTodo;


