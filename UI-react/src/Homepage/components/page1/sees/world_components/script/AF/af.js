function AF() {	
	if (window.innerWidth>900) {
		document.getElementsByClassName("AF")[0].style.height = "6vw";
		document.getElementsByClassName("AF")[0].style.marginTop = "-21vw";	
		document.getElementsByClassName("AF")[0].style.marginLeft = "13vw";
		document.getElementsByClassName("AF")[0].style.zIndex = "90";

		document.getElementsByClassName("popup_AFi")[0].style.width = "100%";
		document.getElementsByClassName("popup_AFi")[0].style.height = "100%";
		document.getElementsByClassName("popup_AFi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_AFi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_AFi")[0].style.paddingTop = "1.5vw";
	} else {
		document.getElementsByClassName("AF")[0].style.height = "6vw";
		document.getElementsByClassName("AF")[0].style.marginTop = "-24vw";	
		document.getElementsByClassName("AF")[0].style.marginLeft = "14vw";
		document.getElementsByClassName("AF")[0].style.zIndex = "90";

		document.getElementsByClassName("popup_AFi")[0].style.width = "100%";
		document.getElementsByClassName("popup_AFi")[0].style.height = "100%";
		document.getElementsByClassName("popup_AFi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_AFi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_AFi")[0].style.paddingTop = "1.5vw";

	}
}

export default AF