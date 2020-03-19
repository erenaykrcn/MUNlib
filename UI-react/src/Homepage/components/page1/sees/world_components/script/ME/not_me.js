function not_ME() {
	if (window.innerWidth>900) {
		document.getElementsByClassName("ME")[0].style.height = "4vw";
		document.getElementsByClassName("ME")[0].style.marginTop = "-21vw";
		document.getElementsByClassName("ME")[0].style.marginLeft = "19.5Vw";

		document.getElementsByClassName("popup_MEi")[0].style.border = "none";
		document.getElementsByClassName("popup_MEi")[0].style.width = "0%";
		document.getElementsByClassName("popup_MEi")[0].style.height = "0%";
		document.getElementsByClassName("popup_MEi")[0].style.padding = "0";
	} else {
		document.getElementsByClassName("ME")[0].style.height = "4vw";
		document.getElementsByClassName("ME")[0].style.marginTop = "-23vw";
		document.getElementsByClassName("ME")[0].style.marginLeft = "20vw";

		document.getElementsByClassName("popup_MEi")[0].style.border = "none";
		document.getElementsByClassName("popup_MEi")[0].style.width = "0%";
		document.getElementsByClassName("popup_MEi")[0].style.height = "0%";
		document.getElementsByClassName("popup_MEi")[0].style.padding = "0";

	}
}

export default not_ME