(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-service-center-service-center-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/agency-from-to/agency-from-to.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/agency-from-to/agency-from-to.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">build</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">De-Para</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>De-Para</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t<mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n\t\t\t\t\t\t\t\t\t{{ operation.nome }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Atividade</mat-label>\r\n\t\t\t\t\t\t\t<mat-select formControlName=\"atividadeId\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n\t\t\t\t\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>CPF/CNPJ</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\" maxlength=\"14\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Agência</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"agencia\" matInput placeholder=\"Agência\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Conta</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"conta\" matInput placeholder=\"Conta\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input  \r\n\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\t[matDatepicker]=\"dataInicial\" \r\n\t\t\t\t\t\t\t\tformControlName=\"dataInicial\" \r\n\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\"\r\n\t\t\t\t\t\t\t\t[max]=\"form.value.dataFinal || dataAtual\">\r\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t<mat-datepicker #dataInicial></mat-datepicker>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\t[min]=\"form.value.dataInicial\"\r\n\t\t\t\t\t\t\t\t[max]=\"dataAtual\"\r\n\t\t\t\t\t\t\t\t[matDatepicker]=\"dataFinal\" \r\n\t\t\t\t\t\t\t\tformControlName=\"dataFinal\" \r\n\t\t\t\t\t\t\t\tplaceholder=\"Data Final\" >\r\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t<mat-datepicker #dataFinal ></mat-datepicker>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"getAtividadesDePara()\" >\r\n\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\t\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5 \">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"dataCarga\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data da Carga</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataCarga  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"documento\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">CPF/CNPJ</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ formatDocument(element.documento) }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"agencia\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Agência</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"conta\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Conta</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.conta }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"historico\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Histórico</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.historico }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"uniorg\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Uniorg</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.uniorg }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\"></th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-left\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"dePara(element)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">open_in_new</i> \r\n\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Atualizar Uniorg</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<mat-paginator \r\n\t\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t\t(page) = \"setPageSizeOptions($event)\">\r\n\t\t\t\t\t</mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length === 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\tNão foram localizados registros no sistema para essa pesquisa\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title class=\"mat-dialog-title\">Atualizar Uniorg</h1>\r\n<form [formGroup]=\"form\" >\r\n\t<div class=\"uniorgAtual\">\r\n\t\t<label>Uniorg Atual</label>\r\n\t\t<span>{{ data.uniorg ? data.uniorg : '-' }}</span>\r\n\t</div>\r\n\t<mat-form-field>\r\n\t\t<mat-label>Novo Uniorg</mat-label>\r\n\t\t<input matInput type=\"number\" formControlName=\"uniorg\" />\r\n\t</mat-form-field>\r\n\t<mat-form-field>\r\n\t\t<mat-label>Número do Chamado IM</mat-label>\r\n\t\t<input matInput formControlName=\"numChamado\" />\r\n\t</mat-form-field>\r\n</form>\r\n\r\n<div mat-dialog-actions class=\"wrap-buttons\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"cancel()\">Cancelar</button>\r\n\t<button class=\"btn btn-primary\" (click)=\"postergar()\" cdkFocusInitial>Atualizar</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/dashboard/dashboard.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">build</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Dashboard</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1 class=\"mb-3 mt-3\">Dashboard</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-3\">\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<mat-card class=\"itemDash\">\r\n\t\t\t\t\t<div class=\"iconDash\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">hourglass_empty</i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"datas\">\r\n\t\t\t\t\t\t<span class=\"title\"><strong>Aguard. Análise</strong></span>\r\n\t\t\t\t\t\t<span class=\"valor\" *ngIf=\"dashboard?.volumePendente != null\">{{ dashboard?.volumePendente }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<mat-card class=\"itemDash\">\r\n\t\t\t\t\t<div class=\"iconDash\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">done_outline</i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"datas\">\r\n\t\t\t\t\t\t<span class=\"title\"><strong>Atendidas Hoje</strong></span>\r\n\t\t\t\t\t\t<span class=\"valor\" *ngIf=\"dashboard?.volumeEncerrado != null\" >{{ dashboard?.volumeEncerrado }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<h6 class=\"mt-3\" *ngIf=\"dashboard?.dataAtualizacao\">Data da Ultima Atualização: {{ dashboard.dataAtualizacao | date:'dd/MM/yyyy HH:mm' }}</h6>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<h3 class=\"mb-4\">Pesquisar</h3>\r\n\t\t\t<form [formGroup]=\"formSearch\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Código Externo IM</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"codigoExterno\" maxlength=\"20\" matInput placeholder=\"Código Externo IM\"/>\r\n\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Status da Análise</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"statusAnalise\" >\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"0\">Improcedente</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"1\">Procedente</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">Todos</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Status do Service Center</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"statusServiceCenter\" >\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"1\">P/ Recebimento</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"2\">Pendente</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"3\">Encerrado</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"4\">Reiterado</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"99\">Outros</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"initialDate\" formControlName=\"initialDate\" [min]=\"minDate\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\" [max]=\"formSearch.value.finalDate || dataAtual\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"initialDate\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #initialDate></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"finalDate\" formControlName=\"finalDate\" [min]=\"formSearch.value.initialDate\"  \r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Final\" [max]=\"dataAtual\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"finalDate\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #finalDate ></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12 d-flex justify-content-center\">\r\n\t\t\t\t\t\t<button (click)=\"getList()\" type=\"submit\" class=\"btn btn-success mr-2\">Pesquisar</button>\r\n\t\t\t\t\t\t<button (click)=\"download()\" type=\"submit\" class=\"btn btn-success ml-2\">Download do Arquivo</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 mb-4\"  *ngIf=\"pouchs.length > 0\" >\r\n\t\t\t\t<h3 class=\"mb-4\">Relatório 3NG </h3>\r\n\t\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"codigoExterno\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">IM</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.codigoExterno }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"subCategoria\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Sub Categoria</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.subCategoria }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"statusServiceCenter\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Status Service Center</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.statusServiceCenter }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"statusAnalise\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Status Análise</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.statusAnalise }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"operador\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Operador</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.operador }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"dataCadastro\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Abertura</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t\t{{ element.dataCadastro  | date:'dd/MM/yyyy HH:mm'}}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"dataAtendimento\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Atendimento</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t\t{{ element.dataAtendimento | date:'dd/MM/yyyy HH:mm'}}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/edit-analyse/edit-analyse.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/edit-analyse/edit-analyse.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Service Center</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Editar Análise</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Detalhes da Análise</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<app-template \r\n\t\t*ngIf=\"template\" \r\n\t\t[template]=\"template\" \r\n\t\t[type]=\"type\"\r\n\t\t[status]=\"status\" \r\n\t\t[galleries]=\"galleries\" \r\n\t\t(submitTemplate)=\"submit($event)\" \r\n\t\t[atividade] = \"atividade\"\r\n\t></app-template>\r\n\r\n\t<div *ngIf=\"moduloAnaliseServiceCenter\">\r\n\t\t<app-service-center-baixa\r\n\t\t\t[template]=\"serviceCenterTemplate\" \r\n\t\t\t[content]=\"content\"\r\n\t\t\t[esteiraId]=\"esteiraId\"\r\n\t\t\t[enableReview]=\"enableReview\" \r\n\t\t\t[atividade]= \"atividade\"\r\n\t\t\t[serviceCenterAnalise]=\"serviceCenterAnalise\"\r\n\t\t\t(submitTemplate)=\"submit($event)\"\r\n\t\t>\r\n\t\t</app-service-center-baixa>\r\n\t</div>\r\n\t\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title class=\"mat-dialog-title\">Postergação</h1>\r\n<div mat-dialog-content>\r\n\t\t<p ></p>\r\n\t</div>\r\n\t<form [formGroup]=\"form\" >\r\n\t\t<mat-form-field>\r\n\t\t\t\t<input \r\n\t\t\t\t\trequired \r\n\t\t\t\t\tmatInput \r\n\t\t\t\t\t[matDatepicker]=\"dataPostergar\" \r\n\t\t\t\t\tformControlName=\"dataPostergar\" \r\n\t\t\t\t\tplaceholder=\"Data da Postergação\"\r\n\t\t\t\t\t[min]=\"amanha\"\r\n\t\t\t\t\t[max]=\"maxDate\">\r\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataPostergar\"></mat-datepicker-toggle>\r\n\t\t\t\t<mat-datepicker #dataPostergar></mat-datepicker>\r\n\t\t\t</mat-form-field>\r\n\t\t<mat-form-field>\r\n\t\t<mat-label>Motivo da Postergação</mat-label>\r\n\t\t\t<textarea \r\n\t\t\t\tformControlName=\"justificativa\"\r\n\t\t\t\tmatInput\r\n\t\t\t\tcdkTextareaAutosize\r\n\t\t\t\tcdkAutosizeMinRows=\"5\"\r\n\t\t\t\tcdkAutosizeMaxRows=\"5\">\r\n\t\t\t</textarea>\r\n\t\t</mat-form-field>\r\n\t</form>\r\n<div mat-dialog-actions class=\"wrap-buttons\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"cancel()\">Cancelar</button>\r\n\t<button class=\"btn btn-primary\" (click)=\"postergar()\" cdkFocusInitial>Postergar</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/postpone/postpone.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/postpone/postpone.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">build</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Postergação</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Postergação</h1>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n            <form [formGroup]=\"form\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Operação</mat-label>\r\n                                <mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n                                    <mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n                                        {{ operation.nome }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Atividade</mat-label>\r\n                                <mat-select formControlName=\"atividadeId\">\r\n                                <mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n                                    {{ activity.nome }}\r\n                                </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>CPF/CNPJ</mat-label>\r\n                                <input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Agência</mat-label>\r\n                                <input formControlName=\"agencia\" matInput placeholder=\"Agência\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Conta</mat-label>\r\n                                <input formControlName=\"conta\" matInput placeholder=\"Conta\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input  \r\n                                    matInput \r\n                                    [matDatepicker]=\"dataInicial\" \r\n                                    formControlName=\"dataInicial\" \r\n                                    placeholder=\"Data Inicial\"\r\n                                    [max]=\"form.value.dataFinal || dataAtual\"\r\n                                >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataInicial></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input \r\n                                    matInput \r\n                                    [min]=\"form.value.dataInicial\"\r\n                                    [max]=\"date90More\"\r\n                                    [matDatepicker]=\"dataFinal\" \r\n                                    formControlName=\"dataFinal\" \r\n                                    placeholder=\"Data Final\" \r\n                                >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataFinal ></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getAtividadesPostergacao()\" >\r\n                            Pesquisar\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\t</section>\r\n\t\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n                <div class=\"mat-elevation-z8 mb-3\">\r\n                    <table mat-table [dataSource]=\"dataSource\">\r\n                        <ng-container matColumnDef=\"dataCarga\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Cadastro</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataCarga  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"documento\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">CPF/CNPJ</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ formatDocument(element.documento) }}</td>\r\n                        </ng-container>\r\n                        \r\n                        <ng-container matColumnDef=\"agencia\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Agência</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n                        </ng-container>\r\n                        \r\n                        <ng-container matColumnDef=\"conta\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Conta</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.conta }}</td>\r\n                        </ng-container>\r\n                        \r\n                        <ng-container matColumnDef=\"status\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status }}</td>\r\n                        </ng-container>\r\n                        \r\n                        <ng-container matColumnDef=\"historico\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Histórico</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.historico }}</td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"dataAlteracao\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Alteração</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataAlteracao  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                        </ng-container>\r\n\r\n                        <ng-container matColumnDef=\"operador\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\">Operador</th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.operador.nomeCompleto }}</td>\r\n                        </ng-container>\t\t\r\n\r\n                        <ng-container matColumnDef=\"actions\">\r\n                            <th mat-header-cell *matHeaderCellDef class=\"text-left\"></th>\r\n                            <td mat-cell *matCellDef=\"let element\" class=\"icones text-left\">\r\n                                <a (click)=\"postergar(element)\">\r\n                                <i class=\"material-icons\">query_builder</i> \r\n                                <span class=\"d-none d-sm-table-cell\">Postergar</span>\r\n                                </a>\r\n                            </td>\r\n                        </ng-container>\r\n                \r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                        </table>\r\n                \r\n                        <mat-paginator \r\n                            [pageSizeOptions]=\"pageSizeOptions\" \r\n                            [length]=\"length\" \r\n                            [pageIndex]= \"pageIndex\"\r\n                            [pageSize]= \"pageSize\"\r\n                            (page) = \"setPageSizeOptions($event)\">\r\n                        </mat-paginator>\r\n                </div>\r\n            </div>\r\n\t\t</div>\r\n    </section>\r\n    \r\n    <section *ngIf=\"length === 0\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"alert alert-warning\" role=\"alert\">\r\n                    Não foram localizados registros no sistema para essa pesquisa\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/search-analyse/search-analyse.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/search-analyse/search-analyse.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\"><i class=\"material-icons\">build</i></li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Editar Análise</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Pesquisa de Análises</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n\t\t\t\t\t\t\t\t\t\t{{ operation.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Atividade</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"atividadeId\" (selectionChange)=\"setTipo()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n\t\t\t\t\t\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>CPF/CNPJ</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\" maxlength=\"14\" />\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Agência</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"agencia\" matInput placeholder=\"Agência\" />\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Conta</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"conta\" matInput placeholder=\"Conta\" />\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataInicial\" [max]=\"form.value.dataFinal || today\" formControlName=\"dataInicial\" placeholder=\"Data Inicial\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Preencha com uma data válida</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataFinal\" [min]=\"form.value.dataInicial\" [max]=\"today\" formControlName=\"dataFinal\" placeholder=\"Data Final\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataFinal disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Preencha com uma data válida</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit()\">\r\n\t\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"esteiraId\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>ID</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.esteiraId }}</td>\r\n\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\r\n\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"dataAnalise\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Data da Análise</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.dataAnalise  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"dataAlteracao\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Data da Alteração</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.dataAlteracao  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"documento\" *ngIf=\"moduloAnaliseServiceCenter == false\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">CPF/CNPJ</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ formatDocument(element.documento) }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"agencia\" *ngIf=\"moduloAnaliseServiceCenter == false\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Agência</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.agencia }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"conta\" *ngIf=\"moduloAnaliseServiceCenter == false\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Conta</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.contaCorrente }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"im\" *ngIf=\"moduloAnaliseServiceCenter == true\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">IM</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.im }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.status?.nome }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"operador\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Operador</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.operador?.nomeCompleto }}</td>\r\n\t\t\t\t\t\t</ng-container>\t\t\r\n\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\"></th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/service-center/editar-analise', element.esteiraId, form.value.atividadeId]\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\r\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<mat-paginator \r\n\t\t\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 50, 100]\" \r\n\t\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t\t[pageIndex]=\"pageIndex\" \r\n\t\t\t\t\t\t[pageSize]=\"pageSize\"\r\n\t\t\t\t\t\t(page)=\"changePaginator($event)\"\r\n\t\t\t\t\t\tshowFirstLastButtons>\r\n\t\t\t\t\t</mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\t\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length === 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\tNão foram localizados registros no sistema para essa pesquisa\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/upload-3ng/upload-3ng.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/upload-3ng/upload-3ng.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">build</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Uplaod 3NG</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Uplaod 3NG</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<h3 class=\"mb-4\">Upload de Arquivo (.txt)</h3>\r\n\t\t\t\t<input type=\"file\" id=\"file\" (change)=\"onFileChanged($event.target.files)\" [hidden]=\"isUploadFiles\"accept=\".txt\" >\r\n\t\t\t\t<mat-progress-bar mode=\"indeterminate\" [hidden]=\"!isUploadFiles\"></mat-progress-bar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/upload-analise/upload-analise.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/upload-analise/upload-analise.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">build</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Upload Análise</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Upload Análise</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<h3 class=\"mb-4\">Upload de Arquivo (.xlsx)</h3>\r\n\t\t\t\t<input type=\"file\" id=\"file\" (change)=\"onFileChanged($event.target.files)\" [hidden]=\"isUploadFiles\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\" >\r\n\t\t\t\t<mat-progress-bar mode=\"indeterminate\" [hidden]=\"!isUploadFiles\"></mat-progress-bar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./src/app/models/post-analyze-agency-from-to.interface.ts":
/*!*****************************************************************!*\
  !*** ./src/app/models/post-analyze-agency-from-to.interface.ts ***!
  \*****************************************************************/
