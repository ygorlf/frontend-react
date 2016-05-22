import React from 'react';
import TopMenu from '../../containers/top-menu'
import Footer from './footer'

const Principal = props => (
 <div>
     <TopMenu/>
     {props.children}
     <Footer/>
 </div>
);

export default Principal;
