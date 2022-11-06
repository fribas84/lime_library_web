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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connectors */ \"./connectors.ts\");\n/* harmony import */ var _hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useENSName */ \"./hooks/useENSName.ts\");\n/* harmony import */ var _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useMetaMaskOnboarding */ \"./hooks/useMetaMaskOnboarding.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Account = function(param) {\n    var triedToEagerConnect = param.triedToEagerConnect;\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), active = ref.active, error1 = ref.error, activate = ref.activate, deactivate = ref.deactivate, chainId = ref.chainId, account = ref.account, setError = ref.setError;\n    var ref1 = (0,_hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), isMetaMaskInstalled = ref1.isMetaMaskInstalled, isWeb3Available = ref1.isWeb3Available, startOnboarding = ref1.startOnboarding, stopOnboarding = ref1.stopOnboarding;\n    // manage connecting state for injected connector\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), connecting = ref2[0], setConnecting = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (active || error1) {\n            setConnecting(false);\n            stopOnboarding();\n        }\n    }, [\n        active,\n        error1,\n        stopOnboarding\n    ]);\n    var ENSName = (0,_hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(account);\n    if (error1) {\n        return null;\n    }\n    if (!triedToEagerConnect) {\n        return null;\n    }\n    if (typeof account !== \"string\") {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"d-flex\",\n            __source: {\n                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                isWeb3Available ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    className: \"btn btn-primary my-2 my-sm-0\",\n                    disabled: connecting,\n                    onClick: function() {\n                        setConnecting(true);\n                        activate(_connectors__WEBPACK_IMPORTED_MODULE_5__.injected, undefined, true).catch(function(error) {\n                            // ignore the error if it's a user rejected request\n                            if (_instanceof(error, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError)) {\n                                setConnecting(false);\n                            } else {\n                                setError(error);\n                            }\n                        });\n                    },\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: isMetaMaskInstalled ? \"Connect to MetaMask\" : \"Connect to Wallet\"\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    onClick: startOnboarding,\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Install Metamask\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    className: \"btn btn-primary my-2 my-sm-0\",\n                    disabled: connecting,\n                    onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.prev = 0;\n                                    _ctx.next = 3;\n                                    return activate((0,_connectors__WEBPACK_IMPORTED_MODULE_5__.walletConnect)(), undefined, true);\n                                case 3:\n                                    _ctx.next = 8;\n                                    break;\n                                case 5:\n                                    _ctx.prev = 5;\n                                    _ctx.t0 = _ctx[\"catch\"](0);\n                                    if (_instanceof(error1, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError)) {\n                                        setConnecting(false);\n                                    } else {\n                                        setError(error1);\n                                    }\n                                case 8:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, null, [\n                            [\n                                0,\n                                5\n                            ]\n                        ]);\n                    })),\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Wallet Connect\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                href: (0,_util__WEBPACK_IMPORTED_MODULE_8__.formatEtherscanLink)(\"Account\", [\n                    chainId,\n                    account\n                ]),\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: ENSName || \"\".concat((0,_util__WEBPACK_IMPORTED_MODULE_8__.shortenHex)(account, 4))\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return deactivate();\n                            case 3:\n                                _ctx.next = 8;\n                                break;\n                            case 5:\n                                _ctx.prev = 5;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                setError(error1);\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            5\n                        ]\n                    ]);\n                })),\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: \"Disconnect\"\n            })\n        ]\n    }));\n};\n_s(Account, \"nFLWXaBDL33cTi366MPLAyJcIBk=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QThCO29CQUM5Q0MsUUFBUSxFQUFFTCxVQUFVO29CQUNwQk0sT0FBTyxvRkFBRSxRQUFRLFdBQUksQ0FBQzs7Ozs7OzJDQUVaZixRQUFRLENBQUNWLDBEQUFhLElBQUkwQixTQUFTLEVBQUUsSUFBSTs7Ozs7OztvQ0FFL0MsRUFBRSxFQUFFakIsV0FBeUMsQ0FBekNBLE1BQUssRUFBWWIsb0ZBQXdCLEdBQUUsQ0FBQzt3Q0FDOUN3QixhQUFhLENBQUMsS0FBSztvQ0FDckIsQ0FBQyxNQUFNLENBQUM7d0NBQ05OLFFBQVEsQ0FBQ0wsTUFBSztvQ0FDaEIsQ0FBQzs7Ozs7Ozs7Ozs7b0JBRUwsQ0FBQzs7Ozs7Ozs4QkFBRSxDQUVMOzs7O0lBSVIsQ0FBQztJQUVELE1BQU07O2lGQUVDbUIsQ0FBQztnQkFFRkMsSUFBSSxFQUFFMUIsMERBQW1CLENBQUMsQ0FBUyxVQUFFLENBQUNTO29CQUFBQSxPQUFPO29CQUFFQyxPQUFPO2dCQUFBLENBQUM7Z0JBQ3ZEaUIsTUFBTSxFQUFFLENBQVE7Z0JBQ2hCQyxHQUFHLEVBQUUsQ0FBcUI7Ozs7Ozs7MEJBRzNCVixPQUFPLElBQUssR0FBeUIsT0FBdkJqQixpREFBVSxDQUFDUyxPQUFPLEVBQUUsQ0FBQzs7aUZBRXJDbUIsQ0FBTTtnQkFDRFAsT0FBTyxvRkFBRSxRQUFRLFdBQUksQ0FBQzs7Ozs7O3VDQUVaZCxVQUFVOzs7Ozs7O2dDQUVoQkcsUUFBUSxDQUFDTCxNQUFLOzs7Ozs7Ozs7OztnQkFFbEIsQ0FBQzs7Ozs7OzswQkFBRSxDQUVMOzs7O0FBS1IsQ0FBQztHQXJHS0gsT0FBTzs7UUFFVFgsMERBQVk7UUFPVk8sb0VBQXFCO1FBV1RELHlEQUFVOzs7S0FwQnRCSyxPQUFPO0FBdUdiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LnRzeD83ZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3RlZCwgd2FsbGV0Q29ubmVjdCB9IGZyb20gXCIuLi9jb25uZWN0b3JzXCI7XG5pbXBvcnQgdXNlRU5TTmFtZSBmcm9tIFwiLi4vaG9va3MvdXNlRU5TTmFtZVwiO1xuaW1wb3J0IHVzZU1ldGFNYXNrT25ib2FyZGluZyBmcm9tIFwiLi4vaG9va3MvdXNlTWV0YU1hc2tPbmJvYXJkaW5nXCI7XG5pbXBvcnQgeyBmb3JtYXRFdGhlcnNjYW5MaW5rLCBzaG9ydGVuSGV4IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cblxudHlwZSBBY2NvdW50UHJvcHMgPSB7XG4gIHRyaWVkVG9FYWdlckNvbm5lY3Q6IGJvb2xlYW47XG59O1xuXG5jb25zdCBBY2NvdW50ID0gKHsgdHJpZWRUb0VhZ2VyQ29ubmVjdCB9OiBBY2NvdW50UHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgY2hhaW5JZCwgYWNjb3VudCwgc2V0RXJyb3IgfSA9XG4gICAgdXNlV2ViM1JlYWN0KCk7XG5cbiAgY29uc3Qge1xuICAgIGlzTWV0YU1hc2tJbnN0YWxsZWQsXG4gICAgaXNXZWIzQXZhaWxhYmxlLFxuICAgIHN0YXJ0T25ib2FyZGluZyxcbiAgICBzdG9wT25ib2FyZGluZyxcbiAgfSA9IHVzZU1ldGFNYXNrT25ib2FyZGluZygpO1xuXG4gIC8vIG1hbmFnZSBjb25uZWN0aW5nIHN0YXRlIGZvciBpbmplY3RlZCBjb25uZWN0b3JcbiAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmUgfHwgZXJyb3IpIHtcbiAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgc3RvcE9uYm9hcmRpbmcoKTtcbiAgICB9XG4gIH0sIFthY3RpdmUsIGVycm9yLCBzdG9wT25ib2FyZGluZ10pO1xuXG4gIGNvbnN0IEVOU05hbWUgPSB1c2VFTlNOYW1lKGFjY291bnQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCF0cmllZFRvRWFnZXJDb25uZWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjY291bnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAge2lzV2ViM0F2YWlsYWJsZSA/IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXktMiBteS1zbS0wXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjb25uZWN0aW5nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuXG4gICAgICAgICAgICAgIGFjdGl2YXRlKGluamVjdGVkLCB1bmRlZmluZWQsIHRydWUpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB0aGUgZXJyb3IgaWYgaXQncyBhIHVzZXIgcmVqZWN0ZWQgcmVxdWVzdFxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNNZXRhTWFza0luc3RhbGxlZCA/IFwiQ29ubmVjdCB0byBNZXRhTWFza1wiIDogXCJDb25uZWN0IHRvIFdhbGxldFwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c3RhcnRPbmJvYXJkaW5nfT5JbnN0YWxsIE1ldGFtYXNrPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHsoPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXktMiBteS1zbS0wXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjb25uZWN0aW5nfVxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFjdGl2YXRlKHdhbGxldENvbm5lY3QoKSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICBXYWxsZXQgQ29ubmVjdFxuICAgICAgICAgIDwvQnV0dG9uPilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGFcbiAgICAgIHsuLi57XG4gICAgICAgIGhyZWY6IGZvcm1hdEV0aGVyc2NhbkxpbmsoXCJBY2NvdW50XCIsIFtjaGFpbklkLCBhY2NvdW50XSksXG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAge0VOU05hbWUgfHwgYCR7c2hvcnRlbkhleChhY2NvdW50LCA0KX1gfVxuICAgIDwvYT5cbiAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgZGVhY3RpdmF0ZSgpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7IFxuICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgRGlzY29ubmVjdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgIFxuICAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDsiXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmplY3RlZCIsIndhbGxldENvbm5lY3QiLCJ1c2VFTlNOYW1lIiwidXNlTWV0YU1hc2tPbmJvYXJkaW5nIiwiZm9ybWF0RXRoZXJzY2FuTGluayIsInNob3J0ZW5IZXgiLCJCdXR0b24iLCJBY2NvdW50IiwidHJpZWRUb0VhZ2VyQ29ubmVjdCIsImFjdGl2ZSIsImVycm9yIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiY2hhaW5JZCIsImFjY291bnQiLCJzZXRFcnJvciIsImlzTWV0YU1hc2tJbnN0YWxsZWQiLCJpc1dlYjNBdmFpbGFibGUiLCJzdGFydE9uYm9hcmRpbmciLCJzdG9wT25ib2FyZGluZyIsImNvbm5lY3RpbmciLCJzZXRDb25uZWN0aW5nIiwiRU5TTmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsInVuZGVmaW5lZCIsImNhdGNoIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account.tsx\n");

/***/ })

});