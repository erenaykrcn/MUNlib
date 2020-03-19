function not_SA() {
	if (window.innerWidth>900) {
		document.getElementsByClassName("CI")[0].style.height = "4vw";
		document.getElementsByClassName("CI")[0].style.marginTop = "-19vw";
		document.getElementsByClassName("CI")[0].style.marginLeft = "4vw";

		document.getElementsByClassName("popup_CIi")[0].style.border = "none";
		document.getElementsByClassName("popup_CIi")[0].style.width = "0%";
		document.getElementsByClassName("popup_CIi")[0].style.height = "0%";
		document.getElementsByClassName("popup_CIi")[0].style.padding = "0";
	} else {
		document.getElementsByClassName("CI")[0].style.height = "4vw";
		document.getElementsByClassName("CI")[0].style.marginTop = "-22vw";
		document.getElementsByClassName("CI")[0].style.marginLeft = "2vw";

		document.getElementsByClassName("popup_CIi")[0].style.border = "none";
		document.getElementsByClassName("popup_CIi")[0].style.width = "0%";
		document.getElementsByClassName("popup_CIi")[0].style.height = "0%";
		document.getElementsByClassName("popup_CIi")[0].style.padding = "0";

	}
}

export default not_SA