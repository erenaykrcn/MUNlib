import React, {Component} from "react";

import NA_page from './world_components/script/NA/NA_page';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
            <div className="bottom_nav">
                <div classNeme="white_nav">
                    <div className="swhole" onClick={()=>{window.location = "/all"}}>see the whole library</div>
                    <div className="swhole" onClick={NA_page}>see sections <i className="fas fa-angle-down"></i></div>
                    <div className="swhole" onClick={()=>{window.location = "/contact"}}>contact</div>
                </div>

            </div>

            <div className ="ball_div">
                <img src="https://s3-eu-central-1.amazonaws.com/munlib/svg/ball@1000x.png" 
                    className="ball"></img>
                <p className="logo">MUNlib Turkey</p>
            </div>
            <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/as3.png" className = "as3"></img>
        </div>

        );
    }
  }
  
  export default Footer;   