import NA1 from './na';
import NA_page from './NA_page';


function NA_mobile() {
    if (window.innerWidth>900) {
        NA_page();
    } else {
        NA1();
        
    }
}