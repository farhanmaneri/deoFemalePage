"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Counter = ()=>{\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const Increment = ()=>{\n        setCount(count + 1);\n    };\n    const Decrement = ()=>{\n        setCount((prevCount)=>{\n            const newValue = prevCount > 0 ? prevCount - 1 : 0;\n            return newValue;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Counter using useState\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, undefined),\n                    \"    \"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: Increment,\n                            class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 1\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded-full p-3 m-2\",\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 1\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: Decrement,\n                            class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                            children: \"-\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 10\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Counter, \"1kRThAjFNKPouVDb/LmtNcK/vLM=\");\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUNkO0FBRWpDLE1BQU1FLFVBQVUsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBRXhDLE1BQU1JLFlBQVksSUFBTTtRQUFDRCxTQUFTRCxRQUFRO0lBQUU7SUFDNUMsTUFBTUcsWUFBWSxJQUFNO1FBQUNGLFNBQVMsQ0FBQ0csWUFBWTtZQUMzQyxNQUFNQyxXQUFXRCxZQUFZLElBQUlBLFlBQVcsSUFBSSxDQUFDO1lBQ2pELE9BQU9DO1FBQ1g7SUFDQTtJQUVBLHFCQUNJOzswQkFDSiw4REFBQ0M7O2tDQUFLLDhEQUFDQztrQ0FBRzs7Ozs7O29CQUEyQjs7Ozs7OzswQkFDakMsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDbkIsOERBQUNEO2tDQUNELDRFQUFDRTs0QkFBT0MsU0FBU1Q7NEJBQVdVLE9BQU07c0NBQTRFOzs7Ozs7Ozs7OztrQ0FJOUcsOERBQUNKO3dCQUFJQyxXQUFVO2tDQUNUVDs7Ozs7O2tDQUVGLDhEQUFDUTtrQ0FBSSw0RUFBQ0U7NEJBQU9DLFNBQVNSOzRCQUFXUyxPQUFNO3NDQUE0RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2SDtHQTlCTWI7S0FBQUE7QUErQk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanM/MTU2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmNyZW1lbnQgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb3VudGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUoMCk7XHJcblxyXG5jb25zdCBJbmNyZW1lbnQgPSAoKSA9PiB7c2V0Q291bnQoY291bnQgKyAxKX1cclxuY29uc3QgRGVjcmVtZW50ID0gKCkgPT4ge3NldENvdW50KChwcmV2Q291bnQpPT57XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHByZXZDb3VudCA+IDAgPyBwcmV2Q291bnQgLTEgOiAwO1xyXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG59KVxyXG59XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPD5cclxuPHNwYW4+PGgxPkNvdW50ZXIgdXNpbmcgdXNlU3RhdGU8L2gxPiAgICA8L3NwYW4+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBcIj5cclxuPGRpdj5cclxuPGJ1dHRvbiBvbkNsaWNrPXtJbmNyZW1lbnR9IGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPlxyXG4gICtcclxuPC9idXR0b24+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtZnVsbCBwLTMgbS0yXCI+XHJcbiAgICAge2NvdW50fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PjxidXR0b24gb25DbGljaz17RGVjcmVtZW50fSBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIj5cclxuICAtXHJcbjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyJdLCJuYW1lcyI6WyJpbmNyZW1lbnQiLCJ1c2VTdGF0ZSIsIkNvdW50ZXIiLCJjb3VudCIsInNldENvdW50IiwiSW5jcmVtZW50IiwiRGVjcmVtZW50IiwicHJldkNvdW50IiwibmV3VmFsdWUiLCJzcGFuIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/index.js\n"));

/***/ })

});