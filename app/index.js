import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router';
import Main from './component/stateless/Main';
import Showcase from './component/stateless/Showcase';
import About from './component/stateless/About';
import Login from './component/stateless/Login';
import Header from './component/stateful/shared/Header';
import ProjectPage from './component/stateless/ProjectPage';
import '../style/main.styl';
import Store from './reducers'

// Rendering
render((
  <Provider store={createStore(Store)}>
    <Router history={browserHistory}>
      <Route component={Header}>
        <Route path="/" component={Main} />
    		<Route path="/showcase" component={Showcase}/>
        <Route path="/showcase/:project_id" component={ProjectPage}/>
    		<Route path="/about" component={About} />
    		<Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
