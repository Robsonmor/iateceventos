(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-operation-operation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyse-detail/analyze-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyse-detail/analyze-detail.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Operação</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Pesquisa</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Detalhes da Análise</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<app-template \r\n\t\t*ngIf=\"template\" \r\n\t\t[template]=\"template\" \r\n\t\t[status]=\"status\" \r\n\t\t[type]=\"type\" \r\n\t\t[galleries]=\"galleries\" \r\n\t\t[anexos]=\"anexos\" \r\n\t\t[atividade]= \"atividade\"\r\n\t\t>\r\n\t</app-template>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12 mb-3\">\r\n\t\t\t<mat-divider class=\"mt-3 mb-3\"></mat-divider>\r\n\t\t\t<button class=\"btn btn-primary\" routerLink=\"/operacao/pesquisa\">Voltar</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyze/analyze.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyze/analyze.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid custom-flat-layout\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Análise</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<app-template \r\n\t\t*ngIf=\"template\" \r\n\t\t[template]=\"template\" \r\n\t\t[content]=\"content\"\r\n\t\t[type]=\"type\" \r\n\t\t[galleries]=\"galleries\" \r\n\t\t[esteiraId]=\"esteiraID\" \r\n\t\t[enableReview]=\"enableReview\" \r\n\t\t[alertaAtividades] =\"alertaAtividades\"\r\n\t\t[alertaDocumentos]= \"alertaDocumentos\"\r\n\t\t[atividade]= \"atividade\"\r\n\t\t(submitTemplate)=\"submit($event)\">\r\n\t</app-template>\r\n\t\r\n\t<div *ngIf=\"manualSorting\">\r\n\t\t<app-manual-sorting \r\n\t\t\t[galleries]=\"galleries\" \r\n\t\t\t[esteiraId]=\"esteiraID\"\r\n\r\n\t\t\t[agencia]=\"agencia\"\r\n\t\t\t[contaCorrente]=\"contaCorrente\"\r\n\t\t\t[documento]=\"documento\"\r\n\t\t\t[alertaAtividades] =\"alertaAtividades\"\r\n\t\t\t[alertaDocumentos]= \"alertaDocumentos\"\r\n\t\t\t(submit)=\"submitManualSorting($event)\">\r\n\t\t</app-manual-sorting>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"moduloAnaliseServiceCenter\">\r\n\t\t<app-service-center-baixa\r\n\t\t\t[template]=\"serviceCenterTemplate\" \r\n\t\t\t[content]=\"content\"\r\n\t\t\t[esteiraId]=\"esteiraID\"\r\n\t\t\t[enableReview]=\"enableReview\" \r\n\t\t\t[atividade]= \"atividade\"\r\n\t\t\t(submitTemplate)=\"submitServiceCenter($event)\"\r\n\t\t>\r\n\t\t</app-service-center-baixa>\r\n\t</div>\r\n\r\n\t<section *ngIf=\"!template && !manualSorting && !moduloAnaliseServiceCenter\" class=\"text-center noItens\">\r\n\t\t<div class=\"row justify-content-md-center\">\r\n\t\t\t<div class=\"col-10\">\r\n\t\t\t\t<h1 class=\"mb-5\">Nenhum item na fila neste momento</h1>\r\n\t\t\t\t<p>Por favor, aguarde enquanto buscamos novos itens. Ele será automaticamente carregado na tela.</p>\r\n\t\t\t\t<mat-progress-bar mode=\"query\" class=\"progress-bar\"></mat-progress-bar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<form [formGroup]=\"formPauses\" *ngIf=\"template || manualSorting\">\r\n\t\t<mat-divider class=\"mt-1\"></mat-divider>\r\n\t\t<div class=\"row min-height-70\">\r\n\t\t\t<div class=\"col-4 d-flex align-items-center\">\r\n\t\t\t\t<mat-checkbox formControlName=\"pause\" (change)=\"setPause($event)\">Entrar em pausa após esse atendimento</mat-checkbox>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-4 d-flex align-items-center\">\r\n\t\t\t\t<mat-checkbox formControlName=\"finishExpedient\" (change)=\"setFinishExpedient($event)\" >Finalizar expediente após esse atendimento</mat-checkbox>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-4\" *ngIf=\"formPauses.value.pause\">\r\n\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t<mat-label>Motivo da Pausa</mat-label>\r\n\t\t\t\t\t<mat-select formControlName=\"reasons\">\r\n\t\t\t\t\t\t<mat-option *ngFor=\"let reason of reasonsToPause\" [value]=\"reason.id\">\r\n\t\t\t\t\t\t\t{{ reason.nome }}\r\n\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title class=\"mb-4\">{{ data.title }}</h1>\r\n\r\n<div mat-dialog-content>\r\n\t<p [innerHTML]=\"data.message\"></p>\r\n</div>\r\n\r\n<div mat-dialog-actions class=\"wrap-buttons text-center mt-4\" *ngIf=\"data.type === 'confirmation'\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"decision('cancel')\">Cancelar</button>\r\n\t<button class=\"btn btn-warning\" (click)=\"decision('contingency')\" cdkFocusInitial>Enviar para Contingência</button>\r\n\t<button class=\"btn btn-primary\" (click)=\"decision('finish')\" cdkFocusInitial>Prosseguir Sem Carga</button>\r\n</div>\r\n\r\n<div mat-dialog-actions class=\"wrap-buttons\" *ngIf=\"data.type === 'information'\">\r\n\t<button class=\"btn btn-primary\" (click)=\"decision('ok')\" cdkFocusInitial>OK</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"barraSuperior\">\r\n    <img src=\"/assets/images/logo-ole.png\" class=\"dp-logotipo\" />\r\n    \r\n    <div class=\"welcome\">\r\n\t<div class=\"btn-close-editor\">\r\n\t\t<mat-icon (click)=\"close()\" class=\"cursor_pointer\">close</mat-icon>\r\n\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"data.compare\">\r\n\t<div class=\"col-6\">\r\n\t\t<app-image-editor [imageEditor]=\"imageEditor\" ></app-image-editor>\r\n\t</div>\r\n\t<div class=\"col-6 image-editor-second-box\">\r\n\t\t<app-image-editor [imageEditor]=\"imageEditorCampare\" ></app-image-editor>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"!data.compare\">\r\n\t<div class=\"col-12\" >\r\n\t\t<app-image-editor [imageEditor]=\"imageEditor\" ></app-image-editor>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/display-images/display-images.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/display-images/display-images.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"barraSuperior\" (window:resize)=\"onResize()\">\r\n    <img src=\"/assets/images/logo-interfile-travelex.png\" class=\"dp-logotipo\" />\r\n    <div>\r\n        <mat-icon class=\"bt-compare\" (click)=\"compare()\"  matTooltip=\"Comparar Imagens\">compare</mat-icon>\r\n    </div>\r\n    <div class=\"welcome\">{{ user.welcomeName }}</div>\r\n</div>\r\n<section class=\"container-fluid bg\">\r\n    <div class=\"row\">\r\n        <div class=\"col-2 pt-3 thumbinails\">\r\n            <div class=\"wrappImages\" [style.height.px]=\"heightWrapper\">\r\n                <div class=\"item\" *ngFor=\"let item of mediaGallery, index as i\" (click)=\"setPosition(i)\">\r\n                    <img [src]=\"item.thumbnail\" alt=\"\" id=\"thumb_{{item.title}}\" class=\"img-fluid\"\r\n                        [ngClass]=\"i === indexActive ? 'active' : ''\" />\r\n                    <span>{{ item.title }}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-10 pt-3 images\">\r\n            <div class=\"wrappImages\" #wrappImages id=\"images\" [style.height.px]=\"heightWrapper\">\r\n                <img *ngFor=\"let item of mediaGallery, index as i\" id=\"{{item.title}}\" [src]=\"item.url\"\r\n                    class=\"img-fluid\" [ngClass]=\"i === indexActive ? 'active' : ''\" alt=\"\" #images\r\n                    (mousewheel)=\"mouseMove(item.title, (i-1))\" (mouseover)=\"mouseMove(item.title, i)\"\r\n                    (click)=\"openModalEdit(i,false)\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/fases-tfc/fases-tfc.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/fases-tfc/fases-tfc.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">linear_scale</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Fases do TFC</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Fases do TFC</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Tipo</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"tipoId\" #tipoId >\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"\">Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\r\n\t\t\t\t\t\t\t\t\t\t{{ tipo.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Status</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"statusId\">\r\n\t\t\t\t\t\t\t\t\t<mat-option [value]=\"\">Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of status\" [value]=\"item.id\">\r\n\t\t\t\t\t\t\t\t\t\t{{ item.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-5\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataInicial\" [max]=\"form.value.dataFinal || today\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"dataInicial\" placeholder=\"Data Inicial\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Preencha com uma data válida</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-lg-5\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataFinal\" [min]=\"form.value.dataInicial\" [max]=\"today\"\r\n\t\t\t\t\t\t\t\t\tformControlName=\"dataFinal\" placeholder=\"Data Final\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataFinal disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t\t<mat-error>Preencha com uma data válida</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2 text-right\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"getAlteracaoFases(false)\">\r\n\t\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<div class=\"containerTable\">\r\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"etiqueta\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Etiqueta</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.kit.etiqueta }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"agencia\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Agência</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.kit.agencia }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"contaCorrente\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Conta</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.kit.contaCorrente }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"documento\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Documento</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.kit.documento }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataCadastro\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Data Criação</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.dataCadastro  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"tipoAlteracaoFase\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Tipo Alteracao</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.alteracaoFase.tipoAlteracaoFase.nome }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef  class=\"text-left\">Status</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'ext-left': true, 'text-danger': element.alteracaoFaseItemStatus.id == 6 }\" >{{ element.alteracaoFaseItemStatus.nome }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"motivoRPA\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Motivo RPA</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.motivoRPA }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\"></th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-left text-nowrap\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"element.alteracaoFaseItemStatus.id == 6\" (click)=\"openModal(element.registro, element.id)\" class=\"mouse-pointer custom-link\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons custom-link\">input</i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell custom-link\">Confimar tratamento manual</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"element.alteracaoFaseItemStatus.id == 4\" class=\"d-flex text-success\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check</i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Tratamento manual Confirmado</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\"\r\n\t\t\t\t\t[length]=\"length\"\r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\t\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length === 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\tNão foram localizados registros no sistema para essa pesquisa\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Operação</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Visão Gerencial</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Detalhes</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1>Detalhes</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mt-3 mb-3\">\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<strong>Operação:</strong>\r\n\t\t\t<p>{{ operationName }}</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-5\">\r\n\t\t\t<strong>Atividade:</strong>\r\n\t\t\t<p>{{ activityName }}</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<strong>Status:</strong>\r\n\t\t\t<p>{{ statusName }}</p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section *ngIf=\"!showErrorMessage\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<div class=\"containerTable\">\r\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"esteiraId\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>ID Esteira</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.esteiraId }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"serviceCenterId\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>ID Service Center</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.serviceCenterId }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"proposta\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Proposta</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.proposta }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"processo\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Processo</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.processo }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"atividade\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Atividade</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.atividade }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"documento\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Documento</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ formatDocument(element.documento) }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"operador\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Operador</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.operador?.nomeCompleto }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataCadastro\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Cadastro</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataCadastro | date: 'dd/MM/yyyy hh:mm:ss' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataAnaliseInicial\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>An. Inicial</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataAnaliseInicial | date: 'dd/MM/yyyy hh:mm:ss' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataAnaliseFinal\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>An. Final</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataAnaliseFinal | date: 'dd/MM/yyyy hh:mm:ss'}}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"action\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef></th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" *ngIf=\"statusId === '8' || statusId === '10'\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"toDeal(element)\">Tratar</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" *ngIf=\"statusId === '2'\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"setAtividadeEsteira(element)\">Triagem Manual</button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<mat-paginator \r\n\t\t\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 50, 100]\" \r\n\t\t\t\t\t\t[length]=\"totalItens\" \r\n\t\t\t\t\t\t[pageIndex]=\"0\" \r\n\t\t\t\t\t\t[pageSize]=\"5\"\r\n\t\t\t\t\t\tshowFirstLastButtons>\r\n\t\t\t\t\t</mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<button class=\"btn btn-primary\" routerLink=\"/operacao/visao-gerencial/1\">Voltar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"showErrorMessage\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"alert alert-warning text-center\" role=\"alert\">\r\n\t\t\t\t\tNão há dados para exibir\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<button class=\"btn btn-primary\" routerLink=\"/operacao/visao-gerencial/1\">Voltar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/managerial-view/managerial-view.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/managerial-view/managerial-view.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Operação</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Visão Gerencial</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1>Visão Gerencial</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section>\r\n\t\t<div class=\"row\" *ngIf=\"managerialView\">\r\n\t\t\t\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<mat-card class=\"itemDashMV\">\r\n\t\t\t\t\t<div class=\"row no-gutters\">\r\n\t\t\t\t\t\t<div class=\"col-12 iconDash\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">hourglass_empty</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-12 datas mt-2\">\r\n\t\t\t\t\t\t\t<span class=\"title\"><strong>Aguard. Análise</strong></span>\r\n\t\t\t\t\t\t\t<span class=\"valor\">{{ managerialView.indicadores[1].volume }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<mat-card class=\"itemDashMV\">\r\n\t\t\t\t\t<div class=\"row no-gutters\">\r\n\t\t\t\t\t\t<div class=\"col-12 iconDash\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">search</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-12 datas mt-2\">\r\n\t\t\t\t\t\t\t<span class=\"title\"><strong>Em Análise</strong></span>\r\n\t\t\t\t\t\t\t<span class=\"valor\">{{ managerialView.indicadores[2].volume }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<mat-card class=\"itemDashMV\">\r\n\t\t\t\t\t<div class=\"row no-gutters\">\r\n\t\t\t\t\t\t<div class=\"col-12 iconDash\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">done_outline</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-12 datas mt-2\">\r\n\t\t\t\t\t\t\t<span class=\"title\"><strong>Atendidas Hoje</strong></span>\r\n\t\t\t\t\t\t\t<span class=\"valor\">{{ managerialView.indicadores[0].volume }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<mat-card class=\"itemDashMV\">\r\n\t\t\t\t\t<div class=\"row no-gutters\">\r\n\t\t\t\t\t\t<div class=\"col-12 iconDash\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">query_builder</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-12 datas mt-2\">\r\n\t\t\t\t\t\t\t<span class=\"title\"><strong>Postergado</strong></span>\r\n\t\t\t\t\t\t\t<span class=\"valor\">{{ managerialView.indicadores[3].volume }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<mat-card class=\"itemDashMV\">\r\n\t\t\t\t\t<div class=\"row no-gutters\">\r\n\t\t\t\t\t\t<div class=\"col-12 iconDash\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">alarm</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-12 datas mt-2\">\r\n\t\t\t\t\t\t\t<span class=\"title\"><strong>Contingência</strong></span>\r\n\t\t\t\t\t\t\t<span class=\"valor\">{{ managerialView.indicadores[4].volume }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"col-2\">\r\n\t\t\t\t<mat-card class=\"itemDashMV\">\r\n\t\t\t\t\t<div class=\"row no-gutters\">\r\n\t\t\t\t\t\t<div class=\"col-12 iconDash\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">flip_to_back</i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-12 datas mt-2\">\r\n\t\t\t\t\t\t\t<span class=\"title\"><strong>Carga Pendente</strong></span>\r\n\t\t\t\t\t\t\t<span class=\"valor\">{{ managerialView.indicadores[5].volume }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-card>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<mat-form-field class=\"mt-5\">\r\n\t\t\t\t\t<input matInput [(ngModel)]=\"filter\" (keyup)=\"applyFilter()\"\r\n\t\t\t\t\t\tplaceholder=\"Escreva o nome da operação que deseja visualizar\">\r\n\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"operacaoNome\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column\">Nome da Operação</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column cursorPointer\"\r\n\t\t\t\t\t\t\t\t(click)=\"expand(element.position)\">\r\n\t\t\t\t\t\t\t\t{{ element.operacao }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"somaAguardandoAnalise\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Aguardando Análise</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"element.indicadores[1].volume > 0 ? 'cursorPointer font-weight-bold' : 'text-muted'\"\r\n\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('operacao', element.operacaoId, 0, element.indicadores[1].id)\">\r\n\t\t\t\t\t\t\t\t{{ element.indicadores[1].volume }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"somaEmAnalise\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Em Análise</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"element.indicadores[2].volume > 0 ? 'cursorPointer font-weight-bold' : 'text-muted'\"\r\n\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('operacao', element.operacaoId, 0, element.indicadores[2].id)\">\r\n\t\t\t\t\t\t\t\t{{ element.indicadores[2].volume }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"somaAtendidasHoje\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Atendidas Hoje</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"element.indicadores[0].volume > 0 ? 'cursorPointer font-weight-bold' : 'text-muted'\"\r\n\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('operacao', element.operacaoId, 0, element.indicadores[0].id)\">\r\n\t\t\t\t\t\t\t\t{{ element.indicadores[0].volume }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"somaPostergado\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Postergado</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"element.indicadores[3].volume > 0 ? 'cursorPointer font-weight-bold' : 'text-muted'\"\r\n\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('operacao', element.operacaoId, 0, element.indicadores[3].id)\">\r\n\t\t\t\t\t\t\t\t{{ element.indicadores[3].volume }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"somaEmContingencia\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Em Contingência</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"element.indicadores[4].volume > 0 ? 'cursorPointer font-weight-bold' : 'text-muted'\"\r\n\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('operacao', element.operacaoId, 0, element.indicadores[4].id)\">\r\n\t\t\t\t\t\t\t\t{{ element.indicadores[4].volume }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"somaCargaPendente\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Carga Pendente</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"element.indicadores[5].volume > 0 ? 'cursorPointer font-weight-bold' : 'text-muted'\"\r\n\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('operacao', element.operacaoId, 0, element.indicadores[5].id)\">\r\n\t\t\t\t\t\t\t\t{{ element.indicadores[5].volume }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"expandedDetail\">\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n\t\t\t\t\t\t\t\t<div class=\"example-element-detail\"\r\n\t\t\t\t\t\t\t\t\t[@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-dark\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">Atividade</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Aguardando Análise</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Em Análise</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Atendidas Hoje</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Postergado</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Em Contingência</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Carga Pendente</th>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let activity of element.atividades\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ activity.atividade }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cursorPointer\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('atividade', element.operacaoId, activity.atividadeId, activity.indicadores[1].id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.indicadores[1].volume }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cursorPointer\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('atividade', element.operacaoId, activity.atividadeId, activity.indicadores[2].id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.indicadores[2].volume }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cursorPointer\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('atividade', element.operacaoId, activity.atividadeId, activity.indicadores[0].id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.indicadores[0].volume }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cursorPointer\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('atividade', element.operacaoId, activity.atividadeId, activity.indicadores[3].id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.indicadores[3].volume }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cursorPointer\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('atividade', element.operacaoId, activity.atividadeId, activity.indicadores[4].id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.indicadores[4].volume }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center cursorPointer\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getDetailsOperation('atividade', element.operacaoId, activity.atividadeId, activity.indicadores[5].id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.indicadores[5].volume }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n\t\t\t\t\t\t\t[class.example-expanded-row]=\"expandedElement === element\">\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<mat-paginator [pageSize]=\"pageSize\" [pageIndex]=\"pageIndex\" [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" showFirstLastButtons >\r\n\t\t\t\t\t</mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<div class=\"row\" *ngIf=\"showErrorMessage\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"alert alert-warning text-center\" role=\"alert\">\r\n\t\t\t\tErro ao obter dados. Não foi possível exibir as informações.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/open-ticket/open-ticket.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/open-ticket/open-ticket.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Abertura de Chamado</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<app-template \r\n\t\t[template]=\"template\" \r\n\t\t[type]=\"type\" \r\n\t\t(submitTemplate)=\"submit($event)\"\r\n\t\t[atividade] = \"atividade\"\r\n\t\t >\r\n\t</app-template>\r\n\t\r\n\t<section class=\"noTemplate\" *ngIf=\"!template\">\r\n\t\t<button class=\"btn btn-lg btn-primary\" (click)=\"choiceActivity()\">Escolher um tipo de Abertura de Chamado</button>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-builder/report-builder.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-builder/report-builder.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Gerenciador de Relatório</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Gerenciador de Relatório</h1>\r\n\t\t\t</div>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n            <form [formGroup]=\"form\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Operação</mat-label>\r\n                                <mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n                                    <mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n                                        {{ operation.nome }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Atividade</mat-label>\r\n                                <mat-select formControlName=\"atividadeId\" (selectionChange)=\"setActivity()\">\r\n                                <mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n                                    {{ activity.nome }}\r\n                                </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>CPF/CNPJ</mat-label>\r\n                                <input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Agência</mat-label>\r\n                                <input formControlName=\"agencia\" matInput placeholder=\"Agência\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Conta</mat-label>\r\n                                <input formControlName=\"conta\" matInput placeholder=\"Conta\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input  \r\n                                    matInput \r\n                                    [matDatepicker]=\"dataInicial\" \r\n                                    formControlName=\"dataInicial\" \r\n                                    placeholder=\"Data Inicial\"\r\n                                    [max]=\"form.value.dataFinal || dataAtual\"\r\n                                >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataInicial></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input \r\n                                    matInput \r\n                                    [min]=\"form.value.dataInicial\"\r\n                                    [max]=\"dataAtual\"\r\n                                    [matDatepicker]=\"dataFinal\" \r\n                                    formControlName=\"dataFinal\" \r\n                                    placeholder=\"Data Final\" \r\n                                >\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataFinal ></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Status</mat-label>\r\n                                <mat-select formControlName=\"statusId\">\r\n                                    <mat-option value=\"\">Qualquer Status</mat-option>\r\n                                    <mat-option *ngFor=\"let status of statusList\" [value]=\"status[1]\">\r\n                                        {{ status[0] }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>   \r\n                    <div class=\"col-lg-9\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Campos Personalizados</mat-label>\r\n                                <mat-select multiple (selectionChange)=\"setPersonalFields($event)\" >\r\n                                    <mat-option *ngFor=\"let field of listPersonalFields\" [value]=\"field.valor\">{{ field.descricao }}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>                                         \r\n                </div>      \r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 text-center\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getResult(false)\" >\r\n                                Pesquisar\r\n                            </button>\r\n                            <button class=\"btn btn-primary small-menu\" mat-button [matMenuTriggerFor]=\"menuExport\">\r\n                                <i class=\"material-icons\">more_vert</i>\r\n                                <mat-menu #menuExport=\"matMenu\">\r\n                                    <button mat-menu-item class=\"d-flex align-items-center\" (click)=\"getResult(true)\">\r\n                                        <i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </button>\r\n                            <!--\r\n                            <button class=\"btn btn-info small-menu\" mat-button [matMenuTriggerFor]=\"menuExport\">\r\n                                <i class=\"material-icons\">more_vert</i>\r\n                            </button>\r\n                            <mat-menu #menuExport=\"matMenu\" >\r\n                                <div class=\"btn-group\">\r\n                                    <button type=\"button\" class=\"btn btn-danger\">Action</button>\r\n                                    <button type=\"button\" class=\"btn btn-danger dropdown-toggle dropdown-toggle-split\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    <span class=\"sr-only\">Toggle Dropdown</span>\r\n                                    </button>\r\n                                    <div class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                        <div class=\"dropdown-divider\"></div>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n                                    </div>\r\n                                </div>\r\n                            </mat-menu> \r\n                            -->\r\n                        </div>\r\n                    </div>\r\n                </div>                          \r\n            </form>\r\n        </div>\r\n\t</section>\r\n\t\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n                <div class=\"mat-elevation-z8 mb-3\">\r\n                    <div class=\"containerTable\">\r\n                        <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n                            <ng-container matColumnDef=\"dataAnaliseInicial\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Análise Inicial</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataAnaliseInicial  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                            </ng-container>\t\t\t\t\t\t\r\n                    \r\n                            <ng-container matColumnDef=\"dataAnaliseFinal\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Análise Final</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataAnaliseFinal  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"dataCadastro\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Cadastro</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataCadastro  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"documento\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">CPF/CNPJ</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left text-nowrap\">{{ formatDocument(element.documento) }}</td>\r\n                            </ng-container>\r\n                            \r\n                            <ng-container matColumnDef=\"agencia\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Agência</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n                            </ng-container>\r\n                            \r\n                            <ng-container matColumnDef=\"contaCorrente\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Conta Corrente</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.contaCorrente }}</td>\r\n                            </ng-container>\r\n                            \r\n                            <ng-container matColumnDef=\"status\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status.nome }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"motivosRejeicao\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Motivos Rejeição</th>\r\n                                <td mat-cell *matCellDef=\"let element\"\r\n                                class=\"first-column cursorPointer\" \r\n                                (click)=\"expandedElement = expandedElement === element ? null : element\">{{element.motivosRejeicao.length}}</td>\r\n                            </ng-container>   \r\n\r\n                            <ng-container matColumnDef=\"expandedDetail\">\r\n                                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\r\n                                    <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                                        <table class=\"table table-bordered\" *ngIf=\"element.motivosRejeicao?.length > 0\">\r\n                                            <thead class=\"thead-dark\">\r\n                                                <tr>\r\n                                                    <th scope=\"col\">Descrição do Motivo de Rejeição</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let motivo of element.motivosRejeicao\">\r\n                                                    <td>{{ motivo.descricao }}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" *ngIf=\"element.motivosRejeicao?.length == 0\">\r\n                                            <thead class=\"thead-dark\">\r\n                                                <tr>\r\n                                                    <th scope=\"col\">Não possuem motivos de rejeição</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                        </table>                                    \r\n                                    </div>\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"operador\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Operador</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.operador?.nomeCompleto }}</td>\r\n                            </ng-container>\t\t\r\n\r\n                            <ng-container matColumnDef=\"generico1\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[0] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico1 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico2\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[1] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico2 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico3\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[2] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico3 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico4\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[3] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico4 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico5\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[4] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico5 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico6\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[5] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico6 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico7\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[6] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico7 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico8\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[7] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico8 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico9\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[8] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico9 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico10\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[9] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico10 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico11\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[10] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico11 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico12\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[11] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico12 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico13\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[12] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico13 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico14\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[13] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico14 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico15\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[14] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico15 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico16\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[15] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico16 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico17\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[16] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico17 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico18\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[17] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico18 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico19\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[18] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico19 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico20\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[19] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico20 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico21\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[20] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico21 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico22\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[21] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico22 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico23\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[22] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico23 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico24\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[23] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico24 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico25\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[24] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico25 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico26\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[25] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico26 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico27\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[26] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico27 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico28\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[27] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico28 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico29\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[28] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico29 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico30\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[29] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico30 }}</td>\r\n                            </ng-container>\r\n\r\n\r\n                                                    \r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\r\n                            <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\" [class.example-expanded-row]=\"expandedElement === element\"></tr>\r\n\r\n                            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n\r\n                        </table>\r\n                    </div>\r\n                    <mat-paginator \r\n                        [pageSizeOptions]=\"pageSizeOptions\" \r\n                        [length]=\"length\" \r\n                        [pageIndex]= \"pageIndex\"\r\n                        [pageSize]= \"pageSize\"\r\n                        (page) = \"setPageSizeOptions($event)\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </div>\r\n\t\t</div>\r\n    </section>\r\n    \r\n    <section *ngIf=\"length === 0\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"alert alert-warning\" role=\"alert\">\r\n                    Não foram localiados registros no sistema para essa pesquisa\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-general-analytical/report-general-analytical.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-general-analytical/report-general-analytical.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-lg-12\">\r\n            <nav aria-label=\"breadcrumb\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Relatório Geral Analítico</li>\r\n                </ol>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n    <section>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1>Relatório Geral Analítico</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n            <form [formGroup]=\"form\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Operação</mat-label>\r\n                                <mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n                                    <mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n                                        {{ operation.nome }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Atividade</mat-label>\r\n                                <mat-select formControlName=\"atividadeId\" (selectionChange)=\"setActivity()\">\r\n                                    <mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n                                        {{ activity.nome }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input matInput [matDatepicker]=\"dataInicial\" formControlName=\"dataInicial\"\r\n                                    placeholder=\"Data Inicial\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataInicial></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input matInput [min]=\"form.value.dataInicial\" \r\n                                    [matDatepicker]=\"dataFinal\" formControlName=\"dataFinal\" placeholder=\"Data Final\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataFinal></mat-datepicker>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-3\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Status</mat-label>\r\n                                <mat-select formControlName=\"statusId\">\r\n                                    <mat-option value=\"\">Qualquer Status</mat-option>\r\n                                    <mat-option *ngFor=\" let status of statusList\" [value]=\"status[1]\">\r\n                                        {{ status[0] }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-9\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Campos Personalizados</mat-label>\r\n                                <mat-select multiple (selectionChange)=\"setPersonalFields($event)\">\r\n                                    <mat-option *ngFor=\"let field of listPersonalFields\" [value]=\"field.valor\">\r\n                                        {{ field.descricao }}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12 text-center\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getResult()\">\r\n                                <i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"length > 0\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n                <div class=\"mat-elevation-z8 mb-3\">\r\n                    <div class=\"containerTable\">\r\n                        <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n\r\n                            <ng-container matColumnDef=\"banco\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Banco</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.banco }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"rede\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Rede</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.rede }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"regional\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Regional</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.regional }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"agencia\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Agencia</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"conta\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Conta</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.conta }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"cpfCnpj\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">CpfCnpj</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ formatDocument(element.cpfCnpj) }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"nomeCliente\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">NomeCliente</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nomeCliente }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"etiqueta\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Etiqueta</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.etiqueta }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"caixa\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Caixa</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.caixa }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"tipoAbertura\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Tipo Abertura</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.tipoAbertura }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"abertura\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Abertura</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.abertura }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"recebimento\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Recebimento</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.recebimento  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"loginRecebimento\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Login Recebimento</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.loginRecebimento }}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"digitalização\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Digitalização</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.digitalizacao  | date: 'dd/MM/yyyy HH:mm' }}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"loginDigitalizacao\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Login Digitalização</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                    {{ element.loginDigitalizacao }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"digitalizacaoRobo\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Digitalização Robô</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.digitalizacaoRobo }}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"descricaoProduto\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Descrição Produto</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.descricaoProduto }}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"dataImportacaoBW\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Importacao BW</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataImportacaoBW  | date: 'dd/MM/yyyy HH:mm' }}\r\n                                </td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"statusAtual\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Status Atual</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.statusAtual }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico1\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[0] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico1 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico2\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[1] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico2 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico3\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[2] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico3 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico4\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[3] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico4 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico5\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[4] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico5 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico6\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[5] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico6 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico7\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[6] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico7 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico8\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[7] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico8 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico9\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[8] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico9 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico10\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[9] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico10 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico11\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[10] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico11 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico12\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[11] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico12 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico13\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[12] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico13 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico14\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[13] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico14 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico15\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[14] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico15 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico16\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[15] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico16 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico17\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[16] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico17 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico18\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[17] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico18 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico19\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[18] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico19 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico20\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[19] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico20 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico21\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[20] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico21 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico22\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[21] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico22 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico23\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[22] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico23 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico24\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[23] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico24 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico25\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[24] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico25 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico26\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[25] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico26 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico27\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[26] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico27 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico28\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[27] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico28 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico29\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[28] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico29 }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"generico30\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">{{ labelColumns[29] }}</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.generico30 }}</td>\r\n                            </ng-container>\r\n\r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\r\n                            <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\r\n                                [class.example-expanded-row]=\"expandedElement === element\"></tr>\r\n\r\n                        </table>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n                        [pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"length === 0\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"alert alert-warning\" role=\"alert\">\r\n                    Não foram localiados registros no sistema para essa pesquisa\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-productivity/report-productivity.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-productivity/report-productivity.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-lg-12\">\r\n            <nav aria-label=\"breadcrumb\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Gerenciador de Produtividade</li>\r\n                </ol>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n    <section>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1>Gerenciador de Produtividade</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n            <form [formGroup]=\"form\" autocomplete=\"off\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Malote Englobador</mat-label>\r\n                                <input formControlName=\"maloteEnglobador\" matInput placeholder=\"Malote Englobador\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input matInput [matDatepicker]=\"dataInicial\" formControlName=\"dataInicial\" [min]=\"minDate\"\r\n                                    placeholder=\"Data Inicial\" [max]=\"form.value.dataFinal || currentDate\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataInicial\" ></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataInicial></mat-datepicker>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <input matInput [matDatepicker]=\"dataFinal\" formControlName=\"dataFinal\" [min]=\"form.value.dataInicial\"\r\n                                    placeholder=\"Data Final\" [max]=\"currentDate\">\r\n                                <mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #dataFinal></mat-datepicker>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-12 text-center\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getResult(false)\">\r\n                                Pesquisar\r\n                            </button>\r\n                            <button class=\"btn btn-primary small-menu\" mat-button [matMenuTriggerFor]=\"menuExport\">\r\n                                <i class=\"material-icons\">more_vert</i>\r\n                                <mat-menu #menuExport=\"matMenu\">\r\n                                    <button mat-menu-item class=\"d-flex align-items-center\" (click)=\"getResult(true)\">\r\n                                        <i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"length > 0\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n                <div class=\"mat-elevation-z8 mb-3\">\r\n                    <div class=\"containerTable\">\r\n                        <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n\r\n                            <ng-container matColumnDef=\"dataRecebimento\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Data Recebimento</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                                    {{ element.dataRecebimento  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"maloteEnglobadorNumero\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Malote Englobador</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                    {{ element.maloteEnglobadorNumero }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"maloteNumero\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Malote</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.maloteNumero }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"maloteLacre\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Lacre</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.maloteLacre }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"etiqueta\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Etiqueta</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.etiqueta }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"agencia\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Agência</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"contaCorrente\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Conta Corrente</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.contaCorrente }}\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"documento\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">CPF/CNPJ</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left text-nowrap\">\r\n                                    {{ formatDocument(element.documento) }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"fila\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Fila</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.fila?.nome }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"status\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status?.nome }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"dataAnaliseInicial\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Dt. Início Análise</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                                    {{ element.dataAnaliseInicial  | date: 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"dataAnaliseFinal\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Dt. Final Análise</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n                                    {{ element.dataAnaliseFinal  | date: 'dd/MM/yyyy HH:mm:ss' }}</td>\r\n                            </ng-container>                            \r\n\r\n                            <ng-container matColumnDef=\"operador\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Operador</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                    {{ element.operador?.nomeCompleto }}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"motivosRejeicao\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-left\">Motivos Rejeição</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"first-column cursorPointer text-center\"\r\n                                    (click)=\"expandedElement = expandedElement === element ? null : element\">\r\n                                    {{element.motivosRejeicao.length}}</td>\r\n                            </ng-container>\r\n\r\n                            <ng-container matColumnDef=\"expandedDetail\">\r\n                                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\r\n                                    <div class=\"example-element-detail\"\r\n                                        [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                                        <table class=\"table table-bordered\" *ngIf=\"element.motivosRejeicao?.length > 0\">\r\n                                            <thead class=\"thead-dark\">\r\n                                                <tr>\r\n                                                    <th scope=\"col\">Descrição do Motivo de Rejeição</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let motivo of element.motivosRejeicao\">\r\n                                                    <td>{{ motivo.descricao }}</td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\"\r\n                                            *ngIf=\"element.motivosRejeicao?.length == 0\">\r\n                                            <thead class=\"thead-dark\">\r\n                                                <tr>\r\n                                                    <th scope=\"col\">Não possuem motivos de rejeição</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                        </table>\r\n                                    </div>\r\n                                </td>\r\n                            </ng-container>\r\n                            <ng-container matColumnDef=\"tmo\">\r\n                                <th mat-header-cell *matHeaderCellDef class=\"text-center\">TMO</th>\r\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.tmo }}</td>\r\n                            </ng-container>\r\n\r\n\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\r\n                            <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\r\n                                [class.example-expanded-row]=\"expandedElement === element\"></tr>\r\n\r\n                            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\">\r\n                            </tr>\r\n\r\n                        </table>\r\n                    </div>\r\n                    <mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n                        [pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\">\r\n                    </mat-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section *ngIf=\"length === 0\">\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"alert alert-warning\" role=\"alert\">\r\n                    Não foram localiados registros no sistema para essa pesquisa\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/search/search.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/search/search.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">find_in_page</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Pesquisa</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Pesquisa</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<mat-tab-group class=\"mt-3\">\r\n\t\t\t<mat-tab label=\"Filtrar por Atividade\">\r\n\t\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group radioButtonAdjust\">\r\n\t\t\t\t\t\t\t\t\t<mat-label>Tipo da Consulta</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-group aria-label=\"Tipo da Consulta\" formControlName=\"typeConsult\"\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"changeType()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"C\">Carga</mat-radio-button>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"E\">Esteira</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"operacaoId\" #operacaoId\r\n\t\t\t\t\t\t\t\t\t\t\t(selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let operation of operations\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"operation.operacaoId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ operation.nome }}\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-5\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Atividade</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"atividadeId\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>CPF/CNPJ</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\"\r\n\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"14\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataInicial\"\r\n\t\t\t\t\t\t\t\t\t\t\t[max]=\"form.value.dataFinal || today\" formControlName=\"dataInicial\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t\t\t\t<mat-error>Preencha com uma data válida</mat-error>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataFinal\" [min]=\"form.value.dataInicial\"\r\n\t\t\t\t\t\t\t\t\t\t\t[max]=\"today\" formControlName=\"dataFinal\" placeholder=\"Data Final\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker #dataFinal disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t\t\t\t<mat-error>Preencha com uma data válida</mat-error>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Status</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"status\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">Qualquer Status</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let status of statusList\" [value]=\"status[1]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ status[0] }}\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"search()\">\r\n\t\t\t\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab label=\"Filtrar por Processo e/ou Pasta\">\r\n\t\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t\t<form [formGroup]=\"formAgenciaConta\" autocomplete=\"off\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group radioButtonAdjust\">\r\n\t\t\t\t\t\t\t\t\t<mat-label>Tipo da Consulta</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-group aria-label=\"Tipo da Consulta\" formControlName=\"typeConsult\"\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"changeType()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"C\">Carga</mat-radio-button>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"E\">Esteira</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>CPF/CNPJ</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\"\r\n\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"14\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Agência</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"agencia\" matInput placeholder=\"Agência\"\r\n\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"14\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Conta</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"conta\" matInput placeholder=\"Conta\" maxlength=\"14\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Número do Processo</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"numeroProcesso\" matInput placeholder=\"Nº Processo\"\r\n\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"14\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Numero da Pasta</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input formControlName=\"numeroPasta\" matInput placeholder=\"Nº pasta\" maxlength=\"14\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"searchAgenciaConta()\">\r\n\t\t\t\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-tab>\r\n\t\t</mat-tab-group>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<div class=\"containerTable\">\r\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"esteiraId\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Esteira Id</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"element.esteiraId != undefined && element.esteiraId != 0\">{{ element.esteiraId }}</span>\r\n\t\t\t\t\t\t\t\t\t<mat-icon *ngIf=\"element.esteiraId == undefined || element.esteiraId == 0\">more_horiz</mat-icon>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataCarga\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Data da Carga</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataCarga  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"documento\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">CPF/CNPJ</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t{{ formatDocument(element.header.documento) }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"agencia\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Agência</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.header.agencia }}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"conta\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Conta</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t{{ element.header.contaCorrente }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"numeroPocesso\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Pasta</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t{{ formatDocument(element.header.numeroPocesso) }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"numeroPasta\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Processo</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t{{ formatDocument(element.header.numeroPasta) }}</td>\r\n\t\t\t\t\t\t\t</ng-container> \r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.status?.nome }}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"statusAqo\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Status AQO</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.statusAqo?.nome }}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"operador\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Operador</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.operador?.nomeCompleto }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataAnalise\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Data da Análise</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataAnalise  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataAlteracao\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Data Alteração</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataAlteracao  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"alteradoPor\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Alterado Por</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.alteradoPor?.nomeCompleto }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-right\"></th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-right text-nowrap\">\r\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"element.possuiAnalise\" class=\"mr-3\"\r\n\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/operacao/detalhes-analise', element.esteiraId, element.atividade.id]\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">search</i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Detalhes</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"openHistory(element)\" class=\"mouse-pointer\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">history</i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Histórico</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"element.esteiraId != undefined && element.esteiraId != 0\" (click)=\"openKitHistory(element)\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"mouse-pointer\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">storage</i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Histórico do Kit</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 50, 100]\" [length]=\"length\"\r\n\t\t\t\t\t\t\t[pageIndex]=\"pageIndex\" [pageSize]=\"pageSize\" (page)=\"changePaginator($event)\">\r\n\t\t\t\t\t\t</mat-paginator>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length === 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\tNão foram localizados registros no sistema para essa pesquisa\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ data.title }}</h1>\r\n<div mat-dialog-content>\r\n\t<p [innerHTML]=\"data.message\"></p>\r\n\t<form [formGroup]=\"formChoiceActivity\">\r\n\t\t<mat-form-field>\r\n\t\t\t<mat-label>Escolha a atividade</mat-label>\r\n\t\t\t<mat-select formControlName=\"activity\">\r\n\t\t\t\t<mat-option *ngFor=\"let activity of arrayActivities\" [value]=\"activity.id\">\r\n\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t</mat-option>\r\n\t\t\t</mat-select>\r\n\t\t\t\r\n\t\t</mat-form-field>\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"start()\" cdkFocusInitial>Começar</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ data.title }}</h1>\r\n<div mat-dialog-content>\r\n\t<p [innerHTML]=\"data.message\"></p>\r\n\t<form [formGroup]=\"formContingency\">\r\n\t\t<mat-form-field>\r\n\t\t\t<mat-label>Ação</mat-label>\r\n\t\t\t<mat-select formControlName=\"acao\">\r\n\t\t\t\t<mat-option value=\"Finalizar\">Finalizar</mat-option>\r\n\t\t\t\t<mat-option value=\"TransferirFila\" *ngIf=\"statusIdManagerialView !== '10'\">Devolver para Fila</mat-option>\r\n\t\t\t\t<mat-option value=\"TransferirUsuario\" *ngIf=\"arrayUsers.length > 0 && statusIdManagerialView !== '10'\">Transferir para um Usuário</mat-option>\r\n\t\t\t\t<mat-option value=\"TriagemManual\">Retornar para Triagem Manual</mat-option>\r\n\t\t\t</mat-select>\r\n\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t</mat-form-field>\r\n\t\t\r\n\t\t<mat-form-field *ngIf=\"formContingency.value.acao === 'TransferirUsuario'\">\r\n\t\t\t<mat-label>Escolha o Usuário</mat-label>\r\n\t\t\t<mat-select formControlName=\"operadorId\">\r\n\t\t\t\t<mat-option *ngFor=\"let user of arrayUsers\" [value]=\"user.id\">{{ user.nomeCompleto }}</mat-option>\r\n\t\t\t</mat-select>\r\n\t\t</mat-form-field>\r\n\t\r\n\t\t<mat-form-field *ngIf=\"formContingency.value.acao === 'Finalizar' || formContingency.value.acao === 'TriagemManual'\">\r\n\t\t\t<textarea formControlName=\"justificativa\" matInput placeholder=\"Descreva o Motivo\"></textarea>\r\n\t\t</mat-form-field>\r\n\t\t\r\n\t\t<span class=\"contingencyValidationErrors\" *ngIf=\"contingencyValidationErrors\">Campo Obrigatório</span>\r\n\t\t\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"dealContingency()\" cdkFocusInitial>Concluir Tratamento</button>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<h1 class=\"mb-3 mt-3\">Triagem Manual</h1>\r\n\t\t<mat-button-toggle-group appearance=\"legacy\" #group=\"matButtonToggleGroup\" value=\"list\">\r\n\t\t\t<mat-button-toggle value=\"list\">\r\n\t\t\t  <mat-icon>list_alt</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t\t<mat-button-toggle value=\"editor\">\r\n\t\t\t  <mat-icon>format_shapes</mat-icon>\r\n\t\t\t</mat-button-toggle>\r\n\t\t  </mat-button-toggle-group>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-8\">\r\n\t\t<div class=\"jumbotron\" [style.height.px]=\"heightJumbotron\">\r\n\t\t\t<div *ngIf=\"group.value == 'list'\">\r\n\t\t\t\t<img class=\"img-fluid\" *ngFor=\"let image of galleries; let i = index\" [src]=\"image.url\" [alt]=\"image.title\" (mouseleave)=\"imageSelected(i)\" />\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"group.value == 'editor'\">\r\n\t\t\t\t<app-image-editor  [imageEditor]=\"imageEditor\"></app-image-editor>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-4\">\r\n\t\t<div id=\"wrap-form\">\r\n\t\t\t<form [formGroup]=\"form\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t<div class=\"radioButtonAdjust pt-2\">\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"documentType\" aria-label=\"Tipo de Documento\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"cpf\" (click)=\"setDocumentType('cpf')\">CPF</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"cnpj\" (click)=\"setDocumentType('cnpj')\">CNPJ</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-4 text-right\">\r\n\t\t\t\t\t\t<button class=\"btn btn-info mb-0\" type=\"button\" (click)=\"seeHistoric()\">Ver Histórico</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"form.value.documentType === 'cpf'\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>CPF</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"cpf\" matInput placeholder=\"Número do CPF\" mask=\"000.000.000-00\"/>\r\n\t\t\t\t\t\t\t\t<mat-error>Digite o CPF corretamente</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" *ngIf=\"form.value.documentType === 'cnpj'\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>CNPJ</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"cnpj\" matInput placeholder=\"Número do CNPJ\" mask=\"00.000.000/0000-00\"/>\r\n\t\t\t\t\t\t\t\t<mat-error>Digite o CNPJ corretamente</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-5\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Agência</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"bankBranch\" matInput placeholder=\"Número da Agência\" mask=\"0000\" />\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-7\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Conta</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"bankAccount\" matInput placeholder=\"Número da Conta\" mask=\"9999999999999\" />\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"operationId\" #operacaoId required (selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n\t\t\t\t\t\t\t\t\t\t{{ operation.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select> \r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Atividade</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"activity\" required (selectionChange)=\"setAtividade()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let activity of activities\" [value]=\"activity\">\r\n\t\t\t\t\t\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"salvar()\">Finalizar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./src/app/models/person-types.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/models/person-types.enum.ts ***!
  \*********************************************/
