import React, { Component } from 'react';

class Header extends Component {
    componentDidMount(){
        setTimeout(() => {
            document.getElementsByClassName("heading")[0].style.marginTop = "0";      
        }
    )}     
    render() {
      return (
          <div>
            <div className="social">
                <i className="fab fa-instagram"></i><a href="http://instagram.com/yellowshadow_/">/yellowshadow_</a>
                <i className="fas fa-envelope-open-text"></i>/erenay.karacan@tum.de
                <i className="fas fa-phone"></i>/+90 542 713 2697		
            </div>
            <div className="heading" onMouseOver={()=>{
              document.getElementsByClassName("heading")[0].style.marginTop = "-10vw";
            }} onMouseOut={()=>{
              document.getElementsByClassName("heading")[0].style.marginTop = "0vw";
            }}>
                See all the Documents
            </div>
            <div className="all-ass">
            <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/as1.png" className="all-as1"></img>
            <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/as2.png" className="all-as2"></img>
            </div>
         </div>
      )
    }
}

export default Header