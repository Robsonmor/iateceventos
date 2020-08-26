function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-my-account-my-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-account/central-downloads/central-downloads.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-account/central-downloads/central-downloads.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMyAccountCentralDownloadsCentralDownloadsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">assignment_returned</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Pesquisar Malotes</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Central de Downloads</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formSearch\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Tipo</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"type\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"1\">AQO</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"2\">Gerente Digital</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"3\">Massiva</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"4\">Relatório de Vendas</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"5\">Relatório Analítico</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"6\">Exportação Massificada</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-4\" *ngIf=\"formSearch.value.type !== '3' && formSearch.value.type !== '5' && formSearch.value.type !== '6'\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"operation\" #operacaoId (selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ operation.nome }}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-8\" *ngIf=\"formSearch.value.type !== '3' && formSearch.value.type !== '5' && formSearch.value.type !== '6'\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Atividade</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"activity\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Status</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"status\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"1\">Em progresso</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"2\">Finalizado</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"3\">Falha</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"4\">Dados Indisponíveis</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\t\t[matDatepicker]=\"initialDate\" \r\n\t\t\t\t\t\t\t\t\t[max]=\"formSearch.value.finalDate\" \r\n\t\t\t\t\t\t\t\t\tformControlName=\"initialDate\" \r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"initialDate\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #initialDate></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\t\t[matDatepicker]=\"finalDate\" \r\n\t\t\t\t\t\t\t\t\t[max]=\"currentData\" \r\n\t\t\t\t\t\t\t\t\t[min]=\"formSearch.value.initialDate\" \r\n\t\t\t\t\t\t\t\t\tformControlName=\"finalDate\" \r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Final\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"finalDate\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #finalDate ></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-2 offset-2 text-right\">\r\n\t\t\t\t\t\t\t<button (click)=\"search()\" type=\"button\" class=\"btn btn-primary\" >Pesquisar</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"showMessage\">\r\n\t\tNão foram encontrados registros para essa pesquisa.\r\n\t</div>\r\n\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<div class=\"containerTable\">\r\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>ID</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.id }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"tipo\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Tipo</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.tipo }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"produto\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef >Produto</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.produto }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.status }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataSolicitacao\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Data de Solicitação</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.dataSolicitacao | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataConclusao\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Data de Conclusão</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.dataConclusao | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Link</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t\t\t<button mat-flat-button color=\"primary\" [matMenuTriggerFor]=\"menu\" *ngIf=\"element.arquivos\">\r\n\t\t\t\t\t\t\t\t\t\tLinks para Download\r\n\t\t\t\t\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<mat-menu #menu=\"matMenu\" xPosition=\"before\">\r\n\t\t\t\t\t\t\t\t\t\t<button *ngFor=\"let itemGalerie of element.arquivos\" (click)=\"getDownload(itemGalerie)\" mat-menu-item class=\"d-flex align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons mr-1\">attach_file</i>\r\n\t\t\t\t\t\t\t\t\t\t\t{{ itemGalerie.title }}\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\r\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<mat-paginator \r\n\t\t\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 50, 100]\" \r\n\t\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t\t(page) = \"changePaginator($event)\"\r\n\t\t\t\t\t></mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/my-account/central-downloads/central-downloads.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/my-account/central-downloads/central-downloads.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMyAccountCentralDownloadsCentralDownloadsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-flat-button {\n  padding-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9teS1hY2NvdW50L2NlbnRyYWwtZG93bmxvYWRzL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxteS1hY2NvdW50XFxjZW50cmFsLWRvd25sb2Fkc1xcY2VudHJhbC1kb3dubG9hZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbXktYWNjb3VudC9jZW50cmFsLWRvd25sb2Fkcy9jZW50cmFsLWRvd25sb2Fkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL215LWFjY291bnQvY2VudHJhbC1kb3dubG9hZHMvY2VudHJhbC1kb3dubG9hZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZsYXQtYnV0dG9uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxufSIsIi5tYXQtZmxhdC1idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/my-account/central-downloads/central-downloads.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/my-account/central-downloads/central-downloads.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CentralDownloadsComponent */

  /***/
  function srcAppModulesMyAccountCentralDownloadsCentralDownloadsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralDownloadsComponent", function () {
      return CentralDownloadsComponent;
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


    var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/operation.service */
    "./src/app/services/operation.service.ts");
    /* harmony import */


    var _services_central_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/central-download.service */
    "./src/app/modules/my-account/services/central-download.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CentralDownloadsComponent =
    /*#__PURE__*/
    function () {
      function CentralDownloadsComponent(formBuilder, operationService, centralDownloadService) {
        _classCallCheck(this, CentralDownloadsComponent);

        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.centralDownloadService = centralDownloadService;
        this.operations = [];
        this.activities = [];
        this.currentData = new Date();
        /** Table */

        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.displayedColumns = ['id', 'tipo', 'produto', 'status', 'dataSolicitacao', 'dataConclusao', 'actions'];
        /** Paginator */

        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
      }

      _createClass(CentralDownloadsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.formSearch = this.formBuilder.group({
            type: [''],
            operation: [''],
            activity: [''],
            status: [''],
            initialDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            finalDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.formSearch.get('activity').disable();
          /** Lista de Operações sem Template Associado */

          this.operationService.getOperations().subscribe(function (response) {
            _this.operations = _toConsumableArray(response.data);
          }, function () {// Mensagem de Erro para Serviço Indisponível. Não tem como prosseguir
          });
        }
      }, {
        key: "setOperation",
        value: function setOperation() {
          var _this2 = this;

          var operation = this.operations.find(function (el) {
            return el.operacaoId === _this2.formSearch.value.operation;
          });
          this.activities = _toConsumableArray(operation.atividades);
          this.formSearch.get('activity').enable();
        }
      }, {
        key: "search",
        value: function search() {
          var _this3 = this;

          if (this.formSearch.valid) {
            var form = this.formSearch.value;
            var initialDate = moment__WEBPACK_IMPORTED_MODULE_5__(form.initialDate).format('YYYY-MM-DD');
            var finalDate = moment__WEBPACK_IMPORTED_MODULE_5__(form.finalDate).format('YYYY-MM-DD');
            var activity = form.activity || '';
            this.centralDownloadService.getListDownloads(activity, form.status, form.type, initialDate, finalDate, (this.pageIndex + 1).toString(), this.pageSize.toString()).subscribe(function (response) {
              _this3.loading = false;
              _this3.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](response.data);
              _this3.length = response.length;
            });
          } else {
            this.formSearch.markAllAsTouched();
          }
        }
      }, {
        key: "changePaginator",
        value: function changePaginator(event) {
          this.pageIndex = event.pageIndex;
          this.pageSize = event.pageSize;
          this.search();
        }
      }, {
        key: "getDownload",
        value: function getDownload(file) {
          this.centralDownloadService.getFile(file.url).subscribe(function (response) {
            var blob = new Blob([response.body], {
              type: 'application/octet-stream'
            });
            var linkArquivo = window.URL.createObjectURL(blob);
            var fileName = response.headers.get('content-disposition').split(';')[1].split('filename')[1].split('=')[1].trim();
            var link = document.createElement("a");
            link.setAttribute("href", linkArquivo.toString());
            link.setAttribute("download", fileName);
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
        }
      }]);

      return CentralDownloadsComponent;
    }();

    CentralDownloadsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"]
      }, {
        type: _services_central_download_service__WEBPACK_IMPORTED_MODULE_4__["CentralDownloadService"]
      }];
    };

    CentralDownloadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-central-downloads',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./central-downloads.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-account/central-downloads/central-downloads.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./central-downloads.component.scss */
      "./src/app/modules/my-account/central-downloads/central-downloads.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"], _services_central_download_service__WEBPACK_IMPORTED_MODULE_4__["CentralDownloadService"]])], CentralDownloadsComponent);
    /***/
  },

  /***/
  "./src/app/modules/my-account/my-account-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/my-account/my-account-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyAccountRoutingModule */

  /***/
  function srcAppModulesMyAccountMyAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountRoutingModule", function () {
      return MyAccountRoutingModule;
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


    var _central_downloads_central_downloads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./central-downloads/central-downloads.component */
    "./src/app/modules/my-account/central-downloads/central-downloads.component.ts");

    var routes = [{
      path: 'central-downloads',
      component: _central_downloads_central_downloads_component__WEBPACK_IMPORTED_MODULE_3__["CentralDownloadsComponent"]
    }];

    var MyAccountRoutingModule = function MyAccountRoutingModule() {
      _classCallCheck(this, MyAccountRoutingModule);
    };

    MyAccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyAccountRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/my-account/my-account.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/my-account/my-account.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyAccountModule */

  /***/
  function srcAppModulesMyAccountMyAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountModule", function () {
      return MyAccountModule;
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


    var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-account-routing.module */
    "./src/app/modules/my-account/my-account-routing.module.ts");
    /* harmony import */


    var _central_downloads_central_downloads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./central-downloads/central-downloads.component */
    "./src/app/modules/my-account/central-downloads/central-downloads.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MyAccountModule = function MyAccountModule() {
      _classCallCheck(this, MyAccountModule);
    };

    MyAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_central_downloads_central_downloads_component__WEBPACK_IMPORTED_MODULE_4__["CentralDownloadsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _my_account_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyAccountRoutingModule"]]
    })], MyAccountModule);
    /***/
  },

  /***/
  "./src/app/modules/my-account/services/central-download.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/my-account/services/central-download.service.ts ***!
    \*************************************************************************/

  /*! exports provided: CentralDownloadService */

  /***/
  function srcAppModulesMyAccountServicesCentralDownloadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CentralDownloadService", function () {
      return CentralDownloadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CentralDownloadService =
    /*#__PURE__*/
    function () {
      function CentralDownloadService(http) {
        _classCallCheck(this, CentralDownloadService);

        this.http = http;
      }

      _createClass(CentralDownloadService, [{
        key: "getListDownloads",
        value: function getListDownloads(atividadeId, statusId, tipoId, dataInicial, dataFinal, pageIndex, pageSize) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices, "/api/v1/central-downloads"), {
            params: {
              AtividadeId: atividadeId,
              StatusId: statusId,
              TipoId: tipoId,
              DataSolicitacao: dataInicial,
              DataConclusao: dataFinal,
              PageSize: pageSize,
              PageIndex: pageIndex
            }
          });
        }
      }, {
        key: "getFile",
        value: function getFile(link) {
          return this.http.get(link, {
            responseType: 'blob',
            observe: 'response'
          });
        }
      }]);

      return CentralDownloadService;
    }();

    CentralDownloadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CentralDownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CentralDownloadService);
    /***/
  }
}]);
//# sourceMappingURL=modules-my-account-my-account-module-es5.js.map