/*! exports provided: PostAnalyzeAgencyFromTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAnalyzeAgencyFromTo", function() { return PostAnalyzeAgencyFromTo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PostAnalyzeAgencyFromTo {
}


/***/ }),

/***/ "./src/app/models/put-postpone.class.ts":
/*!**********************************************!*\
  !*** ./src/app/models/put-postpone.class.ts ***!
  \**********************************************/
/*! exports provided: PutPostpone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutPostpone", function() { return PutPostpone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PutPostpone {
}


/***/ }),

/***/ "./src/app/modules/service-center/agency-from-to/agency-from-to.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/service-center/agency-from-to/agency-from-to.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvYWdlbmN5LWZyb20tdG8vYWdlbmN5LWZyb20tdG8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/service-center/agency-from-to/agency-from-to.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/service-center/agency-from-to/agency-from-to.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AgencyFromToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyFromToComponent", function() { return AgencyFromToComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _dialog_from_to_dialog_from_to_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-from-to/dialog-from-to.component */ "./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_models_post_analyze_agency_from_to_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/post-analyze-agency-from-to.interface */ "./src/app/models/post-analyze-agency-from-to.interface.ts");










let AgencyFromToComponent = class AgencyFromToComponent {
    constructor(formBuilder, operationService, serviceCenterService, matSnackBar, dialog) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['dataCarga', 'documento', 'agencia', 'conta', 'historico', 'uniorg', 'actions'];
        this.dataAtual = new Date();
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
    }
    ngOnInit() {
        /** Lista de Operações COM Template Associado */
        this.loading = true;
        this.operationService.getOperations(true).subscribe(response => {
            this.operations = [...response.data];
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
        this.form = this.formBuilder.group({
            operacaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            atividadeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataInicial: [''],
            dataFinal: [''],
            documento: [''],
            agencia: [''],
            conta: ['']
        });
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
        this.pageIndex = 0;
    }
    getAtividadesDePara() {
        if (this.form.valid) {
            const form = this.form.value;
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US");
            const dataInicial = (form.dataInicial != '' ? datePipe.transform(form.dataInicial, 'yyyy-MM-dd') : '');
            const dataFinal = (form.dataFinal != '' ? datePipe.transform(form.dataFinal, 'yyyy-MM-dd') : '');
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            this.loading = true;
            this.serviceCenterService.getItensDePara(form.atividadeId, form.documento, form.agencia, form.conta, dataInicial, dataFinal, pageSize, pageIndex).subscribe(response => {
                this.loading = false;
                this.length = response.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data);
            }, () => {
                this.loading = false;
            });
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getAtividadesDePara();
    }
    formatDocument(document) {
        if (document.length === 14) {
            return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
        }
        else if (document.length === 11) {
            return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        }
    }
    dePara(element) {
        const dialogRef = this.dialog.open(_dialog_from_to_dialog_from_to_component__WEBPACK_IMPORTED_MODULE_7__["DialogFromToComponent"], {
            width: '600px',
            data: element
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                const body = new src_app_models_post_analyze_agency_from_to_interface__WEBPACK_IMPORTED_MODULE_9__["PostAnalyzeAgencyFromTo"]();
                body.cargaId = element.cargaId;
                body.numeroIM = result.numChamado;
                body.uniorgNovo = result.uniorg;
                this.serviceCenterService.postDePara(body).subscribe(() => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showSuccess(this.matSnackBar, 'Uniorg Atualizado com Sucesso!');
                    this.getAtividadesDePara();
                }, () => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, 'Erro ao cadastrar o Uniorg');
                });
            }
        });
    }
};
AgencyFromToComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"] },
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_5__["ServiceCenterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
AgencyFromToComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agency-from-to',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agency-from-to.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/agency-from-to/agency-from-to.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agency-from-to.component.scss */ "./src/app/modules/service-center/agency-from-to/agency-from-to.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
        _service_service_center_service__WEBPACK_IMPORTED_MODULE_5__["ServiceCenterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], AgencyFromToComponent);



/***/ }),