/*! exports provided: PersonTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonTypes", function() { return PersonTypes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PersonTypes;
(function (PersonTypes) {
    PersonTypes[PersonTypes["AMBOS"] = 1] = "AMBOS";
    PersonTypes[PersonTypes["FISICA"] = 2] = "FISICA";
    PersonTypes[PersonTypes["JURIDICA"] = 3] = "JURIDICA";
})(PersonTypes || (PersonTypes = {}));


/***/ }),

/***/ "./src/app/models/post-manual-sorting.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/post-manual-sorting.model.ts ***!
  \*****************************************************/
/*! exports provided: PostManualSorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostManualSorting", function() { return PostManualSorting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PostManualSorting {
}


/***/ }),

/***/ "./src/app/models/status-analyse.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/models/status-analyse.enum.ts ***!
  \***********************************************/
/*! exports provided: StatusAnalyse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusAnalyse", function() { return StatusAnalyse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var StatusAnalyse;
(function (StatusAnalyse) {
    StatusAnalyse["Pendente"] = "-1";
    StatusAnalyse["Aguardando An\u00E1lise"] = "1";
    StatusAnalyse["Em An\u00E1lise"] = "2";
    StatusAnalyse["Aprovado"] = "5";
    StatusAnalyse["Reprovado"] = "4";
    StatusAnalyse["Postergado"] = "3";
    StatusAnalyse["Conclu\u00EDdo"] = "6";
    StatusAnalyse["Cancelado"] = "9";
    StatusAnalyse["Aguardando Carga"] = "10";
})(StatusAnalyse || (StatusAnalyse = {}));


/***/ }),

