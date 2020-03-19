import React, {Component} from "react";

import Header from "./sees/Header";
import World from "./sees/World";
import Footer from './sees/Footer';


class Page1 extends Component {
    render() {
      return (
        <div className="page1">
            <Header/>
            <World/>
            <Footer/>
        </div>

        );
    }
  }
  
  export default Page1;        