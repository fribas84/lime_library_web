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

/***/ "./components/Account.tsx":
/*!********************************!*\
  !*** ./components/Account.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connectors */ \"./connectors.ts\");\n/* harmony import */ var _hooks_useENSName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useENSName */ \"./hooks/useENSName.ts\");\n/* harmony import */ var _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useMetaMaskOnboarding */ \"./hooks/useMetaMaskOnboarding.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Account = function(param) {\n    var triedToEagerConnect = param.triedToEagerConnect;\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref.active, error1 = ref.error, activate = ref.activate, deactivate = ref.deactivate, chainId = ref.chainId, account = ref.account, setError = ref.setError;\n    var ref1 = (0,_hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(), isMetaMaskInstalled = ref1.isMetaMaskInstalled, isWeb3Available = ref1.isWeb3Available, startOnboarding = ref1.startOnboarding, stopOnboarding = ref1.stopOnboarding;\n    // manage connecting state for injected connector\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), /*#__PURE__*/ connecting = ref2[0], setConnecting = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (active || error1) {\n            setConnecting(false);\n            stopOnboarding();\n        }\n    }, [\n        active,\n        error1,\n        stopOnboarding\n    ]);\n    var ENSName = (0,_hooks_useENSName__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(account);\n    if (error1) {\n        return null;\n    }\n    if (!triedToEagerConnect) {\n        return null;\n    }\n    if (typeof account !== \"string\") {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"jsx-36caa0e19a6825cc\",\n            __source: {\n                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                isWeb3Available ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    className: \"btn btn-primary walletButton\",\n                    disabled: connecting,\n                    onClick: function() {\n                        setConnecting(true);\n                        activate(_connectors__WEBPACK_IMPORTED_MODULE_6__.injected, undefined, true).catch(function(error) {\n                            // ignore the error if it's a user rejected request\n                            if (_instanceof(error, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__.UserRejectedRequestError)) {\n                                setConnecting(false);\n                            } else {\n                                setError(error);\n                            }\n                        });\n                    },\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: isMetaMaskInstalled ? \"Connect to MetaMask\" : \"Connect to Wallet\"\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    onClick: startOnboarding,\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Install Metamask\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    className: \"btn btn-primary\",\n                    disabled: connecting,\n                    onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.prev = 0;\n                                    _ctx.next = 3;\n                                    return activate((0,_connectors__WEBPACK_IMPORTED_MODULE_6__.walletConnect)(), undefined, true);\n                                case 3:\n                                    _ctx.next = 8;\n                                    break;\n                                case 5:\n                                    _ctx.prev = 5;\n                                    _ctx.t0 = _ctx[\"catch\"](0);\n                                    if (_instanceof(error1, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__.UserRejectedRequestError)) {\n                                        setConnecting(false);\n                                    } else {\n                                        setError(error1);\n                                    }\n                                case 8:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, null, [\n                            [\n                                0,\n                                5\n                            ]\n                        ]);\n                    })),\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Wallet Connect\"\n                }),\n                (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    id: \"36caa0e19a6825cc\",\n                    __self: _this,\n                    children: \"walletButton.jsx-36caa0e19a6825cc {margin:0.1px}\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                href: (0,_util__WEBPACK_IMPORTED_MODULE_9__.formatEtherscanLink)(\"Account\", [\n                    chainId,\n                    account\n                ]),\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: ENSName || \"\".concat((0,_util__WEBPACK_IMPORTED_MODULE_9__.shortenHex)(account, 4))\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                className: \"btn btn-danger\",\n                onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return deactivate();\n                            case 3:\n                                _ctx.next = 8;\n                                break;\n                            case 5:\n                                _ctx.prev = 5;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                setError(error1);\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            5\n                        ]\n                    ]);\n                })),\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: \"Disconnect\"\n            })\n        ]\n    }));\n};\n_s(Account, \"nFLWXaBDL33cTi366MPLAyJcIBk=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React,\n        _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        _hooks_useENSName__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUwsVUFBVTtvQkFDcEJNLE9BQU8sb0ZBQUUsUUFBUSxXQUFJLENBQUM7Ozs7OzsyQ0FFWmYsUUFBUSxDQUFDViwwREFBYSxJQUFJMEIsU0FBUyxFQUFFLElBQUk7Ozs7Ozs7b0NBRS9DLEVBQUUsRUFBRWpCLFdBQXlDLENBQXpDQSxNQUFLLEVBQVliLG9GQUF3QixHQUFFLENBQUM7d0NBQzlDd0IsYUFBYSxDQUFDLEtBQUs7b0NBQ3JCLENBQUMsTUFBTSxDQUFDO3dDQUNOTixRQUFRLENBQUNMLE1BQUs7b0NBQ2hCLENBQUM7Ozs7Ozs7Ozs7O29CQUVMLENBQUM7Ozs7Ozs7OEJBQUUsQ0FFTDs7Ozs7Ozs7O0lBYVIsQ0FBQztJQUVELE1BQU07O2lGQUVDbUIsQ0FBQztnQkFFRkMsSUFBSSxFQUFFMUIsMERBQW1CLENBQUMsQ0FBUyxVQUFFLENBQUNTO29CQUFBQSxPQUFPO29CQUFFQyxPQUFPO2dCQUFBLENBQUM7Z0JBQ3ZEaUIsTUFBTSxFQUFFLENBQVE7Z0JBQ2hCQyxHQUFHLEVBQUUsQ0FBcUI7Ozs7Ozs7MEJBRzNCVixPQUFPLElBQUssR0FBeUIsT0FBdkJqQixpREFBVSxDQUFDUyxPQUFPLEVBQUUsQ0FBQzs7aUZBRXJDUiwrREFBTTtnQkFBQ2tCLFNBQVMsRUFBQyxDQUFnQjtnQkFDNUJFLE9BQU8sb0ZBQUUsUUFBUSxXQUFJLENBQUM7Ozs7Ozt1Q0FFWmQsVUFBVTs7Ozs7OztnQ0FFaEJHLFFBQVEsQ0FBQ0wsTUFBSzs7Ozs7Ozs7Ozs7Z0JBRWxCLENBQUM7Ozs7Ozs7MEJBQUUsQ0FFTDs7OztBQUtSLENBQUM7R0E5R0tILE9BQU87O1FBRVRYLDBEQUFZO1FBT1ZPLG9FQUFxQjtRQVdURCx5REFBVTs7O0tBcEJ0QkssT0FBTztBQWdIYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWNjb3VudC50c3g/N2Y3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5qZWN0ZWQsIHdhbGxldENvbm5lY3QgfSBmcm9tIFwiLi4vY29ubmVjdG9yc1wiO1xuaW1wb3J0IHVzZUVOU05hbWUgZnJvbSBcIi4uL2hvb2tzL3VzZUVOU05hbWVcIjtcbmltcG9ydCB1c2VNZXRhTWFza09uYm9hcmRpbmcgZnJvbSBcIi4uL2hvb2tzL3VzZU1ldGFNYXNrT25ib2FyZGluZ1wiO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXJzY2FuTGluaywgc2hvcnRlbkhleCB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5cbnR5cGUgQWNjb3VudFByb3BzID0ge1xuICB0cmllZFRvRWFnZXJDb25uZWN0OiBib29sZWFuO1xufTtcblxuY29uc3QgQWNjb3VudCA9ICh7IHRyaWVkVG9FYWdlckNvbm5lY3QgfTogQWNjb3VudFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGNoYWluSWQsIGFjY291bnQsIHNldEVycm9yIH0gPVxuICAgIHVzZVdlYjNSZWFjdCgpO1xuXG4gIGNvbnN0IHtcbiAgICBpc01ldGFNYXNrSW5zdGFsbGVkLFxuICAgIGlzV2ViM0F2YWlsYWJsZSxcbiAgICBzdGFydE9uYm9hcmRpbmcsXG4gICAgc3RvcE9uYm9hcmRpbmcsXG4gIH0gPSB1c2VNZXRhTWFza09uYm9hcmRpbmcoKTtcblxuICAvLyBtYW5hZ2UgY29ubmVjdGluZyBzdGF0ZSBmb3IgaW5qZWN0ZWQgY29ubmVjdG9yXG4gIGNvbnN0IFtjb25uZWN0aW5nLCBzZXRDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlIHx8IGVycm9yKSB7XG4gICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgIHN0b3BPbmJvYXJkaW5nKCk7XG4gICAgfVxuICB9LCBbYWN0aXZlLCBlcnJvciwgc3RvcE9uYm9hcmRpbmddKTtcblxuICBjb25zdCBFTlNOYW1lID0gdXNlRU5TTmFtZShhY2NvdW50KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghdHJpZWRUb0VhZ2VyQ29ubmVjdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY2NvdW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICB7aXNXZWIzQXZhaWxhYmxlID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3YWxsZXRCdXR0b25cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Nvbm5lY3Rpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBlcnJvciBpZiBpdCdzIGEgdXNlciByZWplY3RlZCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc01ldGFNYXNrSW5zdGFsbGVkID8gXCJDb25uZWN0IHRvIE1ldGFNYXNrXCIgOiBcIkNvbm5lY3QgdG8gV2FsbGV0XCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzdGFydE9uYm9hcmRpbmd9Pkluc3RhbGwgTWV0YW1hc2s8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgeyg8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17Y29ubmVjdGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBhY3RpdmF0ZSh3YWxsZXRDb25uZWN0KCksIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgV2FsbGV0IENvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj4pXG4gICAgICAgIH1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICB3YWxsZXRCdXR0b24ge1xuICAgICAgICAgIG1hcmdpbjowLjFweFxuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxhXG4gICAgICB7Li4ue1xuICAgICAgICBocmVmOiBmb3JtYXRFdGhlcnNjYW5MaW5rKFwiQWNjb3VudFwiLCBbY2hhaW5JZCwgYWNjb3VudF0pLFxuICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtFTlNOYW1lIHx8IGAke3Nob3J0ZW5IZXgoYWNjb3VudCwgNCl9YH1cbiAgICA8L2E+XG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IFxuICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgIFxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmplY3RlZCIsIndhbGxldENvbm5lY3QiLCJ1c2VFTlNOYW1lIiwidXNlTWV0YU1hc2tPbmJvYXJkaW5nIiwiZm9ybWF0RXRoZXJzY2FuTGluayIsInNob3J0ZW5IZXgiLCJCdXR0b24iLCJBY2NvdW50IiwidHJpZWRUb0VhZ2VyQ29ubmVjdCIsImFjdGl2ZSIsImVycm9yIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY2hhaW5JZCIsImFjY291bnQiLCJzZXRFcnJvciIsImlzTWV0YU1hc2tJbnN0YWxsZWQiLCJpc1dlYjNBdmFpbGFibGUiLCJzdGFydE9uYm9hcmRpbmciLCJzdG9wT25ib2FyZGluZyIsImNvbm5lY3RpbmciLCJzZXRDb25uZWN0aW5nIiwiRU5TTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsInVuZGVmaW5lZCIsImNhdGNoIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account.tsx\n");

/***/ })

});