/***/ "./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  margin-top: 20px;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\n.mat-dialog-actions {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.uniorgAtual label {\n  display: block;\n  font-weight: bold;\n  color: #455A64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLWNlbnRlci9hZ2VuY3ktZnJvbS10by9kaWFsb2ctZnJvbS10by9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2VydmljZS1jZW50ZXJcXGFnZW5jeS1mcm9tLXRvXFxkaWFsb2ctZnJvbS10b1xcZGlhbG9nLWZyb20tdG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvYWdlbmN5LWZyb20tdG8vZGlhbG9nLWZyb20tdG8vZGlhbG9nLWZyb20tdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FESUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlcnZpY2UtY2VudGVyL2FnZW5jeS1mcm9tLXRvL2RpYWxvZy1mcm9tLXRvL2RpYWxvZy1mcm9tLXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXAtYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnVuaW9yZ0F0dWFsIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzQ1NUE2NDtcclxuICAgIH1cclxufSIsImgxIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcC1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi53cmFwLWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udW5pb3JnQXR1YWwgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDU1QTY0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DialogFromToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFromToComponent", function() { return DialogFromToComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DialogFromToComponent = class DialogFromToComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            uniorg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            numChamado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    cancel() {
        this.dialogRef.close();
    }
    postergar() {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
    }
};
DialogFromToComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
DialogFromToComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'from-to-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-from-to.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-from-to.component.scss */ "./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], DialogFromToComponent);



