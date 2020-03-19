function AS1() {	
	if (window.innerWidth>900) {	
		document.getElementsByClassName("AS")[0].style.height = "6vw";
		document.getElementsByClassName("AS")[0].style.marginTop = "-20.3vw";	
		document.getElementsByClassName("AS")[0].style.marginLeft = "22.5vw";

		document.getElementsByClassName("popup_ASi")[0].style.width = "100%";
		document.getElementsByClassName("popup_ASi")[0].style.height = "100%";
		document.getElementsByClassName("popup_ASi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_ASi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_ASi")[0].style.paddingTop = "1.5vw";
	} else {
		document.getElementsByClassName("AS")[0].style.height = "6vw";
		document.getElementsByClassName("AS")[0].style.marginTop = "-24vw";	
		document.getElementsByClassName("AS")[0].style.marginLeft = "25.5vw";

		document.getElementsByClassName("popup_ASi")[0].style.width = "100%";
		document.getElementsByClassName("popup_ASi")[0].style.height = "100%";
		document.getElementsByClassName("popup_ASi")[0].style.border = "2px solid whitesmoke";
		document.getElementsByClassName("popup_ASi")[0].style.padding = "2vw";
		document.getElementsByClassName("popup_ASi")[0].style.paddingTop = "1.5vw";

	}
}

export default AS1