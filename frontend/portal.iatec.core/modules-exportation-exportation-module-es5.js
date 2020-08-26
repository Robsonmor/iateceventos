function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-exportation-exportation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/exportation/sales-report/sales-report.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/exportation/sales-report/sales-report.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesExportationSalesReportSalesReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Relatório de Vendas</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Relatório de Vendas</h1>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n            <form [formGroup]=\"form\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Atividade</mat-label>\r\n                                <mat-select formControlName=\"atividadeId\">\r\n                                <mat-option *ngFor=\"let activity of activities\" [value]=\"activity.atividadeId\">\r\n                                    {{ activity.atividade }}\r\n                                </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input  \r\n                                    matInput \r\n                                    [matDatepicker]=\"dataInicial\" \r\n                                    formControlName=\"dataInicial\" \r\n                                    placeholder=\"Data Inicial\"\r\n                                    [max]=\"form.value.dataFinal || dataAtual\"\r\n                                >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataInicial></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input \r\n                                    matInput \r\n                                    [min]=\"form.value.dataInicial\"\r\n                                    [max]=\"dataAtual\"\r\n                                    [matDatepicker]=\"dataFinal\" \r\n                                    formControlName=\"dataFinal\" \r\n                                    placeholder=\"Data Final\" \r\n                                >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataFinal ></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                \r\n                    <div class=\"col-2 offset-6 text-right\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"form.invalid\">Exportar</button>\r\n\t\t\t\t\t</div>\r\n                </div>                          \r\n            </form>\r\n        </div>\r\n    </section>\r\n    <div class=\"row mt-5\" *ngIf=\"showMessage\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\t<h4 class=\"alert-heading\">Sucesso!</h4>\r\n\t\t\t\tA solicitação do arquivo foi efetuada com sucesso! Você pode consultá-la na página <a routerLink=\"/minha-conta/central-downloads\">Central de Downloads</a>.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/exportation/sensitive-data/sensitive-data.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/exportation/sensitive-data/sensitive-data.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesExportationSensitiveDataSensitiveDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">cloud_download</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Dados Sensíveis</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Importação de Documentos - Dados Sensíveis</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>CPF/CNPJ</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"documento\" [mask]=\"documentMask\" (keydown)=\"keyDownDocument($event)\" class=\"inputCpfCnpj\" matInput placeholder=\"CPF/CNPJ\" />\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-label>Upload de Documentos</mat-label><br>\r\n\t\t\t\t\t\t\t<input type=\"file\" multiple (change)=\"onFileChanged($event.target.files)\"\r\n\t\t\t\t\t\t\t\taccept=\"image/png\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-2 offset-lg-5 \">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary adjustPosition\" (click)=\"submit()\"\r\n\t\t\t\t\t\t\t[disabled]=\"!isUploadFiles\">Importar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/exportation/exportation-routes.guard.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/exportation/exportation-routes.guard.ts ***!
    \*****************************************************************/

  /*! exports provided: ExportationRoutesGuard */

  /***/
  function srcAppModulesExportationExportationRoutesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportationRoutesGuard", function () {
      return ExportationRoutesGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/autentication.service */
    "./src/app/services/autentication.service.ts");

    var ExportationRoutesGuard =
    /*#__PURE__*/
    function () {
      function ExportationRoutesGuard(authenticationService) {
        _classCallCheck(this, ExportationRoutesGuard);

        this.authenticationService = authenticationService;
      }

      _createClass(ExportationRoutesGuard, [{
        key: "canActivate",
        value: function canActivate(event) {
          return this.authenticationService.isPermitted("exportacao", event.url[0].path);
        }
      }]);

      return ExportationRoutesGuard;
    }();

    ExportationRoutesGuard.ctorParameters = function () {
      return [{
        type: _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]
      }];
    };

    ExportationRoutesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]])], ExportationRoutesGuard);
    /***/
  },

  /***/
  "./src/app/modules/exportation/exportation-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/exportation/exportation-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ExportationRoutingModule */

  /***/
  function srcAppModulesExportationExportationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportationRoutingModule", function () {
      return ExportationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _sensitive_data_sensitive_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sensitive-data/sensitive-data.component */
    "./src/app/modules/exportation/sensitive-data/sensitive-data.component.ts");
    /* harmony import */


    var _exportation_routes_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./exportation-routes.guard */
    "./src/app/modules/exportation/exportation-routes.guard.ts");
    /* harmony import */


    var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sales-report/sales-report.component */
    "./src/app/modules/exportation/sales-report/sales-report.component.ts");

    var routes = [{
      path: 'dados-sensiveis',
      component: _sensitive_data_sensitive_data_component__WEBPACK_IMPORTED_MODULE_3__["SensitiveDataComponent"],
      canActivate: [_exportation_routes_guard__WEBPACK_IMPORTED_MODULE_4__["ExportationRoutesGuard"]]
    }, {
      path: 'relatorio-vendas',
      component: _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_5__["SalesReportComponent"],
      canActivate: [_exportation_routes_guard__WEBPACK_IMPORTED_MODULE_4__["ExportationRoutesGuard"]]
    }];

    var ExportationRoutingModule = function ExportationRoutingModule() {
      _classCallCheck(this, ExportationRoutingModule);
    };

    ExportationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExportationRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/exportation/exportation.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/exportation/exportation.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExportationModule */

  /***/
  function srcAppModulesExportationExportationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportationModule", function () {
      return ExportationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _exportation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./exportation-routing.module */
    "./src/app/modules/exportation/exportation-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/dateAdapter/customDate.adapter */
    "./src/app/shared/dateAdapter/customDate.adapter.ts");
    /* harmony import */


    var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/dateAdapter/my-date-formats.const */
    "./src/app/shared/dateAdapter/my-date-formats.const.ts");
    /* harmony import */


    var _sensitive_data_sensitive_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sensitive-data/sensitive-data.component */
    "./src/app/modules/exportation/sensitive-data/sensitive-data.component.ts");
    /* harmony import */


    var _sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sales-report/sales-report.component */
    "./src/app/modules/exportation/sales-report/sales-report.component.ts");

    var ExportationModule = function ExportationModule() {
      _classCallCheck(this, ExportationModule);
    };

    ExportationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sales_report_sales_report_component__WEBPACK_IMPORTED_MODULE_11__["SalesReportComponent"], _sensitive_data_sensitive_data_component__WEBPACK_IMPORTED_MODULE_10__["SensitiveDataComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _exportation_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExportationRoutingModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
        useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_8__["CustomDateAdapter"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"],
        useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_9__["MY_DATE_FORMATS"]
      }],
      entryComponents: []
    })], ExportationModule);
    /***/
  },

  /***/
  "./src/app/modules/exportation/sales-report/sales-report.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/exportation/sales-report/sales-report.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesExportationSalesReportSalesReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".itemDash .iconDash {\n  width: 25%;\n  display: inline-block;\n  text-align: center;\n}\n.itemDash .iconDash i {\n  font-size: 40px;\n  color: #E53935;\n}\n.itemDash .datas {\n  width: 75%;\n  display: inline-block;\n}\n.itemDash .datas .title {\n  display: block;\n  color: #546E7A;\n  text-align: center;\n}\n.itemDash .datas .valor {\n  text-align: center;\n  display: block;\n}\nh1 {\n  font-size: 2rem;\n  margin-bottom: 25px;\n}\n.cursorPointer {\n  cursor: pointer;\n}\n.cursorPointer:hover {\n  background-color: #B0BEC5;\n}\ntr.example-detail-row {\n  height: 0;\n  background: #ECEFF1;\n}\ntable td.mat-cell, table th.mat-header-cell {\n  padding: 0 24px;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #CFD8DC;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-expanded-row {\n  font-weight: bold;\n  background: #ECEFF1;\n}\n.example-expanded-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.table {\n  margin: 15px auto;\n  box-shadow: 0px 3px 7px 0px #666666;\n  width: 98%;\n}\n.table th {\n  border-bottom: none;\n  background-color: #1565C0;\n  color: #FFFFFF;\n}\n.table tr {\n  background-color: #FFFFFF;\n}\n.table tr:nth-child(even) {\n  background-color: #FAFAFA;\n}\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBvcnRhdGlvbi9zYWxlcy1yZXBvcnQvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cG9ydGF0aW9uXFxzYWxlcy1yZXBvcnRcXHNhbGVzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9leHBvcnRhdGlvbi9zYWxlcy1yZXBvcnQvc2FsZXMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDWjtBREVJO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDQVI7QURDUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0FDREo7QURFSTtFQUNJLHlCQUFBO0FDQVI7QURJQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBQ0ksc0JBQUE7QUNEUjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNGSjtBREtBO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNGSjtBREdJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNEUjtBREdJO0VBQ0kseUJBQUE7QUNEUjtBREdRO0VBQ0kseUJBQUE7QUNEWjtBRE1BO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cG9ydGF0aW9uL3NhbGVzLXJlcG9ydC9zYWxlcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbURhc2gge1xyXG4gICAgLmljb25EYXNoIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNFNTM5MzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhdGFzIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICM1NDZFN0E7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbG9yIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jdXJzb3JQb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEJFQzU7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xyXG59XHJcblxyXG50YWJsZSB0ZC5tYXQtY2VsbCwgdGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1leHBhbmRlZC1yb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA3cHggMHB4IHJnYmEoMTAyLDEwMiwxMDIsMSk7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIHRyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGwtbWVudXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufSIsIi5pdGVtRGFzaCAuaWNvbkRhc2gge1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtRGFzaCAuaWNvbkRhc2ggaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNFNTM5MzU7XG59XG4uaXRlbURhc2ggLmRhdGFzIHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLml0ZW1EYXNoIC5kYXRhcyAudGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM1NDZFN0E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtRGFzaCAuZGF0YXMgLnZhbG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jdXJzb3JQb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1cnNvclBvaW50ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBCRUM1O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNFQ0VGRjE7XG59XG5cbnRhYmxlIHRkLm1hdC1jZWxsLCB0YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xufVxuLmV4YW1wbGUtZXhwYW5kZWQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFibGUge1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA3cHggMHB4ICM2NjY2NjY7XG4gIHdpZHRoOiA5OCU7XG59XG4udGFibGUgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NUMwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi50YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4udGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuLnNtYWxsLW1lbnUge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/exportation/sales-report/sales-report.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/exportation/sales-report/sales-report.component.ts ***!
    \****************************************************************************/

  /*! exports provided: SalesReportComponent */

  /***/
  function srcAppModulesExportationSalesReportSalesReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesReportComponent", function () {
      return SalesReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_exportation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/exportation.service */
    "./src/app/modules/exportation/services/exportation.service.ts");

    var SalesReportComponent =
    /*#__PURE__*/
    function () {
      function SalesReportComponent(formBuilder, matSnackBar, exportationService) {
        _classCallCheck(this, SalesReportComponent);

        this.formBuilder = formBuilder;
        this.matSnackBar = matSnackBar;
        this.exportationService = exportationService;
        this.loading = false;
        this.activities = [];
        this.showMessage = false;
        this.dataAtual = new Date();
      }

      _createClass(SalesReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.form = this.formBuilder.group({
            atividadeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataInicial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.getAtividade();
        }
      }, {
        key: "getAtividade",
        value: function getAtividade() {}
      }, {
        key: "atividade",
        value: function atividade() {
          this.getAtividade();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          this.loading = true;
          var form = this.form.value;
          var dataInicial = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
          var dataFinal = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
          this.exportationService.exportSalesReport(form.atividadeId, dataInicial, dataFinal).subscribe(function (response) {
            _this.showMessage = true;
            _this.loading = false;
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(_this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
            _this.loading = false;
          });
        }
      }]);

      return SalesReportComponent;
    }();

    SalesReportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _services_exportation_service__WEBPACK_IMPORTED_MODULE_6__["ExportationService"]
      }];
    };

    SalesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sales-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sales-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/exportation/sales-report/sales-report.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sales-report.component.scss */
      "./src/app/modules/exportation/sales-report/sales-report.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _services_exportation_service__WEBPACK_IMPORTED_MODULE_6__["ExportationService"]])], SalesReportComponent);
    /***/
  },

  /***/
  "./src/app/modules/exportation/sensitive-data/sensitive-data.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/exportation/sensitive-data/sensitive-data.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesExportationSensitiveDataSensitiveDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn i {\n  position: relative;\n  top: 5px;\n}\n\n.adjustPosition {\n  position: relative;\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBvcnRhdGlvbi9zZW5zaXRpdmUtZGF0YS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZXhwb3J0YXRpb25cXHNlbnNpdGl2ZS1kYXRhXFxzZW5zaXRpdmUtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9leHBvcnRhdGlvbi9zZW5zaXRpdmUtZGF0YS9zZW5zaXRpdmUtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cG9ydGF0aW9uL3NlbnNpdGl2ZS1kYXRhL3NlbnNpdGl2ZS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgICBpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGp1c3RQb3NpdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxufSIsIi5idG4gaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG5cbi5hZGp1c3RQb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/exportation/sensitive-data/sensitive-data.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/exportation/sensitive-data/sensitive-data.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SensitiveDataComponent */

  /***/
  function srcAppModulesExportationSensitiveDataSensitiveDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SensitiveDataComponent", function () {
      return SensitiveDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_exportation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/exportation.service */
    "./src/app/modules/exportation/services/exportation.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SensitiveDataComponent =
    /*#__PURE__*/
    function () {
      function SensitiveDataComponent(formBuilder, exportationService, matSnackBar) {
        _classCallCheck(this, SensitiveDataComponent);

        this.formBuilder = formBuilder;
        this.exportationService = exportationService;
        this.matSnackBar = matSnackBar;
        this.loading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.isUploadFiles = false;
        this.formData = new FormData();
        this.documentMask = '000.000.000-00';
      }

      _createClass(SensitiveDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
          });
        }
      }, {
        key: "keyDownDocument",
        value: function keyDownDocument(event) {
          var len = this.form.value.documento.length;
          var pattern = new RegExp("^[0-9]*$");

          if (pattern.test(event.key) || event.key === 'Backspace') {
            if (event.keyCode === 8) {
              len = len - 2;
            }

            if (len < 11) {
              this.documentMask = '000.000.000-00';
            } else {
              this.documentMask = '00.000.000/0000-00';
            }
          }
        }
        /*
            $(".inputCpfCnpj").keydown(function(){
                try {
                    $(".inputCpfCnpj").unmask();
                } catch (e) {}
            
                var tamanho = $(".inputCpfCnpj").val().length;
            
                if(tamanho < 11){
                    $(".inputCpfCnpj").mask("999.999.999-99");
                } else {
                    $(".inputCpfCnpj").mask("99.999.999/9999-99");
                }
            
                // ajustando foco
                var elem = this;
                setTimeout(function(){
                    // mudo a posição do seletor
                    elem.selectionStart = elem.selectionEnd = 10000;
                }, 0);
                // reaplico o valor para mudar o foco
                var currentValue = $(this).val();
                $(this).val('');
                $(this).val(currentValue);
            });
        */

      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          if (this.isUploadFiles) {
            this.loading = true;
            this.exportationService.uploadDadosSensiveis(this.formData, this.form.value.documento).subscribe(function (response) {
              _this2.loading = false;
              _this2.isUploadFiles = false;
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(_this2.matSnackBar, "Carga inserida com sucesso.");
            }, function (error) {
              var msgObject;

              if (error != null && error.error != null) {
                msgObject = error.error;
              } else {
                msgObject = error;
              }

              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(_this2.matSnackBar, null, msgObject.message);
              _this2.loading = false;
            });
          }
        }
      }, {
        key: "checkfile",
        value: function checkfile(sender) {
          var validExts = new Array(".PNG");
          var fileExt = sender.name;
          fileExt = fileExt.substring(fileExt.lastIndexOf('.')).toUpperCase();

          if (validExts.indexOf(fileExt) < 0) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, null, "Extensão inválida, somente é possível importar " + validExts.toString());
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(files) {
          this.formData = new FormData();

          if (files && files.length > 0) {
            try {
              for (var i = 0; i < files.length; i++) {
                var fileToUpload = files.item(i);

                if (!this.checkfile(fileToUpload)) {
                  this.isUploadFiles = false;
                  return false;
                }

                this.formData.append('files', fileToUpload, fileToUpload.name);
              }

              this.isUploadFiles = true;
            } catch (_a) {
              this.isUploadFiles = false;
              this.formData = new FormData();
            }
          }
        }
      }]);

      return SensitiveDataComponent;
    }();

    SensitiveDataComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_exportation_service__WEBPACK_IMPORTED_MODULE_2__["ExportationService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], SensitiveDataComponent.prototype, "paginator", void 0);
    SensitiveDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sensitive-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sensitive-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/exportation/sensitive-data/sensitive-data.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sensitive-data.component.scss */
      "./src/app/modules/exportation/sensitive-data/sensitive-data.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_exportation_service__WEBPACK_IMPORTED_MODULE_2__["ExportationService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])], SensitiveDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/exportation/services/exportation.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/exportation/services/exportation.service.ts ***!
    \*********************************************************************/

  /*! exports provided: ExportationService */

  /***/
  function srcAppModulesExportationServicesExportationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExportationService", function () {
      return ExportationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ExportationService =
    /*#__PURE__*/
    function () {
      function ExportationService(httpClient) {
        _classCallCheck(this, ExportationService);

        this.httpClient = httpClient;
      }

      _createClass(ExportationService, [{
        key: "exportMassified",
        value: function exportMassified(body) {
          return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/exportacoes/massificada"), {
            params: {
              tipoArquivo: body.tipoArquivo.toString(),
              dataInicial: body.dataInicial,
              dataFinal: body.dataFinal,
              isDownload: 'false'
            }
          });
        }
      }, {
        key: "getFileMassified",
        value: function getFileMassified(url) {
          return this.httpClient.get(url, {
            responseType: 'blob'
          });
        }
      }, {
        key: "find",
        value: function find(pageIndex, pageSize, filter) {
          return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/carga-logs"), {
            params: {
              PageSize: pageSize,
              PageIndex: pageIndex,
              AssemblyName: filter
            }
          });
        }
      }, {
        key: "upload",
        value: function upload(file) {
          return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/shared/upload"), file);
        }
      }, {
        key: "uploadDadosSensiveis",
        value: function uploadDadosSensiveis(files, document) {
          return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/exportacoes/dados-sensiveis/").concat(document), files);
        }
      }, {
        key: "uploadMassiva",
        value: function uploadMassiva(file) {
          return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/upload-massiva"), file);
        }
      }, {
        key: "getAtividades",
        value: function getAtividades() {
          return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/atividades"));
        }
      }, {
        key: "exportacaoMassiva",
        value: function exportacaoMassiva(file) {
          return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/exportacoes/massiva"), file);
        }
      }, {
        key: "exportSalesReport",
        value: function exportSalesReport(atividadeId, dataInicial, dataFinal) {
          var data = {
            atividadeId: atividadeId,
            dataInicial: dataInicial,
            dataFinal: dataFinal
          };
          return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/exportacoes/relatorio-vendas"), data);
        }
      }, {
        key: "uploadPostergar",
        value: function uploadPostergar(file) {
          return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/service-center/postergacoes/converter"), file);
        }
      }, {
        key: "postergacaoMassiva",
        value: function postergacaoMassiva(itens) {
          var params = {
            itens: itens
          };
          return this.httpClient.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices, "/api/v1/service-center/postergacoes/multiplos"), params);
        }
      }]);

      return ExportationService;
    }();

    ExportationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ExportationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ExportationService);
    /***/
  }
}]);
//# sourceMappingURL=modules-exportation-exportation-module-es5.js.map