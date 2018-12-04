import React from 'react';
import SignupForm from './containers/SignupForm';
import './App.css';
import AlbumList from './containers/AlbumList';
import TodoApp from './containers/TodoApp';

const App = () => (
  <div className="container">
    {/* <h1>Signup Form</h1>
    <hr />
    <SignupForm />
    <h1>Album List</h1>
    <hr />
    <AlbumList /> */}
    <h1>Todo App</h1>
    <hr />
    <TodoApp />
  </div>
);

export default App;
