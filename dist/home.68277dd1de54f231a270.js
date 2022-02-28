/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/assets/arnolfini-portrait/thumbnail.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/arnolfini-portrait/thumbnail.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9505273d530e093acfc.jpg";

/***/ }),

/***/ "./src/assets/girl-with-pearl-earring/thumbnail.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/girl-with-pearl-earring/thumbnail.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f2d503bea64287fabb8.jpg";

/***/ }),

/***/ "./src/assets/guernica/thumbnail.jpg":
/*!*******************************************!*\
  !*** ./src/assets/guernica/thumbnail.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9b344c27cb9e0b38784.jpg";

/***/ }),

/***/ "./src/assets/lady-with-an-ermine/thumbnail.jpg":
/*!******************************************************!*\
  !*** ./src/assets/lady-with-an-ermine/thumbnail.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b9e335d5ef6ceb89fad.jpg";

/***/ }),

/***/ "./src/assets/mona-lisa/thumbnail.jpg":
/*!********************************************!*\
  !*** ./src/assets/mona-lisa/thumbnail.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2bc01c2453d39df19eae.jpg";

/***/ }),

/***/ "./src/assets/penitent-magdalene/thumbnail.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/penitent-magdalene/thumbnail.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2815631d31747b80e5a3.jpg";

/***/ }),

/***/ "./src/assets/shared/logo.svg":
/*!************************************!*\
  !*** ./src/assets/shared/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a6c072704eeee12c44a.svg";

/***/ }),

/***/ "./src/assets/starry-night/thumbnail.jpg":
/*!***********************************************!*\
  !*** ./src/assets/starry-night/thumbnail.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71869fa1f2c195a0ca6c.jpg";

/***/ }),

/***/ "./src/assets/the-basket-of-apples/thumbnail.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/the-basket-of-apples/thumbnail.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c8cf078fa1aa22d02c3.jpg";

/***/ }),

/***/ "./src/assets/the-boy-in-the-red-vest/thumbnail.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/the-boy-in-the-red-vest/thumbnail.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04f8a3605ce52da2211a.jpg";

/***/ }),

/***/ "./src/assets/the-great-wave-off-kanagawa/thumbnail.jpg":
/*!**************************************************************!*\
  !*** ./src/assets/the-great-wave-off-kanagawa/thumbnail.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "459f14dbb64994b5aae6.jpg";

/***/ }),

/***/ "./src/assets/the-night-cafe/thumbnail.jpg":
/*!*************************************************!*\
  !*** ./src/assets/the-night-cafe/thumbnail.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30a6114b15777c4fcb10.jpg";

/***/ }),

/***/ "./src/assets/the-sleeping-gypsy/thumbnail.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/the-sleeping-gypsy/thumbnail.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6071ea4bcd6156bd3f87.jpg";

/***/ }),

/***/ "./src/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16d3476aeeec42c64cf4.jpg";

/***/ }),

/***/ "./src/assets/the-swing/thumbnail.jpg":
/*!********************************************!*\
  !*** ./src/assets/the-swing/thumbnail.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6644e96a8661c9d7f6a7.jpg";

/***/ }),

/***/ "./src/assets/van-gogh-self-portrait/thumbnail.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/van-gogh-self-portrait/thumbnail.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1855b66f8a3d683764c.jpg";

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
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global-style.css */ "./src/global-style.css");
/* harmony import */ var _assets_starry_night_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/starry-night/thumbnail.jpg */ "./src/assets/starry-night/thumbnail.jpg");
/* harmony import */ var _assets_girl_with_pearl_earring_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/girl-with-pearl-earring/thumbnail.jpg */ "./src/assets/girl-with-pearl-earring/thumbnail.jpg");
/* harmony import */ var _assets_guernica_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/guernica/thumbnail.jpg */ "./src/assets/guernica/thumbnail.jpg");
/* harmony import */ var _assets_penitent_magdalene_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/penitent-magdalene/thumbnail.jpg */ "./src/assets/penitent-magdalene/thumbnail.jpg");
/* harmony import */ var _assets_the_storm_on_the_sea_of_galilee_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg */ "./src/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg");
/* harmony import */ var _assets_the_great_wave_off_kanagawa_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/the-great-wave-off-kanagawa/thumbnail.jpg */ "./src/assets/the-great-wave-off-kanagawa/thumbnail.jpg");
/* harmony import */ var _assets_van_gogh_self_portrait_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/van-gogh-self-portrait/thumbnail.jpg */ "./src/assets/van-gogh-self-portrait/thumbnail.jpg");
/* harmony import */ var _assets_the_sleeping_gypsy_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/the-sleeping-gypsy/thumbnail.jpg */ "./src/assets/the-sleeping-gypsy/thumbnail.jpg");
/* harmony import */ var _assets_lady_with_an_ermine_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/lady-with-an-ermine/thumbnail.jpg */ "./src/assets/lady-with-an-ermine/thumbnail.jpg");
/* harmony import */ var _assets_the_night_cafe_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/the-night-cafe/thumbnail.jpg */ "./src/assets/the-night-cafe/thumbnail.jpg");
/* harmony import */ var _assets_mona_lisa_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/mona-lisa/thumbnail.jpg */ "./src/assets/mona-lisa/thumbnail.jpg");
/* harmony import */ var _assets_the_basket_of_apples_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/the-basket-of-apples/thumbnail.jpg */ "./src/assets/the-basket-of-apples/thumbnail.jpg");
/* harmony import */ var _assets_the_boy_in_the_red_vest_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/the-boy-in-the-red-vest/thumbnail.jpg */ "./src/assets/the-boy-in-the-red-vest/thumbnail.jpg");
/* harmony import */ var _assets_arnolfini_portrait_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/arnolfini-portrait/thumbnail.jpg */ "./src/assets/arnolfini-portrait/thumbnail.jpg");
/* harmony import */ var _assets_the_swing_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/the-swing/thumbnail.jpg */ "./src/assets/the-swing/thumbnail.jpg");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");


















function picturePanel(wrapperName, imageSource, topContentText, bottomContentText) {
  var panelWrapper = document.createElement("div");
  panelWrapper.id = "home_panel_wrapper";
  panelWrapper.classList.add(wrapperName);
  var panelImage = document.createElement("img");
  panelImage.id = "home_panel_image";
  panelImage.src = imageSource;
  var panelContentContainer = document.createElement("div");
  panelContentContainer.id = "home_panel_content_container";
  var topContent = document.createElement("p");
  var bottomContent = document.createElement("p");
  topContent.id = 'home_top_content';
  bottomContent.id = 'home_bottom_content';
  topContent.innerText = topContentText;
  bottomContent.innerText = bottomContentText;
  panelContentContainer.append(topContent, bottomContent);
  panelWrapper.append(panelImage, panelContentContainer);
  return panelWrapper;
}

