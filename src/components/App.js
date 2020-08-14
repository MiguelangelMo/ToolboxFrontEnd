import React from 'react';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Form from './Form';
import Message from './Message';
import store from '../store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router className="div">
        <Switch>
          <Route exact path={"/"} component={Form} />
          <Route exact path={"/message"} component={Message} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
