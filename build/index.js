(window["webpackJsonp_bc_ticker"] = window["webpackJsonp_bc_ticker"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_bc_ticker"] = window["webpackJsonp_bc_ticker"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/bc-ticker/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/bc-ticker/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




let debounceTimeout = null;
const Edit = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const [countries, setCountries] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [leagues, setLeagues] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [output, setOutput] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const debounce = (attributeName, attributeValue) => {
    clearTimeout(debounceTimeout);
    setAttributes({
      [attributeName]: attributeValue
    });
    debounceTimeout = setTimeout(() => {
      setAttributes({
        'debounce': [].concat(attributeName)
      });
    }, 700);
  };
  const preSetFontSizes = [{
    name: 'Small',
    slug: 'small',
    size: 12
  }, {
    name: 'Big',
    slug: 'big',
    size: 26
  }];
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (attributes.sport) {
      fetch(ajaxurl, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: `action=bc_get_countries&sport=${attributes.sport}`
      }).then(response => response.json()).then(result => {
        let wholeResult = JSON.parse(result.data);
        wholeResult = wholeResult.result.map(country => {
          return {
            value: country.country_key,
            label: country.country_name
          };
        });
        wholeResult.unshift({
          value: 0,
          label: "Select Country"
        });
        setCountries(wholeResult);
      });
    }
  }, [attributes.sport]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (attributes.sport && attributes.country != 0) {
      fetch(ajaxurl, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: `action=bc_get_leagues&sport=${attributes.sport}&country=${attributes.country}`
      }).then(response => response.json()).then(result => {
        let wholeResult = JSON.parse(result.data);
        wholeResult = wholeResult.result.map(league => {
          return {
            value: league.league_key,
            label: league.league_name
          };
        });
        wholeResult.unshift({
          value: 0,
          label: "Select League"
        });
        setLeagues(wholeResult);
      });
    }
  }, [attributes.country]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(ajaxurl, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: `action=bc_get_matches&sport=${attributes.sport}&country=${attributes.country}&league=${attributes.league}&scrollamount=${attributes.scrollamount}&bgColor=${attributes.bgColor}&fontSize=${attributes.fontSize}&textColor=${attributes.textColor}&nextNumberOfDays=${attributes.nextNumberOfDays}`
    }).then(response => response.json()).then(result => {
      setOutput(result);
    });
  }, [attributes.sport, attributes.country, attributes.league, attributes.debounce]);
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: output
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Date Settings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Sport",
    value: attributes.sport,
    options: [{
      label: 'Football',
      value: 'football'
    }, {
      label: 'Basketball',
      value: 'basketball'
    }],
    onChange: sport => setAttributes({
      sport
    }),
    __nextHasNoMarginBottom: true
  }), attributes.sport && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Countries",
    value: attributes.country,
    options: countries,
    onChange: country => setAttributes({
      country
    })
  }), attributes.country != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Leagues",
    value: attributes.league,
    options: leagues,
    onChange: league => setAttributes({
      league
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: "Show for next number of days:",
    value: attributes.nextNumberOfDays,
    min: 1,
    max: 14,
    onChange: nextNumberOfDays => debounce('nextNumberOfDays', nextNumberOfDays)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Slider Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: "Slider Speed",
    value: attributes.scrollamount,
    onChange: scrollamount => debounce('scrollamount', scrollamount),
    min: 20,
    max: 200
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Font Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["FontSizePicker"], {
    value: attributes.fontSize,
    fontSizes: preSetFontSizes,
    __nextHasNoMarginBottom: true,
    fallbackFontSize: 12,
    onChange: fontSize => debounce('fontSize', fontSize)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Color Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Background Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
    color: attributes.bgColor,
    onChange: bgColor => debounce('bgColor', bgColor),
    enableAlpha: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Text Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
    color: attributes.textColor,
    onChange: textColor => debounce('textColor', textColor),
    enableAlpha: true
  })))];
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/bc-ticker/index.js":
/*!***************************************!*\
  !*** ./src/blocks/bc-ticker/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/bc-ticker/edit.js");

const BcTicker = {
  title: 'BC Ticker',
  icon: 'admin-page',
  category: 'bc-theme',
  attributes: {
    sport: {
      type: "string",
      default: "football"
    },
    country: {
      type: "string",
      default: "44"
    },
    league: {
      type: "string",
      default: "152"
    },
    scrollamount: {
      type: "number",
      default: 80
    },
    bgColor: {
      type: "string",
      default: "#000"
    },
    textColor: {
      type: "string",
      default: "#FFF"
    },
    fontSize: {
      type: "string",
      default: "12"
    },
    nextNumberOfDays: {
      type: 'number',
      default: 5
    }
  },
  edit: props => Object(_edit__WEBPACK_IMPORTED_MODULE_0__["default"])(props)
};
/* harmony default export */ __webpack_exports__["default"] = (BcTicker);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _blocks_bc_ticker_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/bc-ticker/index */ "./src/blocks/bc-ticker/index.js");



const DOMAIN = 'bc-theme';

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(DOMAIN + '/bc-ticker', _blocks_bc_ticker_index__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map