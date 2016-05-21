import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './main.styl';

const Main = props => (
  <section>
      <Header/>
      <main styleName='thename'>
        {props.children}
      </main>
      <Footer/>
  </section>
)

export default CSSModules(Main, styles);
