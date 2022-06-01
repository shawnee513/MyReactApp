import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage,
} from './pages';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-Header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter">
              <CounterButtonPage />
            </Route>
            <Route path="/people-list">
              <PeopleListPage />
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route path="/user">
              <UserProfilePage />
            </Route>
            <Route path="/forms">
              <Router>
                <FormsNavBar />
                <Route path="/forms/controlled">
                  <ControlledFormPage />
                </Route>
                <Route path="/forms/uncontrolled">
                  <UncontrolledFormPage />
                </Route>
              </Router>
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