/***/ "./src/app/modules/operation/analyse-detail/analyze-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/operation/analyse-detail/analyze-detail.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 2rem;\n}\n\n.boxInfo {\n  margin: 20px 0;\n  background-color: #ECEFF1;\n  padding: 20px;\n  border-width: 3px;\n  border-style: double;\n  border-color: #CFD8DC;\n}\n\n.boxInfo label {\n  color: #455A64;\n  font-weight: bold;\n  display: block;\n}\n\n.boxInfo .btn {\n  margin-right: 20px;\n}\n\n.boxInfo .btn:last-child {\n  margin-right: 0;\n}\n\n.actions {\n  margin-top: 15px;\n}\n\n.actions label {\n  color: #455A64;\n  font-weight: bold;\n  display: block;\n}\n\n.actions .checkbox {\n  margin-right: 30px;\n}\n\n.actions .checkbox:last-child {\n  margin-right: 0;\n}\n\n.alert-danger {\n  margin-top: 20px;\n}\n\n.alert-danger label {\n  font-weight: bold;\n  display: block;\n}\n\n.alert-danger ul {\n  padding-left: 15px;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vYW5hbHlzZS1kZXRhaWwvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxcYW5hbHlzZS1kZXRhaWxcXGFuYWx5emUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9hbmFseXNlLWRldGFpbC9hbmFseXplLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjs7QURFSTtFQUNJLGtCQUFBO0FDQVI7O0FEQ1E7RUFDSSxlQUFBO0FDQ1o7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7QUNEUjs7QURFUTtFQUNJLGVBQUE7QUNBWjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FESUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3BlcmF0aW9uL2FuYWx5c2UtZGV0YWlsL2FuYWx5emUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uYm94SW5mbyB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICAgIGJvcmRlci1jb2xvcjogI0NGRDhEQztcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM0NTVBNjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjNDU1QTY0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn0iLCJoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmJveEluZm8ge1xuICBtYXJnaW46IDIwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUZGMTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBib3JkZXItY29sb3I6ICNDRkQ4REM7XG59XG4uYm94SW5mbyBsYWJlbCB7XG4gIGNvbG9yOiAjNDU1QTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYm94SW5mbyAuYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmJveEluZm8gLmJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYWN0aW9ucyBsYWJlbCB7XG4gIGNvbG9yOiAjNDU1QTY0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYWN0aW9ucyAuY2hlY2tib3gge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uYWN0aW9ucyAuY2hlY2tib3g6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYWxlcnQtZGFuZ2VyIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFsZXJ0LWRhbmdlciB1bCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/operation/analyse-detail/analyze-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/operation/analyse-detail/analyze-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: AnalyzeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeDetailComponent", function() { return AnalyzeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_esteira_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/esteira.service */ "./src/app/modules/operation/services/esteira.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/template-types.enum */ "./src/app/models/template-types.enum.ts");






let AnalyzeDetailComponent = class AnalyzeDetailComponent {
    constructor(activatedRoute, esteiraService, dialog) {
        this.activatedRoute = activatedRoute;
        this.esteiraService = esteiraService;
        this.dialog = dialog;
        this.loading = false;
        this.galleries = [];
        this.type = src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_5__["TemplateTypes"].VIEW;
        this.anexos = [];
    }
    ngOnInit() {
        this.analyzeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.atividade = { nome: "", id: Number(this.activatedRoute.snapshot.paramMap.get('atividadeId')) };
        this.getNewItem(this.analyzeId);
    }
    ngOnDestroy() {
        localStorage.removeItem('displayImages');
    }
    getNewItem(idActivity) {
        this.esteiraService.getAnalyse(idActivity).subscribe(response => {
            const analyze = Object.assign({}, response.data.analyze.root);
            const template = JSON.parse(JSON.stringify(response.data.template));
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
            this.galleries = response.data.galleries;
            this.status = response.data.status;
            this.anexos = response.data.anexo;
        });
    }
};
AnalyzeDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_esteira_service__WEBPACK_IMPORTED_MODULE_3__["EsteiraService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
AnalyzeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analyze-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analyze-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyse-detail/analyze-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./analyze-detail.component.scss */ "./src/app/modules/operation/analyse-detail/analyze-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_esteira_service__WEBPACK_IMPORTED_MODULE_3__["EsteiraService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], AnalyzeDetailComponent);



/***/ }),

/***/ "./src/app/modules/operation/analyze/analyze.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/operation/analyze/analyze.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".boxInfo {\n  margin: 20px 0;\n  background-color: #ECEFF1;\n  padding: 20px;\n  border-width: 3px;\n  border-style: double;\n  border-color: #CFD8DC;\n}\n.boxInfo label {\n  color: #455A64;\n  font-weight: bold;\n  display: block;\n}\n.boxInfo .btn {\n  margin-right: 20px;\n}\n.boxInfo .btn:last-child {\n  margin-right: 0;\n}\nh1 {\n  font-size: 2rem;\n}\n.noItens h1 {\n  margin-top: 30px;\n  font-size: 32px;\n  color: #455A64;\n}\n.noItens .progress-bar {\n  width: 50%;\n  margin: 50px auto 0;\n}\n.min-height-70 {\n  min-height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vYW5hbHl6ZS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcb3BlcmF0aW9uXFxhbmFseXplXFxhbmFseXplLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9hbmFseXplL2FuYWx5emUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FESUE7RUFDSSxlQUFBO0FDREo7QURLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGUjtBRElJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDRlI7QURNQTtFQUNJLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9hbmFseXplL2FuYWx5emUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94SW5mbyB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcclxuICAgIGJvcmRlci1jb2xvcjogI0NGRDhEQztcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM0NTVBNjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm5vSXRlbnMge1xyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDU1QTY0O1xyXG4gICAgfVxyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDUwcHggYXV0byAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWluLWhlaWdodC03MCB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4iLCIuYm94SW5mbyB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1jb2xvcjogI0NGRDhEQztcbn1cbi5ib3hJbmZvIGxhYmVsIHtcbiAgY29sb3I6ICM0NTVBNjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5ib3hJbmZvIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYm94SW5mbyAuYnRuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubm9JdGVucyBoMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM0NTVBNjQ7XG59XG4ubm9JdGVucyAucHJvZ3Jlc3MtYmFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcbn1cblxuLm1pbi1oZWlnaHQtNzAge1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/analyze/analyze.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/operation/analyze/analyze.component.ts ***!
  \****************************************************************/
/*! exports provided: AnalyzeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeComponent", function() { return AnalyzeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_esteira_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/esteira.service */ "./src/app/modules/operation/services/esteira.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/general-informations.service */ "./src/app/services/general-informations.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _dialog_manual_sorting_dialog_manual_sorting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog-manual-sorting/dialog-manual-sorting.component */ "./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.ts");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models/template-types.enum */ "./src/app/models/template-types.enum.ts");