/***/ }),

/***/ "./src/app/modules/service-center/dashboard/dashboard.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/service-center/dashboard/dashboard.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/service-center/dashboard/dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/service-center/dashboard/dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let DashboardComponent = class DashboardComponent {
    constructor(formBuilder, serviceCenterService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.file = new Set();
        this.loading = false;
        this.isUploadFiles = false;
        this.displayedColumns = ['codigoExterno', 'subCategoria', 'statusServiceCenter', 'statusAnalise', 'operador', 'dataCadastro', 'dataAtendimento'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]([]);
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.period = '1';
        this.loader = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(4, "months").toDate();
        this.dataAtual = new Date();
        this.pouchs = [];
    }
    ngOnInit() {
        this.formSearch = this.formBuilder.group({
            codigoExterno: [''],
            statusAnalise: [''],
            statusServiceCenter: [''],
            initialDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            finalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        //this.getDashboard();
    }
    getDashboard() {
        if (this.formSearch.valid) {
            this.loading = true;
            this.serviceCenterService.dashboard().subscribe(response => {
                this.loading = false;
                this.dashboard = response.data;
            }, () => {
                this.loading = false;
            });
        }
    }
    getList() {
        if (this.formSearch.valid) {
            this.loading = true;
            const form = this.formSearch.value;
            const initialDate = form.initialDate !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.initialDate)).format('YYYY-MM-DD') : "";
            const finalDate = form.finalDate !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.finalDate)).format('YYYY-MM-DD') : "";
            this.serviceCenterService.report(form.codigoExterno, form.statusAnalise, form.statusServiceCenter, initialDate, finalDate).subscribe(response => {
                this.loading = false;
                this.pouchs = response.data;
                this.length = response.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.pouchs);
            }, () => {
                this.loading = false;
                this.resetForm();
            });
        }
    }
    resetForm() {
        this.formSearch.reset({
            codigoExterno: '',
            statusAnalise: '',
            statusServiceCenter: '',
            initialDate: '',
            finalDate: '',
        });
    }
    convertDate(_date) {
        if (_date && _date !== '') {
            const dateConvert = new Date(_date);
            return new Date(dateConvert.getTime() - (dateConvert.getTimezoneOffset() * 60000)).toJSON();
        }
        return '';
    }
    download() {
        const form = this.formSearch.value;
        if ((form.initialDate != null && form.finalDate == null) || (form.finalDate != null && form.initialDate == null)) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, "Preencha a 'Data Inicial' e 'Data Final' corretamente!");
        }
        else {
            this.loading = true;
            this.serviceCenterService.reportDownload(form.codigoExterno, form.statusAnalise, form.statusServiceCenter, this.convertDate(form.initialDate), this.convertDate(form.finalDate)).subscribe(response => {
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
                this.loading = false;
                this.resetForm();
            }, () => {
                this.loading = false;
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
                this.resetForm();
            });
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getList();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCenterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-center-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/service-center/dashboard/dashboard.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _service_service_center_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCenterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/service-center/edit-analyse/edit-analyse.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/service-center/edit-analyse/edit-analyse.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 2rem;\n}\n\n.actions {\n  margin-top: 15px;\n}\n\n.actions label {\n  color: #455A64;\n  font-weight: bold;\n  display: block;\n}\n\n.actions .checkbox {\n  margin-right: 30px;\n}\n\n.actions .checkbox:last-child {\n  margin-right: 0;\n}\n\n.alert-danger {\n  margin-top: 20px;\n}\n\n.alert-danger label {\n  font-weight: bold;\n  display: block;\n}\n\n.alert-danger ul {\n  padding-left: 15px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLWNlbnRlci9lZGl0LWFuYWx5c2UvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHNlcnZpY2UtY2VudGVyXFxlZGl0LWFuYWx5c2VcXGVkaXQtYW5hbHlzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLWNlbnRlci9lZGl0LWFuYWx5c2UvZWRpdC1hbmFseXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQVE7RUFDSSxlQUFBO0FDRVo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlcnZpY2UtY2VudGVyL2VkaXQtYW5hbHlzZS9lZGl0LWFuYWx5c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjNDU1QTY0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn0iLCJoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmFjdGlvbnMgbGFiZWwge1xuICBjb2xvcjogIzQ1NUE2NDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFjdGlvbnMgLmNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuLmFjdGlvbnMgLmNoZWNrYm94Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmFsZXJ0LWRhbmdlciBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hbGVydC1kYW5nZXIgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/service-center/edit-analyse/edit-analyse.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/service-center/edit-analyse/edit-analyse.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditAnalyseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAnalyseComponent", function() { return EditAnalyseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/template-types.enum */ "./src/app/models/template-types.enum.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");










let EditAnalyseComponent = class EditAnalyseComponent {
    constructor(activatedRoute, serviceCenterService, dialog, router, matSnackBar) {
        this.activatedRoute = activatedRoute;
        this.serviceCenterService = serviceCenterService;
        this.dialog = dialog;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.loading = false;
        this.galleries = [];
        this.type = src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_8__["TemplateTypes"].EDIT;
        this.serviceCenterAnalise = [];
    }
    ngOnInit() {
        this.esteiraId = this.activatedRoute.snapshot.paramMap.get('esteiraId');
        //this.atividade = {nome: "", id: Number(this.activatedRoute.snapshot.paramMap.get('atividadeId'))};
        this.getAtividade(this.activatedRoute.snapshot.paramMap.get('atividadeId'));
    }
    ngOnDestroy() {
        localStorage.removeItem('displayImages');
    }
    getAtividade(atividade) {
        this.serviceCenterService.atividade(atividade).subscribe(response => {
            this.atividade = response.data;
            this.getNewItem(this.esteiraId);
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_9__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    getNewItem(esteiraId) {
        this.galleries = [];
        this.template = null;
        this.moduloAnaliseServiceCenter = false;
        localStorage.removeItem('displayImages');
        this.loading = true;
        this.serviceCenterService.getAnalyze(esteiraId).subscribe(response => {
            if (this.atividade.moduloAnaliseServiceCenter == true) {
                this.moduloAnaliseServiceCenter = true;
                const _root = response.analyze.root;
                this.content = {
                    incidentID: _root.im,
                    produto: _root.produto,
                    rede: _root.nomeAgencia,
                    category: _root.categoria,
                    subCategory: _root.subCategoria
                };
                this.serviceCenterTemplate = response.template;
                this.enableReview = response.enableReview;
                const listaContas = response.analyze.root.listaContas;
                listaContas.forEach(element => {
                    //esteirias
                    let esteiras = [];
                    if (element.esteirasModificadas != undefined) {
                        element.esteirasModificadas.forEach(_esteira => {
                            const esteira = {
                                agencia: _esteira.agencia,
                                atividade: { id: _esteira.atividadeId, nome: _esteira.produto },
                                cargaId: _esteira.cargaId,
                                contaCorrente: _esteira.contaCorrente,
                                documento: _esteira.documento,
                                id: _esteira.esteiraId,
                                status: { id: 0, nome: _esteira.status },
                            };
                            esteiras.push(esteira);
                        });
                    }
                    //cargas
                    let cargas = [];
                    if (element.cargasModificadas != undefined) {
                        element.cargasModificadas.forEach(_carga => {
                            const carga = {
                                agencia: _carga.agencia,
                                atividade: { id: _carga.atividadeId, nome: _carga.produto },
                                cargaId: _carga.cargaId,
                                contaCorrente: _carga.contaCorrente,
                                documento: _carga.documento,
                                id: _carga.id,
                                status: { id: 0, nome: _carga.status },
                            };
                            cargas.push(carga);
                        });
                    }
                    const conta = {
                        agencia: element.agencia,
                        contaCorrente: element.contaCorrente,
                        documento: element.documento,
                        decisao: element.descisao,
                        esteiras: esteiras,
                        cargas: cargas,
                        visualizacao: true,
                    };
                    //let esteiras: Esteira[] = listaContas.esteirasModificadas;
                    ///let cargas: Carga[] = listaContas.cargasModificadas;
                    //cargas = [];
                    this.serviceCenterAnalise.push(conta);
                });
            }
            else {
                const analyze = Object.assign({}, response.analyze.root);
                const template = JSON.parse(JSON.stringify(response.template));
                template.steps.forEach((step) => {
                    step.fieldGroups.forEach((fieldGroup) => {
                        fieldGroup.fields.forEach((field) => {
                            Object.keys(analyze).forEach((key, index) => {
                                if (key === field.name) {
                                    field.value = Object.values(analyze)[index];
                                }
                            });
                        });
                    });
                });
                this.template = template;
                this.status = response.status;
                this.galleries = response.galleries;
            }
            this.loading = false;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_9__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loading = false;
        });
    }
    submit(body) {
        if (this.atividade.moduloAnaliseServiceCenter == true) {
            body.templateVersaoId = this.serviceCenterTemplate.templateVersaoId;
        }
        else {
            body.templateVersaoId = this.template.templateVersaoId;
        }
        this.serviceCenterService.putAnalyseEdited(this.esteiraId, body).subscribe(() => {
            const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_4__["Dialog"]();
            dialog.title = "Sucesso!";
            dialog.message = "Análise concluída com sucesso.";
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
            this.showMessage(dialog);
            this.dialogRef.afterClosed().subscribe(() => {
                this.router.navigate(['/service-center/editar-analise']);
            });
        }, (error) => {
            let msgError = '';
            if (error && error.error.errors) {
                msgError = error.error.errors.join([',']);
            }
            if (!msgError || msgError == '') {
                if (error.error) {
                    msgError = error.error.message;
                }
            }
            const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_4__["Dialog"]();
            dialog.title = "Erro ao Salvar Análise";
            dialog.message = "Não foi possível salvar a análise. " + msgError;
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
            this.showMessage(dialog);
        });
    }
    showMessage(dialog) {
        this.dialogRef = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '600px',
            data: {
                title: dialog.title,
                message: dialog.message,
                type: dialog.type,
            }
        });
    }
};
EditAnalyseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCenterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
EditAnalyseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-analyse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-analyse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/edit-analyse/edit-analyse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-analyse.component.scss */ "./src/app/modules/service-center/edit-analyse/edit-analyse.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_service_center_service__WEBPACK_IMPORTED_MODULE_3__["ServiceCenterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], EditAnalyseComponent);



