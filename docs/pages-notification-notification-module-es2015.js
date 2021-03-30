(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "./src/app/pages/notification/containers/error-toastr/error-toastr.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/error-toastr/error-toastr.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ErrorToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorToastrComponent", function() { return ErrorToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class ErrorToastrComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"] {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
}
ErrorToastrComponent.ɵfac = function ErrorToastrComponent_Factory(t) { return new (t || ErrorToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"])); };
ErrorToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorToastrComponent, selectors: [["app-error-toastr"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [[1, "toastr-wrapper"], [1, "toastr-content"], [1, "toastr-wrapper-icon"], [1, "toastr-icon"], [1, "toastr-content__title"], [1, "toastr-icon", 3, "click"]], template: function ErrorToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Message was not sent!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorToastrComponent_Template_mat_icon_click_8_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".toastr-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.toastr-wrapper-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toastr-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toastr-content__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.toastr-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 16px 0 6px 0;\n  pointer-events: all;\n  cursor: pointer;\n  width: 257px;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #ff4081;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2NvbnRhaW5lcnMvZXJyb3ItdG9hc3RyL0Q6XFxQcm9qZWN0c1xcYW5ndWxhci1tYXRlcmlhbC1hZG1pbi9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvblxcY29udGFpbmVyc1xcZXJyb3ItdG9hc3RyXFxlcnJvci10b2FzdHIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL2Vycm9yLXRvYXN0ci9EOlxcUHJvamVjdHNcXGFuZ3VsYXItbWF0ZXJpYWwtYWRtaW4vc3JjXFxhcHBcXHN0eWxlc1xcdG9hc3J0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL2Vycm9yLXRvYXN0ci9lcnJvci10b2FzdHIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL2Vycm9yLXRvYXN0ci9EOlxcUHJvamVjdHNcXGFuZ3VsYXItbWF0ZXJpYWwtYWRtaW4vc3JjXFxhcHBcXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNBRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNERjs7QUZFQTtFQ2lCRSxnQkVQUztFRlFULFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNmRjs7QUZIQTtFQ3NCRSxhQUFBO0VBQ0EsbUJBQUE7QUNmRjs7QUZMRTtFQ3dCQSxTQUFBO0FDaEJGOztBRkhBO0VDdUJFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hCRjs7QUZMQTtFQ2JFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZRVBNO0VGUU4sYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJFZEs7RUZlTCxZQUFBO0FDc0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2NvbnRhaW5lcnMvZXJyb3ItdG9hc3RyL2Vycm9yLXRvYXN0ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL3RvYXNydCc7XHJcblxyXG4udG9hc3RyLXdyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci13cmFwcGVyO1xyXG59XHJcblxyXG4udG9hc3RyLXdyYXBwZXItaWNvbiB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLXdyYXBwZXItaWNvbjtcclxufVxyXG5cclxuLnRvYXN0ci1jb250ZW50IHtcclxuICBAaW5jbHVkZSB0b2FzdHItY29udGVudDtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgdG9hc3RyLWNvbnRlbnQtdGl0bGU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9hc3RyLWljb24ge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci1pY29uO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyKCRwaW5rKTtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcblxyXG5AbWl4aW4gdG9hc3RyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHIoJGNvbG9yKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAxNnB4IDAgNnB4IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1N3B4O1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItd3JhcHBlci1pY29uIHtcclxuICBjb2xvcjokd2hpdGUtODA7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItY29udGVudC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLWljb24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiIsIi50b2FzdHItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2FzdHItd3JhcHBlci1pY29uIHtcbiAgY29sb3I6ICNGRkZGRkY4MDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b2FzdHItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9hc3RyLWNvbnRlbnRfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4udG9hc3RyLWljb24ge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxNnB4IDAgNnB4IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDI1N3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG4gIGhlaWdodDogNDVweDtcbn0iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorToastrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-toastr',
                templateUrl: './error-toastr.component.html',
                styleUrls: ['./error-toastr.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
                    ])
                ],
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/notification/containers/index.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/notification/containers/index.ts ***!
  \********************************************************/
/*! exports provided: NotificationPageComponent, SuccessToastComponent, ErrorToastrComponent, InfoToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-page/notification-page.component */ "./src/app/pages/notification/containers/notification-page/notification-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationPageComponent", function() { return _notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_0__["NotificationPageComponent"]; });

/* harmony import */ var _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-toast/success-toast.component */ "./src/app/pages/notification/containers/success-toast/success-toast.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessToastComponent", function() { return _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_1__["SuccessToastComponent"]; });

/* harmony import */ var _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-toastr/error-toastr.component */ "./src/app/pages/notification/containers/error-toastr/error-toastr.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorToastrComponent", function() { return _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_2__["ErrorToastrComponent"]; });

/* harmony import */ var _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-toastr/info-toastr.component */ "./src/app/pages/notification/containers/info-toastr/info-toastr.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoToastrComponent", function() { return _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_3__["InfoToastrComponent"]; });







/***/ }),

/***/ "./src/app/pages/notification/containers/info-toastr/info-toastr.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/info-toastr/info-toastr.component.ts ***!
  \************************************************************************************/
