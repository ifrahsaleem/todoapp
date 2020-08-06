import React, {Component} from 'react';
import './App.css';
import TodoItem from './todoitem'
import todosData from './todosdata'

class App extends Component {

  constructor() {
    super ()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                      ...todo,
                      completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

  render () {
    const todoItems = this.state.todos.map (item => <TodoItem  item={item} key={item.id} handleChange={this.handleChange}/>) 
    return (
        <div className="App">    
          <h1> My Tasks </h1> 
          <hr/>
          <div className="todo-list-items">
            {todoItems}
          </div>
        </div>
      );
    }
}

export default App;