/***/ }),

/***/ "./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\n.mat-dialog-actions {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contingencyValidationErrors {\n  font-size: 0.8em;\n  color: #FF0000;\n  position: relative;\n  top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLWNlbnRlci9wb3N0cG9uZS9kaWFsb2dQb3N0cG9uZS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcc2VydmljZS1jZW50ZXJcXHBvc3Rwb25lXFxkaWFsb2dQb3N0cG9uZVxcZGlhbG9nUG9zdHBvbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvcG9zdHBvbmUvZGlhbG9nUG9zdHBvbmUvZGlhbG9nUG9zdHBvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0k7RUFDSSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLWNlbnRlci9wb3N0cG9uZS9kaWFsb2dQb3N0cG9uZS9kaWFsb2dQb3N0cG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwLWJ1dHRvbnMge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250aW5nZW5jeVZhbGlkYXRpb25FcnJvcnMge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxufSIsImgxIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcC1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRpbmdlbmN5VmFsaWRhdGlvbkVycm9ycyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjRkYwMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogPostponeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPostponeComponent", function() { return DialogPostponeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let DialogPostponeComponent = class DialogPostponeComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.dataAtual = new Date();
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_5__().add(90, "days").toDate();
    }
    ngOnInit() {
        this.amanha = moment__WEBPACK_IMPORTED_MODULE_5__(this.dataAtual, "DD-MM-YYYY").add(1, 'days').toDate();
        this.form = this.formBuilder.group({
            dataPostergar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            justificativa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    cancel() {
        this.dialogRef.close();
    }
    postergar() {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
    }
};
DialogPostponeComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], DialogPostponeComponent.prototype, "inputs", void 0);
DialogPostponeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'postpane-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialogPostpone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialogPostpone.component.scss */ "./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], DialogPostponeComponent);



