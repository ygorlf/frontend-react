import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './reducers/all-reducers'
import '../smacss/main.styl';

import Principal from './presentationals/layouts/principal'
import Home from './presentationals/pages/home';

const initialState = {
  Global:{
    isAuthenticated: false
  },
  TopMenu:{
    modalIsVisible: false
  }
}

const store = configureStore(initialState);

// Rendering
render((
   <Provider store={store}>
     <Router history={browserHistory}>
       <Route component={Principal}>
         <Route path="/" component={Home}/>
       </Route>
     </Router>
   </Provider>
), document.getElementById('root'));
