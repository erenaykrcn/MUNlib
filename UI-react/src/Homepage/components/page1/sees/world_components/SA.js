import React, {Component} from "react";

import SA1 from './script/SA/sa';
import not_SA from './script/SA/not_sa';
import SA_page from './script/SA/SA_page';
import MobileHover from './script/mobile_hover'; 


class SA extends Component {
    render() {
      return (
        <div>

          <div class="popup_CI" >
                <div class="popup_CIi" onMouseOver={SA1} onMouseOut={not_SA} onClick={SA_page}>
                    <img src="https://s3-eu-central-1.amazonaws.com/munlib/img/chr.png" class="pad_popup"></img>
                    <div class="see">See documents related to the <u><b>South American Continent</b></u></div>
                </div>
            </div>
            <img type="image/svg+xml" src="https://s3-eu-central-1.amazonaws.com/munlib/svg/SA.png"
                 class="CI" onMouseOver={SA1} onMouseOut={not_SA} onClick={()=>MobileHover('SA')}></img>
      
        </div>
        );
    }
  }
  
  export default SA;   