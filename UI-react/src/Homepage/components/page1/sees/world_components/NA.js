import React, {Component} from "react";

import NA1 from "./script/NA/na";
import not_NA from "./script/NA/not_na";
import NA_page from "./script/NA/NA_page";
import MobileHover from './script/mobile_hover'; 


class NA extends Component {
    render() {
      return (
        <div>

        <div className="popup_NA">
            <div className="popup_NAi" onMouseOver={NA1} onMouseOut={not_NA} onClick={NA_page}>
                <img src="https://s3-eu-central-1.amazonaws.com/munlib/svg/libr.svg" className="pad_popup"></img>
                <div className="see">See documents related to the <u><b>North American Continent</b></u></div>
            </div>
        </div>
        
        <img
                src="https://s3-eu-central-1.amazonaws.com/munlib/svg/NA@1000x.png" 
                className="NA" 
                onMouseOver={NA1} onMouseOut={not_NA} onClick={()=>MobileHover('NA')} ></img>

        </div>
      );
    }
  }
  
  export default NA;      