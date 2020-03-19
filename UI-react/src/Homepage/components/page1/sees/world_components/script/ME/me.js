function ME1() {	
	if (window.innerWidth>900) {
		document.getElementsByClassName("ME")[0].style.height = "6vw";
		document.getElementsByClassName("ME")[0].style.marginTop = "-22.8vw";	
		document.getElementsByClassName("ME")[0].style.marginLeft = "20vw";

		document.getElementsByClassName("popup_MEi")[0].style.width = "100%";
		document.getElementsByClassName("popup_MEi")[0].style.height = "100%";
		document.getElementsByClassName("popup_MEi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_MEi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_MEi")[0].style.paddingTop = "1.5vw";
	} else {
		document.getElementsByClassName("ME")[0].style.height = "6vw";
		document.getElementsByClassName("ME")[0].style.marginTop = "-25vw";	
		document.getElementsByClassName("ME")[0].style.marginLeft = "20vw";

		document.getElementsByClassName("popup_MEi")[0].style.width = "100%";
		document.getElementsByClassName("popup_MEi")[0].style.height = "100%";
		document.getElementsByClassName("popup_MEi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_MEi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_MEi")[0].style.paddingTop = "1.5vw";

	}
}


export default ME1