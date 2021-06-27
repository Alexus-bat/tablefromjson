import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ExampleJSON from './pages/ExampleJSON';
import MainPage from './pages/MainPage';


import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
          <Switch>
            <Route component={MainPage} path='/' exact />
            <Route component={ExampleJSON} path='/example' exact />
            <Redirect to='/' />
          </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
