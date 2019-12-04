import React from 'react';

class ListItem extends React.Component {
    render(){
        console.log('this object', this.props.todoObj)
        return(
            <li>
                <h2>{this.props.todoObj.name}</h2>
                <button>Complete</button>
                <button>Not Complete</button>
                <button onClick ={()=>this.props.removeTodo(this.props.todoObj.id)}>Remove</button>
            </li>
        )
    }
}

export default ListItem;