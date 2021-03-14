(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\S&S\SandS\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:3000",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EBpI":
/*!******************************************************************************!*\
  !*** ./src/app/_components/production-detail/production-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionDetailComponent", function() { return ProductionDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_soap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/soap.service */ "KOn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");





function ProductionDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductionDetailComponent_div_2_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.soap.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductionDetailComponent_div_2_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.soap.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductionDetailComponent_div_2_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductionDetailComponent_div_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductionDetailComponent_div_2_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(ctx_r6.soap.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r0.soap.name), " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.soap.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.soap.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.soap.description);
} }
class ProductionDetailComponent {
    constructor(route, SoapService, location) {
        this.route = route;
        this.SoapService = SoapService;
        this.location = location;
    }
    ngOnInit() {
        this.getSoapById();
    }
    getSoapById() {
        const id = +this.route.snapshot.paramMap.get('id'); //+ -> parseInt()
        this.SoapService.getSoapById(id).subscribe(soaps => {
            this.soap = soaps;
            console.log(soaps);
        });
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.SoapService.updateCar(this.soap).subscribe(() => this.goBack());
    }
    delete(soapId) {
        this.SoapService.deleteSoap(soapId).subscribe(() => this.goBack());
    }
}
ProductionDetailComponent.ɵfac = function ProductionDetailComponent_Factory(t) { return new (t || ProductionDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_soap_service__WEBPACK_IMPORTED_MODULE_2__["SoapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
ProductionDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductionDetailComponent, selectors: [["app-production-detail"]], decls: 3, vars: 1, consts: [["role", "alert", 1, "alert", "alert-danger", "text-center", "p-5", "display-3"], [4, "ngIf"], [1, "container", "oth"], [1, "text-center", "mt-4"], ["placeholder", "name", 1, "col", 3, "ngModel", "ngModelChange"], ["placeholder", "description", 1, "col", 3, "ngModel", "ngModelChange"], [1, "container", "text-center"], [1, "ml-2", "btn-primary", 3, "click"]], template: function ProductionDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Az oldal karbantart\u00E1s allat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductionDetailComponent_div_2_Template, 22, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: [".oth[_ngcontent-%COMP%] {\r\n    margin-bottom: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rpb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicHJvZHVjdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdGgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "KOn8":
/*!*******************************************!*\
  !*** ./src/app/_services/soap.service.ts ***!
  \*******************************************/
/*! exports provided: SoapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoapService", function() { return SoapService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






//fejléc a kérésekhez
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class SoapService {
    constructor(http) {
        this.http = http;
    }
    //Lekérdezések API végpontról
    getAllSoap() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/posts`, httpOptions);
    }
    //Id alapjan
    getSoapById(SoapId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/posts/${SoapId}`, httpOptions);
    }
    //add soap
    addSoap(soaps) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/posts`, soaps, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((soaps) => console.log(`inserted soap = ${JSON.stringify(soaps)}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => error));
    }
    //update
    updateCar(soaps) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/posts/${soaps.id}`, soaps, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(updateSoap => console.log(`updated soap = ${JSON.stringify(updateSoap)}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => error));
    }
    //Delete soap
    deleteSoap(SoapId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/posts/${SoapId}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(_ => console.log(`Deleted soap with id = ${SoapId}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)));
    }
}
SoapService.ɵfac = function SoapService_Factory(t) { return new (t || SoapService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SoapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SoapService, factory: SoapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ndrk":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: DashboardComponent, ProductionComponent, RelationComponent, AboutComponent, AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "xOFu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _production_production_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./production/production.component */ "U75v");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductionComponent", function() { return _production_production_component__WEBPACK_IMPORTED_MODULE_1__["ProductionComponent"]; });

/* harmony import */ var _relation_relation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./relation/relation.component */ "VJ0o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelationComponent", function() { return _relation_relation_component__WEBPACK_IMPORTED_MODULE_2__["RelationComponent"]; });

/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "brYQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]; });

/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "ceBG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"]; });








/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



