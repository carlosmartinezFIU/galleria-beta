/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/assets/shared/logo.svg":
/*!************************************!*\
  !*** ./src/assets/shared/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a6c072704eeee12c44a.svg";

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
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
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
  slideAnchor.href = "/galleria-beta/slideshow.html";
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxVQUFVLFNBQVMsS0FBSyxVQUFVLFVBQVUsU0FBUyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFFBQVEsWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxTQUFTLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxnQkFBZ0IsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLFFBQVEsVUFBVSxLQUFLLEtBQUssVUFBVSxRQUFRLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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QSxNQUFNUSxlQUFlLEdBQUdoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBeEI7QUFDQWUsRUFBQUEsZUFBZSxDQUFDZCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsbUJBQTlCO0FBQ0FhLEVBQUFBLGVBQWUsQ0FBQ04sSUFBaEIsR0FBdUIsWUFBdkI7QUFDQSxNQUFNTyxTQUFTLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbEI7QUFDQWdCLEVBQUFBLFNBQVMsQ0FBQ0wsU0FBVixHQUFzQixNQUF0QjtBQUNBSSxFQUFBQSxlQUFlLENBQUNILE1BQWhCLENBQXVCSSxTQUF2QjtBQUVBYixFQUFBQSxjQUFjLENBQUNTLE1BQWYsQ0FBc0JSLEtBQXRCO0FBQ0FFLEVBQUFBLGNBQWMsQ0FBQ00sTUFBZixDQUFzQkosV0FBdEI7QUFDQU0sRUFBQUEsa0JBQWtCLENBQUNGLE1BQW5CLENBQTBCRyxlQUExQjtBQUVBakIsRUFBQUEsVUFBVSxDQUFDYyxNQUFYLENBQWtCVCxjQUFsQixFQUFrQ0csY0FBbEMsRUFBa0RRLGtCQUFsRDtBQUVBLFNBQU9oQixVQUFQO0FBQ0g7QUFFTSxTQUFTbUIsU0FBVCxHQUFvQjtBQUN2QixNQUFNQyxRQUFRLEdBQUduQixRQUFRLENBQUNvQixjQUFULENBQXdCLHNCQUF4QixDQUFqQjtBQUNBRCxFQUFBQSxRQUFRLENBQUN0QixLQUFULENBQWV3QixPQUFmLEdBQXlCLE1BQXpCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHdEIsUUFBUSxDQUFDb0IsY0FBVCxDQUF3QiwyQkFBeEIsQ0FBckI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDekIsS0FBYixDQUFtQndCLE9BQW5CLEdBQTZCLE9BQTdCO0FBQ0gsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9zcmMvZ2xvYmFsLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL3NyYy9nbG9iYWwtc3R5bGUuY3NzPzEzMDkiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbGxlcmlhLWJldGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FsbGVyaWEtYmV0YS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWxsZXJpYS1iZXRhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIC0tZm9udC1saWJyZTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XFxuXFxufVxcbmh0bWwgYm9keXtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKiogTmF2cGFnZSBQYWdlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubmF2aWdhdGlvbl93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMi41cmVtIDIuNXJlbSAyLjVyZW0gMi41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5zbGlkZV9hbmNob3JfYnV0dG9uLCAuc2xpZGVfYW5jaG9yX2J1dHRvbl9zdG9wLCAuc2xpZGVfYW5jaG9yX2hvbWV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuXFxuLmRpc3BsYXlfaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRpc3BsYXlfc2hvd3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9we1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXIgcHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjU3cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcCBwe1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNTdweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqIEhvbWUgUGFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21haW5fc2VjdGlvbntcXG4gICAgbWFyZ2luOiAwIDIuNXJlbSAwIDIuNXJlbTtcXG4gICAgaGVpZ2h0OiA3MjRweDtcXG59XFxuXFxuXFxuI2hvbWVfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgY29sdW1uLWdhcDogNDBweDtcXG4gICAgcm93LWdhcDogNDBweDtcXG4gICAgbWF4LWhlaWdodDogMTQwMHB4O1xcbiAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XFxufVxcblxcbiNob21lX3BhbmVsX3dyYXBwZXJ7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLnBhbmVsX29uZXtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyOXB4O1xcbiAgICB3aWR0aDogMjQ2cHg7XFxuICAgIGhlaWdodDogNTRweDtcXG4gICAgbGVmdDogMzZweDtcXG59XFxuI2hvbWVfdG9wX2NvbnRlbnR7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbiNob21lX2JvdHRvbV9jb250ZW50e1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKiBQYW5lbHMgKioqKioqKiovXFxuLnBhbmVsX3R3b3tcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuLnBhbmVsX3R3byAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG4ucGFuZWxfdGhyZWV7XFxuICAgIGhlaWdodDogMjg1cHg7XFxufVxcblxcblxcbi5wYW5lbF9mb3Vye1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG4ucGFuZWxfZm91ciAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfZml2ZXtcXG4gICAgaGVpZ2h0OiAzNDBweDtcXG4gICAgdG9wOiAtMTUwcHg7XFxufVxcbi5wYW5lbF9maXZlICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF9zaXh7XFxuICAgIGhlaWdodDogMjgwcHg7XFxufVxcbi5wYW5lbF9zaXggI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX3NldmVue1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB0b3A6IC0xMTVweDtcXG59XFxuLnBhbmVsX3NldmVuICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9laWdodHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdG9wOiAtMTUwcHg7XFxufVxcbi5wYW5lbF9laWdodCAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfbmluZXtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgdG9wOiAtMzEwcHg7XFxufVxcbi5wYW5lbF9uaW5lICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF90ZW57XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHRvcDogLTIyMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZWxldmVue1xcbiAgICBoZWlnaHQ6IDUyNXB4O1xcbiAgICB0b3A6IC0xMTVweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX3R3ZWx2ZXtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgdG9wOiAtNDAwcHg7XFxufVxcbi5wYW5lbF90d2VsdmUgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX3RoaXJ0ZWVue1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICB0b3A6IC00MTVweDtcXG59XFxuLnBhbmVsX3RoaXJ0ZWVuICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9mb3VydGVlbntcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgdG9wOiAtNDg1cHg7XFxufVxcblxcblxcblxcblxcblxcbi5wYW5lbF9maXRodGVlbntcXG4gICAgaGVpZ2h0OiAzNDBweDtcXG4gICAgdG9wOiAtNDk1cHg7XFxuICAgIHJpZ2h0OiAtMzY2cHg7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqIFBhbmVscyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmltYWdlX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDQ3NXB4O1xcbiAgICBoZWlnaHQ6IDU2MHB4O1xcbn1cXG5cXG4uaW1hZ2VfY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucGFuZWxfaG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDYyNHB4O1xcbn1cXG5cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDQ0NXB4O1xcbiAgICBoZWlnaHQ6IDIzOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbn1cXG5cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9naXJse1xcbiAgICBoZWlnaHQ6IDMwMnB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9ndWVybmljYXtcXG4gICAgaGVpZ2h0OiAxNzRweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfc2Vhe1xcbiAgICBoZWlnaHQ6IDMwMnB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9sYWR5e1xcbiAgICBoZWlnaHQ6IDIzODtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfY2FmZXtcXG4gICAgaGVpZ2h0OiAyMzhweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfc3dpbmd7XFxuICAgIGhlaWdodDogMTc0cHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlbGZ7XFxuICAgIGhlaWdodDogMjM4cHg7XFxufVxcblxcblxcblxcbi5sZWZ0X3BhbmVsX3dyYXBwZXJ7XFxuICAgIHdpZHRoOiA4NTFweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGVmdF91cHBlcl90ZXh0e1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIHdpZHRoOiAyNTlweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2NXB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZ2lybF9uZXdfaGVpZ2h0e1xcbiAgICB3aWR0aDogMzgwcHg7XFxufVxcbi5tb25hX25ld19oZWlnaHR7XFxuICAgIHdpZHRoOiAyMTJweDtcXG59XFxuLnN3aW5nX25ld19oZWlnaHR7XFxuICAgIHdpZHRoOiAzMTZweDtcXG59XFxuXFxuXFxuXFxuLmxlZnRfbG93ZXJfdGV4dHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbiAgICB0b3A6IDE0NXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDY4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLnBlYXJsX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMjAzcHg7XFxufVxcbi5ndWVybmljYV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDcwcHg7XFxufVxcbi5zZWFfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAyMDlweDtcXG59XFxuLmNhZmVfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAxNDZweFxcbn1cXG4uYXBwbGVfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAxNDRweDtcXG59XFxuLnN3aW5nX2xvd2VyX3RleHR7XFxuICAgIHRvcDogNzZweDtcXG59XFxuLmd5cHN5X2xvd2VyX3RleHR7XFxuICAgIHRvcDogMjIxcHg7XFxufVxcbi5zZWxmX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMTU4cHg7XFxufVxcblxcblxcblxcblxcbi5sZWZ0X3RodW1iX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTkwcHg7XFxuICAgIHRvcDogNDk2cHg7XFxufVxcbi5yaWdodF9wYW5lbF93cmFwcGVye1xcbiAgICB3aWR0aDogNTM5cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhdGVfY29udGFpbmVye1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLmRhdGVfY29udGVudHtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgaGVpZ2h0OiAxODFweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzY0cHg7IFxcbiAgICBsZWZ0OiA0NXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTE2cHg7XFxufVxcblxcbi5yaWdodF9jb250ZW50X2NvbnRhaW5lciBwe1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4uZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDAgMi41cmVtIDAgMi41cmVtO1xcbn1cXG5cXG5cXG4udG9wX3RpdGxle1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcbi5ib3R0b21fbmFtZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKiAgICAgICBTbGlkZSBQYWdlICAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNzbGlkZV9wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4vKlxcblxcbiNmb290ZXJfY29udGFpbmVye1xcbiAgICBvcmRlcjogMztcXG59XFxuI25hdmlnYXRpb25fd3JhcHBlcntcXG4gICAgb3JkZXI6IDE7XFxufVxcbiNtYWluX3NlY3Rpb257XFxuICAgIG9yZGVyOiAyO1xcbn1cXG5cXG4qL1xcblxcbi5yaWdodF93cmFwcGVye1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiA5MC42OXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC8qKioqKioqKioqIEhvbWUgUGFnZSAgKioqKioqKioqKioqKioqKioqKiovXFxuICAgICNob21lX3dyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzdweDtcXG4gICAgfVxcblxcbiAgICAuc2xpZGVfYW5jaG9yX2J1dHRvbntcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuaG9tZV9zbGlkZV9jb250YWluZXIgcHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICB9XFxuXFxuICAgIC5wYW5lbF9maXZlLCAucGFuZWxfc2V2ZW4sIC5wYW5lbF9laWdodCwgLnBhbmVsX25pbmUsIFxcbiAgICAucGFuZWxfdGVuLCAucGFuZWxfZWxldmVuLCAucGFuZWxfdHdlbHZlLCAucGFuZWxfdGhpcnRlZW4sXFxuICAgIC5wYW5lbF9mb3VydGVlbiwgLnBhbmVsX2ZpdGh0ZWVuXFxuICAgIHtcXG4gICAgICAgIHRvcDogdW5zZXQ7XFxuICAgIH1cXG4gICAgLnBhbmVsX2ZpdGh0ZWVue1xcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xcbiAgICB9XFxuXFxuXFxuICAgIC8qKioqKioqKioqIFNsaWRlU2hvdyBQYWdlICAqKioqKioqKioqKioqKioqKioqKi9cXG4gICAgLnNsaWRlX2FuY2hvcl9ob21lIHB7XFxuICAgICAgICBmb250LXNpemU6IDlweDtcXG4gICAgfVxcbiAgICAucGFuZWxfaG9sZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLmxlZnRfcGFuZWxfd3JhcHBlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5pbWFnZV9jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMzI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogNzJweDtcXG4gICAgICAgIHdpZHRoOiAyMjhweDtcXG4gICAgICAgIGhlaWdodDogMTA0cHg7XFxuICAgICAgICB0b3A6IDIzNnB4O1xcbiAgICB9XFxuICAgIC5sZWZ0X3VwcGVyX3RleHR7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB3aWR0aDogMjMycHg7XFxuICAgICAgICBsZWZ0OiAyNXB4O1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICB9XFxuICAgIC5sZWZ0X2xvd2VyX3RleHR7XFxuICAgICAgICB0b3A6IDUxcHg7XFxuICAgICAgICBsZWZ0OiAyNXB4O1xcblxcbiAgICB9XFxuICAgIC5sZWZ0X3RodW1iX2NvbnRhaW5lcntcXG4gICAgICAgIHJpZ2h0OiB1bnNldDtcXG4gICAgICAgIHRvcDogMzQwcHg7XFxuICAgICAgICBsZWZ0OiA4NnB4O1xcbiAgICB9XFxuICAgIC5sZWZ0X3RodW1iX2NvbnRhaW5lciBpbWd7XFxuICAgICAgICB3aWR0aDogNjRweDtcXG4gICAgICAgIGhlaWdodDogNjRweDtcXG4gICAgfVxcblxcbiAgICAuZGF0ZV9jb250ZW50e1xcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgICAgIGxlZnQ6IDE5NnB4O1xcbiAgICAgICAgdG9wOiA3NHB4OyBcXG4gICAgICAgIGhlaWdodDogMTEwcHg7XFxuICAgIH1cXG4gICAgLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICAgICAgdG9wOiAxNDBweDtcXG4gICAgICAgIHdpZHRoOiA4NiU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgLnJpZ2h0X2NvbnRlbnRfZGVzY3JpcHRpb257XFxuICAgICAgICB3aWR0aDogMzI3cHg7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0X3BhbmVsX3dyYXBwZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG4gICAgICAgIG1hcmdpbjogNy41cmVtIDIuNXJlbSAwIDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAubGVmdF9jb250ZW50X2NvbnRhaW5lcl9naXJse1xcbiAgICAgICAgd2lkdGg6IDI1N3B4O1xcbiAgICB9XFxuICAgIC5naXJsX25ld19oZWlnaHR7XFxuICAgICAgICB3aWR0aDogMTcxcHg7XFxuICAgICAgICB0b3A6IDZweDtcXG4gICAgfVxcbiAgICAucGVhcmxfbG93ZXJfdGV4dHtcXG4gICAgICAgIHRvcDogNTdweDtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlX2d1ZXJuaWNhe1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zdG9ybV9tb2JpbGV7XFxuICAgICAgICB3aWR0aDogMjgxcHg7XFxuICAgIH1cXG4gICAgLnN0b3JtX3RleHRfbW9iaWxle1xcbiAgICAgICAgd2lkdGg6IDIyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGVfa2FuYWdhd2FfdGV4dHtcXG4gICAgICAgIHdpZHRoOiAyMzJweDtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAuZGF0ZV9jb250ZW50e1xcbiAgICAgICAgbGVmdDogODZweDtcXG4gICAgICAgIHRvcDogMTA2cHg7XFxuICAgIH1cXG4gICAgLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICAgICAgdG9wOiAxNzJweDtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5mb290ZXJfY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzAwcHg7XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxzQkFBc0I7O0lBRXRCLHdDQUF3Qzs7QUFFNUM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsc0VBQXNFO0FBQ3RFO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7OztBQUdBLG1FQUFtRTtBQUNuRTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFD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QUNULFVBQVU7O0lBRWQ7SUFDQTtRQUNJLFlBQVk7UUFDWixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsU0FBUztRQUNULGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixVQUFVO1FBQ1YsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7SUFDWjtJQUNBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6d2dodEA3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFxuICAgIC0tZm9udC1saWJyZTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XFxuXFxufVxcbmh0bWwgYm9keXtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKiogTmF2cGFnZSBQYWdlICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ubmF2aWdhdGlvbl93cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMi41cmVtIDIuNXJlbSAyLjVyZW0gMi41cmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5zbGlkZV9hbmNob3JfYnV0dG9uLCAuc2xpZGVfYW5jaG9yX2J1dHRvbl9zdG9wLCAuc2xpZGVfYW5jaG9yX2hvbWV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuXFxuLmRpc3BsYXlfaGlkZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRpc3BsYXlfc2hvd3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5ob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9we1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXIgcHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAyLjU3cHg7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbn1cXG5cXG4uaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcCBwe1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNTdweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqIEhvbWUgUGFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21haW5fc2VjdGlvbntcXG4gICAgbWFyZ2luOiAwIDIuNXJlbSAwIDIuNXJlbTtcXG4gICAgaGVpZ2h0OiA3MjRweDtcXG59XFxuXFxuXFxuI2hvbWVfd3JhcHBlcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgY29sdW1uLWdhcDogNDBweDtcXG4gICAgcm93LWdhcDogNDBweDtcXG4gICAgbWF4LWhlaWdodDogMTQwMHB4O1xcbiAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XFxufVxcblxcbiNob21lX3BhbmVsX3dyYXBwZXJ7XFxuICAgIHdpZHRoOiAzMTBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLnBhbmVsX29uZXtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyOXB4O1xcbiAgICB3aWR0aDogMjQ2cHg7XFxuICAgIGhlaWdodDogNTRweDtcXG4gICAgbGVmdDogMzZweDtcXG59XFxuI2hvbWVfdG9wX2NvbnRlbnR7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbiNob21lX2JvdHRvbV9jb250ZW50e1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpYnJlKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKiBQYW5lbHMgKioqKioqKiovXFxuLnBhbmVsX3R3b3tcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG59XFxuLnBhbmVsX3R3byAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG4ucGFuZWxfdGhyZWV7XFxuICAgIGhlaWdodDogMjg1cHg7XFxufVxcblxcblxcbi5wYW5lbF9mb3Vye1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG4ucGFuZWxfZm91ciAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG4ucGFuZWxfZml2ZXtcXG4gICAgaGVpZ2h0OiAzNDBweDtcXG4gICAgdG9wOiAtMTUwcHg7XFxufVxcbi5wYW5lbF9maXZlICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF9zaXh7XFxuICAgIGhlaWdodDogMjgwcHg7XFxufVxcbi5wYW5lbF9zaXggI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuLnBhbmVsX3NldmVue1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB0b3A6IC0xMTVweDtcXG59XFxuLnBhbmVsX3NldmVuICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9laWdodHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgdG9wOiAtMTUwcHg7XFxufVxcbi5wYW5lbF9laWdodCAjaG9tZV9wYW5lbF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiA4M3B4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfbmluZXtcXG4gICAgaGVpZ2h0OiA0MjBweDtcXG4gICAgdG9wOiAtMzEwcHg7XFxufVxcbi5wYW5lbF9uaW5lICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcbi5wYW5lbF90ZW57XFxuICAgIGhlaWdodDogMjYwcHg7XFxuICAgIHRvcDogLTIyMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGFuZWxfZWxldmVue1xcbiAgICBoZWlnaHQ6IDUyNXB4O1xcbiAgICB0b3A6IC0xMTVweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX3R3ZWx2ZXtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgdG9wOiAtNDAwcHg7XFxufVxcbi5wYW5lbF90d2VsdmUgI2hvbWVfcGFuZWxfY29udGVudF9jb250YWluZXJ7XFxuICAgIGhlaWdodDogODNweDtcXG59XFxuXFxuXFxuXFxuXFxuLnBhbmVsX3RoaXJ0ZWVue1xcbiAgICBoZWlnaHQ6IDI2MHB4O1xcbiAgICB0b3A6IC00MTVweDtcXG59XFxuLnBhbmVsX3RoaXJ0ZWVuICNob21lX3BhbmVsX2NvbnRlbnRfY29udGFpbmVye1xcbiAgICBoZWlnaHQ6IDgzcHg7XFxufVxcblxcblxcblxcblxcbi5wYW5lbF9mb3VydGVlbntcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgdG9wOiAtNDg1cHg7XFxufVxcblxcblxcblxcblxcblxcbi5wYW5lbF9maXRodGVlbntcXG4gICAgaGVpZ2h0OiAzNDBweDtcXG4gICAgdG9wOiAtNDk1cHg7XFxuICAgIHJpZ2h0OiAtMzY2cHg7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqIFBhbmVscyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmltYWdlX2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDQ3NXB4O1xcbiAgICBoZWlnaHQ6IDU2MHB4O1xcbn1cXG5cXG4uaW1hZ2VfY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ucGFuZWxfaG9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDYyNHB4O1xcbn1cXG5cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDQ0NXB4O1xcbiAgICBoZWlnaHQ6IDIzOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbn1cXG5cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9naXJse1xcbiAgICBoZWlnaHQ6IDMwMnB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9ndWVybmljYXtcXG4gICAgaGVpZ2h0OiAxNzRweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfc2Vhe1xcbiAgICBoZWlnaHQ6IDMwMnB4O1xcbn1cXG4ubGVmdF9jb250ZW50X2NvbnRhaW5lcl9sYWR5e1xcbiAgICBoZWlnaHQ6IDIzODtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfY2FmZXtcXG4gICAgaGVpZ2h0OiAyMzhweDtcXG59XFxuLmxlZnRfY29udGVudF9jb250YWluZXJfc3dpbmd7XFxuICAgIGhlaWdodDogMTc0cHg7XFxufVxcbi5sZWZ0X2NvbnRlbnRfY29udGFpbmVyX3NlbGZ7XFxuICAgIGhlaWdodDogMjM4cHg7XFxufVxcblxcblxcblxcbi5sZWZ0X3BhbmVsX3dyYXBwZXJ7XFxuICAgIHdpZHRoOiA4NTFweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ubGVmdF91cHBlcl90ZXh0e1xcbiAgICBmb250LXNpemU6IDU2cHg7XFxuICAgIHdpZHRoOiAyNTlweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2NXB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZ2lybF9uZXdfaGVpZ2h0e1xcbiAgICB3aWR0aDogMzgwcHg7XFxufVxcbi5tb25hX25ld19oZWlnaHR7XFxuICAgIHdpZHRoOiAyMTJweDtcXG59XFxuLnN3aW5nX25ld19oZWlnaHR7XFxuICAgIHdpZHRoOiAzMTZweDtcXG59XFxuXFxuXFxuXFxuLmxlZnRfbG93ZXJfdGV4dHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xcbiAgICB0b3A6IDE0NXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDY4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLnBlYXJsX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMjAzcHg7XFxufVxcbi5ndWVybmljYV9sb3dlcl90ZXh0e1xcbiAgICB0b3A6IDcwcHg7XFxufVxcbi5zZWFfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAyMDlweDtcXG59XFxuLmNhZmVfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAxNDZweFxcbn1cXG4uYXBwbGVfbG93ZXJfdGV4dHtcXG4gICAgdG9wOiAxNDRweDtcXG59XFxuLnN3aW5nX2xvd2VyX3RleHR7XFxuICAgIHRvcDogNzZweDtcXG59XFxuLmd5cHN5X2xvd2VyX3RleHR7XFxuICAgIHRvcDogMjIxcHg7XFxufVxcbi5zZWxmX2xvd2VyX3RleHR7XFxuICAgIHRvcDogMTU4cHg7XFxufVxcblxcblxcblxcblxcbi5sZWZ0X3RodW1iX2NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTkwcHg7XFxuICAgIHRvcDogNDk2cHg7XFxufVxcbi5yaWdodF9wYW5lbF93cmFwcGVye1xcbiAgICB3aWR0aDogNTM5cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRhdGVfY29udGFpbmVye1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG59XFxuXFxuLmRhdGVfY29udGVudHtcXG4gICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgaGVpZ2h0OiAxODFweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBjb2xvcjogI2YzZjNmMztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzY0cHg7IFxcbiAgICBsZWZ0OiA0NXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTE2cHg7XFxufVxcblxcbi5yaWdodF9jb250ZW50X2NvbnRhaW5lciBwe1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM3ZDdkN2Q7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG4uZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDAgMi41cmVtIDAgMi41cmVtO1xcbn1cXG5cXG5cXG4udG9wX3RpdGxle1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWJyZSk7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcbi5ib3R0b21fbmFtZXtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbGlicmUpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKiAgICAgICBTbGlkZSBQYWdlICAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNzbGlkZV9wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4vKlxcblxcbiNmb290ZXJfY29udGFpbmVye1xcbiAgICBvcmRlcjogMztcXG59XFxuI25hdmlnYXRpb25fd3JhcHBlcntcXG4gICAgb3JkZXI6IDE7XFxufVxcbiNtYWluX3NlY3Rpb257XFxuICAgIG9yZGVyOiAyO1xcbn1cXG5cXG4qL1xcblxcbi5yaWdodF93cmFwcGVye1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiA5MC42OXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAgIC8qKioqKioqKioqIEhvbWUgUGFnZSAgKioqKioqKioqKioqKioqKioqKiovXFxuICAgICNob21lX3dyYXBwZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzdweDtcXG4gICAgfVxcblxcbiAgICAuc2xpZGVfYW5jaG9yX2J1dHRvbntcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuaG9tZV9zbGlkZV9jb250YWluZXIgcHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xcbiAgICB9XFxuXFxuICAgIC5wYW5lbF9maXZlLCAucGFuZWxfc2V2ZW4sIC5wYW5lbF9laWdodCwgLnBhbmVsX25pbmUsIFxcbiAgICAucGFuZWxfdGVuLCAucGFuZWxfZWxldmVuLCAucGFuZWxfdHdlbHZlLCAucGFuZWxfdGhpcnRlZW4sXFxuICAgIC5wYW5lbF9mb3VydGVlbiwgLnBhbmVsX2ZpdGh0ZWVuXFxuICAgIHtcXG4gICAgICAgIHRvcDogdW5zZXQ7XFxuICAgIH1cXG4gICAgLnBhbmVsX2ZpdGh0ZWVue1xcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xcbiAgICB9XFxuXFxuXFxuICAgIC8qKioqKioqKioqIFNsaWRlU2hvdyBQYWdlICAqKioqKioqKioqKioqKioqKioqKi9cXG4gICAgLnNsaWRlX2FuY2hvcl9ob21lIHB7XFxuICAgICAgICBmb250LXNpemU6IDlweDtcXG4gICAgfVxcbiAgICAucGFuZWxfaG9sZGVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLmxlZnRfcGFuZWxfd3JhcHBlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC5pbWFnZV9jb250YWluZXJ7XFxuICAgICAgICB3aWR0aDogMzI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZWZ0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogNzJweDtcXG4gICAgICAgIHdpZHRoOiAyMjhweDtcXG4gICAgICAgIGhlaWdodDogMTA0cHg7XFxuICAgICAgICB0b3A6IDIzNnB4O1xcbiAgICB9XFxuICAgIC5sZWZ0X3VwcGVyX3RleHR7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICB3aWR0aDogMjMycHg7XFxuICAgICAgICBsZWZ0OiAyNXB4O1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICB9XFxuICAgIC5sZWZ0X2xvd2VyX3RleHR7XFxuICAgICAgICB0b3A6IDUxcHg7XFxuICAgICAgICBsZWZ0OiAyNXB4O1xcblxcbiAgICB9XFxuICAgIC5sZWZ0X3RodW1iX2NvbnRhaW5lcntcXG4gICAgICAgIHJpZ2h0OiB1bnNldDtcXG4gICAgICAgIHRvcDogMzQwcHg7XFxuICAgICAgICBsZWZ0OiA4NnB4O1xcbiAgICB9XFxuICAgIC5sZWZ0X3RodW1iX2NvbnRhaW5lciBpbWd7XFxuICAgICAgICB3aWR0aDogNjRweDtcXG4gICAgICAgIGhlaWdodDogNjRweDtcXG4gICAgfVxcblxcbiAgICAuZGF0ZV9jb250ZW50e1xcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcXG4gICAgICAgIGxlZnQ6IDE5NnB4O1xcbiAgICAgICAgdG9wOiA3NHB4OyBcXG4gICAgICAgIGhlaWdodDogMTEwcHg7XFxuICAgIH1cXG4gICAgLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICAgICAgdG9wOiAxNDBweDtcXG4gICAgICAgIHdpZHRoOiA4NiU7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgLnJpZ2h0X2NvbnRlbnRfZGVzY3JpcHRpb257XFxuICAgICAgICB3aWR0aDogMzI3cHg7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0X3BhbmVsX3dyYXBwZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG4gICAgICAgIG1hcmdpbjogNy41cmVtIDIuNXJlbSAwIDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAubGVmdF9jb250ZW50X2NvbnRhaW5lcl9naXJse1xcbiAgICAgICAgd2lkdGg6IDI1N3B4O1xcbiAgICB9XFxuICAgIC5naXJsX25ld19oZWlnaHR7XFxuICAgICAgICB3aWR0aDogMTcxcHg7XFxuICAgICAgICB0b3A6IDZweDtcXG4gICAgfVxcbiAgICAucGVhcmxfbG93ZXJfdGV4dHtcXG4gICAgICAgIHRvcDogNTdweDtcXG4gICAgfVxcblxcbiAgICAubW9iaWxlX2d1ZXJuaWNhe1xcbiAgICAgICAgdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5zdG9ybV9tb2JpbGV7XFxuICAgICAgICB3aWR0aDogMjgxcHg7XFxuICAgIH1cXG4gICAgLnN0b3JtX3RleHRfbW9iaWxle1xcbiAgICAgICAgd2lkdGg6IDIyNHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb2JpbGVfa2FuYWdhd2FfdGV4dHtcXG4gICAgICAgIHdpZHRoOiAyMzJweDtcXG4gICAgfVxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAuZGF0ZV9jb250ZW50e1xcbiAgICAgICAgbGVmdDogODZweDtcXG4gICAgICAgIHRvcDogMTA2cHg7XFxuICAgIH1cXG4gICAgLnJpZ2h0X2NvbnRlbnRfY29udGFpbmVye1xcbiAgICAgICAgdG9wOiAxNzJweDtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyX2NvbnRhaW5lcntcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgICB9XFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5mb290ZXJfY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLXRvcDogMzAwcHg7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwtc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwtc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGdhbGxlcmlhTG9nbyBmcm9tICcuLi9hc3NldHMvc2hhcmVkL2xvZ28uc3ZnJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9nbG9iYWwtc3R5bGUuY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpb25CYXIoKXtcbiAgICBjb25zdCBuYXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uX3dyYXBwZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVfdGl0bGVfY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0aXRsZS5zcmMgPSBnYWxsZXJpYUxvZ287XG5cbiAgICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVfc2xpZGVfY29udGFpbmVyXCIpO1xuICAgIHNsaWRlQ29udGFpbmVyLmlkID0gXCJob21lX3NsaWRlX2NvbnRhaW5lclwiO1xuXG4gICAgY29uc3Qgc2xpZGVBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbGlkZUFuY2hvci5jbGFzc0xpc3QuYWRkKFwic2xpZGVfYW5jaG9yX2J1dHRvblwiKTtcbiAgICBzbGlkZUFuY2hvci5pZCA9IFwic2xpZGVfYW5jaG9yX2J1dHRvblwiO1xuICAgIHNsaWRlQW5jaG9yLmhyZWYgPSBcIi9nYWxsZXJpYS1iZXRhL3NsaWRlc2hvdy5odG1sXCI7XG4gICAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzbGlkZS5pbm5lclRleHQgPSBcIlZJRVcgSU5GT1JNQVRJT05cIjtcbiAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfYnV0dG9uXCIpO1xuICAgIHNsaWRlLmlkID0gXCJzbGlkZV9idXR0b25cIjtcbiAgICBzbGlkZUFuY2hvci5hcHBlbmQoc2xpZGUpO1xuXG5cbiAgICBjb25zdCBzbGlkZUFuY2hvclN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzbGlkZUFuY2hvclN0b3AuY2xhc3NMaXN0LmFkZChcInNsaWRlX2FuY2hvcl9idXR0b25fc3RvcFwiKTtcbiAgICBzbGlkZUFuY2hvclN0b3AuaHJlZiA9IFwic2xpZGVzaG93Lmh0bWxcIjtcblxuICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyU3RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2xpZGVDb250YWluZXJTdG9wLmNsYXNzTGlzdC5hZGQoXCJob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9wXCIpO1xuICAgIHNsaWRlQ29udGFpbmVyU3RvcC5pZCA9IFwiaG9tZV9zbGlkZV9jb250YWluZXJfc3RvcFwiO1xuXG5cblxuICAgIGNvbnN0IHNsaWRlQW5jaG9ySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNsaWRlQW5jaG9ySG9tZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVfYW5jaG9yX2hvbWVcIik7XG4gICAgc2xpZGVBbmNob3JIb21lLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcbiAgICBjb25zdCBzbGlkZVN0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzbGlkZVN0b3AuaW5uZXJUZXh0ID0gXCJIT01FXCI7IFxuICAgIHNsaWRlQW5jaG9ySG9tZS5hcHBlbmQoc2xpZGVTdG9wKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZCh0aXRsZSk7XG4gICAgc2xpZGVDb250YWluZXIuYXBwZW5kKHNsaWRlQW5jaG9yKTtcbiAgICBzbGlkZUNvbnRhaW5lclN0b3AuYXBwZW5kKHNsaWRlQW5jaG9ySG9tZSk7XG5cbiAgICBuYXZXcmFwcGVyLmFwcGVuZCh0aXRsZUNvbnRhaW5lciwgc2xpZGVDb250YWluZXIsIHNsaWRlQ29udGFpbmVyU3RvcCk7XG5cbiAgICByZXR1cm4gbmF2V3JhcHBlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BTbGlkZSgpe1xuICAgIGNvbnN0IGdldFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lX3NsaWRlX2NvbnRhaW5lclwiKTtcbiAgICBnZXRTbGlkZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgZ2V0U2xpZGVTdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lX3NsaWRlX2NvbnRhaW5lcl9zdG9wXCIpO1xuICAgIGdldFNsaWRlU3RvcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuIl0sIm5hbWVzIjpbImdhbGxlcmlhTG9nbyIsInN0eWxlIiwibmF2aWdhdGlvbkJhciIsIm5hdldyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwic3JjIiwic2xpZGVDb250YWluZXIiLCJpZCIsInNsaWRlQW5jaG9yIiwiaHJlZiIsInNsaWRlIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwic2xpZGVBbmNob3JTdG9wIiwic2xpZGVDb250YWluZXJTdG9wIiwic2xpZGVBbmNob3JIb21lIiwic2xpZGVTdG9wIiwic3RvcFNsaWRlIiwiZ2V0U2xpZGUiLCJnZXRFbGVtZW50QnlJZCIsImRpc3BsYXkiLCJnZXRTbGlkZVN0b3AiXSwic291cmNlUm9vdCI6IiJ9