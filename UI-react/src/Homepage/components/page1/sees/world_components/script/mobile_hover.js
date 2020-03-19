import NA1 from './NA/na';
import not_NA from './NA/not_na';
import NA_page from './NA/NA_page';

import SA1 from './SA/sa';
import not_SA from './SA/not_sa';
import SA_page from './SA/SA_page';

import EU1 from './EU/eu';
import not_EU from './EU/not_eu';
import EU_page from './EU/EU_page';

import AF1 from './AF/af';
import not_AF from './AF/not_af';
import AF_page from './AF/AF_page';

import ME1 from './ME/me';
import not_ME from './ME/not_me';
import ME_page from './ME/ME_page';

import AS1 from './AS/as';
import not_AS from './AS/not_as';
import AS_page from './AS/AS_page';

let current = false;


function MobileHover (cont) {
    if(window.innerWidth>900) {
        switch (cont) {
            case 'NA':
                NA_page();
                break
            case 'SA':
                SA_page();
                break
            case 'EU':
                EU_page();
                break
            case 'AF':
                AF_page();
                break
            case 'ME':
                ME_page();
                break
            case 'AS':
                AS_page();                    
        }
    } else {
        if (current) {
            document.getElementsByClassName(current)[0].style.width="0";
            document.getElementsByClassName(current)[0].style.height = "0";
            document.getElementsByClassName(current)[0].style.border = "none";
            document.getElementsByClassName(current)[0].style.padding = "0";
        }

        switch (cont) {
            case 'NA':
                NA1();
                current = "popup_NAi";
                break
            case 'SA':               
                SA1();
                current = "popup_SAi";
                break
            case 'EU':               
                EU1();
                current = "popup_EUi";
                break
            case 'AF':
                AF1();
                current = "popup_AFi";
                break
            case 'ME':
                ME1();
                current = "popup_MEi";
                break
            case 'AS':
                AS1(); 
                current = "popup_ASi"; 
        }         

    }
}

export default MobileHover