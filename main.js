/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/bg.jpg */ "./src/imgs/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: center;
  background-color: #1B191A;
  position: relative;
  display: flex;
  justify-content: center;
}

body::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center/cover;
  z-index: -1;
  opacity: 0.4;
}

nav {
  margin: 1.5rem;
}

nav button {
  margin: 0 1rem;
  background: none;
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  letter-spacing: 0.15em;
  cursor: pointer;
}

nav button:hover {
  color: #CCAB5B;
}

header {
  position: relative;
  animation: fadeIn 0.5s;
}

/*header size: large */
header.large {
  font-size: 5rem;
  top: 15%;
}

@media (max-width: 56.25em) {
  header.large {
    font-size: 3rem;
  }
}
@media (max-width: 34.375em) {
  header.large {
    font-size: 2rem;
  }
}
/*header size: medium */
header.medium {
  font-size: 3rem;
  top: 0;
  margin-top: 3rem;
}

@media (max-width: 56.25em) {
  header.medium {
    font-size: 2rem;
  }
}
@media (max-width: 34.375em) {
  header.medium {
    font-size: 1.5rem;
  }
}
/*jeader size: small */
header.small {
  font-size: 2rem;
  margin-top: 2rem;
}

@media (max-width: 56.25em) {
  header.small {
    font-size: 1.5rem;
    margin-top: 0;
  }
}
@media (max-width: 34.375em) {
  header.small {
    font-size: 1rem;
  }
}
header.small .restaurant {
  line-height: 3rem;
}

/*restaurant sub-heading (logo style)*/
header .restaurant {
  font-family: "Sacramento", cursive;
  font-weight: 400;
  color: #CCAB5B;
  line-height: 5rem;
}

