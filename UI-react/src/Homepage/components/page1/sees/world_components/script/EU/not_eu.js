function not_EU() {
    if (window.innerWidth>900) {
        document.getElementsByClassName("BB")[0].style.height = "5vw";
        document.getElementsByClassName("BB")[0].style.marginTop = "-26.5vw";
        document.getElementsByClassName("BB")[0].style.marginLeft = "18vw";

        document.getElementsByClassName("ND")[0].style.height = "3vw";
        document.getElementsByClassName("ND")[0].style.marginTop = "-22vw";
        document.getElementsByClassName("ND")[0].style.marginLeft = "19vw";

        document.getElementsByClassName("popup_EUi")[0].style.border = "none";
        document.getElementsByClassName("popup_EUi")[0].style.width = "0%";
        document.getElementsByClassName("popup_EUi")[0].style.height = "0%";
        document.getElementsByClassName("popup_EUi")[0].style.padding = "0";
    } else {
        document.getElementsByClassName("BB")[0].style.height = "5vw";
        document.getElementsByClassName("BB")[0].style.marginTop = "-30.5vw";
        document.getElementsByClassName("BB")[0].style.marginLeft = "18vw";

        document.getElementsByClassName("ND")[0].style.height = "3vw";
        document.getElementsByClassName("ND")[0].style.marginTop = "-25.8vw";
        document.getElementsByClassName("ND")[0].style.marginLeft = "19vw";

        document.getElementsByClassName("popup_EUi")[0].style.border = "none";
        document.getElementsByClassName("popup_EUi")[0].style.width = "0%";
        document.getElementsByClassName("popup_EUi")[0].style.height = "0%";
        document.getElementsByClassName("popup_EUi")[0].style.padding = "0";		

    }
}

export default not_EU