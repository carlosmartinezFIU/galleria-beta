/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFooter": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _global_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-style.css */ "./src/global-style.css");
/* harmony import */ var _assets_shared_icon_next_button_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/shared/icon-next-button.svg */ "./src/assets/shared/icon-next-button.svg");
/* harmony import */ var _assets_shared_icon_back_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/shared/icon-back-button.svg */ "./src/assets/shared/icon-back-button.svg");




function footerSection() {
  var footerContainer = document.createElement("div");
  footerContainer.classList.add("footer_container");
  var getUpper = document.getElementById("left_upper_text");
  var getlower = document.getElementById("left_lower_text");
  var leftWrapper = document.createElement("div");
  leftWrapper.classList.add("left_wrapper");
  var topTitle = document.createElement("p");
  topTitle.innerText = getUpper.innerText;
  topTitle.classList.add("top_title");
  var bottomName = document.createElement("p");
  bottomName.innerText = getlower.innerText;
  bottomName.classList.add("bottom_name");
  var rightWrapper = document.createElement("div");
  rightWrapper.classList.add("right_wrapper");
  var forward = document.createElement("img");
  forward.src = _assets_shared_icon_back_button_svg__WEBPACK_IMPORTED_MODULE_2__;
  forward.id = "forward_button";
  var back = document.createElement("img");
  back.src = _assets_shared_icon_next_button_svg__WEBPACK_IMPORTED_MODULE_1__;
  back.id = "back_button";
  leftWrapper.append(topTitle, bottomName);
  rightWrapper.append(forward, back);
  footerContainer.append(leftWrapper, rightWrapper);
  return footerContainer;
}

function loadFooter() {
  var getSlide = document.getElementById("slide_page");
  var footer = footerSection();
  getSlide.append(footer);
}

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigationBar": () => (/* binding */ navigationBar),
/* harmony export */   "stopSlide": () => (/* binding */ stopSlide)
/* harmony export */ });
/* harmony import */ var _assets_shared_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/shared/logo.svg */ "./src/assets/shared/logo.svg");
/* harmony import */ var _global_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-style.css */ "./src/global-style.css");


function navigationBar() {
  var navWrapper = document.createElement("div");
  navWrapper.classList.add("navigation_wrapper");
  var titleContainer = document.createElement("div");
  titleContainer.classList.add("home_title_container");
  var title = document.createElement("img");
  title.src = _assets_shared_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  var slideContainer = document.createElement("div");
  slideContainer.classList.add("home_slide_container");
  slideContainer.id = "home_slide_container";
  var slideAnchor = document.createElement("a");
  slideAnchor.classList.add("slide_anchor_button");
  slideAnchor.id = "slide_anchor_button";
  slideAnchor.href = "slideshow.html";
  var slide = document.createElement("p");
  slide.innerText = "VIEW INFORMATION";
  slide.classList.add("slide_button");
  slide.id = "slide_button";
  slideAnchor.append(slide);
  var slideAnchorStop = document.createElement("a");
  slideAnchorStop.classList.add("slide_anchor_button_stop");
  slideAnchorStop.href = "slideshow.html";
  var slideContainerStop = document.createElement("div");
  slideContainerStop.classList.add("home_slide_container_stop");
  slideContainerStop.id = "home_slide_container_stop";
  var slideAnchorHome = document.createElement("a");
  slideAnchorHome.classList.add("slide_anchor_home");
  slideAnchorHome.href = "index.html";
  var slideStop = document.createElement("p");
  slideStop.innerText = "HOME";
  slideAnchorHome.append(slideStop);
  titleContainer.append(title);
  slideContainer.append(slideAnchor);
  slideContainerStop.append(slideAnchorHome);
  navWrapper.append(titleContainer, slideContainer, slideContainerStop);
  return navWrapper;
}
function stopSlide() {
  var getSlide = document.getElementById("home_slide_container");
  getSlide.style.display = "none";
  var getSlideStop = document.getElementById("home_slide_container_stop");
  getSlideStop.style.display = "block";
}

/***/ }),

/***/ "./src/components/pageone.js":
/*!***********************************!*\
  !*** ./src/components/pageone.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "leftPanel": () => (/* binding */ leftPanel),
/* harmony export */   "rightPanel": () => (/* binding */ rightPanel)
/* harmony export */ });
function leftPanel(imageSource, upperDescription, lowerDescription, thumbLogo) {
  var leftPanelWrapper = document.createElement("div");
  leftPanelWrapper.classList.add("left_panel_wrapper");
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("image_container");
  imageContainer.id = "image_container";
  var image = document.createElement("img");
  image.src = imageSource;
  imageContainer.append(image);
  var contentContainer = document.createElement("div");
  contentContainer.classList.add("left_content_container");
  contentContainer.id = "left_content_container";
  contentContainer.classList.add("left_container_forty");
  var upperText = document.createElement("p");
  upperText.classList.add("left_upper_text");
  upperText.id = "left_upper_text";
  upperText.innerText = upperDescription;
  var lowerText = document.createElement("p");
  lowerText.classList.add("left_lower_text");
  lowerText.id = "left_lower_text";
  lowerText.innerText = lowerDescription;
  contentContainer.append(upperText, lowerText);
  var thumbContainer = document.createElement("div");
  thumbContainer.classList.add("left_thumb_container");
  thumbContainer.id = "left_thumb_container";
  thumbContainer.classList.add("left_thumb_forty");
  var thumbImage = document.createElement("img");
  thumbImage.src = thumbLogo;
  thumbContainer.append(thumbImage);
  leftPanelWrapper.append(imageContainer, contentContainer, thumbContainer);
  return leftPanelWrapper;
}
function rightPanel(rightDescription, dateDescription) {
  var rightPanelWrapper = document.createElement("div");
  rightPanelWrapper.classList.add("right_panel_wrapper");
  var dateContainer = document.createElement("div");
  dateContainer.classList.add("date_container");
  var date = document.createElement("p");
  date.innerText = dateDescription;
  date.classList.add("date_content");
  date.id = "date_content";
  dateContainer.append(date);
  var rightContentContainer = document.createElement("div");
  rightContentContainer.classList.add("right_content_container");
  var rightContent = document.createElement("p");
  rightContent.innerText = rightDescription;
  rightContent.classList.add("right_content_description");
  rightContent.id = "right_content_description";
  rightContentContainer.append(rightContent);
  rightPanelWrapper.append(dateContainer, rightContentContainer);
  return rightPanelWrapper;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global-style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global-style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    background-color: #fff;\n\n    --font-libre: 'Libre Baskerville', serif;\n\n}\nhtml body{\n    padding: 0px;\n    margin: 0px;\n}\n\n/**************** Navpage Page ***************************************/\n.navigation_wrapper{\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem 2.5rem 2.5rem 2.5rem;\n    border-bottom: 1px black solid;\n}\n\n.slide_anchor_button, .slide_anchor_button_stop, .slide_anchor_home{\n    text-decoration: none;\n}\n\n\n.display_hide{\n    display: none;\n}\n.display_show{\n    display: block;\n}\n\n.home_slide_container{\n    display: block;\n}\n\n.home_slide_container_stop{\n    display: none;\n}\n\n.home_slide_container p{\n    font-size: 12px;\n    font-family: var(--font-libre);\n    font-weight: 700;\n    letter-spacing: 2.57px;\n    color: #7d7d7d;\n}\n\n.home_slide_container_stop p{\n    font-size: 12px;\n    font-family: var(--font-libre);\n    font-weight: 700;\n    letter-spacing: 2.57px;\n    color: #7d7d7d;\n}\n\n\n/**************** Home Page ***************************************/\n#main_section{\n    margin: 0 2.5rem 0 2.5rem;\n    height: 724px;\n}\n\n\n#home_wrapper{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 40px;\n    row-gap: 40px;\n    max-height: 1400px;\n    margin: 0 20px 0 20px;\n}\n\n#home_panel_wrapper{\n    width: 310px;\n    object-fit: cover;\n    overflow: hidden;\n    position: relative;\n}\n\n\n.panel_one{\n    height: 250px;\n}\n\n#home_panel_content_container{\n    position: absolute;\n    bottom: 29px;\n    width: 246px;\n    height: 54px;\n    left: 36px;\n}\n#home_top_content{\n    font-weight: 700;\n    font-size: 24px;\n    font-family: var(--font-libre);\n    margin: 0px;\n    margin-bottom: 10px;\n    color: #fff;\n}\n#home_bottom_content{\n    font-size: 13px;\n    font-weight: 400;\n    font-family: var(--font-libre);\n    opacity: 0.7;\n    color: #fff;\n    margin-top: 0px;\n}\n\n/************* Panels ********/\n.panel_two{\n    height: 400px;\n}\n.panel_two #home_panel_content_container{\n    height: 83px;\n}\n\n\n.panel_three{\n    height: 285px;\n}\n\n\n.panel_four{\n    height: 250px;\n}\n.panel_four #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_five{\n    height: 340px;\n    top: -150px;\n}\n.panel_five #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_six{\n    height: 280px;\n}\n.panel_six #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_seven{\n    height: 500px;\n    top: -115px;\n}\n.panel_seven #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_eight{\n    height: 250px;\n    top: -150px;\n}\n.panel_eight #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_nine{\n    height: 420px;\n    top: -310px;\n}\n.panel_nine #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_ten{\n    height: 260px;\n    top: -220px;\n}\n\n\n\n\n.panel_eleven{\n    height: 525px;\n    top: -115px;\n}\n\n\n\n\n.panel_twelve{\n    height: 430px;\n    top: -400px;\n}\n.panel_twelve #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_thirteen{\n    height: 260px;\n    top: -415px;\n}\n.panel_thirteen #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_fourteen{\n    height: 330px;\n    top: -485px;\n}\n\n\n\n\n\n.panel_fithteen{\n    height: 340px;\n    top: -495px;\n    right: -366px;\n}\n\n\n/************* Panels ******************************/\n.image_container{\n    width: 475px;\n    height: 560px;\n}\n\n.image_container img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.panel_holder{\n    display: flex;\n    flex-direction: row;\n    height: 624px;\n}\n\n.left_content_container{\n    width: 445px;\n    height: 238px;\n    background-color: #fff;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n}\n\n.left_content_container_girl{\n    height: 302px;\n}\n.left_content_container_guernica{\n    height: 174px;\n}\n.left_content_container_sea{\n    height: 302px;\n}\n.left_content_container_lady{\n    height: 238;\n}\n.left_content_container_cafe{\n    height: 238px;\n}\n.left_content_container_swing{\n    height: 174px;\n}\n.left_content_container_self{\n    height: 238px;\n}\n\n\n\n.left_panel_wrapper{\n    width: 851px;\n    position: relative;\n}\n.left_upper_text{\n    font-size: 56px;\n    width: 259px;\n    position: absolute;\n    left: 65px;\n    margin: 0px;\n    font-family: var(--font-libre);\n    font-weight: 700;\n}\n.girl_new_height{\n    width: 380px;\n}\n.mona_new_height{\n    width: 212px;\n}\n.swing_new_height{\n    width: 316px;\n}\n\n\n\n.left_lower_text{\n    font-size: 15px;\n    font-family: var(--font-libre);\n    color: #7d7d7d;\n    top: 145px;\n    position: absolute;\n    left: 68px;\n    font-weight: 400;\n    font-style: normal;\n}\n.pearl_lower_text{\n    top: 203px;\n}\n.guernica_lower_text{\n    top: 70px;\n}\n.sea_lower_text{\n    top: 209px;\n}\n.cafe_lower_text{\n    top: 146px\n}\n.apple_lower_text{\n    top: 144px;\n}\n.swing_lower_text{\n    top: 76px;\n}\n.gypsy_lower_text{\n    top: 221px;\n}\n.self_lower_text{\n    top: 158px;\n}\n\n\n\n\n.left_thumb_container{\n    position: absolute;\n    right: 190px;\n    top: 496px;\n}\n.right_panel_wrapper{\n    width: 539px;\n    position: relative;\n}\n\n.date_container{\n    width: auto;\n    height: 140px;\n}\n\n.date_content{\n    font-size: 200px;\n    margin: 0px;\n    position: absolute;\n    top: -33px;\n    right: 0px;\n    height: 181px;\n    font-family: var(--font-libre);\n    color: #f3f3f3;\n    font-weight: 700;\n}\n\n.right_content_container{\n    width: 350px;\n    height: 364px; \n    left: 45px;\n    position: absolute;\n    top: 116px;\n}\n\n.right_content_container p{\n    font-family: var(--font-libre);\n    font-size: 14px;\n    color: #7d7d7d;\n    font-weight: 700;\n    line-height: 28px;\n}\n\n.footer_container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0 2.5rem 0 2.5rem;\n}\n\n\n.top_title{\n    font-family: var(--font-libre);\n    font-size: 18px;\n    font-weight: 700;\n    color: #000;\n}\n.bottom_name{\n    font-family: var(--font-libre);\n    font-size: 13px;\n    opacity: 0.7;\n}\n\n\n/*********************       Slide Page           *************************/\n#slide_page{\n    display: flex;\n    flex-direction: column;\n}\n/*\n\n#footer_container{\n    order: 3;\n}\n#navigation_wrapper{\n    order: 1;\n}\n#main_section{\n    order: 2;\n}\n\n*/\n\n.right_wrapper{\n    height: 24px;\n    width: 90.69px;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 32px;\n}\n\n\n@media screen and (max-width: 550px) {\n    /********** Home Page  ********************/\n    #home_wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        max-height: 100%;\n        margin-bottom: 37px;\n    }\n\n    .slide_anchor_button{\n        text-align: center;\n    }\n    .home_slide_container p{\n        font-size: 9px;\n    }\n\n    .panel_five, .panel_seven, .panel_eight, .panel_nine, \n    .panel_ten, .panel_eleven, .panel_twelve, .panel_thirteen,\n    .panel_fourteen, .panel_fithteen\n    {\n        top: unset;\n    }\n    .panel_fithteen{\n        right: unset;\n    }\n\n\n    /********** SlideShow Page  ********************/\n    .slide_anchor_home p{\n        font-size: 9px;\n    }\n    .panel_holder{\n        display: flex;\n        flex-direction: column;\n    }\n    .left_panel_wrapper{\n        width: 100%;\n        justify-content: center;\n        display: flex;\n    }\n\n    .image_container{\n        width: 327px;\n        height: 280px;\n    }\n\n    .left_content_container{\n        position: absolute;\n        left: 72px;\n        width: 228px;\n        height: 104px;\n        top: 236px;\n    }\n    .left_upper_text{\n        font-size: 24px;\n        width: 232px;\n        left: 25px;\n        top: 20px;\n    }\n    .left_lower_text{\n        top: 51px;\n        left: 25px;\n\n    }\n    .left_thumb_container{\n        right: unset;\n        top: 340px;\n        left: 86px;\n    }\n    .left_thumb_container img{\n        width: 64px;\n        height: 64px;\n    }\n\n    .date_content{\n        font-size: 100px;\n        left: 196px;\n        top: 74px; \n        height: 110px;\n    }\n    .right_content_container{\n        top: 140px;\n        width: 86%;\n        justify-content: center;\n        display: flex;\n        height: auto;\n    }\n    .right_content_description{\n        width: 327px;\n    }\n\n    .right_panel_wrapper{\n        width: 100%;\n        height: auto;\n    }\n\n    .footer_container{\n        border-top: 1px black solid;\n        margin: 7.5rem 2.5rem 0 2.5rem;\n    }\n\n    .left_content_container_girl{\n        width: 257px;\n    }\n    .girl_new_height{\n        width: 171px;\n        top: 6px;\n    }\n    .pearl_lower_text{\n        top: 57px;\n    }\n\n    .mobile_guernica{\n        top: 20px;\n    }\n\n    .storm_mobile{\n        width: 281px;\n    }\n    .storm_text_mobile{\n        width: 224px;\n    }\n\n    .mobile_kanagawa_text{\n        width: 232px;\n    }\n\n}\n\n@media screen and (max-width: 480px) {\n    .date_content{\n        left: 86px;\n        top: 106px;\n    }\n    .right_content_container{\n        top: 172px;\n    }\n\n    .footer_container{\n        margin-top: 200px;\n    }\n\n}\n\n@media screen and (max-width: 400px) {\n    .footer_container{\n        margin-top: 300px;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/global-style.css"],"names":[],"mappings":"AAGA;IACI,sBAAsB;;IAEtB,wCAAwC;;AAE5C;AACA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA,sEAAsE;AACtE;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,aAAa;AACjB;AACA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,gBAAgB;IAChB,sBAAsB;IACtB,cAAc;AAClB;;;AAGA,mEAAmE;AACnE;IACI,yBAAyB;IACzB,aAAa;AACjB;;;AAGA;IACI,aAAa;IACb,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,8BAA8B;IAC9B,WAAW;IACX,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,8BAA8B;IAC9B,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA,8BAA8B;AAC9B;IACI,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;;AAGA;IACI,aAAa;AACjB;;;AAGA;IACI,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,YAAY;AAChB;;;;;AAKA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,YAAY;AAChB;;;;;AAKA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI,aAAa;IACb,WAAW;AACf;;;;;AAKA;IACI,aAAa;IACb,WAAW;AACf;;;;;AAKA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,YAAY;AAChB;;;;;AAKA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,YAAY;AAChB;;;;;AAKA;IACI,aAAa;IACb,WAAW;AACf;;;;;;AAMA;IACI,aAAa;IACb,WAAW;IACX,aAAa;AACjB;;;AAGA,oDAAoD;AACpD;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;;;;AAIA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;;;AAIA;IACI,eAAe;IACf,8BAA8B;IAC9B,cAAc;IACd,UAAU;IACV,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,UAAU;AACd;AACA;IACI,SAAS;AACb;AACA;IACI,UAAU;AACd;AACA;IACI;AACJ;AACA;IACI,UAAU;AACd;AACA;IACI,SAAS;AACb;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;;;;;AAKA;IACI,kBAAkB;IAClB,YAAY;IACZ,UAAU;AACd;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,8BAA8B;IAC9B,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;AAC7B;;;AAGA;IACI,8BAA8B;IAC9B,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,8BAA8B;IAC9B,eAAe;IACf,YAAY;AAChB;;;AAGA,2EAA2E;AAC3E;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;;;;;;;;;;;;CAYC;;AAED;IACI,YAAY;IACZ,cAAc;IACd,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;;AAGA;IACI,2CAA2C;IAC3C;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,gBAAgB;QAChB,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;IACtB;IACA;QACI,cAAc;IAClB;;IAEA;;;;QAII,UAAU;IACd;IACA;QACI,YAAY;IAChB;;;IAGA,gDAAgD;IAChD;QACI,cAAc;IAClB;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,WAAW;QACX,uBAAuB;QACvB,aAAa;IACjB;;IAEA;QACI,YAAY;QACZ,aAAa;IACjB;;IAEA;QACI,kBAAkB;QAClB,UAAU;QACV,YAAY;QACZ,aAAa;QACb,UAAU;IACd;IACA;QACI,eAAe;QACf,YAAY;QACZ,UAAU;QACV,SAAS;IACb;IACA;QACI,SAAS;QACT,UAAU;;IAEd;IACA;QACI,YAAY;QACZ,UAAU;QACV,UAAU;IACd;IACA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,gBAAgB;QAChB,WAAW;QACX,SAAS;QACT,aAAa;IACjB;IACA;QACI,UAAU;QACV,UAAU;QACV,uBAAuB;QACvB,aAAa;QACb,YAAY;IAChB;IACA;QACI,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,2BAA2B;QAC3B,8BAA8B;IAClC;;IAEA;QACI,YAAY;IAChB;IACA;QACI,YAAY;QACZ,QAAQ;IACZ;IACA;QACI,SAAS;IACb;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;;AAEJ;;AAEA;IACI;QACI,UAAU;QACV,UAAU;IACd;IACA;QACI,UAAU;IACd;;IAEA;QACI,iBAAiB;IACrB;;AAEJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');\n\n\n:root{\n    background-color: #fff;\n\n    --font-libre: 'Libre Baskerville', serif;\n\n}\nhtml body{\n    padding: 0px;\n    margin: 0px;\n}\n\n/**************** Navpage Page ***************************************/\n.navigation_wrapper{\n    display: flex;\n    justify-content: space-between;\n    margin: 2.5rem 2.5rem 2.5rem 2.5rem;\n    border-bottom: 1px black solid;\n}\n\n.slide_anchor_button, .slide_anchor_button_stop, .slide_anchor_home{\n    text-decoration: none;\n}\n\n\n.display_hide{\n    display: none;\n}\n.display_show{\n    display: block;\n}\n\n.home_slide_container{\n    display: block;\n}\n\n.home_slide_container_stop{\n    display: none;\n}\n\n.home_slide_container p{\n    font-size: 12px;\n    font-family: var(--font-libre);\n    font-weight: 700;\n    letter-spacing: 2.57px;\n    color: #7d7d7d;\n}\n\n.home_slide_container_stop p{\n    font-size: 12px;\n    font-family: var(--font-libre);\n    font-weight: 700;\n    letter-spacing: 2.57px;\n    color: #7d7d7d;\n}\n\n\n/**************** Home Page ***************************************/\n#main_section{\n    margin: 0 2.5rem 0 2.5rem;\n    height: 724px;\n}\n\n\n#home_wrapper{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    column-gap: 40px;\n    row-gap: 40px;\n    max-height: 1400px;\n    margin: 0 20px 0 20px;\n}\n\n#home_panel_wrapper{\n    width: 310px;\n    object-fit: cover;\n    overflow: hidden;\n    position: relative;\n}\n\n\n.panel_one{\n    height: 250px;\n}\n\n#home_panel_content_container{\n    position: absolute;\n    bottom: 29px;\n    width: 246px;\n    height: 54px;\n    left: 36px;\n}\n#home_top_content{\n    font-weight: 700;\n    font-size: 24px;\n    font-family: var(--font-libre);\n    margin: 0px;\n    margin-bottom: 10px;\n    color: #fff;\n}\n#home_bottom_content{\n    font-size: 13px;\n    font-weight: 400;\n    font-family: var(--font-libre);\n    opacity: 0.7;\n    color: #fff;\n    margin-top: 0px;\n}\n\n/************* Panels ********/\n.panel_two{\n    height: 400px;\n}\n.panel_two #home_panel_content_container{\n    height: 83px;\n}\n\n\n.panel_three{\n    height: 285px;\n}\n\n\n.panel_four{\n    height: 250px;\n}\n.panel_four #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_five{\n    height: 340px;\n    top: -150px;\n}\n.panel_five #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_six{\n    height: 280px;\n}\n.panel_six #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_seven{\n    height: 500px;\n    top: -115px;\n}\n.panel_seven #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_eight{\n    height: 250px;\n    top: -150px;\n}\n.panel_eight #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_nine{\n    height: 420px;\n    top: -310px;\n}\n.panel_nine #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n.panel_ten{\n    height: 260px;\n    top: -220px;\n}\n\n\n\n\n.panel_eleven{\n    height: 525px;\n    top: -115px;\n}\n\n\n\n\n.panel_twelve{\n    height: 430px;\n    top: -400px;\n}\n.panel_twelve #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_thirteen{\n    height: 260px;\n    top: -415px;\n}\n.panel_thirteen #home_panel_content_container{\n    height: 83px;\n}\n\n\n\n\n.panel_fourteen{\n    height: 330px;\n    top: -485px;\n}\n\n\n\n\n\n.panel_fithteen{\n    height: 340px;\n    top: -495px;\n    right: -366px;\n}\n\n\n/************* Panels ******************************/\n.image_container{\n    width: 475px;\n    height: 560px;\n}\n\n.image_container img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.panel_holder{\n    display: flex;\n    flex-direction: row;\n    height: 624px;\n}\n\n.left_content_container{\n    width: 445px;\n    height: 238px;\n    background-color: #fff;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n}\n\n.left_content_container_girl{\n    height: 302px;\n}\n.left_content_container_guernica{\n    height: 174px;\n}\n.left_content_container_sea{\n    height: 302px;\n}\n.left_content_container_lady{\n    height: 238;\n}\n.left_content_container_cafe{\n    height: 238px;\n}\n.left_content_container_swing{\n    height: 174px;\n}\n.left_content_container_self{\n    height: 238px;\n}\n\n\n\n.left_panel_wrapper{\n    width: 851px;\n    position: relative;\n}\n.left_upper_text{\n    font-size: 56px;\n    width: 259px;\n    position: absolute;\n    left: 65px;\n    margin: 0px;\n    font-family: var(--font-libre);\n    font-weight: 700;\n}\n.girl_new_height{\n    width: 380px;\n}\n.mona_new_height{\n    width: 212px;\n}\n.swing_new_height{\n    width: 316px;\n}\n\n\n\n.left_lower_text{\n    font-size: 15px;\n    font-family: var(--font-libre);\n    color: #7d7d7d;\n    top: 145px;\n    position: absolute;\n    left: 68px;\n    font-weight: 400;\n    font-style: normal;\n}\n.pearl_lower_text{\n    top: 203px;\n}\n.guernica_lower_text{\n    top: 70px;\n}\n.sea_lower_text{\n    top: 209px;\n}\n.cafe_lower_text{\n    top: 146px\n}\n.apple_lower_text{\n    top: 144px;\n}\n.swing_lower_text{\n    top: 76px;\n}\n.gypsy_lower_text{\n    top: 221px;\n}\n.self_lower_text{\n    top: 158px;\n}\n\n\n\n\n.left_thumb_container{\n    position: absolute;\n    right: 190px;\n    top: 496px;\n}\n.right_panel_wrapper{\n    width: 539px;\n    position: relative;\n}\n\n.date_container{\n    width: auto;\n    height: 140px;\n}\n\n.date_content{\n    font-size: 200px;\n    margin: 0px;\n    position: absolute;\n    top: -33px;\n    right: 0px;\n    height: 181px;\n    font-family: var(--font-libre);\n    color: #f3f3f3;\n    font-weight: 700;\n}\n\n.right_content_container{\n    width: 350px;\n    height: 364px; \n    left: 45px;\n    position: absolute;\n    top: 116px;\n}\n\n.right_content_container p{\n    font-family: var(--font-libre);\n    font-size: 14px;\n    color: #7d7d7d;\n    font-weight: 700;\n    line-height: 28px;\n}\n\n.footer_container{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0 2.5rem 0 2.5rem;\n}\n\n\n.top_title{\n    font-family: var(--font-libre);\n    font-size: 18px;\n    font-weight: 700;\n    color: #000;\n}\n.bottom_name{\n    font-family: var(--font-libre);\n    font-size: 13px;\n    opacity: 0.7;\n}\n\n\n/*********************       Slide Page           *************************/\n#slide_page{\n    display: flex;\n    flex-direction: column;\n}\n/*\n\n#footer_container{\n    order: 3;\n}\n#navigation_wrapper{\n    order: 1;\n}\n#main_section{\n    order: 2;\n}\n\n*/\n\n.right_wrapper{\n    height: 24px;\n    width: 90.69px;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 32px;\n}\n\n\n@media screen and (max-width: 550px) {\n    /********** Home Page  ********************/\n    #home_wrapper{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        max-height: 100%;\n        margin-bottom: 37px;\n    }\n\n    .slide_anchor_button{\n        text-align: center;\n    }\n    .home_slide_container p{\n        font-size: 9px;\n    }\n\n    .panel_five, .panel_seven, .panel_eight, .panel_nine, \n    .panel_ten, .panel_eleven, .panel_twelve, .panel_thirteen,\n    .panel_fourteen, .panel_fithteen\n    {\n        top: unset;\n    }\n    .panel_fithteen{\n        right: unset;\n    }\n\n\n    /********** SlideShow Page  ********************/\n    .slide_anchor_home p{\n        font-size: 9px;\n    }\n    .panel_holder{\n        display: flex;\n        flex-direction: column;\n    }\n    .left_panel_wrapper{\n        width: 100%;\n        justify-content: center;\n        display: flex;\n    }\n\n    .image_container{\n        width: 327px;\n        height: 280px;\n    }\n\n    .left_content_container{\n        position: absolute;\n        left: 72px;\n        width: 228px;\n        height: 104px;\n        top: 236px;\n    }\n    .left_upper_text{\n        font-size: 24px;\n        width: 232px;\n        left: 25px;\n        top: 20px;\n    }\n    .left_lower_text{\n        top: 51px;\n        left: 25px;\n\n    }\n    .left_thumb_container{\n        right: unset;\n        top: 340px;\n        left: 86px;\n    }\n    .left_thumb_container img{\n        width: 64px;\n        height: 64px;\n    }\n\n    .date_content{\n        font-size: 100px;\n        left: 196px;\n        top: 74px; \n        height: 110px;\n    }\n    .right_content_container{\n        top: 140px;\n        width: 86%;\n        justify-content: center;\n        display: flex;\n        height: auto;\n    }\n    .right_content_description{\n        width: 327px;\n    }\n\n    .right_panel_wrapper{\n        width: 100%;\n        height: auto;\n    }\n\n    .footer_container{\n        border-top: 1px black solid;\n        margin: 7.5rem 2.5rem 0 2.5rem;\n    }\n\n    .left_content_container_girl{\n        width: 257px;\n    }\n    .girl_new_height{\n        width: 171px;\n        top: 6px;\n    }\n    .pearl_lower_text{\n        top: 57px;\n    }\n\n    .mobile_guernica{\n        top: 20px;\n    }\n\n    .storm_mobile{\n        width: 281px;\n    }\n    .storm_text_mobile{\n        width: 224px;\n    }\n\n    .mobile_kanagawa_text{\n        width: 232px;\n    }\n\n}\n\n@media screen and (max-width: 480px) {\n    .date_content{\n        left: 86px;\n        top: 106px;\n    }\n    .right_content_container{\n        top: 172px;\n    }\n\n    .footer_container{\n        margin-top: 200px;\n    }\n\n}\n\n@media screen and (max-width: 400px) {\n    .footer_container{\n        margin-top: 300px;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/global-style.css":
/*!******************************!*\
  !*** ./src/global-style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/global-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arnolfini-portrait/artist.jpg":
/*!**************************************************!*\
  !*** ./src/assets/arnolfini-portrait/artist.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a65c0776d102cbfcfc87.jpg";

/***/ }),

