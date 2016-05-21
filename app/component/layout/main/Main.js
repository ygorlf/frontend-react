import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header'

const Main = props => (
  <section>
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </section>
);

export default Main;
