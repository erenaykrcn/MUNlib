function not_AS() {
	if (window.innerWidth>900) {	
		document.getElementsByClassName("AS")[0].style.height = "4vw";
		document.getElementsByClassName("AS")[0].style.marginTop = "-19.5vw";
		document.getElementsByClassName("AS")[0].style.marginLeft = "23.3Vw";

		document.getElementsByClassName("popup_ASi")[0].style.border = "none";
		document.getElementsByClassName("popup_ASi")[0].style.width = "0%";
		document.getElementsByClassName("popup_ASi")[0].style.height = "0%";
		document.getElementsByClassName("popup_ASi")[0].style.padding = "0";
	} else {
		document.getElementsByClassName("AS")[0].style.height = "4vw";
		document.getElementsByClassName("AS")[0].style.marginTop = "-22vw";
		document.getElementsByClassName("AS")[0].style.marginLeft = "25.5Vw";

		document.getElementsByClassName("popup_ASi")[0].style.border = "none";
		document.getElementsByClassName("popup_ASi")[0].style.width = "0%";
		document.getElementsByClassName("popup_ASi")[0].style.height = "0%";
		document.getElementsByClassName("popup_ASi")[0].style.padding = "0";

	}
}

export default not_AS