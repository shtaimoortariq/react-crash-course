import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItems extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        delTodo: PropTypes.func.isRequired,
        markComplete: PropTypes.func.isRequired
    }

    checkStatus = () => {
        return {
            padding: '5px',
            backgroundColor: '#f4f4f4',
            borderBottom: 'dotted 1px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.checkStatus()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button style={buttonStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

const buttonStyle = {
    backgroundColor: 'red',
    padding: '5px 10px',
    float: 'right',
    borderRadius: '10px',
    border: 'none',
    color: 'white'
}



export default TodoItems
