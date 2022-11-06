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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connectors */ \"./connectors.ts\");\n/* harmony import */ var _hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useENSName */ \"./hooks/useENSName.ts\");\n/* harmony import */ var _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useMetaMaskOnboarding */ \"./hooks/useMetaMaskOnboarding.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ \"./util.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Account = function(param) {\n    var triedToEagerConnect = param.triedToEagerConnect;\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), active = ref.active, error1 = ref.error, activate = ref.activate, deactivate = ref.deactivate, chainId = ref.chainId, account = ref.account, setError = ref.setError;\n    var ref1 = (0,_hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), isMetaMaskInstalled = ref1.isMetaMaskInstalled, isWeb3Available = ref1.isWeb3Available, startOnboarding = ref1.startOnboarding, stopOnboarding = ref1.stopOnboarding;\n    // manage connecting state for injected connector\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), connecting = ref2[0], setConnecting = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (active || error1) {\n            setConnecting(false);\n            stopOnboarding();\n        }\n    }, [\n        active,\n        error1,\n        stopOnboarding\n    ]);\n    var ENSName = (0,_hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(account);\n    if (error1) {\n        return null;\n    }\n    if (!triedToEagerConnect) {\n        return null;\n    }\n    if (typeof account !== \"string\") {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                isWeb3Available ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"btn btn-secondary my-2 my-sm-0\",\n                    disabled: connecting,\n                    onClick: function() {\n                        setConnecting(true);\n                        activate(_connectors__WEBPACK_IMPORTED_MODULE_5__.injected, undefined, true).catch(function(error) {\n                            // ignore the error if it's a user rejected request\n                            if (_instanceof(error, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError)) {\n                                setConnecting(false);\n                            } else {\n                                setError(error);\n                            }\n                        });\n                    },\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: isMetaMaskInstalled ? \"Connect to MetaMask\" : \"Connect to Wallet\"\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    onClick: startOnboarding,\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Install Metamask\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    className: \"btn btn-secondary my-2 my-sm-0\",\n                    disabled: connecting,\n                    onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    _ctx.prev = 0;\n                                    _ctx.next = 3;\n                                    return activate((0,_connectors__WEBPACK_IMPORTED_MODULE_5__.walletConnect)(), undefined, true);\n                                case 3:\n                                    _ctx.next = 8;\n                                    break;\n                                case 5:\n                                    _ctx.prev = 5;\n                                    _ctx.t0 = _ctx[\"catch\"](0);\n                                    if (_instanceof(error1, _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_3__.UserRejectedRequestError)) {\n                                        setConnecting(false);\n                                    } else {\n                                        setError(error1);\n                                    }\n                                case 8:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee, null, [\n                            [\n                                0,\n                                5\n                            ]\n                        ]);\n                    })),\n                    __source: {\n                        fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Wallet Connect\"\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                href: (0,_util__WEBPACK_IMPORTED_MODULE_8__.formatEtherscanLink)(\"Account\", [\n                    chainId,\n                    account\n                ]),\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: ENSName || \"\".concat((0,_util__WEBPACK_IMPORTED_MODULE_8__.shortenHex)(account, 4))\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return deactivate();\n                            case 3:\n                                _ctx.next = 8;\n                                break;\n                            case 5:\n                                _ctx.prev = 5;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                setError(error1);\n                            case 8:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            5\n                        ]\n                    ]);\n                })),\n                __source: {\n                    fileName: \"/home/fribas/Projects/Solidity/lime_library_web/components/Account.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: \"Disconnect\"\n            })\n        ]\n    }));\n};\n_s(Account, \"nFLWXaBDL33cTi366MPLAyJcIBk=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _hooks_useMetaMaskOnboarding__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useENSName__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sb0ZBQUUsUUFBUSxXQUFJLENBQUM7Ozs7OzsyQ0FFWmhCLFFBQVEsQ0FBQ1QsMERBQWEsSUFBSTBCLFNBQVMsRUFBRSxJQUFJOzs7Ozs7O29DQUUvQyxFQUFFLEVBQUVsQixXQUF5QyxDQUF6Q0EsTUFBSyxFQUFZWixvRkFBd0IsR0FBRSxDQUFDO3dDQUM5Q3VCLGFBQWEsQ0FBQyxLQUFLO29DQUNyQixDQUFDLE1BQU0sQ0FBQzt3Q0FDTk4sUUFBUSxDQUFDTCxNQUFLO29DQUNoQixDQUFDOzs7Ozs7Ozs7OztvQkFFTCxDQUFDOzs7Ozs7OzhCQUFFLENBRUw7Ozs7SUFJUixDQUFDO0lBRUQsTUFBTTs7aUZBRUNvQixDQUFDO2dCQUVGQyxJQUFJLEVBQUUxQiwwREFBbUIsQ0FBQyxDQUFTLFVBQUUsQ0FBQ1E7b0JBQUFBLE9BQU87b0JBQUVDLE9BQU87Z0JBQUEsQ0FBQztnQkFDdkRrQixNQUFNLEVBQUUsQ0FBUTtnQkFDaEJDLEdBQUcsRUFBRSxDQUFxQjs7Ozs7OzswQkFHM0JYLE9BQU8sSUFBSyxHQUF5QixPQUF2QmhCLGlEQUFVLENBQUNRLE9BQU8sRUFBRSxDQUFDOztpRkFFckNVLENBQU07Z0JBQ0RHLE9BQU8sb0ZBQUUsUUFBUSxXQUFJLENBQUM7Ozs7Ozt1Q0FFWmYsVUFBVTs7Ozs7OztnQ0FFaEJHLFFBQVEsQ0FBQ0wsTUFBSzs7Ozs7Ozs7Ozs7Z0JBRWxCLENBQUM7Ozs7Ozs7MEJBQUUsQ0FFTDs7OztBQUtSLENBQUM7R0FyR0tILE9BQU87O1FBRVRWLDBEQUFZO1FBT1ZPLG9FQUFxQjtRQVdURCx5REFBVTs7O0tBcEJ0QkksT0FBTztBQXVHYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWNjb3VudC50c3g/N2Y3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW5qZWN0ZWQsIHdhbGxldENvbm5lY3QgfSBmcm9tIFwiLi4vY29ubmVjdG9yc1wiO1xuaW1wb3J0IHVzZUVOU05hbWUgZnJvbSBcIi4uL2hvb2tzL3VzZUVOU05hbWVcIjtcbmltcG9ydCB1c2VNZXRhTWFza09uYm9hcmRpbmcgZnJvbSBcIi4uL2hvb2tzL3VzZU1ldGFNYXNrT25ib2FyZGluZ1wiO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXJzY2FuTGluaywgc2hvcnRlbkhleCB9IGZyb20gXCIuLi91dGlsXCI7XG5cbnR5cGUgQWNjb3VudFByb3BzID0ge1xuICB0cmllZFRvRWFnZXJDb25uZWN0OiBib29sZWFuO1xufTtcblxuY29uc3QgQWNjb3VudCA9ICh7IHRyaWVkVG9FYWdlckNvbm5lY3QgfTogQWNjb3VudFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGNoYWluSWQsIGFjY291bnQsIHNldEVycm9yIH0gPVxuICAgIHVzZVdlYjNSZWFjdCgpO1xuXG4gIGNvbnN0IHtcbiAgICBpc01ldGFNYXNrSW5zdGFsbGVkLFxuICAgIGlzV2ViM0F2YWlsYWJsZSxcbiAgICBzdGFydE9uYm9hcmRpbmcsXG4gICAgc3RvcE9uYm9hcmRpbmcsXG4gIH0gPSB1c2VNZXRhTWFza09uYm9hcmRpbmcoKTtcblxuICAvLyBtYW5hZ2UgY29ubmVjdGluZyBzdGF0ZSBmb3IgaW5qZWN0ZWQgY29ubmVjdG9yXG4gIGNvbnN0IFtjb25uZWN0aW5nLCBzZXRDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlIHx8IGVycm9yKSB7XG4gICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgIHN0b3BPbmJvYXJkaW5nKCk7XG4gICAgfVxuICB9LCBbYWN0aXZlLCBlcnJvciwgc3RvcE9uYm9hcmRpbmddKTtcblxuICBjb25zdCBFTlNOYW1lID0gdXNlRU5TTmFtZShhY2NvdW50KTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghdHJpZWRUb0VhZ2VyQ29ubmVjdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY2NvdW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtpc1dlYjNBdmFpbGFibGUgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXktMiBteS1zbS0wXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjb25uZWN0aW5nfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuXG4gICAgICAgICAgICAgIGFjdGl2YXRlKGluamVjdGVkLCB1bmRlZmluZWQsIHRydWUpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB0aGUgZXJyb3IgaWYgaXQncyBhIHVzZXIgcmVqZWN0ZWQgcmVxdWVzdFxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNNZXRhTWFza0luc3RhbGxlZCA/IFwiQ29ubmVjdCB0byBNZXRhTWFza1wiIDogXCJDb25uZWN0IHRvIFdhbGxldFwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRPbmJvYXJkaW5nfT5JbnN0YWxsIE1ldGFtYXNrPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHsoPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBteS0yIG15LXNtLTBcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Nvbm5lY3Rpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYWN0aXZhdGUod2FsbGV0Q29ubmVjdCgpLCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIFdhbGxldCBDb25uZWN0XG4gICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8YVxuICAgICAgey4uLntcbiAgICAgICAgaHJlZjogZm9ybWF0RXRoZXJzY2FuTGluayhcIkFjY291bnRcIiwgW2NoYWluSWQsIGFjY291bnRdKSxcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7RU5TTmFtZSB8fCBgJHtzaG9ydGVuSGV4KGFjY291bnQsIDQpfWB9XG4gICAgPC9hPlxuICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBkZWFjdGl2YXRlKClcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgXG4gICAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fT5cbiAgICAgICAgICBEaXNjb25uZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICAgXG4gICAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50OyJdLCJuYW1lcyI6WyJ1c2VXZWIzUmVhY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImluamVjdGVkIiwid2FsbGV0Q29ubmVjdCIsInVzZUVOU05hbWUiLCJ1c2VNZXRhTWFza09uYm9hcmRpbmciLCJmb3JtYXRFdGhlcnNjYW5MaW5rIiwic2hvcnRlbkhleCIsIkFjY291bnQiLCJ0cmllZFRvRWFnZXJDb25uZWN0IiwiYWN0aXZlIiwiZXJyb3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJjaGFpbklkIiwiYWNjb3VudCIsInNldEVycm9yIiwiaXNNZXRhTWFza0luc3RhbGxlZCIsImlzV2ViM0F2YWlsYWJsZSIsInN0YXJ0T25ib2FyZGluZyIsInN0b3BPbmJvYXJkaW5nIiwiY29ubmVjdGluZyIsInNldENvbm5lY3RpbmciLCJFTlNOYW1lIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidW5kZWZpbmVkIiwiY2F0Y2giLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Account.tsx\n");

/***/ })

});