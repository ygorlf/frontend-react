import React from 'react';
import TopMenu from '../../containers/top-menu'
import Footer from './footer'

const Principal = props => (
 <div>
     <TopMenu/>
     <main>
       {props.children}
     </main>
     <Footer/>
 </div>
);

export default Principal;
