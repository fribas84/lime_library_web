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

/***/ "./components/Library.tsx":
/*!********************************!*\
  !*** ./components/Library.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useLibraryContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLibraryContract */ \"./hooks/useLibraryContract.ts\");\n/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Table */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _Borrowed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Borrowed */ \"./components/Borrowed.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Library = function(param) {\n    var contractAddress = param.contractAddress;\n    _s();\n    var useLibrauseLibraryContract = (0,_hooks_useLibraryContract__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(contractAddress);\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), account = ref.account, library = ref.library;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), /*#__PURE__*/ borrowed = ref1[0], setBorrowed = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), books = ref2[0], setBooks = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), showNewBookModal = ref3[0], setNewBookModal = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n    }, []);\n    var handleNewBookModal = function() {\n        if (showNewBookModal == false) {\n            setNewBookModal(true);\n        } else {\n            setNewBookModal(false);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-711c3264cd08672c\",\n        __source: {\n            fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"jsx-711c3264cd08672c\" + \" \" + \"upperTable\",\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Borrowed__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        borrowed: borrowed,\n                        __source: {\n                            fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"jsx-711c3264cd08672c\" + \" \" + \"button-wrapper\",\n                        __source: {\n                            fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            variant: \"success\",\n                            onClick: handleNewBookModal,\n                            __source: {\n                                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"New Book\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                striped: true,\n                bordered: true,\n                hover: true,\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"thead\", {\n                        className: \"jsx-711c3264cd08672c\",\n                        __source: {\n                            fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"tr\", {\n                            className: \"jsx-711c3264cd08672c\",\n                            __source: {\n                                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"ISBN\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"Name\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"Author\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"th\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"Actions\"\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"tbody\", {\n                        className: \"jsx-711c3264cd08672c\",\n                        __source: {\n                            fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"tr\", {\n                            className: \"jsx-711c3264cd08672c\",\n                            __source: {\n                                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"1\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"Mark\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"Otto\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"td\", {\n                                    className: \"jsx-711c3264cd08672c\",\n                                    __source: {\n                                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 21\n                                    },\n                                    __self: _this,\n                                    children: \"@mdo\"\n                                })\n                            ]\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NewBook, {\n                setNewBookModal: setNewBookModal,\n                handleNewBookModal: handleNewBookModal,\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Library.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"711c3264cd08672c\",\n                __self: _this,\n                children: \".results-form.jsx-711c3264cd08672c {display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex-direction:column;\\n-ms-flex-direction:column;\\nflex-direction:column}\\n.button-wrapper.jsx-711c3264cd08672c {margin:20px;\\nfloat:right}\\n.bookRentWrapper.jsx-711c3264cd08672c {float:left}\\n.upperTable.jsx-711c3264cd08672c {position:inline}\"\n            })\n        ]\n    }));\n};\n_s(Library, \"29W7NhH5QNuScUpHHYdlzDdHBYo=\", false, function() {\n    return [\n        _hooks_useLibraryContract__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Library;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Library);\nvar _c;\n$RefreshReg$(_c, \"Library\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpYnJhcnkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNKO0FBQ2lCO0FBQ25CO0FBQ1k7QUFDcEI7OztBQVFqQyxHQUFLLENBQUNPLE9BQU8sR0FBRyxRQUFRLFFBQWdDLENBQUM7UUFBdkNDLGVBQWUsU0FBZkEsZUFBZTs7SUFDN0IsR0FBSyxDQUFDQywwQkFBMEIsR0FBR04scUVBQWtCLENBQUNLLGVBQWU7SUFDckUsR0FBSyxDQUF3QlIsR0FBNEIsR0FBNUJBLDhEQUFZLElBQWpDVSxPQUFPLEdBQWNWLEdBQTRCLENBQWpEVSxPQUFPLEVBQUVDLE9BQU8sR0FBS1gsR0FBNEIsQ0FBeENXLE9BQU87SUFDeEIsR0FBSyxDQUE0QlQsSUFBb0IsR0FBcEJBLCtDQUFRLENBQVMsQ0FBRSxrQkFBN0NVLFFBQVEsR0FBa0JWLElBQW9CLEtBQXBDVyxXQUFXLEdBQUtYLElBQW9CO0lBQ3JELEdBQUssQ0FBcUJBLElBQW9CLEdBQXBCQSwrQ0FBUSxJQUEzQlksS0FBSyxHQUFjWixJQUFvQixLQUFoQ2EsUUFBUSxHQUFJYixJQUFvQjtJQUM5QyxHQUFLLENBQXNDQSxJQUF3QixHQUF4QkEsK0NBQVEsQ0FBVSxLQUFLLEdBQTNEYyxnQkFBZ0IsR0FBb0JkLElBQXdCLEtBQTFDZSxlQUFlLEdBQUdmLElBQXdCO0lBQ25FRCxnREFBUyxDQUFDLFFBRWIsR0FGaUIsQ0FBQztJQUVmLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixHQUFLLENBQUNpQixrQkFBa0IsR0FBRyxRQUMvQixHQURvQyxDQUFDO1FBQzdCLEVBQUUsRUFBQ0YsZ0JBQWdCLElBQUUsS0FBSyxFQUFDLENBQUM7WUFDeEJDLGVBQWUsQ0FBQyxJQUFJO1FBQ3hCLENBQUMsTUFDRyxDQUFDO1lBQ0RBLGVBQWUsQ0FBQyxLQUFLO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBR0QsTUFBTSx1RUFDREUsQ0FBRzs7Ozs7Ozs7O2tGQUNDQSxDQUFHOzBEQUFXLENBQVk7Ozs7Ozs7O3lGQUMxQmIsaURBQVE7d0JBQUNNLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7eUZBQzNCTyxDQUFHO2tFQUFXLENBQWdCOzs7Ozs7O3VHQUM5QmQsbURBQU07NEJBQUNlLE9BQU8sRUFBQyxDQUFTOzRCQUFDQyxPQUFPLEVBQUVILGtCQUFrQjs7Ozs7OztzQ0FBRSxDQUFROzs7OztrRkFJOURkLDZEQUFLO2dCQUFDa0IsT0FBTztnQkFBQ0MsUUFBUTtnQkFBQ0MsS0FBSzs7Ozs7Ozs7eUZBQ3hCQyxDQUFLOzs7Ozs7Ozt3R0FDREMsQ0FBRTs7Ozs7Ozs7O3FHQUNGQyxDQUFFOzs7Ozs7Ozs4Q0FBQyxDQUFJOztxR0FDUEEsQ0FBRTs7Ozs7Ozs7OENBQUMsQ0FBSTs7cUdBQ1BBLENBQUU7Ozs7Ozs7OzhDQUFDLENBQU07O3FHQUNUQSxDQUFFOzs7Ozs7Ozs4Q0FBQyxDQUFPOzs7Ozt5RkFHZEMsQ0FBSzs7Ozs7Ozs7d0dBQ0RGLENBQUU7Ozs7Ozs7OztxR0FDRkcsQ0FBRTs7Ozs7Ozs7OENBQUMsQ0FBQzs7cUdBQ0pBLENBQUU7Ozs7Ozs7OzhDQUFDLENBQUk7O3FHQUNQQSxDQUFFOzs7Ozs7Ozs4Q0FBQyxDQUFJOztxR0FDUEEsQ0FBRTs7Ozs7Ozs7OENBQUMsQ0FBSTs7Ozs7OztpRkFLZkMsT0FBTztnQkFBQ2IsZUFBZSxFQUFFQSxlQUFlO2dCQUFFQyxrQkFBa0IsRUFBRUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUF3QjdGLENBQUM7R0F4RUtYLE9BQU87O1FBQzBCSixpRUFBa0I7UUFDeEJILDBEQUFZOzs7S0FGdkNPLE9BQU87QUEwRWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpYnJhcnkudHN4P2UyYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBXZWIzUHJvdmlkZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxpYnJhcnlDb250cmFjdCBmcm9tIFwiLi4vaG9va3MvdXNlTGlicmFyeUNvbnRyYWN0XCI7XG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RhYmxlJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgQm9ycm93ZWQgZnJvbSBcIi4vQm9ycm93ZWRcIjtcblxuXG4gXG50eXBlIExpYnJhcnlDb250cmFjdCA9IHtcbiAgICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbn1cblxuY29uc3QgTGlicmFyeSA9ICh7Y29udHJhY3RBZGRyZXNzfTogTGlicmFyeUNvbnRyYWN0KSA9PiB7XG4gICAgY29uc3QgdXNlTGlicmF1c2VMaWJyYXJ5Q29udHJhY3QgPSB1c2VMaWJyYXJ5Q29udHJhY3QoY29udHJhY3RBZGRyZXNzKTtcbiAgICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KCk7XG4gICAgY29uc3QgW2JvcnJvd2VkLCBzZXRCb3Jyb3dlZF0gID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPigpO1xuICAgIGNvbnN0IFtzaG93TmV3Qm9va01vZGFsLCBzZXROZXdCb29rTW9kYWxdPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG5cbiAgICB9LFtdKVxuXG4gICAgY29uc3QgaGFuZGxlTmV3Qm9va01vZGFsID0gKCkgPT57IFxuICAgICAgICBpZihzaG93TmV3Qm9va01vZGFsPT1mYWxzZSl7XG4gICAgICAgICAgICBzZXROZXdCb29rTW9kYWwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldE5ld0Jvb2tNb2RhbChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9ICAgXG4gICAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyVGFibGVcIj5cbiAgICAgICAgICAgIDxCb3Jyb3dlZCBib3Jyb3dlZD17Ym9ycm93ZWR9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgb25DbGljaz17aGFuZGxlTmV3Qm9va01vZGFsfT5OZXcgQm9vazwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFRhYmxlIHN0cmlwZWQgYm9yZGVyZWQgaG92ZXI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JU0JOPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QXV0aG9yPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPk1hcms8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+T3R0bzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5AbWRvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cblxuICAgICAgICAgICAgPE5ld0Jvb2sgc2V0TmV3Qm9va01vZGFsPXtzZXROZXdCb29rTW9kYWx9IGhhbmRsZU5ld0Jvb2tNb2RhbD17aGFuZGxlTmV3Qm9va01vZGFsfSAvPlxuXG4gIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVzdWx0cy1mb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLmJvb2tSZW50V3JhcHBlciB7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC51cHBlclRhYmxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmlubGluZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTsiXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VMaWJyYXJ5Q29udHJhY3QiLCJUYWJsZSIsIkJ1dHRvbiIsIkJvcnJvd2VkIiwiTGlicmFyeSIsImNvbnRyYWN0QWRkcmVzcyIsInVzZUxpYnJhdXNlTGlicmFyeUNvbnRyYWN0IiwiYWNjb3VudCIsImxpYnJhcnkiLCJib3Jyb3dlZCIsInNldEJvcnJvd2VkIiwiYm9va3MiLCJzZXRCb29rcyIsInNob3dOZXdCb29rTW9kYWwiLCJzZXROZXdCb29rTW9kYWwiLCJoYW5kbGVOZXdCb29rTW9kYWwiLCJkaXYiLCJ2YXJpYW50Iiwib25DbGljayIsInN0cmlwZWQiLCJib3JkZXJlZCIsImhvdmVyIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCIsIk5ld0Jvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Library.tsx\n");

/***/ })

});