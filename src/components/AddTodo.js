import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }


    state = {
        title: ''
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.addTodo} style={formStyle}>
                <input type='text' name='title' placeholder='Add Todo.....' value={this.state.title} onChange={this.handleInput} style={{ flex: 10, padding: '5px' }} />
                <input type='submit' title='Submit' value='Submit' style={buttonStyle} />
            </form>
        )
    }
}

const formStyle = {
    display: 'flex',
}

const buttonStyle = { flex: 1, padding: '5px', color: 'white', backgroundColor: 'grey', border: 'none' }

export default AddTodo
