import React, { Component } from 'react';

class Footer extends Component {
    render() {
      return (
          <div>
            <div className="footer1">
                <div className="bottom_nav allnav">
                    <div className="white_nav">
                        <div className="swhole" onClick={()=>{window.location = "/"}}>see the homepage</div>
                        <div className="swhole" onClick={()=>{window.location = "/all"}}>see all the documents</div>
                </div>

                </div>

                <div className ="ball_div">
                    <img  src="https://s3-eu-central-1.amazonaws.com/munlib/svg/ball@1000x.png" className="ball"></img>
                    <p className="logo">MUNlib Turkey</p>
                </div>

            </div>
         </div>
      )
    }
}

export default Footer