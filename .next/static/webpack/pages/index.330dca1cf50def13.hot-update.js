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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Counter = ()=>{\n    _s();\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const Increment = ()=>{\n        setCount(count + 1);\n    };\n    const Decrement = ()=>{\n        setCount(prevCount);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center  \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: Increment,\n                        class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 1\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                    lineNumber: 13,\n                    columnNumber: 1\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-full p-3 m-2\",\n                    children: count\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 1\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: Decrement,\n                        class: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 10\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Web3course\\\\assignment3\\\\src\\\\components\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Counter, \"1kRThAjFNKPouVDb/LmtNcK/vLM=\");\n_c = Counter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUNkO0FBRWpDLE1BQU1FLFVBQVUsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBRXhDLE1BQU1JLFlBQVksSUFBTTtRQUFDRCxTQUFTRCxRQUFRO0lBQUU7SUFDNUMsTUFBTUcsWUFBWSxJQUFNO1FBQUNGLFNBQVNHO0lBQVU7SUFFNUMscUJBQ0k7a0JBQ0EsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNuQiw4REFBQ0Q7OEJBQ0QsNEVBQUNFO3dCQUFPQyxTQUFTTjt3QkFBV08sT0FBTTtrQ0FBNEU7Ozs7Ozs7Ozs7OzhCQUk5Ryw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ1ROOzs7Ozs7OEJBRUYsOERBQUNLOzhCQUFJLDRFQUFDRTt3QkFBT0MsU0FBU0w7d0JBQVdNLE9BQU07a0NBQTRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkg7R0F6Qk1WO0tBQUFBO0FBMEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzPzE1NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5jcmVtZW50IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ291bnRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnQgXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuY29uc3QgSW5jcmVtZW50ID0gKCkgPT4ge3NldENvdW50KGNvdW50ICsgMSl9XHJcbmNvbnN0IERlY3JlbWVudCA9ICgpID0+IHtzZXRDb3VudChwcmV2Q291bnQpfVxyXG5cclxucmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBcIj5cclxuPGRpdj5cclxuPGJ1dHRvbiBvbkNsaWNrPXtJbmNyZW1lbnR9IGNsYXNzPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPlxyXG4gICtcclxuPC9idXR0b24+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtZnVsbCBwLTMgbS0yXCI+XHJcbiAgICAge2NvdW50fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PjxidXR0b24gb25DbGljaz17RGVjcmVtZW50fSBjbGFzcz1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIj5cclxuICAtXHJcbjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyJdLCJuYW1lcyI6WyJpbmNyZW1lbnQiLCJ1c2VTdGF0ZSIsIkNvdW50ZXIiLCJjb3VudCIsInNldENvdW50IiwiSW5jcmVtZW50IiwiRGVjcmVtZW50IiwicHJldkNvdW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/index.js\n"));

/***/ })

});