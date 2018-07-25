testing by mahesh

webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n    <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_social_login__ = __webpack_require__("./node_modules/angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global_service__ = __webpack_require__("./src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__ = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dash_board_dash_board_component__ = __webpack_require__("./src/app/dash-board/dash-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_modules_component__ = __webpack_require__("./src/app/modules/modules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__module_parameters_module_parameters_component__ = __webpack_require__("./src/app/module-parameters/module-parameters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__methods_methods_component__ = __webpack_require__("./src/app/methods/methods.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var providers = {
    "google": {
        "clientId": "371137652754-8vo1srvmldbb6j9eqgjq0bk1pd8tnu8u.apps.googleusercontent.com"
    },
    "facebook": {
        "clientId": "950984965051084",
        "apiVersion": "v2.4"
    }
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'DashBoard', component: __WEBPACK_IMPORTED_MODULE_11__dash_board_dash_board_component__["a" /* DashBoardComponent */] },
    { path: 'Projects', component: __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'Modules', component: __WEBPACK_IMPORTED_MODULE_13__modules_modules_component__["a" /* ModulesComponent */] },
    { path: 'ModuleParams', component: __WEBPACK_IMPORTED_MODULE_14__module_parameters_module_parameters_component__["a" /* ModuleParametersComponent */] },
    { path: 'Methods', component: __WEBPACK_IMPORTED_MODULE_15__methods_methods_component__["a" /* MethodsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dash_board_dash_board_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modules_modules_component__["a" /* ModulesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__module_parameters_module_parameters_component__["a" /* ModuleParametersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__methods_methods_component__["a" /* MethodsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_angular2_social_login__["a" /* Angular2SocialLoginModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes), __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["a" /* OrderModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__app_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_services_cookies_service__["CookieService"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

__WEBPACK_IMPORTED_MODULE_2_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);


/***/ }),

/***/ "./src/app/dash-board/dash-board.component.css":
/***/ (function(module, exports) {

module.exports = ".mg-ulct{\r\n\r\n}"

/***/ }),

/***/ "./src/app/dash-board/dash-board.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n    <title>PLLC-Software Solutions</title>\r\n    <meta charset=\"utf-8\">\r\n</head>\r\n<body>\r\n    <!-- WRAPPER -->\r\n    <div id=\"wrapper\">\r\n        <!-- NAVBAR -->\r\n        <nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#efefef;height:130px\">\r\n            <div class=\"brand\">\r\n                <a href=\"Projects\"><img src=\"../../assets/img/PLLC_Logo1.png\" alt=\"Klorofil Logo\" class=\"img-responsive logo\"></a>\r\n\r\n            </div>\r\n            <div class=\"container-fluid\">\r\n                <div class=\"nav navbar-header\">\r\n                    <h3 style=\"margin-top:30px\">API Guide For Projects</h3>\r\n                </div>\r\n                <div class=\"navbar-btn navbar-btn-right\">\r\n                    <button class=\"update-pro\" (click)=\"logout()\">\r\n                        <span class=\"glyphicon glyphicon-off\" style=\"font-size:28px;color:rgb(234, 0, 0)\"></span>\r\n                        <!-- <i class=\"fa fa-expeditedssl\" style=\"font-size:28px;color:red\"></i> -->\r\n                    </button>\r\n                </div>\r\n                <div id=\"navbar-menu\">\r\n                    <ul class=\"nav navbar-nav navbar-right\" style=\"padding-top:15px\">\r\n\r\n                        <li class=\"dropdown\">\r\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"http://www.pllcpep.com/Uploads/Profile/{{UserImage}}\" class=\"img-circle\" style=\"width:30px\" alt=\"Avatar\"> <b>{{UserName}}</b> </a>\r\n                            <!-- <ul class=\"dropdown-menu\">\r\n                                <li><a href=\"#\"><i class=\"lnr lnr-user\"></i>  <span>My Profile</span></a></li>\r\n                                <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i>  <span>Message</span></a></li>\r\n                                <li><a href=\"#\"><i class=\"lnr lnr-cog\"></i>  <span>Settings</span></a></li>\r\n                                <li><a href=\"#\"><i class=\"lnr lnr-exit\"></i>  <span>Logout</span></a></li>\r\n                            </ul> -->\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <nav class=\"navbar navbar-default\">\r\n                <div class=\"container-fluid\">\r\n                    <ul class=\"nav navbar-nav\">\r\n                        <li><a href=\"Projects\">Projects</a></li>\r\n                        <li class=\"active\"><a href=\"DashBoard\">Vew Api Details</a></li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        </nav>\r\n        <!-- END NAVBAR -->\r\n        <!-- LEFT SIDEBAR -->\r\n        <div id=\"sidebar-nav\" style=\"top:130px;padding-top:0px\" class=\"sidebar\">\r\n            <div class=\"selectdiv select \">\r\n                <select (change)=\"statusChange($event.target.value)\">\r\n                    <option [value]=\"undefined\">--Select Project--</option>\r\n                    <option [value]=\"pro.P_ID\" *ngFor=\"let pro of prjs\">{{pro.P_PRJ_NAME}}</option>\r\n                </select>\r\n            </div>\r\n            <div *ngIf=\"showsidemenu\">\r\n                <div style=\"padding:15px\">\r\n                    <img src=\"http://www.pllcpep.com/Uploads/Projects/logos/{{projectlogo}}\" alt=\"\" class=\"img-responsive\">\r\n                </div>\r\n                <hr>\r\n                <div class=\"sidebar-scroll\">\r\n                    <nav>\r\n                        <h3 style=\"color:rgb(226, 226, 226);padding-left:15px\"><u>API Modules</u></h3>\r\n                        <ul class=\"nav mg-ulct\">\r\n                            <li class=\"active\" *ngFor=\"let mod of apimodules\">\r\n                                <a (click)=\"getapimethods(mod.MOD_ID)\" data-toggle=\"tab\">{{mod.MOD_NAME}}<span class=\"glyphicon glyphicon-chevron-right\" style=\"float:right;padding-top: 10px;\"></span></a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END LEFT SIDEBAR -->\r\n        <div class=\"main\" style=\"padding-top:80px;height:1046px;width:1660px;left:260px;position:fixed\">\r\n            <!-- MAIN CONTENT -->\r\n            <div class=\"main-content\" style=\"padding-top:100px;\" *ngIf=\"showdata\">\r\n                <div class=\"container-fluid\" style=\"overflow-y:auto\">\r\n                    <!-- OVERVIEW -->\r\n                    <div class=\"panel panel-headline\">\r\n\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"tab-pane active\" id=\"home\">\r\n                                <div class=\"well\">\r\n                                    <div class=\"panel-heading\" style=\"color:#FFFFFF\">\r\n                                        <h3 class=\"panel-title\" style=\"color:cornflowerblue\">Overview about Modules:-</h3>\r\n                                        <p class=\"panel-subtitle\">Available Methods</p>\r\n                                        <label (ngModel)=\"lblmsg\" style=\"color:red\">{{lblmsg}}</label>\r\n                                    </div>\r\n\r\n                                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" style=\"padding:30px;overflow-y:scroll;height:600px;\">\r\n                                        <div class=\"panel panel-default\" *ngFor=\"let m of apimethods\">\r\n                                            <div>\r\n                                                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                                                    <div class=\"row\">\r\n                                                        <div style=\"float:left;width:30%\" (click)=\"showparams=!showparams\">\r\n                                                            <a class=\"collapsed a-button\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" (click)=\"getapiparams(m)\" aria-expanded=\"false\"\r\n                                                               aria-controls=\"collapseOne\">\r\n                                                                {{m.M_NAME}}\r\n                                                            </a>\r\n                                                        </div>\r\n                                                        <div style=\"width:70%;float:right\">\r\n                                                            <p align=\"justify\">{{m.M_DESC}}</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"panel-body\" [hidden]=\"hideme[m.M_ID]\" *ngIf=\"showparams\" style=\"background-color: #fff;\">\r\n                                                    <h2 align=\"center\">{{M_Name}}</h2>\r\n                                                    <div>\r\n                                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                                            <li role=\"presentation\" class=\"active\">\r\n                                                                <a class=\"button\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Parameters List</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                        <div class=\"tab-content\">\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"doc\" *ngFor=\"let mp of apiparams\">\r\n                                                                <!--<b>ParametersList: </b>-->\r\n                                                                <div class=\"highlight col-md-12\">\r\n                                                                    <p class=\"col-md-6\">\r\n                                                                        {{mp.MP_PARAM_NAME}}\r\n                                                                        <!--<a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>-->\r\n                                                                    </p><p class=\"col-md-6\">{{mp.MP_PARAM_DATATYPE}}</p>\r\n                                                                </div>\r\n\r\n                                                                <!--<b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n                                                                </div>-->\r\n                                                            </div>\r\n                                                            <!--<div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\r\n                                                                    <b>Example Response: </b>\r\n                                                                    <div class=\"highlight\">\r\n                                                                        <p>\r\n                                                                            <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                        </p>\r\n                                                                    </div>\r\n\r\n                                                                    <b>Example Request: </b>\r\n                                                                    <div class=\"highlight\">\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>-->\r\n\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <!--</div>\r\n                                        </div>-->\r\n                                        <!--<div class=\"panel panel-default\">\r\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n                                                <div class=\"row\">\r\n                                                    <div style=\"float:left;width:30%\">\r\n                                                        <a class=\"collapsed a-button\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\"\r\n                                                           aria-controls=\"collapseTwo\" style=\"padding:14px 202px 13px 10px;\">\r\n                                                            logout\r\n                                                        </a>\r\n                                                    </div>\r\n                                                    <div style=\"width:70%;float:right\"></div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <h2 align=\"center\">logout</h2>\r\n                                                    <p align=\"justify\">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\r\n                                                    <div>\r\n                                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                                            <li role=\"presentation\" class=\"active\">\r\n                                                                <a class=\"button\" href=\"#home1\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Documentation</a>\r\n                                                            </li>\r\n                                                            <li role=\"presentation\">\r\n                                                                <a class=\"button\" href=\"#profile1\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Testbed</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                        <div class=\"tab-content\">\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home1\">\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile1\">\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"panel panel-default\">\r\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n                                                <div class=\"row\">\r\n                                                    <div style=\"float:left;width:30%\">\r\n                                                        <a class=\"collapsed a-button\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\"\r\n                                                           aria-controls=\"collapseThree\" style=\"padding:14px 118px 13px 10px;\">\r\n                                                            sendPasswordReset\r\n                                                        </a>\r\n                                                    </div>\r\n                                                    <div style=\"width:70%;float:right\"> generates pasword reset code email or sms</div>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <h2 align=\"center\">sendPasswordReset</h2>\r\n                                                    <div>\r\n                                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                                            <li role=\"presentation\" class=\"active\">\r\n                                                                <a class=\"button\" href=\"#home2\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Documentation</a>\r\n                                                            </li>\r\n                                                            <li role=\"presentation\">\r\n                                                                <a class=\"button\" href=\"#profile2\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Testbed</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                        <div class=\"tab-content\">\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home2\">\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile2\">\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        agin\r\n                                        <div class=\"panel panel-default\">\r\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOneone\">\r\n                                                <div class=\"row\">\r\n                                                    <div style=\"float:left;width:30%\">\r\n                                                        <a class=\"collapsed a-button\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOneone\" aria-expanded=\"false\"\r\n                                                           aria-controls=\"collapseOneone\">\r\n                                                            login\r\n                                                        </a>\r\n                                                    </div>\r\n                                                    <div style=\"width:70%;float:right\"> Destroy authorized session</div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div id=\"collapseOneone\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOnonee\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <h2 align=\"center\">login</h2>\r\n                                                    <div>\r\n                                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                                            <li role=\"presentation\" class=\"active\">\r\n                                                                <a class=\"button\" href=\"#doc\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Documentation</a>\r\n                                                            </li>\r\n                                                            <li role=\"presentation\">\r\n                                                                <a class=\"button\" href=\"#profile\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Testbed</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                        <div class=\"tab-content\">\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"doc\">\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile\">\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"panel panel-default\">\r\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwotwo\">\r\n                                                <div class=\"row\">\r\n                                                    <div style=\"float:left;width:30%\">\r\n                                                        <a class=\"collapsed a-button\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOnetwo\" aria-expanded=\"false\"\r\n                                                           aria-controls=\"collapseOnetwo\" style=\"padding:14px 202px 13px 10px;\">\r\n                                                            logout\r\n                                                        </a>\r\n                                                    </div>\r\n                                                    <div style=\"width:70%;float:right\"> Destroy authorized session</div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div id=\"collapseOnetwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwotwo\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <h2 align=\"center\">logout</h2>\r\n                                                    <div>\r\n                                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                                            <li role=\"presentation\" class=\"active\">\r\n                                                                <a class=\"button\" href=\"#home1\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Documentation</a>\r\n                                                            </li>\r\n                                                            <li role=\"presentation\">\r\n                                                                <a class=\"button\" href=\"#profile1\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Testbed</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                        <div class=\"tab-content\">\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home1\">\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile1\">\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"panel panel-default\">\r\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingThreethree\">\r\n                                                <div class=\"row\">\r\n                                                    <div style=\"float:left;width:30%\">\r\n                                                        <a class=\"collapsed a-button\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThreethree\" aria-expanded=\"false\"\r\n                                                           aria-controls=\"collapseThreethree\" style=\"padding:14px 118px 13px 10px;\">\r\n                                                            sendPasswordReset\r\n                                                        </a>\r\n                                                    </div>\r\n                                                    <div style=\"width:70%;float:right\"> generates pasword reset code email or sms</div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div id=\"collapseThreethree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThreethree\">\r\n                                                <div class=\"panel-body\">\r\n                                                    <h2 align=\"center\">sendPasswordReset</h2>\r\n                                                    <div>\r\n                                                        <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                                                            <li role=\"presentation\" class=\"active\">\r\n                                                                <a class=\"button\" href=\"#home2\" aria-controls=\"home\" role=\"tab\" data-toggle=\"tab\">Documentation</a>\r\n                                                            </li>\r\n                                                            <li role=\"presentation\">\r\n                                                                <a class=\"button\" href=\"#profile2\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Testbed</a>\r\n                                                            </li>\r\n                                                        </ul>\r\n                                                        <div class=\"tab-content\">\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"home2\">\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div role=\"tabpanel\" class=\"tab-pane\" id=\"profile2\">\r\n                                                                <b>Example Response: </b>\r\n                                                                <div class=\"highlight\">\r\n                                                                    <p>\r\n                                                                        <a href=\"https://api.gpsinsight.com\">https://api.gpsinsight.com</a>\r\n                                                                    </p>\r\n                                                                </div>\r\n\r\n                                                                <b>Example Request: </b>\r\n                                                                <div class=\"highlight\">\r\n\r\n\r\n\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END MAIN CONTENT -->\r\n        </div>\r\n        <!-- END MAIN -->\r\n        <div class=\"clearfix\"></div>\r\n        <footer>\r\n            <div class=\"container-fluid\">\r\n                <p class=\"copyright\">&copy; 2018 <a href=\"http://www.pllcsoftwaresolutions.com/\" target=\"_blank\">PLLC-Softwaresolutions</a>. All Rights Reserved.</p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n    <!-- END WRAPPER -->\r\n    <!-- Javascript -->\r\n    <script src=\"../../assets/vendor/jquery/jquery.min.js\"></script>\r\n    <script src=\"../../assets/vendor/bootstrap/js/bootstrap.min.js\"></script>\r\n    <script src=\"../../assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js\"></script>\r\n    <script src=\"../../assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js\"></script>\r\n    <script src=\"../../assets/vendor/chartist/js/chartist.min.js\"></script>\r\n    <script src=\"../../assets/scripts/klorofil-common.js\"></script>\r\n    <script>\r\n        $(function () {\r\n            var data, options;\r\n\r\n            // headline charts\r\n            data = {\r\n                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\r\n                series: [\r\n                    [23, 29, 24, 40, 25, 24, 35],\r\n                    [14, 25, 18, 34, 29, 38, 44],\r\n                ]\r\n            };\r\n\r\n            options = {\r\n                height: 300,\r\n                showArea: true,\r\n                showLine: false,\r\n                showPoint: false,\r\n                fullWidth: true,\r\n                axisX: {\r\n                    showGrid: false\r\n                },\r\n                lineSmooth: false,\r\n            };\r\n\r\n            new Chartist.Line('#headline-chart', data, options);\r\n\r\n\r\n            // visits trend charts\r\n            data = {\r\n                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\r\n                series: [{\r\n                    name: 'series-real',\r\n                    data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],\r\n                }, {\r\n                    name: 'series-projection',\r\n                    data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],\r\n                }]\r\n            };\r\n\r\n            options = {\r\n                fullWidth: true,\r\n                lineSmooth: false,\r\n                height: \"270px\",\r\n                low: 0,\r\n                high: 'auto',\r\n                series: {\r\n                    'series-projection': {\r\n                        showArea: true,\r\n                        showPoint: false,\r\n                        showLine: false\r\n                    },\r\n                },\r\n                axisX: {\r\n                    showGrid: false,\r\n\r\n                },\r\n                axisY: {\r\n                    showGrid: false,\r\n                    onlyInteger: true,\r\n                    offset: 0,\r\n                },\r\n                chartPadding: {\r\n                    left: 20,\r\n                    right: 20\r\n                }\r\n            };\r\n\r\n            new Chartist.Line('#visits-trends-chart', data, options);\r\n\r\n\r\n            // visits chart\r\n            data = {\r\n                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],\r\n                series: [\r\n                    [6384, 6342, 5437, 2764, 3958, 5068, 7654]\r\n                ]\r\n            };\r\n\r\n            options = {\r\n                height: 300,\r\n                axisX: {\r\n                    showGrid: false\r\n                },\r\n            };\r\n\r\n            new Chartist.Bar('#visits-chart', data, options);\r\n\r\n\r\n            // real-time pie chart\r\n            var sysLoad = $('#system-load').easyPieChart({\r\n                size: 130,\r\n                barColor: function (percent) {\r\n                    return \"rgb(\" + Math.round(200 * percent / 100) + \", \" + Math.round(200 * (1.1 - percent / 100)) + \", 0)\";\r\n                },\r\n                trackColor: 'rgba(245, 245, 245, 0.8)',\r\n                scaleColor: false,\r\n                lineWidth: 5,\r\n                lineCap: \"square\",\r\n                animate: 800\r\n            });\r\n\r\n            var updateInterval = 3000; // in milliseconds\r\n\r\n            setInterval(function () {\r\n                var randomVal;\r\n                randomVal = getRandomInt(0, 100);\r\n\r\n                sysLoad.data('easyPieChart').update(randomVal);\r\n                sysLoad.find('.percent').text(randomVal);\r\n            }, updateInterval);\r\n\r\n            function getRandomInt(min, max) {\r\n                return Math.floor(Math.random() * (max - min + 1)) + min;\r\n            }\r\n\r\n        });\r\n    </script>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/dash-board/dash-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(service, router) {
        this.service = service;
        this.router = router;
        this.hideme = {};
        this.projects = [];
        this.prjs = [];
        this.modules = [];
        this.apimodules = [];
        this.apimethods = [];
        this.apiparams = [];
        this.showparams = false;
        this.showsidemenu = false;
        this.UserId = JSON.parse(localStorage.getItem('EmployeeId'));
        this.UserEmail = JSON.parse(localStorage.getItem('EmployeeEmail'));
        this.UserName = JSON.parse(localStorage.getItem('EmployeeFirstName'));
        this.UserImage = JSON.parse(localStorage.getItem('EmployeeImage'));
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        this.getproject();
        this.getprjs();
    };
    DashBoardComponent.prototype.getproject = function () {
        var _this = this;
        this.service.getprojects(this.UserId, this.UserEmail).subscribe(function (data) {
            _this.projects = (data[0].Projects);
        });
    };
    DashBoardComponent.prototype.getmodules = function () {
        var _this = this;
        this.service.getmodules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    DashBoardComponent.prototype.getprjs = function () {
        var _this = this;
        this.service.getproj().subscribe(function (data) {
            _this.prjs = data;
        });
    };
    DashBoardComponent.prototype.statusChange = function (value) {
        var _this = this;
        var id = +value;
        var mymodal = { md: { 'mod': id } };
        this.service.getapimodule(mymodal).subscribe(function (data) {
            _this.apimodules = data;
            _this.showsidemenu = true;
            _this.showdata = false;
            _this.lblmsg = "";
        });
        var project = { prj: { 'P_ID': id } };
        this.service.editproject(project).subscribe(function (data) {
            _this.service.getprojects(_this.UserId, _this.UserEmail).subscribe(function (res) {
                for (var i = 0; i < res[0].Projects.length; i++) {
                    if (data[0].P_PEP_P_ID == res[0].Projects[i].Project_Id) {
                        _this.projectlogo = res[0].Projects[i].ProjectLogo;
                    }
                }
            });
        });
    };
    DashBoardComponent.prototype.getapimethods = function (value) {
        var _this = this;
        this.lblmsg = "";
        var id = +value;
        var mymodal = { md: { 'mod': id } };
        this.service.getapimethod(mymodal).subscribe(function (data) {
            _this.apimethods = data;
            _this.showdata = true;
            _this.apiparams = true;
            if (_this.apimethods.length == 0) {
                _this.lblmsg = "No Methods To Display";
            }
        });
    };
    DashBoardComponent.prototype.getapiparams = function (m) {
        var _this = this;
        var id = +m.M_ID;
        var mymodal = { md: { 'mod': id } };
        this.service.getapiparam(mymodal).subscribe(function (data) {
            _this.apiparams = data;
            _this.M_Name = m.M_NAME;
        });
        Object.keys(this.hideme).forEach(function (h) {
            _this.hideme[h] = true;
        });
        this.hideme[m.M_ID] = false;
    };
    DashBoardComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/Login']);
    };
    DashBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__("./src/app/dash-board/dash-board.component.html"),
            styles: [__webpack_require__("./src/app/dash-board/dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.baseurl = 'http://localhost:51680/Service.svc/"';
    }
    GlobalService.prototype.getusers = function (Email, Password) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.append('Email', Email);
        myHeaders.append('Password', Password);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.get('http://pllcapi.azaz.com/api/Login/', options)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    GlobalService.prototype.getuserproject = function (Uid, Email) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Uid', Uid);
        myHeaders.set('Email', Email);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.get('http://pllcapi.azaz.com/api/ProjectsForApp', options)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    GlobalService.prototype.getprojects = function (Uid, Email) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('Uid', Uid);
        myHeaders.set('Email', Email);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.get('http://pllcapi.azaz.com/api/projects', options)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    GlobalService.prototype.getusergplus = function (googleplusid) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        myHeaders.set('gpid', googleplusid);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        return this.http.get('http://pllcapi.azaz.com/api/GetUserInfoUsingGplus/', options)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    GlobalService.prototype.fbcheck = function () {
        return this.http.get('http://pllcapi.azaz.com/api/GetUserInfoUsingFacebook/').map(function (data) { return data.json(); });
    };
    GlobalService.prototype.gpluscheck = function () {
        return this.http.get('http://pllcapi.azaz.com/api/GetUserInfoUsingGplus/').map(function (data) { return data.json(); });
    };
    GlobalService.prototype.getprj = function () {
        return this.http.get('http://localhost:51680/Service.svc/GetProjectInfo')
            .map(function (data) { return data.json(); });
    };
    GlobalService.prototype.getproj = function () {
        return this.http.get('http://localhost:51680/Service.svc/GetProjects')
            .map(function (data) { return data.json(); });
    };
    GlobalService.prototype.dataSave = function (project) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/InsertProject', project)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.editproject = function (project) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/SearchProject', project)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.deleteproject = function (project) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/DeleteRecords', project)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.searchproject = function (project) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/SearchProjects', project)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getmodules = function () {
        return this.http.get('http://localhost:51680/Service.svc/GetmodulesInfo')
            .map(function (data) { return data.json(); });
    };
    GlobalService.prototype.moduleSave = function (mod) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/AddModule', mod)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.editModule = function (Module) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/SearchModule', Module)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.deleteModule = function (Module) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/DeleteModule', Module)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getmethods = function () {
        return this.http.get('http://localhost:51680/Service.svc/GetmethodInfo')
            .map(function (data) { return data.json(); });
    };
    GlobalService.prototype.methodsave = function (method) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/AddMethods', method)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.editMethod = function (method) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/SearchMethod', method)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.deleteMethod = function (method) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/DeleteMethod', method)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getparams = function () {
        return this.http.get('http://localhost:51680/Service.svc/GetParamsInfo')
            .map(function (data) { return data.json(); });
    };
    GlobalService.prototype.paramsave = function (param) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/AddParams', param)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.editParams = function (param) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/SearchMethodParam', param)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.deleteParams = function (param) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/DeleteMethodParam', param)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getapiproject = function (api) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/GetApiProjects', api)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getapimodule = function (api) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/GetApiModules', api)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getapimethod = function (api) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/GetApiMethods', api)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getapiparam = function (api) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.post('http://localhost:51680/Service.svc/GetApiParams', api)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService.prototype.getmodlen = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (sub) {
            _this.http.get('http://localhost:51680/Service.svc/GetProMod')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                sub.next(data);
            }, function (err) {
            });
        });
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 500px) {\n    .omb_row-sm-offset-3 div:first-child[class*=\"col-\"] {\n        margin-left: 25%;\n    }\n}\n\n.omb_login .omb_authTitle {\n    text-align: center;\n    line-height: 300%;\n}\n\n.omb_login .omb_socialButtons a {\n    color: white;\n    // In yourUse @body-bg opacity:0.9;\n}\n\n.omb_login .omb_socialButtons a:hover {\n        color: white;\n        opacity: 1;\n    }\n\n.omb_login .omb_socialButtons .omb_btn-facebook {\n    background: #3b5998;\n    color: white;\n}\n\n.omb_login .omb_socialButtons .omb_btn-google {\n    background: #c32f10;\n    color: white;\n}\n\n.omb_login .omb_loginOr {\n    position: relative;\n    font-size: 1.5em;\n    color: #aaa;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    padding-top: 1em;\n    padding-bottom: 0.5em;\n}\n\n.omb_login .omb_loginOr .omb_hrOr {\n        background-color: #cdcdcd;\n        height: 1px;\n        margin-top: 0px !important;\n        margin-bottom: 0px !important;\n    }\n\n.omb_login .omb_loginOr .omb_spanOr {\n        display: block;\n        position: absolute;\n        left: 50%;\n        top: -0.6em;\n        margin-left: -1.5em;\n        background-color: white;\n        width: 3em;\n        text-align: center;\n    }\n\n.omb_login .omb_loginForm .input-group.i {\n    width: 2em;\n}\n\n.omb_login .omb_loginForm .help-block {\n    color: red;\n}\n\n.omb_login {\n    padding-top: 10em;\n}\n\n.content {\n    background: url(http://jensencpafirm.com/images/background/bg04.jpg);\n}\n\n@media (min-width: 768px) {\n    .omb_login .omb_forgotPwd {\n        text-align: right;\n        margin-top: 10px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\r\n<head>\r\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n    <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js\"></script>\r\n    <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n    <!------ Include the above in your HEAD tag ---------->\r\n    <link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\" rel=\"stylesheet\">\r\n</head>\r\n<body class=\"content\">\r\n    <div class=\"container\">\r\n        <div class=\"omb_login\">\r\n            <h2 class=\"omb_authTitle\"><img src=\"../../assets/img/PLLC_Logo1.png\" /></h2>\r\n            <div class=\"row omb_row-sm-offset-3 omb_socialButtons\">\r\n                <div class=\"col-xs-4 col-sm-2\">\r\n                    <button class=\"btn btn-lg btn-block omb_btn-facebook\">\r\n                        <i class=\"fa fa-facebook visible-xs\"></i>\r\n                        <span class=\"hidden-xs\">Facebook</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"col-xs-4 col-sm-2\">\r\n                </div>\r\n\r\n                <div class=\"col-xs-4 col-sm-2\">\r\n                    <button class=\"btn btn-lg btn-block omb_btn-google\" (click)=\"signIn('google')\">\r\n                        <i class=\"fa fa-google-plus visible-xs\"></i>\r\n                        <span class=\"hidden-xs\">Google+</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row omb_row-sm-offset-3 omb_loginOr\">\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                    <hr class=\"omb_hrOr\">\r\n                    <span class=\"omb_spanOr\">or</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"row omb_row-sm-offset-3\">\r\n                <div class=\"col-xs-12 col-sm-6\">\r\n                    <form [formGroup]=\"loginform\" class=\"omb_loginForm\" action=\"\" autocomplete=\"off\" method=\"POST\">\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"Email address\" [(ngModel)]=\"username\">\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\r\n                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"getuser(username,password)\">Login</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"row omb_row-sm-offset-3\">\r\n                <!--<div class=\"col-xs-12 col-sm-3\">\r\n                    <label class=\"checkbox\">\r\n                        <input type=\"checkbox\" value=\"remember-me\" [(ngModel)]=\"remember\">Remember Me\r\n                    </label>\r\n                </div>-->\r\n                <!--<div class=\"col-xs-12 col-sm-6\">\r\n                    <p class=\"omb_forgotPwd\">\r\n                        <a href=\"#\">Forgot password?</a>\r\n                    </p>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_social_login__ = __webpack_require__("./node_modules/angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("./src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, router, service, form) {
        this._auth = _auth;
        this.router = router;
        this.service = service;
        this.form = form;
        this.user = [];
        this.gplus = [];
        this.model = {};
        this.employee = [];
        this.loginform = this.form.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].pattern("^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$")]],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.logout();
        this.clear();
    };
    LoginComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            _this.user = data;
            _this.service.getusergplus(_this.user.uid).subscribe(function (data1) {
                _this.gplus = data1;
                _this.router.navigate(['/Projects']);
                localStorage.setItem('EmployeeId', JSON.stringify(_this.gplus.UserId));
                localStorage.setItem('EmployeeEmail', JSON.stringify(_this.gplus.UserEmail));
                localStorage.setItem('EmployeeFirstName', JSON.stringify(_this.user.name));
                localStorage.setItem('EmployeeImage', JSON.stringify(_this.user.image));
            });
        });
    };
    LoginComponent.prototype.getuser = function (Email, Password) {
        var _this = this;
        var count = 0;
        var message = "";
        var emailexp = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (this.loginform.invalid) {
            if (this.username == null || this.username == "" || this.username == "undefined") {
                count = count + 1;
                message += "(" + count + ")" + "Enter Email address \n";
            }
            else if (this.username != null && !emailexp.test(this.username)) {
                count = count + 1;
                message += "(" + count + ")" + "Enter valid Email address \n";
            }
            if (this.password == null || this.password == "" || this.password == "undefined") {
                count = count + 1;
                message += "(" + count + ")" + "Enter Password";
            }
            alert(message);
        }
        else {
            this.service.getusers(this.username, this.password).subscribe(function (data) {
                _this.employee = data;
                if (_this.employee.length != 0) {
                    localStorage.setItem('EmployeeId', JSON.stringify(_this.employee[0].EmployeeID));
                    localStorage.setItem('EmployeeEmail', JSON.stringify(_this.employee[0].EmployeeEmail));
                    localStorage.setItem('EmployeeFirstName', JSON.stringify(_this.employee[0].EmployeeFirstName));
                    localStorage.setItem('EmployeeImage', JSON.stringify(_this.employee[0].EmployeeProfileImage));
                    _this.router.navigate(['/Projects']);
                }
                else {
                    alert("Invalid Email address/Password");
                }
            });
        }
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (data) {
            _this.user = null;
            localStorage.clear();
        });
    };
    LoginComponent.prototype.clear = function () {
        this.username == "";
        this.password == "";
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_social_login__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/methods/methods.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n    padding-left: 15em;\r\n}\r\n\r\n.card-grid {\r\n    color: white;\r\n    background-color: darkgray;\r\n    border-radius: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.panel .panel-body {\r\n    padding-top: 10px;\r\n    padding-bottom: 15px;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.form-group {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.428571429;\r\n    border-radius: 15px;\r\n}\r\n\r\n.addbutton{\r\n  height:30px;\r\n  width:60px;\r\n  border-radius:30px;\r\n  top: 22px;\r\n}\r\n\r\n.msg_panel {max-height:570px; overflow-y:auto; overflow-x:hidden; }"

/***/ }),

