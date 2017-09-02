/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MazeGame__ = __webpack_require__(6);



window.mg = new __WEBPACK_IMPORTED_MODULE_1__components_MazeGame__["a" /* MazeGame */]();
mg.start();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto';\n  margin: 0;\n  padding: 0; }\n\n.main {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch; }\n\n.header {\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.footer {\n  height: 240px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.green-fence {\n  background-image: repeating-linear-gradient(135deg, #fff, #fff 60px, #70C8A0 60px, #70C8A0 120px);\n  border: solid #D8D8D8;\n  border-width: 11px 0;\n  flex: 1; }\n\n.content {\n  flex: 1; }\n\n.title {\n  font-size: 48px;\n  color: #3A7395; }\n\n.btn-start-game {\n  height: 100px;\n  width: 280px;\n  background-color: #84CDF9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  cursor: pointer;\n  margin: 30px auto; }\n\n.btn-text {\n  color: #fff;\n  font-size: 36px; }\n\n.screen {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.hidden {\n  display: none; }\n\n.story-desk {\n  background-color: #C86571;\n  color: #fff;\n  padding: 30px 60px 100px;\n  max-width: 800px;\n  margin: 75px auto; }\n\n.text-title {\n  font-size: 36px;\n  padding-bottom: 20px; }\n\n.text {\n  font-size: 24px; }\n\n.maze-cell {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #70C8A0;\n  box-sizing: border-box; }\n\n.maze-row {\n  display: flex;\n  flex-direction: row; }\n  .maze-row .maze-cell {\n    margin-left: -1px;\n    margin-top: -1px; }\n  .maze-row .maze-cell:first-child {\n    margin-left: 0; }\n\n.screen-maze {\n  justify-content: center;\n  align-items: center; }\n\n.user-position {\n  background-color: red;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute;\n  transition: 0.5s; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Screen__ = __webpack_require__(8);



class MazeGame {
    constructor() {
        this.screens = [new __WEBPACK_IMPORTED_MODULE_1__Screen__["a" /* Screen */](__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ScreenSettings */].SCREEN_START), new __WEBPACK_IMPORTED_MODULE_1__Screen__["a" /* Screen */](__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ScreenSettings */].SCREEN_MAZE_1), new __WEBPACK_IMPORTED_MODULE_1__Screen__["a" /* Screen */](__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ScreenSettings */].SCREEN_STORY_2), new __WEBPACK_IMPORTED_MODULE_1__Screen__["a" /* Screen */](__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ScreenSettings */].SCREEN_MAZE_2)];

        this.showNextScreen = () => {
            this.activeScreen.hide();
            const index = this.screens.indexOf(this.activeScreen) + 1;
            this.activeScreen = this.screens[index];
            this.activeScreen.show();
        };

        this.handleBtnStartClick = () => {
            this.showNextScreen();
        };

        this.handleKeyDown = e => this.activeScreen.onKeyDown(e);

        this.start = () => {
            this.activeScreen = this.screens[0];
            this.activeScreen.show();
            document.body.addEventListener('keydown', this.handleKeyDown);
        };
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = MazeGame;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ScreenId = {
    START: 'start',
    STORY_1: 'story-1',
    MAZE_1: 'maze-1',
    STORY_2: 'story-2',
    MAZE_2: 'maze-2'
};
/* unused harmony export ScreenId */


const MazeId = {
    MAZE_1: 'maze-1',
    MAZE_2: 'maze-2'
};
/* unused harmony export MazeId */


const MAZE_MATRIX_1 = [[{ right: 1 }, { top: 1, right: 1, bottom: 1, left: 1 }, { left: 1 }], [{ right: 1, bottom: 1 }, { top: 1, right: 1, left: 1 }, { left: 1, bottom: 1 }], [{ top: 1 }, { right: 1, bottom: 1 }, { top: 1, left: 1 }]];
/* unused harmony export MAZE_MATRIX_1 */


const MAZE_MATRIX_2 = [[{ right: 1 }, { top: 1, right: 1, bottom: 1, left: 1 }, { left: 1 }], [{ right: 1, bottom: 1 }, { top: 1, right: 1, left: 1 }, { left: 1, bottom: 1 }], [{ top: 1 }, { right: 1, bottom: 1 }, { top: 1, left: 1 }]];
/* unused harmony export MAZE_MATRIX_2 */


