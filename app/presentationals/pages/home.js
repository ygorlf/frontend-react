import React from 'react';
import styles from './home.styl'
import CSSModules from 'react-css-modules';

const Home = props => (
 <div>
     <h1>Hello World</h1>
 </div>
);

export default CSSModules(Home, styles);
