function not_AF() {
	if (window.innerWidth>900) {
		document.getElementsByClassName("AF")[0].style.height = "4vw";
		document.getElementsByClassName("AF")[0].style.marginTop = "-20.3vw";
		document.getElementsByClassName("AF")[0].style.marginLeft = "14Vw";

		document.getElementsByClassName("popup_AFi")[0].style.border = "none";
		document.getElementsByClassName("popup_AFi")[0].style.width = "0%";
		document.getElementsByClassName("popup_AFi")[0].style.height = "0%";
		document.getElementsByClassName("popup_AFi")[0].style.padding = "0";
	} else {
		document.getElementsByClassName("AF")[0].style.height = "4vw";
		document.getElementsByClassName("AF")[0].style.marginTop = "-23vw";
		document.getElementsByClassName("AF")[0].style.marginLeft = "14vw";
		document.getElementsByClassName("AF")[0].style.zIndex = "10";

		document.getElementsByClassName("popup_AFi")[0].style.border = "none";
		document.getElementsByClassName("popup_AFi")[0].style.width = "0%";
		document.getElementsByClassName("popup_AFi")[0].style.height = "0%";
		document.getElementsByClassName("popup_AFi")[0].style.padding = "0";

	}
}


export default not_AF