/***/ "./src/assets/arnolfini-portrait/hero-small.jpg":
/*!******************************************************!*\
  !*** ./src/assets/arnolfini-portrait/hero-small.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38b1ad5de3692f00e5a2.jpg";

/***/ }),

/***/ "./src/assets/girl-with-pearl-earring/artist.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/girl-with-pearl-earring/artist.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62661166f0ae6687c890.jpg";

/***/ }),

/***/ "./src/assets/girl-with-pearl-earring/hero-small.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/girl-with-pearl-earring/hero-small.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b40ea474a513ac8124c.jpg";

/***/ }),

/***/ "./src/assets/guernica/artist.jpg":
/*!****************************************!*\
  !*** ./src/assets/guernica/artist.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b5dd24e154a3db4e962.jpg";

/***/ }),

/***/ "./src/assets/guernica/hero-small.jpg":
/*!********************************************!*\
  !*** ./src/assets/guernica/hero-small.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95b4fbde3146565146a.jpg";

/***/ }),

/***/ "./src/assets/lady-with-an-ermine/artist.jpg":
/*!***************************************************!*\
  !*** ./src/assets/lady-with-an-ermine/artist.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8744cb51e4e59d8bc9c9.jpg";

/***/ }),

/***/ "./src/assets/lady-with-an-ermine/hero-small.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/lady-with-an-ermine/hero-small.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cd50370b81f10e7a871.jpg";

/***/ }),

/***/ "./src/assets/mona-lisa/artist.jpg":
/*!*****************************************!*\
  !*** ./src/assets/mona-lisa/artist.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8744cb51e4e59d8bc9c9.jpg";

/***/ }),

/***/ "./src/assets/mona-lisa/hero-small.jpg":
/*!*********************************************!*\
  !*** ./src/assets/mona-lisa/hero-small.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "047d492a4822cbb23619.jpg";

/***/ }),

/***/ "./src/assets/penitent-magdalene/artist.jpg":
/*!**************************************************!*\
  !*** ./src/assets/penitent-magdalene/artist.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "705f7a4bba0fa52fb49b.jpg";

/***/ }),

/***/ "./src/assets/penitent-magdalene/hero-small.jpg":
/*!******************************************************!*\
  !*** ./src/assets/penitent-magdalene/hero-small.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd0a04475cf48efb6067.jpg";

/***/ }),

/***/ "./src/assets/shared/icon-back-button.svg":
/*!************************************************!*\
  !*** ./src/assets/shared/icon-back-button.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53213882598d9fe2538e.svg";

/***/ }),

/***/ "./src/assets/shared/icon-next-button.svg":
/*!************************************************!*\
  !*** ./src/assets/shared/icon-next-button.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6581839dce9e88e75a1.svg";

/***/ }),

/***/ "./src/assets/shared/logo.svg":
/*!************************************!*\
  !*** ./src/assets/shared/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a6c072704eeee12c44a.svg";

/***/ }),

/***/ "./src/assets/starry-night/artist.jpg":
/*!********************************************!*\
  !*** ./src/assets/starry-night/artist.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0887100bc28ddacdd98b.jpg";

/***/ }),

/***/ "./src/assets/starry-night/hero-small.jpg":
/*!************************************************!*\
  !*** ./src/assets/starry-night/hero-small.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "553abbf9e8f4dbb5fef6.jpg";

/***/ }),

/***/ "./src/assets/the-basket-of-apples/artist.jpg":
/*!****************************************************!*\
  !*** ./src/assets/the-basket-of-apples/artist.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88e14d59163fe4b29092.jpg";

/***/ }),

/***/ "./src/assets/the-basket-of-apples/hero-small.jpg":
/*!********************************************************!*\
  !*** ./src/assets/the-basket-of-apples/hero-small.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d14d473a49fc570c391.jpg";

/***/ }),

/***/ "./src/assets/the-boy-in-the-red-vest/artist.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/the-boy-in-the-red-vest/artist.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88e14d59163fe4b29092.jpg";

/***/ }),

/***/ "./src/assets/the-boy-in-the-red-vest/hero-small.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/the-boy-in-the-red-vest/hero-small.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef3338bf3add1b523e05.jpg";

/***/ }),

/***/ "./src/assets/the-great-wave-off-kanagawa/artist.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/the-great-wave-off-kanagawa/artist.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b653868665bb56cf7f1.jpg";

/***/ }),

/***/ "./src/assets/the-great-wave-off-kanagawa/hero-small.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/the-great-wave-off-kanagawa/hero-small.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d67bae407422fb15127a.jpg";

/***/ }),

/***/ "./src/assets/the-night-cafe/artist.jpg":
/*!**********************************************!*\
  !*** ./src/assets/the-night-cafe/artist.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0887100bc28ddacdd98b.jpg";

/***/ }),

/***/ "./src/assets/the-night-cafe/hero-small.jpg":
/*!**************************************************!*\
  !*** ./src/assets/the-night-cafe/hero-small.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45e5de3ce82694eda4b6.jpg";

/***/ }),

/***/ "./src/assets/the-sleeping-gypsy/artist.jpg":
/*!**************************************************!*\
  !*** ./src/assets/the-sleeping-gypsy/artist.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2f0c826cc626d2b966f.jpg";

/***/ }),

/***/ "./src/assets/the-sleeping-gypsy/hero-small.jpg":
/*!******************************************************!*\
  !*** ./src/assets/the-sleeping-gypsy/hero-small.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46bd566158b0d419c4ce.jpg";

/***/ }),

/***/ "./src/assets/the-storm-on-the-sea-of-galilee/artist.jpg":
/*!***************************************************************!*\
  !*** ./src/assets/the-storm-on-the-sea-of-galilee/artist.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61cecdab147727f44734.jpg";

/***/ }),

/***/ "./src/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "965b9b62cf35bc3208e1.jpg";

/***/ }),

/***/ "./src/assets/the-swing/artist.jpg":
/*!*****************************************!*\
  !*** ./src/assets/the-swing/artist.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3778942f47b0ff5ed947.jpg";

/***/ }),

/***/ "./src/assets/the-swing/hero-small.jpg":
/*!*********************************************!*\
  !*** ./src/assets/the-swing/hero-small.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f30bff15aaed24072bbf.jpg";

/***/ }),

/***/ "./src/assets/van-gogh-self-portrait/artist.jpg":
/*!******************************************************!*\
  !*** ./src/assets/van-gogh-self-portrait/artist.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0887100bc28ddacdd98b.jpg";

/***/ }),

