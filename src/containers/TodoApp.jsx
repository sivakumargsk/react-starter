import React, { Component } from 'react';
import './TodoApp.css';

const AddTodo = props => (
  <form onSubmit={props.handleFormSubmit}>
    <input
      id="todo-text"
      type="text"
      name="todoText"
      value={props.todoText}
      onChange={props.handleTodoChange}
    />
    <button className="btn" type="submit">
      Add
    </button>
  </form>
);

const Todo = props => (
  <div>
    <input
      id={props.id}
      type="checkbox"
      checked={props.done}
      onChange={props.handleCheckboxChange(props.id)}
    />
    <span>{props.todo}</span>
    <button className="btn" onClick={props.handleRemoveTodo(props.id)}>
      X
    </button>
  </div>
);

const TodoFilters = props => (
  <div>
    <button
      className={props.filterType === 'ALL' ? 'btn active' : 'btn'}
      onClick={props.handleFilterClick('ALL')}
    >
      All
    </button>
    <button
      className={props.filterType === 'ACTIVE' ? 'btn active' : 'btn'}
      onClick={props.handleFilterClick('ACTIVE')}
    >
      Active
    </button>
    <button
      className={props.filterType === 'COMPLETED' ? 'btn active' : 'btn'}
      onClick={props.handleFilterClick('COMPLETED')}
    >
      Completed
    </button>
  </div>
);

const visibilityFilterTodos = (todos, filterType) => {
  switch (filterType) {
    case 'ACTIVE':
      return todos.filter(todo => !todo.done);
    case 'COMPLETED':
      return todos.filter(todo => todo.done);
    default:
      return todos;
  }
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      visibilityFilter: 'ALL',
      nextId: 1,
      todos: []
    };
  }

  handleAddTodoChange = e => {
    this.setState({ todoText: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { todoText, nextId, todos } = this.state;
    const newTodo = { id: nextId, todo: todoText, done: false };
    this.setState({
      todos: [...todos, newTodo],
      nextId: nextId + 1,
      todoText: ''
    });
  };

  handleCheckboxChange = id => () => {
    this.setState({
      todos: this.state.todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    });
  };

  handleRemoveTodo = id => () => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  handleFilterClick = type => () => {
    this.setState({ visibilityFilter: type });
  };

  render() {
    const { todoText, todos, visibilityFilter } = this.state;
    const filteredTodos = visibilityFilterTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo
          todoText={todoText}
          handleTodoChange={this.handleAddTodoChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div>
          {filteredTodos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              handleCheckboxChange={this.handleCheckboxChange}
              handleRemoveTodo={this.handleRemoveTodo}
            />
          ))}
        </div>
        <TodoFilters
          filterType={visibilityFilter}
          handleFilterClick={this.handleFilterClick}
        />
      </div>
    );
  }
}

export default TodoApp;
