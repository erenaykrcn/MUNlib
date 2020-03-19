function NA1() {	

	if (window.innerWidth>900) {

		document.getElementsByClassName("popup_NAi")[0].style.width = "100%";
		document.getElementsByClassName("popup_NAi")[0].style.height = "100%";
		document.getElementsByClassName("popup_NAi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_NAi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_NAi")[0].style.paddingTop = "1.5vw";

		document.getElementsByClassName("NA")[0].style.height = "10vw";
		document.getElementsByClassName("NA")[0].style.marginTop = "-30.5vw";	
		document.getElementsByClassName("NA")[0].style.marginLeft = "7vw";
	} else {

		document.getElementsByClassName("popup_NAi")[0].style.width = "100%";
		document.getElementsByClassName("popup_NAi")[0].style.height = "100%";
		document.getElementsByClassName("popup_NAi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_NAi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_NAi")[0].style.paddingTop = "1.5vw";

		document.getElementsByClassName("NA")[0].style.height = "13vw";
		document.getElementsByClassName("NA")[0].style.marginTop = "-34vw";	
		document.getElementsByClassName("NA")[0].style.marginLeft = "5vw";

	}
}


export default NA1