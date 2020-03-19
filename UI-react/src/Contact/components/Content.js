import React, { Component } from 'react';

class Content extends Component {
    componentDidMount(){
        setInterval(() => {
            document.getElementById("anm").style.width = "100%";
        });
    }
    render() {
      return (
          <div className="c-cont" id="anm">
              <div className="c-cont-inner cll">You can contact me the best via mail:</div>
              <div className="c-cont-inner"><i className="fas fa-envelope-open-text"></i>/erenay.karacan@tum.de</div>

              <div className="c-cont-inner cll">Other ways to contact me:</div>
              <div className="c-cont-inner"><i className="fab fa-instagram"></i>
                <a href="http://instagram.com/yellowshadow_/">/yellowshadow_</a>
              </div>
              <div className="c-cont-inner">
                <i className="fas fa-phone"></i>/+90 542 713 2697	
              </div>

              <div className="c-cont-inner cll">Also feel free to examine my portfolio:</div>

              <div className="c-cont-inner"><a href="https://discover-blogworld.herokuapp.com/about/" className="portf">My Portfolio</a></div>

         </div>
      )
    }
}

export default Content