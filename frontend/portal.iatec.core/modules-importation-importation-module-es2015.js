(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-importation-importation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/importation/central-upload/central-upload.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/importation/central-upload/central-upload.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">cloud_upload</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Central de Upload</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Central de Upload</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<div class=\"form-group file-ajust-material\">\r\n\t\t\t\t\t\t\t<input #myInput type=\"file\" (change)=\"onFileChanged($event.target.files)\"\r\n\t\t\t\t\t\t\t\taccept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Tipo de Documento</mat-label>\r\n\t\t\t\t\t\t\t<mat-select formControlName=\"tipoUpload\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\r\n\t\t\t\t\t\t\t\t\t{{ tipo.nome }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary adjustPosition\"\r\n\t\t\t\t\t\t\t[disabled]=\"!isUploadFiles || !form.valid\" (click)=\"submit()\">Importar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1>Lista de Arquivos Importados</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mr-1\">\r\n\t\t<div class=\"col-lg-7\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Nome do Arquivo</mat-label>\r\n\t\t\t\t<input [(ngModel)]=\"filterFileName\" matInput placeholder=\"Nome do Arquivo\" />\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\t\t\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Tipo de Documento</mat-label>\r\n\t\t\t\t<mat-select [(value)]=\"filterType\" >\r\n\t\t\t\t\t<mat-option [value]=\"\"> Todos </mat-option>\t\t\t\t\t\r\n\t\t\t\t\t<mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\r\n\t\t\t\t\t\t{{ tipo.nome }}\r\n\t\t\t\t\t</mat-option>\r\n\t\t\t\t</mat-select>\r\n\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\t\t\r\n\t\t<div class=\"col-lg-1\">\r\n\t\t\t<button (click)=\"find(true)\" class=\"btn btn-primary\">\r\n\t\t\t\tAtualizar\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-12\" *ngIf=\"!length || length == 0\">\r\n\t\t<label>Não há arquivos importados</label>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"row mt-3 mb-3\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"CriadoPor\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Solicitado Por</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">\r\n\t\t\t\t\t\t\t{{ element.solicitante.nomeCompleto }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"DataCadastro\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Solicitação</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t{{ element.dataSolicitacao | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"Arquivo\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Arquivo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t{{ element.arquivos.fileName.substring(33) }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"Tipo\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Tipo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.tipo }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"Status\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"Mensagem\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Mensagem</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.mensagem }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"Actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Link</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<button (click)=\"getDownload(element.arquivos)\" mat-menu-item\r\n\t\t\t\t\t\t\t\tclass=\"d-flex align-items-center\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons mr-1\">attach_file</i>\r\n\t\t\t\t\t\t\t\tDownload\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n\t\t\t\t\t\t[ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/importation/central-upload/central-upload.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/importation/central-upload/central-upload.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaW1wb3J0YXRpb24vY2VudHJhbC11cGxvYWQvY2VudHJhbC11cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/importation/central-upload/central-upload.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/importation/central-upload/central-upload.component.ts ***!
  \********************************************************************************/
/*! exports provided: CentralUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralUploadComponent", function() { return CentralUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_importation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/importation.service */ "./src/app/modules/importation/services/importation.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let CentralUploadComponent = class CentralUploadComponent {
    constructor(importationService, matSnackBar, formBuilder) {
        this.importationService = importationService;
        this.matSnackBar = matSnackBar;
        this.formBuilder = formBuilder;
        this.filterType = '';
        this.filterFileName = '';
        this.tipos = [];
        this.file = new Set();
        this.loading = false;
        this.isUploadFiles = false;
        this.anexos = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.formData = new FormData();
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.displayedColumns = ['CriadoPor', 'DataCadastro', 'Tipo', 'Arquivo', 'Status', 'Mensagem', 'Actions'];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            tipoUpload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
        this.getTypes();
        this.find();
    }
    submit() {
        try {
            this.loading = true;
            let fileToUpload = this.formData.get("file");
            const formData = new FormData();
            formData.append('file', fileToUpload);
            formData.append("tipoUpload", this.form.value.tipoUpload.toString());
            this.importationService.sendUpload(formData).subscribe(() => {
                this.loading = false;
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showSuccess(this.matSnackBar, "Upload iniciado, acompanhe seu progresso na tabela abaixo.");
                this.find();
                this.myInput.nativeElement.value = "";
                this.isUploadFiles = false;
            }, () => {
                this.loading = false;
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro no upload do arquivo");
                this.myInput.nativeElement.value = "";
                this.isUploadFiles = false;
            });
        }
        catch (_a) {
            this.loading = false;
        }
    }
    getTypes() {
        this.importationService.getTypes().subscribe(response => {
            this.tipos = [...response.data];
        }, () => {
            // Mensagem de Erro para Serviço Indisponível. Não tem como prosseguir
        });
    }
    find(reset = false) {
        this.loading = true;
        if (reset) {
            this.pageIndex = 0;
            this.pageSize = 5;
        }
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.importationService.findUpload(pageIndex, pageSize, this.filterFileName, '', this.filterType, '', '').subscribe(response => {
            this.loading = false;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data);
            this.length = response.length;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loading = false;
        });
    }
    getDownload(file) {
        this.importationService.getFile(file.url).subscribe(response => {
            const blob = new Blob([response.body], { type: 'application/octet-stream' });
            const linkArquivo = window.URL.createObjectURL(blob);
            const fileName = response.headers.get('content-disposition').split(';')[1].split('filename')[1].split('=')[1].trim();
            var link = document.createElement("a");
            link.setAttribute("href", linkArquivo.toString());
            link.setAttribute("download", fileName);
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.find();
    }
    onFileChanged(files) {
        this.formData = new FormData();
        if (files && files.length > 0) {
            try {
                for (let i = 0; i < files.length; i++) {
                    const fileToUpload = files.item(i);
                    this.formData.append('file', fileToUpload, fileToUpload.name);
                }
                this.isUploadFiles = true;
            }
            catch (_a) {
                this.isUploadFiles = false;
                this.formData = new FormData();
            }
        }
    }
};
CentralUploadComponent.ctorParameters = () => [
    { type: _services_importation_service__WEBPACK_IMPORTED_MODULE_2__["ImportationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CentralUploadComponent.prototype, "myInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], CentralUploadComponent.prototype, "paginator", void 0);
CentralUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'central-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./central-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/importation/central-upload/central-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./central-upload.component.scss */ "./src/app/modules/importation/central-upload/central-upload.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_importation_service__WEBPACK_IMPORTED_MODULE_2__["ImportationService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], CentralUploadComponent);



/***/ }),

/***/ "./src/app/modules/importation/importation-routes.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/importation/importation-routes.guard.ts ***!
  \*****************************************************************/
/*! exports provided: ImportationRoutesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportationRoutesGuard", function() { return ImportationRoutesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/autentication.service */ "./src/app/services/autentication.service.ts");



let ImportationRoutesGuard = class ImportationRoutesGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(event) {
        return this.authenticationService.isPermitted("importacao", event.url[0].path);
    }
};
ImportationRoutesGuard.ctorParameters = () => [
    { type: _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"] }
];
ImportationRoutesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]])
], ImportationRoutesGuard);



