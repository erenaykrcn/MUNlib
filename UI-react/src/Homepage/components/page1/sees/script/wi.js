function wi(){
	if (window.innerWidth>900) {
		document.getElementsByClassName("hoveron")[0].style.height = "20vw";
		document.getElementsByClassName("hoveron")[0].style.width = "20vw";
		document.getElementsByClassName("hoveron")[0].style.padding = "6vw";
		document.getElementsByClassName("hoveron")[0].style.fontSize = "1vw";
	} else {
		document.getElementsByClassName("hoveron")[0].style.height = "23vw";
		document.getElementsByClassName("hoveron")[0].style.width = "23vw";
		document.getElementsByClassName("hoveron")[0].style.padding = "5vw";
		document.getElementsByClassName("hoveron")[0].style.fontSize = "1.7vw";

	}
}

export default wi