/***/ "./src/assets/van-gogh-self-portrait/hero-small.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/van-gogh-self-portrait/hero-small.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e7936a5ff9f120b4a1f.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/components/gallerypanels.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSlide": () => (/* binding */ loadSlide)
/* harmony export */ });
/* harmony import */ var _global_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-style.css */ "./src/global-style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _pageone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageone */ "./src/components/pageone.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _assets_starry_night_hero_small_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/starry-night/hero-small.jpg */ "./src/assets/starry-night/hero-small.jpg");
/* harmony import */ var _assets_starry_night_artist_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/starry-night/artist.jpg */ "./src/assets/starry-night/artist.jpg");
/* harmony import */ var _assets_girl_with_pearl_earring_hero_small_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/girl-with-pearl-earring/hero-small.jpg */ "./src/assets/girl-with-pearl-earring/hero-small.jpg");
/* harmony import */ var _assets_girl_with_pearl_earring_artist_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/girl-with-pearl-earring/artist.jpg */ "./src/assets/girl-with-pearl-earring/artist.jpg");
/* harmony import */ var _assets_guernica_hero_small_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/guernica/hero-small.jpg */ "./src/assets/guernica/hero-small.jpg");
/* harmony import */ var _assets_guernica_artist_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/guernica/artist.jpg */ "./src/assets/guernica/artist.jpg");
/* harmony import */ var _assets_penitent_magdalene_hero_small_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/penitent-magdalene/hero-small.jpg */ "./src/assets/penitent-magdalene/hero-small.jpg");
/* harmony import */ var _assets_penitent_magdalene_artist_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/penitent-magdalene/artist.jpg */ "./src/assets/penitent-magdalene/artist.jpg");
/* harmony import */ var _assets_the_storm_on_the_sea_of_galilee_hero_small_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/the-storm-on-the-sea-of-galilee/hero-small.jpg */ "./src/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg");
/* harmony import */ var _assets_the_storm_on_the_sea_of_galilee_artist_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/the-storm-on-the-sea-of-galilee/artist.jpg */ "./src/assets/the-storm-on-the-sea-of-galilee/artist.jpg");
/* harmony import */ var _assets_the_great_wave_off_kanagawa_hero_small_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/the-great-wave-off-kanagawa/hero-small.jpg */ "./src/assets/the-great-wave-off-kanagawa/hero-small.jpg");
/* harmony import */ var _assets_the_great_wave_off_kanagawa_artist_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/the-great-wave-off-kanagawa/artist.jpg */ "./src/assets/the-great-wave-off-kanagawa/artist.jpg");
/* harmony import */ var _assets_van_gogh_self_portrait_hero_small_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/van-gogh-self-portrait/hero-small.jpg */ "./src/assets/van-gogh-self-portrait/hero-small.jpg");
/* harmony import */ var _assets_van_gogh_self_portrait_artist_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/van-gogh-self-portrait/artist.jpg */ "./src/assets/van-gogh-self-portrait/artist.jpg");
/* harmony import */ var _assets_the_sleeping_gypsy_hero_small_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/the-sleeping-gypsy/hero-small.jpg */ "./src/assets/the-sleeping-gypsy/hero-small.jpg");
/* harmony import */ var _assets_the_sleeping_gypsy_artist_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/the-sleeping-gypsy/artist.jpg */ "./src/assets/the-sleeping-gypsy/artist.jpg");
/* harmony import */ var _assets_lady_with_an_ermine_hero_small_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/lady-with-an-ermine/hero-small.jpg */ "./src/assets/lady-with-an-ermine/hero-small.jpg");
/* harmony import */ var _assets_lady_with_an_ermine_artist_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/lady-with-an-ermine/artist.jpg */ "./src/assets/lady-with-an-ermine/artist.jpg");
/* harmony import */ var _assets_the_night_cafe_hero_small_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/the-night-cafe/hero-small.jpg */ "./src/assets/the-night-cafe/hero-small.jpg");
/* harmony import */ var _assets_the_night_cafe_artist_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/the-night-cafe/artist.jpg */ "./src/assets/the-night-cafe/artist.jpg");
/* harmony import */ var _assets_the_basket_of_apples_hero_small_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/the-basket-of-apples/hero-small.jpg */ "./src/assets/the-basket-of-apples/hero-small.jpg");
/* harmony import */ var _assets_the_basket_of_apples_artist_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/the-basket-of-apples/artist.jpg */ "./src/assets/the-basket-of-apples/artist.jpg");
/* harmony import */ var _assets_the_boy_in_the_red_vest_hero_small_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/the-boy-in-the-red-vest/hero-small.jpg */ "./src/assets/the-boy-in-the-red-vest/hero-small.jpg");
/* harmony import */ var _assets_the_boy_in_the_red_vest_artist_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/the-boy-in-the-red-vest/artist.jpg */ "./src/assets/the-boy-in-the-red-vest/artist.jpg");
/* harmony import */ var _assets_arnolfini_portrait_hero_small_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/arnolfini-portrait/hero-small.jpg */ "./src/assets/arnolfini-portrait/hero-small.jpg");
/* harmony import */ var _assets_arnolfini_portrait_artist_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../assets/arnolfini-portrait/artist.jpg */ "./src/assets/arnolfini-portrait/artist.jpg");
/* harmony import */ var _assets_mona_lisa_hero_small_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../assets/mona-lisa/hero-small.jpg */ "./src/assets/mona-lisa/hero-small.jpg");
/* harmony import */ var _assets_mona_lisa_artist_jpg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../assets/mona-lisa/artist.jpg */ "./src/assets/mona-lisa/artist.jpg");
/* harmony import */ var _assets_the_swing_hero_small_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../assets/the-swing/hero-small.jpg */ "./src/assets/the-swing/hero-small.jpg");
/* harmony import */ var _assets_the_swing_artist_jpg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../assets/the-swing/artist.jpg */ "./src/assets/the-swing/artist.jpg");



































function templatePanel() {
  var panelHolder = document.createElement("div");
  panelHolder.classList.add("panel_holder");
  var left = (0,_pageone__WEBPACK_IMPORTED_MODULE_2__.leftPanel)(_assets_starry_night_hero_small_jpg__WEBPACK_IMPORTED_MODULE_4__, "Starry Night", "Vincent Van Gohn", _assets_starry_night_artist_jpg__WEBPACK_IMPORTED_MODULE_5__);
  var right = (0,_pageone__WEBPACK_IMPORTED_MODULE_2__.rightPanel)("Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 'Through the iron-barred window,' he wrote to his brother, Theo, around 23 May 1889, 'I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.'", "1889");
  panelHolder.append(left, right);
  return panelHolder;
}

function firstSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_starry_night_hero_small_jpg__WEBPACK_IMPORTED_MODULE_4__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_girl");
  getContainer.classList.remove("left_content_container_guernica");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.remove("girl_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.remove("pearl_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Starry Night";
  newLower.innerText = "Vincent Van Gogh";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_starry_night_artist_jpg__WEBPACK_IMPORTED_MODULE_5__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1889";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "Although The Starry Night was painted during the day in Van Gogh's ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. 'Through the iron-barred window,'' he wrote to his brother, Theo, around 23 May 1889, 'I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory.'";
}

function secondSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_girl_with_pearl_earring_hero_small_jpg__WEBPACK_IMPORTED_MODULE_6__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.add("left_content_container_girl");
  getContainer.classList.remove("left_content_container_guernica");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.remove("mobile_guernica");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("pearl_lower_text");
  newLower.classList.remove("guernica_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Girl with a Pearl Earring";
  newLower.innerText = "Johannes Vermeer";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_girl_with_pearl_earring_artist_jpg__WEBPACK_IMPORTED_MODULE_7__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1665";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.";
}

function thirdSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_guernica_hero_small_jpg__WEBPACK_IMPORTED_MODULE_8__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_girl");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_guernica");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.add("mobile_guernica");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.remove("pearl_lower_text");
  newLower.classList.remove("sea_lower_text");
  newLower.classList.add("guernica_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Guernica";
  newLower.innerText = "Pablo Picasso";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_guernica_artist_jpg__WEBPACK_IMPORTED_MODULE_9__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1937";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.";
}

function fourthSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_penitent_magdalene_hero_small_jpg__WEBPACK_IMPORTED_MODULE_10__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_guernica");
  getContainer.classList.remove("left_content_container_magdalene");
  getContainer.classList.remove("left_content_container_sea");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.remove("mobile_guernica");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.remove("guernica_lower_text");
  newLower.classList.remove("sea_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Penitent Magdalene";
  newLower.innerText = "Artemisia Gentileschi";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_penitent_magdalene_artist_jpg__WEBPACK_IMPORTED_MODULE_11__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1625";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.";
}

function fithSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_storm_on_the_sea_of_galilee_hero_small_jpg__WEBPACK_IMPORTED_MODULE_12__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.add("left_content_container_sea");
  getContainer.classList.add("storm_mobile");
  getContainer.classList.remove("left_content_container_magdalene");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.add("storm_text_mobile");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("sea_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Storm on the Sea of Galilee";
  newLower.innerText = "Rembrandt";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_storm_on_the_sea_of_galilee_artist_jpg__WEBPACK_IMPORTED_MODULE_13__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1633";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.";
}

function sixSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_great_wave_off_kanagawa_hero_small_jpg__WEBPACK_IMPORTED_MODULE_14__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.add("left_content_container_sea");
  getContainer.classList.remove("left_content_container_magdalene");
  getContainer.classList.remove("left_content_container_self");
  getContainer.classList.remove("left_content_container_cafe");
  getContainer.classList.remove("left_content_container_lady");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.add("mobile_kanagawa_text");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("sea_lower_text");
  newLower.classList.remove("self_lower_text");
  newLower.classList.remove("gypsy_lower_text");
  newLower.classList.remove("apple_lower_text");
  newLower.classList.remove("cafe_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Great Wave off Kanagawa";
  newLower.innerText = "Hokusai";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_great_wave_off_kanagawa_artist_jpg__WEBPACK_IMPORTED_MODULE_15__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1831";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. 'Under the Wave off Kanagawa'), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.";
}

function sevenSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_van_gogh_self_portrait_hero_small_jpg__WEBPACK_IMPORTED_MODULE_16__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_self");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.remove("sea_lower_text");
  newLower.classList.add("self_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Van Gogh self-portrait";
  newLower.innerText = "Vincent van Gogh";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_van_gogh_self_portrait_artist_jpg__WEBPACK_IMPORTED_MODULE_17__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1889";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was 'absolutely fanatical'. Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.";
}

function eightSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_sleeping_gypsy_hero_small_jpg__WEBPACK_IMPORTED_MODULE_18__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.add("left_content_container_sea");
  getContainer.classList.remove("left_content_container_self");
  getContainer.classList.remove("left_content_container_cafe");
  getContainer.classList.remove("left_content_container_lady");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("gypsy_lower_text");
  newLower.classList.remove("self_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Sleeping Gypsy";
  newLower.innerText = "Henri Rousseau";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_sleeping_gypsy_artist_jpg__WEBPACK_IMPORTED_MODULE_19__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1897";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.";
}

function nineSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_lady_with_an_ermine_hero_small_jpg__WEBPACK_IMPORTED_MODULE_20__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_lady");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.remove("gypsy_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Lady with an Ermine";
  newLower.innerText = "Leonardo da Vinci";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_lady_with_an_ermine_artist_jpg__WEBPACK_IMPORTED_MODULE_21__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1489";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ('Il Moro'), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa.";
}

function tenSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_night_cafe_hero_small_jpg__WEBPACK_IMPORTED_MODULE_22__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_cafe");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.remove("storm_text_mobile");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("cafe_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Night Cafe";
  newLower.innerText = "Vincent van Gogh";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_night_cafe_artist_jpg__WEBPACK_IMPORTED_MODULE_23__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1888";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.";
}

function elevenSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_basket_of_apples_hero_small_jpg__WEBPACK_IMPORTED_MODULE_24__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_cafe");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("apple_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Basket of Apples";
  newLower.innerText = "Paul Cezanne";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_basket_of_apples_artist_jpg__WEBPACK_IMPORTED_MODULE_25__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1893";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.";
}

function twelveSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_boy_in_the_red_vest_hero_small_jpg__WEBPACK_IMPORTED_MODULE_26__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_cafe");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  newUpper.classList.remove("mona_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("apple_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Boy in the Red Vest";
  newLower.innerText = "Paul Cezanne";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_boy_in_the_red_vest_artist_jpg__WEBPACK_IMPORTED_MODULE_27__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1889";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US.";
}

function thirteenSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_arnolfini_portrait_hero_small_jpg__WEBPACK_IMPORTED_MODULE_28__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.add("left_content_container_cafe");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.add("girl_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("apple_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Arnolfini Portrait";
  newLower.innerText = "Jan van Eyck";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_arnolfini_portrait_artist_jpg__WEBPACK_IMPORTED_MODULE_29__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1434";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich 'in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term'.";
}

function fourteenSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_mona_lisa_hero_small_jpg__WEBPACK_IMPORTED_MODULE_30__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.remove("left_content_container_sea");
  getContainer.classList.remove("left_content_container_lady");
  getContainer.classList.remove("left_content_container_swing");
  getContainer.classList.add("left_content_container_cafe");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.remove("girl_new_height");
  newUpper.classList.remove("swing_new_height");
  newUpper.classList.add("mona_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("apple_lower_text");
  newLower.classList.remove("cafe_lower_text");
  newLower.classList.remove("swing_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "Mona Lisa";
  newLower.innerText = "Leonardo da Vinci";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_mona_lisa_artist_jpg__WEBPACK_IMPORTED_MODULE_31__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1503";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world'. The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.";
}

function fithteenSlidePanel() {
  var changeImage = document.getElementById("image_container");
  changeImage.innerText = "";
  var newImage = document.createElement("img");
  newImage.src = _assets_the_swing_hero_small_jpg__WEBPACK_IMPORTED_MODULE_32__;
  changeImage.append(newImage);
  var getContainer = document.getElementById("left_content_container");
  getContainer.classList.add("left_content_container_swing");
  getContainer.classList.remove("left_content_container_cafe");
  var newUpper = document.getElementById("left_upper_text");
  newUpper.innerText = "";
  newUpper.classList.remove("mona_new_height");
  newUpper.classList.add("swing_new_height");
  var newLower = document.getElementById("left_lower_text");
  newLower.classList.add("swing_lower_text");
  newLower.innerText = "";
  newUpper.innerText = "The Swing";
  newLower.innerText = "Jean Honore Fragonard";
  var getNewThumb = document.getElementById("left_thumb_container");
  getNewThumb.innerText = "";
  var newThumb = document.createElement("img");
  newThumb.src = _assets_the_swing_artist_jpg__WEBPACK_IMPORTED_MODULE_33__;
  getNewThumb.append(newThumb);
  var newDate = document.getElementById("date_content");
  newDate.innerText = "";
  newDate.innerText = "1767";
  var newDescription = document.getElementById("right_content_description");
  newDescription.innerText = "";
  newDescription.innerText = "The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.";
}

function loadSlide() {
  var section = document.createElement("section");
  section.id = "main_section";
  var nav = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navigationBar)();
  var panelOne = templatePanel();
  var slide = document.getElementById("slide_page");
  section.append(panelOne);
  slide.append(nav, section);
  (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.stopSlide)();
}
loadSlide();
(0,_footer__WEBPACK_IMPORTED_MODULE_3__.loadFooter)();
selectPanel();

