import React, {Component} from "react";

import ME1 from './script/ME/me.js';
import not_ME from './script/ME/not_me.js';
import ME_page from './script/ME/ME_page.js';
import MobileHover from './script/mobile_hover'; 

class ME extends Component {
    render() {
      return (
        <div>
            <div class="popup_ME" >
                <div class="popup_MEi" onMouseOver={ME1} onMouseOut={not_ME} onClick={ME_page}>
                    <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/city.png" class="pad_popup"></img>
                    <div class="see">See documents related to the <u><b>Middle Eastern Region</b></u></div>
                </div>
            </div>
            <img src="https://s3-eu-central-1.amazonaws.com/munlib/svg/ME@1000x.png" 
                class="ME" onMouseOver={ME1} onMouseOut={not_ME} onClick={()=>MobileHover('ME')} ></img>               
        </div>
        );
    }
  }
  
  export default ME;   