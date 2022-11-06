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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connectors */ \"./connectors.ts\");\n/* harmony import */ var _hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useENSName */ \"./hooks/useENSName.ts\");\n/* harmony import */ var _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useMetaMaskOnboarding */ \"./hooks/useMetaMaskOnboarding.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Account = function(param) {\n    var triedToEagerConnect = param.triedToEagerConnect;\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), active = ref.active, error1 = ref.error, activate = ref.activate, deactivate = ref.deactivate, chainId = ref.chainId, account = ref.account, setError = ref.setError;\n    var ref1 = (0,_hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), isMetaMaskInstalled = ref1.isMetaMaskInstalled, isWeb3Available = ref1.isWeb3Available, startOnboarding = ref1.startOnboarding, stopOnboarding = ref1.stopOnboarding;\n    // manage connecting state for injected connector\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), connecting = ref2[0], setConnecting = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (active || error1) {\n            setConnecting(false);\n            stopOnboarding();\n        }\n    }, [\n        active,\n        error1,\n        stopOnboarding\n    ]);\n    var ENSName = (0,_hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(account);\n    if (error1) {\n        return null;\n    }\n    if (!triedToEagerConnect) {\n        return null;\n    }\n    if (typeof account !== \"string\") {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                isWeb3Available ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"btn btn-secondary my-2 my-sm-0\",\n                    disabled: connecting,\n                    onClick: function() {\n                        setConnecting(true);\n                        activate(_connectors__WEBPACK_IMPORTED_MODULE_5__.injected, undefined, true).catch(function(error) {\n                            // ignore the error if it's a user rejected request\n                            if (_instanceof(error, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError)) {\n                                setConnecting(false);\n                            } else {\n                                setError(error);\n                            }\n                        });\n                    },\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: isMetaMaskInstalled ? \"Connect to MetaMask\" : \"Connect to Wallet\"\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"btn btn-secondary my-2 my-sm-0\",\n                    onClick: startOnboarding,\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Install Metamask\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    disabled: connecting,\n                    onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.prev = 0;\n                                    _ctx.next = 3;\n                                    return activate((0,_connectors__WEBPACK_IMPORTED_MODULE_5__.walletConnect)(), undefined, true);\n                                case 3:\n                                    _ctx.next = 8;\n                                    break;\n                                case 5:\n                                    _ctx.prev = 5;\n                                    _ctx.t0 = _ctx[\"catch\"](0);\n                                    if (_instanceof(error1, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError)) {\n                                        setConnecting(false);\n                                    } else {\n                                        setError(error1);\n                                    }\n                                case 8:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, null, [\n                            [\n                                0,\n                                5\n                            ]\n                        ]);\n                    })),\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Wallet Connect\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                href: (0,_util__WEBPACK_IMPORTED_MODULE_8__.formatEtherscanLink)(\"Account\", [\n                    chainId,\n                    account\n                ]),\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: ENSName || \"\".concat((0,_util__WEBPACK_IMPORTED_MODULE_8__.shortenHex)(account, 4))\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return deactivate();\n                            case 3:\n                                _ctx.next = 8;\n                                break;\n                            case 5:\n                                _ctx.prev = 5;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                setError(error1);\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            5\n                        ]\n                    ]);\n                })),\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: \"Disconnect\"\n            })\n        ]\n    }));\n};\n_s(Account, \"nFLWXaBDL33cTi366MPLAyJcIBk=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxvRkFBRSxRQUFRLFdBQUksQ0FBQzs7Ozs7OzJDQUVaaEIsUUFBUSxDQUFDVCwwREFBYSxJQUFJMEIsU0FBUyxFQUFFLElBQUk7Ozs7Ozs7b0NBRS9DLEVBQUUsRUFBRWxCLFdBQXlDLENBQXpDQSxNQUFLLEVBQVlaLG9GQUF3QixHQUFFLENBQUM7d0NBQzlDdUIsYUFBYSxDQUFDLEtBQUs7b0NBQ3JCLENBQUMsTUFBTSxDQUFDO3dDQUNOTixRQUFRLENBQUNMLE1BQUs7b0NBQ2hCLENBQUM7Ozs7Ozs7Ozs7O29CQUVMLENBQUM7Ozs7Ozs7OEJBQUUsQ0FFTDs7OztJQUlSLENBQUM7SUFFRCxNQUFNOztpRkFFQ29CLENBQUM7Z0JBRUZDLElBQUksRUFBRTFCLDBEQUFtQixDQUFDLENBQVMsVUFBRSxDQUFDUTtvQkFBQUEsT0FBTztvQkFBRUMsT0FBTztnQkFBQSxDQUFDO2dCQUN2RGtCLE1BQU0sRUFBRSxDQUFRO2dCQUNoQkMsR0FBRyxFQUFFLENBQXFCOzs7Ozs7OzBCQUczQlgsT0FBTyxJQUFLLEdBQXlCLE9BQXZCaEIsaURBQVUsQ0FBQ1EsT0FBTyxFQUFFLENBQUM7O2lGQUVyQ1UsQ0FBTTtnQkFDREcsT0FBTyxvRkFBRSxRQUFRLFdBQUksQ0FBQzs7Ozs7O3VDQUVaZixVQUFVOzs7Ozs7O2dDQUVoQkcsUUFBUSxDQUFDTCxNQUFLOzs7Ozs7Ozs7OztnQkFFbEIsQ0FBQzs7Ozs7OzswQkFBRSxDQUVMOzs7O0FBS1IsQ0FBQztHQXJHS0gsT0FBTzs7UUFFVFYsMERBQVk7UUFPVk8sb0VBQXFCO1FBV1RELHlEQUFVOzs7S0FwQnRCSSxPQUFPO0FBdUdiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LnRzeD83ZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbmplY3RlZCwgd2FsbGV0Q29ubmVjdCB9IGZyb20gXCIuLi9jb25uZWN0b3JzXCI7XG5pbXBvcnQgdXNlRU5TTmFtZSBmcm9tIFwiLi4vaG9va3MvdXNlRU5TTmFtZVwiO1xuaW1wb3J0IHVzZU1ldGFNYXNrT25ib2FyZGluZyBmcm9tIFwiLi4vaG9va3MvdXNlTWV0YU1hc2tPbmJvYXJkaW5nXCI7XG5pbXBvcnQgeyBmb3JtYXRFdGhlcnNjYW5MaW5rLCBzaG9ydGVuSGV4IH0gZnJvbSBcIi4uL3V0aWxcIjtcblxudHlwZSBBY2NvdW50UHJvcHMgPSB7XG4gIHRyaWVkVG9FYWdlckNvbm5lY3Q6IGJvb2xlYW47XG59O1xuXG5jb25zdCBBY2NvdW50ID0gKHsgdHJpZWRUb0VhZ2VyQ29ubmVjdCB9OiBBY2NvdW50UHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgY2hhaW5JZCwgYWNjb3VudCwgc2V0RXJyb3IgfSA9XG4gICAgdXNlV2ViM1JlYWN0KCk7XG5cbiAgY29uc3Qge1xuICAgIGlzTWV0YU1hc2tJbnN0YWxsZWQsXG4gICAgaXNXZWIzQXZhaWxhYmxlLFxuICAgIHN0YXJ0T25ib2FyZGluZyxcbiAgICBzdG9wT25ib2FyZGluZyxcbiAgfSA9IHVzZU1ldGFNYXNrT25ib2FyZGluZygpO1xuXG4gIC8vIG1hbmFnZSBjb25uZWN0aW5nIHN0YXRlIGZvciBpbmplY3RlZCBjb25uZWN0b3JcbiAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmUgfHwgZXJyb3IpIHtcbiAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgc3RvcE9uYm9hcmRpbmcoKTtcbiAgICB9XG4gIH0sIFthY3RpdmUsIGVycm9yLCBzdG9wT25ib2FyZGluZ10pO1xuXG4gIGNvbnN0IEVOU05hbWUgPSB1c2VFTlNOYW1lKGFjY291bnQpO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCF0cmllZFRvRWFnZXJDb25uZWN0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjY291bnQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2lzV2ViM0F2YWlsYWJsZSA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBteS0yIG15LXNtLTBcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Nvbm5lY3Rpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBlcnJvciBpZiBpdCdzIGEgdXNlciByZWplY3RlZCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc01ldGFNYXNrSW5zdGFsbGVkID8gXCJDb25uZWN0IHRvIE1ldGFNYXNrXCIgOiBcIkNvbm5lY3QgdG8gV2FsbGV0XCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXtzdGFydE9uYm9hcmRpbmd9Pkluc3RhbGwgTWV0YW1hc2s8L2J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgeyg8YnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17Y29ubmVjdGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBhY3RpdmF0ZSh3YWxsZXRDb25uZWN0KCksIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgV2FsbGV0IENvbm5lY3RcbiAgICAgICAgICA8L2J1dHRvbj4pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxhXG4gICAgICB7Li4ue1xuICAgICAgICBocmVmOiBmb3JtYXRFdGhlcnNjYW5MaW5rKFwiQWNjb3VudFwiLCBbY2hhaW5JZCwgYWNjb3VudF0pLFxuICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtFTlNOYW1lIHx8IGAke3Nob3J0ZW5IZXgoYWNjb3VudCwgNCl9YH1cbiAgICA8L2E+XG4gICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IGRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19PlxuICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICBcbiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7Il0sIm5hbWVzIjpbInVzZVdlYjNSZWFjdCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5qZWN0ZWQiLCJ3YWxsZXRDb25uZWN0IiwidXNlRU5TTmFtZSIsInVzZU1ldGFNYXNrT25ib2FyZGluZyIsImZvcm1hdEV0aGVyc2NhbkxpbmsiLCJzaG9ydGVuSGV4IiwiQWNjb3VudCIsInRyaWVkVG9FYWdlckNvbm5lY3QiLCJhY3RpdmUiLCJlcnJvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImNoYWluSWQiLCJhY2NvdW50Iiwic2V0RXJyb3IiLCJpc01ldGFNYXNrSW5zdGFsbGVkIiwiaXNXZWIzQXZhaWxhYmxlIiwic3RhcnRPbmJvYXJkaW5nIiwic3RvcE9uYm9hcmRpbmciLCJjb25uZWN0aW5nIiwic2V0Q29ubmVjdGluZyIsIkVOU05hbWUiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiLCJjYXRjaCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Account.tsx\n");

/***/ })

});