let AnalyzeComponent = class AnalyzeComponent {
    constructor(fb, esteiraService, router, dialog, generalInformationsService, utilsService) {
        this.fb = fb;
        this.esteiraService = esteiraService;
        this.router = router;
        this.dialog = dialog;
        this.generalInformationsService = generalInformationsService;
        this.utilsService = utilsService;
        this.reasonsToPause = [];
        this.type = src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_13__["TemplateTypes"].ANALYSE;
        this.galleries = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.alertaAtividades = [];
        this.alertaDocumentos = [];
    }
    ngOnInit() {
        this.generalInformationsService.getPauseTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(response => {
            this.reasonsToPause = [...response];
        });
        this.formPauses = this.fb.group({
            pause: [''],
            finishExpedient: [''],
            reasons: [''],
        });
        this.getNewItem();
    }
    ngOnDestroy() {
        clearInterval(this.interval);
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        localStorage.removeItem('displayImages');
    }
    getNewItem() {
        if (this.interval === undefined) {
            this.loading = false;
        }
        this.galleries = [];
        this.template = null;
        this.manualSorting = false;
        this.moduloAnaliseServiceCenter = false;
        localStorage.removeItem('displayImages');
        this.esteiraService.getNextItem().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(response => {
            if (response) {
                clearInterval(this.interval);
                this.esteiraID = response.id;
                if (response.template && response.template.header) {
                    this.agencia = response.template.header.bankBranch;
                    this.documento = response.template.header.docNumber;
                    this.contaCorrente = response.template.header.bankAccount;
                }
                this.galleries = response.galleries;
                this.enableReview = response.enableReview;
                this.alertaAtividades = response.alertaAtividades;
                this.alertaDocumentos = response.alertaDocumentos;
                this.atividade = response.atividade;
                if (response.atividade.id === 90010100) {
                    this.manualSorting = true;
                }
                else if (response.atividade.moduloAnaliseServiceCenter == true) {
                    this.moduloAnaliseServiceCenter = true;
                    this.content = response.content;
                    this.serviceCenterTemplate = response.template;
                }
                else {
                    this.manualSorting = false;
                    /*** Bind dos campos do template mediante carga */
                    if (response.content) {
                        this.content = (response.content.root == undefined
                            ? response.content
                            : response.content.root);
                        response.template.steps.map((step) => {
                            step.fieldGroups.map((fieldGroup) => {
                                fieldGroup.fields.map((field) => {
                                    Object.keys(this.content).forEach((key, index) => {
                                        if (field.dataSource) {
                                            if (key.toUpperCase() === field.dataSource.toUpperCase()) {
                                                if (field.mask !== "") {
                                                    field.value = this.utilsService.adjustMask(field.mask, Object.values(this.content)[index]);
                                                }
                                                else {
                                                    field.value = Object.values(this.content)[index];
                                                }
                                            }
                                        }
                                    });
                                });
                            });
                        });
                    }
                    this.template = response.template;
                }
                this.loading = false;
            }
            else {
                if (this.interval === undefined) {
                    this.waitNewItem();
                }
            }
        }, () => {
            setTimeout(() => {
                this.getNewItem();
            }, 3000);
        });
    }
    waitNewItem() {
        this.interval = setInterval(() => {
            this.getNewItem();
        }, 3000);
    }
    submit(body) {
        body.receberProximo = false;
        body.templateVersaoId = this.template.templateVersaoId;
        body = this.setPauseConfigurations(body);
        this.loading = true;
        if (body.statusId) {
            this.esteiraService.postAnalyse(body, this.esteiraID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                this.loading = false;
                const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
                dialog.title = "Sucesso!";
                dialog.message = "Análise concluída com sucesso.";
                dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
                this.showMessage(dialog);
                this.dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                    this.navigateHome(body);
                }, () => {
                    this.loading = false;
                    this.errorMessage(null);
                });
            }, (error) => {
                this.loading = false;
                const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
                dialog.title = "Análise não concluída";
                dialog.message = error.error.message;
                dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
                this.showMessage(dialog);
            });
        }
        else {
            this.navigateHome(body);
        }
    }
    submitServiceCenter(body) {
        body = this.setPauseConfigurations(body);
        this.loading = true;
        if (body.statusId) {
            this.esteiraService.postAnalyse(body, this.esteiraID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                this.loading = false;
                const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
                dialog.title = "Sucesso!";
                dialog.message = "Análise concluída com sucesso.";
                dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
                this.showMessage(dialog);
                this.dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                    this.navigateHome(body);
                }, () => {
                    this.loading = false;
                    this.errorMessage(null);
                });
            }, (error) => {
                this.loading = false;
                const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
                dialog.title = "Análise não concluída";
                dialog.message = error.error.message;
                dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
                this.showMessage(dialog);
            });
        }
        else {
            this.navigateHome(body);
        }
    }
    navigateHome(body) {
        if (body.entrarPausa || body.finalizarExpediente) {
            this.router.navigate(['/inicial/home']);
        }
        else {
            this.getNewItem();
        }
    }
    submitManualSorting(body) {
        if (this.validationsToSubmit()) {
            body = this.setPauseConfigurations(body);
            this.loading = true;
            this.esteiraService.postManualSorting(body, this.esteiraID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
                this.loading = false;
                dialog.title = "Sucesso!";
                dialog.message = "Análise concluída com sucesso.";
                dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
                this.showMessage(dialog);
                this.dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                    this.navigateHome(body);
                }, () => {
                    this.loading = false;
                    this.errorMessage(null);
                });
            }, error => {
                this.loading = false;
                if (error.status === 404 && error.error.code === 'SemCarga') {
                    const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
                    dialog.title = "Atenção";
                    dialog.message = `${error.error.message}. <br />O que deseja fazer?`;
                    dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].CONFIRMATION;
                    this.showMessage(dialog);
                    this.dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(response => {
                        if (response !== 'cancel') {
                            this.loading = true;
                            body.doMatch = false;
                            if (response === 'contingency') {
                                body.isContingencia = true;
                            }
                            this.esteiraService.postManualSorting(body, this.esteiraID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.ngUnsubscribe)).subscribe(() => {
                                this.loading = false;
                                if (body.entrarPausa || body.finalizarExpediente) {
                                    this.router.navigate(['/inicial/home']);
                                }
                                else {
                                    this.getNewItem();
                                }
                            }, () => {
                                this.loading = false;
                                this.errorMessage(null);
                            });
                        }
                    });
                }
                else {
                    this.loading = false;
                    this.errorMessage(error.error.message);
                }
            });
        }
    }
    setPauseConfigurations(body) {
        if (this.formPauses.value.pause) {
            body.entrarPausa = true;
            body.finalizarExpediente = false;
            body.tipoPausaId = this.formPauses.value.reasons;
        }
        else if (this.formPauses.value.finishExpedient) {
            body.entrarPausa = false;
            body.finalizarExpediente = true;
            delete body.tipoPausaId;
        }
        else {
            body.entrarPausa = false;
            body.finalizarExpediente = false;
        }
        return body;
    }
    validationsToSubmit() {
        if (this.formPauses.value.pause && this.formPauses.value.reasons === "") {
            const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
            dialog.title = "Motivo da Pausa";
            dialog.message = "Selecione o motivo pelo qual você vai entrar em pausa.";
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
            this.showMessage(dialog);
            return false;
        }
        return true;
    }
    errorMessage(message = null) {
        if (message == null)
            message = 'Não foi possível concluir a análise.';
        const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_12__["Dialog"]();
        dialog.title = "Erro";
        dialog.message = message;
        dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
        this.showMessage(dialog);
    }
    showMessage(dialog) {
        this.dialogRef = this.dialog.open(_dialog_manual_sorting_dialog_manual_sorting_component__WEBPACK_IMPORTED_MODULE_11__["DialogManualSortingComponent"], {
            width: '600px',
            disableClose: true,
            data: {
                title: dialog.title,
                message: dialog.message,
                type: dialog.type,
            }
        });
    }
    setPause(event) {
        if (event.checked) {
            this.formPauses.get('finishExpedient').disable();
        }
        else {
            this.formPauses.get('finishExpedient').enable();
        }
    }
    setFinishExpedient(event) {
        if (!event.checked) {
            this.formPauses.get('pause').enable();
        }
        else {
            this.formPauses.get('pause').disable();
        }
    }
};
AnalyzeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_esteira_service__WEBPACK_IMPORTED_MODULE_2__["EsteiraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInformationsService"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
];
AnalyzeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analyse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analyze.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyze/analyze.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./analyze.component.scss */ "./src/app/modules/operation/analyze/analyze.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _services_esteira_service__WEBPACK_IMPORTED_MODULE_2__["EsteiraService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_7__["GeneralInformationsService"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]])
], AnalyzeComponent);



/***/ }),

/***/ "./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  text-align: center;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\n.mat-dialog-actions {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contingencyValidationErrors {\n  font-size: 0.8em;\n  color: #FF0000;\n  position: relative;\n  top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vYW5hbHl6ZS9kaWFsb2ctbWFudWFsLXNvcnRpbmcvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxcYW5hbHl6ZVxcZGlhbG9nLW1hbnVhbC1zb3J0aW5nXFxkaWFsb2ctbWFudWFsLXNvcnRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvb3BlcmF0aW9uL2FuYWx5emUvZGlhbG9nLW1hbnVhbC1zb3J0aW5nL2RpYWxvZy1tYW51YWwtc29ydGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtBQ0VSOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vYW5hbHl6ZS9kaWFsb2ctbWFudWFsLXNvcnRpbmcvZGlhbG9nLW1hbnVhbC1zb3J0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXAtYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRpbmdlbmN5VmFsaWRhdGlvbkVycm9ycyB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwLWJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcC1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRpbmdlbmN5VmFsaWRhdGlvbkVycm9ycyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjRkYwMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DialogManualSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogManualSortingComponent", function() { return DialogManualSortingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");




let DialogManualSortingComponent = class DialogManualSortingComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    decision(decision) {
        this.dialogRef.close(decision);
    }
};
DialogManualSortingComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogManualSortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-manual-sorting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-manual-sorting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-manual-sorting.component.scss */ "./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"]])
], DialogManualSortingComponent);



/***/ }),

/***/ "./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.cursor_pointer {\n  cursor: pointer;\n}\n\n.mat-dialog-container, mat-dialog-container {\n  padding: 0px !important;\n}\n\n.mat-drawer.mat-drawer-side {\n  z-index: 2;\n  background-color: #E9ECEF;\n}\n\n.mat-drawer.mat-drawer-side {\n  z-index: 2;\n}\n\n.mat-drawer-side {\n  border-right: solid 0px !important;\n}\n\n.btn-close-editor {\n  padding: 4px;\n  color: #ffff;\n  width: 26px;\n  height: 26px;\n  border-radius: 15px;\n}\n\n.image-editor-second-box {\n  border-left: dashed 1px #cecece;\n}\n\n.barraSuperior {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 36px;\n  background-color: #e30613;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-shadow: 0 4px 4px -2px #989898;\n  -moz-box-shadow: 0 4px 4px -2px #989898;\n  -webkit-box-shadow: 0 4px 4px -2px #989898;\n  z-index: 2;\n}\n\n.dp-logotipo {\n  margin-left: 33px;\n}\n\n.welcome {\n  margin-right: 46px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vZGlzcGxheS1pbWFnZXMvZGlhbG9nLWltYWdlLWVkaXQvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxcZGlzcGxheS1pbWFnZXNcXGRpYWxvZy1pbWFnZS1lZGl0XFxkaWFsb2ctaW1hZ2UtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vZGlzcGxheS1pbWFnZXMvZGlhbG9nLWltYWdlLWVkaXQvZGlhbG9nLWltYWdlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDSjs7QURFRTtFQUNJLGVBQUE7QUNDTjs7QURFRTtFQUNFLHVCQUFBO0FDQ0o7O0FER0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0FDQUY7O0FER0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNFLCtCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9kaXNwbGF5LWltYWdlcy9kaWFsb2ctaW1hZ2UtZWRpdC9kaWFsb2ctaW1hZ2UtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXJzb3JfcG9pbnRlcntcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyLCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIFxyXG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXNpZGUge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1zaWRlIHtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWNsb3NlLWVkaXRvcntcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmltYWdlLWVkaXRvci1zZWNvbmQtYm94IHtcclxuICBib3JkZXItbGVmdDogZGFzaGVkIDFweCAjY2VjZWNlO1xyXG59XHJcblxyXG4uYmFycmFTdXBlcmlvcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMzA2MTM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4OyBcclxuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4ICM5ODk4OTg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmRwLWxvZ290aXBve1xyXG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xyXG59XHJcblxyXG4ud2VsY29tZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jdXJzb3JfcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyLCBtYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXNpZGUge1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xufVxuXG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXNpZGUge1xuICB6LWluZGV4OiAyO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jbG9zZS1lZGl0b3Ige1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjZmZmZjtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmltYWdlLWVkaXRvci1zZWNvbmQtYm94IHtcbiAgYm9yZGVyLWxlZnQ6IGRhc2hlZCAxcHggI2NlY2VjZTtcbn1cblxuLmJhcnJhU3VwZXJpb3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzMDYxMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4O1xuICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4ICM5ODk4OTg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggIzk4OTg5ODtcbiAgei1pbmRleDogMjtcbn1cblxuLmRwLWxvZ290aXBvIHtcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XG59XG5cbi53ZWxjb21lIHtcbiAgbWFyZ2luLXJpZ2h0OiA0NnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DialogImageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogImageEditComponent", function() { return DialogImageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogImageEditComponent = class DialogImageEditComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.state = 'default';
    }
    ngOnInit() {
        const imageEditor = {
            images: this.data.images,
            indiceSelected: this.data.indiceSelected,
            compare: this.data.compare
        };
        this.imageEditor = imageEditor;
        let indiceCompare = 0;
        if (this.imageEditor.images.length == 1) {
            indiceCompare = this.data.indiceSelected;
        }
        else if (this.data.indiceSelected < (this.imageEditor.images.length - 1)) {
            indiceCompare = this.data.indiceSelected + 1;
        }
        else {
            indiceCompare = this.data.indiceSelected - 1;
        }
        const imageEditorCampare = {
            images: this.data.images,
            indiceSelected: indiceCompare,
            compare: this.data.compare
        };
        this.imageEditorCampare = imageEditorCampare;
    }
    close() {
        this.dialogRef.close();
    }
};
DialogImageEditComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogImageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-image-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-image-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-image-edit.component.scss */ "./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogImageEditComponent);



/***/ }),

/***/ "./src/app/modules/operation/display-images/display-images.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/operation/display-images/display-images.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  background-color: #e30613;\n  color: #ffffff;\n  padding: 4px;\n  z-index: 4;\n  position: relative;\n  box-shadow: 0 4px 4px -2px #989898;\n  -moz-box-shadow: 0 4px 4px -2px #989898;\n  -webkit-box-shadow: 0 4px 4px -2px #989898;\n}\nheader .logotipo {\n  height: 30px;\n  margin-left: 15px;\n}\nheader .title {\n  font-size: 20px;\n  font-family: \"Roboto\", sans-serif;\n}\n.bg {\n  background-color: #CFD8DC;\n  height: auto;\n}\n.wrappImages {\n  overflow-y: scroll;\n  padding-right: 10px;\n}\n.wrappImages::-webkit-scrollbar {\n  height: 4px;\n  width: 4px;\n}\n.wrappImages::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.26);\n}\n.thumbinails .item {\n  margin-bottom: 15px;\n  text-align: center;\n}\n.thumbinails .item img.active {\n  border: 2px solid red;\n  box-sizing: content-box;\n}\n.thumbinails span {\n  display: block;\n  color: #546E7A;\n}\n.images img {\n  margin-bottom: 15px;\n}\n.images mat-spinner::ng-deep {\n  position: absolute;\n  left: 45%;\n  top: 20%;\n}\n.barraSuperior {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 36px;\n  background-color: #e30613;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  box-shadow: 0 4px 4px -2px #989898;\n  -moz-box-shadow: 0 4px 4px -2px #989898;\n  -webkit-box-shadow: 0 4px 4px -2px #989898;\n}\n.dp-logotipo {\n  margin-left: 33px;\n}\n.welcome {\n  margin-right: 46px;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 14px;\n}\n.mat-dialog-container, mat-dialog-container {\n  padding: 0px !important;\n}\n.img-fluid {\n  cursor: pointer;\n}\n.mat-icon {\n  color: #ffff;\n  cursor: pointer;\n  font-size: 24px;\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vZGlzcGxheS1pbWFnZXMvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxcZGlzcGxheS1pbWFnZXNcXGRpc3BsYXktaW1hZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9kaXNwbGF5LWltYWdlcy9kaXNwbGF5LWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtBQ0FSO0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSwrQkFBQTtBQ0RKO0FES0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURJUTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUNGWjtBREtJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNIUjtBRFFJO0VBQ0ksbUJBQUE7QUNMUjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0xSO0FEU0E7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUNOSjtBRFFBO0VBQ0ksaUJBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTEo7QURRQTtFQUNJLHVCQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7QUNMSjtBRFFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9kaXNwbGF5LWltYWdlcy9kaXNwbGF5LWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMwNjEzO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggIzk4OTg5ODtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggIzk4OTg5ODtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggIzk4OTg5ODtcclxuXHJcbiAgICAubG9nb3RpcG8ge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ud3JhcHBJbWFnZXMge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLndyYXBwSW1hZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbn1cclxuXHJcbi53cmFwcEltYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMjYpO1xyXG59XHJcblxyXG4udGh1bWJpbmFpbHMge1xyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZy5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjNTQ2RTdBO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1hZ2VzIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIG1hdC1zcGlubmVyOjpuZy1kZWVwIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFycmFTdXBlcmlvcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMzA2MTM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4ICM5ODk4OTg7IFxyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4O1xyXG59XHJcbi5kcC1sb2dvdGlwb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzM3B4O1xyXG59XHJcblxyXG4ud2VsY29tZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciwgbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctZmx1aWQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMwNjEzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNHB4O1xuICB6LWluZGV4OiA0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4ICM5ODk4OTg7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggIzk4OTg5ODtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4O1xufVxuaGVhZGVyIC5sb2dvdGlwbyB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ud3JhcHBJbWFnZXMge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi53cmFwcEltYWdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDRweDtcbn1cblxuLndyYXBwSW1hZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi50aHVtYmluYWlscyAuaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aHVtYmluYWlscyAuaXRlbSBpbWcuYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi50aHVtYmluYWlscyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNTQ2RTdBO1xufVxuXG4uaW1hZ2VzIGltZyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uaW1hZ2VzIG1hdC1zcGlubmVyOjpuZy1kZWVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0NSU7XG4gIHRvcDogMjAlO1xufVxuXG4uYmFycmFTdXBlcmlvciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTMwNjEzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCAtMnB4ICM5ODk4OTg7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggNHB4IC0ycHggIzk4OTg5ODtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA0cHggLTJweCAjOTg5ODk4O1xufVxuXG4uZHAtbG9nb3RpcG8ge1xuICBtYXJnaW4tbGVmdDogMzNweDtcbn1cblxuLndlbGNvbWUge1xuICBtYXJnaW4tcmlnaHQ6IDQ2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciwgbWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmltZy1mbHVpZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1pY29uIHtcbiAgY29sb3I6ICNmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/operation/display-images/display-images.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/operation/display-images/display-images.component.ts ***!
  \******************************************************************************/
/*! exports provided: DisplayImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayImagesComponent", function() { return DisplayImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/autentication.service */ "./src/app/services/autentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_image_edit_dialog_image_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-image-edit/dialog-image-edit.component */ "./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");







let DisplayImagesComponent = class DisplayImagesComponent {
    constructor(autenticationService, dialog) {
        this.autenticationService = autenticationService;
        this.dialog = dialog;
        this.loading = true;
        this.mediaGallery = [];
        this.heightWrapper = 0;
        this.indexActive = 0;
        autenticationService.$loggedSubject.next(false);
    }
    mouseMove(idImage, item) {
        this.indexActive = item;
        if (this.activeImage != idImage) {
            const thumb = document.getElementById("thumb_" + idImage);
            thumb.scrollIntoView();
            this.activeImage = idImage;
        }
    }
    ngOnInit() {
        this.user = this.autenticationService.getDataUser();
        const displayImages = JSON.parse(localStorage.getItem('displayImages'));
        this.document = displayImages.document;
        this.mediaGallery = displayImages.images;
        this.document = displayImages.document;
        this.heightWrapper = window.innerHeight - 54;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
        setInterval(() => {
            if (!localStorage.getItem('displayImages')) {
                window.close();
            }
        }, 1000);
    }
    ngOnDestroy() {
        localStorage.removeItem('displayImages');
    }
    compare() {
        this.openModalEdit(this.indexActive, true);
    }
    setPosition(item) {
        this.indexActive = item;
        this.wrappImages.nativeElement.scrollTop = this.images.find((el, index) => index === item).nativeElement.offsetTop - 20;
    }
    onResize() {
        this.heightWrapper = window.innerHeight - 54;
    }
    openModalEdit(indiceSelected, compare) {
        const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_6__["Dialog"]();
        dialog.title = "Visualizar Imagem";
        dialog.message = "Editar Imagem.";
        dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].CONFIRMATION;
        const dialogRef = this.dialog.open(_dialog_image_edit_dialog_image_edit_component__WEBPACK_IMPORTED_MODULE_4__["DialogImageEditComponent"], {
            height: '100%',
            width: '100%',
            maxWidth: '100%',
            panelClass: 'image-edit-panel',
            data: {
                images: this.mediaGallery,
                indiceSelected: indiceSelected,
                compare: compare
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
            }
        }, () => {
        });
    }
};
DisplayImagesComponent.ctorParameters = () => [
    { type: src_app_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wrappImages', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DisplayImagesComponent.prototype, "wrappImages", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('images'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], DisplayImagesComponent.prototype, "images", void 0);
DisplayImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-images',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/display-images/display-images.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display-images.component.scss */ "./src/app/modules/operation/display-images/display-images.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], DisplayImagesComponent);



/***/ }),

/***/ "./src/app/modules/operation/fases-tfc/fases-tfc.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/operation/fases-tfc/fases-tfc.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".first-column {\n  width: 8%;\n}\n\n.mouse-pointer {\n  cursor: pointer;\n}\n\n.custom-link {\n  color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vZmFzZXMtdGZjL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxvcGVyYXRpb25cXGZhc2VzLXRmY1xcZmFzZXMtdGZjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9mYXNlcy10ZmMvZmFzZXMtdGZjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vZmFzZXMtdGZjL2Zhc2VzLXRmYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDglO1xyXG59XHJcblxyXG4ubW91c2UtcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b20tbGlua3tcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59IiwiLmZpcnN0LWNvbHVtbiB7XG4gIHdpZHRoOiA4JTtcbn1cblxuLm1vdXNlLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tbGluayB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/fases-tfc/fases-tfc.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/operation/fases-tfc/fases-tfc.component.ts ***!
  \********************************************************************/
/*! exports provided: FasesTfcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FasesTfcComponent", function() { return FasesTfcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _services_alteracao_fases_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/alteracao-fases.service */ "./src/app/modules/operation/services/alteracao-fases.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");










