import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
// import * as uuid from 'uuid';


import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './Layout/Header';
import About from './Pages/About';

import './App.css';

export class App extends Component {

  state = {
    todos: []
  }


  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5').then(res => {
      console.log(res.data);
      this.setState({ todos: res.data })
    })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(x => {
        if (x.id === id) {
          x.completed = !x.completed;
        }
        return x;
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      this.setState({ todos: [...this.state.todos.filter(x => x.id !== id)] })
    })
    
  }

  addTodo = (title) => {
    const newTodos = {
      title,
      completed: false
    }
    axios.post('http://jsonplaceholder.typicode.com/todos', newTodos).then(res => {
      this.setState({ todos: [...this.state.todos, res.data] })
    })
  }

  render() {
    return (
      <Router>

        <Header />
        <Route
          exact
          path="/"
          render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )}

        />

        <Route
          path="/about"
          component={About}

        />

      </Router>
    )
  }
}

export default App
