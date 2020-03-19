function SA1() {	

	if (window.innerWidth>900) {
		document.getElementsByClassName("CI")[0].style.height = "6vw";
		document.getElementsByClassName("CI")[0].style.marginTop = "-20vw";	
		document.getElementsByClassName("CI")[0].style.marginLeft = "4vw";

		document.getElementsByClassName("popup_CIi")[0].style.width = "100%";
		document.getElementsByClassName("popup_CIi")[0].style.height = "100%";
		document.getElementsByClassName("popup_CIi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_CIi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_CIi")[0].style.paddingTop = "1.5vw";
	} else {
		document.getElementsByClassName("CI")[0].style.height = "6vw";
		document.getElementsByClassName("CI")[0].style.marginTop = "-23vw";	
		document.getElementsByClassName("CI")[0].style.marginLeft = "2vw";

		document.getElementsByClassName("popup_CIi")[0].style.width = "100%";
		document.getElementsByClassName("popup_CIi")[0].style.height = "100%";
		document.getElementsByClassName("popup_CIi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_CIi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_CIi")[0].style.paddingTop = "1.5vw";

	}

}

export default SA1