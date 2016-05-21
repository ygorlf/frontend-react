import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router';
import Store from './reducers'
import '../smacss/main.styl';

import Home from './component/pages/home/Home';
import Showcase from './component/pages/showcase/Showcase';
import About from './component/pages/about/About';
import SocialProject from './component/pages/social-project/SocialProject';
import Layout from './component/layout/main/Main'

// Rendering
render((
  <Provider store={createStore(Store)}>
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path="/" component={Home} />
    		<Route path="/vitrine" component={Showcase}/>
        <Route path="/vitrine/:project_id" component={SocialProject}/>
    		<Route path="/sobre" component={About} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