let FasesTfcComponent = class FasesTfcComponent {
    constructor(formBuilder, alteracaoFasesService, matSnackBar, dialog) {
        this.formBuilder = formBuilder;
        this.alteracaoFasesService = alteracaoFasesService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.loading = false;
        this.tipos = [];
        this.status = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['etiqueta', 'agencia', 'contaCorrente', 'documento', 'dataCadastro', 'tipoAlteracaoFase', 'status', 'motivoRPA', 'actions'];
        this.today = new Date();
        /** Paginator */
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            tipoId: [''],
            statusId: [''],
            dataInicial: [''],
            dataFinal: [''],
        });
        this.getTipoStatus();
    }
    getAlteracaoFases(paginacao) {
        if (this.form.valid) {
            this.loading = true;
            const formValues = this.form.value;
            const dataInicial = formValues.dataInicial !== "" && formValues.dataInicial !== null ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(formValues.dataInicial)).format('YYYY-MM-DD') : "";
            const dataFinal = formValues.dataFinal !== "" && formValues.dataFinal !== null ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(formValues.dataFinal)).format('YYYY-MM-DD') : "";
            if (!paginacao) {
                this.pageIndex = 0;
            }
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            const tipoId = (formValues.tipoId == undefined ? '' : formValues.tipoId);
            const statusId = (formValues.statusId == undefined ? '' : formValues.statusId);
            this.alteracaoFasesService.get(tipoId, statusId, dataInicial, dataFinal, pageIndex, pageSize).subscribe(response => {
                this.dataSource.data = response.data;
                this.dataSource.paginator = this.paginator;
                this.length = response.length;
                this.loading = false;
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loading = false;
            });
        }
    }
    getTipoStatus() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.alteracaoFasesService.getTipos(), this.alteracaoFasesService.getStatus()).subscribe(([_tipos, _status]) => {
            this.tipos = _tipos.data;
            this.status = _status.data;
            //set default
            this.form.get("statusId").setValue(6);
            this.getAlteracaoFases(false);
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    setPageSizeOptions(event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getAlteracaoFases(true);
    }
    openModal(registro, id) {
        this.dialogReference = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            width: '600px',
            data: {
                title: "Confirmar Tratamento Manual",
                message: "Confirmo que acessei o sistema TFC e fiz o tratamento manual do seguinte registro: " + registro,
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_9__["DialogTypes"].CONFIRMATION
            }
        });
        this.dialogReference.afterClosed().subscribe(result => {
            if (result == undefined) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, "Ação cancelada pelo usuário!");
            }
            else if (result === 'ok') {
                this.alteracaoFasesService.putAlterarFase(id).subscribe(() => {
                    this.getAlteracaoFases(false);
                }, error => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
                });
            }
        });
    }
};
FasesTfcComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_alteracao_fases_service__WEBPACK_IMPORTED_MODULE_7__["AlteracaoFasesService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], FasesTfcComponent.prototype, "paginator", void 0);
FasesTfcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fases-tfc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fases-tfc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/fases-tfc/fases-tfc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fases-tfc.component.scss */ "./src/app/modules/operation/fases-tfc/fases-tfc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_alteracao_fases_service__WEBPACK_IMPORTED_MODULE_7__["AlteracaoFasesService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], FasesTfcComponent);



/***/ }),

/***/ "./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3BlcmF0aW9uL21hbmFnZXJpYWwtdmlldy1kZXRhaWwvbWFuYWdlcmlhbC12aWV3LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ManagerialViewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerialViewDetailComponent", function() { return ManagerialViewDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_managerial_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managerial-view.service */ "./src/app/modules/operation/services/managerial-view.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/general-informations.service */ "./src/app/services/general-informations.service.ts");
/* harmony import */ var _services_esteira_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/esteira.service */ "./src/app/modules/operation/services/esteira.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_dialog_contingency_dialog_contingency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/dialog-contingency/dialog-contingency.component */ "./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.ts");













let ManagerialViewDetailComponent = class ManagerialViewDetailComponent {
    constructor(activatedRoute, managerialViewService, dialog, generalInformationsService, esteiraService, router) {
        this.activatedRoute = activatedRoute;
        this.managerialViewService = managerialViewService;
        this.dialog = dialog;
        this.generalInformationsService = generalInformationsService;
        this.esteiraService = esteiraService;
        this.router = router;
        this.loading = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = [
            'esteiraId', 'serviceCenterId', 'proposta', 'processo', 'atividade', 'documento',
            'operador', 'dataCadastro', 'dataAnaliseInicial', 'dataAnaliseFinal', 'action'
        ];
        this.showErrorMessage = false;
    }
    ngOnInit() {
        this.type = this.activatedRoute.snapshot.paramMap.get('type');
        this.operationId = this.activatedRoute.snapshot.paramMap.get('operationId');
        this.activityId = this.activatedRoute.snapshot.paramMap.get('activityId');
        this.statusId = this.activatedRoute.snapshot.paramMap.get('statusId');
        this.statusName = this.getStatusName(this.statusId);
    }
    ngAfterViewInit() {
        this.getData();
        if (this.paginator) {
            this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.getData())).subscribe();
        }
    }
    getData() {
        this.loading = true;
        const pageIndex = this.paginator ? (this.paginator.pageIndex + 1) : 1;
        const pageSize = this.paginator ? this.paginator.pageSize : 5;
        if (this.type === "operacao") {
            this.managerialViewService.getDetailManagerialViewOperation(this.operationId, this.statusId, pageSize, pageIndex).subscribe(response => {
                if (response.data.length > 0) {
                    this.operationName = response.data[0].operacao;
                    this.activityName = "Todas";
                    this.totalItens = response.length;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response.data);
                    this.showErrorMessage = false;
                    this.loading = false;
                }
                else {
                    this.showErrorMessage = true;
                    this.loading = false;
                }
            });
        }
        else if (this.type === "atividade") {
            this.managerialViewService.getDetailManagerialViewActivity(this.operationId, this.activityId, this.statusId, pageSize, pageIndex).subscribe(response => {
                if (response.data.length > 0) {
                    this.operationName = response.data[0].operacao;
                    this.activityName = response.data[0].atividade;
                    this.totalItens = response.length;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](response.data);
                    this.showErrorMessage = false;
                    this.loading = false;
                }
                else {
                    this.showErrorMessage = true;
                    this.loading = false;
                }
            });
        }
    }
    getStatusName(status) {
        switch (status) {
            case "0":
                return "Atendidas Hoje";
            case "1":
                return "Aguardando Análise";
            case "2":
                return "Em Análise";
            case "3":
                return "Postergado";
            case "8":
                return "Em Contingência";
            case "10":
                return "Carga Pendente";
            default:
                break;
        }
    }
    formatDocument(document) {
        if (document && document.length === 14) {
            return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
        }
        else if (document && document.length === 11) {
            return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
        }
        else {
            return document;
        }
    }
    toDeal(element) {
        this.generalInformationsService.getUsersByLine(element.filaId).subscribe(response => {
            const dialogRef = this.dialog.open(_shared_dialog_contingency_dialog_contingency_component__WEBPACK_IMPORTED_MODULE_11__["DialogContingencyComponent"], {
                width: '600px',
                data: {
                    title: `Tratar ${this.getStatusName(this.statusId)}`,
                    message: "Escolha abaixo o que deseja fazer com este processo",
                    type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].CONTINGENCY,
                    statusId: this.statusId,
                    users: response
                }
            });
            dialogRef.afterClosed().subscribe(response => {
                if (response !== undefined) {
                    if (response.acao === "Finalizar") {
                        delete response.operadorId;
                    }
                    this.esteiraService.finalizeContingencie(element.esteiraId, response).subscribe(() => {
                        this.getData();
                    }, error => {
                        this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
                            width: '600px',
                            data: {
                                title: "Atenção",
                                message: error.error.message,
                                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].INFORMATION
                            }
                        });
                    });
                }
            });
        });
    }
    setAtividadeEsteira(element) {
        this.loading = true;
        this.esteiraService.putUpdateActivity(element.esteiraId, 90010100).subscribe(() => rxjs__WEBPACK_IMPORTED_MODULE_10__["noop"], error => {
            this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
                data: {
                    title: "Atenção",
                    message: error.error.message,
                    type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].INFORMATION
                },
                width: '600px'
            });
        });
        this.router.navigate(['/operacao/visao-gerencial/']);
        this.loading = false;
    }
};
ManagerialViewDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_managerial_view_service__WEBPACK_IMPORTED_MODULE_4__["ManagerialViewService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_8__["GeneralInformationsService"] },
    { type: _services_esteira_service__WEBPACK_IMPORTED_MODULE_9__["EsteiraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], ManagerialViewDetailComponent.prototype, "paginator", void 0);
ManagerialViewDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managerial-view-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managerial-view-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managerial-view-detail.component.scss */ "./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_managerial_view_service__WEBPACK_IMPORTED_MODULE_4__["ManagerialViewService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_8__["GeneralInformationsService"],
        _services_esteira_service__WEBPACK_IMPORTED_MODULE_9__["EsteiraService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ManagerialViewDetailComponent);



/***/ }),

/***/ "./src/app/modules/operation/managerial-view/managerial-view.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/operation/managerial-view/managerial-view.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemDashMV {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n.itemDashMV .row {\n  width: 100%;\n}\n.itemDashMV .iconDash {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.itemDashMV .iconDash i {\n  font-size: 40px;\n  color: #E53935;\n}\n.itemDashMV .datas {\n  display: inline-block;\n}\n.itemDashMV .datas .title {\n  display: block;\n  color: #546E7A;\n  text-align: center;\n}\n.itemDashMV .datas .valor {\n  text-align: center;\n  display: block;\n}\nh1 {\n  font-size: 2rem;\n  margin-bottom: 25px;\n}\ntable {\n  width: 100%;\n}\n.cursorPointer {\n  cursor: pointer;\n}\n.cursorPointer:hover {\n  background-color: #B0BEC5;\n}\ntr.example-detail-row {\n  height: 0;\n  background: #ECEFF1;\n}\ntable td.mat-cell, table th.mat-header-cell {\n  padding: 0 24px;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #CFD8DC;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-expanded-row {\n  font-weight: bold;\n  background: #ECEFF1;\n}\n.example-expanded-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.table {\n  margin: 15px auto;\n  box-shadow: 0px 3px 7px 0px #666666;\n  width: 98%;\n}\n.table th {\n  border-bottom: none;\n  background-color: #1565C0;\n  color: #FFFFFF;\n}\n.table tr {\n  background-color: #FFFFFF;\n}\n.table tr:nth-child(even) {\n  background-color: #FAFAFA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vbWFuYWdlcmlhbC12aWV3L0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxvcGVyYXRpb25cXG1hbmFnZXJpYWwtdmlld1xcbWFuYWdlcmlhbC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9tYW5hZ2VyaWFsLXZpZXcvbWFuYWdlcmlhbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtBQ0NSO0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxxQkFBQTtBQ0FSO0FEQ1E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FESUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0FDREo7QURFSTtFQUNJLHlCQUFBO0FDQVI7QURJQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREdJO0VBQ0ksc0JBQUE7QUNEUjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNGSjtBREtBO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNGSjtBREdJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNEUjtBREdJO0VBQ0kseUJBQUE7QUNEUjtBREdRO0VBQ0kseUJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3BlcmF0aW9uL21hbmFnZXJpYWwtdmlldy9tYW5hZ2VyaWFsLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbURhc2hNViB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmljb25EYXNoIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNFNTM5MzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhdGFzIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTQ2RTdBO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YWxvciB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1cnNvclBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IwQkVDNTtcclxuICAgIH1cclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XHJcbn1cclxuXHJcbnRhYmxlIHRkLm1hdC1jZWxsLCB0YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNDRkQ4REM7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAwcHggcmdiYSgxMDIsMTAyLDEwMiwxKTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NUMwO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLml0ZW1EYXNoTVYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaXRlbURhc2hNViAucm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaXRlbURhc2hNViAuaWNvbkRhc2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pdGVtRGFzaE1WIC5pY29uRGFzaCBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI0U1MzkzNTtcbn1cbi5pdGVtRGFzaE1WIC5kYXRhcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pdGVtRGFzaE1WIC5kYXRhcyAudGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM1NDZFN0E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtRGFzaE1WIC5kYXRhcyAudmFsb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1cnNvclBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3Vyc29yUG9pbnRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEJFQzU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcbn1cblxudGFibGUgdGQubWF0LWNlbGwsIHRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNDRkQ4REM7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZXhwYW5kZWQtcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICNFQ0VGRjE7XG59XG4uZXhhbXBsZS1leHBhbmRlZC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAwcHggIzY2NjY2NjtcbiAgd2lkdGg6IDk4JTtcbn1cbi50YWJsZSB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTY1QzA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/managerial-view/managerial-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/operation/managerial-view/managerial-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: ManagerialViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerialViewComponent", function() { return ManagerialViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_managerial_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managerial-view.service */ "./src/app/modules/operation/services/managerial-view.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ManagerialViewComponent = class ManagerialViewComponent {
    constructor(getDataManagerialView, router, activatedRoute) {
        this.getDataManagerialView = getDataManagerialView;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.columnsToDisplay = ['operacaoNome', 'somaAguardandoAnalise', 'somaEmAnalise', 'somaAtendidasHoje', 'somaPostergado', 'somaEmContingencia', 'somaCargaPendente'];
        this.showErrorMessage = false;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.filter = null;
        this.pageConfig = null;
    }
    ngOnInit() {
        const back = this.pageConfig = JSON.parse(this.activatedRoute.snapshot.paramMap.get('back'));
        if (sessionStorage.getItem("visao-gerencial-config") && back == 1) {
            this.pageConfig = JSON.parse(sessionStorage.getItem("visao-gerencial-config"));
        }
        sessionStorage.removeItem("visao-gerencial-config");
        this.loading = true;
        this.getDataManagerialView.getDataManagerialView().subscribe(response => {
            this.managerialView = response;
            let operacoes = response.operacoes;
            operacoes.forEach((element, index) => {
                element['position'] = index;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](operacoes);
            if (this.pageConfig) {
                if (this.pageConfig.pageSize != null && this.pageConfig.pageSize != undefined) {
                    this.pageSize = Number(this.pageConfig.pageSize);
                    this.paginator.pageSize = this.pageSize;
                }
                if (this.pageConfig.pageIndex != null && this.pageConfig.pageIndex != undefined) {
                    this.pageIndex = Number(this.pageConfig.pageIndex);
                    this.paginator.pageIndex = this.pageIndex;
                }
                if (this.pageConfig.filter != null && this.pageConfig.filter != undefined) {
                    this.filter = this.pageConfig.filter;
                    this.dataSource.filter = this.filter.trim().toLowerCase();
                }
                if (this.pageConfig.position != null && this.pageConfig.position != undefined) {
                    this.expand(this.pageConfig.position);
                }
            }
            this.dataSource.paginator = this.paginator;
            this.loading = false;
            this.showErrorMessage = false;
        }, () => {
            this.loading = false;
            this.showErrorMessage = true;
        });
    }
    expand(position) {
        if (this.expandedElement == this.dataSource.data[position]) {
            this.expandedElement = null;
            this.position = null;
        }
        else {
            this.expandedElement = this.dataSource.data[position];
            this.position = position;
        }
    }
    getDetailsOperation(type, operacaoId, atividadeId, indicatorId) {
        let volume;
        if (type === 'operacao') {
            volume = this.managerialView.operacoes.find(operacao => operacao.operacaoId === operacaoId)
                .indicadores.find(indicador => indicador.id === indicatorId).volume;
        }
        if (type === 'atividade') {
            volume = this.managerialView.operacoes.find(operacao => operacao.operacaoId === operacaoId)
                .atividades.find(atividade => atividade.atividadeId === atividadeId)
                .indicadores.find(indicador => indicador.id === indicatorId).volume;
        }
        if (volume > 0) {
            const config = {
                pageSize: this.paginator.pageSize,
                pageIndex: this.paginator.pageIndex,
                filter: this.filter,
                position: this.position
            };
            sessionStorage.setItem("visao-gerencial-config", JSON.stringify(config));
            this.router.navigate(['/operacao/visao-gerencial/detalhes', type, operacaoId, atividadeId, indicatorId]);
        }
    }
    applyFilter() {
        this.dataSource.filter = this.filter.trim().toLowerCase();
    }
};
ManagerialViewComponent.ctorParameters = () => [
    { type: _services_managerial_view_service__WEBPACK_IMPORTED_MODULE_3__["ManagerialViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], ManagerialViewComponent.prototype, "paginator", void 0);
ManagerialViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managerial-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./managerial-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/managerial-view/managerial-view.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./managerial-view.component.scss */ "./src/app/modules/operation/managerial-view/managerial-view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_managerial_view_service__WEBPACK_IMPORTED_MODULE_3__["ManagerialViewService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], ManagerialViewComponent);



/***/ }),

/***/ "./src/app/modules/operation/open-ticket/open-ticket.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/operation/open-ticket/open-ticket.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 2rem;\n}\n\n.noTemplate {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 10%;\n}\n\n.actions {\n  margin-top: 15px;\n}\n\n.actions label {\n  color: #455A64;\n  font-weight: bold;\n  display: block;\n}\n\n.actions .checkbox {\n  margin-right: 30px;\n}\n\n.actions .checkbox:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vb3Blbi10aWNrZXQvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxcb3Blbi10aWNrZXRcXG9wZW4tdGlja2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9vcGVuLXRpY2tldC9vcGVuLXRpY2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQVE7RUFDSSxlQUFBO0FDRVoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9vcGVuLXRpY2tldC9vcGVuLXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm5vVGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICM0NTVBNjQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubm9UZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5hY3Rpb25zIGxhYmVsIHtcbiAgY29sb3I6ICM0NTVBNjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hY3Rpb25zIC5jaGVja2JveCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5hY3Rpb25zIC5jaGVja2JveDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/open-ticket/open-ticket.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/operation/open-ticket/open-ticket.component.ts ***!
  \************************************************************************/
/*! exports provided: OpenTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTicketComponent", function() { return OpenTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_esteira_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/esteira.service */ "./src/app/modules/operation/services/esteira.service.ts");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/template-types.enum */ "./src/app/models/template-types.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _shared_dialog_choice_activity_dialog_choice_activity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/dialog-choice-activity/dialog-choice-activity.component */ "./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.ts");










let OpenTicketComponent = class OpenTicketComponent {
    constructor(dialog, esteiraService, matSnackBar) {
        this.dialog = dialog;
        this.esteiraService = esteiraService;
        this.matSnackBar = matSnackBar;
        this.type = src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_5__["TemplateTypes"].OPEN_TICKET;
        this.listActivity = [];
    }
    ngOnInit() {
        this.esteiraService.getStaticOperations().subscribe(response => {
            this.listActivity = [...response];
            this.choiceActivity();
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    choiceActivity() {
        const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"]();
        dialog.title = "Abertura de Chamado";
        dialog.message = "Escolha a atividade";
        dialog.activities = [...this.listActivity];
        this.dialogRefChoiceAcitivy = this.dialog.open(_shared_dialog_choice_activity_dialog_choice_activity_component__WEBPACK_IMPORTED_MODULE_9__["DialogChoiceActivityComponent"], {
            width: '600px',
            data: dialog
        });
        this.dialogRefChoiceAcitivy.afterClosed().subscribe(response => {
            if (response && response.activity) {
                this.getNewItem(response.activity);
            }
        });
    }
    getNewItem(idActivity) {
        this.loading = true;
        this.esteiraService.getTemplateToStaticOperation(idActivity).subscribe(response => {
            this.loading = false;
            if (response) {
                this.template = response.template;
                this.timestampInicial = new Date().getTime().toString();
                this.activityId = idActivity;
                this.atividade = response.atividade;
            }
        }, error => {
            this.loading = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarComponent"].showError(this.matSnackBar, null, error.error.message);
        });
    }
    submit(body) {
        body.atividadeId = this.activityId;
        body.templateVersaoId = this.template.templateVersaoId;
        body.timestampInicial = this.timestampInicial;
        this.loading = true;
        this.esteiraService.postOpenTicket(body).subscribe(() => {
            this.loading = false;
            const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"]();
            dialog.title = "Sucesso!";
            dialog.message = "Abertura de Chamado concluída com sucesso.";
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].INFORMATION;
            this.showMessage(dialog);
            this.dialogRef.afterClosed().subscribe(() => {
                this.template = null;
                this.choiceActivity();
            });
        }, (error) => {
            this.loading = false;
            const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"]();
            dialog.title = "Análise não concluída";
            dialog.message = error.error.message;
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].INFORMATION;
            this.showMessage(dialog);
        });
    }
    showMessage(dialog) {
        this.dialogRef = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: '600px',
            data: dialog
        });
    }
};
OpenTicketComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_esteira_service__WEBPACK_IMPORTED_MODULE_2__["EsteiraService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
OpenTicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-ticket',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./open-ticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/open-ticket/open-ticket.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./open-ticket.component.scss */ "./src/app/modules/operation/open-ticket/open-ticket.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _services_esteira_service__WEBPACK_IMPORTED_MODULE_2__["EsteiraService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
], OpenTicketComponent);



