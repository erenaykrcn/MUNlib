import React, { Component } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class All extends Component {
    render() {
      return (
          <div>
            <Header/>
            <Content/>
            <Footer/>
         </div>
      )
    }
}

export default All