class AppComponent {
    constructor() {
        this.title = 'SandS';
    }
    hamburMenu() {
        //Change the click
        var p = document.getElementById("myTopNav");
        p.classList.toggle("change");
        //Mobile active button
        var responsiveMenu = document.getElementById('navmain');
        if (responsiveMenu.style.display === 'block') {
            responsiveMenu.style.display = 'none';
        }
        else {
            responsiveMenu.style.display = 'block';
        }
    }
    ;
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 56, vars: 0, consts: [[1, "navbar", "col-lg-12", "col-md-12", "col-sm-12", "navbar-expand-sm", "bg-white"], ["href", "#", 1, "navbar-brand"], ["id", "myTopNav", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navmain", 1, "navbar-toggler"], [1, "line1"], [1, "line2"], [1, "line3"], ["id", "navmain", 1, "main-nav", "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["routerLinkActive", "active", 1, "nav-item", "mr-1", "mt-1"], ["routerLink", "/dashboard", 1, "nav-link"], ["routerLink", "/production", 1, "nav-link"], ["routerLink", "/relation", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/account", 1, "nav-link"], [1, "nav-item", "mr-1", "mt-1"], [1, "footer-basic"], ["id", "myBottomNav", 1, "social"], ["href", "https://www.facebook.com/", "target", "_blank"], ["name", "logo-facebook"], ["href", "#"], ["name", "logo-instagram"], ["name", "logo-pinterest"], ["name", "logo-twitter"], [1, "list-inline"], [1, "list-inline-item"], ["id", "google_map", "onclick", "google()", 1, "list-inline-item"], [1, "copyright"], ["id", "lablec"], ["id", "google_footter", 1, "mapouter"], [1, "gmap_canvas"], ["id", "gmap_canvas", "src", "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"], ["href", "https://embedgooglemap.net/maps/54"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_2_listener() { return ctx.hamburMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "F\u0151oldal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Term\u00E9keink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Kapcsolatok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "R\u00F3lunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Regisztr\u00E1ci\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bel\u00E9p\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ion-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "El\u00E9rhet\u0151s\u00E9gek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Rolunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Google Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00A9 S&S 2010-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "iframe", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap');\r\n\r\n\r\n@keyframes mymove {\r\n  from {top: -100px;}\r\n  to {top: 0px; background-color: transparent;}\r\n}\r\n@keyframes slide-in-left {\r\n    0% {\r\n      transform: translateX(-1000px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n@keyframes slide-in-right {\r\n    0% {\r\n      transform: translateX(1000px);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n@keyframes slide-in-fwd-left {\r\n  0% {\r\n    transform: translateZ(-1400px) translateX(-1000px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateZ(0) translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes pulsate-bck {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(0.9);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes color-change-2x {\r\n  0% {\r\n    background: rgba(255, 255, 255, 0.671);\r\n  }\r\n  100% {\r\n    background: rgb(255, 255, 255);\r\n  }\r\n}\r\n\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    overflow-x: hidden;\r\n    background-color: rgb(255, 214, 196);\r\n}\r\n#szoveg[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.herobox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 265px 0px 300px 0px\r\n}\r\n\r\n@media screen and (max-width:1270px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 100px;\r\n        padding: 265px 0px 0px 0px;\r\n  }\r\n}\r\n@media screen and (max-width:750px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 170px;\r\n        padding: 265px 0px 0px 0px;\r\n  }\r\n}\r\n@media screen and (max-width:650px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 220px;\r\n        padding: 265px 0px 0px 0px;\r\n  }\r\n}\r\n@media screen and (max-width:425px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 240px;\r\n        padding: 265px 0px 0px 0px;\r\n        \r\n  }\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n    animation: mymove 2s;\r\n    animation-fill-mode: forwards;\r\n\r\n}\r\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-family: 'Dancing Script', cursive;\r\n    float: center;\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    transform: skewX(-13deg);\r\n    -o-transform: skewX(-13deg);\r\n    -moz-transform: skewX(-13deg);\r\n    -webkit-transform: skewX(-13deg);\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-size: 14px;\r\n    background-color: rgb(255,214,196);\r\n    padding-bottom: 4px;    \r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover {\r\n    font-size: 15px;\r\n    color: rgb(0, 0, 0);\r\n    background-color: rgb(255, 255, 255);\r\n    transition: 0.8s;\r\n    border-bottom: 1px solid rgb(0, 0, 0);\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] {\r\n    color: rgb(0, 0, 0);\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    background-color: rgb(255, 255, 255);  \r\n    border-bottom: 1px solid rgb(0, 0, 0);   \r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 46px;\r\n    height: 32px;\r\n    background-color: rgb(243, 243, 243);\r\n    border: none;\r\n    float: right;\r\n    transform: skewX(-16deg);\r\n    -o-transform: skewX(-16deg);\r\n    -moz-transform: skewX(-16deg);\r\n    -webkit-transform: skewX(-16deg);\r\n}\r\n#myTopNav[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%], .line2[_ngcontent-%COMP%], .line3[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: rgb(0, 0, 0);\r\n    margin-bottom: 4px;\r\n}\r\n.change[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg) translate(-9px, 6px);\r\n    transition: 0.6s;\r\n}\r\n.change[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n.change[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg) translate(-3px, -3px);\r\n    transition: 0.6s;\r\n}\r\n\r\n#hero_text_center[_ngcontent-%COMP%] {\r\n    font-size: 54px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    margin-bottom: 0px;\r\n}\r\n#hero_text_center_two[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n}\r\n@media screen and (max-width:568px) {\r\n  #hero_text_center[_ngcontent-%COMP%] {\r\n        font-size: 34px;\r\n  }\r\n}\r\n@media screen and (max-width:568px) {\r\n  #hero_text_center_two[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n  }\r\n}\r\n.btn[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 214, 196);\r\n    color: black;\r\n    font-size: 18px;\r\n    \r\n}\r\n.btn[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 255, 255);\r\n    color: black;\r\n}\r\n@media screen and (max-width:366px) {\r\n  .btns[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .btns[_ngcontent-%COMP%]:hover {\r\n    background-color: violet;\r\n  }\r\n \r\n }\r\n\r\n.footer-basic[_ngcontent-%COMP%] {\r\n    padding:40px 0;\r\n    background-color:rgba(95, 36, 10, 0.507);\r\n    color:rgb(255, 255, 255);\r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding:0;\r\n    list-style:none;\r\n    text-align:center;\r\n    font-size:18px;\r\n    line-height:1.6;\r\n    margin-bottom:0;\r\n   \r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding:0 10px; \r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color:inherit;\r\n    text-decoration:none;\r\n    opacity:0.8;\r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    opacity:1;\r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n    padding-bottom:25px;\r\n   \r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size:24px;\r\n    width:40px;\r\n    height:40px;\r\n    line-height:45px;\r\n    display:inline-block;\r\n    text-align:center;\r\n    border:1px solid rgb(255, 255, 255);\r\n    margin:0 8px;\r\n    color:inherit;\r\n    opacity:0.65;\r\n    transform: skewX(-16deg);\r\n    -o-transform: skewX(-16deg);\r\n    -moz-transform: skewX(-16deg);\r\n    -webkit-transform: skewX(-16deg);\r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n    opacity:1;\r\n    bottom: 8px;\r\n   \r\n  }\r\n.list-inline[_ngcontent-%COMP%]{\r\n    transform: skewX(-19deg);\r\n    -o-transform: skewX(-19deg);\r\n    -moz-transform: skewX(-19deg);\r\n    -webkit-transform: skewX(-19deg);\r\n    background-color: rgb(0, 0, 0);\r\n  }\r\n.footer-basic[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\r\n    margin-top:15px;\r\n    text-align:center;\r\n    font-size:14px;\r\n    color:rgb(0, 0, 0);\r\n    margin-bottom:0;\r\n  }\r\n.carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n  }\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-height: 300px;\r\n  }\r\n\r\n#google_footter[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n#google_map[_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n  }\r\n#google_map[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    opacity: 1;\r\n  }\r\niframe[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    opacity: 0.88;\r\n  }\r\niframe[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n  }\r\n.mapouter[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n.gmap_canvas[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background: none !important;\r\n  }\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  transform: skewX(-1deg);\r\n  -o-transform: skewX(-1deg);\r\n  -moz-transform: skewX(-1deg);\r\n  -webkit-transform: skewX(-1deg);\r\n  font-size: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwRkFBMEY7QUFDMUYsMkZBQTJGO0FBRjNGLFVBQVU7QUFJViw2QkFBNkI7QUFDN0I7RUFDRSxNQUFNLFdBQVcsQ0FBQztFQUNsQixJQUFJLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQztBQUM5QztBQWNFO0lBQ0U7TUFFVSw4QkFBOEI7TUFDdEMsVUFBVTtJQUNaO0lBQ0E7TUFFVSx3QkFBd0I7TUFDaEMsVUFBVTtJQUNaO0VBQ0Y7QUFjQTtJQUNFO01BRVUsNkJBQTZCO01BQ3JDLFVBQVU7SUFDWjtJQUNBO01BRVUsd0JBQXdCO01BQ2hDLFVBQVU7SUFDWjtFQUNGO0FBRUEsK0JBQStCO0FBYWpDO0VBQ0U7SUFFVSxrREFBa0Q7SUFDMUQsVUFBVTtFQUNaO0VBQ0E7SUFFVSxzQ0FBc0M7SUFDOUMsVUFBVTtFQUNaO0FBQ0Y7QUFDQSw0QkFBNEI7QUFlNUI7RUFDRTtJQUVVLG1CQUFtQjtFQUM3QjtFQUNBO0lBRVUscUJBQXFCO0VBQy9CO0VBQ0E7SUFFVSxtQkFBbUI7RUFDN0I7QUFDRjtBQUVBLHFCQUFxQjtBQVNyQjtFQUNFO0lBQ0Usc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjtBQUNBLFNBQVM7QUFFVCxHQUFHO0FBRUg7O0lBRUksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFFQSxxQkFBcUI7QUFDckI7RUFDRTtRQUNNLGFBQWE7UUFDYiwwQkFBMEI7RUFDaEM7QUFDRjtBQUVBO0VBQ0U7UUFDTSxhQUFhO1FBQ2IsMEJBQTBCO0VBQ2hDO0FBQ0Y7QUFFQTtFQUNFO1FBQ00sYUFBYTtRQUNiLDBCQUEwQjtFQUNoQztBQUNGO0FBRUE7RUFDRTtRQUNNLGFBQWE7UUFDYiwwQkFBMEI7O0VBRWhDO0FBQ0Y7QUFFQSxXQUFXO0FBQ1g7SUFDSSxvQkFBb0I7SUFDcEIsNkJBQTZCOztBQUVqQztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLHFDQUFxQztBQUN6QztBQUVBLGNBQWM7QUFDZDtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxxQ0FBcUM7QUFDekM7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7QUFHQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7O0lBR0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFFSSw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUVJLDhDQUE4QztJQUM5QyxnQkFBZ0I7QUFDcEI7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUVBO0VBQ0U7UUFDTSxlQUFlO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFO1FBQ00sZUFBZTtFQUNyQjtBQUNGO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjtBQUVBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7Q0FFRDtBQUVBLFNBQVM7QUFFVjtJQUNJLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0VBQzFCO0FBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7O0VBRWpCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYjtBQUVBO0lBQ0UsU0FBUztFQUNYO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1COztFQUVyQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEM7QUFFQTtJQUNFLFNBQVM7SUFDVCxXQUFXOztFQUViO0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0VBQ2hDO0FBR0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxpQkFBaUI7RUFDbkI7QUFFQSxjQUFjO0FBQ2Q7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNBO0lBQ0UsVUFBVTtFQUNaO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCO0FBRUY7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkRlZmF1bHQqL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21taXNzaW9uZXI6d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStTYW5zK1BybzppdGFsQDEmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4vKkFuaW1hdGlvbiBrZXlmcmFtZXMgc2xpZGVzKi9cclxuQGtleWZyYW1lcyBteW1vdmUge1xyXG4gIGZyb20ge3RvcDogLTEwMHB4O31cclxuICB0byB7dG9wOiAwcHg7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cclxufVxyXG5cclxuIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBzbGlkZS1pbi1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMDBweCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2xpZGUtaW4tcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qQW5pbWF0aW9uIGtleWZyYW1lcyBzZWN0aW9ucyovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tZndkLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpIHRyYW5zbGF0ZVgoLTEwMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTQwMHB4KSB0cmFuc2xhdGVYKC0xMDAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGUtaW4tZndkLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xNDAwcHgpIHRyYW5zbGF0ZVgoLTEwMDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTQwMHB4KSB0cmFuc2xhdGVYKC0xMDAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbi8qQXJyb3cgYW5pbWF0aW9uIGtleWZyYW1lcyovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZS1iY2sge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBwdWxzYXRlLWJjayB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKlJlY2xhbWVzIGtleWZyYW1lcyovXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgY29sb3ItY2hhbmdlLTJ4IHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgY29sb3ItY2hhbmdlLTJ4IHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG59XHJcbi8qRm9vdGVyKi9cclxuXHJcbi8qKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNCwgMTk2KTtcclxufVxyXG5cclxuI3N6b3ZlZyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZXJvYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMjY1cHggMHB4IDMwMHB4IDBweFxyXG59XHJcblxyXG4vKmhlcm9ib3ggbWVkaWFxdWVyeSovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI3MHB4KSB7XHJcbiAgLmhlcm9ib3gge1xyXG4gICAgICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjY1cHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc1MHB4KSB7XHJcbiAgLmhlcm9ib3gge1xyXG4gICAgICAgIGJvdHRvbTogMTcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjY1cHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY1MHB4KSB7XHJcbiAgLmhlcm9ib3gge1xyXG4gICAgICAgIGJvdHRvbTogMjIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjY1cHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNXB4KSB7XHJcbiAgLmhlcm9ib3gge1xyXG4gICAgICAgIGJvdHRvbTogMjQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjY1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgXHJcbiAgfVxyXG59XHJcblxyXG4vKk1haW5NZW51Ki9cclxuLm5hdmJhcntcclxuICAgIGFuaW1hdGlvbjogbXltb3ZlIDJzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblxyXG59XHJcbi5tYWluLW5hdiBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTNkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBza2V3WCgtMTNkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNrZXdYKC0xM2RlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTEzZGVnKTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMjE0LDE5Nik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4OyAgICBcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLypBY3RpdmUgbWVudSovXHJcbi5uYXZiYXItbmF2Pi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuLm5hdmJhci1uYXY+LmFjdGl2ZSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTsgICBcclxufVxyXG5cclxuLypIYW1idXJnZXIgTWVudSovXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTE2ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2tld1goLTE2ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBza2V3WCgtMTZkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xNmRlZyk7XHJcbn1cclxuXHJcblxyXG4jbXlUb3BOYXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciAubGluZTEsXHJcbi5saW5lMixcclxuLmxpbmUzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuXHJcbi5jaGFuZ2UgLmxpbmUxIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG59XHJcblxyXG4uY2hhbmdlIC5saW5lMiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2hhbmdlIC5saW5lMyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTNweCwgLTNweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0zcHgsIC0zcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxufVxyXG5cclxuLypoZXJvIHRleHQgYW5kIGJ1dHRvbiBvbiB0aGUgdmlkZW8qL1xyXG4jaGVyb190ZXh0X2NlbnRlciB7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4jaGVyb190ZXh0X2NlbnRlcl90d28ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NjhweCkge1xyXG4gICNoZXJvX3RleHRfY2VudGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU2OHB4KSB7XHJcbiAgI2hlcm9fdGV4dF9jZW50ZXJfdHdvIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLCAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTQsIDE5Nik7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmJ0bjpob3ZlciwgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM2NnB4KSB7XHJcbiAgLmJ0bnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuICAuYnRuczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XHJcbiAgfVxyXG4gXHJcbiB9XHJcblxyXG4gLypmb290ZXIqL1xyXG5cclxuLmZvb3Rlci1iYXNpYyB7XHJcbiAgICBwYWRkaW5nOjQwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg5NSwgMzYsIDEwLCAwLjUwNyk7XHJcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYmFzaWMgdWwge1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNjtcclxuICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYmFzaWMgbGkge1xyXG4gICAgcGFkZGluZzowIDEwcHg7IFxyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJhc2ljIHVsIGEge1xyXG4gICAgY29sb3I6aW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgb3BhY2l0eTowLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYmFzaWMgdWwgYTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYmFzaWMgLnNvY2lhbCB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOjI1cHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJhc2ljIC5zb2NpYWwgPiBhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6NDVweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIG1hcmdpbjowIDhweDtcclxuICAgIGNvbG9yOmluaGVyaXQ7XHJcbiAgICBvcGFjaXR5OjAuNjU7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0xNmRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNrZXdYKC0xNmRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2tld1goLTE2ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgtMTZkZWcpO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWJhc2ljIC5zb2NpYWwgPiBhOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGJvdHRvbTogOHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtaW5saW5le1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTlkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBza2V3WCgtMTlkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNrZXdYKC0xOWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTE5ZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvb3Rlci1iYXNpYyAuY29weXJpZ2h0IHtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjpyZ2IoMCwgMCwgMCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdXNlbCAuaXRlbXtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qZ29vZ2xlIG1hcHMqL1xyXG4gICNnb29nbGVfZm9vdHRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjZ29vZ2xlX21hcCB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIFxyXG4gICNnb29nbGVfbWFwOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuODg7XHJcbiAgfVxyXG4gIGlmcmFtZTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAubWFwb3V0ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZ21hcF9jYW52YXMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogc2tld1goLTFkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2tld1goLTFkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBza2V3WCgtMWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xZGVnKTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "U75v":
/*!****************************************************************!*\
  !*** ./src/app/_components/production/production.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionComponent", function() { return ProductionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_soap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/soap.service */ "KOn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







function ProductionComponent_div_11_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Price 50$");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soaps_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/production/", soaps_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](soaps_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](soaps_r2.description);
} }
function ProductionComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductionComponent_div_11_a_1_Template, 9, 3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.soap);
} }
class ProductionComponent {
    constructor(soapService, fb) {
        this.soapService = soapService;
        this.fb = fb;
    }
    ngOnInit() {
        this.createTeamForm();
        this.getSoaps();
    }
    createTeamForm() {
        this.soapForm = this.fb.group({
            soapName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    getSoaps() {
        this.soapService.getAllSoap().subscribe(soap => {
            this.soap = soap.slice(0, 14);
            console.log(soap);
        });
    }
    onSubmit() {
        let obj = {
            name: this.soapForm.value.soapName
        };
        this.soapService.addSoap(obj).subscribe(a => {
            this.getSoaps();
        });
        this.soapForm.reset();
        console.log(this.soapForm);
    }
}
ProductionComponent.ɵfac = function ProductionComponent_Factory(t) { return new (t || ProductionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_soap_service__WEBPACK_IMPORTED_MODULE_2__["SoapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ProductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductionComponent, selectors: [["app-production"]], decls: 12, vars: 2, consts: [["role", "alert", 1, "alert", "alert-danger", "text-center", "p-5", "display-3"], [1, "container", "text-center", "mt-4"], [3, "formGroup", "ngSubmit"], [1, "text-muted"], ["type", "text", "formControlName", "soapName", "required", ""], [1, "ml-2", "btn-primary"], ["class", "grid grid-pad", 4, "ngIf"], [1, "grid", "grid-pad"], ["class", "menu", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "menu", 3, "routerLink"], ["src", "../../../assets/img//action_1.jpg"], [1, "module"], [1, "bg-dark", "text-white"]], template: function ProductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Az oldal karbantart\u00E1s allat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProductionComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add new soap:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductionComponent_div_11_Template, 2, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.soapForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.soap);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RouterLinkDelegate"]], styles: ["img[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  height: 180px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 20px 20px 20px 20px;\r\n    margin: 10px 10px 10px 10px;\r\n  }\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n  }\r\n\r\n.module[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: rgb(0, 0, 0);\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: rgb(255, 189, 161);\r\n    border-radius: 2px;\r\n  \r\n  }\r\n\r\n.module[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n  \r\n  \r\n  }\r\n\r\n.grid-pad[_ngcontent-%COMP%] {\r\n    margin-bottom: 30%;\r\n    margin-top: 5%;\r\n  }\r\n\r\n@media (max-width: 600px) {\r\n    .module[_ngcontent-%COMP%] {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n\r\n@media (max-width: 1024px) {\r\n    .grid[_ngcontent-%COMP%] {\r\n      margin: 0;\r\n    }\r\n    .module[_ngcontent-%COMP%] {\r\n      min-width: 60px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7O0FBRTVDO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0VBQzdCOztBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsa0JBQWtCOztFQUVwQjs7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxlQUFlOzs7RUFHakI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGdCQUFnQixFQUFFO0VBQ3RCOztBQUNBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRiIsImZpbGUiOiJwcm9kdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbn1cclxuLm1lbnUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubW9kdWxlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCAxNjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIFxyXG4gIH1cclxuICAubW9kdWxlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICBcclxuICB9XHJcbiAgLmdyaWQtcGFkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1vZHVsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgbWF4LWhlaWdodDogNzVweDsgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZ3JpZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5tb2R1bGUge1xyXG4gICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "VJ0o":
/*!************************************************************!*\
  !*** ./src/app/_components/relation/relation.component.ts ***!
  \************************************************************/
/*! exports provided: RelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationComponent", function() { return RelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");


class RelationComponent {
    constructor() { }
    ngOnInit() {
    }
}
RelationComponent.ɵfac = function RelationComponent_Factory(t) { return new (t || RelationComponent)(); };
RelationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelationComponent, selectors: [["app-relation"]], decls: 34, vars: 0, consts: [["role", "alert", 1, "alert", "alert-danger", "text-center", "p-5", "display-3"], [1, "container", "mt-4"], [1, "row"], [1, "col"], [1, "text-center"], [1, "container", "text-center"], [1, "container"], [1, "text-center", "ownx"], ["href", "#"], ["name", "logo-facebook", 1, "text-danger", "mr-5"], ["name", "logo-instagram", 1, "text-danger", "mr-5"], ["name", "logo-pinterest", 1, "text-danger", "mr-5"], ["name", "logo-twitter", 1, "text-danger", "mr-5"]], template: function RelationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Az oldal karbantart\u00E1s allat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ind\u00EDtsuk a besz\u00E9lget\u00E9st!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Els\u0151sorban \u00EDr\u00E1sban kommunik\u00E1lunk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ezt b\u00E1rmikor megteheted a megadott email c\u00EDmek b\u00E1rmelyik\u00E9n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "V\u00E1laszaink \u00E1ltal\u00E1ban a gmail-es email c\u00EDmr\u0151l fognak meg\u00E9rkezni hozz\u00E1d, mert az a gy\u0171jt\u0151c\u00EDm\u00FCnk, minden lev\u00E9l oda \u00E9rkezik.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Amennyiben k\u00F6zvetlenebb kapcsolattart\u00E1si form\u00E1t ig\u00E9nyelsz, sz\u00EDvesen vessz\u00FCk a telefonh\u00EDv\u00E1sod!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ha nem vessz\u00FCk fel, pr\u00F3b\u00E1lj h\u00EDvni \u00FAjra negyed \u00F3ra m\u00FAlva, illetve amint lehet, visszah\u00EDvunk.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hol kereshetsz minket?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Barhol irhatsz nekunk nem harapunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"]], styles: [".ownx[_ngcontent-%COMP%] {\r\n    font-size: 160px;\r\n    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7OztBQUdwQiIsImZpbGUiOiJyZWxhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm93bngge1xyXG4gICAgZm9udC1zaXplOiAxNjBweDtcclxuICAgIFxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/dashboard/dashboard.component */ "xOFu");
/* harmony import */ var _components_production_production_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_components/production/production.component */ "U75v");
/* harmony import */ var _components_relation_relation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/relation/relation.component */ "VJ0o");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/about/about.component */ "brYQ");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _components_production_detail_production_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/production-detail/production-detail.component */ "EBpI");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/account/account.component */ "ceBG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");

 // <-- NgModel lives here












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        _components_production_production_component__WEBPACK_IMPORTED_MODULE_4__["ProductionComponent"],
        _components_relation_relation_component__WEBPACK_IMPORTED_MODULE_5__["RelationComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _components_production_detail_production_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductionDetailComponent"],
        _components_account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"]] }); })();