/***/ "./src/app/methods/methods.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#efefef;height:130px\">\r\n    <div class=\"brand\">\r\n        <a href=\"Projects\"><img src=\"../../assets/img/PLLC_Logo1.png\" alt=\"Klorofil Logo\" class=\"img-responsive logo\"></a><!--<h3>API Guide for Projects</h3>-->\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"nav navbar-header\">\r\n            <h3 style=\"margin-top:30px\">API Guide For Projects</h3>\r\n        </div>\r\n        <div class=\"navbar-btn navbar-btn-right\">\r\n            <button class=\"update-pro\" (click)=\"logout()\">\r\n                <span class=\"glyphicon glyphicon-off\" style=\"font-size:28px;color:rgb(234, 0, 0)\"></span>\r\n                <!-- <i class=\"fa fa-expeditedssl\" style=\"font-size:28px;color:red\"></i> -->\r\n            </button>\r\n        </div>\r\n        <div id=\"navbar-menu\">\r\n            <ul class=\"nav navbar-nav navbar-right\" style=\"padding-top:15px\">\r\n\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"http://www.pllcpep.com/Uploads/Profile/{{UserImage}}\" class=\"img-circle\" style=\"width:30px\" alt=\"Avatar\"> <b>{{Username}}</b> </a>\r\n                    <!-- <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-user\"></i>  <span>My Profile</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i>  <span>Message</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-cog\"></i>  <span>Settings</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-exit\"></i>  <span>Logout</span></a></li>\r\n                    </ul> -->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a href=\"Projects\">Projects</a></li>\r\n                <li><a href=\"DashBoard\">Vew API Details</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</nav>\r\n\r\n<div class=\"container align-content-center\" style=\"padding-top:150px\">\r\n    <div class=\"container align-content-center\" *ngIf=\"Panel1\">\r\n        <div align=\"center\" class=\"col-md-12 col-xs-12\">\r\n            <label (ngModel)=\"lblmsg\" style=\"color:red\">{{lblmsg}}</label>\r\n        </div>\r\n        <div align=\"right\" class=\"col-md-12\"><label style=\"color:white\">Total Records:{{Methodslength}}</label></div>\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-6 col-xs-12\"><h3>Methods For {{P_Name}} - {{ModuleNAME}}</h3></div>\r\n            <div class=\"col-md-6 col-xs-12\" style=\"padding-top:20px;text-align:right\">\r\n                <button align=\"right\" type=\"button\" class=\"btn btn-primary btn-sm addbutton\" (click)=\"addMethods()\">\r\n                    <span class=\"glyphicon glyphicon-plus-sign\"></span> Add\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"container align-content-center msg_panel\">\r\n        <div class=\"card\">\r\n            <div *ngFor=\"let method of apimethods | orderBy:'M_ID'\">\r\n                <div class=\"card-body card-grid col-md-12\" style=\"margin-bottom:20px;\">\r\n                    <div class=\"col-md-6 col-xs-12\">\r\n                        <h4 class=\"card-title text-left\" style=\"padding-top:10px\">{{method.M_NAME}}</h4>\r\n                        <p class=\"card-title text-left\">{{method.M_DESC}}</p>\r\n                        <p class=\"card-text text-left\">\r\n                            Method Params:&nbsp;&nbsp;{{method.mid}}&nbsp;&nbsp;<a class=\"glyphicon glyphicon-eye-open\" (click)=\"viewDetails(method)\"></a>&nbsp;&nbsp;<a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addParams(method)\"></a>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-12\" style=\"padding-top:10px;text-align:right\">\r\n                        <button *ngIf=\"method.action\" title=\"Active\" type=\"button\" class=\"btn btn-info btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n                        <button *ngIf=\"method.action1\" title=\"In-Active\" style=\"background-color:orange\" type=\"button\" class=\"btn btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-time\"></i></button>\r\n                        <button *ngIf=\"method.action2\" title=\"Deleted\" type=\"button\" class=\"btn btn-danger btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-remove\"></i></button>\r\n                        <button type=\"button\" class=\"btn btn-success btn-sm-2 btns\" (click)=\"editmethod(method)\">\r\n                            <span class=\"glyphicon glyphicon-list\"></span>\r\n                        </button>\r\n                        <button align=\"center\" type=\"button\" class=\"btn btn-danger btn-sm-2\" (click)=\"deletemethod(method)\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"text-align:right;padding-top:10px\">\r\n            <button class=\"btn btn-primary\" (click)=\"backtomod()\"> << Modules</button>\r\n            <button class=\"btn btn-danger\" (click)=\"cancelView()\">Dashboard</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form [formGroup]=\"methodform\" novalidate>\r\n    <div class=\"container align-content-center\">\r\n        <div class=\"row\" *ngIf=\"Panel2\">\r\n            <div align=\"center\"><label class=\"col-sm-10\" for=\"status\" (ngModel)=\"lbl\">{{lbl}}</label></div>\r\n            <!-- panel preview -->\r\n            <div class=\"col-md-12\">\r\n                <h3 class=\"text-left\">Methods ({{action}})</h3>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body form-horizontal modules-form\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-5 col-xs-12\">\r\n                                <label for=\"ModuleName\" class=\"control-label\">Module Name</label>\r\n                                <select class=\"form-control\" id=\"ModuleName\" formControlName=\"ModuleName\" [ngModel]=\"ModuleID\" (change)=\"statusChange($event.target.value)\">\r\n                                    <option [value]=\"undefined\">---Select Module---</option>\r\n                                    <option *ngFor=\"let m of Modules\" [value]=\"m.MOD_ID\" [selected]=\"m.MOD_ID==ModuleID\">{{m.MOD_NAME}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-5 col-xs-12\">\r\n                                <label for=\"MethodName\" class=\"control-label\">Method Name</label>\r\n                                <input maxlength=\"30\" class=\"form-control\" id=\"MethodName\" formControlName=\"MethodName\" [(ngModel)]=\"MethodName\" />\r\n                            </div>\r\n                            <div class=\"col-md-5 col-xs-12\">\r\n                                <label for=\"Methods\" class=\"control-label\">Method Type</label>\r\n                                <select class=\"form-control\" id=\"MethodType\" formControlName=\"MethodType\" [(ngModel)]=\"MethodType\">\r\n                                    <option [value]=\"undefined\">--select Method Type--</option>\r\n                                    <option>GET</option>\r\n                                    <option>POST</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Description\" class=\"control-label\">Description</label>\r\n                                <textarea class=\"form-control\" id=\"Description\" formControlName=\"Description\" [(ngModel)]=\"Description\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"ReqUrl\" class=\"control-label\">Request URL Sample</label>\r\n                                <textarea maxlength=\"1500\" class=\"form-control\" id=\"ReqUrl\" formControlName=\"ReqUrl\" [(ngModel)]=\"ReqUrl\" (keyup)=\"changed()\"></textarea>\r\n                                Char Left:{{ charsLeft }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"ResSam\" class=\"control-label\">Response Sample</label>\r\n                                <textarea class=\"form-control\" id=\"ResSam\" formControlName=\"ResSam\" [(ngModel)]=\"ResSam\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\" *ngIf=\"check\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <label for=\"checkbox\" class=\"control-label\">Active</label>\r\n                                <input type=\"checkbox\" formControlName=\"Checkbox\" [(ngModel)]=\"checkbox\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <button class=\"btn btn-primary\" align=\"center\" type=\"submit\" (click)=\"save()\">Save</button>\r\n                                <button class=\"btn btn-primary\" align=\"center\" type=\"submit\" (click)=\"savenaddmethod()\">Save & Add Method</button>\r\n                                <button class=\"btn btn-primary\" align=\"center\" type=\"submit\" (click)=\"savenparam()\">Save & Add Parameters</button>\r\n                                <button class=\"btn btn-danger\" align=\"center\" type=\"submit\" (click)=\"cancel()\">Cancel</button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!-- / panel preview -->\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/methods/methods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MethodsComponent = /** @class */ (function () {
    function MethodsComponent(router, service, form) {
        this.router = router;
        this.service = service;
        this.form = form;
        this.charsLeft = 1500;
        this.Modules = [];
        this.apimethods = [];
        this.user = [];
        this.nav = true;
        this.Panel1 = JSON.parse(localStorage.getItem('Panel1'));
        this.Panel2 = JSON.parse(localStorage.getItem('Panel2'));
        this.UserId = JSON.parse(localStorage.getItem('EmployeeId'));
        this.UserEmail = JSON.parse(localStorage.getItem('EmployeeEmail'));
        this.Username = JSON.parse(localStorage.getItem('EmployeeFirstName'));
        this.UserImage = JSON.parse(localStorage.getItem('EmployeeImage'));
        this.ModuleID = JSON.parse(localStorage.getItem('ModuleID'));
        this.ModuleNAME = JSON.parse(localStorage.getItem('ModuleName'));
        this.P_Name = JSON.parse(localStorage.getItem('projectname'));
        this.methodform = this.form.group({
            ModuleName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            MethodName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            MethodType: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            Description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            ReqUrl: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")]],
            ResSam: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            Checkbox: ''
        });
    }
    MethodsComponent.prototype.ngOnInit = function () {
        this.Action = 'A';
        this.ProjectId = JSON.parse(localStorage.getItem('projectid'));
        this.ModuleID = JSON.parse(localStorage.getItem('ModuleID'));
        this.ModuleNAME = JSON.parse(localStorage.getItem('ModuleName'));
        this.getmodules();
        this.getallmethods();
        this.action = "add";
    };
    MethodsComponent.prototype.getmodules = function () {
        var _this = this;
        var mymodel = { md: { 'mod': this.ProjectId } };
        this.service.getapimodule(mymodel).subscribe(function (data) {
            _this.Modules = data;
        });
    };
    MethodsComponent.prototype.addMethods = function () {
        this.lblmsg = "";
        this.Panel1 = false;
        this.Panel2 = true;
        this.Action = 'A';
        this.action = "add";
    };
    MethodsComponent.prototype.addParams = function (method) {
        localStorage.setItem("projectid", JSON.stringify(this.ProjectId));
        localStorage.setItem("projectname", JSON.stringify(this.P_Name));
        localStorage.setItem("moduleid", JSON.stringify(this.ModuleID));
        localStorage.setItem("modulename", JSON.stringify(this.ModuleNAME));
        localStorage.setItem("MethodId", JSON.stringify(method.M_ID));
        localStorage.setItem("Methodname", JSON.stringify(method.M_Name));
        localStorage.setItem('Panel1', JSON.stringify(false));
        localStorage.setItem('Panel2', JSON.stringify(true));
        this.router.navigate(['/ModuleParams']);
    };
    MethodsComponent.prototype.getallmethods = function () {
        var _this = this;
        if (this.ModuleID != 0 && this.ModuleID != null && this.ModuleID != "undefined") {
            var mymodel = { md: { 'mod': this.ModuleID } };
            this.service.getapimethod(mymodel).subscribe(function (data) {
                _this.Methodslength = data.length;
                var _loop_1 = function (k) {
                    mymodel = { md: { 'mod': data[k].M_ID } };
                    _this.service.getapiparam(mymodel).subscribe(function (res) {
                        if (k < data.length) {
                            if (data[k].M_ACTIVE == "Y") {
                                _this.statuscheck = true;
                                _this.activecheck = false;
                                _this.deletecheck = false;
                            }
                            if (data[k].M_ACTIVE == "N") {
                                _this.statuscheck = false;
                                _this.activecheck = true;
                                _this.deletecheck = false;
                            }
                            if (data[k].M_ACTIVE == "D") {
                                _this.deletecheck = true;
                                _this.statuscheck = false;
                                _this.activecheck = false;
                            }
                            //else {
                            //    this.statuscheck = false;
                            //}
                        }
                        _this.apimethods.push({
                            'M_ID': data[k].M_ID, 'M_MOD_ID': data[k].M_MOD_ID, 'M_NAME': data[k].M_NAME, 'M_TYPE': data[k].M_TYPE, 'M_DESC': data[k].M_DESC,
                            'M_REQUEST_URL_SAMPLE': data[k].M_REQUEST_URL_SAMPLE, 'M_RESPONCE_URL_SAMPLE': data[k].M_RESPONCE_SAMPLE, 'M_ACTIVE': data[k].M_ACTIVE, 'mid': res.length, 'action': _this.statuscheck, 'action1': _this.activecheck,
                            'action2': _this.deletecheck
                        });
                    });
                };
                var mymodel;
                for (var k = 0; k < data.length; k++) {
                    _loop_1(k);
                }
                if (data.length == 0) {
                    _this.lblmsg = "No Methods To Display";
                }
            });
        }
        else {
            var count = 0;
            var mymodel = { md: { 'mod': this.ProjectId } };
            this.service.getapimodule(mymodel).subscribe(function (data) {
                for (var j = 0; j < data.length; j++) {
                    var mymodel1 = { md: { 'mod': data[j].MOD_ID } };
                    _this.service.getapimethod(mymodel1).subscribe(function (res) {
                        count = count + res.length;
                        var _loop_2 = function (l) {
                            mymodel = { md: { 'mod': res[l].M_ID } };
                            _this.service.getapiparam(mymodel).subscribe(function (res1) {
                                if (l < res.length) {
                                    if (res[l].M_ACTIVE == "Y") {
                                        _this.statuscheck = true;
                                        _this.activecheck = false;
                                        _this.deletecheck = false;
                                    }
                                    if (res[l].M_ACTIVE == "N") {
                                        _this.statuscheck = false;
                                        _this.activecheck = true;
                                        _this.deletecheck = false;
                                    }
                                    if (res[l].M_ACTIVE == "D") {
                                        _this.deletecheck = true;
                                        _this.statuscheck = false;
                                        _this.activecheck = false;
                                    }
                                    //else {
                                    //    this.statuscheck = false;
                                    //}
                                }
                                _this.apimethods.push({
                                    'M_ID': res[l].M_ID, 'M_MOD_ID': res[l].M_MOD_ID, 'M_NAME': res[l].M_NAME, 'M_TYPE': res[l].M_TYPE, 'M_DESC': res[l].M_DESC,
                                    'M_REQUEST_URL_SAMPLE': res[l].M_REQUEST_URL_SAMPLE, 'M_RESPONCE_URL_SAMPLE': res[l].M_RESPONCE_SAMPLE, 'mid': res1.length, 'action': _this.statuscheck, 'action1': _this.activecheck,
                                    'action2': _this.deletecheck
                                });
                            });
                        };
                        var mymodel;
                        for (var l = 0; l < res.length; l++) {
                            _loop_2(l);
                        }
                        _this.Methodslength = count;
                        if (_this.Methodslength == 0) {
                            _this.lblmsg = "No Methods To Display";
                        }
                    });
                }
                if (data.length == 0) {
                    _this.lblmsg = "No Methods To Display";
                }
            });
        }
    };
    MethodsComponent.prototype.save = function () {
        var _this = this;
        this.apimethods = [];
        if (this.methodform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.MethodId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.MethodId = this.user.M_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            if (this.MethodType == "GET") {
                this.type = "G";
            }
            if (this.MethodType == "POST") {
                this.type = "P";
            }
            var mymodal = { m: { 'action': this.Action, 'M_ID': this.MethodId, 'M_MOD_ID': this.ModuleID, 'M_NAME': this.MethodName, 'M_TYPE': this.type, 'M_DESC': this.Description, 'M_REQUEST_URL_SAMPLE': this.ReqUrl, 'M_RESPONCE_URL_SAMPLE': this.ResSam, 'M_ACTIVE': this.status } };
            this.service.methodsave(mymodal).subscribe(function (data) {
                _this.lbl = data;
                _this.getallmethods();
                _this.router.navigate(['/Projects']);
            });
            this.clear();
            this.Panel1 = true;
            this.Panel2 = false;
        }
    };
    MethodsComponent.prototype.editmethod = function (m) {
        var _this = this;
        var Method = { m: m };
        this.service.editMethod(Method).subscribe(function (data) {
            _this.user = data[0];
            _this.Panel1 = false;
            _this.Panel2 = true;
            _this.check = true;
            if (data[0].M_ACTIVE == "Y") {
                _this.checkbox = true;
            }
            else {
                _this.checkbox = false;
            }
            if (data[0].M_TYPE == "G") {
                _this.MethodType = "GET";
            }
            else {
                _this.MethodType = "POST";
            }
            _this.ModuleID = data[0].M_MOD_ID;
            _this.MethodName = data[0].M_NAME;
            _this.Description = data[0].M_DESC;
            _this.ReqUrl = data[0].M_REQUEST_URL_SAMPLE;
            _this.ResSam = data[0].M_RESPONCE_URL_SAMPLE;
            _this.charsLeft = 1500 - data[0].M_REQUEST_URL_SAMPLE.length;
        });
        this.Action = 'U';
        this.lbl = "";
        this.action = "edit";
    };
    MethodsComponent.prototype.deletemethod = function (m) {
        var _this = this;
        this.apimethods = [];
        var Method = { m: m };
        this.service.deleteMethod(Method).subscribe(function (data) {
            _this.lbl = data;
            _this.getallmethods();
            //window.location.reload();
            _this.router.navigate(['/Modules']);
        });
    };
    MethodsComponent.prototype.savenaddmethod = function () {
        var _this = this;
        if (this.methodform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.MethodId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.MethodId = this.user.M_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            if (this.MethodType == "GET") {
                this.type = "G";
            }
            if (this.MethodType == "POST") {
                this.type = "P";
            }
            var mymodal = { m: { 'action': this.Action, 'M_ID': this.MethodId, 'M_MOD_ID': this.ModuleID, 'M_NAME': this.MethodName, 'M_TYPE': this.type, 'M_DESC': this.Description, 'M_REQUEST_URL_SAMPLE': this.ReqUrl, 'M_RESPONCE_URL_SAMPLE': this.ResSam, 'M_ACTIVE': this.status } };
            this.service.methodsave(mymodal).subscribe(function (data) {
                _this.lbl = data;
            });
            this.clear();
        }
    };
    MethodsComponent.prototype.savenparam = function () {
        var _this = this;
        if (this.methodform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.MethodId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.MethodId = this.user.M_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            if (this.MethodType == "GET") {
                this.type = "G";
            }
            if (this.MethodType == "POST") {
                this.type = "P";
            }
            var mymodal = { m: { 'action': this.Action, 'M_ID': this.MethodId, 'M_MOD_ID': this.ModuleID, 'M_NAME': this.MethodName, 'MOD_DESC': this.Description, 'M_TYPE': this.type, 'M_DESC': this.Description, 'M_REQUEST_URL_SAMPLE': this.ReqUrl, 'M_RESPONCE_URL_SAMPLE': this.ResSam, 'M_ACTIVE': this.status } };
            this.service.methodsave(mymodal).subscribe(function (data) {
                _this.lbl = data;
                localStorage.setItem("projectid", JSON.stringify(_this.ProjectId));
                localStorage.setItem("projectname", JSON.stringify(_this.P_Name));
                localStorage.setItem("moduleid", JSON.stringify(_this.ModuleID));
                localStorage.setItem("modulename", JSON.stringify(_this.ModuleNAME));
                localStorage.setItem("MethodId", JSON.stringify(_this.MethodId));
                localStorage.setItem("mname", JSON.stringify(_this.MethodName));
                _this.router.navigate(['/ModuleParams']);
                localStorage.setItem('Panel1', JSON.stringify(false));
                localStorage.setItem('Panel2', JSON.stringify(true));
            });
            this.clear();
        }
    };
    MethodsComponent.prototype.cancel = function () {
        this.apimethods = [];
        this.clear();
        this.Panel1 = true;
        this.Panel2 = false;
        this.ngOnInit();
    };
    MethodsComponent.prototype.cancelView = function () {
        this.router.navigate(['/Projects']);
    };
    MethodsComponent.prototype.clear = function () {
        this.ModuleName = "undefined";
        this.MethodName = "";
        this.MethodType = "undefined";
        this.Description = "";
        this.ReqUrl = "";
        this.ResSam = "";
        this.checkbox = false;
    };
    MethodsComponent.prototype.backtomod = function () {
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        localStorage.setItem("P_Name", JSON.stringify(this.P_Name));
        localStorage.setItem("ProjectId", JSON.stringify(this.ProjectId));
        this.router.navigate(['/Modules']);
    };
    MethodsComponent.prototype.viewDetails = function (method) {
        localStorage.setItem("projectid", JSON.stringify(this.ProjectId));
        localStorage.setItem("projectname", JSON.stringify(this.P_Name));
        localStorage.setItem("moduleid", JSON.stringify(this.ModuleID));
        localStorage.setItem("modulename", JSON.stringify(this.ModuleNAME));
        localStorage.setItem("MethodId", JSON.stringify(method.M_ID));
        localStorage.setItem("mname", JSON.stringify(method.M_NAME));
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        this.router.navigate(['/ModuleParams']);
    };
    MethodsComponent.prototype.statusChange = function (value) {
        this.ModuleID = value;
    };
    MethodsComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/Login']);
    };
    MethodsComponent.prototype.changed = function () {
        this.charsLeft = 1500 - this.ReqUrl.length;
    };
    MethodsComponent.prototype.validations = function () {
        var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        var count = 0;
        var message = "";
        if (this.ModuleID == null || this.ModuleID == "" || this.ModuleID == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Select Module Name\n";
        }
        if (this.MethodName == null || this.MethodName == "" || this.MethodName == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Method Name\n";
        }
        if (this.MethodType == null || this.MethodType == "" || this.MethodType == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Select Method Type\n";
        }
        if (this.Description == null || this.Description == "" || this.Description == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Description\n";
        }
        if (this.ReqUrl == null || this.ReqUrl == "" || this.ReqUrl == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Request URL Sample\n";
        }
        else if (this.ReqUrl != "" && !re.test(this.ReqUrl)) {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Valid Request URL Sample\n";
        }
        if (this.ResSam == null || this.ResSam == "" || this.ResSam == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Response Sample\n";
        }
        alert(message);
    };
    MethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-methods',
            template: __webpack_require__("./src/app/methods/methods.component.html"),
            styles: [__webpack_require__("./src/app/methods/methods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], MethodsComponent);
    return MethodsComponent;
}());



