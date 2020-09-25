import React, {Component} from 'react';
import TodoItem from './TodoItem'

export class Todo extends Component {
    render() {
        console.log(this.props.todos)
         return this.props.todos.map((t) => (
             <TodoItem key={t.id} t={t} change={this.props.change} remove={this.props.remove}/>
         ))
    }
}

export default Todo;