/***/ }),

/***/ "./src/app/modules/service-center/postpone/postpone.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/service-center/postpone/postpone.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvcG9zdHBvbmUvcG9zdHBvbmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/service-center/postpone/postpone.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/service-center/postpone/postpone.component.ts ***!
  \***********************************************************************/
/*! exports provided: PostponeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostponeComponent", function() { return PostponeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _dialogPostpone_dialogPostpone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogPostpone/dialogPostpone.component */ "./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.ts");
/* harmony import */ var src_app_models_put_postpone_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/put-postpone.class */ "./src/app/models/put-postpone.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let PostponeComponent = class PostponeComponent {
    constructor(formBuilder, operationService, serviceCenterService, matSnackBar, dialog) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['dataCarga', 'documento', 'agencia', 'conta', 'status', 'historico', 'dataAlteracao', 'operador', 'actions'];
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.dataAtual = new Date();
        this.date90More = new Date();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            operacaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            atividadeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataInicial: [''],
            dataFinal: [''],
            documento: [''],
            agencia: [''],
            conta: ['']
        });
        this.operacoes();
        this.date90More.setDate(this.date90More.getDate() + 90);
    }
    operacoes() {
        /** Lista de Operações COM Template Associado */
        this.loading = true;
        this.operationService.getOperations(true).subscribe(response => {
            this.operations = [...response.data];
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
        this.pageIndex = 0;
    }
    getAtividadesPostergacao() {
        if (this.form.valid) {
            this.loading = true;
            const form = this.form.value;
            const dataInicial = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_9__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
            const dataFinal = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_9__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            this.serviceCenterService.getItensPostergacao(form.atividadeId, form.documento, form.agencia, form.conta, dataInicial, dataFinal, pageSize, pageIndex).subscribe(response => {
                this.length = response.length;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data);
                this.dataSource.paginator = this.paginator;
                this.loading = false;
            }, () => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
                this.loading = false;
            });
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getAtividadesPostergacao();
    }
    formatDocument(document) {
        //return document;
        if (document == undefined) {
            return document;
        }
        if (document.length === 14) {
            return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
        }
        else if (document.length === 11) {
            return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        }
    }
    postergar(element) {
        const dialogRef = this.dialog.open(_dialogPostpone_dialogPostpone_component__WEBPACK_IMPORTED_MODULE_7__["DialogPostponeComponent"], {
            width: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                const dataPostergacao = result.dataPostergar !== "" ? moment__WEBPACK_IMPORTED_MODULE_9__(new Date(result.dataPostergar)).format('YYYY-MM-DD') : "";
                const body = new src_app_models_put_postpone_class__WEBPACK_IMPORTED_MODULE_8__["PutPostpone"]();
                body.cargaId = element.cargaId;
                body.esteiraId = element.esteiraId;
                body.dataPostergacao = dataPostergacao;
                body.observacaoPostergacao = result.justificativa;
                this.serviceCenterService.putPostergar(body).subscribe(() => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showSuccess(this.matSnackBar, 'Postergação Efetuada com Sucesso');
                    this.getAtividadesPostergacao();
                }, () => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, 'Erro ao cadastrar a Postergação');
                });
            }
        });
    }
};
PostponeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"] },
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_5__["ServiceCenterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], PostponeComponent.prototype, "paginator", void 0);
PostponeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postpone',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postpone.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/postpone/postpone.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postpone.component.scss */ "./src/app/modules/service-center/postpone/postpone.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
        _service_service_center_service__WEBPACK_IMPORTED_MODULE_5__["ServiceCenterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], PostponeComponent);



/***/ }),

/***/ "./src/app/modules/service-center/search-analyse/search-analyse.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/service-center/search-analyse/search-analyse.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvc2VhcmNoLWFuYWx5c2Uvc2VhcmNoLWFuYWx5c2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/service-center/search-analyse/search-analyse.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/service-center/search-analyse/search-analyse.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchAnalyseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAnalyseComponent", function() { return SearchAnalyseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");








let SearchAnalyseComponent = class SearchAnalyseComponent {
    constructor(formBuilder, operationService, matSnackBar, serviceCenterService) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.matSnackBar = matSnackBar;
        this.serviceCenterService = serviceCenterService;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['esteiraId', 'dataAnalise', 'dataAlteracao', 'documento', 'agencia', 'conta', 'status', 'operador', 'actions'];
        this.today = new Date();
        this.moduloAnaliseServiceCenter = false;
        /** Paginator */
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
    }
    ngOnInit() {
        /** Lista de Operações COM Template Associado */
        this.loading = true;
        this.operationService.getOperations(true).subscribe(response => {
            this.operations = [...response.data];
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
        this.form = this.formBuilder.group({
            operacaoId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            atividadeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            documento: [''],
            agencia: [''],
            conta: [''],
            dataInicial: [''],
            dataFinal: [''],
        });
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
        this.pageIndex = 0;
    }
    setTipo() {
        const atividade = this.activities.find(element => element.id == this.form.value.atividadeId);
        this.moduloAnaliseServiceCenter = atividade.moduloAnaliseServiceCenter;
    }
    submit() {
        if (this.moduloAnaliseServiceCenter == true) {
            this.displayedColumns = ['esteiraId', 'dataAnalise', 'dataAlteracao', 'im', 'status', 'operador', 'actions'];
        }
        else {
            this.displayedColumns = ['esteiraId', 'dataAnalise', 'dataAlteracao', 'documento', 'agencia', 'conta', 'status', 'operador', 'actions'];
        }
        if (this.form.valid) {
            this.search();
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    search() {
        this.loading = true;
        this.length = null;
        const form = this.form.value;
        const initialDate = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
        const finalDate = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
        this.serviceCenterService.searchAnalysis(form.atividadeId, form.agencia, form.conta, form.documento, initialDate, finalDate, this.pageSize, this.pageIndex + 1).subscribe(response => {
            this.length = response.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data);
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
    }
    changePaginator(event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.search();
    }
    formatDocument(document) {
        if (document && document.length === 14) {
            return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
        }
        if (document && document.length === 11) {
            return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        }
        return document;
    }
};
SearchAnalyseComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_7__["ServiceCenterService"] }
];
SearchAnalyseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-analyse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-analyse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/search-analyse/search-analyse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-analyse.component.scss */ "./src/app/modules/service-center/search-analyse/search-analyse.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _service_service_center_service__WEBPACK_IMPORTED_MODULE_7__["ServiceCenterService"]])
], SearchAnalyseComponent);



/***/ }),