/***/ }),

/***/ "./src/app/modules/operation/operation-routes.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/operation/operation-routes.guard.ts ***!
  \*************************************************************/
/*! exports provided: OperationRoutesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationRoutesGuard", function() { return OperationRoutesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/autentication.service */ "./src/app/services/autentication.service.ts");



let OperationRoutesGuard = class OperationRoutesGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(event) {
        return this.authenticationService.isPermitted("operacao", event.url[0].path);
    }
};
OperationRoutesGuard.ctorParameters = () => [
    { type: _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"] }
];
OperationRoutesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]])
], OperationRoutesGuard);



/***/ }),

/***/ "./src/app/modules/operation/operation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/operation/operation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OperationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationRoutingModule", function() { return OperationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analyze/analyze.component */ "./src/app/modules/operation/analyze/analyze.component.ts");
/* harmony import */ var _display_images_display_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-images/display-images.component */ "./src/app/modules/operation/display-images/display-images.component.ts");
/* harmony import */ var _open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-ticket/open-ticket.component */ "./src/app/modules/operation/open-ticket/open-ticket.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/modules/operation/search/search.component.ts");
/* harmony import */ var _analyse_detail_analyze_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analyse-detail/analyze-detail.component */ "./src/app/modules/operation/analyse-detail/analyze-detail.component.ts");
/* harmony import */ var _managerial_view_managerial_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./managerial-view/managerial-view.component */ "./src/app/modules/operation/managerial-view/managerial-view.component.ts");
/* harmony import */ var _managerial_view_detail_managerial_view_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./managerial-view-detail/managerial-view-detail.component */ "./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.ts");
/* harmony import */ var _report_builder_report_builder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-builder/report-builder.component */ "./src/app/modules/operation/report-builder/report-builder.component.ts");
/* harmony import */ var _operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operation-routes.guard */ "./src/app/modules/operation/operation-routes.guard.ts");
/* harmony import */ var _report_productivity_report_productivity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./report-productivity/report-productivity.component */ "./src/app/modules/operation/report-productivity/report-productivity.component.ts");
/* harmony import */ var _report_general_analytical_report_general_analytical_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-general-analytical/report-general-analytical.component */ "./src/app/modules/operation/report-general-analytical/report-general-analytical.component.ts");
/* harmony import */ var _fases_tfc_fases_tfc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fases-tfc/fases-tfc.component */ "./src/app/modules/operation/fases-tfc/fases-tfc.component.ts");















const routes = [
    { path: 'analise', component: _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_3__["AnalyzeComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'abrir-chamado', component: _open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_5__["OpenTicketComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'exibir-imagens', component: _display_images_display_images_component__WEBPACK_IMPORTED_MODULE_4__["DisplayImagesComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'pesquisa', component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'detalhes-analise/:id/:atividadeId', component: _analyse_detail_analyze_detail_component__WEBPACK_IMPORTED_MODULE_7__["AnalyzeDetailComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'visao-gerencial', component: _managerial_view_managerial_view_component__WEBPACK_IMPORTED_MODULE_8__["ManagerialViewComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'visao-gerencial/:back', component: _managerial_view_managerial_view_component__WEBPACK_IMPORTED_MODULE_8__["ManagerialViewComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'visao-gerencial/detalhes/:type/:operationId/:activityId/:statusId', component: _managerial_view_detail_managerial_view_detail_component__WEBPACK_IMPORTED_MODULE_9__["ManagerialViewDetailComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'gerenciador-relatorio', component: _report_builder_report_builder_component__WEBPACK_IMPORTED_MODULE_10__["ReportBuilderComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'relatorio-produtividade', component: _report_productivity_report_productivity_component__WEBPACK_IMPORTED_MODULE_12__["ReportProductivityComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'relatorio-geral-analitico', component: _report_general_analytical_report_general_analytical_component__WEBPACK_IMPORTED_MODULE_13__["ReportGeneralAnalyticalComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] },
    { path: 'fases-tfc', component: _fases_tfc_fases_tfc_component__WEBPACK_IMPORTED_MODULE_14__["FasesTfcComponent"], canActivate: [_operation_routes_guard__WEBPACK_IMPORTED_MODULE_11__["OperationRoutesGuard"]] }
];
let OperationRoutingModule = class OperationRoutingModule {
};
OperationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OperationRoutingModule);



/***/ }),

/***/ "./src/app/modules/operation/operation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/operation/operation.module.ts ***!
  \*******************************************************/
/*! exports provided: OperationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationModule", function() { return OperationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-routing.module */ "./src/app/modules/operation/operation-routing.module.ts");
/* harmony import */ var _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analyze/analyze.component */ "./src/app/modules/operation/analyze/analyze.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _display_images_display_images_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-images/display-images.component */ "./src/app/modules/operation/display-images/display-images.component.ts");
/* harmony import */ var _open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./open-ticket/open-ticket.component */ "./src/app/modules/operation/open-ticket/open-ticket.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/modules/operation/search/search.component.ts");
/* harmony import */ var _analyse_detail_analyze_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./analyse-detail/analyze-detail.component */ "./src/app/modules/operation/analyse-detail/analyze-detail.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _managerial_view_managerial_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./managerial-view/managerial-view.component */ "./src/app/modules/operation/managerial-view/managerial-view.component.ts");
/* harmony import */ var _managerial_view_detail_managerial_view_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./managerial-view-detail/managerial-view-detail.component */ "./src/app/modules/operation/managerial-view-detail/managerial-view-detail.component.ts");
/* harmony import */ var _report_builder_report_builder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./report-builder/report-builder.component */ "./src/app/modules/operation/report-builder/report-builder.component.ts");
/* harmony import */ var _report_general_analytical_report_general_analytical_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./report-general-analytical/report-general-analytical.component */ "./src/app/modules/operation/report-general-analytical/report-general-analytical.component.ts");
/* harmony import */ var _analyze_dialog_manual_sorting_dialog_manual_sorting_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./analyze/dialog-manual-sorting/dialog-manual-sorting.component */ "./src/app/modules/operation/analyze/dialog-manual-sorting/dialog-manual-sorting.component.ts");
/* harmony import */ var _analyze_dialog_list_history_dialog_list_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./analyze/dialog-list-history/dialog-list-history.component */ "./src/app/modules/operation/analyze/dialog-list-history/dialog-list-history.component.ts");
/* harmony import */ var _report_productivity_report_productivity_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./report-productivity/report-productivity.component */ "./src/app/modules/operation/report-productivity/report-productivity.component.ts");
/* harmony import */ var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/dateAdapter/customDate.adapter */ "./src/app/shared/dateAdapter/customDate.adapter.ts");
/* harmony import */ var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/dateAdapter/my-date-formats.const */ "./src/app/shared/dateAdapter/my-date-formats.const.ts");
/* harmony import */ var angular_cropperjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-cropperjs */ "./node_modules/angular-cropperjs/fesm2015/angular-cropperjs.js");
/* harmony import */ var _display_images_dialog_image_edit_dialog_image_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./display-images/dialog-image-edit/dialog-image-edit.component */ "./src/app/modules/operation/display-images/dialog-image-edit/dialog-image-edit.component.ts");
/* harmony import */ var _shared_dialog_contingency_dialog_contingency_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/dialog-contingency/dialog-contingency.component */ "./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.ts");
/* harmony import */ var _shared_manual_sorting_manual_sorting_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/manual-sorting/manual-sorting.component */ "./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.ts");
/* harmony import */ var _shared_dialog_choice_activity_dialog_choice_activity_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/dialog-choice-activity/dialog-choice-activity.component */ "./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.ts");
/* harmony import */ var _fases_tfc_fases_tfc_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fases-tfc/fases-tfc.component */ "./src/app/modules/operation/fases-tfc/fases-tfc.component.ts");
/* harmony import */ var _shared_dialog_historico_kit_dialog_historico_kit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/dialog-historico-kit/dialog-historico-kit.component */ "./src/app/modules/operation/shared/dialog-historico-kit/dialog-historico-kit.component.ts");





























let OperationModule = class OperationModule {
};
OperationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_4__["AnalyzeComponent"],
            _display_images_display_images_component__WEBPACK_IMPORTED_MODULE_8__["DisplayImagesComponent"],
            _open_ticket_open_ticket_component__WEBPACK_IMPORTED_MODULE_9__["OpenTicketComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            _analyse_detail_analyze_detail_component__WEBPACK_IMPORTED_MODULE_11__["AnalyzeDetailComponent"],
            _managerial_view_managerial_view_component__WEBPACK_IMPORTED_MODULE_13__["ManagerialViewComponent"],
            _managerial_view_detail_managerial_view_detail_component__WEBPACK_IMPORTED_MODULE_14__["ManagerialViewDetailComponent"],
            _report_builder_report_builder_component__WEBPACK_IMPORTED_MODULE_15__["ReportBuilderComponent"],
            _report_general_analytical_report_general_analytical_component__WEBPACK_IMPORTED_MODULE_16__["ReportGeneralAnalyticalComponent"],
            _analyze_dialog_list_history_dialog_list_history_component__WEBPACK_IMPORTED_MODULE_18__["DialogListHistoryComponent"],
            _report_productivity_report_productivity_component__WEBPACK_IMPORTED_MODULE_19__["ReportProductivityComponent"],
            _analyze_dialog_manual_sorting_dialog_manual_sorting_component__WEBPACK_IMPORTED_MODULE_17__["DialogManualSortingComponent"],
            _display_images_dialog_image_edit_dialog_image_edit_component__WEBPACK_IMPORTED_MODULE_23__["DialogImageEditComponent"],
            _shared_dialog_contingency_dialog_contingency_component__WEBPACK_IMPORTED_MODULE_24__["DialogContingencyComponent"],
            _shared_manual_sorting_manual_sorting_component__WEBPACK_IMPORTED_MODULE_25__["ManualSortingComponent"],
            _shared_dialog_choice_activity_dialog_choice_activity_component__WEBPACK_IMPORTED_MODULE_26__["DialogChoiceActivityComponent"],
            _fases_tfc_fases_tfc_component__WEBPACK_IMPORTED_MODULE_27__["FasesTfcComponent"],
            _shared_dialog_historico_kit_dialog_historico_kit_component__WEBPACK_IMPORTED_MODULE_28__["DialogHistoricokitComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__["OperationRoutingModule"],
            angular_cropperjs__WEBPACK_IMPORTED_MODULE_22__["AngularCropperjsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
        ],
        exports: [
            _shared_manual_sorting_manual_sorting_component__WEBPACK_IMPORTED_MODULE_25__["ManualSortingComponent"],
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_20__["CustomDateAdapter"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_21__["MY_DATE_FORMATS"] }
        ],
        entryComponents: [
            _analyze_dialog_manual_sorting_dialog_manual_sorting_component__WEBPACK_IMPORTED_MODULE_17__["DialogManualSortingComponent"],
            _analyze_dialog_list_history_dialog_list_history_component__WEBPACK_IMPORTED_MODULE_18__["DialogListHistoryComponent"],
            _display_images_dialog_image_edit_dialog_image_edit_component__WEBPACK_IMPORTED_MODULE_23__["DialogImageEditComponent"],
            _shared_dialog_contingency_dialog_contingency_component__WEBPACK_IMPORTED_MODULE_24__["DialogContingencyComponent"],
            _shared_dialog_choice_activity_dialog_choice_activity_component__WEBPACK_IMPORTED_MODULE_26__["DialogChoiceActivityComponent"],
            _shared_dialog_historico_kit_dialog_historico_kit_component__WEBPACK_IMPORTED_MODULE_28__["DialogHistoricokitComponent"]
        ]
    })
], OperationModule);



/***/ }),

/***/ "./src/app/modules/operation/report-builder/report-builder.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/operation/report-builder/report-builder.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemDash .iconDash {\n  width: 25%;\n  display: inline-block;\n  text-align: center;\n}\n.itemDash .iconDash i {\n  font-size: 40px;\n  color: #E53935;\n}\n.itemDash .datas {\n  width: 75%;\n  display: inline-block;\n}\n.itemDash .datas .title {\n  display: block;\n  color: #546E7A;\n  text-align: center;\n}\n.itemDash .datas .valor {\n  text-align: center;\n  display: block;\n}\nh1 {\n  font-size: 2rem;\n  margin-bottom: 25px;\n}\n.cursorPointer {\n  cursor: pointer;\n}\n.cursorPointer:hover {\n  background-color: #B0BEC5;\n}\ntr.example-detail-row {\n  height: 0;\n  background: #ECEFF1;\n}\ntable td.mat-cell, table th.mat-header-cell {\n  padding: 0 24px;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #CFD8DC;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-expanded-row {\n  font-weight: bold;\n  background: #ECEFF1;\n}\n.example-expanded-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.table {\n  margin: 15px auto;\n  box-shadow: 0px 3px 7px 0px #666666;\n  width: 98%;\n}\n.table th {\n  border-bottom: none;\n  background-color: #1565C0;\n  color: #FFFFFF;\n}\n.table tr {\n  background-color: #FFFFFF;\n}\n.table tr:nth-child(even) {\n  background-color: #FAFAFA;\n}\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vcmVwb3J0LWJ1aWxkZXIvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxccmVwb3J0LWJ1aWxkZXJcXHJlcG9ydC1idWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9yZXBvcnQtYnVpbGRlci9yZXBvcnQtYnVpbGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ1o7QURFSTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQ0FSO0FEQ1E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NaO0FESUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtBQ0RKO0FERUk7RUFDSSx5QkFBQTtBQ0FSO0FESUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNJLHNCQUFBO0FDRFI7QURLQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRko7QURLQTtFQUNJLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FDRko7QURHSTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRFI7QURHSTtFQUNJLHlCQUFBO0FDRFI7QURHUTtFQUNJLHlCQUFBO0FDRFo7QURNQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vcmVwb3J0LWJ1aWxkZXIvcmVwb3J0LWJ1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbURhc2gge1xyXG4gICAgLmljb25EYXNoIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNFNTM5MzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhdGFzIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICM1NDZFN0E7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbG9yIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jdXJzb3JQb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCMEJFQzU7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xyXG59XHJcblxyXG50YWJsZSB0ZC5tYXQtY2VsbCwgdGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1leHBhbmRlZC1yb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA3cHggMHB4IHJnYmEoMTAyLDEwMiwxMDIsMSk7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuICAgIHRyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cclxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGwtbWVudXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4iLCIuaXRlbURhc2ggLmljb25EYXNoIHtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaXRlbURhc2ggLmljb25EYXNoIGkge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjRTUzOTM1O1xufVxuLml0ZW1EYXNoIC5kYXRhcyB7XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pdGVtRGFzaCAuZGF0YXMgLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNTQ2RTdBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaXRlbURhc2ggLmRhdGFzIC52YWxvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uY3Vyc29yUG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXJzb3JQb2ludGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQkVDNTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xufVxuXG50YWJsZSB0ZC5tYXQtY2VsbCwgdGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0NGRDhEQztcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1leHBhbmRlZC1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcbn1cbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYmxlIHtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAzcHggN3B4IDBweCAjNjY2NjY2O1xuICB3aWR0aDogOTglO1xufVxuLnRhYmxlIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG5cbi5zbWFsbC1tZW51IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/operation/report-builder/report-builder.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/operation/report-builder/report-builder.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBuilderComponent", function() { return ReportBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_report_builder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/report-builder.service */ "./src/app/modules/operation/services/report-builder.service.ts");
/* harmony import */ var src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/status-analyse.enum */ "./src/app/models/status-analyse.enum.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");