/*! exports provided: InfoToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoToastrComponent", function() { return InfoToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class InfoToastrComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"] {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
}
InfoToastrComponent.ɵfac = function InfoToastrComponent_Factory(t) { return new (t || InfoToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"])); };
InfoToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoToastrComponent, selectors: [["app-info-toastr"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [[1, "toastr-wrapper"], [1, "toastr-content"], [1, "toastr-wrapper-icon"], [1, "toastr-icon"], [1, "toastr-content__title"], [1, "toastr-icon", 3, "click"]], template: function InfoToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoToastrComponent_Template_mat_icon_click_8_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".toastr-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.toastr-wrapper-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toastr-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toastr-content__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.toastr-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 16px 0 6px 0;\n  pointer-events: all;\n  cursor: pointer;\n  width: 257px;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #536DFE;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2NvbnRhaW5lcnMvaW5mby10b2FzdHIvRDpcXFByb2plY3RzXFxhbmd1bGFyLW1hdGVyaWFsLWFkbWluL3NyY1xcYXBwXFxwYWdlc1xcbm90aWZpY2F0aW9uXFxjb250YWluZXJzXFxpbmZvLXRvYXN0clxcaW5mby10b2FzdHIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL2luZm8tdG9hc3RyL0Q6XFxQcm9qZWN0c1xcYW5ndWxhci1tYXRlcmlhbC1hZG1pbi9zcmNcXGFwcFxcc3R5bGVzXFx0b2FzcnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2NvbnRhaW5lcnMvaW5mby10b2FzdHIvaW5mby10b2FzdHIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL2luZm8tdG9hc3RyL0Q6XFxQcm9qZWN0c1xcYW5ndWxhci1tYXRlcmlhbC1hZG1pbi9zcmNcXGFwcFxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0FFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRkVBO0VDaUJFLGdCRVBTO0VGUVQsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2ZGOztBRkhBO0VDc0JFLGFBQUE7RUFDQSxtQkFBQTtBQ2ZGOztBRkxFO0VDd0JBLFNBQUE7QUNoQkY7O0FGSEE7RUN1QkUsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaEJGOztBRkxBO0VDYkUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlFUE07RUZRTixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkVsQks7RUZtQkwsWUFBQTtBQ3NCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL2luZm8tdG9hc3RyL2luZm8tdG9hc3RyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvY29sb3JzJztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdG9hc3J0JztcclxuXHJcbi50b2FzdHItd3JhcHBlciB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLXdyYXBwZXI7XHJcbn1cclxuXHJcbi50b2FzdHItd3JhcHBlci1pY29uIHtcclxuICBAaW5jbHVkZSB0b2FzdHItd3JhcHBlci1pY29uO1xyXG59XHJcblxyXG4udG9hc3RyLWNvbnRlbnQge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci1jb250ZW50O1xyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBAaW5jbHVkZSB0b2FzdHItY29udGVudC10aXRsZTtcclxuICB9XHJcbn1cclxuXHJcbi50b2FzdHItaWNvbiB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLWljb247XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBAaW5jbHVkZSB0b2FzdHIoJGJsdWUpO1xyXG59XHJcbiIsIkBpbXBvcnQgXCJjb2xvcnNcIjtcclxuXHJcbkBtaXhpbiB0b2FzdHItd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1peGluIHRvYXN0cigkY29sb3IpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDE2cHggMCA2cHggMDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjU3cHg7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci13cmFwcGVyLWljb24ge1xyXG4gIGNvbG9yOiR3aGl0ZS04MDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci1jb250ZW50LXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItaWNvbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIiwiLnRvYXN0ci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvYXN0ci13cmFwcGVyLWljb24ge1xuICBjb2xvcjogI0ZGRkZGRjgwO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRvYXN0ci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b2FzdHItY29udGVudF9fdGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi50b2FzdHItaWNvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDE2cHggMCA2cHggMDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMjU3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNkRGRTtcbiAgaGVpZ2h0OiA0NXB4O1xufSIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoToastrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-toastr',
                templateUrl: './info-toastr.component.html',
                styleUrls: ['./info-toastr.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
                    ])
                ],
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/notification/containers/notification-page/notification-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/notification-page/notification-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NotificationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageComponent", function() { return NotificationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../success-toast/success-toast.component */ "./src/app/pages/notification/containers/success-toast/success-toast.component.ts");
/* harmony import */ var _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-toastr/error-toastr.component */ "./src/app/pages/notification/containers/error-toastr/error-toastr.component.ts");
/* harmony import */ var _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info-toastr/info-toastr.component */ "./src/app/pages/notification/containers/info-toastr/info-toastr.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");