function selectPanel() {
  var getForward = document.getElementById("back_button");
  var getBack = document.getElementById("forward_button");
  var functionArray = [firstSlidePanel, secondSlidePanel, thirdSlidePanel, fourthSlidePanel, fithSlidePanel, sixSlidePanel, sevenSlidePanel, eightSlidePanel, nineSlidePanel, tenSlidePanel, elevenSlidePanel, twelveSlidePanel, thirteenSlidePanel, fourteenSlidePanel, fithteenSlidePanel];
  functionArray.id = "function_array";
  console.log(functionArray.indexOf(firstSlidePanel));
  console.log(functionArray.indexOf(secondSlidePanel));
  console.log(functionArray.indexOf(thirdSlidePanel));
  console.log(functionArray.indexOf(fourthSlidePanel));
  console.log(functionArray.indexOf(fithSlidePanel));
  console.log(functionArray.indexOf(sixSlidePanel));
  console.log(functionArray.indexOf(sevenSlidePanel));
  console.log(functionArray.indexOf(eightSlidePanel));
  console.log(functionArray.indexOf(nineSlidePanel));
  console.log(functionArray.indexOf(tenSlidePanel));
  console.log(functionArray.indexOf(elevenSlidePanel));
  console.log(functionArray.indexOf(twelveSlidePanel));
  console.log(functionArray.indexOf(thirteenSlidePanel));
  console.log(functionArray.indexOf(fourteenSlidePanel));
  console.log(functionArray.indexOf(fithteenSlidePanel));
  var index = 0;
  if (getForward.addEventListener("click", function () {
    if (index < 14) {
      index++;
      functionArray[index]();
    }
  })) ;
  if (getBack.addEventListener("click", function () {
    if (index > 0) {
      index--;
      functionArray[index]();
      console.log(index);
    }
  })) ;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFFBQVEsWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxX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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUdBLFNBQVNtQyxhQUFULEdB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T0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQmYsZ0JBQXRCLENBQVo7QUFDQWEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQmQsZ0JBQXRCLENBQVo7QUFDQVksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQmIsa0JBQXRCLENBQVo7QUFDQVcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQlosa0JBQXRCLENBQVo7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQlgsa0JBQXRCLENBQVo7QUFFQSxNQUFJWSxLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQUdOLFVBQVUsQ0FBQ08sZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVTtBQUM5QyxRQUFHRCxLQUFLLEdBQUcsRUFBWCxFQUNBO0FBQ0dBLE1BQUFBLEtBQUs7QUFDTEosTUFBQUEsYUFBYSxDQUFDSSxLQUFELENBQWI7QUFDRjtBQUNKLEdBTkUsQ0FBSCxFQU1HO0FBRUgsTUFBR0wsT0FBTyxDQUFDTSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQzNDLFFBQUdELEtBQUssR0FBRyxDQUFYLEVBQ0E7QUFDSUEsTUFBQUEsS0FBSztBQUNMSixNQUFBQSxhQUFhLENBQUNJLEtBQUQsQ0FBYjtBQUNBSCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNIO0FBQ0osR0FQRSxDQUFILEVBT0c7QUFHTixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9zcmMvY29tcG9uZW50cy9wYWdlb25lLmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9zcmMvZ2xvYmFsLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL3NyYy9nbG9iYWwtc3R5bGUuY3NzPzEzMDkiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeXBhbmVscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vZ2xvYmFsLXN0eWxlLmNzcyc7XG5pbXBvcnQgYmFja0xvZ28gZnJvbSAnLi4vYXNzZXRzL3NoYXJlZC9pY29uLW5leHQtYnV0dG9uLnN2Zyc7XG5pbXBvcnQgZm9yd2FyZExvZ28gZnJvbSAnLi4vYXNzZXRzL3NoYXJlZC9pY29uLWJhY2stYnV0dG9uLnN2Zyc7XG5cbmZ1bmN0aW9uIGZvb3RlclNlY3Rpb24oKXtcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyX2NvbnRhaW5lclwiKTtcblxuICAgIGxldCBnZXRVcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF91cHBlcl90ZXh0XCIpO1xuICAgIGxldCBnZXRsb3dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9sb3dlcl90ZXh0XCIpO1xuXG5cbiAgICBjb25zdCBsZWZ0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImxlZnRfd3JhcHBlclwiKTtcbiAgICBsZXQgdG9wVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b3BUaXRsZS5pbm5lclRleHQgPSBnZXRVcHBlci5pbm5lclRleHQ7XG4gICAgdG9wVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvcF90aXRsZVwiKTtcblxuICAgIGxldCBib3R0b21OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYm90dG9tTmFtZS5pbm5lclRleHQgPSBnZXRsb3dlci5pbm5lclRleHQ7XG4gICAgYm90dG9tTmFtZS5jbGFzc0xpc3QuYWRkKFwiYm90dG9tX25hbWVcIik7XG5cblxuICAgIGNvbnN0IHJpZ2h0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyaWdodF93cmFwcGVyXCIpO1xuICAgIGxldCBmb3J3YXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb3J3YXJkLnNyYyA9IGZvcndhcmRMb2dvO1xuICAgIGZvcndhcmQuaWQgPSBcImZvcndhcmRfYnV0dG9uXCI7XG5cbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYmFjay5zcmMgPSBiYWNrTG9nbztcbiAgICBiYWNrLmlkID0gXCJiYWNrX2J1dHRvblwiO1xuXG5cbiAgICBsZWZ0V3JhcHBlci5hcHBlbmQodG9wVGl0bGUsIGJvdHRvbU5hbWUpO1xuICAgIHJpZ2h0V3JhcHBlci5hcHBlbmQoZm9yd2FyZCwgYmFjayk7XG5cbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kKGxlZnRXcmFwcGVyLCByaWdodFdyYXBwZXIpO1xuICAgIHJldHVybiBmb290ZXJDb250YWluZXI7XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gbG9hZEZvb3Rlcigpe1xuICAgIGNvbnN0IGdldFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZV9wYWdlXCIpO1xuICAgIGNvbnN0IGZvb3RlciA9IGZvb3RlclNlY3Rpb24oKTtcblxuICAgIGdldFNsaWRlLmFwcGVuZChmb290ZXIpO1xufSIsImltcG9ydCBnYWxsZXJpYUxvZ28gZnJvbSAnLi4vYXNzZXRzL3NoYXJlZC9sb2dvLnN2Zyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vZ2xvYmFsLXN0eWxlLmNzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uQmFyKCl7XG4gICAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbl93cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lX3RpdGxlX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGl0bGUuc3JjID0gZ2FsbGVyaWFMb2dvO1xuXG4gICAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lX3NsaWRlX2NvbnRhaW5lclwiKTtcbiAgICBzbGlkZUNvbnRhaW5lci5pZCA9IFwiaG9tZV9zbGlkZV9jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHNsaWRlQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc2xpZGVBbmNob3IuY2xhc3NMaXN0LmFkZChcInNsaWRlX2FuY2hvcl9idXR0b25cIik7XG4gICAgc2xpZGVBbmNob3IuaWQgPSBcInNsaWRlX2FuY2hvcl9idXR0b25cIjtcbiAgICBzbGlkZUFuY2hvci5ocmVmID0gXCJzbGlkZXNob3cuaHRtbFwiO1xuICAgIGNvbnN0IHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2xpZGUuaW5uZXJUZXh0ID0gXCJWSUVXIElORk9STUFUSU9OXCI7XG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZChcInNsaWRlX2J1dHRvblwiKTtcbiAgICBzbGlkZS5pZCA9IFwic2xpZGVfYnV0dG9uXCI7XG4gICAgc2xpZGVBbmNob3IuYXBwZW5kKHNsaWRlKTtcblxuXG4gICAgY29uc3Qgc2xpZGVBbmNob3JTdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc2xpZGVBbmNob3JTdG9wLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9hbmNob3JfYnV0dG9uX3N0b3BcIik7XG4gICAgc2xpZGVBbmNob3JTdG9wLmhyZWYgPSBcInNsaWRlc2hvdy5odG1sXCI7XG5cbiAgICBjb25zdCBzbGlkZUNvbnRhaW5lclN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNsaWRlQ29udGFpbmVyU3RvcC5jbGFzc0xpc3QuYWRkKFwiaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcFwiKTtcbiAgICBzbGlkZUNvbnRhaW5lclN0b3AuaWQgPSBcImhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3BcIjtcblxuXG5cbiAgICBjb25zdCBzbGlkZUFuY2hvckhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbGlkZUFuY2hvckhvbWUuY2xhc3NMaXN0LmFkZChcInNsaWRlX2FuY2hvcl9ob21lXCIpO1xuICAgIHNsaWRlQW5jaG9ySG9tZS5ocmVmID0gXCJpbmRleC5odG1sXCI7XG4gICAgY29uc3Qgc2xpZGVTdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2xpZGVTdG9wLmlubmVyVGV4dCA9IFwiSE9NRVwiOyBcbiAgICBzbGlkZUFuY2hvckhvbWUuYXBwZW5kKHNsaWRlU3RvcCk7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmQodGl0bGUpO1xuICAgIHNsaWRlQ29udGFpbmVyLmFwcGVuZChzbGlkZUFuY2hvcik7XG4gICAgc2xpZGVDb250YWluZXJTdG9wLmFwcGVuZChzbGlkZUFuY2hvckhvbWUpO1xuXG4gICAgbmF2V3JhcHBlci5hcHBlbmQodGl0bGVDb250YWluZXIsIHNsaWRlQ29udGFpbmVyLCBzbGlkZUNvbnRhaW5lclN0b3ApO1xuXG4gICAgcmV0dXJuIG5hdldyYXBwZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wU2xpZGUoKXtcbiAgICBjb25zdCBnZXRTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZV9zbGlkZV9jb250YWluZXJcIik7XG4gICAgZ2V0U2xpZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IGdldFNsaWRlU3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcFwiKTtcbiAgICBnZXRTbGlkZVN0b3Auc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsZWZ0UGFuZWwoaW1hZ2VTb3VyY2UsIHVwcGVyRGVzY3JpcHRpb24sIGxvd2VyRGVzY3JpcHRpb24sIHRodW1iTG9nbyl7XG4gICAgY29uc3QgbGVmdFBhbmVsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFBhbmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGVmdF9wYW5lbF93cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZV9jb250YWluZXJcIik7XG4gICAgaW1hZ2VDb250YWluZXIuaWQgPSBcImltYWdlX2NvbnRhaW5lclwiO1xuXG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xuXG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuaWQgPSBcImxlZnRfY29udGVudF9jb250YWluZXJcIjtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0X2NvbnRhaW5lcl9mb3J0eVwiKTtcblxuICAgIGxldCB1cHBlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB1cHBlclRleHQuY2xhc3NMaXN0LmFkZChcImxlZnRfdXBwZXJfdGV4dFwiKTtcbiAgICB1cHBlclRleHQuaWQgPSBcImxlZnRfdXBwZXJfdGV4dFwiO1xuICAgIHVwcGVyVGV4dC5pbm5lclRleHQgID0gdXBwZXJEZXNjcmlwdGlvbjtcbiAgICBsZXQgbG93ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG93ZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbG93ZXJUZXh0LmlkID0gXCJsZWZ0X2xvd2VyX3RleHRcIjtcbiAgICBsb3dlclRleHQuaW5uZXJUZXh0ID0gbG93ZXJEZXNjcmlwdGlvbjtcblxuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQodXBwZXJUZXh0LCBsb3dlclRleHQpO1xuXG5cblxuXG4gICAgY29uc3QgdGh1bWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRodW1iQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICB0aHVtYkNvbnRhaW5lci5pZCA9IFwibGVmdF90aHVtYl9jb250YWluZXJcIjtcbiAgICB0aHVtYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF90aHVtYl9mb3J0eVwiKTtcblxuICAgIGxldCB0aHVtYkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0aHVtYkltYWdlLnNyYyA9IHRodW1iTG9nbztcblxuICAgIHRodW1iQ29udGFpbmVyLmFwcGVuZCh0aHVtYkltYWdlKTtcblxuICAgIGxlZnRQYW5lbFdyYXBwZXIuYXBwZW5kKGltYWdlQ29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyLCB0aHVtYkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gbGVmdFBhbmVsV3JhcHBlcjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRQYW5lbChyaWdodERlc2NyaXB0aW9uLCBkYXRlRGVzY3JpcHRpb24pe1xuICAgIGNvbnN0IHJpZ2h0UGFuZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodFBhbmVsV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmlnaHRfcGFuZWxfd3JhcHBlclwiKTtcblxuXG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZV9jb250YWluZXJcIik7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gZGF0ZURlc2NyaXB0aW9uO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVfY29udGVudFwiKTtcbiAgICBkYXRlLmlkID0gXCJkYXRlX2NvbnRlbnRcIjtcbiAgICBkYXRlQ29udGFpbmVyLmFwcGVuZChkYXRlKTtcblxuXG4gICAgY29uc3QgcmlnaHRDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJpZ2h0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IHJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJpZ2h0Q29udGVudC5pbm5lclRleHQgPSByaWdodERlc2NyaXB0aW9uO1xuICAgIHJpZ2h0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICByaWdodENvbnRlbnQuaWQgPSBcInJpZ2h0X2NvbnRlbnRfZGVzY3JpcHRpb25cIjtcblxuXG4gICAgcmlnaHRDb250ZW50Q29udGFpbmVyLmFwcGVuZChyaWdodENvbnRlbnQpO1xuXG4gICAgcmlnaHRQYW5lbFdyYXBwZXIuYXBwZW5kKGRhdGVDb250YWluZXIsIHJpZ2h0Q29udGVudENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gcmlnaHRQYW5lbFdyYXBwZXI7XG5cbn1cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgLS1mb250LWxpYnJlOiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXG5cXG59XFxuaHRtbCBib2R5e1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiBOYXZwYWdlIFBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5uYXZpZ2F0aW9uX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAyLjVyZW0gMi41cmVtIDIuNXJlbSAyLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNsaWRlX2FuY2hvcl9idXR0b24sIC5zbGlkZV9hbmNob3JfYnV0dG9uX3N0b3AsIC5zbGlkZV9hbmNob3JfaG9tZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5cXG4uZGlzcGxheV9oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZGlzcGxheV9zaG93e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3B7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lciBwe1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNTdweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9wIHB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMi41N3B4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKiogSG9tZSBQYWdlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jbWFpbl9zZWN0aW9ue1xcbiAgICBtYXJnaW46IDAgMi41cmVtIDAgMi41cmVtO1xcbiAgICBoZWlnaHQ6IDcyNHB4O1xcbn1cXG5cXG5cXG4jaG9tZV93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiA0MHB4O1xcbiAgICByb3ctZ2FwOiA0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNDAwcHg7XFxuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcXG59XFxuXFxuI2hvbWVfcGFuZWxfd3JhcHBlcntcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4ucGFuZWxfb25le1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4jaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDI5cHg7XFxuICAgIHdpZHRoOiAyNDZweDtcXG4gICAgaGVpZ2h0OiA1NHB4O1xcbiAgICBsZWZ0OiAzNnB4O1xcbn1cXG4jaG9tZV90b3BfY29udGVudHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuI2hvbWVfYm90dG9tX2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi8qKioqKioqKioqKioqIFBhbmVscyAqKioqKioqKi9cXG4ucGFuZWxfdHdve1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4ucGFuZWxfdHdvICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcbi5wYW5lbF90aHJlZXtcXG4gICAgaGVpZ2h0OiAyODVweDtcXG59XFxuXFxuXFxuLnBhbmVsX2ZvdXJ7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcbi5wYW5lbF9mb3VyICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF9maXZle1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICB0b3A6IC0xNTBweDtcXG59XFxuLnBhbmVsX2ZpdmUgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX3NpeHtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG59XFxuLnBhbmVsX3NpeCAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfc2V2ZW57XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHRvcDogLTExNXB4O1xcbn1cXG4ucGFuZWxfc2V2ZW4gI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX2VpZ2h0e1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0b3A6IC0xNTBweDtcXG59XFxuLnBhbmVsX2VpZ2h0ICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9uaW5le1xcbiAgICBoZWlnaHQ6IDQyMHB4O1xcbiAgICB0b3A6IC0zMTBweDtcXG59XFxuLnBhbmVsX25pbmUgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX3RlbntcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgdG9wOiAtMjIwcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9lbGV2ZW57XFxuICAgIGhlaWdodDogNTI1cHg7XFxuICAgIHRvcDogLTExNXB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfdHdlbHZle1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgICB0b3A6IC00MDBweDtcXG59XFxuLnBhbmVsX3R3ZWx2ZSAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfdGhpcnRlZW57XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHRvcDogLTQxNXB4O1xcbn1cXG4ucGFuZWxfdGhpcnRlZW4gI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX2ZvdXJ0ZWVue1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICB0b3A6IC00ODVweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnBhbmVsX2ZpdGh0ZWVue1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICB0b3A6IC00OTVweDtcXG4gICAgcmlnaHQ6IC0zNjZweDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKiogUGFuZWxzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uaW1hZ2VfY29udGFpbmVye1xcbiAgICB3aWR0aDogNDc1cHg7XFxuICAgIGhlaWdodDogNTYwcHg7XFxufVxcblxcbi5pbWFnZV9jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5wYW5lbF9ob2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogNjI0cHg7XFxufVxcblxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogNDQ1cHg7XFxuICAgIGhlaWdodDogMjM4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcblxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2dpcmx7XFxuICAgIGhlaWdodDogMzAycHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2d1ZXJuaWNhe1xcbiAgICBoZWlnaHQ6IDE3NHB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWF7XFxuICAgIGhlaWdodDogMzAycHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2xhZHl7XFxuICAgIGhlaWdodDogMjM4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9jYWZle1xcbiAgICBoZWlnaHQ6IDIzOHB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9zd2luZ3tcXG4gICAgaGVpZ2h0OiAxNzRweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfc2VsZntcXG4gICAgaGVpZ2h0OiAyMzhweDtcXG59XFxuXFxuXFxuXFxuLmxlZnRfcGFuZWxfd3JhcHBlcntcXG4gICAgd2lkdGg6IDg1MXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sZWZ0X3VwcGVyX3RleHR7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgd2lkdGg6IDI1OXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDY1cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5naXJsX25ld19oZWlnaHR7XFxuICAgIHdpZHRoOiAzODBweDtcXG59XFxuLm1vbmFfbmV3X2hlaWdodHtcXG4gICAgd2lkdGg6IDIxMnB4O1xcbn1cXG4uc3dpbmdfbmV3X2hlaWdodHtcXG4gICAgd2lkdGg6IDMxNnB4O1xcbn1cXG5cXG5cXG5cXG4ubGVmdF9sb3dlcl90ZXh0e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxuICAgIHRvcDogMTQ1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ucGVhcmxfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAyMDNweDtcXG59XFxuLmd1ZXJuaWNhX2xvd2VyX3RleHR7XFxuICAgIHRvcDogNzBweDtcXG59XFxuLnNlYV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDIwOXB4O1xcbn1cXG4uY2FmZV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDE0NnB4XFxufVxcbi5hcHBsZV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDE0NHB4O1xcbn1cXG4uc3dpbmdfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiA3NnB4O1xcbn1cXG4uZ3lwc3lfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAyMjFweDtcXG59XFxuLnNlbGZfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAxNThweDtcXG59XFxuXFxuXFxuXFxuXFxuLmxlZnRfdGh1bWJfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxOTBweDtcXG4gICAgdG9wOiA0OTZweDtcXG59XFxuLnJpZ2h0X3BhbmVsX3dyYXBwZXJ7XFxuICAgIHdpZHRoOiA1MzlweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGF0ZV9jb250YWluZXJ7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbn1cXG5cXG4uZGF0ZV9jb250ZW50e1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zM3B4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICBoZWlnaHQ6IDE4MXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucmlnaHRfY29udGVudF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzNjRweDsgXFxuICAgIGxlZnQ6IDQ1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMTZweDtcXG59XFxuXFxuLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVyIHB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5mb290ZXJfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMCAyLjVyZW0gMCAyLjVyZW07XFxufVxcblxcblxcbi50b3BfdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuLmJvdHRvbV9uYW1le1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqICAgICAgIFNsaWRlIFBhZ2UgICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI3NsaWRlX3BhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi8qXFxuXFxuI2Zvb3Rlcl9jb250YWluZXJ7XFxuICAgIG9yZGVyOiAzO1xcbn1cXG4jbmF2aWdhdGlvbl93cmFwcGVye1xcbiAgICBvcmRlcjogMTtcXG59XFxuI21haW5fc2VjdGlvbntcXG4gICAgb3JkZXI6IDI7XFxufVxcblxcbiovXFxuXFxuLnJpZ2h0X3dyYXBwZXJ7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDkwLjY5cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgLyoqKioqKioqKiogSG9tZSBQYWdlICAqKioqKioqKioqKioqKioqKioqKi9cXG4gICAgI2hvbWVfd3JhcHBlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xcbiAgICB9XFxuXFxuICAgIC5zbGlkZV9hbmNob3JfYnV0dG9ue1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5ob21lX3NsaWRlX2NvbnRhaW5lciBwe1xcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XFxuICAgIH1cXG5cXG4gICAgLnBhbmVsX2ZpdmUsIC5wYW5lbF9zZXZlbiwgLnBhbmVsX2VpZ2h0LCAucGFuZWxfbmluZSwgXFxuICAgIC5wYW5lbF90ZW4sIC5wYW5lbF9lbGV2ZW4sIC5wYW5lbF90d2VsdmUsIC5wYW5lbF90aGlydGVlbixcXG4gICAgLnBhbmVsX2ZvdXJ0ZWVuLCAucGFuZWxfZml0aHRlZW5cXG4gICAge1xcbiAgICAgICAgdG9wOiB1bnNldDtcXG4gICAgfVxcbiAgICAucGFuZWxfZml0aHRlZW57XFxuICAgICAgICByaWdodDogdW5zZXQ7XFxuICAgIH1cXG5cXG5cXG4gICAgLyoqKioqKioqKiogU2xpZGVTaG93IFBhZ2UgICoqKioqKioqKioqKioqKioqKioqL1xcbiAgICAuc2xpZGVfYW5jaG9yX2hvbWUgcHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICB9XFxuICAgIC5wYW5lbF9ob2xkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAubGVmdF9wYW5lbF93cmFwcGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmltYWdlX2NvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAzMjdweDtcXG4gICAgICAgIGhlaWdodDogMjgwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxlZnRfY29udGVudF9jb250YWluZXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiA3MnB4O1xcbiAgICAgICAgd2lkdGg6IDIyOHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcXG4gICAgICAgIHRvcDogMjM2cHg7XFxuICAgIH1cXG4gICAgLmxlZnRfdXBwZXJfdGV4dHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHdpZHRoOiAyMzJweDtcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxuICAgICAgICB0b3A6IDIwcHg7XFxuICAgIH1cXG4gICAgLmxlZnRfbG93ZXJfdGV4dHtcXG4gICAgICAgIHRvcDogNTFweDtcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxuXFxuICAgIH1cXG4gICAgLmxlZnRfdGh1bWJfY29udGFpbmVye1xcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xcbiAgICAgICAgdG9wOiAzNDBweDtcXG4gICAgICAgIGxlZnQ6IDg2cHg7XFxuICAgIH1cXG4gICAgLmxlZnRfdGh1bWJfY29udGFpbmVyIGltZ3tcXG4gICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB9XFxuXFxuICAgIC5kYXRlX2NvbnRlbnR7XFxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICAgICAgbGVmdDogMTk2cHg7XFxuICAgICAgICB0b3A6IDc0cHg7IFxcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcXG4gICAgfVxcbiAgICAucmlnaHRfY29udGVudF9jb250YWluZXJ7XFxuICAgICAgICB0b3A6IDE0MHB4O1xcbiAgICAgICAgd2lkdGg6IDg2JTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAucmlnaHRfY29udGVudF9kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiAzMjdweDtcXG4gICAgfVxcblxcbiAgICAucmlnaHRfcGFuZWxfd3JhcHBlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXJfY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgbWFyZ2luOiA3LjVyZW0gMi41cmVtIDAgMi41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2dpcmx7XFxuICAgICAgICB3aWR0aDogMjU3cHg7XFxuICAgIH1cXG4gICAgLmdpcmxfbmV3X2hlaWdodHtcXG4gICAgICAgIHdpZHRoOiAxNzFweDtcXG4gICAgICAgIHRvcDogNnB4O1xcbiAgICB9XFxuICAgIC5wZWFybF9sb3dlcl90ZXh0e1xcbiAgICAgICAgdG9wOiA1N3B4O1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGVfZ3Vlcm5pY2F7XFxuICAgICAgICB0b3A6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnN0b3JtX21vYmlsZXtcXG4gICAgICAgIHdpZHRoOiAyODFweDtcXG4gICAgfVxcbiAgICAuc3Rvcm1fdGV4dF9tb2JpbGV7XFxuICAgICAgICB3aWR0aDogMjI0cHg7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZV9rYW5hZ2F3YV90ZXh0e1xcbiAgICAgICAgd2lkdGg6IDIzMnB4O1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5kYXRlX2NvbnRlbnR7XFxuICAgICAgICBsZWZ0OiA4NnB4O1xcbiAgICAgICAgdG9wOiAxMDZweDtcXG4gICAgfVxcbiAgICAucmlnaHRfY29udGVudF9jb250YWluZXJ7XFxuICAgICAgICB0b3A6IDE3MnB4O1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXJfY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHNCQUFzQjs7SUFFdEIsd0NBQXdDOztBQUU1QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQSxzRUFBc0U7QUFDdEU7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7O0FBR0EsbUVBQW1FO0FBQ25FO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7OztBQUtBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7Ozs7QUFLQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOzs7OztBQUtBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7Ozs7QUFLQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7Ozs7OztBQU1BO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7QUFHQSxvREFBb0Q7QUFDcEQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7OztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7OztBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7OztBQUdBLDJFQUEyRTtBQUMzRTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTs7Ozs7Ozs7Ozs7O0NBWUM7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLDJDQUEyQztJQUMzQztRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7Ozs7UUFJSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7SUFDaEI7OztJQUdBLGdEQUFnRDtJQUNoRDtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7UUFDdkIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZO1FBQ1osYUFBYTtRQUNiLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixVQUFVO1FBQ1YsU0FBUztJQUNiO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTs7SUFFZDtJQUNBO1FBQ0ksWUFBWTtRQUNaLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxTQUFTO1FBQ1QsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFVBQVU7UUFDVix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxTQUFTO0lBQ2I7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG46cm9vdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG4gICAgLS1mb250LWxpYnJlOiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcXG5cXG59XFxuaHRtbCBib2R5e1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiBOYXZwYWdlIFBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5uYXZpZ2F0aW9uX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAyLjVyZW0gMi41cmVtIDIuNXJlbSAyLjVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNsaWRlX2FuY2hvcl9idXR0b24sIC5zbGlkZV9hbmNob3JfYnV0dG9uX3N0b3AsIC5zbGlkZV9hbmNob3JfaG9tZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5cXG4uZGlzcGxheV9oaWRle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZGlzcGxheV9zaG93e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3B7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lciBwe1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNTdweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9wIHB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMi41N3B4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKiogSG9tZSBQYWdlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jbWFpbl9zZWN0aW9ue1xcbiAgICBtYXJnaW46IDAgMi41cmVtIDAgMi41cmVtO1xcbiAgICBoZWlnaHQ6IDcyNHB4O1xcbn1cXG5cXG5cXG4jaG9tZV93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiA0MHB4O1xcbiAgICByb3ctZ2FwOiA0MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNDAwcHg7XFxuICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcXG59XFxuXFxuI2hvbWVfcGFuZWxfd3JhcHBlcntcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4ucGFuZWxfb25le1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4jaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDI5cHg7XFxuICAgIHdpZHRoOiAyNDZweDtcXG4gICAgaGVpZ2h0OiA1NHB4O1xcbiAgICBsZWZ0OiAzNnB4O1xcbn1cXG4jaG9tZV90b3BfY29udGVudHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuI2hvbWVfYm90dG9tX2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi8qKioqKioqKioqKioqIFBhbmVscyAqKioqKioqKi9cXG4ucGFuZWxfdHdve1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4ucGFuZWxfdHdvICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcbi5wYW5lbF90aHJlZXtcXG4gICAgaGVpZ2h0OiAyODVweDtcXG59XFxuXFxuXFxuLnBhbmVsX2ZvdXJ7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcbi5wYW5lbF9mb3VyICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF9maXZle1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICB0b3A6IC0xNTBweDtcXG59XFxuLnBhbmVsX2ZpdmUgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX3NpeHtcXG4gICAgaGVpZ2h0OiAyODBweDtcXG59XFxuLnBhbmVsX3NpeCAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfc2V2ZW57XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHRvcDogLTExNXB4O1xcbn1cXG4ucGFuZWxfc2V2ZW4gI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX2VpZ2h0e1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB0b3A6IC0xNTBweDtcXG59XFxuLnBhbmVsX2VpZ2h0ICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9uaW5le1xcbiAgICBoZWlnaHQ6IDQyMHB4O1xcbiAgICB0b3A6IC0zMTBweDtcXG59XFxuLnBhbmVsX25pbmUgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX3RlbntcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgdG9wOiAtMjIwcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9lbGV2ZW57XFxuICAgIGhlaWdodDogNTI1cHg7XFxuICAgIHRvcDogLTExNXB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfdHdlbHZle1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgICB0b3A6IC00MDBweDtcXG59XFxuLnBhbmVsX3R3ZWx2ZSAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfdGhpcnRlZW57XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHRvcDogLTQxNXB4O1xcbn1cXG4ucGFuZWxfdGhpcnRlZW4gI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX2ZvdXJ0ZWVue1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICB0b3A6IC00ODVweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnBhbmVsX2ZpdGh0ZWVue1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICB0b3A6IC00OTVweDtcXG4gICAgcmlnaHQ6IC0zNjZweDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKiogUGFuZWxzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uaW1hZ2VfY29udGFpbmVye1xcbiAgICB3aWR0aDogNDc1cHg7XFxuICAgIGhlaWdodDogNTYwcHg7XFxufVxcblxcbi5pbWFnZV9jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5wYW5lbF9ob2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogNjI0cHg7XFxufVxcblxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogNDQ1cHg7XFxuICAgIGhlaWdodDogMjM4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxufVxcblxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2dpcmx7XFxuICAgIGhlaWdodDogMzAycHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2d1ZXJuaWNhe1xcbiAgICBoZWlnaHQ6IDE3NHB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWF7XFxuICAgIGhlaWdodDogMzAycHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2xhZHl7XFxuICAgIGhlaWdodDogMjM4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9jYWZle1xcbiAgICBoZWlnaHQ6IDIzOHB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9zd2luZ3tcXG4gICAgaGVpZ2h0OiAxNzRweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfc2VsZntcXG4gICAgaGVpZ2h0OiAyMzhweDtcXG59XFxuXFxuXFxuXFxuLmxlZnRfcGFuZWxfd3JhcHBlcntcXG4gICAgd2lkdGg6IDg1MXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5sZWZ0X3VwcGVyX3RleHR7XFxuICAgIGZvbnQtc2l6ZTogNTZweDtcXG4gICAgd2lkdGg6IDI1OXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDY1cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5naXJsX25ld19oZWlnaHR7XFxuICAgIHdpZHRoOiAzODBweDtcXG59XFxuLm1vbmFfbmV3X2hlaWdodHtcXG4gICAgd2lkdGg6IDIxMnB4O1xcbn1cXG4uc3dpbmdfbmV3X2hlaWdodHtcXG4gICAgd2lkdGg6IDMxNnB4O1xcbn1cXG5cXG5cXG5cXG4ubGVmdF9sb3dlcl90ZXh0e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxuICAgIHRvcDogMTQ1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ucGVhcmxfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAyMDNweDtcXG59XFxuLmd1ZXJuaWNhX2xvd2VyX3RleHR7XFxuICAgIHRvcDogNzBweDtcXG59XFxuLnNlYV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDIwOXB4O1xcbn1cXG4uY2FmZV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDE0NnB4XFxufVxcbi5hcHBsZV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDE0NHB4O1xcbn1cXG4uc3dpbmdfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiA3NnB4O1xcbn1cXG4uZ3lwc3lfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAyMjFweDtcXG59XFxuLnNlbGZfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAxNThweDtcXG59XFxuXFxuXFxuXFxuXFxuLmxlZnRfdGh1bWJfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxOTBweDtcXG4gICAgdG9wOiA0OTZweDtcXG59XFxuLnJpZ2h0X3BhbmVsX3dyYXBwZXJ7XFxuICAgIHdpZHRoOiA1MzlweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZGF0ZV9jb250YWluZXJ7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbn1cXG5cXG4uZGF0ZV9jb250ZW50e1xcbiAgICBmb250LXNpemU6IDIwMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zM3B4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICBoZWlnaHQ6IDE4MXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGNvbG9yOiAjZjNmM2YzO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ucmlnaHRfY29udGVudF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzNjRweDsgXFxuICAgIGxlZnQ6IDQ1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMTZweDtcXG59XFxuXFxuLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVyIHB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcblxcbi5mb290ZXJfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMCAyLjVyZW0gMCAyLjVyZW07XFxufVxcblxcblxcbi50b3BfdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuLmJvdHRvbV9uYW1le1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqICAgICAgIFNsaWRlIFBhZ2UgICAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI3NsaWRlX3BhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi8qXFxuXFxuI2Zvb3Rlcl9jb250YWluZXJ7XFxuICAgIG9yZGVyOiAzO1xcbn1cXG4jbmF2aWdhdGlvbl93cmFwcGVye1xcbiAgICBvcmRlcjogMTtcXG59XFxuI21haW5fc2VjdGlvbntcXG4gICAgb3JkZXI6IDI7XFxufVxcblxcbiovXFxuXFxuLnJpZ2h0X3dyYXBwZXJ7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDkwLjY5cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gICAgLyoqKioqKioqKiogSG9tZSBQYWdlICAqKioqKioqKioqKioqKioqKioqKi9cXG4gICAgI2hvbWVfd3JhcHBlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xcbiAgICB9XFxuXFxuICAgIC5zbGlkZV9hbmNob3JfYnV0dG9ue1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5ob21lX3NsaWRlX2NvbnRhaW5lciBwe1xcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XFxuICAgIH1cXG5cXG4gICAgLnBhbmVsX2ZpdmUsIC5wYW5lbF9zZXZlbiwgLnBhbmVsX2VpZ2h0LCAucGFuZWxfbmluZSwgXFxuICAgIC5wYW5lbF90ZW4sIC5wYW5lbF9lbGV2ZW4sIC5wYW5lbF90d2VsdmUsIC5wYW5lbF90aGlydGVlbixcXG4gICAgLnBhbmVsX2ZvdXJ0ZWVuLCAucGFuZWxfZml0aHRlZW5cXG4gICAge1xcbiAgICAgICAgdG9wOiB1bnNldDtcXG4gICAgfVxcbiAgICAucGFuZWxfZml0aHRlZW57XFxuICAgICAgICByaWdodDogdW5zZXQ7XFxuICAgIH1cXG5cXG5cXG4gICAgLyoqKioqKioqKiogU2xpZGVTaG93IFBhZ2UgICoqKioqKioqKioqKioqKioqKioqL1xcbiAgICAuc2xpZGVfYW5jaG9yX2hvbWUgcHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICB9XFxuICAgIC5wYW5lbF9ob2xkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAubGVmdF9wYW5lbF93cmFwcGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgLmltYWdlX2NvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOiAzMjdweDtcXG4gICAgICAgIGhlaWdodDogMjgwcHg7XFxuICAgIH1cXG5cXG4gICAgLmxlZnRfY29udGVudF9jb250YWluZXJ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiA3MnB4O1xcbiAgICAgICAgd2lkdGg6IDIyOHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcXG4gICAgICAgIHRvcDogMjM2cHg7XFxuICAgIH1cXG4gICAgLmxlZnRfdXBwZXJfdGV4dHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIHdpZHRoOiAyMzJweDtcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxuICAgICAgICB0b3A6IDIwcHg7XFxuICAgIH1cXG4gICAgLmxlZnRfbG93ZXJfdGV4dHtcXG4gICAgICAgIHRvcDogNTFweDtcXG4gICAgICAgIGxlZnQ6IDI1cHg7XFxuXFxuICAgIH1cXG4gICAgLmxlZnRfdGh1bWJfY29udGFpbmVye1xcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xcbiAgICAgICAgdG9wOiAzNDBweDtcXG4gICAgICAgIGxlZnQ6IDg2cHg7XFxuICAgIH1cXG4gICAgLmxlZnRfdGh1bWJfY29udGFpbmVyIGltZ3tcXG4gICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB9XFxuXFxuICAgIC5kYXRlX2NvbnRlbnR7XFxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICAgICAgbGVmdDogMTk2cHg7XFxuICAgICAgICB0b3A6IDc0cHg7IFxcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcXG4gICAgfVxcbiAgICAucmlnaHRfY29udGVudF9jb250YWluZXJ7XFxuICAgICAgICB0b3A6IDE0MHB4O1xcbiAgICAgICAgd2lkdGg6IDg2JTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcbiAgICAucmlnaHRfY29udGVudF9kZXNjcmlwdGlvbntcXG4gICAgICAgIHdpZHRoOiAzMjdweDtcXG4gICAgfVxcblxcbiAgICAucmlnaHRfcGFuZWxfd3JhcHBlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXJfY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgbWFyZ2luOiA3LjVyZW0gMi41cmVtIDAgMi41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2dpcmx7XFxuICAgICAgICB3aWR0aDogMjU3cHg7XFxuICAgIH1cXG4gICAgLmdpcmxfbmV3X2hlaWdodHtcXG4gICAgICAgIHdpZHRoOiAxNzFweDtcXG4gICAgICAgIHRvcDogNnB4O1xcbiAgICB9XFxuICAgIC5wZWFybF9sb3dlcl90ZXh0e1xcbiAgICAgICAgdG9wOiA1N3B4O1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGVfZ3Vlcm5pY2F7XFxuICAgICAgICB0b3A6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnN0b3JtX21vYmlsZXtcXG4gICAgICAgIHdpZHRoOiAyODFweDtcXG4gICAgfVxcbiAgICAuc3Rvcm1fdGV4dF9tb2JpbGV7XFxuICAgICAgICB3aWR0aDogMjI0cHg7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZV9rYW5hZ2F3YV90ZXh0e1xcbiAgICAgICAgd2lkdGg6IDIzMnB4O1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5kYXRlX2NvbnRlbnR7XFxuICAgICAgICBsZWZ0OiA4NnB4O1xcbiAgICAgICAgdG9wOiAxMDZweDtcXG4gICAgfVxcbiAgICAucmlnaHRfY29udGVudF9jb250YWluZXJ7XFxuICAgICAgICB0b3A6IDE3MnB4O1xcbiAgICB9XFxuXFxuICAgIC5mb290ZXJfY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzMDBweDtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vZ2xvYmFsLXN0eWxlLmNzcyc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uQmFyLCBzdG9wU2xpZGV9IGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCB7IGxlZnRQYW5lbCwgcmlnaHRQYW5lbCB9IGZyb20gXCIuL3BhZ2VvbmVcIjtcbmltcG9ydCB7IGxvYWRGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5cblxuXG5pbXBvcnQgc3RhcnJ5TG9nbyBmcm9tICcuLi9hc3NldHMvc3RhcnJ5LW5pZ2h0L2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBpbWFnZVRodW1iIGZyb20gJy4uL2Fzc2V0cy9zdGFycnktbmlnaHQvYXJ0aXN0LmpwZyc7XG5cbmltcG9ydCBnaXJsRWFyaW5nTG9nbyBmcm9tICcuLi9hc3NldHMvZ2lybC13aXRoLXBlYXJsLWVhcnJpbmcvaGVyby1zbWFsbC5qcGcnO1xuaW1wb3J0IGdpcmxUaHVtYiBmcm9tICcuLi9hc3NldHMvZ2lybC13aXRoLXBlYXJsLWVhcnJpbmcvYXJ0aXN0LmpwZyc7XG5cbmltcG9ydCBndWVybmFjYUxvZ28gZnJvbSAnLi4vYXNzZXRzL2d1ZXJuaWNhL2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBndWVybmFjYVRodW1iIGZyb20gJy4uL2Fzc2V0cy9ndWVybmljYS9hcnRpc3QuanBnJztcblxuaW1wb3J0IG1hZ2RlbGluZUxvZ28gZnJvbSAnLi4vYXNzZXRzL3Blbml0ZW50LW1hZ2RhbGVuZS9oZXJvLXNtYWxsLmpwZyc7XG5pbXBvcnQgbWFnZGVsaW5lVGh1bWIgZnJvbSAnLi4vYXNzZXRzL3Blbml0ZW50LW1hZ2RhbGVuZS9hcnRpc3QuanBnJztcblxuaW1wb3J0IHNlYVN0b3JtTG9nbyBmcm9tICcuLi9hc3NldHMvdGhlLXN0b3JtLW9uLXRoZS1zZWEtb2YtZ2FsaWxlZS9oZXJvLXNtYWxsLmpwZyc7XG5pbXBvcnQgc2VhU3Rvcm1UaHVtYiBmcm9tICcuLi9hc3NldHMvdGhlLXN0b3JtLW9uLXRoZS1zZWEtb2YtZ2FsaWxlZS9hcnRpc3QuanBnJztcblxuaW1wb3J0IGthbmFnYXdhTG9nbyBmcm9tICcuLi9hc3NldHMvdGhlLWdyZWF0LXdhdmUtb2ZmLWthbmFnYXdhL2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBrYW5hZ2F3YVRodW1iIGZyb20gJy4uL2Fzc2V0cy90aGUtZ3JlYXQtd2F2ZS1vZmYta2FuYWdhd2EvYXJ0aXN0LmpwZyc7XG5cbmltcG9ydCB2YW5Mb2dvIGZyb20gJy4uL2Fzc2V0cy92YW4tZ29naC1zZWxmLXBvcnRyYWl0L2hlcm8tc21hbGwuanBnJztcbmltcG9ydCB2YW5UaHVtYiBmcm9tICcuLi9hc3NldHMvdmFuLWdvZ2gtc2VsZi1wb3J0cmFpdC9hcnRpc3QuanBnJztcblxuaW1wb3J0IGd5cHN5TG9nbyBmcm9tICcuLi9hc3NldHMvdGhlLXNsZWVwaW5nLWd5cHN5L2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBneXBzeVRodW1iIGZyb20gJy4uL2Fzc2V0cy90aGUtc2xlZXBpbmctZ3lwc3kvYXJ0aXN0LmpwZyc7XG5cbmltcG9ydCBsYWR5TG9nbyBmcm9tICcuLi9hc3NldHMvbGFkeS13aXRoLWFuLWVybWluZS9oZXJvLXNtYWxsLmpwZyc7XG5pbXBvcnQgbGFkeVRodW1iIGZyb20gJy4uL2Fzc2V0cy9sYWR5LXdpdGgtYW4tZXJtaW5lL2FydGlzdC5qcGcnO1xuXG5pbXBvcnQgY2FmZUxvZ28gZnJvbSAnLi4vYXNzZXRzL3RoZS1uaWdodC1jYWZlL2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBjYWZlVGh1bWIgZnJvbSAnLi4vYXNzZXRzL3RoZS1uaWdodC1jYWZlL2FydGlzdC5qcGcnO1xuXG5pbXBvcnQgYXBwbGVMb2dvIGZyb20gJy4uL2Fzc2V0cy90aGUtYmFza2V0LW9mLWFwcGxlcy9oZXJvLXNtYWxsLmpwZyc7XG5pbXBvcnQgYXBwbGVUaHVtYiBmcm9tICcuLi9hc3NldHMvdGhlLWJhc2tldC1vZi1hcHBsZXMvYXJ0aXN0LmpwZyc7XG5cbmltcG9ydCBib3lMb2dvIGZyb20gJy4uL2Fzc2V0cy90aGUtYm95LWluLXRoZS1yZWQtdmVzdC9oZXJvLXNtYWxsLmpwZyc7XG5pbXBvcnQgYm95VGh1bWIgZnJvbSAnLi4vYXNzZXRzL3RoZS1ib3ktaW4tdGhlLXJlZC12ZXN0L2FydGlzdC5qcGcnO1xuXG5pbXBvcnQgYXJub0xvZ28gZnJvbSAnLi4vYXNzZXRzL2Fybm9sZmluaS1wb3J0cmFpdC9oZXJvLXNtYWxsLmpwZyc7XG5pbXBvcnQgYXJub1RodW1iIGZyb20gJy4uL2Fzc2V0cy9hcm5vbGZpbmktcG9ydHJhaXQvYXJ0aXN0LmpwZyc7XG5cbmltcG9ydCBtb25hTG9nbyBmcm9tICcuLi9hc3NldHMvbW9uYS1saXNhL2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBtb25hVGh1bWIgZnJvbSAnLi4vYXNzZXRzL21vbmEtbGlzYS9hcnRpc3QuanBnJztcblxuaW1wb3J0IHN3aW5nTG9nbyBmcm9tICcuLi9hc3NldHMvdGhlLXN3aW5nL2hlcm8tc21hbGwuanBnJztcbmltcG9ydCBzd2luZ1RodW1iIGZyb20gJy4uL2Fzc2V0cy90aGUtc3dpbmcvYXJ0aXN0LmpwZyc7XG5cblxuZnVuY3Rpb24gdGVtcGxhdGVQYW5lbCgpe1xuICAgIGNvbnN0IHBhbmVsSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYW5lbEhvbGRlci5jbGFzc0xpc3QuYWRkKFwicGFuZWxfaG9sZGVyXCIpO1xuXG4gICAgbGV0IGxlZnQgPSBsZWZ0UGFuZWwoc3RhcnJ5TG9nbywgXCJTdGFycnkgTmlnaHRcIiwgXCJWaW5jZW50IFZhbiBHb2huXCIsIGltYWdlVGh1bWIpO1xuICAgIGxldCByaWdodCA9IHJpZ2h0UGFuZWwoXCJBbHRob3VnaCBUaGUgU3RhcnJ5IE5pZ2h0IHdhcyBwYWludGVkIGR1cmluZyB0aGUgZGF5IGluIFZhbiBHb2doJ3MgZ3JvdW5kLWZsb29yIHN0dWRpbywgaXQgd291bGQgYmUgaW5hY2N1cmF0ZSB0byBzdGF0ZSB0aGF0IHRoZSBwaWN0dXJlIHdhcyBwYWludGVkIGZyb20gbWVtb3J5LiBUaGUgdmlldyBoYXMgYmVlbiBpZGVudGlmaWVkIGFzIHRoZSBvbmUgZnJvbSBoaXMgYmVkcm9vbSB3aW5kb3csIGZhY2luZyBlYXN0LCBhIHZpZXcgd2hpY2ggVmFuIEdvZ2ggcGFpbnRlZCB2YXJpYXRpb25zIG9mIG5vIGZld2VyIHRoYW4gdHdlbnR5LW9uZSB0aW1lcywgaW5jbHVkaW5nIFRoZSBTdGFycnkgTmlnaHQuICdUaHJvdWdoIHRoZSBpcm9uLWJhcnJlZCB3aW5kb3csJyBoZSB3cm90ZSB0byBoaXMgYnJvdGhlciwgVGhlbywgYXJvdW5kIDIzIE1heSAxODg5LCAnSSBjYW4gc2VlIGFuIGVuY2xvc2VkIHNxdWFyZSBvZiB3aGVhdCAuLi4gYWJvdmUgd2hpY2gsIGluIHRoZSBtb3JuaW5nLCBJIHdhdGNoIHRoZSBzdW4gcmlzZSBpbiBhbGwgaXRzIGdsb3J5LidcIiwgXCIxODg5XCIpO1xuXG4gICAgcGFuZWxIb2xkZXIuYXBwZW5kKGxlZnQsIHJpZ2h0KTtcblxuICAgIHJldHVybiBwYW5lbEhvbGRlcjtcblxufVxuXG5cbmZ1bmN0aW9uIGZpcnN0U2xpZGVQYW5lbCgpe1xuICAgIGxldCBjaGFuZ2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VfY29udGFpbmVyXCIpO1xuICAgIGNoYW5nZUltYWdlLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld0ltYWdlLnNyYyAgPSBzdGFycnlMb2dvO1xuXG4gICAgY2hhbmdlSW1hZ2UuYXBwZW5kKG5ld0ltYWdlKTtcblxuICAgIGxldCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfY29udGVudF9jb250YWluZXJcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2dpcmxcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2d1ZXJuaWNhXCIpO1xuXG5cbiAgICBsZXQgbmV3VXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdXBwZXJfdGV4dFwiKTtcbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJnaXJsX25ld19oZWlnaHRcIik7XG5cbiAgICBsZXQgbmV3TG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QucmVtb3ZlKFwicGVhcmxfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIlwiO1xuXG5cbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlN0YXJyeSBOaWdodFwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiVmluY2VudCBWYW4gR29naFwiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0gaW1hZ2VUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTg4OVwiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQWx0aG91Z2ggVGhlIFN0YXJyeSBOaWdodCB3YXMgcGFpbnRlZCBkdXJpbmcgdGhlIGRheSBpbiBWYW4gR29naCdzIGdyb3VuZC1mbG9vciBzdHVkaW8sIGl0IHdvdWxkIGJlIGluYWNjdXJhdGUgdG8gc3RhdGUgdGhhdCB0aGUgcGljdHVyZSB3YXMgcGFpbnRlZCBmcm9tIG1lbW9yeS4gVGhlIHZpZXcgaGFzIGJlZW4gaWRlbnRpZmllZCBhcyB0aGUgb25lIGZyb20gaGlzIGJlZHJvb20gd2luZG93LCBmYWNpbmcgZWFzdCwgYSB2aWV3IHdoaWNoIFZhbiBHb2doIHBhaW50ZWQgdmFyaWF0aW9ucyBvZiBubyBmZXdlciB0aGFuIHR3ZW50eS1vbmUgdGltZXMsIGluY2x1ZGluZyBUaGUgU3RhcnJ5IE5pZ2h0LiAnVGhyb3VnaCB0aGUgaXJvbi1iYXJyZWQgd2luZG93LCcnIGhlIHdyb3RlIHRvIGhpcyBicm90aGVyLCBUaGVvLCBhcm91bmQgMjMgTWF5IDE4ODksICdJIGNhbiBzZWUgYW4gZW5jbG9zZWQgc3F1YXJlIG9mIHdoZWF0IC4uLiBhYm92ZSB3aGljaCwgaW4gdGhlIG1vcm5pbmcsIEkgd2F0Y2ggdGhlIHN1biByaXNlIGluIGFsbCBpdHMgZ2xvcnkuJ1wiO1xuXG5cbn1cblxuZnVuY3Rpb24gc2Vjb25kU2xpZGVQYW5lbCgpe1xuICAgIGxldCBjaGFuZ2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VfY29udGFpbmVyXCIpO1xuICAgIGNoYW5nZUltYWdlLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld0ltYWdlLnNyYyAgPSBnaXJsRWFyaW5nTG9nbztcblxuICAgIGNoYW5nZUltYWdlLmFwcGVuZChuZXdJbWFnZSk7XG5cbiAgICBsZXQgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9naXJsXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9ndWVybmljYVwiKTtcblxuXG4gICAgbGV0IG5ld1VwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3VwcGVyX3RleHRcIik7XG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2lybF9uZXdfaGVpZ2h0XCIpO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVfZ3Vlcm5pY2FcIik7XG5cbiAgICBsZXQgbmV3TG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QuYWRkKFwicGVhcmxfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QucmVtb3ZlKFwiZ3Vlcm5pY2FfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIlwiO1xuXG5cbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIkdpcmwgd2l0aCBhIFBlYXJsIEVhcnJpbmdcIjtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIkpvaGFubmVzIFZlcm1lZXJcIjtcblxuICAgIGxldCBnZXROZXdUaHVtYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF90aHVtYl9jb250YWluZXJcIik7XG4gICAgZ2V0TmV3VGh1bWIuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3VGh1bWIuc3JjICA9IGdpcmxUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTY2NVwiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIHBhaW50aW5nIGlzIGEgdHJvbmllLCB0aGUgRHV0Y2ggMTd0aC1jZW50dXJ5IGRlc2NyaXB0aW9uIG9mIGEgJ2hlYWQnIHRoYXQgd2FzIG5vdCBtZWFudCB0byBiZSBhIHBvcnRyYWl0LiBJdCBkZXBpY3RzIGEgRXVyb3BlYW4gZ2lybCB3ZWFyaW5nIGFuIGV4b3RpYyBkcmVzcywgYW4gb3JpZW50YWwgdHVyYmFuLCBhbmQgd2hhdCB3YXMgdGhvdWdodCB0byBiZSBhIHZlcnkgbGFyZ2UgcGVhcmwgYXMgYW4gZWFycmluZy4gSW4gMjAxNCwgRHV0Y2ggYXN0cm9waHlzaWNpc3QgVmluY2VudCBJY2tlIHJhaXNlZCBkb3VidHMgYWJvdXQgdGhlIG1hdGVyaWFsIG9mIHRoZSBlYXJyaW5nIGFuZCBhcmd1ZWQgdGhhdCBpdCBsb29rcyBtb3JlIGxpa2UgcG9saXNoZWQgdGluIHRoYW4gcGVhcmwgb24gdGhlIGdyb3VuZHMgb2YgdGhlIHNwZWN1bGFyIHJlZmxlY3Rpb24sIHRoZSBwZWFyIHNoYXBlIGFuZCB0aGUgbGFyZ2Ugc2l6ZSBvZiB0aGUgZWFycmluZy5cIjtcblxufVxuXG5mdW5jdGlvbiB0aGlyZFNsaWRlUGFuZWwoKXtcbiAgICBsZXQgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBjaGFuZ2VJbWFnZS5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zcmMgID0gZ3Vlcm5hY2FMb2dvO1xuXG4gICAgY2hhbmdlSW1hZ2UuYXBwZW5kKG5ld0ltYWdlKTtcblxuICAgIGxldCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfY29udGVudF9jb250YWluZXJcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2dpcmxcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxlZnRfY29udGVudF9jb250YWluZXJfZ3Vlcm5pY2FcIik7XG5cblxuICAgIGxldCBuZXdVcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF91cHBlcl90ZXh0XCIpO1xuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3VXBwZXIuY2xhc3NMaXN0LmFkZChcImdpcmxfbmV3X2hlaWdodFwiKTtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlX2d1ZXJuaWNhXCIpO1xuXG4gICAgbGV0IG5ld0xvd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LnJlbW92ZShcInBlYXJsX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LnJlbW92ZShcInNlYV9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5hZGQoXCJndWVybmljYV9sb3dlcl90ZXh0XCIpO1xuXG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJHdWVybmljYVwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiUGFibG8gUGljYXNzb1wiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0gZ3Vlcm5hY2FUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTkzN1wiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIHNjZW5lIG9jY3VycyB3aXRoaW4gYSByb29tIHdoZXJlLCBvbiB0aGUgbGVmdCwgYSB3aWRlLWV5ZWQgYnVsbCBzdGFuZHMgb3ZlciBhIGdyaWV2aW5nIHdvbWFuIGhvbGRpbmcgYSBkZWFkIGNoaWxkIGluIGhlciBhcm1zLiBJbiB0aGUgY2VudGVyIG9mIHRoZSByb29tIGEgaG9yc2UgZmFsbHMgaW4gYWdvbnkgd2l0aCBhIGxhcmdlIGdhcGluZyBob2xlIGluIGl0cyBzaWRlLCBhcyBpZiBpdCBoYWQganVzdCBiZWVuIHJ1biB0aHJvdWdoIGJ5IGEgc3BlYXIgb3IgamF2ZWxpbi4gVGhlIGhvcnNlIGFwcGVhcnMgdG8gYmUgd2VhcmluZyBjaGFpbiBtYWlsIGFybW9yLCBkZWNvcmF0ZWQgd2l0aCB2ZXJ0aWNhbCB0YWxseSBtYXJrcyBhcnJhbmdlZCBpbiByb3dzLiBBIGRlYWQgYW5kIGRpc21lbWJlcmVkIHNvbGRpZXIgbGllcyB1bmRlciB0aGUgaG9yc2UuIFRoZSBoYW5kIG9mIGhpcyBzZXZlcmVkIHJpZ2h0IGFybSBncmFzcHMgYSBzaGF0dGVyZWQgc3dvcmQsIGZyb20gd2hpY2ggYSBmbG93ZXIgZ3Jvd3MuXCI7XG5cbn1cblxuZnVuY3Rpb24gZm91cnRoU2xpZGVQYW5lbCgpe1xuICAgIGxldCBjaGFuZ2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VfY29udGFpbmVyXCIpO1xuICAgIGNoYW5nZUltYWdlLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld0ltYWdlLnNyYyAgPSBtYWdkZWxpbmVMb2dvO1xuXG4gICAgY2hhbmdlSW1hZ2UuYXBwZW5kKG5ld0ltYWdlKTtcblxuICAgIGxldCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfY29udGVudF9jb250YWluZXJcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2d1ZXJuaWNhXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9tYWdkYWxlbmVcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYVwiKTtcblxuXG4gICAgbGV0IG5ld1VwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3VwcGVyX3RleHRcIik7XG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2lybF9uZXdfaGVpZ2h0XCIpO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVfZ3Vlcm5pY2FcIik7XG5cbiAgICBsZXQgbmV3TG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QucmVtb3ZlKFwiZ3Vlcm5pY2FfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QucmVtb3ZlKFwic2VhX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJQZW5pdGVudCBNYWdkYWxlbmVcIjtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIkFydGVtaXNpYSBHZW50aWxlc2NoaVwiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0gbWFnZGVsaW5lVGh1bWI7XG5cbiAgICBnZXROZXdUaHVtYi5hcHBlbmQobmV3VGh1bWIpO1xuXG4gICAgbGV0IG5ld0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVfY29udGVudFwiKTtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIjE2MjVcIjtcblxuICAgIGxldCBuZXdEZXNjcmlwdGlvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0X2NvbnRlbnRfZGVzY3JpcHRpb25cIik7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlBlbml0ZW50IE1hZ2RhbGVuZSBpcyBhIHBhaW50aW5nIGJ5IHRoZSBJdGFsaWFuIGFydGlzdCBBcnRlbWlzaWEgR2VudGlsZXNjaGkuIEl0IGhhbmdzIGluIFNldmlsbGUgQ2F0aGVkcmFsLiBJdCBoYXMgcHJvYmFibHkgYmVlbiBpbiB0aGUgY2F0aGVkcmFsIHNpbmNlIHRoZSBsYXRlIDE3dGggY2VudHVyeS4gVGhlIHBhaW50aW5nJ3MgZmlyc3QgaG9tZSB3YXMgdGhlIGNvbGxlY3Rpb24gb2YgRmVybmFuZG8gRW5yaXF1ZXogQWZhbiBkZSBSaWJlcmEsIGZyb20gMTYyNiB0byAxNjM3LiBTaGUgcmV0dXJuZWQgdG8gdGhlIHN1YmplY3QgbGF0ZXIgaW4gdGhlIDE2MjBzIGluIE1hcnkgTWFnZGFsZW5lIGFzIE1lbGFuY2hvbHkuXCI7XG5cbn1cblxuZnVuY3Rpb24gZml0aFNsaWRlUGFuZWwoKXtcbiAgICBsZXQgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBjaGFuZ2VJbWFnZS5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zcmMgID0gc2VhU3Rvcm1Mb2dvO1xuXG4gICAgY2hhbmdlSW1hZ2UuYXBwZW5kKG5ld0ltYWdlKTtcblxuICAgIGxldCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfY29udGVudF9jb250YWluZXJcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0b3JtX21vYmlsZVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfbWFnZGFsZW5lXCIpO1xuXG5cbiAgICBsZXQgbmV3VXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdXBwZXJfdGV4dFwiKTtcbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5hZGQoXCJnaXJsX25ld19oZWlnaHRcIik7XG4gICAgbmV3VXBwZXIuY2xhc3NMaXN0LmFkZChcInN0b3JtX3RleHRfbW9iaWxlXCIpO1xuXG4gICAgbGV0IG5ld0xvd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LmFkZChcInNlYV9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiXCI7XG5cblxuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiVGhlIFN0b3JtIG9uIHRoZSBTZWEgb2YgR2FsaWxlZVwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiUmVtYnJhbmR0XCI7XG5cbiAgICBsZXQgZ2V0TmV3VGh1bWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdGh1bWJfY29udGFpbmVyXCIpO1xuICAgIGdldE5ld1RodW1iLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3VGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1RodW1iLnNyYyAgPSBzZWFTdG9ybVRodW1iO1xuXG4gICAgZ2V0TmV3VGh1bWIuYXBwZW5kKG5ld1RodW1iKTtcblxuICAgIGxldCBuZXdEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2NvbnRlbnRcIik7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCIxNjMzXCI7XG5cbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodF9jb250ZW50X2Rlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGUgcGFpbnRpbmcsIGluIHZlcnRpY2FsIGZvcm1hdCwgc2hvd3MgYSBjbG9zZS11cCB2aWV3IG9mIENocmlzdCdzIGRpc2NpcGxlcyBzdHJ1Z2dsaW5nIGZyYW50aWNhbGx5IGFnYWluc3QgdGhlIGhlYXZ5IHN0b3JtIHRvIHJlZ2FpbiBjb250cm9sIG9mIHRoZWlyIGZpc2hpbmcgYm9hdC4gQSBodWdlIHdhdmUgYmVhdHMgdGhlIGJvdyBhbmQgcmlwcyB0aGUgc2FpbC4gT25lIG9mIHRoZSBkaXNjaXBsZXMgaXMgc2VlbiB2b21pdGluZyBvdmVyIHRoZSBzaWRlLiBBbm90aGVyIG9uZSwgbG9va2luZyBkaXJlY3RseSBvdXQgYXQgdGhlIHZpZXdlciwgaXMgYSBzZWxmLXBvcnRyYWl0IG9mIHRoZSBhcnRpc3QuIE9ubHkgQ2hyaXN0LCBkZXBpY3RlZCBvbiB0aGUgcmlnaHQsIHJlbWFpbnMgY2FsbS5cIjtcblxufVxuXG5mdW5jdGlvbiBzaXhTbGlkZVBhbmVsKCl7XG4gICAgbGV0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZV9jb250YWluZXJcIik7XG4gICAgY2hhbmdlSW1hZ2UuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3SW1hZ2Uuc3JjICA9IGthbmFnYXdhTG9nbztcblxuICAgIGNoYW5nZUltYWdlLmFwcGVuZChuZXdJbWFnZSk7XG5cbiAgICBsZXQgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWFcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX21hZ2RhbGVuZVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfc2VsZlwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfY2FmZVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfbGFkeVwiKTtcblxuXG5cbiAgICBsZXQgbmV3VXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdXBwZXJfdGV4dFwiKTtcbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5hZGQoXCJnaXJsX25ld19oZWlnaHRcIik7XG4gICAgbmV3VXBwZXIuY2xhc3NMaXN0LmFkZChcIm1vYmlsZV9rYW5hZ2F3YV90ZXh0XCIpO1xuXG4gICAgbGV0IG5ld0xvd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LmFkZChcInNlYV9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxmX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LnJlbW92ZShcImd5cHN5X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFwcGxlX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LnJlbW92ZShcImNhZmVfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIlwiO1xuXG5cbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlRoZSBHcmVhdCBXYXZlIG9mZiBLYW5hZ2F3YVwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiSG9rdXNhaVwiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0ga2FuYWdhd2FUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTgzMVwiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIEdyZWF0IFdhdmUgb2ZmIEthbmFnYXdhIChKYXBhbmVzZTog56We5aWI5bed5rKW5rWq6KOPLCBIZXBidXJuOiBLYW5hZ2F3YS1va2kgTmFtaSBVcmEsIGxpdC4gJ1VuZGVyIHRoZSBXYXZlIG9mZiBLYW5hZ2F3YScpLCBhbHNvIGtub3duIGFzIFRoZSBHcmVhdCBXYXZlIG9yIHNpbXBseSBUaGUgV2F2ZSwgaXMgYSB3b29kYmxvY2sgcHJpbnQgYnkgdGhlIEphcGFuZXNlIHVraXlvLWUgYXJ0aXN0IEhva3VzYWkuIEl0IHdhcyBwdWJsaXNoZWQgc29tZXRpbWUgYmV0d2VlbiAxODI5IGFuZCAxODMzIGluIHRoZSBsYXRlIEVkbyBwZXJpb2QgYXMgdGhlIGZpcnN0IHByaW50IGluIEhva3VzYWkncyBzZXJpZXMgVGhpcnR5LXNpeCBWaWV3cyBvZiBNb3VudCBGdWppLiBUaGUgaW1hZ2UgZGVwaWN0cyBhbiBlbm9ybW91cyB3YXZlIHRocmVhdGVuaW5nIHRocmVlIGJvYXRzIG9mZiB0aGUgY29hc3QgaW4gdGhlIFNhZ2FtaSBCYXkgKEthbmFnYXdhIFByZWZlY3R1cmUpIHdoaWxlIE1vdW50IEZ1amkgcmlzZXMgaW4gdGhlIGJhY2tncm91bmQuXCI7XG5cbn1cblxuZnVuY3Rpb24gc2V2ZW5TbGlkZVBhbmVsKCl7XG4gICAgbGV0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZV9jb250YWluZXJcIik7XG4gICAgY2hhbmdlSW1hZ2UuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3SW1hZ2Uuc3JjICA9IHZhbkxvZ287XG5cbiAgICBjaGFuZ2VJbWFnZS5hcHBlbmQobmV3SW1hZ2UpO1xuXG4gICAgbGV0IGdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfc2VhXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWxmXCIpO1xuXG5cbiAgICBsZXQgbmV3VXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdXBwZXJfdGV4dFwiKTtcbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5hZGQoXCJnaXJsX25ld19oZWlnaHRcIik7XG5cbiAgICBsZXQgbmV3TG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QucmVtb3ZlKFwic2VhX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LmFkZChcInNlbGZfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIlwiO1xuXG5cbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlZhbiBHb2doIHNlbGYtcG9ydHJhaXRcIjtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIlZpbmNlbnQgdmFuIEdvZ2hcIjtcblxuICAgIGxldCBnZXROZXdUaHVtYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF90aHVtYl9jb250YWluZXJcIik7XG4gICAgZ2V0TmV3VGh1bWIuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3VGh1bWIuc3JjICA9IHZhblRodW1iO1xuXG4gICAgZ2V0TmV3VGh1bWIuYXBwZW5kKG5ld1RodW1iKTtcblxuICAgIGxldCBuZXdEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2NvbnRlbnRcIik7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCIxODg5XCI7XG5cbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodF9jb250ZW50X2Rlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGlzIHNlbGYtcG9ydHJhaXQgd2FzIG9uZSBvZiBhYm91dCAzMiBwcm9kdWNlZCBvdmVyIGEgMTAteWVhciBwZXJpb2QsIGFuZCB0aGVzZSB3ZXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIGhpcyB3b3JrIGFzIGEgcGFpbnRlcjsgaGUgcGFpbnRlZCBoaW1zZWxmIGJlY2F1c2UgaGUgb2Z0ZW4gbGFja2VkIHRoZSBtb25leSB0byBwYXkgZm9yIG1vZGVscy4gSGUgdG9vayB0aGUgcGFpbnRpbmcgd2l0aCBoaW0gdG8gQXV2ZXJzLXN1ci1PaXNlLCBuZWFyIFBhcmlzLCB3aGVyZSBoZSBzaG93ZWQgaXQgdG8gRHIuIFBhdWwgR2FjaGV0LCB3aG8gdGhvdWdodCBpdCB3YXMgJ2Fic29sdXRlbHkgZmFuYXRpY2FsJy4gQXJ0IGhpc3RvcmlhbnMgYXJlIGRpdmlkZWQgYXMgdG8gd2hldGhlciB0aGlzIHBhaW50aW5nIG9yIFNlbGYtcG9ydHJhaXQgd2l0aG91dCBiZWFyZCBpcyBWYW4gR29naCdzIGZpbmFsIHNlbGYtcG9ydHJhaXQuIFRoZSBhcnQgaGlzdG9yaWFucyBJbmdvIEYuIFdhbHRoZXIgYW5kIEphbiBIdWxza2VyIGNvbnNpZGVyIHRoaXMgdG8gYmUgdGhlIGxhc3QuXCI7XG5cbn1cblxuZnVuY3Rpb24gZWlnaHRTbGlkZVBhbmVsKCl7XG4gICAgbGV0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZV9jb250YWluZXJcIik7XG4gICAgY2hhbmdlSW1hZ2UuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3SW1hZ2Uuc3JjICA9IGd5cHN5TG9nbztcblxuICAgIGNoYW5nZUltYWdlLmFwcGVuZChuZXdJbWFnZSk7XG5cbiAgICBsZXQgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWFcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlbGZcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2NhZmVcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2xhZHlcIik7XG5cblxuICAgIGxldCBuZXdVcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF91cHBlcl90ZXh0XCIpO1xuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3VXBwZXIuY2xhc3NMaXN0LmFkZChcImdpcmxfbmV3X2hlaWdodFwiKTtcblxuICAgIGxldCBuZXdMb3dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5hZGQoXCJneXBzeV9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxmX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJUaGUgU2xlZXBpbmcgR3lwc3lcIjtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIkhlbnJpIFJvdXNzZWF1XCI7XG5cbiAgICBsZXQgZ2V0TmV3VGh1bWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdGh1bWJfY29udGFpbmVyXCIpO1xuICAgIGdldE5ld1RodW1iLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3VGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1RodW1iLnNyYyAgPSBneXBzeVRodW1iO1xuXG4gICAgZ2V0TmV3VGh1bWIuYXBwZW5kKG5ld1RodW1iKTtcblxuICAgIGxldCBuZXdEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2NvbnRlbnRcIik7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCIxODk3XCI7XG5cbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodF9jb250ZW50X2Rlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGUgU2xlZXBpbmcgR3lwc3kgKEZyZW5jaDogTGEgQm9ow6ltaWVubmUgZW5kb3JtaWUpIGlzIGFuIDE4OTcgb2lsIHBhaW50aW5nIGJ5IEZyZW5jaCBOYcOvdmUgYXJ0aXN0IEhlbnJpIFJvdXNzZWF1ICgxODQ04oCTMTkxMCkuIEl0IGlzIGEgZmFudGFzdGljYWwgZGVwaWN0aW9uIG9mIGEgbGlvbiBtdXNpbmcgb3ZlciBhIHNsZWVwaW5nIHdvbWFuIG9uIGEgbW9vbmxpdCBuaWdodC4gUm91c3NlYXUgZmlyc3QgZXhoaWJpdGVkIHRoZSBwYWludGluZyBhdCB0aGUgMTN0aCBTYWxvbiBkZXMgSW5kw6lwZW5kYW50cywgYW5kIHRyaWVkIHVuc3VjY2Vzc2Z1bGx5IHRvIHNlbGwgaXQgdG8gdGhlIG1heW9yIG9mIGhpcyBob21ldG93biwgTGF2YWwuIEluc3RlYWQsIGl0IGVudGVyZWQgdGhlIHByaXZhdGUgY29sbGVjdGlvbiBvZiBhIFBhcmlzaWFuIGNoYXJjb2FsIG1lcmNoYW50IHdoZXJlIGl0IHJlbWFpbmVkIHVudGlsIDE5MjQsIHdoZW4gaXQgd2FzIGRpc2NvdmVyZWQgYnkgdGhlIGFydCBjcml0aWMgTG91aXMgVmF1eGNlbGxlcy5cIjtcblxufVxuXG5mdW5jdGlvbiBuaW5lU2xpZGVQYW5lbCgpe1xuICAgIGxldCBjaGFuZ2VJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VfY29udGFpbmVyXCIpO1xuICAgIGNoYW5nZUltYWdlLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld0ltYWdlLnNyYyAgPSBsYWR5TG9nbztcblxuICAgIGNoYW5nZUltYWdlLmFwcGVuZChuZXdJbWFnZSk7XG5cbiAgICBsZXQgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWFcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2xhZHlcIik7XG5cblxuICAgIGxldCBuZXdVcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF91cHBlcl90ZXh0XCIpO1xuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3VXBwZXIuY2xhc3NMaXN0LmFkZChcImdpcmxfbmV3X2hlaWdodFwiKTtcblxuICAgIGxldCBuZXdMb3dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJneXBzeV9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiXCI7XG5cblxuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiTGFkeSB3aXRoIGFuIEVybWluZVwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiTGVvbmFyZG8gZGEgVmluY2lcIjtcblxuICAgIGxldCBnZXROZXdUaHVtYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF90aHVtYl9jb250YWluZXJcIik7XG4gICAgZ2V0TmV3VGh1bWIuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdUaHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3VGh1bWIuc3JjICA9IGxhZHlUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTQ4OVwiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIExhZHkgd2l0aCBhbiBFcm1pbmUgKEl0YWxpYW46IERhbWEgY29uIGwnZXJtZWxsaW5vIFvLiGRhy5BtYSBrb24gbGVybWVsy4hsacuQbm9dOyBQb2xpc2g6IERhbWEgeiBncm9ub3N0YWplbSkgaXMgYSBwb3J0cmFpdCBwYWludGluZyB3aWRlbHkgYXR0cmlidXRlZCB0byB0aGUgSXRhbGlhbiBSZW5haXNzYW5jZSBhcnRpc3QgTGVvbmFyZG8gZGEgVmluY2kuIERhdGVkIHRvIGMu4oCJMTQ4OeKAkzE0OTEsIHRoZSB3b3JrIGlzIHBhaW50ZWQgaW4gb2lscyBvbiBhIHBhbmVsIG9mIHdhbG51dCB3b29kLiBJdHMgc3ViamVjdCBpcyBDZWNpbGlhIEdhbGxlcmFuaSwgYSBtaXN0cmVzcyBvZiBMdWRvdmljbyBTZm9yemEgKCdJbCBNb3JvJyksIER1a2Ugb2YgTWlsYW47IExlb25hcmRvIHdhcyBwYWludGVyIHRvIHRoZSBTZm9yemEgY291cnQgYXQgdGhlIHRpbWUgb2YgaXRzIGV4ZWN1dGlvbi4gSXQgaXMgb25lIG9mIG9ubHkgZm91ciBzdXJ2aXZpbmcgcG9ydHJhaXRzIG9mIHdvbWVuIHBhaW50ZWQgYnkgTGVvbmFyZG8sIHRoZSBvdGhlcnMgYmVpbmcgR2luZXZyYSBkZScgQmVuY2ksIExhIEJlbGxlIEZlcnJvbm5pw6hyZSBhbmQgdGhlIE1vbmEgTGlzYS5cIjtcblxufVxuXG5mdW5jdGlvbiB0ZW5TbGlkZVBhbmVsKCl7XG4gICAgbGV0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZV9jb250YWluZXJcIik7XG4gICAgY2hhbmdlSW1hZ2UuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3SW1hZ2Uuc3JjICA9IGNhZmVMb2dvO1xuXG4gICAgY2hhbmdlSW1hZ2UuYXBwZW5kKG5ld0ltYWdlKTtcblxuICAgIGxldCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfY29udGVudF9jb250YWluZXJcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxlZnRfY29udGVudF9jb250YWluZXJfY2FmZVwiKTtcblxuXG4gICAgbGV0IG5ld1VwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3VwcGVyX3RleHRcIik7XG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2lybF9uZXdfaGVpZ2h0XCIpO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdG9ybV90ZXh0X21vYmlsZVwiKTtcblxuICAgIGxldCBuZXdMb3dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5hZGQoXCJjYWZlX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJUaGUgTmlnaHQgQ2FmZVwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiVmluY2VudCB2YW4gR29naFwiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0gY2FmZVRodW1iO1xuXG4gICAgZ2V0TmV3VGh1bWIuYXBwZW5kKG5ld1RodW1iKTtcblxuICAgIGxldCBuZXdEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2NvbnRlbnRcIik7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCIxODg4XCI7XG5cbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodF9jb250ZW50X2Rlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGUgTmlnaHQgQ2Fmw6kgKEZyZW5jaDogTGUgQ2Fmw6kgZGUgbnVpdCkgaXMgYW4gb2lsIHBhaW50aW5nIGNyZWF0ZWQgYnkgRHV0Y2ggYXJ0aXN0IFZpbmNlbnQgdmFuIEdvZ2ggaW4gU2VwdGVtYmVyIDE4ODggaW4gQXJsZXMuIEl0cyB0aXRsZSBpcyBpbnNjcmliZWQgbG93ZXIgcmlnaHQgYmVuZWF0aCB0aGUgc2lnbmF0dXJlLiBUaGUgcGFpbnRpbmcgaXMgb3duZWQgYnkgWWFsZSBVbml2ZXJzaXR5IGFuZCBpcyBjdXJyZW50bHkgaGVsZCBhdCB0aGUgWWFsZSBVbml2ZXJzaXR5IEFydCBHYWxsZXJ5IGluIE5ldyBIYXZlbiwgQ29ubmVjdGljdXQuIFRoZSBpbnRlcmlvciBkZXBpY3RlZCBpcyB0aGUgQ2Fmw6kgZGUgbGEgR2FyZSwgMzAgUGxhY2UgTGFtYXJ0aW5lLCBydW4gYnkgSm9zZXBoLU1pY2hlbCBHaW5vdXggYW5kIGhpcyB3aWZlIE1hcmllLCB3aG8gaW4gTm92ZW1iZXIgMTg4OCBwb3NlZCBmb3IgVmFuIEdvZ2gncyBhbmQgR2F1Z3VpbidzIEFybMOpc2llbm5lOyBhIGJpdCBsYXRlciwgSm9zZXBoIEdpbm91eCBldmlkZW50bHkgcG9zZWQgZm9yIGJvdGggYXJ0aXN0cywgdG9vLlwiO1xuXG59XG5cbmZ1bmN0aW9uIGVsZXZlblNsaWRlUGFuZWwoKXtcbiAgICBsZXQgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBjaGFuZ2VJbWFnZS5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zcmMgID0gYXBwbGVMb2dvO1xuXG4gICAgY2hhbmdlSW1hZ2UuYXBwZW5kKG5ld0ltYWdlKTtcblxuICAgIGxldCBnZXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfY29udGVudF9jb250YWluZXJcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYVwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxlZnRfY29udGVudF9jb250YWluZXJfY2FmZVwiKTtcblxuXG4gICAgbGV0IG5ld1VwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3VwcGVyX3RleHRcIik7XG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QuYWRkKFwiZ2lybF9uZXdfaGVpZ2h0XCIpO1xuXG4gICAgbGV0IG5ld0xvd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LmFkZChcImFwcGxlX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJUaGUgQmFza2V0IG9mIEFwcGxlc1wiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiUGF1bCBDZXphbm5lXCI7XG5cbiAgICBsZXQgZ2V0TmV3VGh1bWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdGh1bWJfY29udGFpbmVyXCIpO1xuICAgIGdldE5ld1RodW1iLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3VGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1RodW1iLnNyYyAgPSBhcHBsZVRodW1iO1xuXG4gICAgZ2V0TmV3VGh1bWIuYXBwZW5kKG5ld1RodW1iKTtcblxuICAgIGxldCBuZXdEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2NvbnRlbnRcIik7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCIxODkzXCI7XG5cbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodF9jb250ZW50X2Rlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGUgQmFza2V0IG9mIEFwcGxlcyAoRnJlbmNoOiBMZSBwYW5pZXIgZGUgcG9tbWVzKSBpcyBhIHN0aWxsIGxpZmUgb2lsIHBhaW50aW5nIGJ5IEZyZW5jaCBhcnRpc3QgUGF1bCBDw6l6YW5uZSwgd2hpY2ggaGUgY3JlYXRlZCBjLiAxODkzLiBUaGUgcGFpbnRpbmcgaXMgcGFydGljdWxhcmx5IHJlbWFya2FibGUgZm9yIGl0cyBjcmVhdGl2ZSBjb21wb3NpdGlvbiwgd2hpY2ggcmVqZWN0ZWQgcmVhbGlzdGljIHJlcHJlc2VudGF0aW9uIGluIGZhdm91ciBvZiBkaXN0b3J0aW5nIG9iamVjdHMgdG8gY3JlYXRlIG11bHRpcGxlIHBlcnNwZWN0aXZlcy4gVGhpcyBhcHByb2FjaCBldmVudHVhbGx5IGluZmx1ZW5jZWQgb3RoZXIgYXJ0IG1vdmVtZW50cywgaW5jbHVkaW5nIEZhdXZpc20gYW5kIEN1YmlzbS4gSXQgYmVsb25ncyB0byB0aGUgSGVsZW4gQmlyY2ggQmFydGxldHQgTWVtb3JpYWwgQ29sbGVjdGlvbiBvZiB0aGUgQXJ0IEluc3RpdHV0ZSBvZiBDaGljYWdvLlwiO1xuXG59XG5cbmZ1bmN0aW9uIHR3ZWx2ZVNsaWRlUGFuZWwoKXtcbiAgICBsZXQgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBjaGFuZ2VJbWFnZS5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zcmMgID0gYm95TG9nbztcblxuICAgIGNoYW5nZUltYWdlLmFwcGVuZChuZXdJbWFnZSk7XG5cbiAgICBsZXQgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWFcIik7XG4gICAgZ2V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyX2NhZmVcIik7XG5cblxuICAgIGxldCBuZXdVcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF91cHBlcl90ZXh0XCIpO1xuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3VXBwZXIuY2xhc3NMaXN0LmFkZChcImdpcmxfbmV3X2hlaWdodFwiKTtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwibW9uYV9uZXdfaGVpZ2h0XCIpO1xuXG4gICAgbGV0IG5ld0xvd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LmFkZChcImFwcGxlX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJUaGUgQm95IGluIHRoZSBSZWQgVmVzdFwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiUGF1bCBDZXphbm5lXCI7XG5cbiAgICBsZXQgZ2V0TmV3VGh1bWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdGh1bWJfY29udGFpbmVyXCIpO1xuICAgIGdldE5ld1RodW1iLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3VGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1RodW1iLnNyYyAgPSBib3lUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTg4OVwiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiQ8OpemFubmUgcGFpbnRlZCBmb3VyIG9pbCBwb3J0cmFpdHMgb2YgdGhpcyBJdGFsaWFuIGJveSBpbiB0aGUgcmVkIHZlc3QsIGFsbCBpbiBkaWZmZXJlbnQgcG9zZXMsIHdoaWNoIGFsbG93ZWQgaGltIHRvIHN0dWR5IHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgZmlndXJlIGFuZCBzcGFjZS4gVGhlIG1vc3QgZmFtb3VzIG9mIHRoZSBmb3VyLCBhbmQgdGhlIG9uZSBjb21tb25seSByZWZlcnJlZCB0byBieSB0aGlzIHRpdGxlLCBpcyB0aGUgb25lIHdoaWNoIGRlcGljdHMgdGhlIGJveSBpbiBhIG1lbGFuY2hvbGljIHNlYXRlZCBwb3NlIHdpdGggaGlzIGVsYm93IG9uIGEgdGFibGUgYW5kIGhpcyBoZWFkIGNyYWRsZWQgaW4gaGlzIGhhbmQuIEl0IGlzIGN1cnJlbnRseSBoZWxkIGluIFrDvHJpY2gsIFN3aXR6ZXJsYW5kLiBUaGUgb3RoZXIgdGhyZWUgcG9ydHJhaXRzLCBvZiBkaWZmZXJlbnQgcG9zZXMsIGFyZSBpbiBtdXNldW1zIGluIHRoZSBVUy5cIjtcblxufVxuXG5mdW5jdGlvbiB0aGlydGVlblNsaWRlUGFuZWwoKXtcbiAgICBsZXQgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBjaGFuZ2VJbWFnZS5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zcmMgID0gYXJub0xvZ287XG5cbiAgICBjaGFuZ2VJbWFnZS5hcHBlbmQobmV3SW1hZ2UpO1xuXG4gICAgbGV0IGdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfc2VhXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9jYWZlXCIpO1xuXG5cbiAgICBsZXQgbmV3VXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdXBwZXJfdGV4dFwiKTtcbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5hZGQoXCJnaXJsX25ld19oZWlnaHRcIik7XG5cbiAgICBsZXQgbmV3TG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QuYWRkKFwiYXBwbGVfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIlwiO1xuXG5cbiAgICBuZXdVcHBlci5pbm5lclRleHQgPSBcIkFybm9sZmluaSBQb3J0cmFpdFwiO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiSmFuIHZhbiBFeWNrXCI7XG5cbiAgICBsZXQgZ2V0TmV3VGh1bWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfdGh1bWJfY29udGFpbmVyXCIpO1xuICAgIGdldE5ld1RodW1iLmlubmVyVGV4dCA9IFwiXCI7XG5cbiAgICBsZXQgbmV3VGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5ld1RodW1iLnNyYyAgPSBhcm5vVGh1bWI7XG5cbiAgICBnZXROZXdUaHVtYi5hcHBlbmQobmV3VGh1bWIpO1xuXG4gICAgbGV0IG5ld0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVfY29udGVudFwiKTtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIjE0MzRcIjtcblxuICAgIGxldCBuZXdEZXNjcmlwdGlvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0X2NvbnRlbnRfZGVzY3JpcHRpb25cIik7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkl0IGlzIGNvbnNpZGVyZWQgb25lIG9mIHRoZSBtb3N0IG9yaWdpbmFsIGFuZCBjb21wbGV4IHBhaW50aW5ncyBpbiBXZXN0ZXJuIGFydCwgYmVjYXVzZSBvZiBpdHMgYmVhdXR5LCBjb21wbGV4IGljb25vZ3JhcGh5LCBnZW9tZXRyaWMgb3J0aG9nb25hbCBwZXJzcGVjdGl2ZSwgYW5kIGV4cGFuc2lvbiBvZiB0aGUgcGljdHVyZSBzcGFjZSB3aXRoIHRoZSB1c2Ugb2YgYSBtaXJyb3IuIEFjY29yZGluZyB0byBFcm5zdCBHb21icmljaCAnaW4gaXRzIG93biB3YXkgaXQgd2FzIGFzIG5ldyBhbmQgcmV2b2x1dGlvbmFyeSBhcyBEb25hdGVsbG8ncyBvciBNYXNhY2NpbydzIHdvcmsgaW4gSXRhbHkuIEEgc2ltcGxlIGNvcm5lciBvZiB0aGUgcmVhbCB3b3JsZCBoYWQgc3VkZGVubHkgYmVlbiBmaXhlZCBvbiB0byBhIHBhbmVsIGFzIGlmIGJ5IG1hZ2ljIC4uLiBGb3IgdGhlIGZpcnN0IHRpbWUgaW4gaGlzdG9yeSB0aGUgYXJ0aXN0IGJlY2FtZSB0aGUgcGVyZmVjdCBleWUtd2l0bmVzcyBpbiB0aGUgdHJ1ZXN0IHNlbnNlIG9mIHRoZSB0ZXJtJy5cIjtcblxufVxuXG5mdW5jdGlvbiBmb3VydGVlblNsaWRlUGFuZWwoKXtcbiAgICBsZXQgY2hhbmdlSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlX2NvbnRhaW5lclwiKTtcbiAgICBjaGFuZ2VJbWFnZS5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdJbWFnZS5zcmMgID0gbW9uYUxvZ287XG5cbiAgICBjaGFuZ2VJbWFnZS5hcHBlbmQobmV3SW1hZ2UpO1xuXG4gICAgbGV0IGdldENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lclwiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfc2VhXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9sYWR5XCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zd2luZ1wiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxlZnRfY29udGVudF9jb250YWluZXJfY2FmZVwiKTtcblxuXG4gICAgbGV0IG5ld1VwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3VwcGVyX3RleHRcIik7XG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiZ2lybF9uZXdfaGVpZ2h0XCIpO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2luZ19uZXdfaGVpZ2h0XCIpO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5hZGQoXCJtb25hX25ld19oZWlnaHRcIik7XG5cbiAgICBsZXQgbmV3TG93ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QuYWRkKFwiYXBwbGVfbG93ZXJfdGV4dFwiKTtcbiAgICBuZXdMb3dlci5jbGFzc0xpc3QucmVtb3ZlKFwiY2FmZV9sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJzd2luZ19sb3dlcl90ZXh0XCIpO1xuICAgIG5ld0xvd2VyLmlubmVyVGV4dCA9IFwiXCI7XG5cblxuICAgIG5ld1VwcGVyLmlubmVyVGV4dCA9IFwiTW9uYSBMaXNhXCI7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJMZW9uYXJkbyBkYSBWaW5jaVwiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0gbW9uYVRodW1iO1xuXG4gICAgZ2V0TmV3VGh1bWIuYXBwZW5kKG5ld1RodW1iKTtcblxuICAgIGxldCBuZXdEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2NvbnRlbnRcIik7XG4gICAgbmV3RGF0ZS5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCIxNTAzXCI7XG5cbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyaWdodF9jb250ZW50X2Rlc2NyaXB0aW9uXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJUaGUgTW9uYSBMaXNhICgvy4xtb8qKbsmZIMuIbGnLkHPJmS87IGl0YWxpYW46IExhIEdpb2NvbmRhIFtsYSBkypJvy4hrb25kYV0gb3IgTW9ubmEgTGlzYSBby4htyZRubmEgy4hsacuQemFdKSBpcyBhIGhhbGYtbGVuZ3RoIHBvcnRyYWl0IHBhaW50aW5nIGJ5IEl0YWxpYW4gYXJ0aXN0IExlb25hcmRvIGRhIFZpbmNpLiBDb25zaWRlcmVkIGFuIGFyY2hldHlwYWwgbWFzdGVycGllY2Ugb2YgdGhlIEl0YWxpYW4gUmVuYWlzc2FuY2UsIGl0IGhhcyBiZWVuIGRlc2NyaWJlZCBhcyAndGhlIGJlc3Qga25vd24sIHRoZSBtb3N0IHZpc2l0ZWQsIHRoZSBtb3N0IHdyaXR0ZW4gYWJvdXQsIHRoZSBtb3N0IHN1bmcgYWJvdXQsIHRoZSBtb3N0IHBhcm9kaWVkIHdvcmsgb2YgYXJ0IGluIHRoZSB3b3JsZCcuIFRoZSBwYWludGluZydzIG5vdmVsIHF1YWxpdGllcyBpbmNsdWRlIHRoZSBzdWJqZWN0J3MgZW5pZ21hdGljIGV4cHJlc3Npb24sIHRoZSBtb251bWVudGFsaXR5IG9mIHRoZSBjb21wb3NpdGlvbiwgdGhlIHN1YnRsZSBtb2RlbGxpbmcgb2YgZm9ybXMsIGFuZCB0aGUgYXRtb3NwaGVyaWMgaWxsdXNpb25pc20uXCI7XG5cbn1cblxuZnVuY3Rpb24gZml0aHRlZW5TbGlkZVBhbmVsKCl7XG4gICAgbGV0IGNoYW5nZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZV9jb250YWluZXJcIik7XG4gICAgY2hhbmdlSW1hZ2UuaW5uZXJUZXh0ID0gXCJcIjtcblxuICAgIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbmV3SW1hZ2Uuc3JjICA9IHN3aW5nTG9nbztcblxuICAgIGNoYW5nZUltYWdlLmFwcGVuZChuZXdJbWFnZSk7XG5cbiAgICBsZXQgZ2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2NvbnRlbnRfY29udGFpbmVyXCIpO1xuICAgIGdldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdF9jb250ZW50X2NvbnRhaW5lcl9zd2luZ1wiKTtcbiAgICBnZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRfY29udGVudF9jb250YWluZXJfY2FmZVwiKTtcblxuXG4gICAgbGV0IG5ld1VwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3VwcGVyX3RleHRcIik7XG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdVcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwibW9uYV9uZXdfaGVpZ2h0XCIpO1xuICAgIG5ld1VwcGVyLmNsYXNzTGlzdC5hZGQoXCJzd2luZ19uZXdfaGVpZ2h0XCIpO1xuXG4gICAgbGV0IG5ld0xvd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuY2xhc3NMaXN0LmFkZChcInN3aW5nX2xvd2VyX3RleHRcIik7XG4gICAgbmV3TG93ZXIuaW5uZXJUZXh0ID0gXCJcIjtcblxuXG4gICAgbmV3VXBwZXIuaW5uZXJUZXh0ID0gXCJUaGUgU3dpbmdcIjtcbiAgICBuZXdMb3dlci5pbm5lclRleHQgPSBcIkplYW4gSG9ub3JlIEZyYWdvbmFyZFwiO1xuXG4gICAgbGV0IGdldE5ld1RodW1iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X3RodW1iX2NvbnRhaW5lclwiKTtcbiAgICBnZXROZXdUaHVtYi5pbm5lclRleHQgPSBcIlwiO1xuXG4gICAgbGV0IG5ld1RodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBuZXdUaHVtYi5zcmMgID0gc3dpbmdUaHVtYjtcblxuICAgIGdldE5ld1RodW1iLmFwcGVuZChuZXdUaHVtYik7XG5cbiAgICBsZXQgbmV3RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9jb250ZW50XCIpO1xuICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBuZXdEYXRlLmlubmVyVGV4dCA9IFwiMTc2N1wiO1xuXG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHRfY29udGVudF9kZXNjcmlwdGlvblwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiVGhlIHBhaW50aW5nIGRlcGljdHMgYW4gZWxlZ2FudCB5b3VuZyB3b21hbiBvbiBhIHN3aW5nLiBBIHNtaWxpbmcgeW91bmcgbWFuLCBoaWRpbmcgaW4gdGhlIGJ1c2hlcyBvbiB0aGUgbGVmdCwgd2F0Y2hlcyBoZXIgZnJvbSBhIHZhbnRhZ2UgcG9pbnQgdGhhdCBhbGxvd3MgaGltIHRvIHNlZSB1cCBpbnRvIGhlciBiaWxsb3dpbmcgZHJlc3MsIHdoZXJlIGhpcyBhcm0gaXMgcG9pbnRlZCB3aXRoIGhhdCBpbiBoYW5kLiBBIHNtaWxpbmcgb2xkZXIgbWFuLCB3aG8gaXMgbmVhcmx5IGhpZGRlbiBpbiB0aGUgc2hhZG93cyBvbiB0aGUgcmlnaHQsIHByb3BlbHMgdGhlIHN3aW5nIHdpdGggYSBwYWlyIG9mIHJvcGVzLiBUaGUgb2xkZXIgbWFuIGFwcGVhcnMgdG8gYmUgdW5hd2FyZSBvZiB0aGUgeW91bmcgbWFuLiBBcyB0aGUgeW91bmcgbGFkeSBzd2luZ3MgaGlnaCwgc2hlIHRocm93cyBoZXIgbGVmdCBsZWcgdXAsIGFsbG93aW5nIGhlciBkYWludHkgc2hvZSB0byBmbHkgdGhyb3VnaCB0aGUgYWlyLlwiO1xuXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNsaWRlKCl7XG4gICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICBzZWN0aW9uLmlkID0gXCJtYWluX3NlY3Rpb25cIjtcbiAgICBcbiAgICBcbiAgIGNvbnN0IG5hdiA9IG5hdmlnYXRpb25CYXIoKTtcbiAgIGNvbnN0IHBhbmVsT25lID0gdGVtcGxhdGVQYW5lbCgpO1xuICAgbGV0IHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZV9wYWdlXCIpO1xuICAgc2VjdGlvbi5hcHBlbmQocGFuZWxPbmUpO1xuICAgc2xpZGUuYXBwZW5kKG5hdiwgc2VjdGlvbik7XG4gICBzdG9wU2xpZGUoKTtcbn1cbmxvYWRTbGlkZSgpO1xubG9hZEZvb3RlcigpO1xuc2VsZWN0UGFuZWwoKTtcblxuXG5mdW5jdGlvbiBzZWxlY3RQYW5lbCgpe1xuICAgIGNvbnN0IGdldEZvcndhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tfYnV0dG9uXCIpO1xuICAgIGNvbnN0IGdldEJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRfYnV0dG9uXCIpO1xuXG4gICAgbGV0IGZ1bmN0aW9uQXJyYXkgPSBbXG4gICAgICAgIGZpcnN0U2xpZGVQYW5lbCxcbiAgICAgICAgc2Vjb25kU2xpZGVQYW5lbCxcbiAgICAgICAgdGhpcmRTbGlkZVBhbmVsLFxuICAgICAgICBmb3VydGhTbGlkZVBhbmVsLFxuICAgICAgICBmaXRoU2xpZGVQYW5lbCxcbiAgICAgICAgc2l4U2xpZGVQYW5lbCxcbiAgICAgICAgc2V2ZW5TbGlkZVBhbmVsLFxuICAgICAgICBlaWdodFNsaWRlUGFuZWwsXG4gICAgICAgIG5pbmVTbGlkZVBhbmVsLFxuICAgICAgICB0ZW5TbGlkZVBhbmVsLFxuICAgICAgICBlbGV2ZW5TbGlkZVBhbmVsLFxuICAgICAgICB0d2VsdmVTbGlkZVBhbmVsLFxuICAgICAgICB0aGlydGVlblNsaWRlUGFuZWwsXG4gICAgICAgIGZvdXJ0ZWVuU2xpZGVQYW5lbCxcbiAgICAgICAgZml0aHRlZW5TbGlkZVBhbmVsXG4gICAgXVxuXG5cbiAgICBmdW5jdGlvbkFycmF5LmlkID0gXCJmdW5jdGlvbl9hcnJheVwiO1xuXG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25BcnJheS5pbmRleE9mKGZpcnN0U2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZiggc2Vjb25kU2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZih0aGlyZFNsaWRlUGFuZWwpKTtcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbkFycmF5LmluZGV4T2YoZm91cnRoU2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZihmaXRoU2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZihzaXhTbGlkZVBhbmVsKSk7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25BcnJheS5pbmRleE9mKHNldmVuU2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZihlaWdodFNsaWRlUGFuZWwpKTtcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbkFycmF5LmluZGV4T2YobmluZVNsaWRlUGFuZWwpKTtcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbkFycmF5LmluZGV4T2YodGVuU2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZihlbGV2ZW5TbGlkZVBhbmVsKSk7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25BcnJheS5pbmRleE9mKHR3ZWx2ZVNsaWRlUGFuZWwpKTtcbiAgICBjb25zb2xlLmxvZyhmdW5jdGlvbkFycmF5LmluZGV4T2YodGhpcnRlZW5TbGlkZVBhbmVsKSk7XG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25BcnJheS5pbmRleE9mKGZvdXJ0ZWVuU2xpZGVQYW5lbCkpO1xuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9uQXJyYXkuaW5kZXhPZihmaXRodGVlblNsaWRlUGFuZWwpKTtcblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgaWYoZ2V0Rm9yd2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaW5kZXggPCAxNClcbiAgICAgICAge1xuICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICBmdW5jdGlvbkFycmF5W2luZGV4XSgpOyAgXG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICBpZihnZXRCYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBpZihpbmRleCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGluZGV4LS07IFxuICAgICAgICAgICAgZnVuY3Rpb25BcnJheVtpbmRleF0oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTsgIFxuICAgICAgICB9XG4gICAgfSkpO1xuXG5cbn0iXSwibmFtZXMiOlsic3R5bGUiLCJiYWNrTG9nbyIsImZvcndhcmRMb2dvIiwiZm9vdGVyU2VjdGlvbiIsImZvb3RlckNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImdldFVwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRsb3dlciIsImxlZnRXcmFwcGVyIiwidG9wVGl0bGUiLCJpbm5lclRleHQiLCJib3R0b21OYW1lIiwicmlnaHRXcmFwcGVyIiwiZm9yd2FyZCIsInNyYyIsImlkIiwiYmFjayIsImFwcGVuZCIsImxvYWRGb290ZXIiLCJnZXRTbGlkZSIsImZvb3RlciIsImdhbGxlcmlhTG9nbyIsIm5hdmlnYXRpb25CYXIiLCJuYXZXcmFwcGVyIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInNsaWRlQ29udGFpbmVyIiwic2xpZGVBbmNob3IiLCJocmVmIiwic2xpZGUiLCJzbGlkZUFuY2hvclN0b3AiLCJzbGlkZUNvbnRhaW5lclN0b3AiLCJzbGlkZUFuY2hvckhvbWUiLCJzbGlkZVN0b3AiLCJzdG9wU2xpZGUiLCJkaXNwbGF5IiwiZ2V0U2xpZGVTdG9wIiwibGVmdFBhbmVsIiwiaW1hZ2VTb3VyY2UiLCJ1cHBlckRlc2NyaXB0aW9uIiwibG93ZXJEZXNjcmlwdGlvbiIsInRodW1iTG9nbyIsImxlZnRQYW5lbFdyYXBwZXIiLCJpbWFnZUNvbnRhaW5lciIsImltYWdlIiwiY29udGVudENvbnRhaW5lciIsInVwcGVyVGV4dCIsImxvd2VyVGV4dCIsInRodW1iQ29udGFpbmVyIiwidGh1bWJJbWFnZSIsInJpZ2h0UGFuZWwiLCJyaWdodERlc2NyaXB0aW9uIiwiZGF0ZURlc2NyaXB0aW9uIiwicmlnaHRQYW5lbFdyYXBwZXIiLCJkYXRlQ29udGFpbmVyIiwiZGF0ZSIsInJpZ2h0Q29udGVudENvbnRhaW5lciIsInJpZ2h0Q29udGVudCIsInN0YXJyeUxvZ28iLCJpbWFnZVRodW1iIiwiZ2lybEVhcmluZ0xvZ28iLCJnaXJsVGh1bWIiLCJndWVybmFjYUxvZ28iLCJndWVybmFjYVRodW1iIiwibWFnZGVsaW5lTG9nbyIsIm1hZ2RlbGluZVRodW1iIiwic2VhU3Rvcm1Mb2dvIiwic2VhU3Rvcm1UaHVtYiIsImthbmFnYXdhTG9nbyIsImthbmFnYXdhVGh1bWIiLCJ2YW5Mb2dvIiwidmFuVGh1bWIiLCJneXBzeUxvZ28iLCJneXBzeVRodW1iIiwibGFkeUxvZ28iLCJsYWR5VGh1bWIiLCJjYWZlTG9nbyIsImNhZmVUaHVtYiIsImFwcGxlTG9nbyIsImFwcGxlVGh1bWIiLCJib3lMb2dvIiwiYm95VGh1bWIiLCJhcm5vTG9nbyIsImFybm9UaHVtYiIsIm1vbmFMb2dvIiwibW9uYVRodW1iIiwic3dpbmdMb2dvIiwic3dpbmdUaHVtYiIsInRlbXBsYXRlUGFuZWwiLCJwYW5lbEhvbGRlciIsImxlZnQiLCJyaWdodCIsImZpcnN0U2xpZGVQYW5lbCIsImNoYW5nZUltYWdlIiwibmV3SW1hZ2UiLCJnZXRDb250YWluZXIiLCJyZW1vdmUiLCJuZXdVcHBlciIsIm5ld0xvd2VyIiwiZ2V0TmV3VGh1bWIiLCJuZXdUaHVtYiIsIm5ld0RhdGUiLCJuZXdEZXNjcmlwdGlvbiIsInNlY29uZFNsaWRlUGFuZWwiLCJ0aGlyZFNsaWRlUGFuZWwiLCJmb3VydGhTbGlkZVBhbmVsIiwiZml0aFNsaWRlUGFuZWwiLCJzaXhTbGlkZVBhbmVsIiwic2V2ZW5TbGlkZVBhbmVsIiwiZWlnaHRTbGlkZVBhbmVsIiwibmluZVNsaWRlUGFuZWwiLCJ0ZW5TbGlkZVBhbmVsIiwiZWxldmVuU2xpZGVQYW5lbCIsInR3ZWx2ZVNsaWRlUGFuZWwiLCJ0aGlydGVlblNsaWRlUGFuZWwiLCJmb3VydGVlblNsaWRlUGFuZWwiLCJmaXRodGVlblNsaWRlUGFuZWwiLCJsb2FkU2xpZGUiLCJzZWN0aW9uIiwibmF2IiwicGFuZWxPbmUiLCJzZWxlY3RQYW5lbCIsImdldEZvcndhcmQiLCJnZXRCYWNrIiwiZnVuY3Rpb25BcnJheSIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==