var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Iframe4Canvas/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Iframe4Canvas/index.ts":
/*!********************************!*\
  !*** ./Iframe4Canvas/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Iframe4Canvas =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function Iframe4Canvas() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  Iframe4Canvas.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._container = container;\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  Iframe4Canvas.prototype.updateView = function (context) {\n    this._context = context;\n\n    if (this.refreshIsNecessary()) {\n      this.updateParameters();\n      this.clear();\n      this.render();\n    }\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  Iframe4Canvas.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  Iframe4Canvas.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  Iframe4Canvas.prototype.refreshIsNecessary = function () {\n    if (this._src != this._context.parameters.src.raw || this._heigth != this._context.parameters.height.raw || this._width != this._context.parameters.width.raw) return true;else return false;\n  };\n\n  Iframe4Canvas.prototype.updateParameters = function () {\n    this._src = this._context.parameters.src.raw;\n    this._heigth = this._context.parameters.height.raw;\n    this._width = this._context.parameters.width.raw;\n  };\n\n  Iframe4Canvas.prototype.render = function () {\n    var uri = this._src ? this._src : \"http://blanks\";\n    this._iframe = document.createElement(\"iframe\");\n    this._iframe.id = \"iframe_4_canvas\";\n    this._iframe.style.minHeight = \"200px\";\n    this._iframe.style.minWidth = \"200px\";\n    this._iframe.height = this._heigth.toString() + \"px\";\n    this._iframe.width = this._width.toString() + \"px\";\n\n    this._iframe.setAttribute(\"src\", uri);\n\n    this._container.appendChild(this._iframe);\n  };\n\n  Iframe4Canvas.prototype.clear = function () {\n    while (this._container.lastChild) {\n      this._container.removeChild(this._container.lastChild);\n    }\n  };\n\n  return Iframe4Canvas;\n}();\n\nexports.Iframe4Canvas = Iframe4Canvas;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Iframe4Canvas/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('VinnyBControls.Iframe4Canvas', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Iframe4Canvas);
} else {
	var VinnyBControls = VinnyBControls || {};
	VinnyBControls.Iframe4Canvas = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Iframe4Canvas;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}