const MazeSettings = {
    MAZE_1: {
        id: MazeId.MAZE_1,
        defaultPosition: { x: 1, y: 0 },
        matrix: MAZE_MATRIX_1
    },
    MAZE_2: {
        id: MazeId.MAZE_2,
        defaultPosition: { x: 1, y: 0 },
        matrix: MAZE_MATRIX_2
    }
};
/* unused harmony export MazeSettings */


const KeyCode = {
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37
};
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyCode;


const ScreenSettings = {
    SCREEN_START: {
        id: ScreenId.START
    },
    SCREEN_STORY_1: {
        id: ScreenId.STORY_1
    },
    SCREEN_MAZE_1: {
        id: ScreenId.MAZE_1,
        mazeSettings: MazeSettings.MAZE_1
    },
    SCREEN_STORY_2: {
        id: ScreenId.STORY_2
    },
    SCREEN_MAZE_2: {
        id: ScreenId.MAZE_2
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ScreenSettings;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Maze__ = __webpack_require__(9);


function getScreenEl(screen) {
    return document.getElementById('screen-' + screen);
}

function showScreen(screen) {
    getScreenEl(screen).classList.remove('hidden');
}

function hideScreen(screen) {
    getScreenEl(screen).classList.add('hidden');
}

class Screen {
    constructor(screenSettings) {
        this.show = () => showScreen(this.screenSettings.id);

        this.hide = () => hideScreen(this.screenSettings.id);

        this.onKeyDown = e => {
            if (this.maze) {
                this.maze.onKeyDown(e);
            }
        };

        this.screenSettings = screenSettings;
        const { mazeSettings } = this.screenSettings;
        if (mazeSettings) {
            this.maze = new __WEBPACK_IMPORTED_MODULE_0__Maze__["a" /* Maze */](mazeSettings);
            this.maze.render();
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Screen;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserPosition__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(7);


function getMazeEl(id) {
    return document.getElementById(id);
}

function renderMazeCell(cell) {
    const div = document.createElement('div');
    div.className = 'maze-cell';
    if (cell.top) {
        div.style.borderTopWidth = 0;
    }
    if (cell.right) {
        div.style.borderRightWidth = 0;
    }
    if (cell.bottom) {
        div.style.borderBottomWidth = 0;
    }
    if (cell.left) {
        div.style.borderLeftWidth = 0;
    }

    return div;
}

function renderMazeRow(row) {
    const div = document.createElement('div');
    div.className = 'maze-row';
    row.forEach(cell => div.appendChild(renderMazeCell(cell)));
    return div;
}

function renderMaze(matrix) {
    const div = document.createElement('div');
    div.className = 'maze';
    matrix.forEach(row => div.appendChild(renderMazeRow(row)));
    return div;
}

class Maze {
    constructor(mazeSettings) {
        this.onKeyDown = e => {
            const { x, y } = this.currentPosition;
            const { matrix } = this.mazeSettings;
            const mazeCell = matrix[y][x];
            const maxX = matrix[0].length;
            const maxY = matrix.length;
            switch (e.keyCode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* KeyCode */].ARROW_UP:
                    if (mazeCell.top && y - 1 >= 0) {
                        this.currentPosition = { x, y: y - 1 };
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* KeyCode */].ARROW_DOWN:
                    if (mazeCell.bottom && y + 1 < maxY) {
                        this.currentPosition = { x, y: y + 1 };
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* KeyCode */].ARROW_LEFT:
                    if (mazeCell.left && x - 1 >= 0) {
                        this.currentPosition = { x: x - 1, y };
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* KeyCode */].ARROW_RIGHT:
                    if (mazeCell.right && x + 1 < maxX) {
                        this.currentPosition = { x: x + 1, y };
                    }
                    break;
            }
            this.userPosition.setPosition(this.currentPosition);
        };

        this.mazeSettings = mazeSettings;
        this.currentPosition = mazeSettings.defaultPosition;
    }

    render() {
        const { id, matrix } = this.mazeSettings;

        this.userPosition = new __WEBPACK_IMPORTED_MODULE_0__UserPosition__["a" /* UserPosition */]();
        getMazeEl(id).appendChild(this.userPosition.render());
        this.userPosition.setPosition(this.currentPosition);

        getMazeEl(id).appendChild(renderMaze(matrix));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Maze;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function renderUserPosition() {
    const div = document.createElement('div');
    div.className = 'user-position';
    return div;
}

class UserPosition {
    setPosition({ x, y }) {
        this.el.style.marginLeft = x * 50 + 'px';
        this.el.style.marginTop = y * 50 + 'px';
    }

    render() {
        this.el = renderUserPosition();
        return this.el;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UserPosition;


/***/ })
/******/ ]);