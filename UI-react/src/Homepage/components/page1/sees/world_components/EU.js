import React, {Component} from "react";

import EU1 from './script/EU/eu.js';
import not_EU from './script/EU/not_eu.js';
import EU_page from './script/EU/EU_page.js';
import MobileHover from './script/mobile_hover'; 


class EU extends Component {
    render() {
      return (
        <div>
            <div class="EU">
                <div class="popup_EU" >
                    <div class="popup_EUi" onMouseOver={EU1} onMouseOut={not_EU} onClick={EU_page}>
                        <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/eiffel.svg" class="pad_popup"></img>
                        <div class="see">See documents related to the <u><b>European Continent</b></u></div>
                    </div>
                </div>
                <img  src="https://s3-eu-central-1.amazonaws.com/munlib/svg/BB@1000x.png" 
                    class="BB" onMouseOver={EU1} onMouseOut={not_EU} onClick={()=>MobileHover('EU')} ></img>
                <img  src="https://s3-eu-central-1.amazonaws.com/munlib/svg/ND@1000x.png"
                    class="ND" onMouseOver={EU1} onMouseOut={not_EU} onClick={()=>MobileHover('EU')} ></img>
            </div>

        </div>
        );
    }
  }
  
export default EU;   