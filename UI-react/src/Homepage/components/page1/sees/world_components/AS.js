import React, {Component} from "react";

import AS1 from './script/AS/as.js';
import not_AS from './script/AS/not_as.js';
import AS_page from './script/AS/AS_page.js';
import MobileHover from './script/mobile_hover'; 


class AS extends Component {
    render() {
      return (
        <div>
            <div class="popup_AS" >
                <div class="popup_ASi" onMouseOver={AS1} onMouseOut={not_AS} onClick={AS_page}>
                    <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/TAJ.png" class="pad_popup"></img>
                    <div class="see">See documents related to the <u><b>Middle Eastern Region</b></u></div>
                </div>
            </div>
            <img src="https://s3-eu-central-1.amazonaws.com/munlib/svg/AS@1000x.png" 
                class="AS" onMouseOver={AS1} onMouseOut={not_AS} onClick={()=>MobileHover('AS')} ></img>         
        </div>
        );
    }
  }
  
  export default AS;   