import React from 'react';
import './App.css';
import MemberList from './components/CardList'
import BudgetCard from './components/BudgetCard'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Master Your Money</h1>
      <Route exact path="/" component={MemberList} />
      <Route exact path="/budget" component={BudgetCard} />
    </div>
  );
}

export default App;
