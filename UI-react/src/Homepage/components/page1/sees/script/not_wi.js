function not_wi() {
	if (window.innerWidth>900) {
		document.getElementsByClassName("hoveron")[0].style.height = "15vw";
		document.getElementsByClassName("hoveron")[0].style.width = "15vw";
		document.getElementsByClassName("hoveron")[0].style.padding = "4vw";
	} else {
		document.getElementsByClassName("hoveron")[0].style.height = "20vw";
		document.getElementsByClassName("hoveron")[0].style.width = "20vw";
		document.getElementsByClassName("hoveron")[0].style.padding = "4vw";

	}
}


export default not_wi