/***/ }),

/***/ "brYQ":
/*!******************************************************!*\
  !*** ./src/app/_components/about/about.component.ts ***!
  \******************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 18, vars: 0, consts: [["role", "alert", 1, "alert", "alert-danger", "text-center", "p-5", "display-3"], [1, "row", "justify-content-center", "mt-5"], [1, "tex-center"], [1, "blockquote", "text-center"], ["id", "sectionone", 1, "mb-0"], [1, "container"], [1, "sectionones", "p-2", "text-center"], ["src", "../../../assets/img/Nevtelen1.png", 1, "contimg"], [1, "bg-light", "p-2", "text-center"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Az oldal karbantart\u00E1s allat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "blockquote", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rolunk \u00E9s a 19 sz\u00E1zad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Szappanf\u0151z\u00E9shez vagy k\u00F6zvetlen t\u00FCzel\u00E9s\u0171, vagy pedig g\u0151zf\u0171t\u00E9s\u0171 katlant haszn\u00E1ltak, az ut\u00F3bbit rendszerint csak a k\u00F6nnyebben szappanos\u00EDthat\u00F3 zsirad\u00E9khoz (p\u00E1lmadi\u00F3olaj, k\u00F3kuszolaj) haszn\u00E1lt\u00E1k. A kem\u00E9ny szappan vagy sz\u00EDnszappan, vagy enyves sz\u00EDnszappan, vagy pedig enyvszappan. Ha valamely zs\u00EDrt vagy zs\u00EDros olajat l\u00FAggal egy\u00FCtt f\u0151ztek, akkor a szappanosod\u00E1s befejezt\u00E9vel enyves folyad\u00E9k, az \u00FAn. szappanenyv k\u00E9pz\u0151dik. Ezen enyvhez elegend\u0151 konyhas\u00F3t adva a szappan a f\u00F6l\u00F6s v\u00EDzt\u0151l \u00E9s a zsirad\u00E9kb\u00F3l k\u00E9pz\u0151d\u00F6tt glicerint\u0151l lev\u00E1lik, ez ut\u00F3bbiak pedig a katlan fenek\u00E9n meggy\u00FClemlenek (fen\u00E9kl\u00FAg). A fent \u00FAsz\u00F3 szappan a sz\u00EDnszappan. Ezt rendszerint m\u00E9g bizonyos ideig a fen\u00E9kl\u00FAggal egy\u00FCtt vagy pedig friss l\u00FAggal tov\u00E1bb f\u0151zt\u00E9k, hogy a lev\u00E1lt sz\u00EDnszappanba be\u00E9kel\u0151d\u00F6tt s a m\u00E9g nem eg\u00E9szen befejez\u0151d\u00F6tt szappanosod\u00E1st\u00F3l sz\u00E1rmaz\u00F3 habos r\u00E9szeket kik\u00FCsz\u00F6b\u00F6lj\u00E9k (tiszt\u00E1ra f\u0151z\u00E9s). A szappant ezut\u00E1n a form\u00E1ba t\u00F6lt\u00F6tt\u00E9k. Lass\u00FA kih\u0171l\u00E9s ut\u00E1n a megmerevedett sz\u00EDnszappan, ha csak nagyon s\u0171r\u0171 (duzzadt) nem volt, amorf alapon krist\u00E1lyos ereket mutatott (magvas \u00E9r). A sz\u00EDnszappant a tiszt\u00E1ra f\u0151z\u00E9s ut\u00E1n gyakran m\u00E9g csiszolt\u00E1k, azaz gy\u00F6nge s\u00F3s l\u00FAggal \u00FAjb\u00F3l felf\u0151zt\u00E9k, hogy a duzzadtt\u00E1 v\u00E1lt szappant megh\u00EDg\u00EDts\u00E1k s ezzel a magvas \u00E9r, illet\u0151leg a m\u00E1rv\u00E1nyzat k\u00E9pz\u0151d\u00E9s\u00E9t el\u0151seg\u00EDts\u00E9k; tett\u00E9k ezt azonban az\u00E9rt is, hogy tiszta, feh\u00E9r szappant kapjanak. Az ut\u00F3bbi esetben a szappant er\u0151sebben csiszolt\u00E1k, vagyis annyira megh\u00EDg\u00EDtott\u00E1k, hogy a benne l\u00E9v\u0151 tiszt\u00E1talans\u00E1gok a fen\u00E9kre sz\u00E1llhattak. Az enyvszappant a szappanenyvnek egyszer\u0171 bes\u0171r\u00EDt\u00E9se \u00FAtj\u00E1n k\u00E9sz\u00EDtett\u00E9k. Az enyvszappanban benne van a haszn\u00E1lt zsirad\u00E9k lefejlett glicerinje, \u00FAgyszint\u00E9n a zsirad\u00E9k \u00E9s l\u00FAg minden tiszt\u00E1talans\u00E1ga. A szappan ezen fajt\u00E1j\u00E1t csakis k\u00F3kusz- \u00E9s p\u00E1lmadi\u00F3olajb\u00F3l lehet f\u0151zni, mert gazdag laurosztearin-tartalmukn\u00E1l fogva csup\u00E1n ezen zsirad\u00E9kok adnak oly amorf szappant, mely meglehet\u0151sen nagy v\u00EDztartalommal is teljesen szil\u00E1rd. Az enyvszappanba mindenf\u00E9le idegen anyagot lehetett keverni s ezt a szappanosok meg is tett\u00E9k annak \u00E9rdek\u00E9ben, hogy a szappan t\u00F6meg\u00E9t megn\u00F6velj\u00E9k. A k\u00F3kusz- \u00E9s p\u00E1lmadi\u00F3olaj meleg l\u00FAgnak hozz\u00E1 kever\u00E9se \u00E1ltal is elszappanosodik, ha a l\u00FAg el\u00E9gg\u00E9 er\u0151s (36-40\u00B0 B). \u00CDgy kapt\u00E1k az \u00FAn. hidegen kevert szappant, melyben mindenkor szabad alk\u00E1li l\u00E9v\u00E9n, annak mar\u00F3 hat\u00E1sa er\u0151s. Az enyves sz\u00EDnszappant (eschwegi szappan) szint\u00E9n csak k\u00F3kusz- \u00E9s p\u00E1lmadi\u00F3olajjal lehet el\u0151\u00E1ll\u00EDtani. Vagy k\u00F6zvetlen, vagy k\u00F6zvetett \u00FAton k\u00E9sz\u00EDtett\u00E9k. Az els\u0151 m\u00F3dszer szerint a k\u00F3kusz- vagy p\u00E1lmadi\u00F3olajat faggy\u00FAval, p\u00E1lmaolajjal, csontzs\u00EDrral egyetemben f\u0151zt\u00E9k meg; a m\u00E1sodik szerint azonban az ut\u00F3bb nevezett zsirad\u00E9kok egyik\u00E9b\u0151l vagy t\u00F6bbj\u00E9b\u0151l els\u0151ben sz\u00EDnszappant f\u0151ztek s ezt kevert\u00E9k azut\u00E1n a k\u00F3kusz- vagy p\u00E1lmadi\u00F3olajb\u00F3l k\u00E9sz\u00EDtett enyvszappanhoz. Az eschwegi szappan kell\u0151 kik\u00E9pz\u0151d\u00E9s\u00E9re bizonyos s\u00F3tartalmat ig\u00E9nyel. Erre rendesen a sz\u00E9nsavas alk\u00E1li\u00E1kat haszn\u00E1lt\u00E1k, melyeket azonban m\u00E1s s\u00F3kkal, pl. konyhas\u00F3val, kl\u00F3rk\u00E1liummal, v\u00EDz\u00FCveggel is lehet helyettes\u00EDteni. Ezen k\u00F6r\u00FClm\u00E9nyt sok szappanos arra haszn\u00E1lta, hogy ezen t\u00F6lt\u0151 anyagnak nevezett s\u00F3kat a sz\u00FCks\u00E9gesn\u00E9l sokkal nagyobb m\u00E9rt\u00E9kben adja a szappanhoz s ezzel az akn\u00E1zatot (eredm\u00E9nyt) megjav\u00EDtsa. Az eschwegi szappan csak csek\u00E9ly m\u00E9rt\u00E9kben mutat magvas \u00E9rk\u00E9pz\u0151d\u00E9st, ezt szembe\u00F6tl\u0151bb\u00E9 teend\u0151, fest\u00E9ket (ultramarint, f\u00F6ldi rozsd\u00E1t, frankfurti feket\u00E9t) kevertek hozz\u00E1. A helyesen megf\u0151z\u00F6tt eschwegi szappan min\u0151s\u00E9ge eg\u00E9szen j\u00F3; \u00E1m ezek k\u00F6z\u00FCl r\u00E9gen a kereskedelembe ily n\u00E9ven ker\u00FClt szappanok k\u00F6z\u00F6tt sok csup\u00E1n mesters\u00E9gesen m\u00E1rv\u00E1nyozott enyvszappan. 100 kg zsirad\u00E9k mintegy 150 kg sz\u00EDnszappant ad. Az eschwegi szappan akn\u00E1zata m\u00E1r 200%-ra emelkedik, m\u00EDg az enyvszappann\u00E1l - az illet\u0151 szappanos tisztess\u00E9g\u00E9vel megford\u00EDtott ar\u00E1nyban - az akn\u00E1zat 300, s\u0151t 1400%-ra is felsz\u00F6kik. Az ut\u00F3bbi esetben a fogyaszt\u00F3 140 r\u00E9sz szappannal egy\u00FCtt nyolcszor annyi \u00E9rt\u00E9ktelen t\u00F6lt\u0151 anyagot kapott r\u00E1ad\u00E1sul, csakhogy a r\u00E1ad\u00E1st is szappan gyan\u00E1nt kellett megfizetnie. Puha szappan (ken\u0151szappan) h\u00E1romf\u00E9le van: sima \u00E1ttetsz\u0151 (olajszappan, fekete szappan, z\u00F6ld szappan \u00E9s vil\u00E1gos glicerin ken\u0151szappan); sima \u00E1tl\u00E1tszatlan (elaimszappan, ez\u00FCstszappan) \u00E9s \u00E1ttetsz\u0151 alapon krist\u00E1lyos v\u00E1lad\u00E9kot mutat\u00F3 szappan (term\u00E9szetes magszappan). A ken\u0151szappan, hogy \u00E1llom\u00E1nya megfeleljen, bizonyos ar\u00E1nyban mind mar\u00F3, mind sz\u00E9nsavas alk\u00E1li\u00E1t k\u00F6vetel mag\u00E1nak. Az ar\u00E1ny az \u00E9vszak szerint v\u00E1ltoz\u00F3; t\u00F6bb mar\u00F3 alk\u00E1li\u00E1t\u00F3l a szappan kem\u00E9nyebb\u00E9, t\u00F6bb sz\u00E9nsavas alk\u00E1li\u00E1t\u00F3l l\u00E1gyabb\u00E1 v\u00E1lik. A sima \u00E1ttetsz\u0151 ken\u0151szappant len- \u00E9s kenderolajb\u00F3l, halzs\u00EDrb\u00F3l \u00E9s oleinb\u0151l hamuzs\u00EDrral \u00E9s kev\u00E9s sziks\u00F3l\u00FAggal f\u0151zt\u00E9k. A sima \u00E1tl\u00E1tszatlan szappanhoz m\u00E1r ar\u00E1nylag t\u00F6bb szil\u00E1rd zsirad\u00E9kot, nevezetesen p\u00E1lmaolajat \u00E9s t\u00F6bb sziks\u00F3l\u00FAgot kellett venni. A term\u00E9szetes magszappan szint\u00E9n nagyobb mennyis\u00E9g\u0171 szil\u00E1rd zsirad\u00E9kot (faggy\u00FAt \u00E9s p\u00E1lmaolajat) ig\u00E9nyelt, de ezt m\u00E1r puszt\u00E1n hamuzs\u00EDrl\u00FAggal f\u0151zt\u00E9k. Ezen ut\u00F3bbi szappanon mutatkoz\u00F3 term\u00E9szetes magvakat, melyek a kikrist\u00E1lyosod\u00F3 sztearinsavas \u00E9s palmitinsavas k\u00E1liumb\u00F3l k\u00E9pz\u0151dnek, gyakran azzal hamis\u00EDtott\u00E1k, hogy a sima, \u00E1ttetsz\u0151 ken\u0151szappanba \u00E9rt\u00E9ktelen, magvas anyagokat, rendszerint agyagot, meszet, kem\u00E9ny\u00EDt\u0151t kevertek. A ken\u0151szappanok akn\u00E1zata mintegy 250%, azonban t\u00F6lt\u0151 anyagok seg\u00EDts\u00E9g\u00E9vel felr\u00FAgt\u00E1k 400%-ra is. Mind a kem\u00E9ny, mind a puha szappanhoz gyakran gyant\u00E1t is haszn\u00E1ltak. Minthogy a gyanta savakb\u00F3l van, mar\u00F3 \u00E9s sz\u00E9nsavas alk\u00E1li\u00E1kkal k\u00F6nnyen egyes\u00FCl; azonban egymag\u00E1ban soha sem munk\u00E1lt\u00E1k szappann\u00E1, hanem csakis zsirad\u00E9kkal egyetemben. A tiszt\u00E1n gyant\u00E1b\u00F3l val\u00F3 szappan nem kem\u00E9nyedik meg, s ez ken\u0151szappanul sem haszn\u00E1lhat\u00F3, mert a j\u00F3 ken\u0151szappant\u00F3l megk\u00EDv\u00E1nt \u00E1llom\u00E1nya nincsen meg. A gyant\u00E1val k\u00E9sz\u00EDtett szappant - pomp\u00E1s habz\u00E1sa v\u00E9gett - sok m\u0171veletre haszn\u00E1lt\u00E1k, de a sz\u00F6v\u0151-fon\u00F3 ipar c\u00E9ljaira m\u00E1r a 19. sz\u00E1zad v\u00E9g\u00E9n sem volt alkalmatos. A pipereszappan k\u00E9sz\u00EDt\u00E9s\u00E9nek h\u00E1rom m\u00F3dj\u00E1t alkalmazt\u00E1k, ezek: a hideg szappanos\u00EDt\u00E1s, vagyis hogy az olvadt k\u00F3kuszolajat meleg t\u00F6m\u00E9ny l\u00FAggal egybekeverik; a k\u00E9sz szappannak kev\u00E9s v\u00EDzzel g\u0151z- vagy v\u00EDzf\u00FCrd\u0151n val\u00F3 \u00E1tolvaszt\u00E1sa \u00FAtj\u00E1n \u00E9s a k\u00E9sz semleges szappannak szalagokba oszt\u00E1sa \u00E1ltal, ezt k\u00F6vet\u0151 illatos\u00EDt\u00E1s \u00E9s sajtol\u00E1ssal. Csakis ez ut\u00F3bbi m\u00F3don lehetett finom szag\u00FA szappant k\u00E9sz\u00EDteni, mert finom illatot csak a vir\u00E1gparf\u00FCm adhat, ez pedig sem a l\u00FAgot, sem a forr\u00F3s\u00E1got \u2013 a szagnak kellemetlenn\u00E9 v\u00E1l\u00E1sa n\u00E9lk\u00FCl \u2013 el nem b\u00EDrja. A 3. m\u00F3d abban \u00E1ll, hogy a szappant gyalug\u00E9pen v\u00E9kony szalagokra has\u00EDtott\u00E1k, a szalagokat illatos szerrel meglocsolt\u00E1k, megkevert\u00E9k s a szappanz\u00FAz\u00F3g\u00E9p seg\u00EDts\u00E9g\u00E9vel (melynek hengerei k\u00FCl\u00F6nb\u00F6z\u0151 gyorsas\u00E1ggal mozogtak) a szappant meggy\u00FArt\u00E1k. Az utols\u00F3 henger hossz\u00E1t k\u00E9s fekszi meg s ez a szappant a hengerr\u0151l levakarta. Az innen lev\u00E1ltott szappanlapokat a t\u00F6m\u00F6r\u00EDt\u0151g\u00E9pbe juttatt\u00E1k. Ez a g\u00E9p tulajdonk\u00E9ppen sajtol\u00F3 volt, mely a r\u00E9teges szappant a g\u00E9pnek k\u00FAposan sz\u0171k\u00FCl\u0151 s a megk\u00EDv\u00E1nt szappandarabok vastags\u00E1ga szerint igaz\u00EDthat\u00F3 sz\u00E1jjal ell\u00E1tott orm\u00E1ny\u00E1ba pr\u00E9selte. A t\u00F6m\u00F6r\u00EDtett szappan a g\u00E9p sz\u00E1j\u00E1b\u00F3l vastag kolb\u00E1sz alakj\u00E1ban k\u00E9t gur\u00EDt\u00F3n mozg\u00F3 v\u00E9gtelen v\u00E1szonszalagra ker\u00FClt, s a szappankolb\u00E1szt v\u00E9g\u00FCl egyszer\u0171 szeletel\u0151 szerkezettel darabokra v\u00E1gt\u00E1k. Az egyes szappandarabokat m\u00E1r ezut\u00E1n megsz\u00E1r\u00EDtott\u00E1k, s ver\u0151g\u00E9pen form\u00E1ba \u00FCt\u00F6tt\u00E9k. Eredetileg ezen z\u00FAzott (pilliert) szappant csup\u00E1n a legtiszt\u00E1bb \u00E9s legjobb sz\u00EDnszappanb\u00F3l k\u00E9sz\u00EDtett\u00E9k, a 19. sz\u00E1zad v\u00E9g\u00E9re m\u00E1r a hidegen el\u0151\u00E1ll\u00EDtott szappan z\u00FAz\u00E1s\u00E1nak m\u00F3dj\u00E1t ejtett\u00E9k. A k\u00F6z\u00F6ns\u00E9ges pipereszappanok z\u00F6me ekkoriban hidegen k\u00E9sz\u00EDtett, b\u0151rt mar\u00F3 szappan volt, melyet \u00E9rz\u00E9keny b\u0151r\u0171 ember egy\u00E1ltal\u00E1ban nem haszn\u00E1lhatott. Az \u00E1tl\u00E1tsz\u00F3 szappant, m\u00E1s n\u00E9ven krist\u00E1ly- vagy glicerinszappant r\u00E9gente borszesz seg\u00EDts\u00E9g\u00E9vel \u00E1ll\u00EDtott\u00E1k el\u0151; a 19. sz\u00E1zad v\u00E9g\u00E9n a k\u00F6z\u00F6ns\u00E9g megt\u00E9veszt\u00E9s\u00E9nek \u00E9rdek\u00E9ben borszesz helyett cukorsz\u00F6rppel \u00E9s sziks\u00F3oldattal tett\u00E9k szappant \u00E1tl\u00E1tsz\u00F3v\u00E1. A legjobb ilyen fajta szappanban legfeljebb 50% volt a tiszta szappan, glicerin is rendesen csak annyi volt benne, amennyit az elhaszn\u00E1lt zsirad\u00E9k kiv\u00E1lasztott, teh\u00E1t legfeljebb 5%, s \u00EDgy mindenesetre 45%-nyi \u00E1rtalmas, mar\u00F3 t\u00F6ltel\u00E9ket tartalmazott. A szappan hamis\u00EDt\u00F3szere, vagyis a szappanosok nyelv\u00E9n: a szappan t\u00F6ltel\u00E9kanyaga sokf\u00E9le lehetett, \u00EDgy burgonyaliszt, cukor, zs\u00EDrk\u0151, s\u00FAlyp\u00E1t, kr\u00E9ta, kovaf\u00F6ld, v\u00EDz\u00FCveg, agyag, sziks\u00F3l\u00FAg, hamuzs\u00EDrl\u00FAg, konyhas\u00F3oldat, v\u00EDz, stb. Megeml\u00EDtend\u0151 m\u00E9g, hogy a k\u00E1lium- \u00E9s n\u00E1triumszappanon k\u00EDv\u00FCl valamennyi szappan v\u00EDzben oldhatatlan. A m\u00E9szszappan a sztearinsav-gy\u00E1rt\u00E1sban, az alum\u00EDnium- \u00E9s az \u00F3nszappan a kelmefest\u00E9sben, a mang\u00E1nszappan a fest\u00E9kgy\u00E1rt\u00E1sban, a cinkszappan (cinkflastrom) \u00E9s az \u00F3lomszappan (\u00F3lomflastrom) az orvosl\u00E1sban j\u00E1tszott szerepet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "blockquote", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rolunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Biol\u00F3gus, \u00E9s klinikai laborat\u00F3riumi kutat\u00F3 vagyok, az S&S term\u00E9szetes kozmetikumok manufakt\u00FAra meg\u00E1lmod\u00F3ja, megalkot\u00F3ja. A k\u00E9t S bet\u0171 f\u00E9rjem \u00E9s j\u00F3magam vezet\u00E9knev\u00E9b\u0151l ered. A term\u00E9szet k\u00F6zels\u00E9ge mindig is a sz\u00EDvem cs\u00FCcske volt. M\u00E1r az \u00E1ltal\u00E1nos iskol\u00E1ban is a biol\u00F3gia k\u00FCl\u00F6n\u00F6s helyet kapott a sz\u00EDvemben, majd ahogy n\u0151ttem egyre jobban rajzol\u00F3dott ki szemem el\u0151tt, hogy ez az \u00E9n \u00E9letutam. A term\u00E9szetben lev\u00E9s, az \u00E9l\u0151l\u00E9nyek szeml\u00E9l\u00E9se, egyre b\u0151vebben hat\u00F3 megismer\u00E9se ny\u00FAjt sz\u00E1momra pihen\u00E9st. A biol\u00F3gia egy \u00F3ri\u00E1si t\u00E9mak\u00F6rt fel\u00F6lel\u0151 tudom\u00E1ny\u00E1g, melyben az ember sosem mondhatja azt, hogy mindent tudok. Engem t\u00F6bbek k\u00F6z\u00F6tt ez inspir\u00E1l. \u00DAjabb-\u00FAjabb n\u00F6v\u00E9nyek hat\u00F3anyagainak megismer\u00E9se, s\u0151t enn\u00E9l is tov\u00E1bb megyek, termeszt\u00E9se is. Legf\u0151bb c\u00E9lom, hogy min\u00E9l ink\u00E1bb \u00F6nell\u00E1t\u00F3 legyek. A saj\u00E1t kertemb\u0151l szedhessem a n\u00F6v\u00E9nyeket, \u00E9n magam sz\u00E1r\u00EDthassam, dolgozhassam fel \u0151ket. \u00CDgy minden egyes l\u00E9p\u00E9st monitorozhatok, pontosan tudom volt-e permetezve, t\u00E1poldatozva, illetve, hogy m\u00E9gis milyen f\u00F6ldben termett, milyen k\u00F6rnyezeti k\u00F6r\u00FClm\u00E9nyek k\u00F6z\u00F6tt. Illetve, \u00EDgy az \u00F6kol\u00F3giai l\u00E1bnyomomat is cs\u00F6kkenthetem, hiszen nem boltban v\u00E1s\u00E1rolt, el\u0151re csomagolt term\u00E9ket veszek, illetve nem is internetr\u0151l rendelem, melyet a fut\u00E1rszolg\u00E1lat \u00FCzemanyagot haszn\u00E1lva k\u00E9zbes\u00EDt hozz\u00E1m, plusz m\u00E9g egy dobozba becsomagolva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#sectionone[_ngcontent-%COMP%]{\r\n    font-size: 32px;\r\n    \r\n    }\r\n    \r\n    #sectionone[_ngcontent-%COMP%]::after {\r\n      content: \" \";\r\n      display: block;\r\n      background-color: #ffffff;\r\n      width: 260px;\r\n      height: 3px;\r\n      margin: 6px auto 0 auto;\r\n      border-radius: 50%;\r\n    }\r\n    \r\n    .sectionones[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        line-height: 34px;\r\n        background-color: rgba(255, 255, 255, 0.671);\r\n        \r\n    }\r\n    \r\n    .contimg[_ngcontent-%COMP%]{\r\n        width: 240px; \r\n        height: 240px; \r\n        float: left;\r\n        padding: 0px 10px 0px 0px;\r\n      }\r\n    \r\n    .myclass_1[_ngcontent-%COMP%]{\r\n      font-size: 1.25rem;\r\n      \r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztJQUVmOztJQUVBO01BQ0UsWUFBWTtNQUNaLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLFdBQVc7TUFDWCx1QkFBdUI7TUFDdkIsa0JBQWtCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQiw0Q0FBNEM7O0lBRWhEOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXO1FBQ1gseUJBQXlCO01BQzNCOztJQUVBO01BQ0Esa0JBQWtCOztNQUVsQiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlY3Rpb25vbmV7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3NlY3Rpb25vbmU6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBtYXJnaW46IDZweCBhdXRvIDAgYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VjdGlvbm9uZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY29udGltZ3tcclxuICAgICAgICB3aWR0aDogMjQwcHg7IFxyXG4gICAgICAgIGhlaWdodDogMjQwcHg7IFxyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5teWNsYXNzXzF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgXHJcbiAgICAgIH0iXX0= */"] });