const _c0 = function (a0) { return { active: a0 }; };
var ToastPositionTypes;
(function (ToastPositionTypes) {
    ToastPositionTypes["bottomCenter"] = "toast-bottom-center";
    ToastPositionTypes["bottomRight"] = "toast-bottom-right";
    ToastPositionTypes["bottomLeft"] = "toast-bottom-left";
    ToastPositionTypes["topCenter"] = "toast-top-center";
    ToastPositionTypes["topRight"] = "toast-top-right";
    ToastPositionTypes["topLeft"] = "toast-top-left";
})(ToastPositionTypes || (ToastPositionTypes = {}));
class NotificationPageComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.toastrPositionTypes = ToastPositionTypes;
        this.toastrPosition = this.toastrPositionTypes.topRight;
        this.timeOut = 3000;
        this.toastrLink = 'https://github.com/scttcper/ngx-toastr';
    }
    setToastrPosition(position) {
        this.toastrPosition = position;
    }
    showSuccess() {
        this.toastrService.show(null, null, {
            positionClass: this.toastrPosition,
            toastComponent: _success_toast_success_toast_component__WEBPACK_IMPORTED_MODULE_1__["SuccessToastComponent"],
            timeOut: this.timeOut,
            tapToDismiss: false
        });
    }
    showErrorToastr() {
        this.toastrService.show(null, null, {
            positionClass: this.toastrPosition,
            toastComponent: _error_toastr_error_toastr_component__WEBPACK_IMPORTED_MODULE_2__["ErrorToastrComponent"],
            timeOut: this.timeOut,
            tapToDismiss: false
        });
    }
    showInfoToastr() {
        this.toastrService.show(null, null, {
            positionClass: this.toastrPosition,
            toastComponent: _info_toastr_info_toastr_component__WEBPACK_IMPORTED_MODULE_3__["InfoToastrComponent"],
            timeOut: this.timeOut,
            tapToDismiss: false
        });
    }
}
NotificationPageComponent.ɵfac = function NotificationPageComponent_Factory(t) { return new (t || NotificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
NotificationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationPageComponent, selectors: [["app-notification-page"]], decls: 181, vars: 29, consts: [["role", "heading", 1, "page-header"], [1, "page-content"], [1, "page-content__first-item-wrapper"], [1, "page-content__first-item-element"], [1, "select-position"], [1, "select-position__items-wrapper"], [1, "select-position__item-top", 3, "ngClass", "click"], [1, "select-position__center-top-item", 3, "ngClass", "click"], [1, "select-position__title"], [1, "select-position__item-bottom", 3, "ngClass", "click"], [1, "select-position__center-bottom-item", 3, "ngClass", "click"], [1, "position-buttons-wrapper"], ["mat-raised-button", "", 1, "position-button", "position-button_blue", 3, "click"], ["mat-raised-button", "", 1, "position-button", "position-button_pink", 3, "click"], ["mat-raised-button", "", 1, "position-button", "position-button_green", 3, "click"], [1, "link", 3, "href"], [1, "code-block"], [1, "code-wrapper"], [1, "code"], [1, "page-content__items-wrapper"], [1, "page-content__item"], [1, "notification", "notification_solid-pink"], [1, "notification__icon-wrapper", "notification__icon-wrapper_transparent"], [1, "notification__title", "notification__title_white"], [1, "notification", "notification_solid-blue"], [1, "notification", "notification_solid-green"], [1, "notification", "notification_solid-yellow"], [1, "notification", "notification_solid-violet"], [1, "notification", "notification_transparent-pink"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-pink"], [1, "notification__title"], [1, "notification", "notification_transparent-blue"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-blue"], [1, "notification", "notification_transparent-green"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-green"], [1, "notification", "notification_transparent-yellow"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-yellow"], [1, "icon-rotate"], [1, "notification", "notification_transparent-violet"], [1, "notification__icon-wrapper", "notification__icon-wrapper_solid-violet"], [1, "notification"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-pink"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-blue"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-green"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-yellow"], [1, "notification__icon-wrapper-circle", "notification__icon-wrapper-circle_transparent-violet"]], template: function NotificationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Layout Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "There are few position options available for notifications. You can click any of them to change notifications position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_16_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.topLeft); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_17_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.topCenter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_18_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.topRight); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Click any position");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_22_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.bottomLeft); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_23_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.bottomCenter); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_24_listener() { return ctx.setToastrPosition(ctx.toastrPositionTypes.bottomRight); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Notifications Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Different types of notifications for lost of use cases. Custom classes are also supported.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_34_listener() { return ctx.showInfoToastr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Info Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_36_listener() { return ctx.showErrorToastr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Error + Retry Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPageComponent_Template_button_click_38_listener() { return ctx.showSuccess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Success Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Notifications are created with the help of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ngx-toastr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "pre", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "For more API information refer to the library documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Notification Types Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Thanks for Checking out Messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "New customer is registered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "The order was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "business_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "The order was delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "5 Defence alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Notification Types Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "New report has been received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "The item was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "The new message from user @nahawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "get_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Your file is ready to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "disc_full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "The disc is full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Notification Types Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "New report has been received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "announcement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "New user feedback received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "The item was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "The new message from user @nahawaii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "get_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Your file is ready to upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "disc_full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "The disc is full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.topLeft));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.topCenter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.topRight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.bottomLeft));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.bottomCenter));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.toastrPosition === ctx.toastrPositionTypes.bottomRight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.toastrLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["\nimport ", "{", " ToastrService ", "}", " from 'ngx-toastr';\n\n@Component(", "{", "...", "}", ")\n  export class YourComponent ", "{", "\n  constructor(private toastr: ToastrService) ", "{", "", "}", "\n\n  showSuccess() ", "{", "\n    this.toastr.success(\n      'Hello world!', 'Toastr fun!'\n    );\n  ", "}", "\n", "}", "\n"]);
    } }, directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [".page-content[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n.page-content__item-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.page-content__items-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n@media (max-width: 576px) {\n  .page-content__items-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.page-content__first-item-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n@media (max-width: 576px) {\n  .page-content__first-item-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding-bottom: 0;\n  }\n}\n.page-content__first-item-element[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n}\n@media (max-width: 576px) {\n  .page-content__first-item-element[_ngcontent-%COMP%] {\n    padding: 0 0 16px 0;\n  }\n}\n.page-content__item[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  width: 100%;\n}\n.select-position[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 200px;\n  border: 1px dashed #536DFE;\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 576px) {\n  .select-position[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.select-position__items-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n}\n.select-position__item[_ngcontent-%COMP%], .select-position__item-bottom[_ngcontent-%COMP%], .select-position__item-top[_ngcontent-%COMP%], .select-position__center-bottom-item[_ngcontent-%COMP%], .select-position__center-top-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-color: #F3F5FF;\n  border: 0;\n  outline: none;\n}\n.select-position__item.active[_ngcontent-%COMP%], .active.select-position__item-bottom[_ngcontent-%COMP%], .active.select-position__item-top[_ngcontent-%COMP%], .active.select-position__center-bottom-item[_ngcontent-%COMP%], .active.select-position__center-top-item[_ngcontent-%COMP%] {\n  background-color: #c0caff;\n  cursor: default;\n}\n.select-position__center-top-item[_ngcontent-%COMP%] {\n  border-left: 1px dashed #536DFE;\n  border-right: 1px dashed #536DFE;\n  border-top: none;\n  border-bottom: 1px dashed #536DFE;\n}\n.select-position__center-bottom-item[_ngcontent-%COMP%] {\n  border-left: 1px dashed #536DFE;\n  border-right: 1px dashed #536DFE;\n  border-top: 1px dashed #536DFE;\n  border-bottom: none;\n}\n.select-position__item-top[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  border-bottom: 1px dashed #536DFE;\n}\n.select-position__item-bottom[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: 1px dashed #536DFE;\n  border-bottom: none;\n}\n.select-position__title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  color: #c0caff;\n  font-size: 21px;\n  font-weight: 400;\n}\n.mat-card-content[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child.position-buttons-wrapper {\n  margin-top: 33px;\n}\n.position-button[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  margin-bottom: 8px;\n}\n.position-button_blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.position-button_pink[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n.position-button_green[_ngcontent-%COMP%] {\n  background-color: #3CD4A0;\n}\n.code-block[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n@media (max-width: 576px) {\n  .code-block[_ngcontent-%COMP%] {\n    margin-top: 33px;\n  }\n}\n.code-wrapper[_ngcontent-%COMP%] {\n  margin-top: 49px;\n  font-size: 11.2px;\n  display: block;\n  overflow-x: auto;\n  padding: 7px;\n  color: #4A4A4A;\n  background: #F3F5FF;\n  height: 277px;\n  overflow-y: hidden;\n}\n.code[_ngcontent-%COMP%] {\n  text-wrap: none;\n}\n.link[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.notification[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n  height: 45px;\n  border-radius: 45px;\n}\n.notification_solid-pink[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n.notification_solid-blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.notification_solid-green[_ngcontent-%COMP%] {\n  background-color: #3CD4A0;\n}\n.notification_solid-yellow[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n}\n.notification_solid-violet[_ngcontent-%COMP%] {\n  background-color: #9013FE;\n}\n.notification_transparent-pink[_ngcontent-%COMP%] {\n  background-color: rgba(255, 92, 147, 0.15);\n}\n.notification_transparent-blue[_ngcontent-%COMP%] {\n  background-color: rgba(83, 109, 254, 0.15);\n}\n.notification_transparent-green[_ngcontent-%COMP%] {\n  background-color: rgba(60, 212, 160, 0.15);\n}\n.notification_transparent-yellow[_ngcontent-%COMP%] {\n  background-color: rgba(255, 194, 96, 0.15);\n}\n.notification_transparent-violet[_ngcontent-%COMP%] {\n  background-color: rgba(144, 19, 254, 0.15);\n}\n.notification__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.notification__title_white[_ngcontent-%COMP%] {\n  color: white;\n}\n.notification__icon-wrapper[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notification__icon-wrapper_transparent[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n}\n.notification__icon-wrapper_transparent-pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.notification__icon-wrapper_transparent-blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.notification__icon-wrapper_transparent-green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.notification__icon-wrapper_transparent-yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.notification__icon-wrapper_transparent-violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n}\n.notification__icon-wrapper_solid-pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.notification__icon-wrapper_solid-blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.notification__icon-wrapper_solid-green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.notification__icon-wrapper_solid-yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.notification__icon-wrapper_solid-violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n}\n.notification__icon-wrapper-circle[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 45px;\n  margin-right: 16px;\n}\n.notification__icon-wrapper-circle_transparent-pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n  background-color: rgba(255, 92, 147, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n  background-color: rgba(83, 109, 254, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n  background-color: rgba(60, 212, 160, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n  background-color: rgba(255, 194, 96, 0.15);\n}\n.notification__icon-wrapper-circle_transparent-violet[_ngcontent-%COMP%] {\n  color: #9013FE;\n  background-color: rgba(144, 19, 254, 0.15);\n}\n.icon-rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2NvbnRhaW5lcnMvbm90aWZpY2F0aW9uLXBhZ2UvRDpcXFByb2plY3RzXFxhbmd1bGFyLW1hdGVyaWFsLWFkbWluL3NyY1xcYXBwXFxwYWdlc1xcbm90aWZpY2F0aW9uXFxjb250YWluZXJzXFxub3RpZmljYXRpb24tcGFnZVxcbm90aWZpY2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL25vdGlmaWNhdGlvbi1wYWdlL25vdGlmaWNhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vY29udGFpbmVycy9ub3RpZmljYXRpb24tcGFnZS9EOlxcUHJvamVjdHNcXGFuZ3VsYXItbWF0ZXJpYWwtYWRtaW4vc3JjXFxhcHBcXHN0eWxlc1xcY29sb3JzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL25vdGlmaWNhdGlvbi1wYWdlL0Q6XFxQcm9qZWN0c1xcYW5ndWxhci1tYXRlcmlhbC1hZG1pbi9zcmNcXGFwcFxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0FDSEY7QURLRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNKSjtBRE1JO0VBSkY7SUFLSSxlQUFBO0VDSEo7QUFDRjtBRE1FO0VBQ0UsYUFBQTtFQUNBLGlGQUFBO0FDSko7QURNSTtFQUpGO0lBS0ksZUFBQTtJQUNBLGlCQUFBO0VDSEo7QUFDRjtBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKSjtBRE1JO0VBSkY7SUFLSSxtQkFBQTtFQ0hKO0FBQ0Y7QURNRTtFQUNFLGlGQUFBO0VBQ0EsV0FBQTtBQ0pKO0FEU0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ05GO0FEUUU7RUFURjtJQVVJLFdBQUE7RUNMRjtBQUNGO0FET0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNMSjtBRFFFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJFbEVTO0VGbUVULFNBQUE7RUFDQSxhQUFBO0FDTko7QURRSTtFQUNFLHlCRTlEQTtFRitEQSxlQUFBO0FDTk47QURVRTtFQUVFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDVEo7QURZRTtFQUVFLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURjRTtFQUVFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDYko7QURnQkU7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0V0R0U7RUZ1R0YsZUczR1E7RUg0R1IsZ0JHckhTO0FGcUdiO0FEb0JBO0VBQ0UsZ0JBQUE7QUNqQkY7QURvQkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDakJGO0FEbUJFO0VBQ0UseUJFbElHO0FEaUhQO0FEb0JFO0VBQ0UseUJFbElHO0FEZ0hQO0FEcUJFO0VBQ0UseUJFcElJO0FEaUhSO0FEdUJBO0VBQ0UsZ0JBQUE7QUNwQkY7QURzQkU7RUFIRjtJQUlJLGdCQUFBO0VDbkJGO0FBQ0Y7QURzQkE7RUFDRSxnQkFBQTtFQUNBLGlCR3BKTTtFSHFKTixjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0VuSlU7RUZvSlYsbUJFMUpXO0VGMkpYLGFBQUE7RUFDQSxrQkFBQTtBQ25CRjtBRHNCQTtFQUNFLGVBQUE7QUNuQkY7QURzQkE7RUFDRSxjRXZLSztBRG9KUDtBRHNCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ25CRjtBRHNCSTtFQUNFLHlCRWhMQztBRDRKUDtBRHVCSTtFQUNFLHlCRXhMQztBRG1LUDtBRHdCSTtFQUNFLHlCRXRMRTtBRGdLUjtBRHlCSTtFQUNFLHlCRWpNRztBRDBLVDtBRDBCSTtFQUNFLHlCRTdMRztBRHFLVDtBRDZCSTtFQUNFLDBDRWxMSTtBRHVKVjtBRDhCSTtFQUNFLDBDRXJMSTtBRHlKVjtBRCtCSTtFQUNFLDBDRXhMSztBRDJKWDtBRGdDSTtFQUNFLDBDRTNMTTtBRDZKWjtBRGlDSTtFQUNFLDBDRTlMTTtBRCtKWjtBRG1DRTtFQUNFLFNBQUE7QUNqQ0o7QURtQ0k7RUFDRSxZRTFORTtBRHlMUjtBRHFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNuQ0o7QURxQ0k7RUFDRSxnQkU5Tks7QUQyTFg7QURxQ007RUFDRSxjRTdPRDtBRDBNUDtBRHNDTTtFQUNFLGNFclBEO0FEaU5QO0FEdUNNO0VBQ0UsY0VuUEE7QUQ4TVI7QUR3Q007RUFDRSxjRTlQQztBRHdOVDtBRHlDTTtFQUNFLGNFMVBDO0FEbU5UO0FENENNO0VBQ0UsY0VuUUQ7QUR5TlA7QUQ2Q007RUFDRSxjRTNRRDtBRGdPUDtBRDhDTTtFQUNFLGNFelFBO0FENk5SO0FEK0NNO0VBQ0UsY0VwUkM7QUR1T1Q7QURnRE07RUFDRSxjRWhSQztBRGtPVDtBRG1ERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDakRKO0FEb0RNO0VBQ0UsY0VuU0Q7RUZvU0MsMENFaFJFO0FEOE5WO0FEcURNO0VBQ0UsY0U1U0Q7RUY2U0MsMENFcFJFO0FEaU9WO0FEc0RNO0VBQ0UsY0UzU0E7RUY0U0EsMENFeFJHO0FEb09YO0FEdURNO0VBQ0UsY0V2VEM7RUZ3VEQsMENFNVJJO0FEdU9aO0FEd0RNO0VBQ0UsY0VwVEM7RUZxVEQsMENFaFNJO0FEME9aO0FENERBO0VBQ0UseUJBQUE7QUN6REYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vY29udGFpbmVycy9ub3RpZmljYXRpb24tcGFnZS9ub3RpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZm9udFwiO1xyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcblxyXG4gICZfX2l0ZW0td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fZmlyc3QtaXRlbS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgJHNoYWRvdy13aGl0ZSwgMCAzcHggM3B4IC0ycHggJHNoYWRvdy1ncmV5LCAwIDFweCA4cHggMCAkc2hhZG93LWRhcmstZ3JleTtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ZpcnN0LWl0ZW0tZWxlbWVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgcGFkZGluZzogMCAwIDE2cHggMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICNFOEVBRkMsIDAgM3B4IDNweCAtMnB4ICNCMkIyQjIxQSwgMCAxcHggOHB4IDAgIzlBOUE5QTFBO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdC1wb3NpdGlvbiB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbXMtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS13aGl0ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2t5O1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jZW50ZXItdG9wLWl0ZW0ge1xyXG4gICAgQGV4dGVuZCAuc2VsZWN0LXBvc2l0aW9uX19pdGVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgJGJsdWU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgJGJsdWU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfX2NlbnRlci1ib3R0b20taXRlbSB7XHJcbiAgICBAZXh0ZW5kIC5zZWxlY3QtcG9zaXRpb25fX2l0ZW07XHJcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgJGJsdWU7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbS10b3Age1xyXG4gICAgQGV4dGVuZCAuc2VsZWN0LXBvc2l0aW9uX19pdGVtO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0tYm90dG9tIHtcclxuICAgIEBleHRlbmQgLnNlbGVjdC1wb3NpdGlvbl9faXRlbTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAkYmx1ZTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogJHNreTtcclxuICAgIGZvbnQtc2l6ZTogJGZzLW1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkLnBvc2l0aW9uLWJ1dHRvbnMtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMzNweDtcclxufVxyXG5cclxuLnBvc2l0aW9uLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICZfYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfcGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICB9XHJcblxyXG4gICZfZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmNvZGUtYmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgIG1hcmdpbi10b3A6IDMzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29kZS13cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiA0OXB4O1xyXG4gIGZvbnQtc2l6ZTogJGZzLXhzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGNvbG9yOiAkZGFyay1ncmV5O1xyXG4gIGJhY2tncm91bmQ6ICRibHVlLXdoaXRlO1xyXG4gIGhlaWdodDogMjc3cHg7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgdGV4dC13cmFwOiBub25lO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICRibHVlO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuXHJcbiAgJl9zb2xpZCB7XHJcbiAgICAmLXBpbmsge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICAgIH1cclxuXHJcbiAgICAmLWJsdWUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLWdyZWVuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgICYteWVsbG93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcclxuICAgIH1cclxuXHJcbiAgICAmLXZpb2xldCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX3RyYW5zcGFyZW50IHtcclxuICAgICYtcGluayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rLTE1O1xyXG4gICAgfVxyXG5cclxuICAgICYtYmx1ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLTE1O1xyXG4gICAgfVxyXG5cclxuICAgICYtZ3JlZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tMTU7XHJcbiAgICB9XHJcblxyXG4gICAgJi15ZWxsb3cge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LTE1O1xyXG4gICAgfVxyXG5cclxuICAgICYtdmlvbGV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHZpb2xldC0xNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmX3doaXRlIHtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24td3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJl90cmFuc3BhcmVudCB7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGUtODA7XHJcblxyXG4gICAgICAmLXBpbmsge1xyXG4gICAgICAgIGNvbG9yOiAkcGluaztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ibHVlIHtcclxuICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtZ3JlZW4ge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYteWVsbG93IHtcclxuICAgICAgICBjb2xvcjogJHllbGxvdztcclxuICAgICAgfVxyXG5cclxuICAgICAgJi12aW9sZXQge1xyXG4gICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9zb2xpZCB7XHJcbiAgICAgICYtcGluayB7XHJcbiAgICAgICAgY29sb3I6ICRwaW5rO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWJsdWUge1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ncmVlbiB7XHJcbiAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi15ZWxsb3cge1xyXG4gICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXZpb2xldCB7XHJcbiAgICAgICAgY29sb3I6ICR2aW9sZXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24td3JhcHBlci1jaXJjbGUge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuXHJcbiAgICAmX3RyYW5zcGFyZW50IHtcclxuICAgICAgJi1waW5rIHtcclxuICAgICAgICBjb2xvcjogJHBpbms7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBpbmstMTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtYmx1ZSB7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLTE1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWdyZWVuIHtcclxuICAgICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JGdyZWVuLTE1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXllbGxvdyB7XHJcbiAgICAgICAgY29sb3I6ICR5ZWxsb3c7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdy0xNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi12aW9sZXQge1xyXG4gICAgICAgIGNvbG9yOiAkdmlvbGV0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2aW9sZXQtMTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pY29uLXJvdGF0ZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4iLCIucGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogMCA4cHg7XG59XG4ucGFnZS1jb250ZW50X19pdGVtLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5wYWdlLWNvbnRlbnRfX2l0ZW1zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFnZS1jb250ZW50X19pdGVtcy13cmFwcGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi5wYWdlLWNvbnRlbnRfX2ZpcnN0LWl0ZW0td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDExcHggMCAjRThFQUZDLCAwIDNweCAzcHggLTJweCAjQjJCMkIyMUEsIDAgMXB4IDhweCAwICM5QTlBOUExQTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFnZS1jb250ZW50X19maXJzdC1pdGVtLXdyYXBwZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuLnBhZ2UtY29udGVudF9fZmlyc3QtaXRlbS1lbGVtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFnZS1jb250ZW50X19maXJzdC1pdGVtLWVsZW1lbnQge1xuICAgIHBhZGRpbmc6IDAgMCAxNnB4IDA7XG4gIH1cbn1cbi5wYWdlLWNvbnRlbnRfX2l0ZW0ge1xuICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgI0U4RUFGQywgMCAzcHggM3B4IC0ycHggI0IyQjJCMjFBLCAwIDFweCA4cHggMCAjOUE5QTlBMUE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VsZWN0LXBvc2l0aW9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM1MzZERkU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VsZWN0LXBvc2l0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnNlbGVjdC1wb3NpdGlvbl9faXRlbXMtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2VsZWN0LXBvc2l0aW9uX19pdGVtLCAuc2VsZWN0LXBvc2l0aW9uX19pdGVtLWJvdHRvbSwgLnNlbGVjdC1wb3NpdGlvbl9faXRlbS10b3AsIC5zZWxlY3QtcG9zaXRpb25fX2NlbnRlci1ib3R0b20taXRlbSwgLnNlbGVjdC1wb3NpdGlvbl9fY2VudGVyLXRvcC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNUZGO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2VsZWN0LXBvc2l0aW9uX19pdGVtLmFjdGl2ZSwgLmFjdGl2ZS5zZWxlY3QtcG9zaXRpb25fX2l0ZW0tYm90dG9tLCAuYWN0aXZlLnNlbGVjdC1wb3NpdGlvbl9faXRlbS10b3AsIC5hY3RpdmUuc2VsZWN0LXBvc2l0aW9uX19jZW50ZXItYm90dG9tLWl0ZW0sIC5hY3RpdmUuc2VsZWN0LXBvc2l0aW9uX19jZW50ZXItdG9wLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjYWZmO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc2VsZWN0LXBvc2l0aW9uX19jZW50ZXItdG9wLWl0ZW0ge1xuICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjNTM2REZFO1xuICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgIzUzNkRGRTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNTM2REZFO1xufVxuLnNlbGVjdC1wb3NpdGlvbl9fY2VudGVyLWJvdHRvbS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgIzUzNkRGRTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkICM1MzZERkU7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzUzNkRGRTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5zZWxlY3QtcG9zaXRpb25fX2l0ZW0tdG9wIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNTM2REZFO1xufVxuLnNlbGVjdC1wb3NpdGlvbl9faXRlbS1ib3R0b20ge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM1MzZERkU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uc2VsZWN0LXBvc2l0aW9uX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2MwY2FmZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LWNhcmQtY29udGVudCA+IDpsYXN0LWNoaWxkLnBvc2l0aW9uLWJ1dHRvbnMtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDMzcHg7XG59XG5cbi5wb3NpdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucG9zaXRpb24tYnV0dG9uX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2REZFO1xufVxuLnBvc2l0aW9uLWJ1dHRvbl9waW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbn1cbi5wb3NpdGlvbi1idXR0b25fZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NENEEwO1xufVxuXG4uY29kZS1ibG9jayB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNvZGUtYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDMzcHg7XG4gIH1cbn1cblxuLmNvZGUtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDQ5cHg7XG4gIGZvbnQtc2l6ZTogMTEuMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogN3B4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgYmFja2dyb3VuZDogI0YzRjVGRjtcbiAgaGVpZ2h0OiAyNzdweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uY29kZSB7XG4gIHRleHQtd3JhcDogbm9uZTtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzUzNkRGRTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG59XG4ubm90aWZpY2F0aW9uX3NvbGlkLXBpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xufVxuLm5vdGlmaWNhdGlvbl9zb2xpZC1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNkRGRTtcbn1cbi5ub3RpZmljYXRpb25fc29saWQtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NENEEwO1xufVxuLm5vdGlmaWNhdGlvbl9zb2xpZC15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjYwO1xufVxuLm5vdGlmaWNhdGlvbl9zb2xpZC12aW9sZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAxM0ZFO1xufVxuLm5vdGlmaWNhdGlvbl90cmFuc3BhcmVudC1waW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xufVxuLm5vdGlmaWNhdGlvbl90cmFuc3BhcmVudC1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xufVxuLm5vdGlmaWNhdGlvbl90cmFuc3BhcmVudC1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcbn1cbi5ub3RpZmljYXRpb25fdHJhbnNwYXJlbnQteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xufVxuLm5vdGlmaWNhdGlvbl90cmFuc3BhcmVudC12aW9sZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XG59XG4ubm90aWZpY2F0aW9uX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5ub3RpZmljYXRpb25fX3RpdGxlX3doaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5vdGlmaWNhdGlvbl9faWNvbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXJfdHJhbnNwYXJlbnQge1xuICBjb2xvcjogI0ZGRkZGRjgwO1xufVxuLm5vdGlmaWNhdGlvbl9faWNvbi13cmFwcGVyX3RyYW5zcGFyZW50LXBpbmsge1xuICBjb2xvcjogI2ZmNDA4MTtcbn1cbi5ub3RpZmljYXRpb25fX2ljb24td3JhcHBlcl90cmFuc3BhcmVudC1ibHVlIHtcbiAgY29sb3I6ICM1MzZERkU7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXJfdHJhbnNwYXJlbnQtZ3JlZW4ge1xuICBjb2xvcjogIzNDRDRBMDtcbn1cbi5ub3RpZmljYXRpb25fX2ljb24td3JhcHBlcl90cmFuc3BhcmVudC15ZWxsb3cge1xuICBjb2xvcjogI2ZmYzI2MDtcbn1cbi5ub3RpZmljYXRpb25fX2ljb24td3JhcHBlcl90cmFuc3BhcmVudC12aW9sZXQge1xuICBjb2xvcjogIzkwMTNGRTtcbn1cbi5ub3RpZmljYXRpb25fX2ljb24td3JhcHBlcl9zb2xpZC1waW5rIHtcbiAgY29sb3I6ICNmZjQwODE7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXJfc29saWQtYmx1ZSB7XG4gIGNvbG9yOiAjNTM2REZFO1xufVxuLm5vdGlmaWNhdGlvbl9faWNvbi13cmFwcGVyX3NvbGlkLWdyZWVuIHtcbiAgY29sb3I6ICMzQ0Q0QTA7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXJfc29saWQteWVsbG93IHtcbiAgY29sb3I6ICNmZmMyNjA7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXJfc29saWQtdmlvbGV0IHtcbiAgY29sb3I6ICM5MDEzRkU7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXItY2lyY2xlIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5ub3RpZmljYXRpb25fX2ljb24td3JhcHBlci1jaXJjbGVfdHJhbnNwYXJlbnQtcGluayB7XG4gIGNvbG9yOiAjZmY0MDgxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXItY2lyY2xlX3RyYW5zcGFyZW50LWJsdWUge1xuICBjb2xvcjogIzUzNkRGRTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xufVxuLm5vdGlmaWNhdGlvbl9faWNvbi13cmFwcGVyLWNpcmNsZV90cmFuc3BhcmVudC1ncmVlbiB7XG4gIGNvbG9yOiAjM0NENEEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXItY2lyY2xlX3RyYW5zcGFyZW50LXllbGxvdyB7XG4gIGNvbG9yOiAjZmZjMjYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XG59XG4ubm90aWZpY2F0aW9uX19pY29uLXdyYXBwZXItY2lyY2xlX3RyYW5zcGFyZW50LXZpb2xldCB7XG4gIGNvbG9yOiAjOTAxM0ZFO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XG59XG5cbi5pY29uLXJvdGF0ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59IiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCIkZnctbGlnaHRlcjogNDAwO1xyXG4kZnctbm9ybWFsOiA1MDA7XHJcbiRmdy1ib2xkOiA2MDA7XHJcblxyXG5cclxuJGZzLXhzOiAxMS4ycHg7XHJcbiRmcy1zbWFsbDogMTRweDtcclxuJGZzLW5vcm1hbDogMTZweDtcclxuJGZzLXJlZ3VsYXI6IDE4cHg7XHJcbiRmcy1tZWRpdW06IDIxcHg7XHJcbiRmcy1sYXJnZTogMjRweDtcclxuJGZzLXhsOiAyOHB4O1xyXG4kZnMteHhsOiAzOHB4O1xyXG4kZnMteHh4bDogNDJweDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-page',
                templateUrl: './notification-page.component.html',
                styleUrls: ['./notification-page.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/notification/containers/success-toast/success-toast.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/notification/containers/success-toast/success-toast.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SuccessToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessToastComponent", function() { return SuccessToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class SuccessToastComponent extends ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"] {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
}
SuccessToastComponent.ɵfac = function SuccessToastComponent_Factory(t) { return new (t || SuccessToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"])); };
SuccessToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessToastComponent, selectors: [["app-success-toast"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 0, consts: [[1, "toastr-wrapper"], [1, "toastr-content"], [1, "toastr-wrapper-icon"], [1, "toastr-icon"], [1, "toastr-content__title"], [1, "toastr-icon", 3, "click"]], template: function SuccessToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The item was shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessToastComponent_Template_mat_icon_click_8_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".toastr-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.toastr-wrapper-icon[_ngcontent-%COMP%] {\n  color: #FFFFFF80;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.toastr-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toastr-content__title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.toastr-icon[_ngcontent-%COMP%] {\n  padding: 0;\n  width: auto;\n  height: auto;\n}\n\n[_nghost-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 16px 0 6px 0;\n  pointer-events: all;\n  cursor: pointer;\n  width: 257px;\n  color: white;\n  display: flex;\n  align-items: center;\n  background-color: #3CD4A0;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL2NvbnRhaW5lcnMvc3VjY2Vzcy10b2FzdC9EOlxcUHJvamVjdHNcXGFuZ3VsYXItbWF0ZXJpYWwtYWRtaW4vc3JjXFxhcHBcXHBhZ2VzXFxub3RpZmljYXRpb25cXGNvbnRhaW5lcnNcXHN1Y2Nlc3MtdG9hc3RcXHN1Y2Nlc3MtdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL3N1Y2Nlc3MtdG9hc3QvRDpcXFByb2plY3RzXFxhbmd1bGFyLW1hdGVyaWFsLWFkbWluL3NyY1xcYXBwXFxzdHlsZXNcXHRvYXNydC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vY29udGFpbmVycy9zdWNjZXNzLXRvYXN0L3N1Y2Nlc3MtdG9hc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL3N1Y2Nlc3MtdG9hc3QvRDpcXFByb2plY3RzXFxhbmd1bGFyLW1hdGVyaWFsLWFkbWluL3NyY1xcYXBwXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDQUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDREY7O0FGRUE7RUNpQkUsZ0JFUFM7RUZRVCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZkY7O0FGSEE7RUNzQkUsYUFBQTtFQUNBLG1CQUFBO0FDZkY7O0FGTEU7RUN3QkEsU0FBQTtBQ2hCRjs7QUZIQTtFQ3VCRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNoQkY7O0FGTEE7RUNiRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUVQTTtFRlFOLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRVpNO0VGYU4sWUFBQTtBQ3NCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9jb250YWluZXJzL3N1Y2Nlc3MtdG9hc3Qvc3VjY2Vzcy10b2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL3RvYXNydCc7XHJcblxyXG4udG9hc3RyLXdyYXBwZXIge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci13cmFwcGVyO1xyXG59XHJcblxyXG4udG9hc3RyLXdyYXBwZXItaWNvbiB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyLXdyYXBwZXItaWNvbjtcclxufVxyXG5cclxuLnRvYXN0ci1jb250ZW50IHtcclxuICBAaW5jbHVkZSB0b2FzdHItY29udGVudDtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgQGluY2x1ZGUgdG9hc3RyLWNvbnRlbnQtdGl0bGU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9hc3RyLWljb24ge1xyXG4gIEBpbmNsdWRlIHRvYXN0ci1pY29uO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgQGluY2x1ZGUgdG9hc3RyKCRncmVlbik7XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuQG1peGluIHRvYXN0ci13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyKCRjb2xvcikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMTZweCAwIDZweCAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAyNTdweDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLXdyYXBwZXItaWNvbiB7XHJcbiAgY29sb3I6JHdoaXRlLTgwO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogNDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiB0b2FzdHItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdG9hc3RyLWNvbnRlbnQtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1peGluIHRvYXN0ci1pY29uIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iLCIudG9hc3RyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9hc3RyLXdyYXBwZXItaWNvbiB7XG4gIGNvbG9yOiAjRkZGRkZGODA7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG9hc3RyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvYXN0ci1jb250ZW50X190aXRsZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRvYXN0ci1pY29uIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTZweCAwIDZweCAwO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyNTdweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NENEEwO1xuICBoZWlnaHQ6IDQ1cHg7XG59IiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success-toast',
                templateUrl: './success-toast.component.html',
                styleUrls: ['./success-toast.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))
                    ])
                ],
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./src/app/pages/notification/containers/index.ts");





const routes = [
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["NotificationPageComponent"]
    }
];
class NotificationRoutingModule {
}
NotificationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationRoutingModule });
NotificationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NotificationRoutingModule_Factory(t) { return new (t || NotificationRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/pages/notification/containers/index.ts");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notification/notification-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");










class NotificationModule {
}
NotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationModule_Factory(t) { return new (t || NotificationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_7__["NotificationRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_containers__WEBPACK_IMPORTED_MODULE_6__["NotificationPageComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_6__["SuccessToastComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_6__["ErrorToastrComponent"],
        _containers__WEBPACK_IMPORTED_MODULE_6__["InfoToastrComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_7__["NotificationRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _containers__WEBPACK_IMPORTED_MODULE_6__["NotificationPageComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_6__["SuccessToastComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_6__["ErrorToastrComponent"],
                    _containers__WEBPACK_IMPORTED_MODULE_6__["InfoToastrComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _notification_routing_module__WEBPACK_IMPORTED_MODULE_7__["NotificationRoutingModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module-es2015.js.map