function createHome() {
  var homeWrapper = document.createElement("div");
  homeWrapper.id = "home_wrapper";
  var one = picturePanel("panel_one", _assets_starry_night_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_1__, "Starry Night", "Vincent van Gogh");
  var two = picturePanel("panel_two", _assets_girl_with_pearl_earring_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_2__, "Girl with a Pearl Earing", "Johannes Vermeer");
  var three = picturePanel("panel_three", _assets_guernica_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_3__, "Guernica", "Pablo Picasso");
  var four = picturePanel("panel_four", _assets_penitent_magdalene_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_4__, "Penitent Magdalene", "Artemisia Gentileschi");
  var five = picturePanel("panel_five", _assets_the_storm_on_the_sea_of_galilee_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_5__, "The Storm on the Sea of Galilee", "Rembrandt");
  var six = picturePanel("panel_six", _assets_the_great_wave_off_kanagawa_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_6__, "The Great Wave off Kanagawa", "Hokusai");
  var seven = picturePanel("panel_seven", _assets_van_gogh_self_portrait_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_7__, "Van Gogh self-portrait", "Vincent van Gogh");
  var eight = picturePanel("panel_eight", _assets_the_sleeping_gypsy_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_8__, "The Sleeping Gypsy", "Henri Rousseau");
  var nine = picturePanel("panel_nine", _assets_lady_with_an_ermine_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_9__, "Lady with an Ermin", "Leonardo da Vinci");
  var ten = picturePanel("panel_ten", _assets_the_night_cafe_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_10__, "The Night Cafe", "Vincent van Gogh");
  var eleven = picturePanel("panel_eleven", _assets_mona_lisa_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_11__, "Mona Lisa", "Leonardo da Vinci");
  var twelve = picturePanel("panel_twelve", _assets_the_basket_of_apples_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_12__, "The Basket of Apples", "Paul Cezanne");
  var thirteen = picturePanel("panel_thirteen", _assets_the_boy_in_the_red_vest_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_13__, "The Boy in the Red Vest", "Edward Hopper");
  var fourteen = picturePanel("panel_fourteen", _assets_arnolfini_portrait_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_14__, "Arnolfini Portrait", "Jan van Eyck");
  var fithteen = picturePanel("panel_fithteen", _assets_the_swing_thumbnail_jpg__WEBPACK_IMPORTED_MODULE_15__, "The Swing", "Jean-Honore Fragonard");
  homeWrapper.append(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fithteen);
  return homeWrapper;
}

function loadHome() {
  var createNav = (0,_navbar__WEBPACK_IMPORTED_MODULE_16__.navigationBar)();
  var getHome = document.getElementById("home_page");
  var getWrapper = createHome();
  getHome.append(createNav, getWrapper);
}