/***/ "./src/app/modules/service-center/service-center-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/service-center/service-center-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceCenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCenterRoutingModule", function() { return ServiceCenterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_analyse_edit_analyse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-analyse/edit-analyse.component */ "./src/app/modules/service-center/edit-analyse/edit-analyse.component.ts");
/* harmony import */ var _postpone_postpone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postpone/postpone.component */ "./src/app/modules/service-center/postpone/postpone.component.ts");
/* harmony import */ var _agency_from_to_agency_from_to_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agency-from-to/agency-from-to.component */ "./src/app/modules/service-center/agency-from-to/agency-from-to.component.ts");
/* harmony import */ var _search_analyse_search_analyse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-analyse/search-analyse.component */ "./src/app/modules/service-center/search-analyse/search-analyse.component.ts");
/* harmony import */ var _upload_3ng_upload_3ng_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload-3ng/upload-3ng.component */ "./src/app/modules/service-center/upload-3ng/upload-3ng.component.ts");
/* harmony import */ var _service_center_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service-center/dashboard/dashboard.component */ "./src/app/modules/service-center/dashboard/dashboard.component.ts");
/* harmony import */ var _upload_analise_upload_analise_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-analise/upload-analise.component */ "./src/app/modules/service-center/upload-analise/upload-analise.component.ts");










const routes = [
    { path: 'editar-analise', component: _search_analyse_search_analyse_component__WEBPACK_IMPORTED_MODULE_6__["SearchAnalyseComponent"] },
    { path: 'editar-analise/:esteiraId/:atividadeId', component: _edit_analyse_edit_analyse_component__WEBPACK_IMPORTED_MODULE_3__["EditAnalyseComponent"] },
    { path: 'postergar', component: _postpone_postpone_component__WEBPACK_IMPORTED_MODULE_4__["PostponeComponent"] },
    { path: 'agencia-de-para', component: _agency_from_to_agency_from_to_component__WEBPACK_IMPORTED_MODULE_5__["AgencyFromToComponent"] },
    { path: 'upload-3ng', component: _upload_3ng_upload_3ng_component__WEBPACK_IMPORTED_MODULE_7__["Upload3ngComponent"] },
    { path: 'dashboard', component: _service_center_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: 'upload-analise', component: _upload_analise_upload_analise_component__WEBPACK_IMPORTED_MODULE_9__["UploadAnaliseComponent"] },
];
let ServiceCenterRoutingModule = class ServiceCenterRoutingModule {
};
ServiceCenterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ServiceCenterRoutingModule);



/***/ }),

/***/ "./src/app/modules/service-center/service-center.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/service-center/service-center.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCenterModule", function() { return ServiceCenterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_center_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-center-routing.module */ "./src/app/modules/service-center/service-center-routing.module.ts");
/* harmony import */ var _edit_analyse_edit_analyse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-analyse/edit-analyse.component */ "./src/app/modules/service-center/edit-analyse/edit-analyse.component.ts");
/* harmony import */ var _agency_from_to_agency_from_to_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agency-from-to/agency-from-to.component */ "./src/app/modules/service-center/agency-from-to/agency-from-to.component.ts");
/* harmony import */ var _postpone_postpone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postpone/postpone.component */ "./src/app/modules/service-center/postpone/postpone.component.ts");
/* harmony import */ var _search_analyse_search_analyse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-analyse/search-analyse.component */ "./src/app/modules/service-center/search-analyse/search-analyse.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _postpone_dialogPostpone_dialogPostpone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./postpone/dialogPostpone/dialogPostpone.component */ "./src/app/modules/service-center/postpone/dialogPostpone/dialogPostpone.component.ts");
/* harmony import */ var _agency_from_to_dialog_from_to_dialog_from_to_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agency-from-to/dialog-from-to/dialog-from-to.component */ "./src/app/modules/service-center/agency-from-to/dialog-from-to/dialog-from-to.component.ts");
/* harmony import */ var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/dateAdapter/customDate.adapter */ "./src/app/shared/dateAdapter/customDate.adapter.ts");
/* harmony import */ var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/dateAdapter/my-date-formats.const */ "./src/app/shared/dateAdapter/my-date-formats.const.ts");
/* harmony import */ var _upload_3ng_upload_3ng_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upload-3ng/upload-3ng.component */ "./src/app/modules/service-center/upload-3ng/upload-3ng.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/service-center/dashboard/dashboard.component.ts");
/* harmony import */ var _upload_analise_upload_analise_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upload-analise/upload-analise.component */ "./src/app/modules/service-center/upload-analise/upload-analise.component.ts");



















let ServiceCenterModule = class ServiceCenterModule {
};
ServiceCenterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _edit_analyse_edit_analyse_component__WEBPACK_IMPORTED_MODULE_4__["EditAnalyseComponent"],
            _agency_from_to_agency_from_to_component__WEBPACK_IMPORTED_MODULE_5__["AgencyFromToComponent"],
            _postpone_postpone_component__WEBPACK_IMPORTED_MODULE_6__["PostponeComponent"],
            _search_analyse_search_analyse_component__WEBPACK_IMPORTED_MODULE_7__["SearchAnalyseComponent"],
            _postpone_dialogPostpone_dialogPostpone_component__WEBPACK_IMPORTED_MODULE_12__["DialogPostponeComponent"],
            _agency_from_to_dialog_from_to_dialog_from_to_component__WEBPACK_IMPORTED_MODULE_13__["DialogFromToComponent"],
            _upload_3ng_upload_3ng_component__WEBPACK_IMPORTED_MODULE_16__["Upload3ngComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
            _upload_analise_upload_analise_component__WEBPACK_IMPORTED_MODULE_18__["UploadAnaliseComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _service_center_routing_module__WEBPACK_IMPORTED_MODULE_3__["ServiceCenterRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"], useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_14__["CustomDateAdapter"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_15__["MY_DATE_FORMATS"] }
        ],
        entryComponents: [
            _postpone_dialogPostpone_dialogPostpone_component__WEBPACK_IMPORTED_MODULE_12__["DialogPostponeComponent"],
            _agency_from_to_dialog_from_to_dialog_from_to_component__WEBPACK_IMPORTED_MODULE_13__["DialogFromToComponent"]
        ]
    })
], ServiceCenterModule);



/***/ }),

/***/ "./src/app/modules/service-center/service/service-center.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/service-center/service/service-center.service.ts ***!
  \**************************************************************************/
