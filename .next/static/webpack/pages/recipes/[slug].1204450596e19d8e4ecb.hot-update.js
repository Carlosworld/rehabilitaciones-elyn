webpackHotUpdate_N_E("pages/recipes/[slug]",{

/***/ "./node_modules/next/dist/client/image.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
false,

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
false,

/***/ "./node_modules/next/image.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/recipes/[slug].js":
/*!*********************************!*\
  !*** ./pages/recipes/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeDetails; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\Projectos\\rehabilitaciones-elyn\\rehabilitaciones-elyn\\pages\\recipes\\[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import Image from 'next/image'


var __N_SSG = true;
function RecipeDetails(_ref) {
  var _this = this;

  var recipe = _ref.recipe;
  var _recipe$fields = recipe.fields,
      featuredImage = _recipe$fields.featuredImage,
      title = _recipe$fields.title,
      serviceTime = _recipe$fields.serviceTime,
      services = _recipe$fields.services,
      method = _recipe$fields.method; // console.log(method)

  return __jsx("div", {
    className: "slug-box-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1375285764",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1375285764" + " " + "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(Image, {
    src: 'https:' + featuredImage.fields.file.url,
    width: featuredImage.fields.file.details.image.width,
    height: featuredImage.fields.file.details.image.height,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }), __jsx("h2", {
    className: "jsx-1375285764",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, title)), __jsx("div", {
    className: "jsx-1375285764" + " " + "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "jsx-1375285764",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "Servicios:"), services.map(function (ing) {
    return __jsx("span", {
      key: ing,
      className: "jsx-1375285764",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "jsx-1375285764" + " " + "fas fa-check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 33
      }
    }), " ", ing, __jsx("br", {
      className: "jsx-1375285764",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }));
  })), __jsx("div", {
    className: "jsx-1375285764" + " " + "method",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "jsx-1375285764",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "Descripci\xF3n:"), __jsx("div", {
    className: "jsx-1375285764",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__["documentToReactComponents"])(method))), __jsx("div", {
    className: "jsx-1375285764" + " " + "actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "../our-services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "jsx-1375285764",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, "regresar"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1375285764",
    __self: this,
    __source: void 0
  }, "h2.jsx-1375285764,h3.jsx-1375285764{text-transform:uppercase;}.banner.jsx-1375285764 h2.jsx-1375285764{margin:0;background:#fff;display:inline-block;padding:20px;position:relative;top:-60px;left:-10px;-webkit-transform:rotateZ(-1deg);-ms-transform:rotateZ(-1deg);transform:rotateZ(-1deg);box-shadow:1px 3px 5px rgba(0,0,0,0.1);}.info.jsx-1375285764 p.jsx-1375285764{margin:0;}.actions.jsx-1375285764{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.actions.jsx-1375285764 a.jsx-1375285764{color:#fff;background:#f01b29;padding:16px 24px;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXN1YXJpb1xcRG9jdW1lbnRzXFxQcm9qZWN0b3NcXHJlaGFiaWxpdGFjaW9uZXMtZWx5blxccmVoYWJpbGl0YWNpb25lcy1lbHluXFxwYWdlc1xccmVjaXBlc1xcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGZ0MsQUFHa0QsQUFHaEIsQUFXQSxBQUlXLEFBS0wsU0FuQkMsQUFXaEIsRUFTdUIsS0FMTixTQWxCakIsQUFJcUIsS0FvQkMsZ0JBbkJULEVBb0JZLFdBbkJQLGtCQUNSLFVBQ0MsR0FXa0IsUUFWSixBQWlCckIsdUZBaEJtQyxFQVVuQyxxQ0FUSiIsImZpbGUiOiJDOlxcVXNlcnNcXFVzdWFyaW9cXERvY3VtZW50c1xcUHJvamVjdG9zXFxyZWhhYmlsaXRhY2lvbmVzLWVseW5cXHJlaGFiaWxpdGFjaW9uZXMtZWx5blxccGFnZXNcXHJlY2lwZXNcXFtzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ2NvbnRlbnRmdWwnXHJcbmltcG9ydCB7IGRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMgfSBmcm9tICdAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXInXHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICAgIHNwYWNlOiBwcm9jZXNzLmVudi5DT05URU5URlVMX1NQQUNFX0lELFxyXG4gICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfQUNDRVNTX0tFWSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcclxuICAgICAgICBjb250ZW50X3R5cGU6IFwicmVjaXBlXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSByZXMuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBzbHVnOiBpdGVtLmZpZWxkcy5zbHVnIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCBjbGllbnQuZ2V0RW50cmllcyh7XHJcbiAgICAgICAgY29udGVudF90eXBlOiAncmVjaXBlJyxcclxuICAgICAgICAnZmllbGRzLnNsdWcnOiBwYXJhbXMuc2x1Z1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHJlY2lwZTogaXRlbXNbMF0gfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlRGV0YWlscyh7IHJlY2lwZSB9KSB7XHJcbiAgICBjb25zdCB7IGZlYXR1cmVkSW1hZ2UsIHRpdGxlLCBzZXJ2aWNlVGltZSwgc2VydmljZXMsIG1ldGhvZCB9ID0gcmVjaXBlLmZpZWxkc1xyXG4gICAgLy8gY29uc29sZS5sb2cobWV0aG9kKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbHVnLWJveC1tYWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnaHR0cHM6JyArIGZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e2ZlYXR1cmVkSW1hZ2UuZmllbGRzLmZpbGUuZGV0YWlscy5pbWFnZS53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlRha2VzIGFib3V0IHtzZXJ2aWNlVGltZX0gbWlucyB0byBjb29rLjwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TZXJ2aWNpb3M6PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoaW5nID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2tcIj48L2k+IHsgaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRob2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRlc2NyaXBjacOzbjo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKG1ldGhvZCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLi4vb3VyLXNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5yZWdyZXNhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyLGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtMWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5mbyBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb25zIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjAxYjI5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Usuario\\\\Documents\\\\Projectos\\\\rehabilitaciones-elyn\\\\rehabilitaciones-elyn\\\\pages\\\\recipes\\\\[slug].js */"))));
}
_c = RecipeDetails;

var _c;

$RefreshReg$(_c, "RecipeDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjaXBlcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiUmVjaXBlRGV0YWlscyIsInJlY2lwZSIsImZpZWxkcyIsImZlYXR1cmVkSW1hZ2UiLCJ0aXRsZSIsInNlcnZpY2VUaW1lIiwic2VydmljZXMiLCJtZXRob2QiLCJmaWxlIiwidXJsIiwiZGV0YWlscyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJpbmciLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7O0FBcUNlLFNBQVNBLGFBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFBQSx1QkFDa0JBLE1BQU0sQ0FBQ0MsTUFEekI7QUFBQSxNQUN0Q0MsYUFEc0Msa0JBQ3RDQSxhQURzQztBQUFBLE1BQ3ZCQyxLQUR1QixrQkFDdkJBLEtBRHVCO0FBQUEsTUFDaEJDLFdBRGdCLGtCQUNoQkEsV0FEZ0I7QUFBQSxNQUNIQyxRQURHLGtCQUNIQSxRQURHO0FBQUEsTUFDT0MsTUFEUCxrQkFDT0EsTUFEUCxFQUU5Qzs7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxLQUFEO0FBQ0ksT0FBRyxFQUFFLFdBQVdKLGFBQWEsQ0FBQ0QsTUFBZCxDQUFxQk0sSUFBckIsQ0FBMEJDLEdBRDlDO0FBRUksU0FBSyxFQUFFTixhQUFhLENBQUNELE1BQWQsQ0FBcUJNLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NDLEtBRm5EO0FBR0ksVUFBTSxFQUFFVCxhQUFhLENBQUNELE1BQWQsQ0FBcUJNLElBQXJCLENBQTBCRSxPQUExQixDQUFrQ0MsS0FBbEMsQ0FBd0NFLE1BSHBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLVCxLQUFMLENBTkosQ0FESixFQVVJO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLEVBSUtFLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFVBQUFDLEdBQUc7QUFBQSxXQUNiO0FBQU0sU0FBRyxFQUFFQSxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUEsMENBQWEsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosT0FDdUNBLEdBRHZDLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FEYTtBQUFBLEdBQWhCLENBSkwsQ0FWSixFQXNCSTtBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNQyxzR0FBeUIsQ0FBQ1QsTUFBRCxDQUEvQixDQUZKLENBdEJKLEVBMkJJO0FBQUEsd0NBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBREosQ0EzQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnMk5BREosQ0FESixDQURKO0FBMEVIO0tBOUV1QlAsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWNpcGVzL1tzbHVnXS4xMjA0NDUwNTk2ZTE5ZDhlNGVjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnY29udGVudGZ1bCdcclxuaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlcidcclxuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gICAgc3BhY2U6IHByb2Nlc3MuZW52LkNPTlRFTlRGVUxfU1BBQ0VfSUQsXHJcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuQ09OVEVOVEZVTF9BQ0NFU1NfS0VZLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZTogXCJyZWNpcGVcIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IHJlcy5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IHNsdWc6IGl0ZW0uZmllbGRzLnNsdWcgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICAgIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcclxuICAgICAgICBjb250ZW50X3R5cGU6ICdyZWNpcGUnLFxyXG4gICAgICAgICdmaWVsZHMuc2x1Zyc6IHBhcmFtcy5zbHVnXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgcmVjaXBlOiBpdGVtc1swXSB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVEZXRhaWxzKHsgcmVjaXBlIH0pIHtcclxuICAgIGNvbnN0IHsgZmVhdHVyZWRJbWFnZSwgdGl0bGUsIHNlcnZpY2VUaW1lLCBzZXJ2aWNlcywgbWV0aG9kIH0gPSByZWNpcGUuZmllbGRzXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXRob2QpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsdWctYm94LW1haW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eydodHRwczonICsgZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17ZmVhdHVyZWRJbWFnZS5maWVsZHMuZmlsZS5kZXRhaWxzLmltYWdlLndpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtmZWF0dXJlZEltYWdlLmZpZWxkcy5maWxlLmRldGFpbHMuaW1hZ2UuaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+VGFrZXMgYWJvdXQge3NlcnZpY2VUaW1lfSBtaW5zIHRvIGNvb2suPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNlcnZpY2lvczo8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzLm1hcChpbmcgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVja1wiPjwvaT4geyBpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGhvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+RGVzY3JpcGNpw7NuOjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2RvY3VtZW50VG9SZWFjdENvbXBvbmVudHMobWV0aG9kKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIuLi9vdXItc2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnJlZ3Jlc2FyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDIsaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXIgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmZvIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGlvbnMgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMDFiMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=