let ReportBuilderComponent = class ReportBuilderComponent {
    constructor(formBuilder, operationService, serviceCenterService, matSnackBar, dialog, sanitizer) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumnsDefault = ['documento', 'agencia', 'contaCorrente', 'dataAnaliseInicial', 'dataAnaliseFinal', 'operador', 'dataCadastro', 'status', 'motivosRejeicao'];
        this.displayedColumns = [];
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.dataAtual = new Date();
        this.personalFields = [];
        this.listPersonalFields = [];
        this.labelColumns = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            operacaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            atividadeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            statusId: [''],
            dataInicial: [''],
            dataFinal: [''],
            documento: [''],
            agencia: [''],
            conta: ['']
        });
        this.operacoes();
        this.statusList = Object.entries(src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_8__["StatusAnalyse"]).filter(el => el[1] !== "-1");
    }
    operacoes() {
        /** Lista de Operações COM Template Associado */
        this.loading = true;
        this.operationService.getOperations(true).subscribe(response => {
            this.operations = [...response.data];
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
        this.pageIndex = 0;
    }
    setActivity() {
        this.getPersonalFields();
    }
    getPersonalFields() {
        this.loading = true;
        this.personalFields = [];
        const form = this.form.value;
        this.serviceCenterService.getPersonalFields(form.atividadeId).subscribe(response => {
            this.listPersonalFields = response.data;
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados campos personalizados. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
    }
    getResult(exportaXLSX = false) {
        if (this.form.valid) {
            this.loading = true;
            const form = this.form.value;
            const dataInicial = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
            const dataFinal = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            this.serviceCenterService.generate(form.atividadeId, exportaXLSX, form.statusId, form.documento, form.agencia, form.conta, dataInicial, dataFinal, pageSize, pageIndex, this.personalFields).subscribe(response => {
                if (response.type == "application/octet-stream") {
                    var dateToday = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYYMMDDHHmmss');
                    var fileName = "report_" + this.form.value.atividadeId + "_" + dateToday + ".xlsx";
                    var linkArquivo = window.URL.createObjectURL(response);
                    var link = document.createElement("a");
                    link.setAttribute("href", linkArquivo);
                    link.setAttribute("download", fileName);
                    link.style.display = "none";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    this.length = null;
                }
                else {
                    this.displayedColumns = this.displayedColumnsDefault.map(x => x);
                    for (var i = 1; i <= response.camposPersonalizados.length; i++) {
                        this.displayedColumns.push("generico" + i);
                    }
                    this.labelColumns = response.camposPersonalizados;
                    this.length = response.length;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response.data);
                    this.dataSource.paginator = this.paginator;
                }
                this.loading = false;
            }, () => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
                this.loading = false;
            });
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getResult();
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
    setPersonalFields(event) {
        if (event.value.length > 30) {
            event.source.value = this.personalFields;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showAlert(this.matSnackBar, "Somente é possível selecionar 30 colunas personalizadas por consulta.");
            return;
        }
        this.personalFields = [];
        this.personalFields = [...event.value];
    }
};
ReportBuilderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"] },
    { type: _services_report_builder_service__WEBPACK_IMPORTED_MODULE_7__["ReportBuilderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], ReportBuilderComponent.prototype, "paginator", void 0);
ReportBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-builder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-builder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-builder/report-builder.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-builder.component.scss */ "./src/app/modules/operation/report-builder/report-builder.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
        _services_report_builder_service__WEBPACK_IMPORTED_MODULE_7__["ReportBuilderService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]])
], ReportBuilderComponent);



/***/ }),

/***/ "./src/app/modules/operation/report-general-analytical/report-general-analytical.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/operation/report-general-analytical/report-general-analytical.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemDash .iconDash {\n  width: 25%;\n  display: inline-block;\n  text-align: center;\n}\n.itemDash .iconDash i {\n  font-size: 40px;\n  color: #E53935;\n}\n.itemDash .datas {\n  width: 75%;\n  display: inline-block;\n}\n.itemDash .datas .title {\n  display: block;\n  color: #546E7A;\n  text-align: center;\n}\n.itemDash .datas .valor {\n  text-align: center;\n  display: block;\n}\nh1 {\n  font-size: 2rem;\n  margin-bottom: 25px;\n}\n.cursorPointer {\n  cursor: pointer;\n}\n.cursorPointer:hover {\n  background-color: #B0BEC5;\n}\ntr.example-detail-row {\n  height: 0;\n  background: #ECEFF1;\n}\ntable td.mat-cell, table th.mat-header-cell {\n  padding: 0 24px;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #CFD8DC;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-expanded-row {\n  font-weight: bold;\n  background: #ECEFF1;\n}\n.example-expanded-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.table {\n  margin: 15px auto;\n  box-shadow: 0px 3px 7px 0px #666666;\n  width: 98%;\n}\n.table th {\n  border-bottom: none;\n  background-color: #1565C0;\n  color: #FFFFFF;\n}\n.table tr {\n  background-color: #FFFFFF;\n}\n.table tr:nth-child(even) {\n  background-color: #FAFAFA;\n}\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vcmVwb3J0LWdlbmVyYWwtYW5hbHl0aWNhbC9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcb3BlcmF0aW9uXFxyZXBvcnQtZ2VuZXJhbC1hbmFseXRpY2FsXFxyZXBvcnQtZ2VuZXJhbC1hbmFseXRpY2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9yZXBvcnQtZ2VuZXJhbC1hbmFseXRpY2FsL3JlcG9ydC1nZW5lcmFsLWFuYWx5dGljYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNDWjtBRElBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNESjtBREVJO0VBQ0kseUJBQUE7QUNBUjtBRElBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDSSxzQkFBQTtBQ0RSO0FES0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKO0FES0E7RUFDSSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FER0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER0k7RUFDSSx5QkFBQTtBQ0RSO0FER1E7RUFDSSx5QkFBQTtBQ0RaO0FETUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3BlcmF0aW9uL3JlcG9ydC1nZW5lcmFsLWFuYWx5dGljYWwvcmVwb3J0LWdlbmVyYWwtYW5hbHl0aWNhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtRGFzaCB7XHJcbiAgICAuaWNvbkRhc2gge1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0U1MzkzNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0YXMge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU0NkU3QTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmFsb3Ige1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmN1cnNvclBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IwQkVDNTtcclxuICAgIH1cclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XHJcbn1cclxuXHJcbnRhYmxlIHRkLm1hdC1jZWxsLCB0YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNDRkQ4REM7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAwcHggcmdiYSgxMDIsMTAyLDEwMiwxKTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NUMwO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbWFsbC1tZW51e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59IiwiLml0ZW1EYXNoIC5pY29uRGFzaCB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1EYXNoIC5pY29uRGFzaCBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI0U1MzkzNTtcbn1cbi5pdGVtRGFzaCAuZGF0YXMge1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uaXRlbURhc2ggLmRhdGFzIC50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzU0NkU3QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1EYXNoIC5kYXRhcyAudmFsb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmN1cnNvclBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3Vyc29yUG9pbnRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCMEJFQzU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcbn1cblxudGFibGUgdGQubWF0LWNlbGwsIHRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNDRkQ4REM7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZXhwYW5kZWQtcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICNFQ0VGRjE7XG59XG4uZXhhbXBsZS1leHBhbmRlZC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAwcHggIzY2NjY2NjtcbiAgd2lkdGg6IDk4JTtcbn1cbi50YWJsZSB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTY1QzA7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xufVxuXG4uc21hbGwtbWVudSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/operation/report-general-analytical/report-general-analytical.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/operation/report-general-analytical/report-general-analytical.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReportGeneralAnalyticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGeneralAnalyticalComponent", function() { return ReportGeneralAnalyticalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_report_general_analytical_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/report-general-analytical.service */ "./src/app/modules/operation/services/report-general-analytical.service.ts");
/* harmony import */ var src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/status-analyse.enum */ "./src/app/models/status-analyse.enum.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");











let ReportGeneralAnalyticalComponent = class ReportGeneralAnalyticalComponent {
    constructor(formBuilder, operationService, serviceCenterService, matSnackBar, dialog, sanitizer) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumnsDefault = ['banco',
            'rede',
            'regional',
            'agencia',
            'conta',
            'cpfCnpj',
            'nomeCliente',
            'etiqueta',
            'caixa',
            'tipoAbertura',
            'abertura',
            'recebimento',
            'loginRecebimento',
            'digitalização',
            'loginDigitalizacao',
            'digitalizacaoRobo',
            'descricaoProduto',
            'dataImportacaoBW',
            'statusAtual'];
        this.displayedColumns = [];
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.dataAtual = new Date();
        this.personalFields = [];
        this.listPersonalFields = [];
        this.labelColumns = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            operacaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            atividadeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            statusId: [''],
            dataInicial: [''],
            dataFinal: ['']
        });
        this.operacoes();
        this.statusList = Object.entries(src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_8__["StatusAnalyse"]).filter(el => el[1] !== "-1");
    }
    operacoes() {
        /** Lista de Operações COM Template Associado */
        this.loading = true;
        this.operationService.getOperations(true).subscribe(response => {
            this.operations = [...response.data];
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
        this.pageIndex = 0;
    }
    setActivity() {
        this.getPersonalFields();
    }
    getPersonalFields() {
        this.loading = true;
        this.personalFields = [];
        const form = this.form.value;
        this.serviceCenterService.getPersonalFields(form.atividadeId).subscribe(response => {
            this.listPersonalFields = response.data;
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados campos personalizados. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
    }
    getResult() {
        if (this.form.valid) {
            this.loading = true;
            const form = this.form.value;
            const dataInicial = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
            const dataFinal = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            this.serviceCenterService.generate(form.atividadeId, false, form.statusId, dataInicial, dataFinal, pageSize, pageIndex, this.personalFields).subscribe(response => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showInfo(this.matSnackBar, "Aguardar retorno da consulta no Central de Downloads");
                this.loading = false;
            }, (error) => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
                this.loading = false;
            });
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getResult();
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
    setPersonalFields(event) {
        if (event.value.length > 30) {
            event.source.value = this.personalFields;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showAlert(this.matSnackBar, "Somente é possível selecionar 30 colunas personalizadas por consulta.");
            return;
        }
        this.personalFields = [];
        this.personalFields = [...event.value];
    }
};
ReportGeneralAnalyticalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"] },
    { type: _services_report_general_analytical_service__WEBPACK_IMPORTED_MODULE_7__["ReportGeneralAnalyticalService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], ReportGeneralAnalyticalComponent.prototype, "paginator", void 0);
ReportGeneralAnalyticalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-general-analytical',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-general-analytical.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-general-analytical/report-general-analytical.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-general-analytical.component.scss */ "./src/app/modules/operation/report-general-analytical/report-general-analytical.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
        _services_report_general_analytical_service__WEBPACK_IMPORTED_MODULE_7__["ReportGeneralAnalyticalService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]])
], ReportGeneralAnalyticalComponent);



/***/ }),

/***/ "./src/app/modules/operation/report-productivity/report-productivity.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/operation/report-productivity/report-productivity.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemDash .iconDash {\n  width: 25%;\n  display: inline-block;\n  text-align: center;\n}\n.itemDash .iconDash i {\n  font-size: 40px;\n  color: #E53935;\n}\n.itemDash .datas {\n  width: 75%;\n  display: inline-block;\n}\n.itemDash .datas .title {\n  display: block;\n  color: #546E7A;\n  text-align: center;\n}\n.itemDash .datas .valor {\n  text-align: center;\n  display: block;\n}\nh1 {\n  font-size: 2rem;\n  margin-bottom: 25px;\n}\ntable {\n  width: 100%;\n  margin-bottom: 30px;\n}\n.cursorPointer {\n  cursor: pointer;\n}\n.cursorPointer:hover {\n  background-color: #B0BEC5;\n}\ntr.example-detail-row {\n  height: 0;\n  background: #ECEFF1;\n}\ntable td.mat-cell, table th.mat-header-cell {\n  padding: 0 24px;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #CFD8DC;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-expanded-row {\n  font-weight: bold;\n  background: #ECEFF1;\n}\n.example-expanded-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.table {\n  margin: 15px auto;\n  box-shadow: 0px 3px 7px 0px #666666;\n  width: 98%;\n}\n.table th {\n  border-bottom: none;\n  background-color: #1565C0;\n  color: #FFFFFF;\n}\n.table tr {\n  background-color: #FFFFFF;\n}\n.table tr:nth-child(even) {\n  background-color: #FAFAFA;\n}\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vcmVwb3J0LXByb2R1Y3Rpdml0eS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcb3BlcmF0aW9uXFxyZXBvcnQtcHJvZHVjdGl2aXR5XFxyZXBvcnQtcHJvZHVjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9yZXBvcnQtcHJvZHVjdGl2aXR5L3JlcG9ydC1wcm9kdWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NaO0FERUk7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNDWjtBRElBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0FDREo7QURFSTtFQUNJLHlCQUFBO0FDQVI7QURPQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxlQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQTtFQUNJLG1CQUFBO0FDSko7QURPQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE1JO0VBQ0ksc0JBQUE7QUNKUjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNMSjtBRFFBO0VBQ0ksaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNMSjtBRE1JO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNKUjtBRE1JO0VBQ0kseUJBQUE7QUNKUjtBRE1RO0VBQ0kseUJBQUE7QUNKWjtBRFdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9yZXBvcnQtcHJvZHVjdGl2aXR5L3JlcG9ydC1wcm9kdWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbURhc2gge1xyXG4gICAgLmljb25EYXNoIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNFNTM5MzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhdGFzIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICM1NDZFN0E7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbG9yIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmN1cnNvclBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IwQkVDNTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XHJcbn1cclxuXHJcbnRhYmxlIHRkLm1hdC1jZWxsLCB0YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNDRkQ4REM7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICNFQ0VGRjE7XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAwcHggcmdiYSgxMDIsMTAyLDEwMiwxKTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICB0aCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NUMwO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgfVxyXG4gICAgdHIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uc21hbGwtbWVudXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufSIsIi5pdGVtRGFzaCAuaWNvbkRhc2gge1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtRGFzaCAuaWNvbkRhc2ggaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNFNTM5MzU7XG59XG4uaXRlbURhc2ggLmRhdGFzIHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLml0ZW1EYXNoIC5kYXRhcyAudGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM1NDZFN0E7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtRGFzaCAuZGF0YXMgLnZhbG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jdXJzb3JQb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1cnNvclBvaW50ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBCRUM1O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNFQ0VGRjE7XG59XG5cbnRhYmxlIHRkLm1hdC1jZWxsLCB0YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xufVxuLmV4YW1wbGUtZXhwYW5kZWQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGFibGUge1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA3cHggMHB4ICM2NjY2NjY7XG4gIHdpZHRoOiA5OCU7XG59XG4udGFibGUgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NUMwO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi50YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4udGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuLnNtYWxsLW1lbnUge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/report-productivity/report-productivity.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/operation/report-productivity/report-productivity.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReportProductivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProductivityComponent", function() { return ReportProductivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_report_productivity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/report-productivity.service */ "./src/app/modules/operation/services/report-productivity.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");








let ReportProductivityComponent = class ReportProductivityComponent {
    constructor(formProductivity, serviceCenterService, matSnackBar, dialog) {
        this.formProductivity = formProductivity;
        this.serviceCenterService = serviceCenterService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['dataRecebimento', 'maloteEnglobadorNumero', 'maloteNumero', 'maloteLacre', 'etiqueta', 'agencia', 'contaCorrente', 'documento', 'fila', 'status', 'dataAnaliseInicial', 'dataAnaliseFinal', 'operador', 'motivosRejeicao', 'tmo'];
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(4, "months").toDate();
        this.currentDate = new Date();
        this.length = null;
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.labelColumns = [];
    }
    ngOnInit() {
        this.form = this.formProductivity.group({
            maloteEnglobador: [''],
            dataInicial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dataFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('maloteEnglobador').enable();
        this.pageIndex = 0;
    }
    getResult(exportaXLSX = false) {
        if (this.form.valid) {
            this.loading = true;
            const form = this.form.value;
            const dataInicial = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
            const dataFinal = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_5__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            this.serviceCenterService.generate(exportaXLSX, form.maloteEnglobador, dataInicial, dataFinal, pageSize, pageIndex).subscribe(response => {
                if (response.type == "application/octet-stream") {
                    var dateToday = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDDHHmmss');
                    var fileName = "report_productivity_" + dateToday + ".xlsx";
                    var linkArquivo = window.URL.createObjectURL(response);
                    var link = document.createElement("a");
                    link.setAttribute("href", linkArquivo);
                    link.setAttribute("download", fileName);
                    link.style.display = "none";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    this.length = null;
                }
                else {
                    this.length = response.length;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
                    this.dataSource.paginator = this.paginator;
                }
                this.loading = false;
            }, error => {
                if (error.status === 404) {
                    this.length = 0;
                }
                else {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
                }
                this.loading = false;
            });
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getResult();
    }
    formatDocument(document) {
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
};
ReportProductivityComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_report_productivity_service__WEBPACK_IMPORTED_MODULE_6__["ReportProductivityService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], ReportProductivityComponent.prototype, "paginator", void 0);
ReportProductivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-productivity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-productivity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/report-productivity/report-productivity.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-productivity.component.scss */ "./src/app/modules/operation/report-productivity/report-productivity.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_report_productivity_service__WEBPACK_IMPORTED_MODULE_6__["ReportProductivityService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], ReportProductivityComponent);



/***/ }),

/***/ "./src/app/modules/operation/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/operation/search/search.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".first-column {\n  width: 8%;\n}\n\n.mouse-pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vc2VhcmNoL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxvcGVyYXRpb25cXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDglO1xyXG59XHJcblxyXG4ubW91c2UtcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIuZmlyc3QtY29sdW1uIHtcbiAgd2lkdGg6IDglO1xufVxuXG4ubW91c2UtcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/operation/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/operation/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/status-analyse.enum */ "./src/app/models/status-analyse.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_esteira_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/esteira.service */ "./src/app/modules/operation/services/esteira.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _analyze_dialog_list_history_dialog_list_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../analyze/dialog-list-history/dialog-list-history.component */ "./src/app/modules/operation/analyze/dialog-list-history/dialog-list-history.component.ts");
/* harmony import */ var _shared_dialog_historico_kit_dialog_historico_kit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/dialog-historico-kit/dialog-historico-kit.component */ "./src/app/modules/operation/shared/dialog-historico-kit/dialog-historico-kit.component.ts");











let SearchComponent = class SearchComponent {
    constructor(formBuilder, operationService, esteiraService, matSnackBar, dialog) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.esteiraService = esteiraService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.displayedColumns = ['esteiraId', 'dataCarga', 'documento', 'agencia', 'conta', 'status', 'statusAqo', 'operador', 'dataAnalise', 'dataAlteracao', 'alteradoPor', 'actions'];
        //public displayedColumns: string[] = ['esteiraId', 'dataCarga', 'documento', 'agencia', 'conta', 'numeroProcesso', 'numeroPasta',  'status', 'statusAqo', 'operador', 'dataAnalise', 'dataAlteracao', 'alteradoPor', 'actions'];
        this.ResultAnalyzeSearch = [];
        this.today = new Date();
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
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            this.loading = false;
        });
        this.form = this.formBuilder.group({
            typeConsult: ['E', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            operacaoId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            atividadeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dataInicial: [''],
            dataFinal: [''],
            documento: [''],
            numeroProcesso: [''],
            numeroPasta: [''],
            status: [''],
        });
        this.formAgenciaConta = this.formBuilder.group({
            typeConsult: ['E', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            agencia: [''],
            conta: [''],
            documento: [''],
            numeroProcesso: [''],
            numeroPasta: ['']
        });
        this.changeType();
    }
    changeType() {
        if (this.form.value.typeConsult === "E") {
            this.statusList = Object.entries(src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_4__["StatusAnalyse"]).filter(el => el[1] !== "-1");
        }
        else {
            this.statusList = Object.entries(src_app_models_status_analyse_enum__WEBPACK_IMPORTED_MODULE_4__["StatusAnalyse"]);
        }
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
    }
    search() {
        if (this.form.valid) {
            this.loading = true;
            this.length = null;
            const form = this.form.value;
            const initialDate = form.dataInicial !== "" ? moment__WEBPACK_IMPORTED_MODULE_8__(new Date(form.dataInicial)).format('YYYY-MM-DD') : "";
            const finalDate = form.dataFinal !== "" ? moment__WEBPACK_IMPORTED_MODULE_8__(new Date(form.dataFinal)).format('YYYY-MM-DD') : "";
            this.esteiraService.findAnalyzes(form.typeConsult, form.atividadeId, initialDate, finalDate, form.documento, form.numeroProcesso, form.numeroPasta, form.status, this.pageIndex + 1, this.pageSize).subscribe(response => {
                console.log(response.data);
                this.loading = false;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](response.data);
                this.length = response.length;
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loading = false;
            });
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    searchAgenciaConta() {
        const form = this.formAgenciaConta.value;
        // if(form.agencia.length == 0  && form.conta.length == 0  && form.documento.length == 0) {
        // 	SnackbarComponent.showError(this.matSnackBar, null,"Preencha um  Documento ou Conta");
        // } else if(form.agencia.length > 0  && form.conta.length < 5) {
        if (form.numeroPasta.length == 0 && form.numeroProcesso.length == 0) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, null, "Preencha o Numero do Processo e/ou da Pasta");
        }
        else {
            this.loading = true;
            this.length = null;
            this.esteiraService.findHistoricByProcessOrFolder(form.typeConsult, form.numeroProcesso, form.numeroPasta, (this.pageIndex + 1).toString(), this.pageSize.toString()).subscribe(response => {
                this.loading = false;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](response.data);
                this.length = response.length;
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loading = false;
            });
        }
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
    openHistory(_element) {
        this.dialogHistoryRef = this.dialog.open(_analyze_dialog_list_history_dialog_list_history_component__WEBPACK_IMPORTED_MODULE_9__["DialogListHistoryComponent"], {
            width: '1200px',
            disableClose: false,
            data: {
                agencia: _element.header.agencia,
                documento: _element.header.documento,
                contaCorrente: _element.header.contaCorrente
            }
        });
    }
    openKitHistory(_element) {
        this.dialogHistoricoKitRef = this.dialog.open(_shared_dialog_historico_kit_dialog_historico_kit_component__WEBPACK_IMPORTED_MODULE_10__["DialogHistoricokitComponent"], {
            width: '80%',
            height: '80%',
            disableClose: false,
            data: {
                esteiraId: _element.esteiraId,
                agencia: _element.header.agencia,
                documento: _element.header.documento,
                contaCorrente: _element.header.contaCorrente
            }
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"] },
    { type: _services_esteira_service__WEBPACK_IMPORTED_MODULE_6__["EsteiraService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
], SearchComponent.prototype, "paginator", void 0);
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/modules/operation/search/search.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"],
        _services_esteira_service__WEBPACK_IMPORTED_MODULE_6__["EsteiraService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/modules/operation/services/alteracao-fases.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/operation/services/alteracao-fases.service.ts ***!
  \***********************************************************************/
/*! exports provided: AlteracaoFasesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlteracaoFasesService", function() { return AlteracaoFasesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AlteracaoFasesService = class AlteracaoFasesService {
    constructor(http) {
        this.http = http;
        this.urlAlteracaoFases = "/api/v1/alteracao-fases";
    }
    get(tipoId, statusId, dataInicial, dataFinal, pageIndex, pageSize) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlAlteracaoFases}`, {
            params: {
                tipo: tipoId,
                statusItem: statusId,
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                pageIndex: pageIndex,
                pageSize: pageSize
            }
        });
    }
    getTipos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlAlteracaoFases}/tipos`);
    }
    getStatus() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlAlteracaoFases}/status`);
    }
    putAlterarFase(alteracaoFaseItemId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlAlteracaoFases}/item/` + alteracaoFaseItemId, null);
    }
};
AlteracaoFasesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AlteracaoFasesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AlteracaoFasesService);



/***/ }),

/***/ "./src/app/modules/operation/services/managerial-view.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/operation/services/managerial-view.service.ts ***!
  \***********************************************************************/
/*! exports provided: ManagerialViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerialViewService", function() { return ManagerialViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ManagerialViewService = class ManagerialViewService {
    constructor(http) {
        this.http = http;
    }
    getDataManagerialView() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/visoes-gerenciais`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response.data));
    }
    getDetailManagerialViewOperation(operacaoId, kpi, pageSize, pageIndex) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/visoes-gerenciais/operacao/${operacaoId}`, {
            params: {
                Kpi: kpi,
                PageSize: pageSize.toString(),
                PageIndex: pageIndex.toString()
            }
        });
    }
    getDetailManagerialViewActivity(operacaoId, atividadeId, kpi, pageSize, pageIndex) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/visoes-gerenciais/operacao/${operacaoId}/atividade/${atividadeId}`, {
            params: {
                Kpi: kpi,
                PageSize: pageSize.toString(),
                PageIndex: pageIndex.toString()
            }
        });
    }
};
ManagerialViewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ManagerialViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ManagerialViewService);



/***/ }),

