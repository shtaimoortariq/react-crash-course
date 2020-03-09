import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

export class Todo extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        delTodo: PropTypes.func.isRequired,
        markComplete: PropTypes.func.isRequired
    }

    render() {
        return this.props.todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ))
    }
}

export default Todo