/***/ }),

/***/ "./src/app/modules/importation/importation-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/importation/importation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ImportationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportationRoutingModule", function() { return ImportationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _central_upload_central_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./central-upload/central-upload.component */ "./src/app/modules/importation/central-upload/central-upload.component.ts");
/* harmony import */ var _importation_routes_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./importation-routes.guard */ "./src/app/modules/importation/importation-routes.guard.ts");





const routes = [
    { path: 'central-upload', component: _central_upload_central_upload_component__WEBPACK_IMPORTED_MODULE_3__["CentralUploadComponent"], canActivate: [_importation_routes_guard__WEBPACK_IMPORTED_MODULE_4__["ImportationRoutesGuard"]] },
];
let ImportationRoutingModule = class ImportationRoutingModule {
};
ImportationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ImportationRoutingModule);



/***/ }),

/***/ "./src/app/modules/importation/importation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/importation/importation.module.ts ***!
  \***********************************************************/
/*! exports provided: ImportationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportationModule", function() { return ImportationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _importation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importation-routing.module */ "./src/app/modules/importation/importation-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dateAdapter/customDate.adapter */ "./src/app/shared/dateAdapter/customDate.adapter.ts");
/* harmony import */ var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dateAdapter/my-date-formats.const */ "./src/app/shared/dateAdapter/my-date-formats.const.ts");
/* harmony import */ var _central_upload_central_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./central-upload/central-upload.component */ "./src/app/modules/importation/central-upload/central-upload.component.ts");











let ImportationModule = class ImportationModule {
};
ImportationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _central_upload_central_upload_component__WEBPACK_IMPORTED_MODULE_10__["CentralUploadComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _importation_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImportationRoutingModule"]
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_8__["CustomDateAdapter"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_9__["MY_DATE_FORMATS"] }
        ],
        entryComponents: []
    })
], ImportationModule);



/***/ }),

/***/ "./src/app/modules/importation/services/importation.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/importation/services/importation.service.ts ***!
  \*********************************************************************/
/*! exports provided: ImportationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportationService", function() { return ImportationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ImportationService = class ImportationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getFile(link) {
        return this.httpClient.get(link, {
            responseType: 'blob',
            observe: 'response'
        });
    }
    getTypes() {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/central-uploads/tipos`, {});
    }
    findUpload(pageIndex, pageSize, nomeArquivo, statusId, tipoId, dataSolicitacaoInicial, dataSolicitacaoFinal) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/central-uploads`, {
            params: {
                PageSize: pageSize,
                PageIndex: pageIndex,
                NomeArquivo: nomeArquivo,
                StatusId: statusId,
                TipoId: tipoId,
                DataSolicitacaoInicial: dataSolicitacaoInicial,
                DataSolicitacaoFinal: dataSolicitacaoFinal
            }
        });
    }
    sendUpload(file) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/central-uploads`, file);
    }
};
ImportationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ImportationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ImportationService);



/***/ })

}]);
//# sourceMappingURL=modules-importation-importation-module-es2015.js.map