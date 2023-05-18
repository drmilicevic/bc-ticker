(window["webpackJsonp_bc_author_cards"] = window["webpackJsonp_bc_author_cards"] || []).push([["style-index"],{

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
/******/ 	var jsonpArray = window["webpackJsonp_bc_author_cards"] = window["webpackJsonp_bc_author_cards"] || [];
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

/***/ "./src/blocks/bc-author-card/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/bc-author-card/edit.js ***!
  \*******************************************/
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
  const {
    finalOutput,
    authorData,
    author,
    avatar,
    authorName,
    totalNumberOfPosts,
    authorDesc,
    showPosts,
    numberOfPosts,
    loadMore,
    linkToAuthor
  } = attributes;
  const [users, setUsers] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [output, setOutput] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('Select Author');
  const [output2, setOutput2] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [count, setCount] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const combinedOutput = output + output2;
    setAttributes({
      finalOutput: combinedOutput
    });
  }, [output, output2]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (author != 0 && authorData) {
      fetch(ajaxurl, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: `action=bc_get_author_data&linkToAuthor=${linkToAuthor}&authorName=${authorName}&authorDesc=${authorDesc}&avatar=${avatar}&author=${author}&totalNumberOfPosts=${totalNumberOfPosts}`
      }).then(response => response.json()).then(result => {
        setOutput(result.output);
      });
    }
    if (authorData === false) {
      setAttributes({
        avatar: false
      });
      setAttributes({
        authorDesc: false
      });
      setAttributes({
        authorName: false
      });
      setAttributes({
        totalNumberOfPosts: false
      });
      setAttributes({
        linkToAuthor: false
      });
      setOutput('Select Option');
    }
  }, [author, linkToAuthor, authorData, avatar, authorDesc, authorName, authorDesc, totalNumberOfPosts]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(ajaxurl, {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: `action=bc_get_authors`
    }).then(response => response.json()).then(result => {
      let authors = result.data;
      authors.unshift({
        value: 0,
        label: "Select Author"
      });
      setUsers(result.data);
    });
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (showPosts == true) {
      fetch(ajaxurl, {
        method: "POST",
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: `action=bc_get_authors_posts&loadPerClick=${loadMore}&authorId=${author}&initiallyShow=${numberOfPosts}`
      }).then(response => response.json()).then(result => {
        setOutput2(result.output);
      });
    } else {
      setOutput2("");
    }
  }, [count, showPosts]);
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
  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: output
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Author Settings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Author",
    value: author,
    options: users,
    onChange: author => {
      setAttributes({
        author
      });
      setOutput2("");
    }
  }), author != 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Show author data?",
    help: authorData ? "Yes" : "No",
    checked: authorData,
    onChange: () => setAttributes({
      authorData: !authorData
    })
  }), author != 0 && authorData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Show author avatar?",
    help: avatar ? "Yes" : "No",
    checked: avatar,
    onChange: () => setAttributes({
      avatar: !avatar
    })
  }), author != 0 && authorData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Show author name?",
    help: authorName ? "Yes" : "No",
    checked: authorName,
    onChange: () => setAttributes({
      authorName: !authorName
    })
  }), author != 0 && authorData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Show total number of posts for this user?",
    help: totalNumberOfPosts ? "Yes" : "No",
    checked: totalNumberOfPosts,
    onChange: () => setAttributes({
      totalNumberOfPosts: !totalNumberOfPosts
    })
  }), author != 0 && authorData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Show author description?",
    help: authorDesc ? "Yes" : "No",
    checked: authorDesc,
    onChange: () => setAttributes({
      authorDesc: !authorDesc
    })
  }), author != 0 && authorData && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Link to author page?",
    help: linkToAuthor ? "Yes" : "No",
    checked: linkToAuthor,
    onChange: () => setAttributes({
      linkToAuthor: !linkToAuthor
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Posts Settings",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: "Show authors posts?",
    help: showPosts ? "Yes" : "No",
    checked: showPosts,
    onChange: () => setAttributes({
      showPosts: !showPosts
    })
  }), showPosts == true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Initially show:",
    value: numberOfPosts,
    onChange: numberOfPosts => debounce('numberOfPosts', numberOfPosts)
  }), showPosts == true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "On click load more:",
    value: loadMore,
    onChange: loadMore => debounce('loadMore', loadMore)
  }), showPosts == true && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => setCount(count + 1),
    variant: "secondary"
  }, "Get Posts"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: output2
    }
  })];
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/bc-author-card/index.js":
/*!********************************************!*\
  !*** ./src/blocks/bc-author-card/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/bc-author-card/edit.js");

const BcAuthorCard = {
  title: 'BC Author Card',
  icon: 'admin-page',
  category: 'bc-theme',
  attributes: {
    finalOutput: {
      type: "string",
      default: ""
    },
    author: {
      type: "string",
      default: "0"
    },
    avatar: {
      type: "boolean",
      default: true
    },
    authorData: {
      type: "boolean",
      default: false
    },
    authorName: {
      type: "boolean",
      default: true
    },
    totalNumberOfPosts: {
      type: "boolean",
      default: true
    },
    authorDesc: {
      type: "boolean",
      default: true
    },
    showPosts: {
      type: "boolean",
      default: false
    },
    numberOfPosts: {
      type: "string",
      default: 1
    },
    loadMore: {
      type: "string",
      default: 1
    },
    linkToAuthor: {
      type: "boolean",
      default: false
    }
  },
  edit: props => Object(_edit__WEBPACK_IMPORTED_MODULE_0__["default"])(props)
};
/* harmony default export */ __webpack_exports__["default"] = (BcAuthorCard);

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
/* harmony import */ var _blocks_bc_author_card_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/bc-author-card/index */ "./src/blocks/bc-author-card/index.js");



const DOMAIN = 'bc-theme';

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(DOMAIN + '/bc-author-card', _blocks_bc_author_card_index__WEBPACK_IMPORTED_MODULE_3__["default"]);

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