@media (max-width: 56.25em) {
  header .restaurant {
    line-height: 4rem;
  }
}
@media (max-width: 34.375em) {
  header .restaurant {
    line-height: 3rem;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.contact-main {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s;
}

@media (max-width: 69.375em) {
  .contact-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}
.contact-section {
  text-align-last: left;
  margin: 3rem;
  font-weight: 500;
  font-size: 1.3rem;
  grid-row: 1/2;
}

@media (max-width: 69.375em) {
  .contact-section {
    margin: 1rem;
    margin-top: 2rem;
  }
}
@media (max-width: 34.375em) {
  .contact-section {
    font-size: 0.9rem;
  }
}
@media (max-width: 21.875em) {
  .contact-section {
    font-size: 0.6rem;
    margin: 0.4rem;
  }
}
.contact-section h2 {
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
}

@media (max-width: 34.375em) {
  .contact-section h2 {
    font-size: 1.2rem;
  }
}
.contact-section button {
  font-family: inherit;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  letter-spacing: 0.15em;
  color: #CCAB5B;
  background: none;
  border: 2px solid #CCAB5B;
  font-size: 1rem;
  cursor: pointer;
}

.contact-section button:hover {
  background-color: #CCAB5B;
  color: #000;
}

@media (max-width: 34.375em) {
  .contact-section button {
    font-size: 0.7rem;
  }
}
@media (max-width: 21.875em) {
  .contact-section button {
    font-size: 0.5rem;
    padding: 0.3rem 0.8rem;
  }
}
.map {
  border-radius: 50%;
  margin-top: 3rem;
  margin-bottom: 1rem;
  border: 3px solid #CCAB5B;
  width: 30rem;
}

@media (max-width: 69.375em) {
  .map {
    width: 20rem;
    grid-column: span 2;
  }
}
@media (max-width: 34.375em) {
  .map {
    width: 12rem;
  }
}
.menu-main {
  animation: fadeIn 0.5s;
}

.menu-main .item-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}

@media (max-width: 34.375em) {
  .menu-main .item-container {
    flex-direction: column;
    margin: 1rem;
  }
}
.menu-main .item-text {
  text-align: left;
  margin: 2rem;
  font-weight: 500;
  letter-spacing: 0.15em;
}

@media (max-width: 56.25em) {
  .menu-main .item-text {
    font-size: 0.9rem;
  }
}
@media (max-width: 34.375em) {
  .menu-main .item-text {
    margin: 0;
  }
}
@media (max-width: 21.875em) {
  .menu-main .item-text {
    font-size: 0.7rem;
  }
}
.menu-main .item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

@media (max-width: 56.25em) {
  .menu-main .item-header {
    margin-bottom: 0.7rem;
  }
}
.menu-main h4 {
  font-size: 1.5rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 56.25em) {
  .menu-main h4 {
    font-size: 1.2rem;
  }
}
@media (max-width: 21.875em) {
  .menu-main h4 {
    font-size: 0.9rem;
  }
}
.menu-main .item-price {
  color: #CCAB5B;
}

.menu-main .item-description {
  max-width: 40rem;
}

.menu-main img {
  box-shadow: 0px 4px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

@media (max-width: 56.25em) {
  .menu-main img {
    width: 100px;
  }
}
@media (max-width: 34.375em) {
  .menu-main img {
    margin: 1rem;
  }
}
.menu-main .item-deco {
  width: 30vw;
  height: 2px;
  background-color: #CCAB5B;
  margin: 0 2rem;
  position: relative;
}

@media (max-width: 56.25em) {
  .menu-main .item-deco {
    width: 100%;
  }
}
@media (max-width: 21.875em) {
  .menu-main .item-deco {
    margin: 0 1.5rem;
  }
}
.menu-main .item-deco::before {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #CCAB5B;
  position: absolute;
  left: 0;
  transform: translate(-100%, -50%);
  border-radius: 50%;
}

.menu-main .item-deco::after {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #CCAB5B;
  position: absolute;
  right: 0;
  transform: translate(100%, -50%);
  border-radius: 50%;
}

@media (max-width: 56.25em) {
  .menu-main .item-deco::before,
  .menu-main .item-deco::after {
    width: 1rem;
    height: 1rem;
  }
}`, ""]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/imgs/bg.jpg":
/*!*************************!*\
  !*** ./src/imgs/bg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c013804ce71be27ae340.jpg";

/***/ }),

/***/ "./src/imgs/map.jpg":
/*!**************************!*\
  !*** ./src/imgs/map.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04e49a74e2f7ad6b31a6.jpg";

/***/ }),

/***/ "./src/imgs/menu-1.png":
/*!*****************************!*\
  !*** ./src/imgs/menu-1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0c25a97f6045c9c4d8e.png";

/***/ }),

/***/ "./src/imgs/menu-2.png":
/*!*****************************!*\
  !*** ./src/imgs/menu-2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aec72491ad7932903a95.png";

/***/ }),

/***/ "./src/imgs/menu-3.png":
/*!*****************************!*\
  !*** ./src/imgs/menu-3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b4476ba8959cc6d6d3d.png";

/***/ }),

/***/ "./src/modules/logo.js":
/*!*****************************!*\
  !*** ./src/modules/logo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLogo)
/* harmony export */ });
function createLogo(size) {
  const content = document.getElementById('content');

  const logoContainer = document.createElement('header');
  const logoRestaurant = document.createElement('h1');
  logoRestaurant.textContent = 'Restaurant';
  logoRestaurant.classList.add('restaurant');
  logoContainer.classList.add(size);

  const logoName = document.createElement('h1');
  logoName.textContent = 'My Restaurant';

  logoContainer.appendChild(logoRestaurant);
  logoContainer.appendChild(logoName);
  content.appendChild(logoContainer);
}

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNav)
/* harmony export */ });
function createNav() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');

  const home = document.createElement('button');
  home.textContent = 'HOME';
  home.classList.add('home');
  home.id = 'home';

  const menu = document.createElement('button');
  menu.textContent = 'MENU';
  menu.classList.add('menu');
  menu.id = 'menu';

  const contact = document.createElement('button');
  contact.textContent = 'CONTACT';
  contact.classList.add('contact');
  contact.id = 'contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  content.appendChild(nav);
}


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _modules_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logo */ "./src/modules/logo.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/nav */ "./src/modules/nav.js");
/* harmony import */ var _imgs_map_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/map.jpg */ "./src/imgs/map.jpg");




function createContact() {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_logo__WEBPACK_IMPORTED_MODULE_0__["default"])('medium');

  const content = document.getElementById('content');

  const main = document.createElement('main');
  main.classList.add('contact-main');
  content.appendChild(main);

  /* contact section */
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact-section');
  main.appendChild(contactSection);
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'CONTACT US';
  const contactNumber = document.createElement('p');
  contactNumber.textContent = '+1 111-111-1111';
  const contactEmail = document.createElement('p');
  contactEmail.textContent = 'imed@restaurant.com';
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'CONTACT FORM';

  contactSection.appendChild(contactHeader);
  contactSection.appendChild(contactNumber);
  contactSection.appendChild(contactEmail);
  contactSection.appendChild(contactBtn);

  /* map section */
  const map = document.createElement('img');
  map.src = _imgs_map_jpg__WEBPACK_IMPORTED_MODULE_2__;
  map.alt = 'location of the restaurant';
  map.classList.add('map');
  main.appendChild(map);

  /* address section */
  const addressSection = document.createElement('section');
  addressSection.classList.add('contact-section');
  main.appendChild(addressSection);
  const addressHeader = document.createElement('h2');
  addressHeader.textContent = 'ADDRESS';
  const address1 = document.createElement('p');
  address1.textContent = '11 Restaurant St.';
  const address2 = document.createElement('p');
  address2.textContent = 'Toronto, ON';
  const addressBtn = document.createElement('button');
  addressBtn.textContent = 'BOOK A TABLE';

  addressSection.appendChild(addressHeader);
  addressSection.appendChild(address1);
  addressSection.appendChild(address2);
  addressSection.appendChild(addressBtn);
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _modules_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logo */ "./src/modules/logo.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/nav */ "./src/modules/nav.js");



function createHome() {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_logo__WEBPACK_IMPORTED_MODULE_0__["default"])('large');
}


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _modules_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logo */ "./src/modules/logo.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/nav */ "./src/modules/nav.js");
/* harmony import */ var _imgs_menu_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/menu-1.png */ "./src/imgs/menu-1.png");
/* harmony import */ var _imgs_menu_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/menu-2.png */ "./src/imgs/menu-2.png");
/* harmony import */ var _imgs_menu_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/menu-3.png */ "./src/imgs/menu-3.png");






function createContact() {
  (0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_logo__WEBPACK_IMPORTED_MODULE_0__["default"])('small');
  const content = document.getElementById('content');
  const main = document.createElement('main');
  main.classList.add('menu-main');
  content.appendChild(main);

  //create a new menu item
  class Item {
    constructor(title, price, description, image) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }

  const item1 = new Item(
    'LOREM IPSUM',
    '$10.99',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    _imgs_menu_1_png__WEBPACK_IMPORTED_MODULE_2__
  );

  const item2 = new Item(
    'LOREM IPSUM',
    '$7.99',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    _imgs_menu_2_png__WEBPACK_IMPORTED_MODULE_3__
  );

  const item3 = new Item(
    'LOREM IPSUM',
    '$60.99',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
    _imgs_menu_3_png__WEBPACK_IMPORTED_MODULE_4__
  );

  const menuItems = [item1, item2, item3];

  function displayItems() {
    menuItems.forEach(item => {
      const itemContainer = document.createElement('section');
      itemContainer.classList.add('item-container');
      main.appendChild(itemContainer);

      const itemText = document.createElement('div');
      itemText.classList.add('item-text');
      itemContainer.appendChild(itemText);

      const itemHeader = document.createElement('div');
      itemHeader.classList.add('item-header');
      itemText.appendChild(itemHeader);

      const itemTitle = document.createElement('h4');
      itemTitle.textContent = item.title;
      itemHeader.appendChild(itemTitle);

      const itemDeco = document.createElement('div');
      itemDeco.classList.add('item-deco');
      itemHeader.appendChild(itemDeco);

      const itemPrice = document.createElement('h4');
      itemPrice.classList.add('item-price');
      itemPrice.textContent = item.price;
      itemHeader.appendChild(itemPrice);

      const itemDescription = document.createElement('p');
      itemDescription.classList.add('item-description');
      itemDescription.textContent = item.description;
      itemText.appendChild(itemDescription);

      const itemImg = document.createElement('img');
      itemImg.src = item.image;
      itemContainer.appendChild(itemImg);
    });
  }
  displayItems();
}


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




const content = document.getElementById('content');

(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

document.body.addEventListener('click', e => {
  if (
    e.target.id === 'home' &&
    !e.target.parentNode.nextSibling.classList.contains('large')
  ) {
    content.innerHTML = '';
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  } else if (
    e.target.id === 'menu' &&
    !e.target.parentNode.nextSibling.classList.contains('small')
  ) {
    content.innerHTML = '';
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (
    e.target.id === 'contact' &&
    !e.target.parentNode.nextSibling.classList.contains('medium')
  ) {
    content.innerHTML = '';
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  } else return;
});
})();

/******/ })()
;