/***/ }),

/***/ "./src/app/module-parameters/module-parameters.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n    padding-left: 15em;\r\n}\r\n\r\n.card-grid {\r\n    color: white;\r\n    background-color: darkgray;\r\n    border-radius: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.panel .panel-body {\r\n    padding-top: 10px;\r\n    padding-bottom: 15px;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.form-group {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.428571429;\r\n    border-radius: 15px;\r\n}\r\n\r\n.addbutton{\r\n  height:30px;\r\n  width:60px;\r\n  border-radius:30px;\r\n  top: 22px;\r\n}\r\n\r\n.msg_panel {max-height:570px; overflow-y:auto; overflow-x:hidden; }\r\n"

/***/ }),

/***/ "./src/app/module-parameters/module-parameters.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#efefef;height:130px\">\r\n    <div class=\"brand\">\r\n        <a href=\"Projects\"><img src=\"../../assets/img/PLLC_Logo1.png\" alt=\"Klorofil Logo\" class=\"img-responsive logo\"></a><!--<h3>API Guide for Projects</h3>-->\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"nav navbar-header\">\r\n            <h3 style=\"margin-top:30px\">API Guide For Projects</h3>\r\n        </div>\r\n        <div class=\"navbar-btn navbar-btn-right\">\r\n            <button class=\"update-pro\" (click)=\"logout()\">\r\n                <span class=\"glyphicon glyphicon-off\" style=\"font-size:28px;color:rgb(234, 0, 0)\"></span>\r\n                <!-- <i class=\"fa fa-expeditedssl\" style=\"font-size:28px;color:red\"></i> -->\r\n            </button>\r\n        </div>\r\n        <div id=\"navbar-menu\">\r\n            <ul class=\"nav navbar-nav navbar-right\" style=\"padding-top:15px\">\r\n\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"http://www.pllcpep.com/Uploads/Profile/{{UserImage}}\" class=\"img-circle\" style=\"width:30px\" alt=\"Avatar\"> <b>{{Username}}</b> </a>\r\n                    <!-- <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-user\"></i>  <span>My Profile</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i>  <span>Message</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-cog\"></i>  <span>Settings</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-exit\"></i>  <span>Logout</span></a></li>\r\n                    </ul> -->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a href=\"Projects\">Projects</a></li>\r\n                <li><a href=\"DashBoard\">Vew API Details</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</nav>\r\n\r\n<div class=\"container align-content-center\" style=\"padding-top:150px\">\r\n    <div class=\"container align-content-center\" *ngIf=\"Panel1\">\r\n        <div align=\"center\" class=\"col-md-12 col-xs-12\">\r\n            <label (ngModel)=\"lblmsg\" style=\"color:red\">{{lblmsg}}</label>\r\n        </div>\r\n        <div align=\"right\" class=\"col-md-12\"><label style=\"color:white\">Total Records:{{Paramslength}}</label></div>\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-6 col-xs-12\"><h3>Parameters For {{P_Name}} - {{modulename}} - {{name}}</h3></div>\r\n            <div class=\"col-md-6 col-xs-12\" style=\"padding-top:20px;text-align:right\">\r\n                <span class=\"col-md-6\"></span>\r\n                <button align=\"right\" type=\"button\" class=\"btn btn-primary btn-sm addbutton\" (click)=\"addParams()\">\r\n                    <span class=\"glyphicon glyphicon-plus-sign\"></span> Add\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"container align-content-center msg_panel\">\r\n            <div class=\"card\">\r\n                <div *ngFor=\"let params of apiparams | orderBy:MP_ID\">\r\n                    <div class=\"card-body card-grid col-md-12\" style=\"margin-bottom:20px;\">\r\n                        <div class=\"col-md-6 col-xs-12\">\r\n                            <h4 class=\"card-title text-left\" style=\"padding-top:10px\">{{params.MP_PARAM_NAME}}</h4>\r\n                            <p class=\"card-title text-left\">{{params.MP_DESC}}</p>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-12\" style=\"padding-top:10px;text-align:right\">\r\n                            <button *ngIf=\"params.action\" title=\"Active\" type=\"button\" class=\"btn btn-info btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n                            <button *ngIf=\"params.action1\" title=\"In-Active\" style=\"background-color:orange\" type=\"button\" class=\"btn btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-time\"></i></button>\r\n                            <button *ngIf=\"params.action2\" title=\"Deleted\" type=\"button\" class=\"btn btn-danger btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-remove\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-sm-2 btns\" (click)=\"editparam(params)\">\r\n                                <span class=\"glyphicon glyphicon-list\"></span>\r\n                            </button>\r\n                            <button align=\"center\" type=\"button\" class=\"btn btn-danger btn-sm-2\" (click)=\"deleteparam(params)\">\r\n                                <span class=\"glyphicon glyphicon-trash\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"text-align:right;padding-top:10px\">\r\n            <button class=\"btn btn-primary\" (click)=\"BackToMethods()\"> << Methods </button>\r\n            <button class=\"btn btn-danger\" (click)=\"cancelView()\">Dashboard</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form [formGroup]=\"paramform\" novalidate>\r\n    <div class=\"container align-content-center\">\r\n        <div class=\"row\" *ngIf=\"Panel2\">\r\n            <div align=\"center\"><label class=\"col-sm-10\" for=\"status\" (ngModel)=\"lbl\">{{lbl}}</label></div>\r\n            <!-- panel preview -->\r\n            <div class=\"col-md-12\">\r\n                <h3 class=\"text-left\">Parameters ({{action}})</h3>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body form-horizontal parameters-form\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-5 col-xs-12\">\r\n                                <label for=\"Method\" class=\"control-label\">Method Name</label>\r\n                                <select class=\"form-control\" id=\"Method\" formControlName=\"Method\" [(ngModel)]=\"methodid\" (change)=\"statusChange($event.target.value)\">\r\n                                    <option [value]=\"undefined\">---Select Method---</option>\r\n                                    <option *ngFor=\"let mp of Methods\" [value]=\"mp.M_ID\" [selected]=\"mp.M_ID==methodid\">{{mp.M_NAME}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-5 col-xs-12\">\r\n                                <label for=\"Parameter\" class=\"control-label\">Parameter Name</label>\r\n                                <input type=\"text\" maxlength=\"30\" class=\"form-control\" id=\"Parameter\" formControlName=\"Parameter\" [(ngModel)]=\"Parameter\">\r\n                            </div>\r\n                            <div class=\"col-md-5 col-xs-12\">\r\n                                <label for=\"DataType\" class=\"control-label\">Data Type</label>\r\n                                <select class=\"form-control\" id=\"DataType\" formControlName=\"DataType\" [(ngModel)]=\"DataType\" (change)=\"statusChange1(DataType)\">\r\n                                    <option [value]=\"undefined\">---Select DataType---</option>\r\n                                    <option>int</option>\r\n                                    <option>float</option>\r\n                                    <option>char</option>\r\n                                    <option>boolean</option>\r\n                                    <option>double</option>\r\n                                    <option>string</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Description\" class=\"control-label\">Description</label>\r\n                                <textarea maxlength=\"450\" class=\"form-control\" id=\"Description\" formControlName=\"Description\" [(ngModel)]=\"Description\" (keyup)=\"changed()\"></textarea>\r\n                                Char Left:{{ charsLeft }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\" *ngIf=\"check\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <label for=\"checkbox\" class=\"control-label\">Active</label>\r\n                                <input type=\"checkbox\" formControlName=\"Checkbox\" [(ngModel)]=\"checkbox\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <button class=\"btn btn-primary\" type=\"submit\" (click)=\"save()\">Save</button>\r\n                                <button class=\"btn btn-primary text-center\" type=\"submit\" (click)=\"savenew()\">Save & Add New</button>\r\n                                <button class=\"btn btn-danger\" type=\"submit\" (click)=\"cancel()\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!-- / panel preview -->\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/module-parameters/module-parameters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleParametersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("./src/app/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuleParametersComponent = /** @class */ (function () {
    function ModuleParametersComponent(router, service, form) {
        this.router = router;
        this.service = service;
        this.form = form;
        this.charsLeft = 450;
        this.Methods = [];
        this.apiparams = [];
        this.user = [];
        this.Panel1 = JSON.parse(localStorage.getItem('Panel1'));
        this.Panel2 = JSON.parse(localStorage.getItem('Panel2'));
        this.nav = true;
        this.UserId = JSON.parse(localStorage.getItem('EmployeeId'));
        this.UserEmail = JSON.parse(localStorage.getItem('EmployeeEmail'));
        this.Username = JSON.parse(localStorage.getItem('EmployeeFirstName'));
        this.UserImage = JSON.parse(localStorage.getItem('EmployeeImage'));
        this.methodid = JSON.parse(localStorage.getItem('MethodId'));
        this.modulename = JSON.parse(localStorage.getItem('modulename'));
        this.P_Name = JSON.parse(localStorage.getItem('projectname'));
        this.name = JSON.parse(localStorage.getItem('mname'));
        this.paramform = this.form.group({
            Method: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            Parameter: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            DataType: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            Description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            Checkbox: ''
        });
    }
    ModuleParametersComponent.prototype.ngOnInit = function () {
        this.Action = 'A';
        this.ProjectId = JSON.parse(localStorage.getItem('projectid'));
        this.ModuleId = JSON.parse(localStorage.getItem('moduleid'));
        this.methodid = JSON.parse(localStorage.getItem('MethodId'));
        this.getmethod();
        this.getallparams();
        this.action = "add";
    };
    ModuleParametersComponent.prototype.addParams = function () {
        this.lblmsg = "";
        this.Panel1 = false;
        this.Panel2 = true;
        this.Action = 'A';
        this.action = "add";
    };
    ModuleParametersComponent.prototype.getmethod = function () {
        var _this = this;
        var mymodel = { md: { 'mod': this.ProjectId } };
        this.service.getapimodule(mymodel).subscribe(function (data) {
            for (var k = 0; k < data.length; k++) {
                var mymodel = { md: { 'mod': data[k].MOD_ID } };
                _this.service.getapimethod(mymodel).subscribe(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        _this.Methods.push({
                            'M_ID': res[i].M_ID, 'M_NAME': res[i].M_NAME
                        });
                    }
                });
            }
        });
    };
    ModuleParametersComponent.prototype.getallparams = function () {
        var _this = this;
        if (this.methodid != 0 && this.methodid != null && this.methodid != "undefined") {
            var mymodel = { md: { 'mod': this.methodid } };
            this.service.getapiparam(mymodel).subscribe(function (data) {
                _this.Paramslength = data.length;
                for (var k = 0; k < data.length; k++) {
                    if (k < data.length) {
                        if (data[k].MP_ACTIVE == "Y") {
                            _this.statuscheck = true;
                            _this.activecheck = false;
                            _this.deletecheck = false;
                        }
                        if (data[k].MP_ACTIVE == "N") {
                            _this.statuscheck = false;
                            _this.activecheck = true;
                            _this.deletecheck = false;
                        }
                        if (data[k].MP_ACTIVE == "D") {
                            _this.deletecheck = true;
                            _this.statuscheck = false;
                            _this.activecheck = false;
                        }
                        //else {
                        //    this.statuscheck = false;
                        //}
                    }
                    _this.apiparams.push({
                        'MP_ID': data[k].MP_ID, 'MP_M_ID': data[k].MP_M_ID, 'MP_PARAM_NAME': data[k].MP_PARAM_NAME, 'MP_PARAM_DATATYPE': data[k].MP_PARAM_DATATYPE, 'MP_DESC': data[k].MP_DESC,
                        'MP_UID': data[k].MP_UID, 'MP_ACTIVE': data[k].MP_ACTIVE, 'action': _this.statuscheck, 'action1': _this.activecheck,
                        'action2': _this.deletecheck
                    });
                }
                if (data.length == 0) {
                    _this.lblmsg = "No Parameters To Display";
                }
            });
        }
        else {
            var count = 0;
            var mymodel = { md: { 'mod': this.ProjectId } };
            this.service.getapimodule(mymodel).subscribe(function (data) {
                for (var j = 0; j < data.length; j++) {
                    var mymodel1 = { md: { 'mod': data[j].MOD_ID } };
                    _this.service.getapimethod(mymodel1).subscribe(function (res) {
                        for (var i = 0; i < res.length; i++) {
                            var mymodel2 = { md: { 'mod': res[i].M_ID } };
                            _this.service.getapiparam(mymodel2).subscribe(function (res1) {
                                count = count + res1.length;
                                for (var l = 0; l < res1.length; l++) {
                                    if (l < data.length) {
                                        if (res1[l].MP_ACTIVE == "Y") {
                                            _this.statuscheck = true;
                                            _this.activecheck = false;
                                            _this.deletecheck = false;
                                        }
                                        if (res1[l].MP_ACTIVE == "N") {
                                            _this.statuscheck = false;
                                            _this.activecheck = true;
                                            _this.deletecheck = false;
                                        }
                                        if (res1[l].MP_ACTIVE == "D") {
                                            _this.deletecheck = true;
                                            _this.statuscheck = false;
                                            _this.activecheck = false;
                                        }
                                        //else {
                                        //    this.statuscheck = false;
                                        //}
                                    }
                                    _this.apiparams.push({
                                        'MP_ID': res1[l].MP_ID, 'MP_M_ID': res1[l].MP_M_ID, 'MP_PARAM_NAME': res1[l].MP_PARAM_NAME, 'MP_PARAM_DATATYPE': res1[l].MP_PARAM_DATATYPE, 'MP_DESC': res1[l].MP_DESC,
                                        'MP_UID': res1[l].MP_UID, 'MP_ACTIVE': res1[l].MP_ACTIVE, 'action': _this.statuscheck, 'action1': _this.activecheck,
                                        'action2': _this.deletecheck
                                    });
                                }
                                _this.Paramslength = count;
                                if (count == 0) {
                                    _this.lblmsg = "No Parameters To Display";
                                }
                            });
                        }
                        if (res.length == 0) {
                            _this.lblmsg = "No Parameters To Display";
                        }
                    });
                }
                if (data.length == 0) {
                    _this.lblmsg = "No Parameters To Display";
                }
            });
        }
    };
    ModuleParametersComponent.prototype.save = function () {
        var _this = this;
        this.apiparams = [];
        if (this.paramform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.Action == 'A';
                this.status = "Y";
                this.ParamId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.ParamId = this.user.MP_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            var mymodal = { mp: { 'action': this.Action, 'MP_ID': this.ParamId, 'MP_M_ID': this.methodid, 'MP_PARAM_NAME': this.Parameter, 'MP_PARAM_DATATYPE': this.DataType, 'MP_DESC': this.Description, 'MP_UID': this.UserId, 'MP_ACTIVE': this.status } };
            this.service.paramsave(mymodal).subscribe(function (data) {
                _this.lbl = data;
                _this.getallparams();
                _this.router.navigate(['/Projects']);
            });
            this.Panel1 = true;
            this.Panel2 = false;
            this.clear();
        }
    };
    ModuleParametersComponent.prototype.editparam = function (mp) {
        var _this = this;
        var params = { mp: mp };
        this.service.editParams(params).subscribe(function (data) {
            _this.user = data[0];
            _this.Panel1 = false;
            _this.Panel2 = true;
            _this.check = true;
            if (data[0].MP_ACTIVE == "Y") {
                _this.checkbox = true;
            }
            else {
                _this.checkbox = false;
            }
            _this.methodid = data[0].MP_M_ID;
            _this.Parameter = data[0].MP_PARAM_NAME;
            _this.DataType = data[0].MP_PARAM_DATATYPE;
            _this.Description = data[0].MP_DESC;
            _this.charsLeft = 450 - data[0].MP_DESC.length;
        });
        this.Action = 'U';
        this.lbl = "";
        this.action = "edit";
    };
    ModuleParametersComponent.prototype.deleteparam = function (mp) {
        var _this = this;
        this.apiparams = [];
        var params = { mp: mp };
        this.service.deleteParams(params).subscribe(function (data) {
            _this.lbl = data;
            _this.getallparams();
            //window.location.reload();
            _this.router.navigate(['/ModuleParams']);
        });
    };
    ModuleParametersComponent.prototype.savenew = function () {
        var _this = this;
        if (this.paramform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.ParamId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.ParamId = this.user.MP_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            var mymodal = { mp: { 'action': this.Action, 'MP_ID': this.ParamId, 'MP_M_ID': this.methodid, 'MP_PARAM_NAME': this.Parameter, 'MP_PARAM_DATATYPE': this.DataType, 'MP_DESC': this.Description, 'MP_UID': this.UserId, 'MP_ACTIVE': this.status } };
            this.service.paramsave(mymodal).subscribe(function (data) {
                _this.lbl = data;
            });
            this.clear();
        }
    };
    ModuleParametersComponent.prototype.cancel = function () {
        this.apiparams = [];
        this.clear();
        this.Panel1 = true;
        this.Panel2 = false;
        this.ngOnInit();
    };
    ModuleParametersComponent.prototype.cancelView = function () {
        this.router.navigate(['/Projects']);
    };
    ModuleParametersComponent.prototype.statusChange = function (value) {
        this.methodid = value;
    };
    ModuleParametersComponent.prototype.statusChange1 = function (value) {
    };
    ModuleParametersComponent.prototype.clear = function () {
        this.Method = "undefined";
        this.Parameter = null;
        this.DataType = "undefined";
        this.Description = null;
        this.checkbox = false;
    };
    ModuleParametersComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/Login']);
    };
    ModuleParametersComponent.prototype.changed = function () {
        this.charsLeft = 450 - this.Description.length;
    };
    ModuleParametersComponent.prototype.BackToMethods = function () {
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        localStorage.setItem("projectid", JSON.stringify(this.ProjectId));
        localStorage.setItem("projectname", JSON.stringify(this.P_Name));
        localStorage.setItem('ModuleID', JSON.stringify(0));
        localStorage.setItem('ModuleName', JSON.stringify(''));
        localStorage.setItem('MethodId', JSON.stringify("undefined"));
        this.router.navigate(['/Methods']);
    };
    ModuleParametersComponent.prototype.validations = function () {
        var count = 0;
        var message = "";
        if (this.methodid == null || this.methodid == "" || this.methodid == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Select Method Name\n";
        }
        if (this.Parameter == null || this.Parameter == "" || this.Parameter == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Parameter Name\n";
        }
        if (this.DataType == null || this.DataType == "" || this.DataType == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Select Data Type\n";
        }
        if (this.Description == null || this.Description == "" || this.Description == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Description\n";
        }
        alert(message);
    };
    ModuleParametersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-module-parameters',
            template: __webpack_require__("./src/app/module-parameters/module-parameters.component.html"),
            styles: [__webpack_require__("./src/app/module-parameters/module-parameters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ModuleParametersComponent);
    return ModuleParametersComponent;
}());



