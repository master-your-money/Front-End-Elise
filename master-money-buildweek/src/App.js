import React from 'react';
import './App.css';
import MemberList from './components/CardList'
import BudgetCard from './components/BudgetCard'
import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Master Your Money</h1>
      <Link to={`/`} ><h2>Users</h2></Link>
      <Link to={`/budget`} ><h2>Budget</h2></Link>
      <Route exact path="/" component={MemberList} />
      <Route exact path="/budget" component={BudgetCard} />
    </div>
  );
}

export default App;
