import React, {Component} from "react";

import AF1 from './script/AF/af.js';
import not_AF from './script/AF/not_af.js';
import AF_page from './script/AF/AF_page.js';
import MobileHover from './script/mobile_hover'; 


class AF extends Component {
    render() {
      return (
      <div>
      <div class="popup_AF" >
        <div class="popup_AFi" onMouseOver={AF1} onMouseOut={not_AF} onClick={AF_page}>
              <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/giza.png" class="pad_popup"></img>
              <div class="see">See documents related to the <u><b>African Continent</b></u></div>
        </div>
      </div>
      <img src="https://s3-eu-central-1.amazonaws.com/munlib/svg/AF@1000x.png"
          class="AF"  onMouseOver={AF1} onMouseOut={not_AF} onClick={()=>MobileHover('AF')}></img>
      </div>    
        );
    }
  }
  
  export default AF;   