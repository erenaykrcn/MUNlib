function not_NA() {

	if (window.innerWidth>900) {
		document.getElementsByClassName("NA")[0].style.height = "8vw";
		document.getElementsByClassName("NA")[0].style.marginTop = "-29vw";
		document.getElementsByClassName("NA")[0].style.marginLeft = "7vw";

		document.getElementsByClassName("popup_NAi")[0].style.border = "none";
		document.getElementsByClassName("popup_NAi")[0].style.width = "0%";
		document.getElementsByClassName("popup_NAi")[0].style.height = "0%";
		document.getElementsByClassName("popup_NAi")[0].style.padding = "0";
	} else {
		document.getElementsByClassName("NA")[0].style.height = "8vw";
		document.getElementsByClassName("NA")[0].style.marginTop = "-33vw";
		document.getElementsByClassName("NA")[0].style.marginLeft = "5vw";

		document.getElementsByClassName("popup_NAi")[0].style.border = "none";
		document.getElementsByClassName("popup_NAi")[0].style.width = "0%";
		document.getElementsByClassName("popup_NAi")[0].style.height = "0%";
		document.getElementsByClassName("popup_NAi")[0].style.padding = "0";

	}
}


export default not_NA