/***/ }),

/***/ "ceBG":
/*!**********************************************************!*\
  !*** ./src/app/_components/account/account.component.ts ***!
  \**********************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 2, vars: 0, consts: [["role", "alert", 1, "alert", "alert-danger", "text-center", "p-5", "display-3"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Az oldal karbantart\u00E1s allat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_components/account/account.component */ "ceBG");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "Ndrk");
/* harmony import */ var _components_production_detail_production_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/production-detail/production-detail.component */ "EBpI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _components__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'production', component: _components__WEBPACK_IMPORTED_MODULE_2__["ProductionComponent"] },
    { path: 'relation', component: _components__WEBPACK_IMPORTED_MODULE_2__["RelationComponent"] },
    { path: 'about', component: _components__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'production/:id', component: _components_production_detail_production_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductionDetailComponent"] },
    { path: 'account', component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xOFu":
/*!**************************************************************!*\
  !*** ./src/app/_components/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 281, vars: 0, consts: [[1, "header-video"], ["autoplay", "", "oncanplay", "this.play()", "onloadedmetadata", "this.muted = true", "id", "header-video__teaser-video", 1, "header-video__teaser-video"], ["src", "../../../assets/bvideos/video.mp4", "type", "video/mp4"], [1, "container", "herobox"], [1, "row", "justify-content-center"], ["id", "both_hero", 1, "col"], ["id", "hero_text_center", 1, "text-center"], ["id", "hero_text_center_two", 1, "text-center"], [1, "container"], ["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar"], ["role", "group", "aria-label", "First group", 1, "btn-group", "mr-2"], ["href", "#sectionone"], ["type", "button", 1, "btn", "btns", "border-0", "btn-secondary", "mr-2"], ["href", "#sectiontwo"], ["href", "#sectionthr"], ["role", "alert", 1, "alert", "alert-danger", "text-center", "p-5", "display-3"], [1, "slide-in-fwd-left", "bgpic"], [1, "row", "justify-content-center", "mt-5"], [1, "tex-center"], [1, "blockquote", "text-center"], ["id", "sectionone", 1, "mb-0"], [1, "sectionones", "p-2"], ["src", "../../../assets/img/Nevtelen1.png", 1, "contimg"], [1, "text-center", "pr-3", "text-uppercase", "myclass_1"], ["type", "button", 1, "btn", "border-0", "pl-2", "downarrows"], [1, "container_next"], [1, "color-change-2x"], [1, "text-center", "slide-in-right", "reclame"], ["id", "support_link", "href", "#"], [1, "container_next", "mb-3"], [1, "slide-in-left"], [1, "col"], [1, "blockquote", "mb-5", "pb-5", "text-center"], ["id", "sectiontwo", 1, "mb-0", "pl-2", "pr-2"], [1, "card-deck", "justify-content-center"], [1, "card", "scard", "border-0"], ["src", "../../../assets/img/soap2.jpg", "alt", "Card image cap", 1, "card-img-top", "mx-auto", "card_img", "rounded-circle"], [1, "card-body"], [1, "card-title", "text-center"], [1, "product"], [1, "bgc", "p-2"], [1, "card-text", "own_text", "text-center"], [1, "text-left"], [1, "card-footer"], [1, "text-muted", "h6"], ["href", "#", 1, "btn", "own_button", "float-right", "mr-3", "mt-3", "border-0", "btn-primary"], ["src", "../../../assets/img/lips.jpg", "alt", "Card image cap", 1, "card-img-top", "mx-auto", "card_img", "rounded-circle"], ["href", "#", 1, "btn", "own_button", "border-0", "float-right", "mr-3", "mt-3", "btn-primary"], ["src", "../../../assets/img/corp.jpg", "alt", "Card image cap", 1, "card-img-top", "mx-auto", "card_img", "rounded-circle"], [1, "text-center", "text-uppercase", "h3"], [1, "arrow-right", "slide-in-right"], ["type", "button", 1, "btn", "own_button", "mr-2", "btn-sm"], ["type", "button", 1, "btn", "own_button", "ml-2", "btn-sm"], [1, "slide-in-left", "mb-5"], ["id", "sectionthr", 1, "mb-0", "pl-2", "pr-2"], ["src", "../../../assets/img/action_1.jpg", "alt", "Card image cap", 1, "card-img-top", "mx-auto", "card_img", "rounded-circle"], ["href", "#", 1, "btn", "own_button", "border-0", "float-right", "mt-3", "mr-3", "btn-primary"], ["src", "../../../assets/img/Action_2.jpg", "alt", "Card image cap", 1, "card-img-top", "mx-auto", "card_img", "rounded-circle"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00DCdv\u0151zli a nature cosmetics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S&S ahol a term\u00E9szetes\u00E9g v\u00E1r \u00F6nnre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "S&S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Term\u00E9keink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Akci\u00F3k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "C\u00E9lunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Az oldal karbantart\u00E1s allat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "blockquote", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mi\u00E9rt az S&S?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Biol\u00F3gus, \u00E9s klinikai laborat\u00F3riumi kutat\u00F3 vagyok, az S&S term\u00E9szetes kozmetikumok manufakt\u00FAra meg\u00E1lmod\u00F3ja, megalkot\u00F3ja. A k\u00E9t S bet\u0171 f\u00E9rjem \u00E9s j\u00F3magam vezet\u00E9knev\u00E9b\u0151l ered. A term\u00E9szet k\u00F6zels\u00E9ge mindig is a sz\u00EDvem cs\u00FCcske volt. M\u00E1r az \u00E1ltal\u00E1nos iskol\u00E1ban is a biol\u00F3gia k\u00FCl\u00F6n\u00F6s helyet kapott a sz\u00EDvemben, majd ahogy n\u0151ttem egyre jobban rajzol\u00F3dott ki szemem el\u0151tt, hogy ez az \u00E9n \u00E9letutam. A term\u00E9szetben lev\u00E9s, az \u00E9l\u0151l\u00E9nyek szeml\u00E9l\u00E9se, egyre b\u0151vebben hat\u00F3 megismer\u00E9se ny\u00FAjt sz\u00E1momra pihen\u00E9st. A biol\u00F3gia egy \u00F3ri\u00E1si t\u00E9mak\u00F6rt fel\u00F6lel\u0151 tudom\u00E1ny\u00E1g, melyben az ember sosem mondhatja azt, hogy mindent tudok. Engem t\u00F6bbek k\u00F6z\u00F6tt ez inspir\u00E1l. \u00DAjabb-\u00FAjabb n\u00F6v\u00E9nyek hat\u00F3anyagainak megismer\u00E9se, s\u0151t enn\u00E9l is tov\u00E1bb megyek, termeszt\u00E9se is. Legf\u0151bb c\u00E9lom, hogy min\u00E9l ink\u00E1bb \u00F6nell\u00E1t\u00F3 legyek. A saj\u00E1t kertemb\u0151l szedhessem a n\u00F6v\u00E9nyeket, \u00E9n magam sz\u00E1r\u00EDthassam, dolgozhassam fel \u0151ket. \u00CDgy minden egyes l\u00E9p\u00E9st monitorozhatok, pontosan tudom volt-e permetezve, t\u00E1poldatozva, illetve, hogy m\u00E9gis milyen f\u00F6ldben termett, milyen k\u00F6rnyezeti k\u00F6r\u00FClm\u00E9nyek k\u00F6z\u00F6tt. Illetve, \u00EDgy az \u00F6kol\u00F3giai l\u00E1bnyomomat is cs\u00F6kkenthetem, hiszen nem boltban v\u00E1s\u00E1rolt, el\u0151re csomagolt term\u00E9ket veszek, illetve nem is internetr\u0151l rendelem, melyet a fut\u00E1rszolg\u00E1lat \u00FCzemanyagot haszn\u00E1lva k\u00E9zbes\u00EDt hozz\u00E1m, plusz m\u00E9g egy dobozba becsomagolva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " katintson a ny\u00EDlra term\u00E9keink egy r\u00E9sz\u00E9rt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u2193");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ha \u00F6nnek is fontos a term\u00E9szet akkor t\u00E1mogathat minket ha szeretne, az al\u00E1bi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "linken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "blockquote", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Term\u00E9keink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Szapanok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Fontosabb tudni valok: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ol", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u00E1llatk\u00EDs\u00E9rlet mentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " mesters\u00E9ges sz\u00EDnez\u00E9k mentesek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "tart\u00F3s\u00EDt\u00F3szer mentesek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "b\u0151rbar\u00E1t term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "vegyszermentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "t\u0151l\u00FCnk v\u00E1s\u00E1rolt term\u00E9kekkel az \u00F6kol\u00F3giai l\u00E1bnyomunk cs\u00F6kkent\u00E9s\u00E9t seg\u00EDti el\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "m\u0171anyagmentess\u00E9g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "p\u00E1lmaolajmentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "hazai termel\u0151k t\u00E1mogat\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Minden term\u00E9k\u00FCnk blogol\u00E1sk\u00E9nt \u00E1rus\u00EDtott");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Megn\u00E9zem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Ajak\u00E1polok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Fontosabb tudni valok: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ol", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u00E1llatk\u00EDs\u00E9rlet mentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " mesters\u00E9ges sz\u00EDnez\u00E9k mentesek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "tart\u00F3s\u00EDt\u00F3szer mentesek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "b\u0151rbar\u00E1t term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "vegyszermentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "t\u0151l\u00FCnk v\u00E1s\u00E1rolt term\u00E9kekkel az \u00F6kol\u00F3giai l\u00E1bnyomunk cs\u00F6kkent\u00E9s\u00E9t seg\u00EDti el\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "m\u0171anyagmentess\u00E9g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "p\u00E1lmaolajmentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "hazai termel\u0151k t\u00E1mogat\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Minden term\u00E9k\u00FCnk blogol\u00E1sk\u00E9nt \u00E1rus\u00EDtott");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Megn\u00E9zem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Kr\u00E9mek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Fontosabb tudni valok: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ol", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u00E1llatk\u00EDs\u00E9rlet mentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " mesters\u00E9ges sz\u00EDnez\u00E9k mentesek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "tart\u00F3s\u00EDt\u00F3szer mentesek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "b\u0151rbar\u00E1t term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "vegyszermentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "t\u0151l\u00FCnk v\u00E1s\u00E1rolt term\u00E9kekkel az \u00F6kol\u00F3giai l\u00E1bnyomunk cs\u00F6kkent\u00E9s\u00E9t seg\u00EDti el\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "m\u0171anyagmentess\u00E9g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "p\u00E1lmaolajmentes term\u00E9kek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "hazai termel\u0151k t\u00E1mogat\u00E1sa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Minden term\u00E9k\u00FCnk blogol\u00E1sk\u00E9nt \u00E1rus\u00EDtott");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Megn\u00E9zem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " katintson Az akcioink\u00E9rt a ny\u00EDlra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u2193");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " S&S ahol a term\u00E9szet v\u00E1r \u00F6nnre g\u00F6rgesen lejebb az akcioink\u00E9rt de ha \u00E9rdekli \u00F6nt a c\u00E9lunk vagy a t\u00F6rt\u00E9net\u00FCnk v\u00E1laszon a k\u00E9t gomb k\u00F6z\u00FCl ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "T\u00F6rt\u00E9net\u00FCnk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "c\u00E9lunk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "section", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "blockquote", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Akcioink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "M\u00E1mor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u00D6sszetev\u0151k: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "k\u00F3kuszzs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "sert\u00E9szs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "extra sz\u0171z olivaolaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "kaka\u00F3vaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "sheavaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "diszn\u00F3zs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Himalayai s\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "teafa ill\u00F3olaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Az Akcioink m\u00E1r csak 3 napig tart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u00C9rdekel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u00C9ben");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u00D6sszetev\u0151k: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "k\u00F3kuszzs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "sert\u00E9szs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "olivaolaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "kaka\u00F3vaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "sheavaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "holt tengeri iszap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "indigo por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "teafa \u00E9s levendula ill\u00F3olaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Az Akcioink m\u00E1r csak 3 napig tart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\u00C9rdekel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Fellegek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u00D6sszetev\u0151k: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "k\u00F3kuszzs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "fah\u00E9j");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "sert\u00E9szs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "extra sz\u0171z olivaolaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "kaka\u00F3vaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "sheavaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "narancs ill\u00F3olaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "diszn\u00F3zs\u00EDr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Forralt v\u00F6r\u00F6sbor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "napraforg\u00F3olaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Az Akcioink m\u00E1r csak 3 napig tart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "\u00C9rdekel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    overflow-x: hidden;\r\n    background-color: rgb(255, 214, 196);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-video[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.header-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n\r\n.header-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.header-video__teaser-video[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto; \r\n}\r\n\r\n\r\n.header-video__media[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n\r\n#szoveg[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n\r\n.herobox[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 265px 0px 300px 0px\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width:1270px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 100px;\r\n        padding: 265px 0px 0px 0px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width:750px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 170px;\r\n        padding: 265px 0px 0px 0px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width:650px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 220px;\r\n        padding: 265px 0px 0px 0px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width:425px) {\r\n  .herobox[_ngcontent-%COMP%] {\r\n        bottom: 240px;\r\n        padding: 265px 0px 0px 0px;\r\n        \r\n  }\r\n}\r\n\r\n\r\n#hero_text_center[_ngcontent-%COMP%] {\r\n    font-size: 54px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n\r\n#hero_text_center_two[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    text-transform: uppercase;\r\n    color: white;\r\n}\r\n\r\n\r\n@media screen and (max-width:568px) {\r\n  #hero_text_center[_ngcontent-%COMP%] {\r\n        font-size: 34px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width:568px) {\r\n  #hero_text_center_two[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n  }\r\n}\r\n\r\n\r\n.btn[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 214, 196);\r\n    color: black;\r\n    font-size: 18px;\r\n    \r\n}\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 255, 255);\r\n    color: black;\r\n}\r\n\r\n\r\n@media screen and (max-width:366px) {\r\n  .btns[_ngcontent-%COMP%] {\r\n    background-color: rgb(255, 255, 255);\r\n  }\r\n  .btns[_ngcontent-%COMP%]:hover {\r\n    background-color: violet;\r\n  }\r\n }\r\n\r\n\r\n\r\n\r\n\r\n.slide-in-fwd-left[_ngcontent-%COMP%] {\r\n\tanimation: slide-in-fwd-left 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.8s both;\r\n}\r\n\r\n\r\n#sectionone[_ngcontent-%COMP%]{\r\nfont-size: 32px;\r\n\r\n}\r\n\r\n\r\n#sectionone[_ngcontent-%COMP%]::after {\r\n  content: \" \";\r\n  display: block;\r\n  background-color: #ffffff;\r\n  width: 260px;\r\n  height: 3px;\r\n  margin: 6px auto 0 auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.sectionones[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n    background-color: rgba(255, 255, 255, 0.671);\r\n    \r\n}\r\n\r\n\r\n.contimg[_ngcontent-%COMP%]{\r\n  width: 240px; \r\n  height: 240px; \r\n  float: left;\r\n  padding: 0px 10px 0px 0px;\r\n}\r\n\r\n\r\n.myclass_1[_ngcontent-%COMP%]{\r\nfont-size: 1.25rem;\r\n\r\n}\r\n\r\n\r\n.container_next[_ngcontent-%COMP%]::after{\r\n  content: \" \";\r\n  display: block;\r\n  width: 100%;\r\n  height: 3px;\r\n  margin: 6px auto 0 auto;\r\n  border-bottom: 3px dashed white;\r\n  \r\n}\r\n\r\n\r\n.downarrows[_ngcontent-%COMP%]{\r\n    font-size: 34px;\r\n    animation: pulsate-bck 0.5s ease-in-out infinite both;\r\n}\r\n\r\n\r\n.downarrows[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n  font-size: 39px;\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.slide-in-right[_ngcontent-%COMP%] {\r\n\tanimation: slide-in-right 0.5s linear 4s both;\r\n}\r\n\r\n\r\n.reclame[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  padding: 130px 0px 130px 0px;\r\n  margin:160px 0px 160px 0px;\r\n}\r\n\r\n\r\n.color-change-2x[_ngcontent-%COMP%] {\r\n\tanimation: color-change-2x 5s linear infinite alternate both;\r\n}\r\n\r\n\r\n#support_link[_ngcontent-%COMP%] {\r\ncolor: rgb(255, 223, 81);\r\nbackground-color:rgba(0, 0, 0, 0.808);\r\npadding: 5px 5px 5px 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.scard[_ngcontent-%COMP%]{\r\n  background-color: rgb(255, 189, 161)!important;\r\n \r\n}\r\n\r\n\r\n.card_img[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  height: 150px;\r\n  display: inline-block;\r\n  text-align: center;\r\n \r\n}\r\n\r\n\r\n.product[_ngcontent-%COMP%] {\r\ncolor: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n.product[_ngcontent-%COMP%]::after {\r\n  content: \" \";\r\n  display: block;\r\n  background-color: rgb(255, 214, 196);\r\n  width: 260px;\r\n  height: 3px;\r\n  margin: 6px auto 0 auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n#sectiontwo[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\n\r\n#sectiontwo[_ngcontent-%COMP%]::after {\r\n  content: \" \";\r\n  display: block;\r\n  background-color: #ffffff;\r\n  width: 260px;\r\n  height: 3px;\r\n  margin: 6px auto 0 auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n#sectionthr[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n\r\n\r\n#sectionthr[_ngcontent-%COMP%]::after {\r\n  content: \" \";\r\n  display: block;\r\n  background-color: #ffffff;\r\n  width: 260px;\r\n  height: 3px;\r\n  margin: 6px auto 0 auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.slide-in-left[_ngcontent-%COMP%] {\r\n\tanimation: slide-in-left 0.5s linear 5.2s both;\r\n}\r\n\r\n\r\n.scard[_ngcontent-%COMP%]{\r\n    background-color: rgb(255, 189, 161)!important;\r\n   \r\n  }\r\n\r\n\r\n.card_img[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n    height: 150px;\r\n    display: inline-block;\r\n    text-align: center;\r\n   \r\n  }\r\n\r\n\r\n.product[_ngcontent-%COMP%] {\r\n  color: rgb(0, 0, 0);\r\n  }\r\n\r\n\r\n.product[_ngcontent-%COMP%]::after {\r\n    content: \" \";\r\n    display: block;\r\n    background-color: rgb(255, 214, 196);\r\n    width: 260px;\r\n    height: 3px;\r\n    margin: 6px auto 0 auto;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n#sectiontwo[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n\r\n\r\n#sectiontwo[_ngcontent-%COMP%]::after {\r\n    content: \" \";\r\n    display: block;\r\n    background-color: #ffffff;\r\n    width: 260px;\r\n    height: 3px;\r\n    margin: 6px auto 0 auto;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n#sectionthr[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n\r\n\r\n#sectionthr[_ngcontent-%COMP%]::after {\r\n    content: \" \";\r\n    display: block;\r\n    background-color: #ffffff;\r\n    width: 260px;\r\n    height: 3px;\r\n    margin: 6px auto 0 auto;\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.slide-in-left[_ngcontent-%COMP%] {\r\n      animation: slide-in-left 0.5s linear 5.2s both;\r\n  }\r\n\r\n\r\n.bgc[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.61)!important;\r\n    padding-bottom: 60px;\r\n  }\r\n\r\n\r\n.own_button[_ngcontent-%COMP%] {\r\n    transform: skewX(-16deg);\r\n    -o-transform: skewX(-16deg);\r\n    -moz-transform: skewX(-16deg);\r\n    -webkit-transform: skewX(-16deg);\r\n  }\r\n\r\n\r\n.own_button[_ngcontent-%COMP%]:hover {\r\n    transform: skewX(-1deg);\r\n    -o-transform: skewX(-1deg);\r\n    -moz-transform: skewX(-1deg);\r\n    -webkit-transform: skewX(-1deg);\r\n    background-color: rgb(216, 20, 206);\r\n  }\r\n\r\n\r\n.prod_img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    background-color: rgb(194, 194, 194);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7OztBQUdBLG1CQUFtQjs7O0FBQ25CO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7QUFDRjs7O0FBRUEscUJBQXFCOzs7QUFDckI7RUFDRTtRQUNNLGFBQWE7UUFDYiwwQkFBMEI7RUFDaEM7QUFDRjs7O0FBRUE7RUFDRTtRQUNNLGFBQWE7UUFDYiwwQkFBMEI7RUFDaEM7QUFDRjs7O0FBRUE7RUFDRTtRQUNNLGFBQWE7UUFDYiwwQkFBMEI7RUFDaEM7QUFDRjs7O0FBRUE7RUFDRTtRQUNNLGFBQWE7UUFDYiwwQkFBMEI7O0VBRWhDO0FBQ0Y7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7O0FBRUE7RUFDRTtRQUNNLGVBQWU7RUFDckI7QUFDRjs7O0FBRUE7RUFDRTtRQUNNLGVBQWU7RUFDckI7QUFDRjs7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGVBQWU7O0FBRW5COzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOzs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7Q0FDRDs7O0FBRUQsZ0JBQWdCOzs7QUFDaEI7Q0FFUyxvRkFBb0Y7QUFDN0Y7OztBQUdBO0FBQ0EsZUFBZTs7QUFFZjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw0Q0FBNEM7O0FBRWhEOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsK0JBQStCOztBQUVqQzs7O0FBRUE7SUFDSSxlQUFlO0lBRWYscURBQXFEO0FBQ3pEOzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOzs7QUFFQSxVQUFVOzs7QUFDVjtDQUVTLDZDQUE2QztBQUN0RDs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7O0FBRUE7Q0FFUyw0REFBNEQ7QUFDckU7OztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLHFDQUFxQztBQUNyQyx3QkFBd0I7QUFDeEI7OztBQUVBLGNBQWM7OztBQUNkO0VBQ0UsOENBQThDOztBQUVoRDs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7O0FBRXBCOzs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7OztBQUVBO0NBRVMsOENBQThDO0FBQ3ZEOzs7QUFFQTtJQUNJLDhDQUE4Qzs7RUFFaEQ7OztBQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCOztFQUVwQjs7O0FBRUE7RUFDQSxtQkFBbUI7RUFDbkI7OztBQUdBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOzs7QUFFQTtJQUNFLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOzs7QUFFQTtJQUNFLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOzs7QUFFQTtNQUVZLDhDQUE4QztFQUMxRDs7O0FBRUE7SUFDRSxxREFBcUQ7SUFDckQsb0JBQW9CO0VBQ3RCOzs7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGdDQUFnQztFQUNsQzs7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsbUNBQW1DO0VBQ3JDOzs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7OztBQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE0LCAxOTYpO1xyXG59XHJcblxyXG5cclxuLypiYWNrZ3JvdW5kIFZpZGVvKi9cclxuLmhlYWRlci12aWRlbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXItdmlkZW8gdmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItdmlkZW8gdmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyLXZpZGVvX190ZWFzZXItdmlkZW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bzsgXHJcbn1cclxuXHJcbi5oZWFkZXItdmlkZW9fX21lZGlhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiNzem92ZWcge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVyb2JveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDI2NXB4IDBweCAzMDBweCAwcHhcclxufVxyXG5cclxuLypoZXJvYm94IG1lZGlhcXVlcnkqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNzBweCkge1xyXG4gIC5oZXJvYm94IHtcclxuICAgICAgICBib3R0b206IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI2NXB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NTBweCkge1xyXG4gIC5oZXJvYm94IHtcclxuICAgICAgICBib3R0b206IDE3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI2NXB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NTBweCkge1xyXG4gIC5oZXJvYm94IHtcclxuICAgICAgICBib3R0b206IDIyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI2NXB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MjVweCkge1xyXG4gIC5oZXJvYm94IHtcclxuICAgICAgICBib3R0b206IDI0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI2NXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIFxyXG4gIH1cclxufVxyXG5cclxuI2hlcm9fdGV4dF9jZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiA1NHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuI2hlcm9fdGV4dF9jZW50ZXJfdHdvIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTY4cHgpIHtcclxuICAjaGVyb190ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NjhweCkge1xyXG4gICNoZXJvX3RleHRfY2VudGVyX3R3byB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biwgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE0LCAxOTYpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5idG46aG92ZXIsIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjZweCkge1xyXG4gIC5idG5zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgLmJ0bnM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0O1xyXG4gIH1cclxuIH1cclxuXHJcbi8qZmlyc3Qgc2VjdGlvbiovXHJcbi5zbGlkZS1pbi1md2QtbGVmdCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWZ3ZC1sZWZ0IDAuOXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAxLjhzIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHNsaWRlLWluLWZ3ZC1sZWZ0IDAuOXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSAxLjhzIGJvdGg7XHJcbn1cclxuXHJcblxyXG4jc2VjdGlvbm9uZXtcclxuZm9udC1zaXplOiAzMnB4O1xyXG5cclxufVxyXG5cclxuI3NlY3Rpb25vbmU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDZweCBhdXRvIDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zZWN0aW9ub25lcyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NzEpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uY29udGltZ3tcclxuICB3aWR0aDogMjQwcHg7IFxyXG4gIGhlaWdodDogMjQwcHg7IFxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5teWNsYXNzXzF7XHJcbmZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXJfbmV4dDo6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA2cHggYXV0byAwIGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCB3aGl0ZTtcclxuICBcclxufVxyXG5cclxuLmRvd25hcnJvd3N7XHJcbiAgICBmb250LXNpemU6IDM0cHg7ICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlLWJjayAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHB1bHNhdGUtYmNrIDAuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuLmRvd25hcnJvd3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMzlweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4vKlJlY2xtYWUqL1xyXG4uc2xpZGUtaW4tcmlnaHQge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1yaWdodCAwLjVzIGxpbmVhciA0cyBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1yaWdodCAwLjVzIGxpbmVhciA0cyBib3RoO1xyXG59XHJcblxyXG4ucmVjbGFtZXtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgcGFkZGluZzogMTMwcHggMHB4IDEzMHB4IDBweDtcclxuICBtYXJnaW46MTYwcHggMHB4IDE2MHB4IDBweDtcclxufVxyXG5cclxuLmNvbG9yLWNoYW5nZS0yeCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGNvbG9yLWNoYW5nZS0yeCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IGNvbG9yLWNoYW5nZS0yeCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XHJcbn1cclxuXHJcbiNzdXBwb3J0X2xpbmsge1xyXG5jb2xvcjogcmdiKDI1NSwgMjIzLCA4MSk7XHJcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwOCk7XHJcbnBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuLypzZWN0aW9uIHR3byovXHJcbi5zY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODksIDE2MSkhaW1wb3J0YW50O1xyXG4gXHJcbn1cclxuLmNhcmRfaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gXHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuXHJcbi5wcm9kdWN0OjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE0LCAxOTYpO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDZweCBhdXRvIDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbiNzZWN0aW9udHdvIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbiNzZWN0aW9udHdvOjphZnRlciB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA2cHggYXV0byAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jc2VjdGlvbnRociB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4jc2VjdGlvbnRocjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbjogNnB4IGF1dG8gMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnNsaWRlLWluLWxlZnQge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNSBsaW5lYXIgNS4ycyBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNXMgbGluZWFyIDUuMnMgYm90aDtcclxufVxyXG5cclxuLnNjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTg5LCAxNjEpIWltcG9ydGFudDtcclxuICAgXHJcbiAgfVxyXG4gIC5jYXJkX2ltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3Qge1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5wcm9kdWN0OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE0LCAxOTYpO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW46IDZweCBhdXRvIDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgI3NlY3Rpb250d28ge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICBcclxuICAjc2VjdGlvbnR3bzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIG1hcmdpbjogNnB4IGF1dG8gMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAjc2VjdGlvbnRociB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzZWN0aW9udGhyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luOiA2cHggYXV0byAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZS1pbi1sZWZ0IHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLWxlZnQgMC41IGxpbmVhciA1LjJzIGJvdGg7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZS1pbi1sZWZ0IDAuNXMgbGluZWFyIDUuMnMgYm90aDtcclxuICB9XHJcbiBcclxuICAuYmdjIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSkhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vd25fYnV0dG9uIHtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTE2ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2tld1goLTE2ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBza2V3WCgtMTZkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xNmRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5vd25fYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2tld1goLTFkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBza2V3WCgtMWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2tld1goLTFkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC0xZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIwLCAyMDYpO1xyXG4gIH1cclxuICBcclxuICAucHJvZF9pbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XHJcbiAgfVxyXG5cclxuICAiXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map