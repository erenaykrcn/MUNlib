import React, { Component } from 'react';

import Guides from './contents/Guides';
import Pros from './contents/Pros';
import Resos from './contents/Resos';
import Others from './contents/Others';

import openAll from './script/open_all';

class Content extends Component {
    render() {
      return (
        
        <div className="all_tabs">

            <div className="guids" onClick={()=>openAll('Guides')} >
                <p className="p1" id="see-guides">See Guides</p> <i className="fas fa-angle-down ic" id="gu-ang"></i>
            </div>

            <Guides/>

            <div className="pross" onClick={()=>openAll('Pros')}>
                <p className="p1" id="see-pros">See Procedures</p><i className="fas fa-angle-down ic" id="pros-ang"></i>
            </div>

            <Pros/>

            <div className="resoss" onClick={()=>openAll('Resos')}>
                <p className="p1" id="see-resos">See Legislative Documents </p><i className="fas fa-angle-down ic" id="resos-ang"></i>
            </div>

            <Resos/>

            <div className="others" onClick={()=>openAll('Others')}>
                <p className="p1" id="see-others">See Other Documents </p><i className="fas fa-angle-down ic" id="others-ang"></i>
            </div>

            <Others/>

        </div>

      )
    }
}

export default Content