/***/ }),

/***/ "./src/app/modules/modules.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n    padding-left: 15em;\r\n}\r\n\r\n.card-grid {\r\n    color: white;\r\n    background-color: darkgray;\r\n    border-radius: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.panel .panel-body {\r\n    padding-top: 10px;\r\n    padding-bottom: 15px;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.form-group {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.428571429;\r\n    border-radius: 15px;\r\n}\r\n\r\n.addbutton{\r\n  height:30px;\r\n  width:60px;\r\n  border-radius:30px;\r\n  top: 22px;\r\n}\r\n\r\n.msg_panel {max-height:570px; overflow-y:auto; overflow-x:hidden; }"

/***/ }),

/***/ "./src/app/modules/modules.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#efefef;height:130px\">\r\n    <div class=\"brand\">\r\n        <a href=\"Projects\"><img src=\"../../assets/img/PLLC_Logo1.png\" alt=\"Klorofil Logo\" class=\"img-responsive logo\"></a><!--<h3>API Guide for Projects</h3>-->\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"nav navbar-header\">\r\n            <h3 style=\"margin-top:30px\">API Guide For Projects</h3>\r\n        </div>\r\n        <div class=\"navbar-btn navbar-btn-right\">\r\n            <button class=\"update-pro\" (click)=\"logout()\">\r\n                <span class=\"glyphicon glyphicon-off\" style=\"font-size:28px;color:rgb(234, 0, 0)\"></span>\r\n                <!-- <i class=\"fa fa-expeditedssl\" style=\"font-size:28px;color:red\"></i> -->\r\n            </button>\r\n        </div>\r\n        <div id=\"navbar-menu\">\r\n            <ul class=\"nav navbar-nav navbar-right\" style=\"padding-top:15px\">\r\n\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"http://www.pllcpep.com/Uploads/Profile/{{UserImage}}\" class=\"img-circle\" style=\"width:30px\" alt=\"Avatar\"> <b>{{Username}}</b> </a>\r\n                    <!-- <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-user\"></i>  <span>My Profile</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i>  <span>Message</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-cog\"></i>  <span>Settings</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-exit\"></i>  <span>Logout</span></a></li>\r\n                    </ul> -->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a href=\"Projects\">Projects</a></li>\r\n                <li><a href=\"DashBoard\">Vew API Details</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</nav>\r\n\r\n<div class=\"container align-content-center\" style=\"padding-top:150px\">\r\n    <div class=\"container align-content-center\" *ngIf=\"Panel1\">\r\n        <div align=\"center\" class=\"col-md-12\">\r\n            <label (ngModel)=\"lblmsg\" style=\"color:red\">{{lblmsg}}</label>\r\n        </div>\r\n        <div align=\"right\" class=\"col-md-12\"><label style=\"color:white\">Total Records:{{Moduleslength}}</label></div>\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-6 col-xs-12\"><h3>Modules For {{P_NAME}}</h3></div>\r\n            <div class=\"col-md-6 col-xs-12\" style=\"padding-top:20px;text-align:right\">\r\n                <button align=\"right\" type=\"button\" class=\"btn btn-primary btn-sm addbutton\" (click)=\"addModules()\">\r\n                    <span class=\"glyphicon glyphicon-plus-sign\"></span> Add\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <!--<ul class=\"list-group\" style=\"width:800px;\">\r\n            <li class=\"list-group-item\">Module Id: <span class=\"badge\">{{m.MOD_ID}}</span></li>\r\n            <li class=\"list-group-item\">Module Name: <span class=\"badge\">{{m.MOD_NAME}}</span></li>\r\n            <li class=\"list-group-item\">Module Description: <span class=\"badge\">{{m.MOD_DESC}}</span></li>\r\n            <li class=\"list-group-item\">Status: <span class=\"badge\">{{m.MOD_ACTIVE}}</span></li>\r\n        </ul>-->\r\n        <div class=\"container align-content-center msg_panel\">\r\n            <div class=\"card\">\r\n                <div *ngFor=\"let m of apimodules | orderBy:'MOD_ID'\">\r\n                    <div class=\"card-body card-grid col-md-12\" style=\"margin-bottom:20px;\">\r\n                        <div class=\"col-md-6 col-xs-12\">\r\n                            <h4 class=\"card-title text-left\" style=\"padding-top:10px\">{{m.MOD_NAME}}</h4>\r\n                            <p class=\"card-title text-left\">{{m.MOD_DESC}}</p>\r\n                            <p class=\"card-text text-left\">\r\n                                Methods:&nbsp;&nbsp;{{m.mid}}&nbsp;&nbsp;<a class=\"glyphicon glyphicon-eye-open\" (click)=\"ViewMethods(m)\"></a>&nbsp;&nbsp;<a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addmethods(m)\"></a>\r\n                                <!--|&\r\n                                nbsp;Method Params:&nbsp;&nbsp;{{99}}&nbsp;&nbsp;<a class=\"glyphicon glyphicon-eye-open\" (click)=\"viewDetails(pro)\"></a>&nbsp;&nbsp;<a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addParams()\"></a>-->\r\n                                </p>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-12\" style=\"padding-top:10px;text-align:right\">\r\n                            <button *ngIf=\"m.action\" title=\"Active\" type=\"button\" class=\"btn btn-info btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n                            <button *ngIf=\"m.action1\" title=\"In-Active\" style=\"background-color:orange\" type=\"button\" class=\"btn btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-time\"></i></button>\r\n                            <button *ngIf=\"m.action2\" title=\"Deleted\" type=\"button\" class=\"btn btn-danger btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-remove\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-sm-2 btns\" (click)=\"editmodule(m)\">\r\n                                <span class=\"glyphicon glyphicon-list\"></span>\r\n                            </button>\r\n                            <button align=\"center\" type=\"button\" class=\"btn btn-danger btn-sm-2\" (click)=\"deletemodule(m)\">\r\n                                <span class=\"glyphicon glyphicon-trash\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12\" style=\"text-align:right;padding-top:10px\">\r\n            <button class=\"btn btn-danger\" (click)=\"cancelView()\">Dashboard</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form [formGroup]=\"moduleform\" novalidate>\r\n    <div class=\"container align-content-center\">\r\n        <div class=\"row\" *ngIf=\"Panel2\">\r\n            <div align=\"center\"><label class=\"col-sm-10\" for=\"status\" (ngModel)=\"lbl\">{{lbl}}</label></div>\r\n            <!-- panel preview -->\r\n            <div class=\"col-md-12\">\r\n                <h3 class=\"text-left\">Module ({{action}})</h3>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body form-horizontal modules-form\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-4 col-xs-12\">\r\n                                <label for=\"Project\" class=\"control-label\">Project</label>\r\n                                <select class=\"form-control\" id=\"Project\" formControlName=\"Project\" [ngModel]=\"ProjectId\" (change)=\"statusChange($event.target.value)\" required>\r\n                                    <option [value]=\"undefined\">---Select Project---</option>\r\n                                    <option *ngFor=\"let pro of prjs\" [value]=\"pro.P_ID\" [selected]=\"pro.P_ID==ProjectId\">{{pro.P_PRJ_NAME}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-6 col-xs-12\">\r\n                                <label for=\"Module\" class=\"control-label\">Module Name</label>\r\n                                <input type=\"text\" maxlength=\"30\" class=\"form-control\" id=\"Module\" formControlName=\"Module\" [(ngModel)]=\"Module\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Description\" class=\"control-label\">Description</label>\r\n                                <textarea class=\"form-control\" maxlength=\"450\" id=\"Description\" formControlName=\"Description\" [(ngModel)]=\"Description\" (keyup)=\"changed()\"  required></textarea>\r\n                                Char Left:{{ charsLeft }}\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\" *ngIf=\"check\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <label for=\"checkbox\" class=\"control-label\">Active</label>\r\n                                <input type=\"checkbox\" formControlName=\"Checkbox\" [(ngModel)]=\"checkbox\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <button class=\"btn btn-primary\" type=\"submit\" (click)=\"save()\">Save</button>\r\n                                <button class=\"btn btn-primary text-center\" type=\"submit\" (click)=\"savenmod()\">Save & Add Module</button>\r\n                                <button class=\"btn btn-primary text-center\" type=\"submit\" (click)=\"savenmtd()\">Save & Add Methods</button>\r\n                                <button class=\"btn btn-danger\" type=\"submit\" (click)=\"cancel()\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!-- / panel preview -->\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/modules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModulesComponent = /** @class */ (function () {
    function ModulesComponent(router, service, form) {
        this.router = router;
        this.service = service;
        this.form = form;
        this.charsLeft = 450;
        this.modules = [];
        this.prjs = [];
        this.Projects = [];
        this.apimodules = [];
        this.user = [];
        this.apimethods = [];
        this.nav = true;
        this.Panel1 = JSON.parse(localStorage.getItem('Panel1'));
        this.Panel2 = JSON.parse(localStorage.getItem('Panel2'));
        this.userproject = [];
        this.UserId = JSON.parse(localStorage.getItem('EmployeeId'));
        this.UserEmail = JSON.parse(localStorage.getItem('EmployeeEmail'));
        this.Username = JSON.parse(localStorage.getItem('EmployeeFirstName'));
        this.UserImage = JSON.parse(localStorage.getItem('EmployeeImage'));
        this.P_ID = JSON.parse(localStorage.getItem('ProjectId'));
        this.P_NAME = JSON.parse(localStorage.getItem('P_Name'));
        this.moduleform = this.form.group({
            Project: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            Module: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            Description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            Checkbox: ''
        });
    }
    ModulesComponent.prototype.ngOnInit = function () {
        this.Action = 'A';
        this.ProjectId = JSON.parse(localStorage.getItem('ProjectId'));
        this.getproject();
        this.getmodules();
        this.getprjs();
        //this.allprojects();
        this.getallmodules();
        this.action = "add";
    };
    ModulesComponent.prototype.getproject = function () {
        var _this = this;
        this.service.getuserproject(this.UserId, this.UserEmail).subscribe(function (data) {
            _this.userproject = (data[0].ProjectDetais);
        });
    };
    ModulesComponent.prototype.allprojects = function () {
        var _this = this;
        var mymodel = { md: { 'mod': this.ProjectId } };
        this.service.getapiproject(mymodel).subscribe(function (data) {
            _this.Projects = data;
        });
    };
    ModulesComponent.prototype.getprjs = function () {
        var _this = this;
        this.service.getproj().subscribe(function (data) {
            _this.prjs = data;
        });
    };
    ModulesComponent.prototype.addModules = function () {
        this.lblmsg = "";
        this.Panel1 = false;
        this.Panel2 = true;
        this.Action = 'A';
        this.action = "add";
    };
    ModulesComponent.prototype.getallmodules = function () {
        var _this = this;
        if (this.P_ID != 0) {
            var mymodel = { md: { 'mod': this.P_ID } };
            this.service.getapimodule(mymodel).subscribe(function (data) {
                _this.Moduleslength = data.length;
                var _loop_1 = function (k) {
                    mymodel = { md: { 'mod': data[k].MOD_ID } };
                    _this.service.getapimethod(mymodel).subscribe(function (res) {
                        if (k < data.length) {
                            if (data[k].MOD_ACTIVE == "Y") {
                                _this.statuscheck = true;
                                _this.activecheck = false;
                                _this.deletecheck = false;
                            }
                            if (data[k].MOD_ACTIVE == "N") {
                                _this.statuscheck = false;
                                _this.activecheck = true;
                                _this.deletecheck = false;
                            }
                            if (data[k].MOD_ACTIVE == "D") {
                                _this.deletecheck = true;
                                _this.statuscheck = false;
                                _this.activecheck = false;
                            }
                            //else {
                            //    this.statuscheck = false;
                            //}
                        }
                        _this.apimodules.push({
                            'MOD_ID': data[k].MOD_ID, 'MOD_P_ID': data[k].MOD_P_ID, 'MOD_NAME': data[k].MOD_NAME, 'MOD_DESC': data[k].MOD_DESC,
                            'MOD_U_ID': data[k].MOD_U_ID, 'MOD_ACTIVE': data[k].MOD_ACTIVE, 'mid': res.length, 'action': _this.statuscheck, 'action1': _this.activecheck,
                            'action2': _this.deletecheck
                        });
                    });
                };
                var mymodel;
                for (var k = 0; k < data.length; k++) {
                    _loop_1(k);
                }
                //this.apimodules = data;
                if (data.length == 0) {
                    _this.lblmsg = "No Modules To Display";
                }
            });
        }
        else {
            this.lblmsg = "Add Module";
        }
    };
    ModulesComponent.prototype.save = function () {
        var _this = this;
        this.apimodules = [];
        if (this.moduleform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.ModId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.ModId = this.user.MOD_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            var mymodal = { mod: { 'action': this.Action, 'MOD_ID': this.ModId, 'MOD_P_ID': this.ProjectId, 'MOD_NAME': this.Module, 'MOD_DESC': this.Description, 'MOD_U_ID': this.UserId, 'MOD_ACTIVE': this.status } };
            this.service.moduleSave(mymodal).subscribe(function (data) {
                _this.lbl = data;
                _this.getallmodules();
            });
            this.Panel1 = true;
            this.Panel2 = false;
            this.clear();
        }
    };
    ModulesComponent.prototype.editmodule = function (mod) {
        var _this = this;
        var Module = { mod: mod };
        this.service.editModule(Module).subscribe(function (data) {
            _this.user = data[0];
            _this.Panel1 = false;
            _this.Panel2 = true;
            if (data[0].MOD_ACTIVE == "Y") {
                _this.checkbox = true;
            }
            else {
                _this.checkbox = false;
            }
            _this.ProjectId = data[0].MOD_P_ID;
            _this.Module = data[0].MOD_NAME;
            _this.Description = data[0].MOD_DESC;
            _this.charsLeft = 450 - data[0].MOD_DESC.length;
        });
        this.Action = 'U';
        this.check = true;
        this.lbl = "";
        this.action = "edit";
    };
    ModulesComponent.prototype.deletemodule = function (mod) {
        var _this = this;
        this.apimodules = [];
        var Module = { mod: mod };
        this.service.deleteModule(Module).subscribe(function (data) {
            _this.lbl = data;
            _this.getallmodules();
            //window.location.reload();
            _this.router.navigate(['/Projects']);
        });
    };
    ModulesComponent.prototype.getmodules = function () {
        var _this = this;
        this.service.getmodules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    ModulesComponent.prototype.savenmod = function () {
        var _this = this;
        if (this.moduleform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.ModId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.ModId = this.user.MOD_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            var mymodal = { mod: { 'action': this.Action, 'MOD_ID': this.ModId, 'MOD_P_ID': this.ProjectId, 'MOD_NAME': this.Module, 'MOD_DESC': this.Description, 'MOD_U_ID': this.UserId, 'MOD_ACTIVE': this.status } };
            this.service.moduleSave(mymodal).subscribe(function (data) {
                _this.lbl = data;
            });
            this.clear();
        }
    };
    ModulesComponent.prototype.savenmtd = function () {
        var _this = this;
        if (this.moduleform.invalid) {
            this.validations();
        }
        else {
            if (this.Action == "A") {
                this.status = "Y";
                this.ModId = 0;
            }
            if (this.Action == "U") {
                this.Action == 'U';
                this.ModId = this.user.MOD_ID;
                if (this.checkbox == true) {
                    this.status = "Y";
                }
                else {
                    this.status = "N";
                }
            }
            var mymodal = { mod: { 'action': this.Action, 'MOD_ID': this.ModId, 'MOD_P_ID': this.ProjectId, 'MOD_NAME': this.Module, 'MOD_DESC': this.Description, 'MOD_U_ID': this.UserId, 'MOD_ACTIVE': this.status } };
            this.service.moduleSave(mymodal).subscribe(function (data) {
                _this.lbl = data;
                localStorage.setItem("projectid", JSON.stringify(_this.ProjectId));
                localStorage.setItem("projectname", JSON.stringify(_this.P_NAME));
                localStorage.setItem("ModuleID", JSON.stringify(_this.ModId));
                localStorage.setItem("ModuleName", JSON.stringify(_this.Module));
                _this.router.navigate(['/Methods']);
                localStorage.setItem('Panel1', JSON.stringify(false));
                localStorage.setItem('Panel2', JSON.stringify(true));
            });
            this.clear();
        }
    };
    ModulesComponent.prototype.statusChange = function (value) {
        this.ProjectId = value;
    };
    ModulesComponent.prototype.cancel = function () {
        this.clear();
        this.Panel1 = true;
        this.Panel2 = false;
    };
    ModulesComponent.prototype.cancelView = function () {
        this.router.navigate(['/Projects']);
    };
    ModulesComponent.prototype.clear = function () {
        this.Project = "undefined";
        this.Module = null;
        this.Description = null;
        this.checkbox = false;
    };
    ModulesComponent.prototype.ViewMethods = function (m) {
        localStorage.setItem("projectid", JSON.stringify(this.ProjectId));
        localStorage.setItem("projectname", JSON.stringify(this.P_NAME));
        localStorage.setItem("ModuleID", JSON.stringify(m.MOD_ID));
        localStorage.setItem("ModuleName", JSON.stringify(m.MOD_NAME));
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        this.router.navigate(['/Methods']);
    };
    ModulesComponent.prototype.addmethods = function (m) {
        localStorage.setItem("projectid", JSON.stringify(this.ProjectId));
        localStorage.setItem("projectname", JSON.stringify(this.P_NAME));
        localStorage.setItem("ModuleID", JSON.stringify(m.MOD_ID));
        localStorage.setItem("ModuleName", JSON.stringify(m.MOD_NAME));
        localStorage.setItem('Panel1', JSON.stringify(false));
        localStorage.setItem('Panel2', JSON.stringify(true));
        this.router.navigate(['/Methods']);
    };
    ModulesComponent.prototype.changed = function () {
        this.charsLeft = 450 - this.Description.length;
    };
    ModulesComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/Login']);
    };
    ModulesComponent.prototype.validations = function () {
        var count = 0;
        var message = "";
        if (this.ProjectId == null || this.ProjectId == "" || this.ProjectId == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Select Project\n";
        }
        if (this.Module == null || this.Module == "" || this.Module == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Module Name\n";
        }
        if (this.Description == null || this.Description == "" || this.Description == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Description\n";
        }
        alert(message);
    };
    ModulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modules',
            template: __webpack_require__("./src/app/modules/modules.component.html"),
            styles: [__webpack_require__("./src/app/modules/modules.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ModulesComponent);
    return ModulesComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n    padding-left: 15em;\r\n}\r\n\r\n.card-grid {\r\n    color: white;\r\n    background-color: darkgray;\r\n    border-radius: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.panel .panel-body {\r\n    padding-top: 10px;\r\n    padding-bottom: 15px;\r\n    background-color: lightgrey;\r\n}\r\n\r\n.form-group {\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.428571429;\r\n    border-radius: 15px;\r\n}\r\n\r\n.card-list {\r\n    color: white;\r\n    background-color: brown;\r\n}\r\n\r\n.searchbutton{\r\n    border-radius:30px;\r\n    border-top-width: 0px;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    border-bottom-width: 0px;\r\n}\r\n\r\n.searchtext{\r\n    border-width:0px;\r\n    border-radius:30px;\r\n    height:24px;\r\n    text-align:center;\r\n}\r\n\r\n.addbutton{\r\n  height:30px;\r\n  width:60px;\r\n  border-radius:30px;\r\n  top: 22px;\r\n}\r\n\r\n.msg_panel {max-height:570px; overflow-y:auto; overflow-x:hidden; }\r\n\r\n/* enable absolute positioning */\r\n\r\n.inner-addon { \r\n    position: relative; \r\n}\r\n\r\n/* style icon */\r\n\r\n.inner-addon .glyphicon {\r\n  position: absolute;\r\n  padding: 10px;\r\n  pointer-events: none;\r\n}\r\n\r\n/* align icon */\r\n\r\n.left-addon .glyphicon  { left:  0px;}\r\n\r\n.right-addon .glyphicon { right: 0px;}\r\n\r\n/* add padding  */\r\n\r\n.left-addon input  { padding-left:  30px; }\r\n\r\n.right-addon input { padding-right: 30px; }"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#efefef;height:130px\">\r\n    <div class=\"brand\">\r\n            <a href=\"Projects\"><img src=\"../../assets/img/PLLC_Logo1.png\" alt=\"Klorofil Logo\" class=\"img-responsive logo\"></a>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"nav navbar-header\">\r\n              <h3 style=\"margin-top:30px\">API Guide For Projects</h3>\r\n        </div>\r\n        <div class=\"navbar-btn navbar-btn-right\">\r\n            <button class=\"update-pro\" (click)=\"logout()\">\r\n                <span class=\"glyphicon glyphicon-off\" style=\"font-size:28px;color:rgb(234, 0, 0)\"></span>\r\n                <!-- <i class=\"fa fa-expeditedssl\" style=\"font-size:28px;color:red\"></i> -->\r\n            </button>\r\n        </div>\r\n        <div id=\"navbar-menu\">\r\n            <ul class=\"nav navbar-nav navbar-right\" style=\"padding-top:15px\">\r\n\r\n                <li class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\"><img src=\"http://www.pllcpep.com/Uploads/Profile/{{UserImage}}\" class=\"img-circle\" style=\"width:30px\" alt=\"Avatar\"> <b>{{Username}}</b> </a>\r\n                    <!-- <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-user\"></i>  <span>My Profile</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i>  <span>Message</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-cog\"></i>  <span>Settings</span></a></li>\r\n                        <li><a href=\"#\"><i class=\"lnr lnr-exit\"></i>  <span>Logout</span></a></li>\r\n                    </ul> -->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a href=\"Projects\">Projects</a></li>\r\n                <li><a href=\"DashBoard\">Vew API Details</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</nav>\r\n<div class=\"container align-content-center\" style=\"padding-top:150px;\">\r\n    <div class=\"container align-content-center\" *ngIf=\"Panel1\">\r\n        <div align=\"center\" class=\"col-md-12\"><label for=\"status\" (ngModel)=\"lbl\">{{lbl}}</label></div>\r\n        <div class=\"col-md-12\">\r\n            <div class=\"col-md-6 col-xs-12\"><h2 class=\"col-md-3\">Projects</h2>\r\n                <button align=\"right\" type=\"button\" class=\"btn btn-primary btn-sm addbutton col-md-2\" (click)=\"add()\">\r\n                    <span class=\"glyphicon glyphicon-plus-sign\"></span> Add\r\n                </button>\r\n            </div>\r\n            <div class=\"col-md-6 col-xs-12\" style=\"text-align:right;top: 25px;\">      \r\n                <div class=\"inner-addon right-addon col-md-5\">\r\n                    <i class=\"glyphicon glyphicon-search\" style=\"top: auto;padding-top: 5px;padding-bottom: 5px\"></i>\r\n                    <input type=\"text\" class=\"searchtext\" id=\"search\" placeholder=\"Search Project...\" [(ngModel)]=\"search\" (keyup)=\"searchproject()\" />\r\n                </div>          \r\n                    <!--<input type=\"text\" class=\"searchtext\" id=\"search\" placeholder=\"Search Project...\" [(ngModel)]=\"search\" (keyup)=\"searchproject()\" />-->\r\n                    <!--<button class=\"btn btn-primary searchbutton\" (click)=\"searchproject()\">Search</button>-->\r\n                <label style=\"color:white\">Total Records:{{viewlength}} of {{projectlength}}</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"container align-content-center msg_panel\">\r\n            <div class=\"card\">\r\n                <div *ngFor=\"let pro of prjs | orderBy:'P_ID' : reverse\">\r\n                    <div class=\"card-body card-grid col-md-12\" style=\"margin-bottom:20px;\">\r\n                        <div class=\"col-md-6 col-xs-12\">\r\n                            <h5 class=\"card-title text-left\" style=\"padding-top:10px\">{{pro.P_PRJ_NAME}}</h5>\r\n                            <p class=\"card-text text-left\">\r\n                                Modules:&nbsp;&nbsp;{{pro.mid}}&nbsp;&nbsp;<a class=\"glyphicon glyphicon-eye-open\" (click)=\"viewDetails(pro)\"></a>&nbsp;&nbsp;<a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addmodules(pro)\"></a>\r\n                                |&nbsp;Methods:&nbsp;&nbsp;<a class=\"glyphicon glyphicon-eye-open\" (click)=\"viewmethods(pro)\"></a>&nbsp;&nbsp;<a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addmethods(pro)\"></a>\r\n                                |&nbsp;Method Params:&nbsp;&nbsp;<a class=\"glyphicon glyphicon-eye-open\" (click)=\"viewParams(pro)\"></a>&nbsp;&nbsp;<a class=\"glyphicon glyphicon-plus-sign\" (click)=\"addParams(pro)\"></a>\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-12\" style=\"padding-top:10px;text-align:right\">\r\n                            <button *ngIf=\"pro.action\" title=\"Active\" type=\"button\" class=\"btn btn-info btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-ok\"></i></button>\r\n                            <button *ngIf=\"pro.action1\" title=\"In-Active\" style=\"background-color:orange\" type=\"button\" class=\"btn btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-time\"></i></button>\r\n                            <button *ngIf=\"pro.action2\" title=\"Deleted\" type=\"button\" class=\"btn btn-danger btn-sm-2 btn-circle\"><i class=\"glyphicon glyphicon-remove\"></i></button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-sm-2 btns\" (click)=\"editpro(pro)\">\r\n                                <span class=\"glyphicon glyphicon-list\"></span>\r\n                            </button>\r\n                            <button align=\"center\" type=\"button\" class=\"btn btn-danger btn-sm-2\" (click)=\"deletepro(pro)\">\r\n                                <span class=\"glyphicon glyphicon-trash\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <br />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"col-md-12 col-xs-12\" style=\"text-align:center\" *ngIf=\"viewbutton\">\r\n            <button class=\"btn btn-primary btnview\" (click)=\"viewmore()\">View More</button>\r\n        </div>\r\n        <div class=\"col-md-12 col-xs-12\" style=\"text-align:right\" *ngIf=\"searchcancel\">\r\n            <button class=\"btn btn-danger\" (click)=\"cancelsearch()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"myform\" novalidate>\r\n    <div class=\"container align-content-center\">\r\n        <div class=\"row\">\r\n            <!-- panel preview -->\r\n            <label class=\"col-md-12 col-xs-12\" (ngModel)=\"lblmessage\" style=\"color:red;text-align:center\">{{lblmessage}}</label>\r\n            <div class=\"col-md-12\" *ngIf=\"Panel2\" style=\"width:800px;height:auto;\">\r\n                <h3 class=\"text-left\">Projects ({{action}})</h3>\r\n                <div class=\"panel\" style=\"text-align:left\">\r\n                    <div class=\"panel-body form-horizontal project-form\" style=\"height:auto\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-6 col-xs-12\">\r\n                                <label for=\"Project\" class=\"control-label\">Project</label>\r\n                                <select class=\"form-control\" id=\"Project\" formControlName=\"Project\" [(ngModel)]=\"Project\" (change)=\"statusChange($event)\" required>\r\n                                    <option [value]=\"undefined\">---Select Project---</option>\r\n                                    <option [value]=\"pro.PrjId\" [selected]=\"pro.PrjId==prjddn\" *ngFor=\"let pro of userproject\">{{pro.PrjName}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\" style=\"margin-bottom: 0px;margin-left: 0px;padding-bottom: 0px;\">\r\n                            API URLs Information:\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Development\" class=\"control-label\">Development *</label>\r\n                                <input type=\"text\" maxlength=\"150\" class=\"form-control\" id=\"Development\" formControlName=\"Development\" [(ngModel)]=\"Development\" required>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Staging\" class=\"control-label\">Staging</label>\r\n                                <input type=\"text\" maxlength=\"150\" class=\"form-control\" id=\"Staging\" formControlName=\"Staging\" [(ngModel)]=\"Staging\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Testing\" class=\"control-label\">Testing</label>\r\n                                <input type=\"text\" maxlength=\"150\" class=\"form-control\" id=\"Testing\" formControlName=\"Testing\" [(ngModel)]=\"Testing\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-10 col-xs-12\">\r\n                                <label for=\"Production\" class=\"control-label\">Production</label>\r\n                                <input type=\"text\" maxlength=\"150\" class=\"form-control\" id=\"Production\" formControlName=\"Production\" [(ngModel)]=\"Production\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\" *ngIf=\"check\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <label for=\"checkbox\" class=\"control-label\">Active</label>\r\n                                <input type=\"checkbox\" formControlName=\"Checkbox\" [(ngModel)]=\"checkbox\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-md-12\">\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <button class=\"btn btn-primary\" type=\"submit\" (click)=\"save()\">Save</button>\r\n                                <button class=\"btn btn-primary text-center\" type=\"submit\" (click)=\"savenmod()\">Save & Add Module</button>\r\n                                <button class=\"btn btn-danger\" type=\"submit\" (click)=\"cancel()\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> <!-- / panel preview -->\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router, service, _fb) {
        this.router = router;
        this.service = service;
        this._fb = _fb;
        this.userproject = [];
        this.prjs = [];
        this.user = [];
        this.viewbutton = true;
        this.Panel1 = true;
        this.Panel2 = false;
        this.Panel3 = false;
        this.order = [];
        this.nav = true;
        this.searchcancel = false;
        this.lbl = [];
        this.apimodules = [];
        this.apimethods = [];
        this.btncancel = false;
        this.UserId = JSON.parse(localStorage.getItem('EmployeeId'));
        this.UserEmail = JSON.parse(localStorage.getItem('EmployeeEmail'));
        this.Username = JSON.parse(localStorage.getItem('EmployeeFirstName'));
        this.UserImage = JSON.parse(localStorage.getItem('EmployeeImage'));
        this.myform = this._fb.group({
            Project: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required],
            Development: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")]],
            Staging: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")]],
            Production: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")]],
            Testing: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* Validators */].pattern("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$")]],
            Checkbox: '',
        });
        this.counter = 0;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getproject();
        this.getprj();
        this.action = "add";
        this.service.getproj().subscribe(function (data) {
            _this.projectlength = data.length;
        });
        this.viewbutton = true;
    };
    ProjectsComponent.prototype.add = function () {
        this.clear();
        this.check = false;
        this.Panel1 = false;
        this.Panel2 = true;
        this.Action = 'A';
        this.action = "add";
        this.PrjId = 0;
        this.lbl = "";
    };
    ProjectsComponent.prototype.save = function () {
        var _this = this;
        if (this.myform.invalid) {
            this.validations();
        }
        else {
            this.service.getproj().subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].P_PEP_P_ID == _this.Project) {
                        _this.pepid = data[i].P_PEP_P_ID;
                    }
                }
                if (_this.pepid == _this.Project && _this.Action == 'A') {
                    _this.lblmessage = "Project Already Exist!";
                }
                else {
                    if (_this.Action == "A") {
                        _this.status = "Y";
                    }
                    if (_this.Action == "U") {
                        _this.Action == 'U';
                        _this.PrjId = _this.user.P_ID;
                        if (_this.checkbox == true) {
                            _this.status = "Y";
                        }
                        else {
                            _this.status = "N";
                        }
                    }
                    _this.prjs = [];
                    var d = new Date();
                    var mymodal = { prj: { 'action': _this.Action, 'P_ID': _this.PrjId, 'P_PEP_P_ID': _this.Project, 'P_PRJ_NAME': _this.name, 'P_API_URL_DEV': _this.Development, 'P_API_URL_STAG': _this.Staging, 'P_API_URL_PROD': _this.Production, 'P_API_URL_TEST': _this.Testing, 'P_U_ID': _this.UserId, 'P_ACTIVE': _this.status, 'P_TS': d } };
                    _this.service.dataSave(mymodal).subscribe(function (data) {
                        _this.lbl = data;
                        _this.ngOnInit();
                        _this.counter = 0;
                        _this.router.navigate(['/Projects']);
                    });
                    _this.Panel1 = true;
                    _this.Panel2 = false;
                    _this.lblmessage = "";
                }
            });
        }
    };
    ProjectsComponent.prototype.editpro = function (prj) {
        var _this = this;
        var project = { prj: prj };
        this.service.editproject(project).subscribe(function (data) {
            _this.user = data[0];
            _this.Panel1 = false;
            _this.Panel2 = true;
            _this.check = true;
            if (data[0].P_ACTIVE == "Y") {
                _this.checkbox = true;
            }
            else {
                _this.checkbox = false;
            }
            _this.Project = +data[0].P_PEP_P_ID;
            _this.Development = data[0].P_API_URL_DEV;
            _this.Staging = data[0].P_API_URL_STAG;
            _this.Production = data[0].P_API_URL_PROD;
            _this.Testing = data[0].P_API_URL_TEST;
            _this.name = data[0].P_PRJ_NAME;
        });
        this.Action = 'U';
        this.lbl = "";
        this.action = "edit";
    };
    ProjectsComponent.prototype.deletepro = function (prj) {
        var _this = this;
        this.prjs = [];
        var project = { prj: prj };
        this.service.deleteproject(project).subscribe(function (data) {
            _this.lbl = data;
            _this.getprj();
            _this.counter = 0;
            //window.location.reload();
            _this.router.navigate(['/Projects']);
        });
    };
    ProjectsComponent.prototype.savenmod = function () {
        var _this = this;
        if (this.myform.invalid) {
            this.validations();
        }
        else {
            this.service.getproj().subscribe(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].P_PEP_P_ID == _this.Project) {
                        _this.pepid = data[i].P_PEP_P_ID;
                    }
                }
                if (_this.pepid == _this.Project) {
                    _this.lblmessage = "Project Already Exist!";
                }
                else {
                    if (_this.Action == "A") {
                        _this.status = "Y";
                    }
                    if (_this.Action == "U") {
                        _this.Action == 'U';
                        _this.PrjId = _this.user.P_ID;
                        if (_this.checkbox == true) {
                            _this.status = "Y";
                        }
                        else {
                            _this.status = "N";
                        }
                    }
                    var d = new Date();
                    var mymodal = { prj: { 'action': _this.Action, 'P_ID': _this.PrjId, 'P_PEP_P_ID': _this.Project, 'P_PRJ_NAME': _this.name, 'P_API_URL_DEV': _this.Development, 'P_API_URL_STAG': _this.Staging, 'P_API_URL_PROD': _this.Production, 'P_API_URL_TEST': _this.Testing, 'P_U_ID': _this.UserId, 'P_ACTIVE': _this.status, 'P_TS': d } };
                    _this.service.dataSave(mymodal).subscribe(function (data) {
                        _this.lbl = data;
                        _this.ngOnInit();
                        localStorage.setItem('ProjectId', JSON.stringify(_this.PrjId));
                        localStorage.setItem('P_Name', JSON.stringify(_this.name));
                        _this.router.navigate(['/Modules']);
                        localStorage.setItem('Panel1', JSON.stringify(false));
                        localStorage.setItem('Panel2', JSON.stringify(true));
                    });
                    _this.clear();
                    _this.lblmessage = "";
                }
            });
        }
    };
    ProjectsComponent.prototype.cancel = function () {
        this.Panel2 = false;
        this.Panel1 = true;
        this.lblmessage = "";
    };
    ProjectsComponent.prototype.getproject = function () {
        var _this = this;
        this.service.getuserproject(this.UserId, this.UserEmail).subscribe(function (data) {
            _this.userproject = (data[0].ProjectDetais);
        });
    };
    ProjectsComponent.prototype.addmodules = function (pro) {
        localStorage.setItem('ProjectId', JSON.stringify(pro.P_ID));
        localStorage.setItem('P_Name', JSON.stringify(pro.P_PRJ_NAME));
        localStorage.setItem('Panel1', JSON.stringify(false));
        localStorage.setItem('Panel2', JSON.stringify(true));
        this.router.navigate(['/Modules']);
    };
    ProjectsComponent.prototype.viewDetails = function (pro) {
        localStorage.setItem('ProjectId', JSON.stringify(pro.P_ID));
        localStorage.setItem('P_Name', JSON.stringify(pro.P_PRJ_NAME));
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        this.router.navigate(['/Modules']);
    };
    ProjectsComponent.prototype.viewmethods = function (pro) {
        localStorage.setItem('ModuleID', JSON.stringify("undefined"));
        localStorage.setItem('MethodId', JSON.stringify(0));
        localStorage.setItem('projectid', JSON.stringify(pro.P_ID));
        localStorage.setItem('projectname', JSON.stringify(pro.P_PRJ_NAME));
        localStorage.setItem('ModuleName', JSON.stringify(''));
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        this.router.navigate(['/Methods']);
    };
    ProjectsComponent.prototype.addmethods = function (pro) {
        localStorage.setItem('ModuleID', JSON.stringify("undefined"));
        localStorage.setItem('MethodId', JSON.stringify(0));
        localStorage.setItem('projectid', JSON.stringify(pro.P_ID));
        localStorage.setItem('projectname', JSON.stringify(pro.P_PRJ_NAME));
        localStorage.setItem('ModuleName', JSON.stringify(''));
        localStorage.setItem('Panel1', JSON.stringify(false));
        localStorage.setItem('Panel2', JSON.stringify(true));
        this.router.navigate(['/Methods']);
    };
    ProjectsComponent.prototype.viewParams = function (pro) {
        localStorage.setItem('ModuleID', JSON.stringify(0));
        localStorage.setItem('MethodId', JSON.stringify("undefined"));
        localStorage.setItem('projectid', JSON.stringify(pro.P_ID));
        localStorage.setItem('projectname', JSON.stringify(pro.P_PRJ_NAME));
        localStorage.setItem('modulename', JSON.stringify(''));
        localStorage.setItem('mname', JSON.stringify(''));
        localStorage.setItem('Panel1', JSON.stringify(true));
        localStorage.setItem('Panel2', JSON.stringify(false));
        this.router.navigate(['/ModuleParams']);
    };
    ProjectsComponent.prototype.addParams = function (pro) {
        localStorage.setItem('ModuleID', JSON.stringify(0));
        localStorage.setItem('MethodId', JSON.stringify("undefined"));
        localStorage.setItem('projectid', JSON.stringify(pro.P_ID));
        localStorage.setItem('projectname', JSON.stringify(pro.P_PRJ_NAME));
        localStorage.setItem('modulename', JSON.stringify(''));
        localStorage.setItem('mname', JSON.stringify(''));
        localStorage.setItem('Panel1', JSON.stringify(false));
        localStorage.setItem('Panel2', JSON.stringify(true));
        this.router.navigate(['/ModuleParams']);
    };
    ProjectsComponent.prototype.getprj = function () {
        var _this = this;
        this.service.getprj().subscribe(function (data) {
            _this.viewlength = data.length;
            if (data.length == 0) {
                _this.lblmsg = "No Records To Display!";
            }
            else {
                var _loop_1 = function (k) {
                    mymodel = { md: { 'mod': data[k].P_ID } };
                    _this.service.getapimodule(mymodel).subscribe(function (res) {
                        if (k < data.length) {
                            if (data[k].P_ACTIVE == "Y") {
                                _this.statuscheck = true;
                                _this.activecheck = false;
                                _this.deletecheck = false;
                            }
                            if (data[k].P_ACTIVE == "N") {
                                _this.statuscheck = false;
                                _this.activecheck = true;
                                _this.deletecheck = false;
                            }
                            if (data[k].P_ACTIVE == "D") {
                                _this.deletecheck = true;
                                _this.statuscheck = false;
                                _this.activecheck = false;
                            }
                            //else {
                            //    this.statuscheck = false;
                            //}
                        }
                        _this.prjs.push({
                            'P_ID': data[k].P_ID, 'P_PEP_P_ID': data[k].P_PEP_P_ID, 'P_PRJ_NAME': data[k].P_PRJ_NAME, 'P_API_URL_DEV': data[k].P_API_URL_DEV,
                            'P_API_URL_STAG': data[k].P_API_URL_STAG, 'P_API_URL_PROD': data[k].P_API_URL_PROD, 'P_API_URL_TEST': data[k].P_API_URL_TEST,
                            'P_U_ID': data[k].P_U_ID, 'P_ACTIVE': data[k].P_ACTIVE, 'P_TS': data[k].P_TS, 'mid': res.length, 'action': _this.statuscheck, 'action1': _this.activecheck,
                            'action2': _this.deletecheck
                        });
                    });
                };
                var mymodel;
                for (var k = 0; k < data.length; k++) {
                    _loop_1(k);
                }
            }
        });
    };
    ProjectsComponent.prototype.searchproject = function () {
        var _this = this;
        this.lbl = "";
        this.lblmsg = "";
        if (this.search != "" && this.search != "undefined" && this.search != null) {
            var mymodel = { prj: { 'P_PRJ_NAME': this.search } };
            this.service.searchproject(mymodel).subscribe(function (data) {
                if (data.length == 0) {
                    _this.prjs = [];
                    _this.lbl = "No Records To Display!";
                }
                else {
                    _this.viewbutton = false;
                    _this.prjs = [];
                    var _loop_2 = function (k) {
                        _this.viewlength = data.length;
                        _this.projectlength = data.length;
                        mymodel = { md: { 'mod': data[k].P_ID } };
                        _this.service.getapimodule(mymodel).subscribe(function (res) {
                            if (k < data.length) {
                                if (data[k].P_ACTIVE == "Y") {
                                    _this.statuscheck = true;
                                    _this.activecheck = false;
                                    _this.deletecheck = false;
                                }
                                if (data[k].P_ACTIVE == "N") {
                                    _this.statuscheck = false;
                                    _this.activecheck = true;
                                    _this.deletecheck = false;
                                }
                                if (data[k].P_ACTIVE == "D") {
                                    _this.deletecheck = true;
                                    _this.statuscheck = false;
                                    _this.activecheck = false;
                                }
                                //else {
                                //    this.statuscheck = false;
                                //}
                            }
                            _this.prjs.push({
                                'P_ID': data[k].P_ID, 'P_PEP_P_ID': data[k].P_PEP_P_ID, 'P_PRJ_NAME': data[k].P_PRJ_NAME, 'P_API_URL_DEV': data[k].P_API_URL_DEV,
                                'P_API_URL_STAG': data[k].P_API_URL_STAG, 'P_API_URL_PROD': data[k].P_API_URL_PROD, 'P_API_URL_TEST': data[k].P_API_URL_TEST,
                                'P_U_ID': data[k].P_U_ID, 'P_ACTIVE': data[k].P_ACTIVE, 'P_TS': data[k].P_TS, 'mid': res.length, 'action': _this.statuscheck, 'action1': _this.activecheck,
                                'action2': _this.deletecheck
                            });
                        });
                    };
                    var mymodel;
                    for (var k = 0; k < data.length; k++) {
                        _loop_2(k);
                    }
                }
                _this.searchcancel = true;
            });
        }
        //else {
        //    alert("Search Project should not be empty!");
        //}  
    };
    ProjectsComponent.prototype.cancelsearch = function () {
        this.prjs = [];
        this.search = "";
        this.lbl = "";
        this.searchcancel = false;
        this.viewbutton = true;
        this.ngOnInit();
    };
    //getapi(value: any) {
    //    var mymodel = { md: { 'mod': value } };
    //    this.service.getapimodule(mymodel).subscribe(data => {
    //        this.module = data.length;
    //        return (this.module);
    //    })
    //}
    ProjectsComponent.prototype.statusChange = function (value) {
        var selectElementText = event.target['options'][event.target['options'].selectedIndex].text;
        this.name = selectElementText;
    };
    ProjectsComponent.prototype.clear = function () {
        this.Project = "undefined";
        this.Development = "";
        this.Staging = "";
        this.Production = "";
        this.Testing = "";
    };
    ProjectsComponent.prototype.viewmore = function () {
        var _this = this;
        this.service.getproj().subscribe(function (data) {
            var _loop_3 = function (i) {
                mymodel = { md: { 'mod': data[i].P_ID } };
                _this.service.getapimodule(mymodel).subscribe(function (res) {
                    if (i < data.length) {
                        if (data[i].P_ACTIVE == "Y") {
                            _this.statuscheck = true;
                            _this.activecheck = false;
                            _this.deletecheck = false;
                        }
                        if (data[i].P_ACTIVE == "N") {
                            _this.statuscheck = false;
                            _this.activecheck = true;
                            _this.deletecheck = false;
                        }
                        if (data[i].P_ACTIVE == "D") {
                            _this.deletecheck = true;
                            _this.statuscheck = false;
                            _this.activecheck = false;
                        }
                        //else {
                        //    this.statuscheck = false;
                        //}
                    }
                    _this.prjs.push({
                        'P_ID': data[i].P_ID, 'P_PEP_P_ID': data[i].P_PEP_P_ID, 'P_PRJ_NAME': data[i].P_PRJ_NAME, 'P_API_URL_DEV': data[i].P_API_URL_DEV,
                        'P_API_URL_STAG': data[i].P_API_URL_STAG, 'P_API_URL_PROD': data[i].P_API_URL_PROD, 'P_API_URL_TEST': data[i].P_API_URL_TEST,
                        'P_U_ID': data[i].P_U_ID, 'P_ACTIVE': data[i].P_ACTIVE, 'P_TS': data[i].P_ACTIVE, 'mid': res.length, 'action': _this.statuscheck, 'action1': _this.activecheck,
                        'action2': _this.deletecheck
                    });
                });
                _this.viewlength = i + 1;
                if (_this.viewlength == _this.projectlength) {
                    _this.viewbutton = false;
                }
                if (i % 9 == 0)
                    return "break";
            };
            var mymodel;
            for (var i = _this.counter + 5; i < data.length; i++) {
                var state_1 = _loop_3(i);
                if (state_1 === "break")
                    break;
            }
            _this.counter += 5;
        });
    };
    ProjectsComponent.prototype.cancelcard = function () {
        this.Panel1 = true;
        this.Panel3 = false;
        this.lblmsg = "";
        this.apimodules = [];
    };
    ProjectsComponent.prototype.getmodlen = function () {
        this.service.getmodlen().subscribe(function (data) {
            console.log(data);
        });
    };
    ProjectsComponent.prototype.viewModules = function () {
        this.showmodulesinfo = true;
    };
    ProjectsComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/Login']);
    };
    ProjectsComponent.prototype.validations = function () {
        var re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        var message = "";
        var count = 0;
        if (this.Project == "" || this.Project == "undefined" || this.Project == null) {
            count = count + 1;
            message += "(" + count + ")" + " " + "Select Project\n";
        }
        if (this.Development == "" || this.Development == "undefined") {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter Development\n";
        }
        else if (this.Development != "" && !re.test(this.Development)) {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter valid Development URL\n";
        }
        if (this.Staging != "" && !re.test(this.Staging)) {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter valid Staging URL\n";
        }
        if (this.Testing != "" && !re.test(this.Testing)) {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter valid Testing URL\n";
        }
        if (this.Production != "" && !re.test(this.Production)) {
            count = count + 1;
            message += "(" + count + ")" + " " + "Enter valid Production URL\n";
        }
        alert(message);
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map