import galleriaLogo from '../assets/shared/logo.svg';
import style from '../global-style.css';

export function navigationBar(){
    const navWrapper = document.createElement("div");
    navWrapper.classList.add("navigation_wrapper");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("home_title_container");
    const title = document.createElement("img");
    title.src = galleriaLogo;

    const slideContainer = document.createElement("div");
    slideContainer.classList.add("home_slide_container");
    slideContainer.id = "home_slide_container";

    const slideAnchor = document.createElement("a");
    slideAnchor.classList.add("slide_anchor_button");
    slideAnchor.id = "slide_anchor_button";
    slideAnchor.href = 'slideshow.html';
    const slide = document.createElement("p");
    slide.innerText = "VIEW INFORMATION";
    slide.classList.add("slide_button");
    slide.id = "slide_button";
    slideAnchor.append(slide);



    const slideContainerStop = document.createElement("div");
    slideContainerStop.classList.add("home_slide_container_stop");
    slideContainerStop.id = "home_slide_container_stop";



    const slideAnchorHome = document.createElement("a");
    slideAnchorHome.classList.add("slide_anchor_home");
    slideAnchorHome.href = "index.html";
    const slideStop = document.createElement("p");
    slideStop.innerText = "HOME"; 
    slideAnchorHome.append(slideStop);

    titleContainer.append(title);
    slideContainer.append(slideAnchor);
    slideContainerStop.append(slideAnchorHome);

    navWrapper.append(titleContainer, slideContainer, slideContainerStop);

    return navWrapper;
}

export function stopSlide(){
    const getSlide = document.getElementById("home_slide_container");
    getSlide.style.display = "none";
    const getSlideStop = document.getElementById("home_slide_container_stop");
    getSlideStop.style.display = "block";
}
