import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <header style={todoStyle}>
                <h4>TodoList</h4>
                <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
            </header>

        </div>
    )
}

const todoStyle = {
    padding: '5px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black'
}
