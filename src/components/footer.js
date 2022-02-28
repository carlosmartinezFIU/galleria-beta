import style from '../global-style.css';
import backLogo from '../assets/shared/icon-next-button.svg';
import forwardLogo from '../assets/shared/icon-back-button.svg';

function footerSection(){
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer_container");

    let getUpper = document.getElementById("left_upper_text");
    let getlower = document.getElementById("left_lower_text");


    const leftWrapper = document.createElement("div");
    leftWrapper.classList.add("left_wrapper");
    let topTitle = document.createElement("p");
    topTitle.innerText = getUpper.innerText;
    topTitle.classList.add("top_title");

    let bottomName = document.createElement("p");
    bottomName.innerText = getlower.innerText;
    bottomName.classList.add("bottom_name");


    const rightWrapper = document.createElement("div");
    rightWrapper.classList.add("right_wrapper");
    let forward = document.createElement("img");
    forward.src = forwardLogo;
    forward.id = "forward_button";

    let back = document.createElement("img");
    back.src = backLogo;
    back.id = "back_button";


    leftWrapper.append(topTitle, bottomName);
    rightWrapper.append(forward, back);

    footerContainer.append(leftWrapper, rightWrapper);
    return footerContainer;
}

 export function loadFooter(){
    const getSlide = document.getElementById("slide_page");
    const footer = footerSection();

    getSlide.append(footer);
}