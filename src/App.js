import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Link to="/counter">Go to Counter Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/counter">
          <CounterButtonPage />
        </Route>
        <Route path="/people-list">
          <PeopleListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