/***/ "./src/app/modules/operation/services/report-builder.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/operation/services/report-builder.service.ts ***!
  \**********************************************************************/
/*! exports provided: ReportBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportBuilderService", function() { return ReportBuilderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ReportBuilderService = class ReportBuilderService {
    constructor(http) {
        this.http = http;
        this.urlReportBuilder = "/api/v1/gerenciador-relatorios";
        this.urlTemplate = "/api/v1/templates";
    }
    generate(atividadeId, exportaXLSX, statusId, documento, agencia, conta, dataInicial, dataFinal, PageSize, PageIndex, personalFields) {
        const data = {
            atividadeId: atividadeId,
            exportaXLSX: exportaXLSX,
            statusId: statusId,
            documento: documento,
            agencia: agencia,
            contaCorrente: conta,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            pageSize: PageSize,
            pageIndex: PageIndex,
            camposPersonalizados: personalFields
        };
        var options = {};
        if (exportaXLSX) {
            options = { responseType: 'blob' };
        }
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlReportBuilder, data, options);
    }
    getPersonalFields(atividadeId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlTemplate + '/atividade/' + atividadeId + '/campos');
    }
};
ReportBuilderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReportBuilderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ReportBuilderService);



/***/ }),

/***/ "./src/app/modules/operation/services/report-general-analytical.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/operation/services/report-general-analytical.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ReportGeneralAnalyticalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportGeneralAnalyticalService", function() { return ReportGeneralAnalyticalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ReportGeneralAnalyticalService = class ReportGeneralAnalyticalService {
    constructor(http) {
        this.http = http;
        this.urlReportBuilder = "/api/v1/gerenciador-geral-analitico";
        this.urlTemplate = "/api/v1/templates";
    }
    generate(atividadeId, exportaXLSX, statusId, dataInicial, dataFinal, PageSize, PageIndex, personalFields) {
        const data = {
            atividadeId: atividadeId,
            exportaXLSX: exportaXLSX,
            statusId: statusId,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            pageSize: PageSize,
            pageIndex: PageIndex,
            camposPersonalizados: personalFields
        };
        var options = {};
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlReportBuilder, data, options);
    }
    getPersonalFields(atividadeId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlTemplate + '/atividade/' + atividadeId + '/campos');
    }
};
ReportGeneralAnalyticalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReportGeneralAnalyticalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ReportGeneralAnalyticalService);



/***/ }),

/***/ "./src/app/modules/operation/services/report-productivity.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/operation/services/report-productivity.service.ts ***!
  \***************************************************************************/
/*! exports provided: ReportProductivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProductivityService", function() { return ReportProductivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ReportProductivityService = class ReportProductivityService {
    constructor(http) {
        this.http = http;
        this.urlReportBuilder = "/api/v1/relatorios-produtividades";
    }
    generate(exportaXLSX, maloteEnglobador, dataInicial, dataFinal, PageSize, PageIndex) {
        const data = {
            exportaXLSX: exportaXLSX,
            maloteEnglobador: maloteEnglobador,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            pageSize: PageSize,
            pageIndex: PageIndex
        };
        var options = {};
        if (exportaXLSX) {
            options = { responseType: 'blob' };
        }
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlReportBuilder, data, options);
    }
};
ReportProductivityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ReportProductivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ReportProductivityService);



/***/ }),

/***/ "./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\ndiv[mat-dialog-content] {\n  height: calc(100% - 100px);\n}\n\ndiv[mat-dialog-content] .scroll {\n  height: calc(100%);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vc2hhcmVkL2RpYWxvZy1jaG9pY2UtYWN0aXZpdHkvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXG9wZXJhdGlvblxcc2hhcmVkXFxkaWFsb2ctY2hvaWNlLWFjdGl2aXR5XFxkaWFsb2ctY2hvaWNlLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9zaGFyZWQvZGlhbG9nLWNob2ljZS1hY3Rpdml0eS9kaWFsb2ctY2hvaWNlLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3BlcmF0aW9uL3NoYXJlZC9kaWFsb2ctY2hvaWNlLWFjdGl2aXR5L2RpYWxvZy1jaG9pY2UtYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlKTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG4gICAgfVxyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG59XG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSAuc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DialogChoiceActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogChoiceActivityComponent", function() { return DialogChoiceActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let DialogChoiceActivityComponent = class DialogChoiceActivityComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.arrayActivities = [];
    }
    ngOnInit() {
        this.arrayActivities = [...this.data.activities];
        this.formChoiceActivity = this.formBuilder.group({
            activity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
    start() {
        if (this.formChoiceActivity.valid) {
            this.dialogRef.close(this.formChoiceActivity.value);
        }
    }
};
DialogChoiceActivityComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DialogChoiceActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-choice-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-choice-activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-choice-activity.component.scss */ "./src/app/modules/operation/shared/dialog-choice-activity/dialog-choice-activity.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], DialogChoiceActivityComponent);



/***/ }),

/***/ "./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\ndiv[mat-dialog-content] {\n  height: calc(100% - 100px);\n}\n\ndiv[mat-dialog-content] .scroll {\n  height: calc(100%);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vc2hhcmVkL2RpYWxvZy1jb250aW5nZW5jeS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcb3BlcmF0aW9uXFxzaGFyZWRcXGRpYWxvZy1jb250aW5nZW5jeVxcZGlhbG9nLWNvbnRpbmdlbmN5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9zaGFyZWQvZGlhbG9nLWNvbnRpbmdlbmN5L2RpYWxvZy1jb250aW5nZW5jeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9zaGFyZWQvZGlhbG9nLWNvbnRpbmdlbmN5L2RpYWxvZy1jb250aW5nZW5jeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgLnNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgXHJcbiAgICB9XHJcbn0iLCJoMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2W21hdC1kaWFsb2ctY29udGVudF0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIC5zY3JvbGwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DialogContingencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContingencyComponent", function() { return DialogContingencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let DialogContingencyComponent = class DialogContingencyComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.statusIdManagerialView = this.data['statusId'];
        this.arrayUsers = this.data.users;
        this.formContingency = this.formBuilder.group({
            acao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            operadorId: [''],
            justificativa: [''],
        });
    }
    dealContingency() {
        if (this.formContingency.valid) {
            if ((this.formContingency.value.acao === "Finalizar" && this.formContingency.value.justificativa !== "") ||
                (this.formContingency.value.acao === "TransferirUsuario" && this.formContingency.value.operadorId !== "") ||
                (this.formContingency.value.acao === "TriagemManual" && this.formContingency.value.justificativa !== "") ||
                this.formContingency.value.acao === "TransferirFila") {
                this.dialogRef.close(this.formContingency.value);
            }
            else {
                this.formContingency.markAllAsTouched();
                this.contingencyValidationErrors = true;
            }
        }
    }
};
DialogContingencyComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DialogContingencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-contingency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-contingency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-contingency.component.scss */ "./src/app/modules/operation/shared/dialog-contingency/dialog-contingency.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], DialogContingencyComponent);



/***/ }),

/***/ "./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\n  overflow-y: scroll;\n  margin-bottom: 0;\n  margin-top: 0;\n  border-radius: 0.3rem 0 0 0.3rem;\n}\n.jumbotron img {\n  margin-bottom: 15px;\n}\n#wrap-form .title {\n  background-color: #607d8b;\n  color: #FFFFFF;\n  text-align: center;\n  padding: 3px;\n  margin-bottom: 5px;\n}\n.btn-primary {\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcGVyYXRpb24vc2hhcmVkL21hbnVhbC1zb3J0aW5nL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxvcGVyYXRpb25cXHNoYXJlZFxcbWFudWFsLXNvcnRpbmdcXG1hbnVhbC1zb3J0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9zaGFyZWQvbWFudWFsLXNvcnRpbmcvbWFudWFsLXNvcnRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURJSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFI7QURLQTtFQUNJLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29wZXJhdGlvbi9zaGFyZWQvbWFudWFsLXNvcnRpbmcvbWFudWFsLXNvcnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMCAwIC4zcmVtO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuI3dyYXAtZm9ybSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsIi5qdW1ib3Ryb24ge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbSAwIDAgMC4zcmVtO1xufVxuLmp1bWJvdHJvbiBpbWcge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4jd3JhcC1mb3JtIC50aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ManualSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualSortingComponent", function() { return ManualSortingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var src_app_models_post_manual_sorting_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/post-manual-sorting.model */ "./src/app/models/post-manual-sorting.model.ts");
/* harmony import */ var src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/person-types.enum */ "./src/app/models/person-types.enum.ts");
/* harmony import */ var _dialog_historic_dialog_historic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-historic/dialog-historic.component */ "./src/app/modules/operation/shared/manual-sorting/dialog-historic/dialog-historic.component.ts");
/* harmony import */ var src_app_modules_operation_services_esteira_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/operation/services/esteira.service */ "./src/app/modules/operation/services/esteira.service.ts");
/* harmony import */ var src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/validators/br-validators */ "./src/app/shared/validators/br-validators.ts");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");














let ManualSortingComponent = class ManualSortingComponent {
    constructor(formBuilder, dialog, operationService, esteiraService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.operationService = operationService;
        this.esteiraService = esteiraService;
        this.matSnackBar = matSnackBar;
        this.operations = [];
        this.operationsAll = [];
        this.activities = [];
        this.imageIndex = 0;
        this.galleries = [];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        /** Lista de Operações sem Template Associado */
        this.operationService.getOperations(true).subscribe(response => {
            this.operationsAll = [...response.data];
            this.loadOperation('cpf');
        }, () => {
            // Mensagem de Erro para Serviço Indisponível. Não tem como prosseguir;
        });
        let typeDocument = 'cpf';
        if (this.documento != null
            && !isNaN(Number(this.documento))
            && Number(this.documento).toString().length > 11) {
            typeDocument = 'cnpj';
        }
        this.form = this.formBuilder.group({
            documentType: [typeDocument, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpf: [this.documento],
            cnpj: [this.documento],
            bankBranch: [this.agencia],
            bankAccount: [this.contaCorrente],
            operationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            activity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.form.get('activity').disable();
        this.imageEditor = {
            images: this.galleries,
            indiceSelected: this.imageIndex,
        };
        if (this.alertaAtividades != undefined && this.alertaAtividades.length > 0) {
            this.openAlerta(this.alertaAtividades[0], 'Atividade');
        }
        if (this.alertaDocumentos != undefined && this.alertaDocumentos.length > 0) {
            this.form.get("cpf").valueChanges.subscribe(response => {
                if (this.form.get("cpf").valid) {
                    const alerta = this.alertaDocumentos.find(element => element.documento.replace(/[^\d]+/g, '') == response);
                    if (alerta != undefined) {
                        this.openAlerta(alerta, 'Documento');
                    }
                }
            });
            this.form.get("cnpj").valueChanges.subscribe(response => {
                const alerta = this.alertaDocumentos.find(element => element.documento.replace(/[^\d]+/g, '') == response);
                if (alerta != undefined) {
                    this.openAlerta(alerta, 'Documento');
                }
            });
        }
    }
    loadOperation(type) {
        const optionType = (type === "cpf" ? src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__["PersonTypes"].FISICA : src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__["PersonTypes"].JURIDICA);
        this.operations = this.operationsAll.filter(el => el.atividades.some(at => at.tipoPessoa === src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__["PersonTypes"].AMBOS || at.tipoPessoa === optionType));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const heightHeader = document.getElementById('wrap-form').getBoundingClientRect().top + 95;
            const heightForm = document.getElementById('wrap-form').getBoundingClientRect().height;
            const heightPage = window.innerHeight;
            this.heightJumbotron = heightForm + heightHeader > heightPage ? heightForm : heightPage - heightHeader;
        });
    }
    salvar() {
        if (this.form.value.documentType === 'cpf') {
            this.validaDocumento = this.form.get("cpf").valid;
        }
        else if (this.form.value.documentType === 'cnpj') {
            this.validaDocumento = this.form.get("cnpj").valid;
        }
        if (this.validaDocumento && this.form.get("documentType").valid && this.form.get("operationId").valid && this.form.get("activity").valid) {
            const digito = this.form.value.bankAccount.slice(-1);
            const conta = this.form.value.bankAccount.toString().substring(0, (this.form.value.bankAccount.toString().length - 1));
            if (src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_9__["BrValidator"].conta(this.form.value.bankBranch.toString(), conta, digito)) {
                this.submitForm(true);
            }
            else {
                let dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_11__["Dialog"]();
                dialog.title = "Conta Inválida";
                dialog.message = "A Conta Corrente informada parece está incorreta, deseja prosseguir mesmo assim?";
                dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_12__["DialogTypes"].CONFIRMATION;
                this.showMessage(dialog);
                this.dialogReference.afterClosed().subscribe(response => {
                    if (response === 'ok') {
                        this.submitForm(false);
                    }
                });
            }
        }
        else {
            this.form.markAllAsTouched();
        }
    }
    showMessage(dialog) {
        this.dialogReference = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '600px',
            data: {
                title: dialog.title,
                message: dialog.message,
                type: dialog.type,
            }
        });
    }
    submitForm(validDigit) {
        const body = new src_app_models_post_manual_sorting_model__WEBPACK_IMPORTED_MODULE_5__["PostManualSorting"]();
        body.documento = this.form.value.documentType === 'cpf' ? this.form.value.cpf : this.form.value.cnpj;
        body.agencia = this.form.value.bankBranch;
        body.contaCorrente = this.form.value.bankAccount;
        body.atividadeId = this.form.value.activity.id;
        body.isContingencia = false;
        body.doMatch = true;
        body.validDigit = validDigit;
        this.submit.emit(body);
    }
    setOperation() {
        this.form.value.activityId = null;
        this.form.controls['activity'].setValue(null);
        const optionType = (this.form.value.documentType === "cpf" ? src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__["PersonTypes"].FISICA : src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__["PersonTypes"].JURIDICA);
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operationId);
        this.activities = operation.atividades.filter(atv => !atv.atividadeFilha && (atv.tipoPessoa === src_app_models_person_types_enum__WEBPACK_IMPORTED_MODULE_6__["PersonTypes"].AMBOS || atv.tipoPessoa === optionType));
        this.form.get('activity').enable();
        if (this.form.value.documentType == 'cpf') {
            this.form.get('cpf').setValidators(this.cpfValidator);
        }
        else if (this.form.value.documentType == 'cnpj') {
            this.form.get('cnpj').setValidators(this.cnpjValidator);
        }
    }
    setDocumentType(type) {
        if (this.form.value.documentType !== type) {
            this.activities = [];
            this.form.value.activityId = null;
            this.form.value.operationId = null;
            this.loadOperation(type);
        }
    }
    seeHistoric() {
        this.loading = true;
        this.esteiraService.getHistoric(this.esteiraId).subscribe(response => {
            this.loading = false;
            this.dialog.open(_dialog_historic_dialog_historic_component__WEBPACK_IMPORTED_MODULE_7__["DialogHistoricComponent"], {
                width: '80%',
                data: response
            });
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loading = false;
        });
    }
    imageSelected(imageIndex) {
        this.imageEditor.indiceSelected = imageIndex;
    }
    validaCPF(documento) {
        if (documento.length == 14) {
            this.validaDocumento = src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_9__["BrValidator"].cpf(documento);
        }
        else {
            this.validaDocumento = false;
        }
    }
    validaCNPJ(documento) {
        if (documento.length == 18) {
            this.validaDocumento = src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_9__["BrValidator"].cnpj(documento);
        }
        else {
            this.validaDocumento = false;
        }
    }
    openAlerta(alerta, tipo) {
        const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_11__["Dialog"]();
        dialog.title = "Alerta de " + tipo;
        dialog.message = alerta.mensagem;
        dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_12__["DialogTypes"].INFORMATION;
        this.showMessage(dialog);
    }
    cpfValidator(abstractControl) {
        const valor = abstractControl.value;
        const validacaoDocumento = abstractControl.parent.value.activity.validacaoDocumento;
        if (src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_9__["BrValidator"].validadorCpfAtividade(valor, validacaoDocumento)) {
            return null;
        }
        return { isError: true };
    }
    cnpjValidator(abstractControl) {
        const valor = abstractControl.value;
        const validacaoDocumento = abstractControl.parent.value.activity.validacaoDocumento;
        if (src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_9__["BrValidator"].validadorCnpjAtividade(valor, validacaoDocumento)) {
            return null;
        }
        return { isError: true };
    }
    setAtividade() {
        this.form.get(this.form.value.documentType).updateValueAndValidity();
    }
};
ManualSortingComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_4__["OperationService"] },
    { type: src_app_modules_operation_services_esteira_service__WEBPACK_IMPORTED_MODULE_8__["EsteiraService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ManualSortingComponent.prototype, "esteiraId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ManualSortingComponent.prototype, "agencia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ManualSortingComponent.prototype, "contaCorrente", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ManualSortingComponent.prototype, "documento", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ManualSortingComponent.prototype, "alertaAtividades", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ManualSortingComponent.prototype, "alertaDocumentos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ManualSortingComponent.prototype, "galleries", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ManualSortingComponent.prototype, "submit", void 0);
ManualSortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manual-sorting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manual-sorting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manual-sorting.component.scss */ "./src/app/modules/operation/shared/manual-sorting/manual-sorting.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_4__["OperationService"],
        src_app_modules_operation_services_esteira_service__WEBPACK_IMPORTED_MODULE_8__["EsteiraService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], ManualSortingComponent);



/***/ })

}]);
//# sourceMappingURL=modules-operation-operation-module-es2015.js.map