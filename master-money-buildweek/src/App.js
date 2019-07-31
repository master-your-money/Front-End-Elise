import React from 'react';
import './App.css';
import MemberList from './components/CardList'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Master Your Money</h1>
      <Route exact path="/" component={MemberList} />
    </div>
  );
}

export default App;