loadHome();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLE1BQU0sZ0JBQWdCLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxRQUFRLFVBQVUsS0FBSyxLQUFLLFVBQVUsUUFBUSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxL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dURBQWEsRUFBL0I7QUFDQSxNQUFNcUUsT0FBTyxHQUFHbkUsUUFBUSxDQUFDb0IsY0FBVCxDQUF3QixXQUF4QixDQUFoQjtBQUNBLE1BQU1nRCxVQUFVLEdBQUdwQixVQUFVLEVBQTdCO0FBRUFtQixFQUFBQSxPQUFPLENBQUN0RCxNQUFSLENBQWVxRCxTQUFmLEVBQTBCRSxVQUExQjtBQUNIOztBQUNESCxRQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9zcmMvZ2xvYmFsLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL3NyYy9nbG9iYWwtc3R5bGUuY3NzPzEzMDkiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2FsbGVyaWFMb2dvIGZyb20gJy4uL2Fzc2V0cy9zaGFyZWQvbG9nby5zdmcnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2dsb2JhbC1zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbkJhcigpe1xuICAgIGNvbnN0IG5hdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25fd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZV90aXRsZV9jb250YWluZXJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRpdGxlLnNyYyA9IGdhbGxlcmlhTG9nbztcblxuICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaG9tZV9zbGlkZV9jb250YWluZXJcIik7XG4gICAgc2xpZGVDb250YWluZXIuaWQgPSBcImhvbWVfc2xpZGVfY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBzbGlkZUFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNsaWRlQW5jaG9yLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9hbmNob3JfYnV0dG9uXCIpO1xuICAgIHNsaWRlQW5jaG9yLmlkID0gXCJzbGlkZV9hbmNob3JfYnV0dG9uXCI7XG4gICAgc2xpZGVBbmNob3IuaHJlZiA9IFwic2xpZGVzaG93Lmh0bWxcIjtcbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNsaWRlLmlubmVyVGV4dCA9IFwiVklFVyBJTkZPUk1BVElPTlwiO1xuICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9idXR0b25cIik7XG4gICAgc2xpZGUuaWQgPSBcInNsaWRlX2J1dHRvblwiO1xuICAgIHNsaWRlQW5jaG9yLmFwcGVuZChzbGlkZSk7XG5cblxuICAgIGNvbnN0IHNsaWRlQW5jaG9yU3RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNsaWRlQW5jaG9yU3RvcC5jbGFzc0xpc3QuYWRkKFwic2xpZGVfYW5jaG9yX2J1dHRvbl9zdG9wXCIpO1xuICAgIHNsaWRlQW5jaG9yU3RvcC5ocmVmID0gXCJzbGlkZXNob3cuaHRtbFwiO1xuXG4gICAgY29uc3Qgc2xpZGVDb250YWluZXJTdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzbGlkZUNvbnRhaW5lclN0b3AuY2xhc3NMaXN0LmFkZChcImhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3BcIik7XG4gICAgc2xpZGVDb250YWluZXJTdG9wLmlkID0gXCJob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9wXCI7XG5cblxuXG4gICAgY29uc3Qgc2xpZGVBbmNob3JIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgc2xpZGVBbmNob3JIb21lLmNsYXNzTGlzdC5hZGQoXCJzbGlkZV9hbmNob3JfaG9tZVwiKTtcbiAgICBzbGlkZUFuY2hvckhvbWUuaHJlZiA9IFwiaW5kZXguaHRtbFwiO1xuICAgIGNvbnN0IHNsaWRlU3RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNsaWRlU3RvcC5pbm5lclRleHQgPSBcIkhPTUVcIjsgXG4gICAgc2xpZGVBbmNob3JIb21lLmFwcGVuZChzbGlkZVN0b3ApO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kKHRpdGxlKTtcbiAgICBzbGlkZUNvbnRhaW5lci5hcHBlbmQoc2xpZGVBbmNob3IpO1xuICAgIHNsaWRlQ29udGFpbmVyU3RvcC5hcHBlbmQoc2xpZGVBbmNob3JIb21lKTtcblxuICAgIG5hdldyYXBwZXIuYXBwZW5kKHRpdGxlQ29udGFpbmVyLCBzbGlkZUNvbnRhaW5lciwgc2xpZGVDb250YWluZXJTdG9wKTtcblxuICAgIHJldHVybiBuYXZXcmFwcGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcFNsaWRlKCl7XG4gICAgY29uc3QgZ2V0U2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVfc2xpZGVfY29udGFpbmVyXCIpO1xuICAgIGdldFNsaWRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCBnZXRTbGlkZVN0b3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3BcIik7XG4gICAgZ2V0U2xpZGVTdG9wLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOndnaHRANzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbiAgICAtLWZvbnQtbGlicmU6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcblxcbn1cXG5odG1sIGJvZHl7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqIE5hdnBhZ2UgUGFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLm5hdmlnYXRpb25fd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDIuNXJlbSAyLjVyZW0gMi41cmVtIDIuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2xpZGVfYW5jaG9yX2J1dHRvbiwgLnNsaWRlX2FuY2hvcl9idXR0b25fc3RvcCwgLnNsaWRlX2FuY2hvcl9ob21le1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcblxcbi5kaXNwbGF5X2hpZGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kaXNwbGF5X3Nob3d7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVyIHB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMi41N3B4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3AgcHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjU3cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiBIb21lIFBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNtYWluX3NlY3Rpb257XFxuICAgIG1hcmdpbjogMCAyLjVyZW0gMCAyLjVyZW07XFxuICAgIGhlaWdodDogNzI0cHg7XFxufVxcblxcblxcbiNob21lX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGNvbHVtbi1nYXA6IDQwcHg7XFxuICAgIHJvdy1nYXA6IDQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE0MDBweDtcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xcbn1cXG5cXG4jaG9tZV9wYW5lbF93cmFwcGVye1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5wYW5lbF9vbmV7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcblxcbiNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjlweDtcXG4gICAgd2lkdGg6IDI0NnB4O1xcbiAgICBoZWlnaHQ6IDU0cHg7XFxuICAgIGxlZnQ6IDM2cHg7XFxufVxcbiNob21lX3RvcF9jb250ZW50e1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4jaG9tZV9ib3R0b21fY29udGVudHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKiogUGFuZWxzICoqKioqKioqL1xcbi5wYW5lbF90d297XFxuICAgIGhlaWdodDogNDAwcHg7XFxufVxcbi5wYW5lbF90d28gI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuLnBhbmVsX3RocmVle1xcbiAgICBoZWlnaHQ6IDI4NXB4O1xcbn1cXG5cXG5cXG4ucGFuZWxfZm91cntcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuLnBhbmVsX2ZvdXIgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX2ZpdmV7XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG4ucGFuZWxfZml2ZSAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfc2l4e1xcbiAgICBoZWlnaHQ6IDI4MHB4O1xcbn1cXG4ucGFuZWxfc2l4ICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF9zZXZlbntcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgdG9wOiAtMTE1cHg7XFxufVxcbi5wYW5lbF9zZXZlbiAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZWlnaHR7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG4ucGFuZWxfZWlnaHQgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX25pbmV7XFxuICAgIGhlaWdodDogNDIwcHg7XFxuICAgIHRvcDogLTMxMHB4O1xcbn1cXG4ucGFuZWxfbmluZSAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfdGVue1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICB0b3A6IC0yMjBweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX2VsZXZlbntcXG4gICAgaGVpZ2h0OiA1MjVweDtcXG4gICAgdG9wOiAtMTE1cHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF90d2VsdmV7XFxuICAgIGhlaWdodDogNDMwcHg7XFxuICAgIHRvcDogLTQwMHB4O1xcbn1cXG4ucGFuZWxfdHdlbHZlICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF90aGlydGVlbntcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgdG9wOiAtNDE1cHg7XFxufVxcbi5wYW5lbF90aGlydGVlbiAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZm91cnRlZW57XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHRvcDogLTQ4NXB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZml0aHRlZW57XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIHRvcDogLTQ5NXB4O1xcbiAgICByaWdodDogLTM2NnB4O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKiBQYW5lbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5pbWFnZV9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA0NzVweDtcXG4gICAgaGVpZ2h0OiA1NjBweDtcXG59XFxuXFxuLmltYWdlX2NvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnBhbmVsX2hvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiA2MjRweDtcXG59XFxuXFxuLmxlZnRfY29udGVudF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA0NDVweDtcXG4gICAgaGVpZ2h0OiAyMzhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG59XFxuXFxuLmxlZnRfY29udGVudF9jb250YWluZXJfZ2lybHtcXG4gICAgaGVpZ2h0OiAzMDJweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfZ3Vlcm5pY2F7XFxuICAgIGhlaWdodDogMTc0cHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYXtcXG4gICAgaGVpZ2h0OiAzMDJweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfbGFkeXtcXG4gICAgaGVpZ2h0OiAyMzg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2NhZmV7XFxuICAgIGhlaWdodDogMjM4cHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX3N3aW5ne1xcbiAgICBoZWlnaHQ6IDE3NHB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWxme1xcbiAgICBoZWlnaHQ6IDIzOHB4O1xcbn1cXG5cXG5cXG5cXG4ubGVmdF9wYW5lbF93cmFwcGVye1xcbiAgICB3aWR0aDogODUxcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxlZnRfdXBwZXJfdGV4dHtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICB3aWR0aDogMjU5cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNjVweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmdpcmxfbmV3X2hlaWdodHtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbn1cXG4ubW9uYV9uZXdfaGVpZ2h0e1xcbiAgICB3aWR0aDogMjEycHg7XFxufVxcbi5zd2luZ19uZXdfaGVpZ2h0e1xcbiAgICB3aWR0aDogMzE2cHg7XFxufVxcblxcblxcblxcbi5sZWZ0X2xvd2VyX3RleHR7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG4gICAgdG9wOiAxNDVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2OHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5wZWFybF9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDIwM3B4O1xcbn1cXG4uZ3Vlcm5pY2FfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiA3MHB4O1xcbn1cXG4uc2VhX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMjA5cHg7XFxufVxcbi5jYWZlX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMTQ2cHhcXG59XFxuLmFwcGxlX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMTQ0cHg7XFxufVxcbi5zd2luZ19sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDc2cHg7XFxufVxcbi5neXBzeV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDIyMXB4O1xcbn1cXG4uc2VsZl9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDE1OHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubGVmdF90aHVtYl9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE5MHB4O1xcbiAgICB0b3A6IDQ5NnB4O1xcbn1cXG4ucmlnaHRfcGFuZWxfd3JhcHBlcntcXG4gICAgd2lkdGg6IDUzOXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYXRlX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTQwcHg7XFxufVxcblxcbi5kYXRlX2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGhlaWdodDogMTgxcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgY29sb3I6ICNmM2YzZjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5yaWdodF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDM2NHB4OyBcXG4gICAgbGVmdDogNDVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDExNnB4O1xcbn1cXG5cXG4ucmlnaHRfY29udGVudF9jb250YWluZXIgcHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuXFxuLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDIuNXJlbSAwIDIuNXJlbTtcXG59XFxuXFxuXFxuLnRvcF90aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG4uYm90dG9tX25hbWV7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKiogICAgICAgU2xpZGUgUGFnZSAgICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jc2xpZGVfcGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLypcXG5cXG4jZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgb3JkZXI6IDM7XFxufVxcbiNuYXZpZ2F0aW9uX3dyYXBwZXJ7XFxuICAgIG9yZGVyOiAxO1xcbn1cXG4jbWFpbl9zZWN0aW9ue1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuKi9cXG5cXG4ucmlnaHRfd3JhcHBlcntcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogOTAuNjlweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAvKioqKioqKioqKiBIb21lIFBhZ2UgICoqKioqKioqKioqKioqKioqKioqL1xcbiAgICAjaG9tZV93cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XFxuICAgIH1cXG5cXG4gICAgLnNsaWRlX2FuY2hvcl9idXR0b257XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmhvbWVfc2xpZGVfY29udGFpbmVyIHB7XFxuICAgICAgICBmb250LXNpemU6IDlweDtcXG4gICAgfVxcblxcbiAgICAucGFuZWxfZml2ZSwgLnBhbmVsX3NldmVuLCAucGFuZWxfZWlnaHQsIC5wYW5lbF9uaW5lLCBcXG4gICAgLnBhbmVsX3RlbiwgLnBhbmVsX2VsZXZlbiwgLnBhbmVsX3R3ZWx2ZSwgLnBhbmVsX3RoaXJ0ZWVuLFxcbiAgICAucGFuZWxfZm91cnRlZW4sIC5wYW5lbF9maXRodGVlblxcbiAgICB7XFxuICAgICAgICB0b3A6IHVuc2V0O1xcbiAgICB9XFxuICAgIC5wYW5lbF9maXRodGVlbntcXG4gICAgICAgIHJpZ2h0OiB1bnNldDtcXG4gICAgfVxcblxcblxcbiAgICAvKioqKioqKioqKiBTbGlkZVNob3cgUGFnZSAgKioqKioqKioqKioqKioqKioqKiovXFxuICAgIC5zbGlkZV9hbmNob3JfaG9tZSBwe1xcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XFxuICAgIH1cXG4gICAgLnBhbmVsX2hvbGRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5sZWZ0X3BhbmVsX3dyYXBwZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuaW1hZ2VfY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDMyN3B4O1xcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcXG4gICAgfVxcblxcbiAgICAubGVmdF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDcycHg7XFxuICAgICAgICB3aWR0aDogMjI4cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwNHB4O1xcbiAgICAgICAgdG9wOiAyMzZweDtcXG4gICAgfVxcbiAgICAubGVmdF91cHBlcl90ZXh0e1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgd2lkdGg6IDIzMnB4O1xcbiAgICAgICAgbGVmdDogMjVweDtcXG4gICAgICAgIHRvcDogMjBweDtcXG4gICAgfVxcbiAgICAubGVmdF9sb3dlcl90ZXh0e1xcbiAgICAgICAgdG9wOiA1MXB4O1xcbiAgICAgICAgbGVmdDogMjVweDtcXG5cXG4gICAgfVxcbiAgICAubGVmdF90aHVtYl9jb250YWluZXJ7XFxuICAgICAgICByaWdodDogdW5zZXQ7XFxuICAgICAgICB0b3A6IDM0MHB4O1xcbiAgICAgICAgbGVmdDogODZweDtcXG4gICAgfVxcbiAgICAubGVmdF90aHVtYl9jb250YWluZXIgaW1ne1xcbiAgICAgICAgd2lkdGg6IDY0cHg7XFxuICAgICAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIH1cXG5cXG4gICAgLmRhdGVfY29udGVudHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAxOTZweDtcXG4gICAgICAgIHRvcDogNzRweDsgXFxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICB9XFxuICAgIC5yaWdodF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgICAgIHRvcDogMTQwcHg7XFxuICAgICAgICB3aWR0aDogODYlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIC5yaWdodF9jb250ZW50X2Rlc2NyaXB0aW9ue1xcbiAgICAgICAgd2lkdGg6IDMyN3B4O1xcbiAgICB9XFxuXFxuICAgIC5yaWdodF9wYW5lbF93cmFwcGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxuICAgICAgICBtYXJnaW46IDcuNXJlbSAyLjVyZW0gMCAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmxlZnRfY29udGVudF9jb250YWluZXJfZ2lybHtcXG4gICAgICAgIHdpZHRoOiAyNTdweDtcXG4gICAgfVxcbiAgICAuZ2lybF9uZXdfaGVpZ2h0e1xcbiAgICAgICAgd2lkdGg6IDE3MXB4O1xcbiAgICAgICAgdG9wOiA2cHg7XFxuICAgIH1cXG4gICAgLnBlYXJsX2xvd2VyX3RleHR7XFxuICAgICAgICB0b3A6IDU3cHg7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZV9ndWVybmljYXtcXG4gICAgICAgIHRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc3Rvcm1fbW9iaWxle1xcbiAgICAgICAgd2lkdGg6IDI4MXB4O1xcbiAgICB9XFxuICAgIC5zdG9ybV90ZXh0X21vYmlsZXtcXG4gICAgICAgIHdpZHRoOiAyMjRweDtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlX2thbmFnYXdhX3RleHR7XFxuICAgICAgICB3aWR0aDogMjMycHg7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLmRhdGVfY29udGVudHtcXG4gICAgICAgIGxlZnQ6IDg2cHg7XFxuICAgICAgICB0b3A6IDEwNnB4O1xcbiAgICB9XFxuICAgIC5yaWdodF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgICAgIHRvcDogMTcycHg7XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICAuZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwMHB4O1xcbiAgICB9XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWwtc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksc0JBQXNCOztJQUV0Qix3Q0FBd0M7O0FBRTVDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBLHNFQUFzRTtBQUN0RTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOzs7QUFHQSxtRUFBbUU7QUFDbkU7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLFlB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aEIsV0FBVztRQUNYLFNBQVM7UUFDVCxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsVUFBVTtRQUNWLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixRQUFRO0lBQ1o7SUFDQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOndnaHRANzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbjpyb290e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbiAgICAtLWZvbnQtbGlicmU6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xcblxcbn1cXG5odG1sIGJvZHl7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqIE5hdnBhZ2UgUGFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLm5hdmlnYXRpb25fd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDIuNXJlbSAyLjVyZW0gMi41cmVtIDIuNXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2xpZGVfYW5jaG9yX2J1dHRvbiwgLnNsaWRlX2FuY2hvcl9idXR0b25fc3RvcCwgLnNsaWRlX2FuY2hvcl9ob21le1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcblxcbi5kaXNwbGF5X2hpZGV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kaXNwbGF5X3Nob3d7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVyIHB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMi41N3B4O1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG59XFxuXFxuLmhvbWVfc2xpZGVfY29udGFpbmVyX3N0b3AgcHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjU3cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiBIb21lIFBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNtYWluX3NlY3Rpb257XFxuICAgIG1hcmdpbjogMCAyLjVyZW0gMCAyLjVyZW07XFxuICAgIGhlaWdodDogNzI0cHg7XFxufVxcblxcblxcbiNob21lX3dyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGNvbHVtbi1nYXA6IDQwcHg7XFxuICAgIHJvdy1nYXA6IDQwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE0MDBweDtcXG4gICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xcbn1cXG5cXG4jaG9tZV9wYW5lbF93cmFwcGVye1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5wYW5lbF9vbmV7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcblxcbiNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjlweDtcXG4gICAgd2lkdGg6IDI0NnB4O1xcbiAgICBoZWlnaHQ6IDU0cHg7XFxuICAgIGxlZnQ6IDM2cHg7XFxufVxcbiNob21lX3RvcF9jb250ZW50e1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG4jaG9tZV9ib3R0b21fY29udGVudHtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKiogUGFuZWxzICoqKioqKioqL1xcbi5wYW5lbF90d297XFxuICAgIGhlaWdodDogNDAwcHg7XFxufVxcbi5wYW5lbF90d28gI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuLnBhbmVsX3RocmVle1xcbiAgICBoZWlnaHQ6IDI4NXB4O1xcbn1cXG5cXG5cXG4ucGFuZWxfZm91cntcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuLnBhbmVsX2ZvdXIgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX2ZpdmV7XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG4ucGFuZWxfZml2ZSAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfc2l4e1xcbiAgICBoZWlnaHQ6IDI4MHB4O1xcbn1cXG4ucGFuZWxfc2l4ICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF9zZXZlbntcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgdG9wOiAtMTE1cHg7XFxufVxcbi5wYW5lbF9zZXZlbiAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZWlnaHR7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG4ucGFuZWxfZWlnaHQgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX25pbmV7XFxuICAgIGhlaWdodDogNDIwcHg7XFxuICAgIHRvcDogLTMxMHB4O1xcbn1cXG4ucGFuZWxfbmluZSAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfdGVue1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICB0b3A6IC0yMjBweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX2VsZXZlbntcXG4gICAgaGVpZ2h0OiA1MjVweDtcXG4gICAgdG9wOiAtMTE1cHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF90d2VsdmV7XFxuICAgIGhlaWdodDogNDMwcHg7XFxuICAgIHRvcDogLTQwMHB4O1xcbn1cXG4ucGFuZWxfdHdlbHZlICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF90aGlydGVlbntcXG4gICAgaGVpZ2h0OiAyNjBweDtcXG4gICAgdG9wOiAtNDE1cHg7XFxufVxcbi5wYW5lbF90aGlydGVlbiAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZm91cnRlZW57XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIHRvcDogLTQ4NXB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZml0aHRlZW57XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIHRvcDogLTQ5NXB4O1xcbiAgICByaWdodDogLTM2NnB4O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKiBQYW5lbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5pbWFnZV9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA0NzVweDtcXG4gICAgaGVpZ2h0OiA1NjBweDtcXG59XFxuXFxuLmltYWdlX2NvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLnBhbmVsX2hvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiA2MjRweDtcXG59XFxuXFxuLmxlZnRfY29udGVudF9jb250YWluZXJ7XFxuICAgIHdpZHRoOiA0NDVweDtcXG4gICAgaGVpZ2h0OiAyMzhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG59XFxuXFxuLmxlZnRfY29udGVudF9jb250YWluZXJfZ2lybHtcXG4gICAgaGVpZ2h0OiAzMDJweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfZ3Vlcm5pY2F7XFxuICAgIGhlaWdodDogMTc0cHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlYXtcXG4gICAgaGVpZ2h0OiAzMDJweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfbGFkeXtcXG4gICAgaGVpZ2h0OiAyMzg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX2NhZmV7XFxuICAgIGhlaWdodDogMjM4cHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX3N3aW5ne1xcbiAgICBoZWlnaHQ6IDE3NHB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9zZWxme1xcbiAgICBoZWlnaHQ6IDIzOHB4O1xcbn1cXG5cXG5cXG5cXG4ubGVmdF9wYW5lbF93cmFwcGVye1xcbiAgICB3aWR0aDogODUxcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxlZnRfdXBwZXJfdGV4dHtcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcbiAgICB3aWR0aDogMjU5cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNjVweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmdpcmxfbmV3X2hlaWdodHtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbn1cXG4ubW9uYV9uZXdfaGVpZ2h0e1xcbiAgICB3aWR0aDogMjEycHg7XFxufVxcbi5zd2luZ19uZXdfaGVpZ2h0e1xcbiAgICB3aWR0aDogMzE2cHg7XFxufVxcblxcblxcblxcbi5sZWZ0X2xvd2VyX3RleHR7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBjb2xvcjogIzdkN2Q3ZDtcXG4gICAgdG9wOiAxNDVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2OHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5wZWFybF9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDIwM3B4O1xcbn1cXG4uZ3Vlcm5pY2FfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiA3MHB4O1xcbn1cXG4uc2VhX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMjA5cHg7XFxufVxcbi5jYWZlX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMTQ2cHhcXG59XFxuLmFwcGxlX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMTQ0cHg7XFxufVxcbi5zd2luZ19sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDc2cHg7XFxufVxcbi5neXBzeV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDIyMXB4O1xcbn1cXG4uc2VsZl9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDE1OHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubGVmdF90aHVtYl9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDE5MHB4O1xcbiAgICB0b3A6IDQ5NnB4O1xcbn1cXG4ucmlnaHRfcGFuZWxfd3JhcHBlcntcXG4gICAgd2lkdGg6IDUzOXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kYXRlX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTQwcHg7XFxufVxcblxcbi5kYXRlX2NvbnRlbnR7XFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMzcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGhlaWdodDogMTgxcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgY29sb3I6ICNmM2YzZjM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5yaWdodF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDM2NHB4OyBcXG4gICAgbGVmdDogNDVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDExNnB4O1xcbn1cXG5cXG4ucmlnaHRfY29udGVudF9jb250YWluZXIgcHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuXFxuLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIDIuNXJlbSAwIDIuNXJlbTtcXG59XFxuXFxuXFxuLnRvcF90aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG4uYm90dG9tX25hbWV7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKiogICAgICAgU2xpZGUgUGFnZSAgICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jc2xpZGVfcGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLypcXG5cXG4jZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgb3JkZXI6IDM7XFxufVxcbiNuYXZpZ2F0aW9uX3dyYXBwZXJ7XFxuICAgIG9yZGVyOiAxO1xcbn1cXG4jbWFpbl9zZWN0aW9ue1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuKi9cXG5cXG4ucmlnaHRfd3JhcHBlcntcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogOTAuNjlweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgICAvKioqKioqKioqKiBIb21lIFBhZ2UgICoqKioqKioqKioqKioqKioqKioqL1xcbiAgICAjaG9tZV93cmFwcGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XFxuICAgIH1cXG5cXG4gICAgLnNsaWRlX2FuY2hvcl9idXR0b257XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmhvbWVfc2xpZGVfY29udGFpbmVyIHB7XFxuICAgICAgICBmb250LXNpemU6IDlweDtcXG4gICAgfVxcblxcbiAgICAucGFuZWxfZml2ZSwgLnBhbmVsX3NldmVuLCAucGFuZWxfZWlnaHQsIC5wYW5lbF9uaW5lLCBcXG4gICAgLnBhbmVsX3RlbiwgLnBhbmVsX2VsZXZlbiwgLnBhbmVsX3R3ZWx2ZSwgLnBhbmVsX3RoaXJ0ZWVuLFxcbiAgICAucGFuZWxfZm91cnRlZW4sIC5wYW5lbF9maXRodGVlblxcbiAgICB7XFxuICAgICAgICB0b3A6IHVuc2V0O1xcbiAgICB9XFxuICAgIC5wYW5lbF9maXRodGVlbntcXG4gICAgICAgIHJpZ2h0OiB1bnNldDtcXG4gICAgfVxcblxcblxcbiAgICAvKioqKioqKioqKiBTbGlkZVNob3cgUGFnZSAgKioqKioqKioqKioqKioqKioqKiovXFxuICAgIC5zbGlkZV9hbmNob3JfaG9tZSBwe1xcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XFxuICAgIH1cXG4gICAgLnBhbmVsX2hvbGRlcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5sZWZ0X3BhbmVsX3dyYXBwZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAuaW1hZ2VfY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6IDMyN3B4O1xcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcXG4gICAgfVxcblxcbiAgICAubGVmdF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IDcycHg7XFxuICAgICAgICB3aWR0aDogMjI4cHg7XFxuICAgICAgICBoZWlnaHQ6IDEwNHB4O1xcbiAgICAgICAgdG9wOiAyMzZweDtcXG4gICAgfVxcbiAgICAubGVmdF91cHBlcl90ZXh0e1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgd2lkdGg6IDIzMnB4O1xcbiAgICAgICAgbGVmdDogMjVweDtcXG4gICAgICAgIHRvcDogMjBweDtcXG4gICAgfVxcbiAgICAubGVmdF9sb3dlcl90ZXh0e1xcbiAgICAgICAgdG9wOiA1MXB4O1xcbiAgICAgICAgbGVmdDogMjVweDtcXG5cXG4gICAgfVxcbiAgICAubGVmdF90aHVtYl9jb250YWluZXJ7XFxuICAgICAgICByaWdodDogdW5zZXQ7XFxuICAgICAgICB0b3A6IDM0MHB4O1xcbiAgICAgICAgbGVmdDogODZweDtcXG4gICAgfVxcbiAgICAubGVmdF90aHVtYl9jb250YWluZXIgaW1ne1xcbiAgICAgICAgd2lkdGg6IDY0cHg7XFxuICAgICAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIH1cXG5cXG4gICAgLmRhdGVfY29udGVudHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxuICAgICAgICBsZWZ0OiAxOTZweDtcXG4gICAgICAgIHRvcDogNzRweDsgXFxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xcbiAgICB9XFxuICAgIC5yaWdodF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgICAgIHRvcDogMTQwcHg7XFxuICAgICAgICB3aWR0aDogODYlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIC5yaWdodF9jb250ZW50X2Rlc2NyaXB0aW9ue1xcbiAgICAgICAgd2lkdGg6IDMyN3B4O1xcbiAgICB9XFxuXFxuICAgIC5yaWdodF9wYW5lbF93cmFwcGVye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxuICAgICAgICBtYXJnaW46IDcuNXJlbSAyLjVyZW0gMCAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmxlZnRfY29udGVudF9jb250YWluZXJfZ2lybHtcXG4gICAgICAgIHdpZHRoOiAyNTdweDtcXG4gICAgfVxcbiAgICAuZ2lybF9uZXdfaGVpZ2h0e1xcbiAgICAgICAgd2lkdGg6IDE3MXB4O1xcbiAgICAgICAgdG9wOiA2cHg7XFxuICAgIH1cXG4gICAgLnBlYXJsX2xvd2VyX3RleHR7XFxuICAgICAgICB0b3A6IDU3cHg7XFxuICAgIH1cXG5cXG4gICAgLm1vYmlsZV9ndWVybmljYXtcXG4gICAgICAgIHRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAuc3Rvcm1fbW9iaWxle1xcbiAgICAgICAgd2lkdGg6IDI4MXB4O1xcbiAgICB9XFxuICAgIC5zdG9ybV90ZXh0X21vYmlsZXtcXG4gICAgICAgIHdpZHRoOiAyMjRweDtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlX2thbmFnYXdhX3RleHR7XFxuICAgICAgICB3aWR0aDogMjMycHg7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgLmRhdGVfY29udGVudHtcXG4gICAgICAgIGxlZnQ6IDg2cHg7XFxuICAgICAgICB0b3A6IDEwNnB4O1xcbiAgICB9XFxuICAgIC5yaWdodF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgICAgIHRvcDogMTcycHg7XFxuICAgIH1cXG5cXG4gICAgLmZvb3Rlcl9jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgICAuZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwMHB4O1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBzdHlsZSBmcm9tICcuLi9nbG9iYWwtc3R5bGUuY3NzJztcbmltcG9ydCBpbWFnZU9uZSBmcm9tICcuLi9hc3NldHMvc3RhcnJ5LW5pZ2h0L3RodW1ibmFpbC5qcGcnO1xuaW1wb3J0IGltYWdlVHdvIGZyb20gJy4uL2Fzc2V0cy9naXJsLXdpdGgtcGVhcmwtZWFycmluZy90aHVtYm5haWwuanBnJztcbmltcG9ydCBpbWFnZVRocmVlIGZyb20gJy4uL2Fzc2V0cy9ndWVybmljYS90aHVtYm5haWwuanBnJztcbmltcG9ydCBpbWFnZUZvdXIgZnJvbSAnLi4vYXNzZXRzL3Blbml0ZW50LW1hZ2RhbGVuZS90aHVtYm5haWwuanBnJztcbmltcG9ydCBpbWFnZUZpdmUgZnJvbSAnLi4vYXNzZXRzL3RoZS1zdG9ybS1vbi10aGUtc2VhLW9mLWdhbGlsZWUvdGh1bWJuYWlsLmpwZyc7XG5pbXBvcnQgaW1hZ2VTaXggZnJvbSAnLi4vYXNzZXRzL3RoZS1ncmVhdC13YXZlLW9mZi1rYW5hZ2F3YS90aHVtYm5haWwuanBnJztcbmltcG9ydCBpbWFnZVNldmVuIGZyb20gJy4uL2Fzc2V0cy92YW4tZ29naC1zZWxmLXBvcnRyYWl0L3RodW1ibmFpbC5qcGcnO1xuaW1wb3J0IGltYWdlRWlnaHQgZnJvbSAnLi4vYXNzZXRzL3RoZS1zbGVlcGluZy1neXBzeS90aHVtYm5haWwuanBnJztcbmltcG9ydCBpbWFnZU5pbmUgZnJvbSAnLi4vYXNzZXRzL2xhZHktd2l0aC1hbi1lcm1pbmUvdGh1bWJuYWlsLmpwZyc7XG5pbXBvcnQgaW1hZ2VUZW4gZnJvbSAnLi4vYXNzZXRzL3RoZS1uaWdodC1jYWZlL3RodW1ibmFpbC5qcGcnO1xuaW1wb3J0IGltYWdlRWxldmVuIGZyb20gJy4uL2Fzc2V0cy9tb25hLWxpc2EvdGh1bWJuYWlsLmpwZyc7XG5pbXBvcnQgaW1hZ2VUd2VsdmUgZnJvbSAnLi4vYXNzZXRzL3RoZS1iYXNrZXQtb2YtYXBwbGVzL3RodW1ibmFpbC5qcGcnO1xuaW1wb3J0IGltYWdlVGhpcnRlZW4gZnJvbSAnLi4vYXNzZXRzL3RoZS1ib3ktaW4tdGhlLXJlZC12ZXN0L3RodW1ibmFpbC5qcGcnO1xuaW1wb3J0IGltYWdlRm91cnRlZW4gZnJvbSAnLi4vYXNzZXRzL2Fybm9sZmluaS1wb3J0cmFpdC90aHVtYm5haWwuanBnJztcbmltcG9ydCBpbWFnZUZpdGh0ZWVuIGZyb20gJy4uL2Fzc2V0cy90aGUtc3dpbmcvdGh1bWJuYWlsLmpwZyc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uQmFyfSBmcm9tICcuL25hdmJhcic7XG5cblxuZnVuY3Rpb24gcGljdHVyZVBhbmVsKHdyYXBwZXJOYW1lLCBpbWFnZVNvdXJjZSwgdG9wQ29udGVudFRleHQsIGJvdHRvbUNvbnRlbnRUZXh0KXtcbiAgICBjb25zdCBwYW5lbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhbmVsV3JhcHBlci5pZCA9IFwiaG9tZV9wYW5lbF93cmFwcGVyXCI7XG4gICAgcGFuZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQod3JhcHBlck5hbWUpO1xuXG4gICAgY29uc3QgcGFuZWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGFuZWxJbWFnZS5pZCA9IFwiaG9tZV9wYW5lbF9pbWFnZVwiO1xuICAgIHBhbmVsSW1hZ2Uuc3JjPSBpbWFnZVNvdXJjZTtcblxuICAgIGNvbnN0IHBhbmVsQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFuZWxDb250ZW50Q29udGFpbmVyLmlkID0gXCJob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0b3BDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgYm90dG9tQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvcENvbnRlbnQuaWQgPSAnaG9tZV90b3BfY29udGVudCc7XG4gICAgYm90dG9tQ29udGVudC5pZCA9ICdob21lX2JvdHRvbV9jb250ZW50JztcbiAgICB0b3BDb250ZW50LmlubmVyVGV4dCA9IHRvcENvbnRlbnRUZXh0O1xuICAgIGJvdHRvbUNvbnRlbnQuaW5uZXJUZXh0ID0gYm90dG9tQ29udGVudFRleHQ7XG5cblxuXG4gICAgcGFuZWxDb250ZW50Q29udGFpbmVyLmFwcGVuZCh0b3BDb250ZW50LCBib3R0b21Db250ZW50KTtcbiAgICBwYW5lbFdyYXBwZXIuYXBwZW5kKHBhbmVsSW1hZ2UsIHBhbmVsQ29udGVudENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gcGFuZWxXcmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgaG9tZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVXcmFwcGVyLmlkID0gXCJob21lX3dyYXBwZXJcIjtcbiAgICBcbiAgICBcbiAgICBsZXQgb25lID0gcGljdHVyZVBhbmVsKFwicGFuZWxfb25lXCIsIGltYWdlT25lLCBcIlN0YXJyeSBOaWdodFwiLCBcIlZpbmNlbnQgdmFuIEdvZ2hcIik7XG4gICAgbGV0IHR3byA9IHBpY3R1cmVQYW5lbChcInBhbmVsX3R3b1wiLCBpbWFnZVR3bywgXCJHaXJsIHdpdGggYSBQZWFybCBFYXJpbmdcIiwgXCJKb2hhbm5lcyBWZXJtZWVyXCIpO1xuICAgIGxldCB0aHJlZSA9IHBpY3R1cmVQYW5lbChcInBhbmVsX3RocmVlXCIsIGltYWdlVGhyZWUsIFwiR3Vlcm5pY2FcIiwgXCJQYWJsbyBQaWNhc3NvXCIpO1xuICAgIGxldCBmb3VyID0gcGljdHVyZVBhbmVsKFwicGFuZWxfZm91clwiLCBpbWFnZUZvdXIsIFwiUGVuaXRlbnQgTWFnZGFsZW5lXCIsIFwiQXJ0ZW1pc2lhIEdlbnRpbGVzY2hpXCIpO1xuICAgIGxldCBmaXZlID0gcGljdHVyZVBhbmVsKFwicGFuZWxfZml2ZVwiLCBpbWFnZUZpdmUsIFwiVGhlIFN0b3JtIG9uIHRoZSBTZWEgb2YgR2FsaWxlZVwiLCBcIlJlbWJyYW5kdFwiKTtcbiAgICBsZXQgc2l4ID0gcGljdHVyZVBhbmVsKFwicGFuZWxfc2l4XCIsIGltYWdlU2l4LCBcIlRoZSBHcmVhdCBXYXZlIG9mZiBLYW5hZ2F3YVwiLCBcIkhva3VzYWlcIik7XG4gICAgbGV0IHNldmVuID0gcGljdHVyZVBhbmVsKFwicGFuZWxfc2V2ZW5cIiwgaW1hZ2VTZXZlbiwgXCJWYW4gR29naCBzZWxmLXBvcnRyYWl0XCIsIFwiVmluY2VudCB2YW4gR29naFwiKTtcbiAgICBsZXQgZWlnaHQgPSBwaWN0dXJlUGFuZWwoXCJwYW5lbF9laWdodFwiLCBpbWFnZUVpZ2h0LCBcIlRoZSBTbGVlcGluZyBHeXBzeVwiLCBcIkhlbnJpIFJvdXNzZWF1XCIpO1xuICAgIGxldCBuaW5lID0gcGljdHVyZVBhbmVsKFwicGFuZWxfbmluZVwiLCBpbWFnZU5pbmUsIFwiTGFkeSB3aXRoIGFuIEVybWluXCIsIFwiTGVvbmFyZG8gZGEgVmluY2lcIik7XG4gICAgbGV0IHRlbiA9IHBpY3R1cmVQYW5lbChcInBhbmVsX3RlblwiLCBpbWFnZVRlbiwgXCJUaGUgTmlnaHQgQ2FmZVwiLCBcIlZpbmNlbnQgdmFuIEdvZ2hcIik7XG4gICAgbGV0IGVsZXZlbiA9IHBpY3R1cmVQYW5lbChcInBhbmVsX2VsZXZlblwiLCBpbWFnZUVsZXZlbiwgXCJNb25hIExpc2FcIiwgXCJMZW9uYXJkbyBkYSBWaW5jaVwiKTtcbiAgICBsZXQgdHdlbHZlID0gcGljdHVyZVBhbmVsKFwicGFuZWxfdHdlbHZlXCIsIGltYWdlVHdlbHZlLCBcIlRoZSBCYXNrZXQgb2YgQXBwbGVzXCIsIFwiUGF1bCBDZXphbm5lXCIpO1xuICAgIGxldCB0aGlydGVlbiA9IHBpY3R1cmVQYW5lbChcInBhbmVsX3RoaXJ0ZWVuXCIsIGltYWdlVGhpcnRlZW4sIFwiVGhlIEJveSBpbiB0aGUgUmVkIFZlc3RcIiwgXCJFZHdhcmQgSG9wcGVyXCIpO1xuICAgIGxldCBmb3VydGVlbiA9IHBpY3R1cmVQYW5lbChcInBhbmVsX2ZvdXJ0ZWVuXCIsIGltYWdlRm91cnRlZW4sIFwiQXJub2xmaW5pIFBvcnRyYWl0XCIsIFwiSmFuIHZhbiBFeWNrXCIpO1xuICAgIGxldCBmaXRodGVlbiA9IHBpY3R1cmVQYW5lbChcInBhbmVsX2ZpdGh0ZWVuXCIsIGltYWdlRml0aHRlZW4sIFwiVGhlIFN3aW5nXCIsIFwiSmVhbi1Ib25vcmUgRnJhZ29uYXJkXCIpO1xuXG5cbiAgICBob21lV3JhcHBlci5hcHBlbmQob25lLCB0d28sIHRocmVlLCBmb3VyLCBmaXZlLCBzaXgsIHNldmVuLCBlaWdodCwgbmluZSwgdGVuLCBlbGV2ZW4sIHR3ZWx2ZSwgdGhpcnRlZW4sIGZvdXJ0ZWVuLCBmaXRodGVlbik7XG5cbiAgICByZXR1cm4gaG9tZVdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCl7XG4gICAgY29uc3QgY3JlYXRlTmF2ID0gbmF2aWdhdGlvbkJhcigpO1xuICAgIGNvbnN0IGdldEhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVfcGFnZVwiKTtcbiAgICBjb25zdCBnZXRXcmFwcGVyID0gY3JlYXRlSG9tZSgpO1xuXG4gICAgZ2V0SG9tZS5hcHBlbmQoY3JlYXRlTmF2LCBnZXRXcmFwcGVyKTtcbn1cbmxvYWRIb21lKCk7XG4iXSwibmFtZXMiOlsiZ2FsbGVyaWFMb2dvIiwic3R5bGUiLCJuYXZpZ2F0aW9uQmFyIiwibmF2V3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlQ29udGFpbmVyIiwidGl0bGUiLCJzcmMiLCJzbGlkZUNvbnRhaW5lciIsImlkIiwic2xpZGVBbmNob3IiLCJocmVmIiwic2xpZGUiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJzbGlkZUFuY2hvclN0b3AiLCJzbGlkZUNvbnRhaW5lclN0b3AiLCJzbGlkZUFuY2hvckhvbWUiLCJzbGlkZVN0b3AiLCJzdG9wU2xpZGUiLCJnZXRTbGlkZSIsImdldEVsZW1lbnRCeUlkIiwiZGlzcGxheSIsImdldFNsaWRlU3RvcCIsImltYWdlT25lIiwiaW1hZ2VUd28iLCJpbWFnZVRocmVlIiwiaW1hZ2VGb3VyIiwiaW1hZ2VGaXZlIiwiaW1hZ2VTaXgiLCJpbWFnZVNldmVuIiwiaW1hZ2VFaWdodCIsImltYWdlTmluZSIsImltYWdlVGVuIiwiaW1hZ2VFbGV2ZW4iLCJpbWFnZVR3ZWx2ZSIsImltYWdlVGhpcnRlZW4iLCJpbWFnZUZvdXJ0ZWVuIiwiaW1hZ2VGaXRodGVlbiIsInBpY3R1cmVQYW5lbCIsIndyYXBwZXJOYW1lIiwiaW1hZ2VTb3VyY2UiLCJ0b3BDb250ZW50VGV4dCIsImJvdHRvbUNvbnRlbnRUZXh0IiwicGFuZWxXcmFwcGVyIiwicGFuZWxJbWFnZSIsInBhbmVsQ29udGVudENvbnRhaW5lciIsInRvcENvbnRlbnQiLCJib3R0b21Db250ZW50IiwiY3JlYXRlSG9tZSIsImhvbWVXcmFwcGVyIiwib25lIiwidHdvIiwidGhyZWUiLCJmb3VyIiwiZml2ZSIsInNpeCIsInNldmVuIiwiZWlnaHQiLCJuaW5lIiwidGVuIiwiZWxldmVuIiwidHdlbHZlIiwidGhpcnRlZW4iLCJmb3VydGVlbiIsImZpdGh0ZWVuIiwibG9hZEhvbWUiLCJjcmVhdGVOYXYiLCJnZXRIb21lIiwiZ2V0V3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=