/*! exports provided: ServiceCenterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCenterService", function() { return ServiceCenterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ServiceCenterService = class ServiceCenterService {
    constructor(http) {
        this.http = http;
        this.urlServiceCenter = "/api/v1/service-center";
    }
    putPostergar(body) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlServiceCenter + '/postergacoes/', body);
    }
    getItensPostergacao(atividadeId, documento, agencia, contaCorrente, dataInicial, dataFinal, PageSize, PageIndex) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlServiceCenter + '/atividade/' + atividadeId + '/postergacoes', {
            params: {
                atividadeId: atividadeId,
                documento: documento,
                agencia: agencia,
                contaCorrente: contaCorrente,
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                PageSize: PageSize,
                PageIndex: PageIndex
            }
        });
    }
    searchAnalysis(atividadeId, agencia, contaCorrente, documento, dataInicial, dataFinal, pageSize, pageIndex) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/atividade/${atividadeId}/edicoes`, {
            params: {
                Agencia: agencia,
                ContaCorrente: contaCorrente,
                Documento: documento,
                DataIncial: dataInicial,
                DataFinal: dataFinal,
                PageSize: pageSize.toString(),
                PageIndex: pageIndex.toString(),
            }
        });
    }
    postDePara(body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlServiceCenter + '/de-para', body);
    }
    getItensDePara(atividadeId, documento, agencia, contaCorrente, dataInicial, dataFinal, PageSize, PageIndex) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlServiceCenter + '/atividade/' + atividadeId + '/de-para', {
            params: {
                documento: documento,
                agencia: agencia,
                contaCorrente: contaCorrente,
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                PageSize: PageSize,
                PageIndex: PageIndex
            }
        });
    }
    getAnalyze(esteiraId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/edicoes/${esteiraId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response.data));
    }
    putAnalyseEdited(esteiraId, body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/edicoes/${esteiraId}`, body);
    }
    upload3ng(file) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/upload-ng`, file);
    }
    uploadAnalise(file) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/upload/analise`, file);
    }
    report(codigoExterno, statusAnaliseId, statusServiceCenterId, initialDate, finalDate) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/relatorio-ng`, {
            params: {
                CodigoExterno: codigoExterno,
                StatusProcedente: statusAnaliseId,
                StatusId: statusServiceCenterId,
                DataInicial: initialDate,
                DataFinal: finalDate
            }
        });
    }
    reportDownload(codigoExterno, statusAnaliseId, statusServiceCenterId, initialDate, finalDate) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlServiceCenter}/relatorio-ng`, {
            responseType: 'blob',
            params: {
                CodigoExterno: codigoExterno,
                StatusProcedente: statusAnaliseId,
                StatusId: statusServiceCenterId,
                DataInicial: initialDate,
                DataFinal: finalDate,
                ExportaXLSX: 'true'
            },
            observe: 'response'
        });
    }
    dashboard() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlServiceCenter + '/dashboard-ng');
    }
    atividade(atividadeId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/atividades/${atividadeId}`);
    }
};
ServiceCenterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServiceCenterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ServiceCenterService);



/***/ }),

/***/ "./src/app/modules/service-center/upload-3ng/upload-3ng.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/service-center/upload-3ng/upload-3ng.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvdXBsb2FkLTNuZy91cGxvYWQtM25nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/service-center/upload-3ng/upload-3ng.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/service-center/upload-3ng/upload-3ng.component.ts ***!
  \***************************************************************************/
/*! exports provided: Upload3ngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload3ngComponent", function() { return Upload3ngComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let Upload3ngComponent = class Upload3ngComponent {
    constructor(serviceCenterService, matSnackBar) {
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.file = new Set();
        this.loading = false;
        this.isUploadFiles = false;
        this.anexos = [];
    }
    onFileChanged(files) {
        if (files && files.length > 0) {
            this.anexos = [];
            try {
                this.isUploadFiles = true;
                for (let i = 0; i < files.length; i++) {
                    const fileToUpload = files.item(i);
                    const formData = new FormData();
                    formData.append('file', fileToUpload, fileToUpload.name);
                    this.serviceCenterService.upload3ng(formData).subscribe(() => {
                        this.isUploadFiles = false;
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showSuccess(this.matSnackBar, "Upload realizado com sucesso!");
                        document.getElementById('file').value = "";
                    }, () => {
                        this.isUploadFiles = false;
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro no upload do arquivo");
                        document.getElementById('file').value = "";
                    });
                }
            }
            catch (_a) {
                this.isUploadFiles = false;
            }
        }
    }
};
Upload3ngComponent.ctorParameters = () => [
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
Upload3ngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-3ng',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-3ng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/upload-3ng/upload-3ng.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-3ng.component.scss */ "./src/app/modules/service-center/upload-3ng/upload-3ng.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_center_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], Upload3ngComponent);



/***/ }),

/***/ "./src/app/modules/service-center/upload-analise/upload-analise.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/service-center/upload-analise/upload-analise.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1jZW50ZXIvdXBsb2FkLWFuYWxpc2UvdXBsb2FkLWFuYWxpc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/service-center/upload-analise/upload-analise.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/service-center/upload-analise/upload-analise.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UploadAnaliseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAnaliseComponent", function() { return UploadAnaliseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_service_center_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service-center.service */ "./src/app/modules/service-center/service/service-center.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let UploadAnaliseComponent = class UploadAnaliseComponent {
    constructor(serviceCenterService, matSnackBar) {
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.file = new Set();
        this.loading = false;
        this.isUploadFiles = false;
        this.anexos = [];
    }
    onFileChanged(files) {
        if (files && files.length > 0) {
            this.anexos = [];
            try {
                this.isUploadFiles = true;
                for (let i = 0; i < files.length; i++) {
                    const fileToUpload = files.item(i);
                    const formData = new FormData();
                    formData.append('file', fileToUpload, fileToUpload.name);
                    this.serviceCenterService.uploadAnalise(formData).subscribe(() => {
                        this.isUploadFiles = false;
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showSuccess(this.matSnackBar, "Upload realizado com sucesso!");
                        document.getElementById('file').value = "";
                    }, () => {
                        this.isUploadFiles = false;
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro no upload do arquivo");
                        document.getElementById('file').value = "";
                    });
                }
            }
            catch (_a) {
                this.isUploadFiles = false;
            }
        }
    }
};
UploadAnaliseComponent.ctorParameters = () => [
    { type: _service_service_center_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
UploadAnaliseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-3ng',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-analise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-center/upload-analise/upload-analise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-analise.component.scss */ "./src/app/modules/service-center/upload-analise/upload-analise.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_center_service__WEBPACK_IMPORTED_MODULE_2__["ServiceCenterService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], UploadAnaliseComponent);



/***/ })

}]);
//# sourceMappingURL=modules-service-center-service-center-module-es2015.js.map