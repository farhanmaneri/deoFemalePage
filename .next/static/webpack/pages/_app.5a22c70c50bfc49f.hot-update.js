"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n // Import any additional Firebase services you need\nconst firebaseConfig = {\n    // Add your Firebase configuration here\n    apiKey: \"AIzaSyC5PtZCFdxdGjnShUAHyYARvbC7_VExXcU\",\n    authDomain: \"web3assignment3rd.firebaseapp.com\",\n    databaseURL: \"https://web3assignment3rd-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"web3assignment3rd\",\n    storageBucket: \"web3assignment3rd.appspot.com\",\n    messagingSenderId: \"1002693110182\",\n    appId: \"1:1002693110182:web:5ad3f7fd32d25912768767\",\n    measurementId: \"G-64Y67KWRFR\"\n};\n//Initialize Firebase\nif (!firebasec.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebaseConfig);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZUNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBb0M7QUFDUixDQUFDLG1EQUFtRDtBQUVoRixNQUFNQyxpQkFBaUI7SUFDckIsdUNBQXVDO0lBQ3ZDQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxxQkFBcUI7QUFDckIsSUFBSSxDQUFDQyxVQUFVQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtJQUMxQlosa0VBQXNCLENBQUNDO0FBQ3pCLENBQUM7QUFHRCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9maXJlYmFzZUNvbmZpZy5qcz9mOTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7IC8vIEltcG9ydCBhbnkgYWRkaXRpb25hbCBGaXJlYmFzZSBzZXJ2aWNlcyB5b3UgbmVlZFxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgLy8gQWRkIHlvdXIgRmlyZWJhc2UgY29uZmlndXJhdGlvbiBoZXJlXHJcbiAgYXBpS2V5OiBcIkFJemFTeUM1UHRaQ0ZkeGRHam5TaFVBSHlZQVJ2YkM3X1ZFeFhjVVwiLFxyXG4gIGF1dGhEb21haW46IFwid2ViM2Fzc2lnbm1lbnQzcmQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly93ZWIzYXNzaWdubWVudDNyZC1kZWZhdWx0LXJ0ZGIuYXNpYS1zb3V0aGVhc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXHJcbiAgcHJvamVjdElkOiBcIndlYjNhc3NpZ25tZW50M3JkXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ3ZWIzYXNzaWdubWVudDNyZC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDI2OTMxMTAxODJcIixcclxuICBhcHBJZDogXCIxOjEwMDI2OTMxMTAxODI6d2ViOjVhZDNmN2ZkMzJkMjU5MTI3Njg3NjdcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctNjRZNjdLV1JGUlwiXHJcbn07XHJcblxyXG4vL0luaXRpYWxpemUgRmlyZWJhc2VcclxuaWYgKCFmaXJlYmFzZWMuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlQ29uZmlnO1xyXG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlYyIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebaseConfig.js\n"));

/***/ })

});