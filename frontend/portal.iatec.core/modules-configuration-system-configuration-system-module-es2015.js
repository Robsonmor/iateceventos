(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-configuration-system-configuration-system-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/activity/activity-form/activity-form.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/activity/activity-form/activity-form.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Cadastro de Atividade</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Formulário de Atividade</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Formulário de Atividade <span *ngIf=\"id\">{{id}}</span></h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formEntity\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Grupo</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select matNativeControl formControlName=\"operacaoGrupoId\" required\r\n\t\t\t\t\t\t\t\t\t(selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of operacaoGrupos\" [value]=\"item.operacaoGrupoId\">\r\n\t\t\t\t\t\t\t\t\t\t{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"operacaoId\" matNativeControl required>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of operacoes\" [value]=\"item.operacaoId\">{{ item.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Nome</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" matInput placeholder=\"Nome\" maxlength=\"180\"\r\n\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4 form-group radioButtonAdjust\">\r\n\t\t\t\t\t\t\t\t<mat-label>Tipo Pessoa *</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group matInput formControlName=\"tipoPessoa\"\r\n\t\t\t\t\t\t\t\t\taria-label=\"Selecione uma opção do tipo da pessoa\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"1\">Ambos</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"2\">Físico</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"3\">Jurídico</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>SLA* (hh:mm)</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"sla\" matInput mask=\"00:00\" placeholder=\"SLA (hh:mm)\"  [dropSpecialCharacters]=\"false\" />\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório - max. 99:59 horas:minutos</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Lead Time* (hh:mm)</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"leadTime\" matInput mask=\"00:00\" placeholder=\"Lead Time (hh:mm)\"  [dropSpecialCharacters]=\"false\" />\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório - max. 99:59 horas:minutos</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t<div class=\"col-12 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t<mat-label>Controla autenticidade?</mat-label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"controlaAutenticidade\" #controlaAutenticidade\r\n\t\t\t\t\t\t\t\taria-label=\"Selecione o status do fluxo de controle de autenticidade\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"false\">Não</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"true\">Sim</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t<div class=\"col-12 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t<mat-label>Documento extra requerido?</mat-label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"requerDocumentoExtra\" #requerDocumentoExtra\r\n\t\t\t\t\t\t\t\taria-label=\"Selecione o requerimento do documento extra\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"false\">Não</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"true\">Sim</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t<div class=\"col-12 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t<mat-label>Utiliza Módulo Service Center?</mat-label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"moduloAnaliseServiceCenter\" #moduloAnaliseServiceCenter\r\n\t\t\t\t\t\t\t\taria-label=\"Utiliza Módulo Service Center na análise da Esteira\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"false\">Não</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"true\">Sim</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t<div class=\"col-12 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t<mat-label>Validação de Documento?</mat-label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"validacaoDocumento\" #requerValidacaoDocumento\r\n\t\t\t\t\t\t\t\taria-label=\"Selecione Validação de Documento\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"1\">Obrigatória</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"2\">Sem Documento</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"3\">Parcial</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Ações</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formAction\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Nome</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" matInput placeholder=\"Nome\" maxlength=\"180\"\r\n\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Custo</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"number\" formControlName=\"valor\" matInput placeholder=\"Custo\" maxlength=\"180\"\r\n\t\t\t\t\t\t\t\t\t\trequired />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Cód. Externo</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"codigoExterno\" matInput placeholder=\"Código Externo\"\r\n\t\t\t\t\t\t\t\t\t\tmaxlength=\"180\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Centro de Custo</mat-label>\r\n\t\t\t\t\t\t\t\t<select matNativeControl formControlName=\"centroCusto\" required>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"\">Selecione</mat-option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let centroCusto of centroCustos\" [ngValue]=\"centroCusto.id\">\r\n\t\t\t\t\t\t\t\t\t\t{{ centroCusto.nome }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-1 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"linkAction()\" type=\"button\" class=\"btn btn-primary\">Associar</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-12\" *ngIf=\"entity?.acoes.length === 0\">\r\n\t\t<mat-card>Não há ações associadas</mat-card>\r\n\t</div>\r\n\t<div class=\"col-lg-12\" *ngIf=\"entity?.acoes.length > 0\">\r\n\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSourceAcoes\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\" width=\"10%\">Código</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.id }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"50%\">Nome</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"element.nome\" [(ngModel)]=\"element.nome\" name=\"element.nome\" required />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"valor\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"10%\">Custo</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" id=\"element.valor\" [(ngModel)]=\"element.valor\" name=\"element.valor\" required />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"codigoExterno\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"15%\">Cód. Externo</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"element.codigoExterno\" [(ngModel)]=\"element.codigoExterno\" name=\"element.codigoExterno\" required />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"centroCusto\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"15%\">Centro de Custo</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t<div class=\"d-flex flex-row select-custom\">\r\n\t\t\t\t\t\t\t<select matNativeControl [(ngModel)]=\"element.centroCusto.id\" class=\"item-list-custom\" >\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let centroCusto of centroCustos\" [ngValue]=\"centroCusto.id\">\r\n\t\t\t\t\t\t\t\t\t{{ centroCusto.nome }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<mat-icon aria-hidden=\"false\" >arrow_drop_down</mat-icon>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-right\">\r\n\t\t\t\t\t\t<!-- \r\n\t\t\t\t\t\t<a (click)=\"showEdit(element)\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i>\r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t -->\t\t\t\t\t\t\r\n\t\t\t\t\t\t<a (click)=\"unlinkAction(element)\" *ngIf=\"element.id === 0\" >\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">delete_forever</i>\r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Remover</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumnsAction\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumnsAction;\"\r\n\t\t\t\t\t[ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Workflow</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formWorkflow\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Tipo</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"tipo\" matNativeControl\r\n\t\t\t\t\t\t\t\t\t\t(selectionChange)=\"setTipoWorkflow()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of listaTipoWorkflow\" [value]=\"item.id\">{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Execução</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"execucao\" matNativeControl>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of listaExecucaoWorkflowSelect\" [value]=\"item.id\">{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Atividade Tarefa</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"workflowAtividadeId\" matNativeControl >\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of atividades\" [value]=\"item.id\">{{ item.nome }} ({{ item.id }})</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"linkWorkflow()\" type=\"button\" class=\"btn btn-primary\">Associar</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-12\" *ngIf=\"entity?.workflows?.length === 0\">\r\n\t\t<mat-card>Não há workflow associadas</mat-card>\r\n\t</div>\r\n\t<div class=\"col-lg-12\" *ngIf=\"entity?.workflows?.length > 0\">\r\n\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSourceWorkflows\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"tipo\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Tipo</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.tipoWorkflow.nome }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"execucao\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Execução</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.tipoExecucaoWorkflow.nome }}</td>\r\n\t\t\t\t</ng-container>\t\t\t\t\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"tarefa\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Tarefa</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.atividadeTarefa.nome }} ({{ element.atividadeTarefa.id }})</td>\r\n\t\t\t\t</ng-container>\t\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"\"> </th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-right\">\r\n\t\t\t\t\t\t<a (click)=\"unlinkWorkflow(element)\" >\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">delete_forever</i>\r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Remover</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumnsWorkflow\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumnsWorkflow;\"\r\n\t\t\t\t\t[ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Motivos de Rejeição</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formReason\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Motivo de Rejeição</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"motivoRejeicao\" matNativeControl >\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of motivosRejeicao\"\r\n\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.motivoRejeicaoId\">{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 text-center\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"linkReason()\" type=\"button\" class=\"btn btn-primary\">Associar</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-12\" *ngIf=\"entity?.motivosRejeicao.length === 0\">\r\n\t\t<mat-card>Não há motivos associados</mat-card>\r\n\t</div>\r\n\t<div class=\"col-lg-12\" *ngIf=\"entity?.motivosRejeicao.length > 0\">\r\n\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSourceMotivos\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nome }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-right\">\r\n\t\t\t\t\t\t<a (click)=\"unlinkReason(element)\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">delete_forever</i>\r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Desassociar</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumnsReason\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumnsReason;\"\r\n\t\t\t\t\t[ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-1 text-left\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/atividades']\">Voltar</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-1 offset-10 text-right\">\r\n\t\t\t<button (click)=\"save()\" type=\"button\" class=\"btn btn-success\">Salvar</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/activity/activity-list/activity-list.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/activity/activity-list/activity-list.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Cadastro de Atividade</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Cadastro de Atividade</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<form [formGroup]=\"formFilter\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput formControlName=\"nome\" placeholder=\"Filtre pelo nome\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Operação</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select matNativeControl formControlName=\"operacaoId\">\r\n\t\t\t\t\t\t\t\t\t<mat-option  >Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of operacoes\" [value]=\"item.operacaoId\">{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t<div class=\"col-3 align-button-header\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"find(true)\">FILTRAR</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-3 align-button-header text-right\">\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"newRegister()\">NOVO</button>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div  class=\"col-lg-12\" *ngIf=\"length === 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Código</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.id }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"grupo\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Operação</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.operacao?.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['formulario',element.id]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">assignment_returned</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['','configuracao','motivos-contingencia']\">Motivos Contingência</a></li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Motivo Contingência</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">{{(motivoContingenciaId != null ? 'Atualizar':'Adicionar') }} Motivos Contingência</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<h3 class=\"mb-4\">{{(motivoContingenciaId != null ? 'Atualizar':'Adicionar') }} Motivo Contingência </h3>\r\n\t\t\t\t<form [formGroup]=\"form\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Motivo de Contingência</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" maxlength=\"120\" matInput placeholder=\"Motivo de Contingência\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t\t<mat-label>Status</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"ativo\" required>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of tipoStatus\" [value]=\"item.status\">{{ item.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12 d-flex align-items-center justify-content-between mb-3\">\r\n\t\t\t<button (click)=\"salvarAlteracoes()\" type=\"button\" class=\"btn btn-success\">Salvar todas alterações</button>\r\n\t\t\t<button (click)=\"openModal()\" type=\"button\" class=\"btn btn-success\">Adicionar</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"mat-elevation-z8\"  *ngIf=\"checkedList.length > 0\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t<ng-container matColumnDef=\"grupo\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Grupo Operação</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.operacaoGrupo }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"operacao\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Operação</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.operacao }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"atividade\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Atividade</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.atividade }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-top\"></div>\r\n<div><h1 mat-dialog-title class=\"mat-dialog-title\">Atividades</h1>\r\n\t<div class=\"uniorgAtual\">\r\n\t\t<label>Selecione as Atividades que deseja atribuir a o Motivo de Contingencia</label>\r\n\t\t<span></span>\r\n\t</div>\r\n</div>\r\n<div class=\"tree-content\">\r\n\t<tree [data]=\"treeFila\" (dataOutPut)=\"getData($event)\" #test  *ngIf=\"treeFila.length > 0\"></tree>\r\n</div>\r\n<div mat-dialog-actions class=\"wrap-buttons tree-bottom\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"cancel()\">Fechar</button>\r\n\t<button class=\"btn btn-primary\" (click)=\"atualizar()\" cdkFocusInitial>Atualizar</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">assignment_returned</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['','configuracao','motivos-rejeicao']\">Motivos Rejeição</a></li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Motivo Rejeição</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">{{(motivoRejeicaoId != null ? 'Atualizar':'Adicionar') }} Motivos Rejeição</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<h3 class=\"mb-4\">{{(motivoRejeicaoId != null ? 'Atualizar':'Adicionar') }} Motivo Rejeição </h3>\r\n\t\t\t\t<form [formGroup]=\"form\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-10\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Motivo de Rejeição</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" maxlength=\"120\" matInput placeholder=\"Motivo de Rejeição\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t\t<mat-label>Status</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"ativo\" required>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of tipoStatus\" [value]=\"item.status\">{{ item.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12 d-flex align-items-center justify-content-between mb-3\">\r\n\t\t\t<button (click)=\"salvarAlteracoes()\" type=\"button\" class=\"btn btn-success\">Salvar todas alterações</button>\r\n\t\t\t<button (click)=\"openModal()\" type=\"button\" class=\"btn btn-success\">Adicionar</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"mat-elevation-z8\"  *ngIf=\"checkedList.length > 0\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t<ng-container matColumnDef=\"grupo\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Grupo Operação</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.operacaoGrupo }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"operacao\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Operação</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.operacao }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"atividade\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Atividade</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.atividade }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-top\"></div>\r\n<div><h1 mat-dialog-title class=\"mat-dialog-title\">Atividades</h1>\r\n\t<div class=\"uniorgAtual\">\r\n\t\t<label>Selecione as Atividades que deseja atribuir a o Motivo de Rejeição</label>\r\n\t\t<span></span>\r\n\t</div>\r\n</div>\r\n<div class=\"tree-content\">\r\n\t<tree [data]=\"treeFila\" (dataOutPut)=\"getData($event)\" #test  *ngIf=\"treeFila.length > 0\"></tree>\r\n</div>\r\n<div mat-dialog-actions class=\"wrap-buttons tree-bottom\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"cancel()\">Fechar</button>\r\n\t<button class=\"btn btn-primary\" (click)=\"atualizar()\" cdkFocusInitial>Atualizar</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['','configuracao','lista-templates']\">Templates de Análise</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/configuracao/template', templateId]\">Cadastro de Template</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Botões de Decisão</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Configuração dos Botões de Decisão</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<section class=\"example-section\">\r\n\t\t\t\t<mat-checkbox class=\"mr-4\" *ngFor=\"let button of buttonTypes\" [value]=\"button[1]\" (change)=\"chooseButton($event)\" [checked]=\"isChecked(button)\" >{{ button[0] }}</mat-checkbox>\r\n\t\t\t</section>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mt-5\" *ngIf=\"choosedButtonType.length > 0\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<mat-tab-group>\r\n\t\t\t\t<mat-tab *ngFor=\"let buttonType of choosedButtonType\" [label]=\"buttonType[0]\">\r\n\t\t\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t\t\t<form [formGroup]=\"getFormGeneralSettings(buttonType[1])\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Para o botão permanecer ou se tornar habilitado deve satisfazer:</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"mustSatisfy\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"all\">Todas as condições</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"onlyOne\">Ao menos uma condição</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-4 radioButtonAdjust\">\r\n\t\t\t\t\t\t\t\t\t<mat-label>Desabilitado por Padrão?</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-group aria-label=\"\" formControlName=\"disabledByDefault\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"true\">Sim</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"false\">Não</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t<form [formGroup]=\"getFormAddField(buttonType[1])\">\r\n\t\t\t\t\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<h4>Adicionar Condição:</h4>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Campo</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"field\" (selectionChange)=\"setFieldToConditionToEnable($event, buttonType[1])\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-optgroup label=\"Caixa de Texto\" *ngIf=\"getFields('input').length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let field of getFields('input')\" [value]=\"field.name\">{{ field.name }} - {{ field.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-optgroup label=\"Caixa de Seleção\" *ngIf=\"getFields('checkbox').length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let field of getFields('checkbox')\" [value]=\"field.name\">{{ field.name }} - {{ field.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-optgroup label=\"Lista Suspensa\" *ngIf=\"getFields('select').length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let field of getFields('select')\" [value]=\"field.name\">{{ field.name }} - {{ field.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-optgroup label=\"Radio Button\" *ngIf=\"getFields('radiobutton').length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let field of getFields('radiobutton')\" [value]=\"field.name\">{{ field.name }} - {{ field.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Operador</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"operator\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option [value]=\"operator[0]\" *ngFor=\"let operator of operators\">{{ operator[1] }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-4\" *ngIf=\"showConditionToEnableInput\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Valor</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"value\" placeholder=\"Valor\" />\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-4\" *ngIf=\"showConditionToEnableSelect\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Valor</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"value\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of conditionsToEnableOptions\" [value]=\"option.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{ option.label }}\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-4\" *ngIf=\"showConditionToEnableCheckbox\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Valor</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"value\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"true\">Selecionado</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"false\">Não Selecionado</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" (click)=\"addCondition(buttonType[1])\" [disabled]=\"getFormAddField(buttonType[1]).invalid\" >Adicionar</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t<div class=\"row mt-5\" *ngIf=\"getDataSource(buttonType[1]).data.length > 0\">\r\n\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t\t\t\t\t\t<table mat-table [dataSource]=\"getDataSource(buttonType[1])\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Nome do Campo</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.fieldName }}</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Tipo</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ utilService.getFriendlyType(element.fieldType) }}</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ng-container matColumnDef=\"operator\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Operador</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ utilService.getFriendlyOperator(element.operator) }}</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ng-container matColumnDef=\"value\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Valor</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ utilService.getFriendlyValue(element) }}</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteCondition(element, buttonType[1])\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">delete</i> \r\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row  mt-5\" *ngIf=\"choosedButtonType.length === 0\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\tAinda não há botões de decisão associados a esse template\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mt-5 mb-3\">\r\n\t\t<div class=\"col-3\">\r\n\t\t\t<button class=\"btn btn-primary\" [routerLink]=\"['/configuracao/template', templateId]\">Voltar</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-6 text-center\">\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"saveConfigurations()\">Salvar Configurações</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/create-template/create-template.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/create-template/create-template.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['','configuracao','lista-templates']\">Templates de Análise</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Cadastro de Template</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Cadastro de Template</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Nome do Template</mat-label>\r\n\t\t\t\t\t\t\t\t<input formControlName=\"name\" matInput placeholder=\"Nome do Template\" />\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<div class=\"form-group radioButtonAdjust\">\r\n\t\t\t\t\t\t\t<mat-label>Será usado para abertura de chamado?</mat-label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"operacaoEstatica\" aria-label=\"Será usado para abertura de chamado?\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"true\">Sim</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"false\">Não</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Operação Associada ao Template</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n\t\t\t\t\t\t\t\t\t\t{{ operation.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Atividade dessa Operação</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select formControlName=\"atividadeId\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let activity of activities\" [value]=\"activity.id\">\r\n\t\t\t\t\t\t\t\t\t\t{{ activity.nome }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron text-center\">\r\n\t\t\t\t<button class=\"btn btn-primary mr-3\" (click)=\"addStep()\">Adicionar Passos ao Template</button>\r\n\t\t\t\t<button class=\"btn btn-primary\" [routerLink]=\"['/configuracao/template', templateId, 'botoes-decisao']\">Configurar Botões de Decisão</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<h3 class=\"mb-3\">Passos Adicionados</h3>\r\n\r\n\t<div cdkDropList class=\"container-fluid mat-elevation-z8 mb-4\" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"postTemplate.template.steps.length > 0\">\r\n\t\t<div class=\"row drag-drop-top\">\r\n\t\t\t<div class=\"col-1 text-center\">#</div>\r\n\t\t\t<div class=\"col-4\">Título do Passo</div>\r\n\t\t\t<div class=\"col-2 text-center\">Qtde. de Grupos de Campo</div>\r\n\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t<div class=\"col-1\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"drag-drop-box row\" *ngFor=\"let step of steps; let i = index\" cdkDrag>\r\n\t\t\t<div class=\"col-1 text-center\">{{ getIndex(i) }}</div>\r\n\t\t\t<div class=\"col-4\">{{ step.name }}</div>\r\n\t\t\t<div class=\"col-2 text-center\">{{ step.fieldGroups.length }}</div>\r\n\t\t\t<div class=\"col-2 text-center icones\">\r\n\t\t\t\t<a [routerLink]=\"['/configuracao/template', templateId, 'step', step.index]\">\r\n\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-2 text-center icones\">\r\n\t\t\t\t<a (click)=\"removeStep(step.index)\">\r\n\t\t\t\t\t<i class=\"material-icons\">delete_outline</i> \r\n\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Remover</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-1 text-center icones\">\r\n\t\t\t\t<i class=\"material-icons\">drag_handle</i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mt-5 mb-3\">\r\n\t\t<div class=\"col-4\">\r\n\t\t\t<button type=\"button\" [routerLink]=\"['/configuracao/lista-templates']\" class=\"btn btn-danger\">VOLTAR A LISTA</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-4 text-center\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"addNewTemplate()\">\r\n\t\t\t\t{{ labelButton }}\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-4 text-right\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/template', templateId, 'preview']\">Pré-Visualizar Template</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/field-group/field-group.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/field-group/field-group.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item  material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['','configuracao','configuracao']\">Templates de Análise</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Cadastro de Template</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">{{ postTemplate.nome }}</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Editar Grupo de Campos</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<label>Nome do Passo</label>\r\n\t\t\t<p><strong>{{ step.name }}</strong></p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<label>Nome do Grupo de Campos</label>\r\n\t\t\t<p><strong>{{ fieldGroup.name }}</strong></p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<app-add-field-form \r\n\t\t\t\t[formFields]=\"formFields\" \r\n\t\t\t\t[editingField]=\"editingField\" \r\n\t\t\t\t(saveField)=\"addField($event)\" \r\n\t\t\t\t#addFieldFormComponent>\r\n\t\t\t</app-add-field-form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div cdkDropList (cdkDropListDropped)=\"drop($event)\" class=\"mat-elevation-z8 mb-4\" *ngIf=\"fieldGroup.fields.length > 0\" >\r\n\t\t<div class=\"containerTable\">\r\n\t\t\t<table>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<th class=\"text-center\">#</th>\r\n\t\t\t\t\t<th>Nome do Campo</th>\r\n\t\t\t\t\t<th>Tipo</th>\r\n\t\t\t\t\t<th class=\"text-center\">Visível</th>\r\n\t\t\t\t\t<th class=\"text-center\">Desabilitado</th>\r\n\t\t\t\t\t<th class=\"text-center\">Obrigatório</th>\r\n\t\t\t\t\t<th class=\"text-center\">Largura</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let field of fieldGroup.fields; let i = index\" cdkDrag>\r\n\t\t\t\t\t\t<td colspan=\"10\" class=\"p-0\" *cdkDragPlaceholder><div class=\"example-custom-placeholder\">&nbsp;</div></td>\r\n\t\t\t\t\t\t<td class=\"text-center\">{{ getIndex(i) }}</td>\r\n\t\t\t\t\t\t<td>{{ field.name }}</td>\r\n\t\t\t\t\t\t<td>{{ field.type === \"button\" ? utilService.getFriendlyButtonType(field.buttonType) : utilService.getFriendlyType(field.type) }}</td>\r\n\t\t\t\t\t\t<td class=\"text-center\">{{ utilService.getFriendlyBoolean(field.visible) }}</td>\r\n\t\t\t\t\t\t<td class=\"text-center\">{{ utilService.getFriendlyBoolean(field.disabled) }}</td>\r\n\t\t\t\t\t\t<td class=\"text-center\">{{ utilService.getFriendlyBoolean(field.required) }}</td>\r\n\t\t\t\t\t\t<td class=\"text-center\">{{ utilService.getFriendlyWidht(field.cssGrid) }}</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a (click)=\"editField(field)\" *ngIf=\"field.predefined !== true\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">edit</i> \r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a (click)=\"removeField(field)\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">delete_outline</i> \r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">drag_handle</i>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row mb-3\">\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/template', templateId, 'step', stepIndex ]\">Voltar</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-6 text-right\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/template', templateId, 'preview']\">Pré-Visualizar Template</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/list-template/list-template.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/list-template/list-template.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Templates de Análise</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Templates de Análise</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro por palavras\">\r\n\t\t\t</mat-form-field>\r\n\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column\">ID</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column\">{{ element.templateId }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"templateName\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Nome do Template</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.nome }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"activity\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Atividade Associada ao Template</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.atividade.nome }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/configuracao/template', element.templateId]\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons blue\">search</i> \r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Ver Detalhes</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/configuracao/template/new', element.templateId]\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons blue\">queue</i> \r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Clonar Template</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t</table>\r\n\t\t\t<mat-paginator \r\n\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 50, 100]\" \r\n\t\t\t\t[length]=\"totalItens\" \r\n\t\t\t\t[pageIndex]=\"0\" \r\n\t\t\t\t[pageSize]=\"100\"\r\n\t\t\t\tshowFirstLastButtons\r\n\t\t\t></mat-paginator>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row mt-5 mb-3\">\r\n\t\t<div class=\"col-lg-12 text-center\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" routerLink=\"/configuracao/template/new\">CADASTRAR NOVO TEMPLATE</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">assignment_returned</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Motivos Contingência</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Motivos Contingência</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"jumbotron\">\r\n\t\t<h3 class=\"mb-4\">Pesquisar</h3>\r\n\t\t<form [formGroup]=\"formSearch\" autocomplete=\"off\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-label>Descrição do Motivo de Contingência</mat-label>\r\n\t\t\t\t\t\t<input formControlName=\"descricaoMotivo\" matInput placeholder=\"Descrição do Motivo de Contingência\"/>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 d-flex justify-content-center\">\r\n\t\t\t\t\t<button (click)=\"getMotivosContingencia()\" type=\"button\" class=\"btn btn-success mr-2\">Pesquisar</button>\r\n\t\t\t\t\t<button  [routerLink]=\"['','configuracao', 'add-motivos-contingencia']\" type=\"button\" class=\"btn btn-success\">Adicionar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\r\n\t</div>\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"pouchs.length == 0\" >\r\n\t\t\t<label>Não há Motivos de Contingência</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"pouchs.length > 0\" >\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Motivo de Contingência</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"ativo\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Ativo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ (element.ativo? 'Sim' : 'Não' )}}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"editar\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\"></th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['','configuracao', 'add-motivos-contingencia', element.motivoContingenciaId]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">edit</i> \r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">assignment_returned</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Motivos Rejeição</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Motivos Rejeição</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"jumbotron\">\r\n\t\t<h3 class=\"mb-4\">Pesquisar</h3>\r\n\t\t<form [formGroup]=\"formSearch\" autocomplete=\"off\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-label>Descrição do Motivo de Rejeição</mat-label>\r\n\t\t\t\t\t\t<input formControlName=\"descricaoMotivo\" matInput placeholder=\"Descrição do Motivo de Rejeição\"/>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 d-flex justify-content-center\">\r\n\t\t\t\t\t<button (click)=\"getMotivosRejeicao()\" type=\"button\" class=\"btn btn-success mr-2\">Pesquisar</button>\r\n\t\t\t\t\t<button  [routerLink]=\"['','configuracao', 'add-motivos-rejeicao']\" type=\"button\" class=\"btn btn-success\">Adicionar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\r\n\t</div>\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"pouchs.length == 0\" >\r\n\t\t\t<label>Não há Motivos de Rejeição</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"pouchs.length > 0\" >\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Motivo de Rejeição</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"ativo\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Ativo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ (element.ativo? 'Sim' : 'Não' )}}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"editar\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\"></th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['','configuracao', 'add-motivos-rejeicao', element.motivoRejeicaoId]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">edit</i> \r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Cadastro de Operação Grupo</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Formulário de Operação Grupo</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Formulário de Operação Grupo <span *ngIf=\"id\">{{id}}</span></h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formEntity\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Nome</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" #elementNome matInput placeholder=\"Nome\" maxlength=\"180\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"save()\" type=\"button\" class=\"btn btn-success\">Salvar</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"row mb-4 mt-4\" *ngIf=\"id\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Operações Associadas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div  class=\"col-lg-12\" *ngIf=\"id && length === 0\">\r\n\t\t<label>Não há operações associadas</label>\r\n\t</div>\r\n\t<div class=\"col-lg-12\" *ngIf=\"id && length > 0\">\r\n\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\r\n\t\t\t\t<ng-container matColumnDef=\"operacaoId\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Código</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.operacaoId }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nome }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/configuracao/operacoes/formulario', element.operacaoId]\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\t\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\r\n\t<div class=\"row mb-3\">\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/operacao-grupos']\">Voltar</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Cadastro de Operação Grupo</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Cadastro de Operação Grupo</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"row col-lg-12 pr-0\">\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<form [formGroup]=\"formFilter\" autocomplete=\"off\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput formControlName=\"nome\" placeholder=\"Filtre pelo nome\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-3 align-button-header\">\r\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"find()\">FILTRAR</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"offset-5 col-1 align-button-header text-right pr-0\">\r\n\t\t\t\t<button class=\"btn btn-success\" (click)=\"newRegister()\">NOVO</button>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t\t<div  class=\"col-lg-12\" *ngIf=\"length === 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Código</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.operacaoGrupoId }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['formulario',element.operacaoGrupoId]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation/operation-form/operation-form.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation/operation-form/operation-form.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Cadastro de Operação</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Formulário de Operação</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Formulário de Operação <span *ngIf=\"id\">{{id}}</span></h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formEntity\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Nome</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" #elementNome matInput placeholder=\"Nome\" maxlength=\"180\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Descrição</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"descricao\" #elementNome matInput placeholder=\"Descrição\" maxlength=\"180\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Local</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"local\" #elementNome matInput placeholder=\"Local\" maxlength=\"180\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-label>Operação Grupo</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-select matNativeControl formControlName=\"operacaoGrupoId\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of operacoes\" [value]=\"item.operacaoGrupoId\">{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"save()\" type=\"button\" class=\"btn btn-success\">Salvar</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"row mb-4 mt-4\" *ngIf=\"id\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Atividades Associadas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div  class=\"col-lg-12\" *ngIf=\"id && length === 0\">\r\n\t\t<label>Não há atividades associadas</label>\r\n\t</div>\r\n\t<div class=\"col-lg-12\" *ngIf=\"id && length > 0\">\r\n\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\r\n\t\t\t\t<ng-container matColumnDef=\"atividadeId\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Código</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.id }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nome }}</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['/configuracao/atividades/formulario/', element.id]\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\t\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\r\n\t<div class=\"row mb-3\">\r\n\t\t<div class=\"col-6\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/operacoes']\">Voltar</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation/operation-list/operation-list.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation/operation-list/operation-list.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Cadastro de Operação</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Cadastro de Operação</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<form [formGroup]=\"formFilter\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput formControlName=\"nome\" placeholder=\"Filtre pelo nome\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Operação Grupo</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select matNativeControl formControlName=\"operacaoGrupoId\">\r\n\t\t\t\t\t\t\t\t\t<mat-option  >Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of operacoes\" [value]=\"item.operacaoGrupoId\">{{ item.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t\t<div class=\"col-3 align-button-header\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"find()\">FILTRAR</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-3 align-button-header text-right\">\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"newRegister()\">NOVO</button>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div  class=\"col-lg-12\" *ngIf=\"length === 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Código</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.operacaoId }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nome\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"descricao\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Descrição</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.descricao }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"local\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Local</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.local }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"grupo\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Grupo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.grupo?.nome }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['formulario',element.operacaoId]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">edit</i> \r\n\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Editar</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title class=\"mb-4\">{{ data.title }}</h1>\r\n\r\n<div mat-dialog-content>\r\n\t<div class=\"scroll\">\r\n\t\t<pre>{{ formatedData | json }}</pre>\r\n\t</div>\r\n</div>\r\n\r\n<div mat-dialog-actions class=\"wrap-buttons\">\r\n\t<button class=\"btn btn-primary\" (click)=\"submit()\" cdkFocusInitial>Fechar</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/preview-template/preview-template.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/preview-template/preview-template.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">settings</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['','configuracao','lista-templates']\">Templates de Análise</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['','configuracao','template',templateId]\">Cadastro de Template</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Preview</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-9\">\r\n\t\t\t\t<h3>Pré-Visualização do Template</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-3 text-right\">\r\n\t\t\t\t<button class=\"btn btn-danger\" (click)=\"goBack()\">Voltar a Tela de Cadastro</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<app-template *ngIf=\"template\" \r\n\t\t[template]=\"template\" \r\n\t\t[content]=\"content\"\r\n\t\t[type]=\"type\" \r\n\t\t[galleries]=\"galleries\" \r\n\t\t(submitTemplate)=\"submit($event)\">\r\n\t</app-template>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/step/step.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/step/step.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Configuração</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Templates de Análise</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Cadastro de Template</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">{{ postTemplate.nome }}</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class=\"row mb-4 mt-4\">\r\n\t\t<div class=\"col-lg-12 \">\r\n\t\t\t<h1>Cadastro de Passo</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t\t<div class=\"row mb-3\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Nome do Passo</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"nameStep\" matInput placeholder=\"Nome do Passo\" />\r\n\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t\t<div class=\"row mb-3\">\r\n\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t<h3>Adicionar Grupo de Campos</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Nome do Grupo de Campos</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nameFieldGroup\" matInput placeholder=\"Nome do Grupo de Campos\" />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary mb_5\" (click)=\"addFieldGroup()\" [disabled]=\"form.invalid\">Adicionar Grupo de Campo</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div cdkDropList class=\"container-fluid mat-elevation-z8 mb-4\" (cdkDropListDropped)=\"drop($event)\" *ngIf=\"fieldGroups.length > 0\">\r\n\t\t<div class=\"row drag-drop-top\">\r\n\t\t\t<div class=\"col-1 text-center\">#</div>\r\n\t\t\t<div class=\"col-4\">Nome do Grupo de Campos</div>\r\n\t\t\t<div class=\"col-2 text-center\">Qtde. de Campos</div>\r\n\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t<div class=\"col-2\"></div>\r\n\t\t\t<div class=\"col-1\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"drag-drop-box row\" *ngFor=\"let fieldGroup of fieldGroups; let i = index\" cdkDrag>\r\n\t\t\t<div class=\"col-1 text-center\">{{ getIndex(i) }}</div>\r\n\t\t\t<div class=\"col-4\">{{ fieldGroup.name }}</div>\r\n\t\t\t<div class=\"col-2 text-center\">{{ fieldGroup.fields.length }}</div>\r\n\t\t\t<div class=\"col-2 text-center icones\">\r\n\t\t\t\t<a [routerLink]=\"['/configuracao/template', templateId, 'step', step.index, 'grupo-campos', fieldGroup.index]\">\r\n\t\t\t\t\t<i class=\"material-icons blue\">ballot</i> \r\n\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Gerenciar Campos</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-2 text-center icones\">\r\n\t\t\t\t<a (click)=\"removeFieldGroup(fieldGroup.name)\">\r\n\t\t\t\t\t<i class=\"material-icons blue\">delete_outline</i> \r\n\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Remover</span>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-1 text-center icones\">\r\n\t\t\t\t<i class=\"material-icons\">drag_handle</i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<mat-divider class=\"mt-4 mb-4\"></mat-divider>\r\n\r\n\t<div class=\"row mb-3\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/configuracao/template', templateId]\">Voltar</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./src/app/models/motivos-contingencia.model.ts":
/*!******************************************************!*\
  !*** ./src/app/models/motivos-contingencia.model.ts ***!
  \******************************************************/
/*! exports provided: MotivosContingencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosContingencia", function() { return MotivosContingencia; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MotivosContingencia {
    constructor(motivoContingenciaId, nome, ativo, operacaoGrupos) {
        this.motivoContingenciaId = motivoContingenciaId;
        this.nome = nome;
        this.ativo = ativo;
        this.operacaoGrupos = operacaoGrupos;
    }
}


/***/ }),

/***/ "./src/app/models/motivos-rejeicao.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/motivos-rejeicao.model.ts ***!
  \**************************************************/
/*! exports provided: MotivosRejeicao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosRejeicao", function() { return MotivosRejeicao; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MotivosRejeicao {
    constructor(motivoRejeicaoId, nome, ativo, operacaoGrupos) {
        this.motivoRejeicaoId = motivoRejeicaoId;
        this.nome = nome;
        this.ativo = ativo;
        this.operacaoGrupos = operacaoGrupos;
    }
}


/***/ }),

/***/ "./src/app/models/post-template.class.ts":
/*!***********************************************!*\
  !*** ./src/app/models/post-template.class.ts ***!
  \***********************************************/
/*! exports provided: PostTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTemplate", function() { return PostTemplate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PostTemplate {
}


/***/ }),

/***/ "./src/app/modules/configuration-system/activity/activity-form/activity-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/activity/activity-form/activity-form.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle {\n  position: relative;\n  top: 15px;\n  margin-right: 40px;\n}\n\n.btn.btn-primary {\n  position: relative;\n  top: 10px;\n}\n\n.btn.btn-success {\n  position: relative;\n  top: 10px;\n}\n\n.blue {\n  color: #2196f3;\n}\n\n.result {\n  margin-top: 30px;\n}\n\n.result label {\n  font-weight: bold;\n}\n\n.radioButtonAdjust mat-radio-button {\n  margin-right: 0px !important;\n}\n\n.select-custom {\n  color: #ced4da;\n  border-bottom: solid 1px #ced4da;\n}\n\n.item-list-custom {\n  color: #495057;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9hY3Rpdml0eS9hY3Rpdml0eS1mb3JtL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxcYWN0aXZpdHlcXGFjdGl2aXR5LWZvcm1cXGFjdGl2aXR5LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWN0aXZpdHkvYWN0aXZpdHktZm9ybS9hY3Rpdml0eS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7QUNFUjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWN0aXZpdHkvYWN0aXZpdHktZm9ybS9hY3Rpdml0eS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICAgIGNvbG9yOiAjMjE5NmYzO1xyXG59XHJcblxyXG4ucmVzdWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yYWRpb0J1dHRvbkFkanVzdCBtYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3QtY3VzdG9te1xyXG4gICAgY29sb3I6ICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItYm90dG9tOiAgc29saWQgMXB4ICNjZWQ0ZGE7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QtY3VzdG9te1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbn0iLCIubWF0LXNsaWRlLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi5idG4uYnRuLXByaW1hcnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cblxuLmJ0bi5idG4tc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG4ucmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZXN1bHQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJhZGlvQnV0dG9uQWRqdXN0IG1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LWN1c3RvbSB7XG4gIGNvbG9yOiAjY2VkNGRhO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NlZDRkYTtcbn1cblxuLml0ZW0tbGlzdC1jdXN0b20ge1xuICBjb2xvcjogIzQ5NTA1Nztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/activity/activity-form/activity-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/activity/activity-form/activity-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ActivityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityFormComponent", function() { return ActivityFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/modules/configuration-system/services/activity.service.ts");
/* harmony import */ var _services_operation_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/operation-group.service */ "./src/app/modules/configuration-system/services/operation-group.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/motivos-rejeicao.service */ "./src/app/modules/configuration-system/services/motivos-rejeicao.service.ts");
/* harmony import */ var src_app_shared_validators_form_validators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/validators/form-validators */ "./src/app/shared/validators/form-validators.ts");
/* harmony import */ var src_app_shared_dateAdapter_custom_convert_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dateAdapter/custom-convert-date */ "./src/app/shared/dateAdapter/custom-convert-date.ts");












let ActivityFormComponent = class ActivityFormComponent {
    constructor(activatedRoute, formBuilder, service, router, matSnackBar, serviceOperationGroup, serviceReason, dialog) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.serviceOperationGroup = serviceOperationGroup;
        this.serviceReason = serviceReason;
        this.dialog = dialog;
        this.displayedColumnsWorkflow = ['tipo', 'execucao', 'tarefa', 'actions'];
        this.displayedColumnsAction = ['id', 'nome', 'valor', 'codigoExterno', 'centroCusto', 'actions'];
        this.displayedColumnsReason = ['nome', 'actions'];
        this.tipoPerfis = [];
        this.dataSourceAcoes = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceMotivos = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.dataSourceWorkflows = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.loader = false;
        this.operacoes = [];
        this.operacaoGrupos = [];
        this.atividades = [];
        this.motivosRejeicao = [];
        this.workflows = [];
    }
    ngOnInit() {
        this.listaExecucaoWorkflow = [
            { id: 1, nome: 'Sempre', tipo: 2 },
            { id: 2, nome: 'Quando Aprovação', tipo: 1 },
            { id: 3, nome: 'Quando Reprovação', tipo: 1 }
        ];
        this.listaTipoWorkflow = [
            { id: 1, nome: 'Derivação' },
            { id: 2, nome: 'Paralelismo' },
        ];
        this.loader = true;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.formEntity = this.formBuilder.group({
            operacaoGrupoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            operacaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipoPessoa: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            controlaAutenticidade: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            requerDocumentoExtra: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            moduloAnaliseServiceCenter: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sla: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_validators_form_validators__WEBPACK_IMPORTED_MODULE_10__["FormValidator"].horaMinutoTimeSpan]],
            leadTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_shared_validators_form_validators__WEBPACK_IMPORTED_MODULE_10__["FormValidator"].horaMinutoTimeSpan]],
            validacaoDocumento: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formAction = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            codigoExterno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            centroCusto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.formReason = this.formBuilder.group({
            motivoRejeicao: ['']
        });
        this.formWorkflow = this.formBuilder.group({
            tipo: [''],
            execucao: [''],
            workflowAtividadeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.get(this.id);
    }
    linkAction() {
        if (this.formAction.valid) {
            const cCusto = { id: this.formAction.value.centroCusto, nome: '' };
            const action = {
                codigoExterno: this.formAction.value.codigoExterno,
                valor: this.formAction.value.valor,
                nome: this.formAction.value.nome,
                id: 0,
                centroCusto: cCusto
            };
            this.entity.acoes.push(action);
            this.dataSourceAcoes = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.entity.acoes);
            this.formAction.reset();
        }
        else {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, "Favor reveja os campos obrigatórios ao associar uma ação");
        }
    }
    unlinkAction(item) {
        this.entity.acoes = this.entity.acoes.filter(x => x !== item);
        this.dataSourceAcoes = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.entity.acoes);
    }
    unlinkReason(item) {
        this.entity.motivosRejeicao = this.entity.motivosRejeicao.filter(x => x !== item);
        this.dataSourceMotivos = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.entity.motivosRejeicao);
    }
    linkReason() {
        if (this.formReason.valid) {
            const exist = this.entity.motivosRejeicao.find(x => x.id === this.formReason.value.motivoRejeicao);
            if (!exist) {
                const descricaoMotivo = this.motivosRejeicao.find(x => x.motivoRejeicaoId === this.formReason.value.motivoRejeicao);
                const motivo = {
                    id: this.formReason.value.motivoRejeicao,
                    motivoRejeicaoId: this.formReason.value.motivoRejeicao,
                    nome: descricaoMotivo.nome,
                    descricao: descricaoMotivo.nome
                };
                this.entity.motivosRejeicao.push(motivo);
                this.dataSourceMotivos = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.entity.motivosRejeicao);
            }
        }
        else {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, "Favor reveja os campos obrigatórios ao associar um motivo de rejeição");
        }
    }
    unlinkWorkflow(item) {
        this.entity.workflows = this.entity.workflows.filter(x => x !== item);
        this.dataSourceWorkflows = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.entity.workflows);
    }
    linkWorkflow() {
        if (this.formWorkflow.valid) {
            const exist = this.entity.workflows.find(x => x.tipoWorkflow.id === this.formWorkflow.value.tipo && x.tipoExecucaoWorkflow.id === this.formWorkflow.value.execucao && x.atividadeTarefa.id === this.formWorkflow.value.workflowAtividadeId);
            if (!exist) {
                const atividadeSelect = this.atividades.find(x => x.id === this.formWorkflow.value.workflowAtividadeId);
                const tipoSelect = this.listaTipoWorkflow.find(x => x.id === this.formWorkflow.value.tipo);
                const execucaoSelect = this.listaExecucaoWorkflow.find(x => x.id === this.formWorkflow.value.execucao);
                const work = {
                    id: 0,
                    tipoWorkflow: {
                        id: this.formWorkflow.value.tipo,
                        nome: tipoSelect.nome
                    },
                    tipoExecucaoWorkflow: {
                        id: this.formWorkflow.value.execucao,
                        nome: execucaoSelect.nome
                    },
                    atividadeTarefa: {
                        id: this.formWorkflow.value.workflowAtividadeId,
                        nome: atividadeSelect.nome
                    },
                };
                this.entity.workflows.push(work);
                this.dataSourceWorkflows = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.entity.workflows);
            }
        }
        else {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, "Favor reveja os campos obrigatórios ao associar um workflow");
        }
    }
    transformObject() {
        this.entity.id = +this.id;
        this.entity.operacaoId = this.formEntity.value.operacaoId;
        this.entity.nome = this.formEntity.value.nome;
        this.entity.tipoPessoaId = this.formEntity.value.tipoPessoa;
        this.entity.controlaAutenticidade = this.formEntity.value.controlaAutenticidade;
        this.entity.requerDocumentoExtra = this.formEntity.value.requerDocumentoExtra;
        this.entity.moduloAnaliseServiceCenter = this.formEntity.value.moduloAnaliseServiceCenter;
        this.entity.validacaoDocumento = Number(this.formEntity.value.validacaoDocumento);
        this.entity.sla = src_app_shared_dateAdapter_custom_convert_date__WEBPACK_IMPORTED_MODULE_11__["CustomConvertDate"].diaHoraToTimeSpan(this.formEntity.value.sla);
        this.entity.leadTime = src_app_shared_dateAdapter_custom_convert_date__WEBPACK_IMPORTED_MODULE_11__["CustomConvertDate"].diaHoraToTimeSpan(this.formEntity.value.leadTime);
    }
    save() {
        if (this.formEntity.valid) {
            this.loader = true;
            this.transformObject();
            this.service.save(this.entity).subscribe(response => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.router.navigate(['/configuracao/atividades']);
                this.loader = false;
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loader = false;
            });
        }
        else {
            this.formEntity.markAllAsTouched();
        }
    }
    setOperation() {
        this.formEntity.controls['operacaoId'].setValue(null);
        this.operacoes = this.operacaoGrupos
            .find(x => x.operacaoGrupoId === this.formEntity.value.operacaoGrupoId).operacoes;
    }
    setTipoWorkflow() {
        this.formWorkflow.controls['execucao'].setValue(null);
        this.listaExecucaoWorkflowSelect = this.listaExecucaoWorkflow
            .filter(x => x.tipo === this.formWorkflow.value.tipo);
    }
    get(id) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.service.centroCustos(), this.serviceOperationGroup.list(), this.serviceReason.list(), this.service.getAll(), this.service.get(this.id)).subscribe(([_listCentroCusto, _listOperationGroup, _listReason, _listActiviity, _entity]) => {
            this.centroCustos = _listCentroCusto.data;
            this.operacaoGrupos = _listOperationGroup.data;
            this.motivosRejeicao = _listReason.data;
            this.atividades = _listActiviity.data;
            if (_entity) {
                this.entity = _entity.data;
                this.operacoes = this.operacaoGrupos
                    .find(x => x.operacaoGrupoId === this.entity.operacao.grupo.operacaoGrupoId).operacoes;
                this.formEntity.controls['nome'].setValue(this.entity.nome);
                this.formEntity.controls['operacaoGrupoId'].setValue(this.entity.operacao.grupo.operacaoGrupoId);
                this.formEntity.controls['operacaoId'].setValue(this.entity.operacao.operacaoId);
                this.formEntity.controls['leadTime'].setValue(src_app_shared_dateAdapter_custom_convert_date__WEBPACK_IMPORTED_MODULE_11__["CustomConvertDate"].timeSpanToDiaHora(this.entity.leadTime));
                this.formEntity.controls['sla'].setValue(src_app_shared_dateAdapter_custom_convert_date__WEBPACK_IMPORTED_MODULE_11__["CustomConvertDate"].timeSpanToDiaHora(this.entity.sla));
                this.formEntity.controls['tipoPessoa'].setValue(String(this.entity.tipoPessoaId));
                this.formEntity.controls['controlaAutenticidade'].setValue(String(this.entity.controlaAutenticidade));
                this.formEntity.controls['requerDocumentoExtra'].setValue(String(this.entity.requerDocumentoExtra));
                this.formEntity.controls['moduloAnaliseServiceCenter'].setValue(String(this.entity.moduloAnaliseServiceCenter));
                this.formEntity.controls['validacaoDocumento'].setValue(String(this.entity.validacaoDocumento));
                this.dataSourceAcoes = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_entity.data.acoes);
                this.dataSourceMotivos = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_entity.data.motivosRejeicao);
                this.dataSourceWorkflows = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_entity.data.workflows);
            }
            else {
                this.entity = {
                    acoes: [],
                    motivosRejeicao: [],
                    atividadeFilha: false,
                    controlaAutenticidade: false,
                    requerDocumentoExtra: false,
                    moduloAnaliseServiceCenter: false,
                    operacao: null,
                    template: null,
                    fila: null,
                    operacaoId: null,
                    tipoPessoa: null,
                    pessoaJuridica: null,
                    tipoPessoaId: null,
                    leadTime: null,
                    sla: null,
                    nome: null,
                    codigoExterno: null,
                    hasTemplate: null,
                    id: null,
                    workflows: [],
                    validacaoDocumento: 0
                };
            }
            this.loader = false;
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
};
ActivityFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _services_operation_group_service__WEBPACK_IMPORTED_MODULE_7__["OperationGroupService"] },
    { type: _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_9__["MotivosRejeicaoService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('elementNome', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ActivityFormComponent.prototype, "nomeElement", void 0);
ActivityFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/activity/activity-form/activity-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-form.component.scss */ "./src/app/modules/configuration-system/activity/activity-form/activity-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _services_operation_group_service__WEBPACK_IMPORTED_MODULE_7__["OperationGroupService"],
        _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_9__["MotivosRejeicaoService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], ActivityFormComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/activity/activity-list/activity-list.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/activity/activity-list/activity-list.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".completed {\n  background-color: #c8e6c9;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.align-button-header {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9hY3Rpdml0eS9hY3Rpdml0eS1saXN0L0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxcYWN0aXZpdHlcXGFjdGl2aXR5LWxpc3RcXGFjdGl2aXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWN0aXZpdHkvYWN0aXZpdHktbGlzdC9hY3Rpdml0eS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWN0aXZpdHkvYWN0aXZpdHktbGlzdC9hY3Rpdml0eS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xyXG59XHJcblxyXG4uZmlyc3QtY29sdW1uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1JTtcclxufVxyXG5cclxuLmFsaWduLWJ1dHRvbi1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbn0iLCIuY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcbn1cblxuLmZpcnN0LWNvbHVtbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUlO1xufVxuXG4uYWxpZ24tYnV0dG9uLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/configuration-system/activity/activity-list/activity-list.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/activity/activity-list/activity-list.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ActivityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityListComponent", function() { return ActivityListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_operation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/operation.service */ "./src/app/modules/configuration-system/services/operation.service.ts");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/activity.service */ "./src/app/modules/configuration-system/services/activity.service.ts");










let ActivityListComponent = class ActivityListComponent {
    constructor(formBuilder, service, serviceActivityroup, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.serviceActivityroup = serviceActivityroup;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.displayedColumns = ['id', 'nome', 'grupo', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.filterDebounce = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.loader = true;
        this.operacoes = [];
    }
    ngOnInit() {
        this.formFilter = this.formBuilder.group({
            nome: [''],
            operacaoId: [''],
        });
        this.serviceActivityroup.list().subscribe(response => {
            this.operacoes = response.data;
            this.find(false);
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    ngAfterViewInit() {
        if (this.paginator) {
            this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.find(false))).subscribe();
        }
    }
    find(reset) {
        this.loader = true;
        if (reset) {
            this.pageIndex = 0;
        }
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.service.find(pageIndex, pageSize, this.formFilter.value.nome, this.formFilter.value.operacaoId).subscribe(response => {
            this.loader = false;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
            this.length = response.length;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loader = false;
        });
    }
    newRegister() {
        this.router.navigate(['/configuracao/atividades/formulario']);
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.find(false);
    }
};
ActivityListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_9__["ActivityService"] },
    { type: _services_operation_service__WEBPACK_IMPORTED_MODULE_8__["OperationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], ActivityListComponent.prototype, "paginator", void 0);
ActivityListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/activity/activity-list/activity-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-list.component.scss */ "./src/app/modules/configuration-system/activity/activity-list/activity-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_activity_service__WEBPACK_IMPORTED_MODULE_9__["ActivityService"],
        _services_operation_service__WEBPACK_IMPORTED_MODULE_8__["OperationService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], ActivityListComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWRkLW1vdGl2b3MtY29udGluZ2VuY2lhL2FkZC1tb3Rpdm9zLWNvbnRpbmdlbmNpYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddMotivosContingenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMotivosContingenciaComponent", function() { return AddMotivosContingenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_motivos_contingencia_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/motivos-contingencia.model */ "./src/app/models/motivos-contingencia.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _services_motivos_contingencia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/motivos-contingencia.service */ "./src/app/modules/configuration-system/services/motivos-contingencia.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dialog_motivos_contingencia_dialog_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-motivos-contingencia/dialog-motivos-contingencia.component */ "./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.ts");
/* harmony import */ var src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/tree.model */ "./src/app/models/tree.model.ts");
/* harmony import */ var src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/fila.model */ "./src/app/models/fila.model.ts");











let AddMotivosContingenciaComponent = class AddMotivosContingenciaComponent {
    constructor(formBuilder, MotivosContingenciaService, matSnackBar, activatedRoute, dialog, router) {
        this.formBuilder = formBuilder;
        this.MotivosContingenciaService = MotivosContingenciaService;
        this.matSnackBar = matSnackBar;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.router = router;
        this.loader = false;
        this.motivosContingencia = new src_app_models_motivos_contingencia_model__WEBPACK_IMPORTED_MODULE_3__["MotivosContingencia"]();
        this.tipoStatus = [
            { label: 'Ativo', status: true },
            { label: 'Inativo', status: false },
        ];
        this.fila = [];
        this.filas = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['grupo', 'operacao', 'atividade'];
        this.checkedList = [];
    }
    ngOnInit() {
        this.motivoContingenciaId = this.activatedRoute.snapshot.paramMap.get('motivoContingenciaId');
        this.form = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ativo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.motivoContingenciaId != null) {
            this.getMotivoContingenciaId();
        }
        else {
            this.getMotivoContingencia();
        }
    }
    getMotivoContingenciaId() {
        this.loader = true;
        this.MotivosContingenciaService.get(this.motivoContingenciaId).subscribe(response => {
            this.motivosContingencia = response.data;
            this.form.controls['nome'].setValue(this.motivosContingencia.nome);
            this.form.controls['ativo'].setValue(this.motivosContingencia.ativo);
            this.loader = false;
            this.filas = this.motivosContingencia.operacaoGrupos;
            this.dataTree(this.filas);
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    getMotivoContingencia() {
        this.loader = true;
        this.MotivosContingenciaService.getAtividades().subscribe(response => {
            this.motivosContingencia = response.data;
            this.loader = false;
            this.filas = this.motivosContingencia.operacaoGrupos;
            this.dataTree(this.filas);
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    dataTree(fila) {
        let tempTree = [];
        //Grupo operacoes
        fila.map(grupo => {
            let grupoTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__["Tree"]();
            grupoTemp.id = grupo.operacaoGrupoId;
            grupoTemp.name = grupo.operacaoGrupoNome;
            //operacoes
            grupo.operacoes.map(opera => {
                let operacoesTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__["Tree"]();
                operacoesTemp.id = opera.operacaoId;
                operacoesTemp.name = opera.operacaoNome;
                grupoTemp.children.push(operacoesTemp);
                //atividades
                opera.atividades.map(ativ => {
                    let atividadeTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__["Tree"]();
                    atividadeTemp.id = ativ.atividadeId;
                    atividadeTemp.name = ativ.nome;
                    atividadeTemp.checked = ativ.checked;
                    operacoesTemp.children.push(atividadeTemp);
                });
            });
            tempTree.push(grupoTemp);
        });
        this.treeFila = tempTree;
        this.setList(this.treeFila);
    }
    salvarAlteracoes() {
        if (this.form.valid) {
            if (this.motivoContingenciaId != null) {
                this.atualizaMotivosContingencia();
            }
            else {
                this.addMotivosContingencia();
            }
        }
    }
    addMotivosContingencia() {
        if (this.form.valid) {
            this.showErrors = false;
            const form = this.form.value;
            this.loader = true;
            let atividades = [];
            this.checkedList.forEach(item => {
                atividades.push(item.atividadeId);
            });
            this.MotivosContingenciaService.post(form.nome, form.ativo, atividades).subscribe(() => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.router.navigate(['configuracao/motivos-contingencia']);
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loader = false;
            });
        }
        else {
            this.showErrors = true;
        }
    }
    atualizaMotivosContingencia() {
        if (this.form.valid) {
            this.showErrors = false;
            const form = this.form.value;
            this.loader = true;
            let atividades = [];
            this.checkedList.forEach(item => {
                atividades.push(item.atividadeId);
            });
            this.MotivosContingenciaService.put(this.motivoContingenciaId, form.nome, form.ativo, atividades).subscribe(() => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.loader = false;
                this.router.navigate(['configuracao/motivos-contingencia']);
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loader = false;
            });
        }
        else {
            this.showErrors = true;
        }
    }
    listaAtividades() {
    }
    openModal() {
        const dialogRef = this.dialog.open(_dialog_motivos_contingencia_dialog_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_8__["DialogMotivosContingenciaComponent"], {
            height: '80%',
            width: '800px',
            data: this.treeFila
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                //atualiza fila
                this.treeFila.forEach(item => {
                    item.children.forEach(subItem => {
                        subItem.children.forEach(atividade => {
                            result.dataNodes.forEach(newItem => {
                                if (newItem.level == 2 && newItem.id == atividade.id) {
                                    atividade.checked = newItem.checked;
                                }
                            });
                        });
                    });
                });
            }
            this.setList(this.treeFila);
        });
    }
    setList(tree) {
        let tempList = [];
        //Grupo operacoes
        tree.map(grupo => {
            let gpTemp = [];
            gpTemp.operacaoGrupoId = grupo.id;
            gpTemp.operacaoGrupo = grupo.name;
            //operacoes
            grupo.children.map(opera => {
                let opTemp = [];
                opTemp.operacaoId = opera.id;
                opTemp.operacao = opera.name;
                //atividades
                opera.children.map(ativ => {
                    let atTemp = [];
                    atTemp.atividadeId = ativ.id;
                    atTemp.atividade = ativ.name;
                    atTemp.checked = ativ.checked;
                    let grupoTemp = new src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_10__["Fila"]();
                    grupoTemp.operacaoGrupoId = gpTemp.operacaoGrupoId;
                    grupoTemp.operacaoGrupo = gpTemp.operacaoGrupo;
                    grupoTemp.operacaoId = opTemp.operacaoId;
                    grupoTemp.operacao = opTemp.operacao;
                    grupoTemp.atividadeId = atTemp.atividadeId;
                    grupoTemp.atividade = atTemp.atividade;
                    grupoTemp.checked = atTemp.checked;
                    tempList.push(grupoTemp);
                });
            });
        });
        this.checkedList = tempList.filter(item => item.checked);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.checkedList);
    }
};
AddMotivosContingenciaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_motivos_contingencia_service__WEBPACK_IMPORTED_MODULE_6__["MotivosContingenciaService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddMotivosContingenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivos-contingencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-motivos-contingencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-motivos-contingencia.component.scss */ "./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_motivos_contingencia_service__WEBPACK_IMPORTED_MODULE_6__["MotivosContingenciaService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AddMotivosContingenciaComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  margin-top: 20px;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\n.mat-dialog-actions {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.uniorgAtual label {\n  display: block;\n  font-weight: bold;\n  color: #455A64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9hZGQtbW90aXZvcy1jb250aW5nZW5jaWEvZGlhbG9nLW1vdGl2b3MtY29udGluZ2VuY2lhL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxcYWRkLW1vdGl2b3MtY29udGluZ2VuY2lhXFxkaWFsb2ctbW90aXZvcy1jb250aW5nZW5jaWFcXGRpYWxvZy1tb3Rpdm9zLWNvbnRpbmdlbmNpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9hZGQtbW90aXZvcy1jb250aW5nZW5jaWEvZGlhbG9nLW1vdGl2b3MtY29udGluZ2VuY2lhL2RpYWxvZy1tb3Rpdm9zLWNvbnRpbmdlbmNpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNBSjs7QURJSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWRkLW1vdGl2b3MtY29udGluZ2VuY2lhL2RpYWxvZy1tb3Rpdm9zLWNvbnRpbmdlbmNpYS9kaWFsb2ctbW90aXZvcy1jb250aW5nZW5jaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcC1idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udW5pb3JnQXR1YWwge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNDU1QTY0O1xyXG4gICAgfVxyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLndyYXAtYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51bmlvcmdBdHVhbCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0NTVBNjQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DialogMotivosContingenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMotivosContingenciaComponent", function() { return DialogMotivosContingenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogMotivosContingenciaComponent = class DialogMotivosContingenciaComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loader = false;
        this.treeFila = [];
    }
    ngOnInit() {
        this.treeFila = this.data;
    }
    cancel() {
        this.dialogRef.close();
    }
    atualizar() {
        this.dialogRef.close(this.treeControl);
    }
    getData($event) {
        this.treeControl = $event;
    }
};
DialogMotivosContingenciaComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogMotivosContingenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'from-to-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-motivos-contingencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-motivos-contingencia.component.scss */ "./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogMotivosContingenciaComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWRkLW1vdGl2b3MtcmVqZWljYW8vYWRkLW1vdGl2b3MtcmVqZWljYW8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddMotivosRejeicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMotivosRejeicaoComponent", function() { return AddMotivosRejeicaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_motivos_rejeicao_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/motivos-rejeicao.model */ "./src/app/models/motivos-rejeicao.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/motivos-rejeicao.service */ "./src/app/modules/configuration-system/services/motivos-rejeicao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dialog_motivos_rejeicao_dialog_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-motivos-rejeicao/dialog-motivos-rejeicao.component */ "./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.ts");
/* harmony import */ var src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/tree.model */ "./src/app/models/tree.model.ts");
/* harmony import */ var src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/fila.model */ "./src/app/models/fila.model.ts");











let AddMotivosRejeicaoComponent = class AddMotivosRejeicaoComponent {
    constructor(formBuilder, MotivosRejeicaoService, matSnackBar, activatedRoute, dialog, router) {
        this.formBuilder = formBuilder;
        this.MotivosRejeicaoService = MotivosRejeicaoService;
        this.matSnackBar = matSnackBar;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.router = router;
        this.loader = false;
        this.motivosRejeicao = new src_app_models_motivos_rejeicao_model__WEBPACK_IMPORTED_MODULE_3__["MotivosRejeicao"]();
        this.tipoStatus = [
            { label: 'Ativo', status: true },
            { label: 'Inativo', status: false },
        ];
        this.fila = [];
        this.filas = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['grupo', 'operacao', 'atividade'];
        this.checkedList = [];
    }
    ngOnInit() {
        this.motivoRejeicaoId = this.activatedRoute.snapshot.paramMap.get('motivoRejeicaoId');
        this.form = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ativo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.motivoRejeicaoId != null) {
            this.getMotivoRejeicaoId();
        }
        else {
            this.getMotivoRejeicao();
        }
    }
    getMotivoRejeicaoId() {
        this.loader = true;
        this.MotivosRejeicaoService.get(this.motivoRejeicaoId).subscribe(response => {
            this.motivosRejeicao = response.data;
            this.form.controls['nome'].setValue(this.motivosRejeicao.nome);
            this.form.controls['ativo'].setValue(this.motivosRejeicao.ativo);
            this.loader = false;
            this.filas = this.motivosRejeicao.operacaoGrupos;
            this.dataTree(this.filas);
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    getMotivoRejeicao() {
        this.loader = true;
        this.MotivosRejeicaoService.getAtividades().subscribe(response => {
            this.motivosRejeicao = response.data;
            this.loader = false;
            this.filas = this.motivosRejeicao.operacaoGrupos;
            this.dataTree(this.filas);
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    dataTree(fila) {
        let tempTree = [];
        //Grupo operacoes
        fila.map(grupo => {
            let grupoTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__["Tree"]();
            grupoTemp.id = grupo.operacaoGrupoId;
            grupoTemp.name = grupo.operacaoGrupoNome;
            //operacoes
            grupo.operacoes.map(opera => {
                let operacoesTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__["Tree"]();
                operacoesTemp.id = opera.operacaoId;
                operacoesTemp.name = opera.operacaoNome;
                grupoTemp.children.push(operacoesTemp);
                //atividades
                opera.atividades.map(ativ => {
                    let atividadeTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_9__["Tree"]();
                    atividadeTemp.id = ativ.atividadeId;
                    atividadeTemp.name = ativ.nome;
                    atividadeTemp.checked = ativ.checked;
                    operacoesTemp.children.push(atividadeTemp);
                });
            });
            tempTree.push(grupoTemp);
        });
        this.treeFila = tempTree;
        this.setList(this.treeFila);
    }
    salvarAlteracoes() {
        if (this.form.valid) {
            if (this.motivoRejeicaoId != null) {
                this.atualizaMotivosRejeicao();
            }
            else {
                this.addMotivosRejeicao();
            }
        }
    }
    addMotivosRejeicao() {
        if (this.form.valid) {
            this.showErrors = false;
            const form = this.form.value;
            this.loader = true;
            let atividades = [];
            this.checkedList.forEach(item => {
                atividades.push(item.atividadeId);
            });
            this.MotivosRejeicaoService.post(form.nome, form.ativo, atividades).subscribe(() => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.router.navigate(['configuracao/motivos-rejeicao']);
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loader = false;
            });
        }
        else {
            this.showErrors = true;
        }
    }
    atualizaMotivosRejeicao() {
        if (this.form.valid) {
            this.showErrors = false;
            const form = this.form.value;
            this.loader = true;
            let atividades = [];
            this.checkedList.forEach(item => {
                atividades.push(item.atividadeId);
            });
            this.MotivosRejeicaoService.put(this.motivoRejeicaoId, form.nome, form.ativo, atividades).subscribe(() => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.loader = false;
                this.router.navigate(['configuracao/motivos-rejeicao']);
            }, error => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loader = false;
            });
        }
        else {
            this.showErrors = true;
        }
    }
    listaAtividades() {
    }
    openModal() {
        const dialogRef = this.dialog.open(_dialog_motivos_rejeicao_dialog_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_8__["DialogMotivosRejeicaoComponent"], {
            height: '80%',
            width: '800px',
            data: this.treeFila
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                //atualiza fila
                this.treeFila.forEach(item => {
                    item.children.forEach(subItem => {
                        subItem.children.forEach(atividade => {
                            result.dataNodes.forEach(newItem => {
                                if (newItem.level == 2 && newItem.id == atividade.id) {
                                    atividade.checked = newItem.checked;
                                }
                            });
                        });
                    });
                });
            }
            this.setList(this.treeFila);
        });
    }
    setList(tree) {
        let tempList = [];
        //Grupo operacoes
        tree.map(grupo => {
            let gpTemp = [];
            gpTemp.operacaoGrupoId = grupo.id;
            gpTemp.operacaoGrupo = grupo.name;
            //operacoes
            grupo.children.map(opera => {
                let opTemp = [];
                opTemp.operacaoId = opera.id;
                opTemp.operacao = opera.name;
                //atividades
                opera.children.map(ativ => {
                    let atTemp = [];
                    atTemp.atividadeId = ativ.id;
                    atTemp.atividade = ativ.name;
                    atTemp.checked = ativ.checked;
                    let grupoTemp = new src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_10__["Fila"]();
                    grupoTemp.operacaoGrupoId = gpTemp.operacaoGrupoId;
                    grupoTemp.operacaoGrupo = gpTemp.operacaoGrupo;
                    grupoTemp.operacaoId = opTemp.operacaoId;
                    grupoTemp.operacao = opTemp.operacao;
                    grupoTemp.atividadeId = atTemp.atividadeId;
                    grupoTemp.atividade = atTemp.atividade;
                    grupoTemp.checked = atTemp.checked;
                    tempList.push(grupoTemp);
                });
            });
        });
        this.checkedList = tempList.filter(item => item.checked);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.checkedList);
    }
};
AddMotivosRejeicaoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_6__["MotivosRejeicaoService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddMotivosRejeicaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivos-rejeicao',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-motivos-rejeicao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-motivos-rejeicao.component.scss */ "./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_6__["MotivosRejeicaoService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AddMotivosRejeicaoComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  margin-top: 20px;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\n.mat-dialog-actions {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.uniorgAtual label {\n  display: block;\n  font-weight: bold;\n  color: #455A64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9hZGQtbW90aXZvcy1yZWplaWNhby9kaWFsb2ctbW90aXZvcy1yZWplaWNhby9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcY29uZmlndXJhdGlvbi1zeXN0ZW1cXGFkZC1tb3Rpdm9zLXJlamVpY2FvXFxkaWFsb2ctbW90aXZvcy1yZWplaWNhb1xcZGlhbG9nLW1vdGl2b3MtcmVqZWljYW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYWRkLW1vdGl2b3MtcmVqZWljYW8vZGlhbG9nLW1vdGl2b3MtcmVqZWljYW8vZGlhbG9nLW1vdGl2b3MtcmVqZWljYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FESUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24tc3lzdGVtL2FkZC1tb3Rpdm9zLXJlamVpY2FvL2RpYWxvZy1tb3Rpdm9zLXJlamVpY2FvL2RpYWxvZy1tb3Rpdm9zLXJlamVpY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndyYXAtYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnVuaW9yZ0F0dWFsIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzQ1NUE2NDtcclxuICAgIH1cclxufSIsImgxIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcC1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi53cmFwLWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udW5pb3JnQXR1YWwgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDU1QTY0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: DialogMotivosRejeicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMotivosRejeicaoComponent", function() { return DialogMotivosRejeicaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogMotivosRejeicaoComponent = class DialogMotivosRejeicaoComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loader = false;
        this.treeFila = [];
    }
    ngOnInit() {
        this.treeFila = this.data;
    }
    cancel() {
        this.dialogRef.close();
    }
    atualizar() {
        this.dialogRef.close(this.treeControl);
    }
    getData($event) {
        this.treeControl = $event;
    }
};
DialogMotivosRejeicaoComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogMotivosRejeicaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'from-to-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-motivos-rejeicao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-motivos-rejeicao.component.scss */ "./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogMotivosRejeicaoComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-tab-group .mat-tab-label-active {\n  background: #E9ECEF;\n  border: none;\n  opacity: 1;\n}\n\n::ng-deep .mat-tab-body-content {\n  padding: 20px;\n  padding-top: 25px;\n  background: #E9ECEF;\n}\n\n::ng-deep .mat-tab-body-wrapper {\n  top: -1px;\n}\n\nh4 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9idXR0b25zLWRlY2lzaW9uL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxcYnV0dG9ucy1kZWNpc2lvblxcYnV0dG9ucy1kZWNpc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9idXR0b25zLWRlY2lzaW9uL2J1dHRvbnMtZGVjaXNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vYnV0dG9ucy1kZWNpc2lvbi9idXR0b25zLWRlY2lzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlFQ0VGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlFQ0VGO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICAgIHRvcDogLTFweDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCI6Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0U5RUNFRjtcbiAgYm9yZGVyOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNFOUVDRUY7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICB0b3A6IC0xcHg7XG59XG5cbmg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ButtonsDecisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsDecisionComponent", function() { return ButtonsDecisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_button_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/button-type.enum */ "./src/app/models/button-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_template_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/template.model */ "./src/app/models/template.model.ts");
/* harmony import */ var src_app_models_field_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/field.type.enum */ "./src/app/models/field.type.enum.ts");
/* harmony import */ var src_app_models_operator_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/operator.enum */ "./src/app/models/operator.enum.ts");
/* harmony import */ var _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/configuration-system-util.service */ "./src/app/modules/configuration-system/services/configuration-system-util.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");











let ButtonsDecisionComponent = class ButtonsDecisionComponent {
    constructor(activatedRoute, formBuilder, utilService, matSnackBar) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.utilService = utilService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['name', 'type', 'operator', 'value', 'actions'];
        /** ID's de Decisão */
        this.idAprove = '5';
        this.idFinish = '6';
        this.idContingency = '8';
        this.idPostpone = '3';
        this.idReprove = '4';
        /** Botões Escolhidos e Aba Atual */
        this.choosedButtonType = [];
        this.dataSource_aprove = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.conditions_aprove = [];
        this.dataSource_finish = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.conditions_finish = [];
        this.dataSource_contingency = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.conditions_contingency = [];
        this.dataSource_postpone = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.conditions_postpone = [];
        this.dataSource_reprove = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.conditions_reprove = [];
        /** Micro-Formulários */
        this.formFields = [];
        /** Opções que vem dos Enuns */
        this.buttonTypes = [];
        this.fieldTypes = [];
        this.operators = [];
        /** Campos Desabilitados por default */
        this.showConditionToEnableInput = true;
        this.showConditionToEnableSelect = false;
        this.showConditionToEnableCheckbox = false;
        this.conditionsToEnableOptions = [];
    }
    ngOnInit() {
        this.postTemplate = this.getData();
        this.postTemplate.template.steps.forEach(step => {
            step.fieldGroups.forEach(fieldGroup => {
                fieldGroup.fields.forEach(field => {
                    this.formFields = [...this.formFields, field];
                });
            });
        });
        this.templateId = this.activatedRoute.snapshot.paramMap.get('idtemplate');
        this.buttonTypes = Object.entries(src_app_models_button_type_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonSubmitDecisions"]);
        this.fieldTypes = Object.entries(src_app_models_field_type_enum__WEBPACK_IMPORTED_MODULE_7__["FieldType"]);
        this.operators = Object.entries(src_app_models_operator_enum__WEBPACK_IMPORTED_MODULE_8__["Operators"]);
        /** Aprovar */
        this.formGeneralSettings_aprove = this.formBuilder.group({
            mustSatisfy: ['all', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            disabledByDefault: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formAddField_aprove = this.formBuilder.group({
            field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            operator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            value: ['']
        });
        /** Concluir */
        this.formGeneralSettings_finish = this.formBuilder.group({
            mustSatisfy: ['all', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            disabledByDefault: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formAddField_finish = this.formBuilder.group({
            field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            operator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            value: ['']
        });
        /** Contingênciar */
        this.formGeneralSettings_contingency = this.formBuilder.group({
            mustSatisfy: ['all', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            disabledByDefault: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formAddField_contingency = this.formBuilder.group({
            field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            operator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            value: ['']
        });
        /** Postergar */
        this.formGeneralSettings_postpone = this.formBuilder.group({
            mustSatisfy: ['all', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            disabledByDefault: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formAddField_postpone = this.formBuilder.group({
            field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            operator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            value: ['']
        });
        /** Reprovar */
        this.formGeneralSettings_reprove = this.formBuilder.group({
            mustSatisfy: ['all', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            disabledByDefault: ['false', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.formAddField_reprove = this.formBuilder.group({
            field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            operator: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            value: ['']
        });
        /** Edição */
        if (this.postTemplate.template.decision) {
            this.postTemplate.template.decision.buttons.forEach(button => {
                this.editConfigurations(button);
            });
        } /* else {
            this.postTemplate.template.decision = new Decision();
            this.postTemplate.template.decision.buttons = [];
        } */
    }
    chooseButton(event) {
        if (event.checked) {
            this.choosedButtonType = [...this.choosedButtonType, this.buttonTypes.find(el => el[1] === event.source.value)];
        }
        else {
            this.choosedButtonType = this.choosedButtonType.filter(el => el[1] !== event.source.value);
        }
    }
    getFields(group) {
        return this.formFields.filter(el => el.type === group);
    }
    /********** CONDIÇÕES PARA O BOTÃO ESTAR HABILITADO  **********/
    setFieldToConditionToEnable(event, idType) {
        this.conditionsToEnableOptions = [];
        const field = this.formFields.find(el => el.name === event.value);
        if (field.type === "select" || field.type === "radiobutton") {
            this.conditionsToEnableOptions = [...field.options];
            this.showConditionToEnableSelect = true;
            this.showConditionToEnableInput = false;
            this.showConditionToEnableCheckbox = false;
        }
        else if (field.type === "checkbox" || field.buttonType === "conditional") {
            this.showConditionToEnableSelect = false;
            this.showConditionToEnableInput = false;
            this.showConditionToEnableCheckbox = true;
        }
        else {
            this.showConditionToEnableSelect = false;
            this.showConditionToEnableInput = true;
            this.showConditionToEnableCheckbox = false;
        }
        if (field.type === "checkbox" || field.buttonType === "conditional") {
            this.operators = this.operators.filter(el => el[0] !== "greaterThan" && el[0] !== "lessThan");
        }
        else {
            this.operators = Object.entries(src_app_models_operator_enum__WEBPACK_IMPORTED_MODULE_8__["Operators"]);
        }
        this.getFormAddField(idType).get('value').setValue('');
    }
    /********** ADICIONAR E EXCLUIR CONDIÇÃO **********/
    addCondition(idType) {
        const form = this.getFormAddField(idType);
        const field = this.formFields.find(el => el.name === form.get('field').value);
        const condition = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_6__["Condition"]();
        condition.fieldName = field.name;
        condition.operator = form.get('operator').value;
        condition.fieldType = field.type;
        condition.value = form.get('value').value;
        if (field.type === "select" || field.type === "radiobutton") {
            condition.label = field.options.find(el => el.value === form.get('value').value).label;
        }
        const conditions = this.addConditionToColletion(condition, idType);
        this.setDataSource(idType, conditions);
        form.reset();
    }
    addConditionToColletion(condition, idType) {
        switch (idType) {
            case this.idAprove:
                if (this.isUnique(condition, this.conditions_aprove)) {
                    this.conditions_aprove = [condition, ...this.conditions_aprove];
                }
                return this.conditions_aprove;
            case this.idFinish:
                if (this.isUnique(condition, this.conditions_finish)) {
                    this.conditions_finish = [condition, ...this.conditions_finish];
                }
                return this.conditions_finish;
            case this.idContingency:
                if (this.isUnique(condition, this.conditions_contingency)) {
                    this.conditions_contingency = [condition, ...this.conditions_contingency];
                }
                return this.conditions_contingency;
            case this.idPostpone:
                if (this.isUnique(condition, this.conditions_postpone)) {
                    this.conditions_postpone = [condition, ...this.conditions_postpone];
                }
                return this.conditions_postpone;
            case this.idReprove:
                if (this.isUnique(condition, this.conditions_reprove)) {
                    this.conditions_reprove = [condition, ...this.conditions_reprove];
                }
                return this.conditions_reprove;
            default:
                break;
        }
    }
    deleteCondition(condition, idType) {
        switch (idType) {
            case this.idAprove:
                this.conditions_aprove = this.conditions_aprove.filter((el => el !== condition));
                this.setDataSource(this.idAprove, this.conditions_aprove);
                break;
            case this.idFinish:
                this.conditions_finish = this.conditions_finish.filter((el => el !== condition));
                this.setDataSource(this.idFinish, this.conditions_finish);
                break;
            case this.idContingency:
                this.conditions_contingency = this.conditions_contingency.filter((el => el !== condition));
                this.setDataSource(this.idContingency, this.conditions_contingency);
                break;
            case this.idPostpone:
                this.conditions_postpone = this.conditions_postpone.filter((el => el !== condition));
                this.setDataSource(this.idPostpone, this.conditions_postpone);
                break;
            case this.idReprove:
                this.conditions_reprove = this.conditions_reprove.filter((el => el !== condition));
                this.setDataSource(this.idReprove, this.conditions_reprove);
                break;
            default:
                break;
        }
    }
    /********** SALVAR CONFIGURAÇÕES  **********/
    saveConfigurations() {
        this.postTemplate.template.decision = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_6__["Decision"]();
        this.postTemplate.template.decision.buttons = [];
        this.choosedButtonType.forEach(type => this.prepareAddButton(type[1]));
        this.save();
        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"].showSuccess(this.matSnackBar, "As configurações de decisão foram adicionadas ao template");
    }
    prepareAddButton(idType) {
        switch (idType) {
            case this.idAprove:
                this.addButton('Aprovar', 'btnAprovar', this.idAprove, this.formGeneralSettings_aprove, this.conditions_aprove);
                break;
            case this.idFinish:
                this.addButton('Concluir', 'btnConcluir', this.idFinish, this.formGeneralSettings_finish, this.conditions_finish);
                break;
            case this.idContingency:
                this.addButton('Contingência', 'btnContingencia', this.idContingency, this.formGeneralSettings_contingency, this.conditions_contingency);
                break;
            case this.idPostpone:
                this.addButton('Postergar', 'btnPostergar', this.idPostpone, this.formGeneralSettings_postpone, this.conditions_postpone);
                break;
            case this.idReprove:
                this.addButton('Reprovar', 'btnReprovar', this.idReprove, this.formGeneralSettings_reprove, this.conditions_reprove);
                break;
            default:
                break;
        }
    }
    addButton(label, name, idType, generalSettings, conditions) {
        const newField = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_6__["Field"]();
        const actionButton = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_6__["ActionButton"]();
        actionButton.decision = idType;
        const qttButtons = this.choosedButtonType.length;
        newField.type = "button";
        newField.name = name;
        newField.dataSource = "";
        newField.required = "false";
        newField.buttonType = "submit";
        newField.label = label;
        newField.cssGrid = qttButtons !== 5 ? `col-${12 / qttButtons}` : 'col-2';
        newField.visible = "true";
        newField.conditionsToVisible = [];
        newField.disabled = generalSettings.get('disabledByDefault').value;
        newField.conditionsToEnable = conditions;
        newField.conditionsToEnableSatisfy = generalSettings.get('mustSatisfy').value;
        newField.actionButton = actionButton;
        this.postTemplate.template.decision.buttons = [...this.postTemplate.template.decision.buttons, newField];
    }
    editConfigurations(button) {
        const idType = button.actionButton.decision;
        this.choosedButtonType = [...this.choosedButtonType, this.buttonTypes.find(el => el[1] === idType)];
        const form = this.getFormGeneralSettings(idType);
        form.setValue({
            mustSatisfy: button.conditionsToEnableSatisfy,
            disabledByDefault: button.disabled.toString(),
        });
        this.setConditions(idType, button.conditionsToEnable);
        this.setDataSource(idType, button.conditionsToEnable);
    }
    /********** MÉTODOS AUXILIARES  **********/
    getData() {
        return JSON.parse(sessionStorage.getItem('postTemplate'));
    }
    save() {
        sessionStorage.setItem('postTemplate', JSON.stringify(this.postTemplate));
    }
    getFormGeneralSettings(idType) {
        switch (idType) {
            case this.idAprove:
                return this.formGeneralSettings_aprove;
            case this.idFinish:
                return this.formGeneralSettings_finish;
            case this.idContingency:
                return this.formGeneralSettings_contingency;
            case this.idPostpone:
                return this.formGeneralSettings_postpone;
            case this.idReprove:
                return this.formGeneralSettings_reprove;
            default:
                break;
        }
    }
    getFormAddField(idType) {
        switch (idType) {
            case this.idAprove:
                return this.formAddField_aprove;
            case this.idFinish:
                return this.formAddField_finish;
            case this.idContingency:
                return this.formAddField_contingency;
            case this.idPostpone:
                return this.formAddField_postpone;
            case this.idReprove:
                return this.formAddField_reprove;
            default:
                break;
        }
    }
    setConditions(idType, conditions) {
        switch (idType) {
            case this.idAprove:
                this.conditions_aprove = [...conditions];
                break;
            case this.idFinish:
                this.conditions_finish = [...conditions];
                break;
            case this.idContingency:
                this.conditions_contingency = [...conditions];
                break;
            case this.idPostpone:
                this.conditions_postpone = [...conditions];
                break;
            case this.idReprove:
                this.conditions_reprove = [...conditions];
                break;
            default:
                break;
        }
    }
    getDataSource(idType) {
        switch (idType) {
            case this.idAprove:
                return this.dataSource_aprove;
            case this.idFinish:
                return this.dataSource_finish;
            case this.idContingency:
                return this.dataSource_contingency;
            case this.idPostpone:
                return this.dataSource_postpone;
            case this.idReprove:
                return this.dataSource_reprove;
            default:
                break;
        }
    }
    setDataSource(idType, conditions) {
        switch (idType) {
            case this.idAprove:
                this.dataSource_aprove = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](conditions);
                break;
            case this.idFinish:
                this.dataSource_finish = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](conditions);
                break;
            case this.idContingency:
                this.dataSource_contingency = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](conditions);
                break;
            case this.idPostpone:
                this.dataSource_postpone = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](conditions);
                break;
            case this.idReprove:
                this.dataSource_reprove = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](conditions);
                break;
            default:
                break;
        }
    }
    isUnique(condition, collection) {
        const temp = collection.find(el => {
            return el.fieldName === condition.fieldName && el.operator === condition.operator && el.value === condition.value;
        });
        if (temp === undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    isChecked(idType) {
        return this.choosedButtonType.includes(idType);
    }
};
ButtonsDecisionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationServiceUtilService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
ButtonsDecisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buttons-decision',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buttons-decision.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buttons-decision.component.scss */ "./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationServiceUtilService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], ButtonsDecisionComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/configuration-system-routes.guard.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/configuration-system/configuration-system-routes.guard.ts ***!
  \***********************************************************************************/
/*! exports provided: ConfigurationSystemRoutesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationSystemRoutesGuard", function() { return ConfigurationSystemRoutesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/autentication.service */ "./src/app/services/autentication.service.ts");



let ConfigurationSystemRoutesGuard = class ConfigurationSystemRoutesGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(event) {
        return this.authenticationService.isPermitted("configuracao", event.url[0].path);
    }
};
ConfigurationSystemRoutesGuard.ctorParameters = () => [
    { type: _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"] }
];
ConfigurationSystemRoutesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]])
], ConfigurationSystemRoutesGuard);



/***/ }),

/***/ "./src/app/modules/configuration-system/configuration-system-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/configuration-system-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ConfigurationSystemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationSystemRoutingModule", function() { return ConfigurationSystemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_template_list_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-template/list-template.component */ "./src/app/modules/configuration-system/list-template/list-template.component.ts");
/* harmony import */ var _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-template/create-template.component */ "./src/app/modules/configuration-system/create-template/create-template.component.ts");
/* harmony import */ var _preview_template_preview_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview-template/preview-template.component */ "./src/app/modules/configuration-system/preview-template/preview-template.component.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./step/step.component */ "./src/app/modules/configuration-system/step/step.component.ts");
/* harmony import */ var _field_group_field_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field-group/field-group.component */ "./src/app/modules/configuration-system/field-group/field-group.component.ts");
/* harmony import */ var _operation_group_operation_group_list_operation_group_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./operation-group/operation-group-list/operation-group-list.component */ "./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.ts");
/* harmony import */ var _operation_group_operation_group_form_operation_group_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operation-group/operation-group-form/operation-group-form.component */ "./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.ts");
/* harmony import */ var _operation_operation_form_operation_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./operation/operation-form/operation-form.component */ "./src/app/modules/configuration-system/operation/operation-form/operation-form.component.ts");
/* harmony import */ var _operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./operation/operation-list/operation-list.component */ "./src/app/modules/configuration-system/operation/operation-list/operation-list.component.ts");
/* harmony import */ var _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./activity/activity-list/activity-list.component */ "./src/app/modules/configuration-system/activity/activity-list/activity-list.component.ts");
/* harmony import */ var _activity_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./activity/activity-form/activity-form.component */ "./src/app/modules/configuration-system/activity/activity-form/activity-form.component.ts");
/* harmony import */ var _configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./configuration-system-routes.guard */ "./src/app/modules/configuration-system/configuration-system-routes.guard.ts");
/* harmony import */ var _motivos_rejeicao_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./motivos-rejeicao/motivos-rejeicao.component */ "./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.ts");
/* harmony import */ var _add_motivos_rejeicao_add_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-motivos-rejeicao/add-motivos-rejeicao.component */ "./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.ts");
/* harmony import */ var _buttons_decision_buttons_decision_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./buttons-decision/buttons-decision.component */ "./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.ts");
/* harmony import */ var _motivos_contingencia_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./motivos-contingencia/motivos-contingencia.component */ "./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.ts");
/* harmony import */ var _add_motivos_contingencia_add_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-motivos-contingencia/add-motivos-contingencia.component */ "./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.ts");




















const routes = [
    { path: 'lista-templates', component: _list_template_list_template_component__WEBPACK_IMPORTED_MODULE_3__["ListTemplateComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'template/:idtemplate', component: _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_4__["CreateTemplateComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'template/:idtemplate/preview', component: _preview_template_preview_template_component__WEBPACK_IMPORTED_MODULE_5__["PreviewTemplateComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'template/:idtemplate/botoes-decisao', component: _buttons_decision_buttons_decision_component__WEBPACK_IMPORTED_MODULE_17__["ButtonsDecisionComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'template/:idtemplate/:idClone', component: _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_4__["CreateTemplateComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'template/:idtemplate/step/:stepIndex', component: _step_step_component__WEBPACK_IMPORTED_MODULE_6__["StepComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'template/:idtemplate/step/:stepIndex/grupo-campos/:fieldGroupIndex', component: _field_group_field_group_component__WEBPACK_IMPORTED_MODULE_7__["FieldGroupComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'operacao-grupos', component: _operation_group_operation_group_list_operation_group_list_component__WEBPACK_IMPORTED_MODULE_8__["OperationGroupListComponent"] },
    { path: 'operacao-grupos/formulario', component: _operation_group_operation_group_form_operation_group_form_component__WEBPACK_IMPORTED_MODULE_9__["OperationGroupFormComponent"] },
    { path: 'operacao-grupos/formulario/:id', component: _operation_group_operation_group_form_operation_group_form_component__WEBPACK_IMPORTED_MODULE_9__["OperationGroupFormComponent"] },
    { path: 'operacoes', component: _operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_11__["OperationListComponent"] },
    { path: 'operacoes/formulario', component: _operation_operation_form_operation_form_component__WEBPACK_IMPORTED_MODULE_10__["OperationFormComponent"] },
    { path: 'operacoes/formulario/:id', component: _operation_operation_form_operation_form_component__WEBPACK_IMPORTED_MODULE_10__["OperationFormComponent"] },
    { path: 'atividades', component: _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_12__["ActivityListComponent"] },
    { path: 'atividades/formulario', component: _activity_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_13__["ActivityFormComponent"] },
    { path: 'atividades/formulario/:id', component: _activity_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_13__["ActivityFormComponent"] },
    { path: 'motivos-rejeicao', component: _motivos_rejeicao_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_15__["MotivosRejeicaoComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'add-motivos-rejeicao', component: _add_motivos_rejeicao_add_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_16__["AddMotivosRejeicaoComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'add-motivos-rejeicao/:motivoRejeicaoId', component: _add_motivos_rejeicao_add_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_16__["AddMotivosRejeicaoComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'motivos-contingencia', component: _motivos_contingencia_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_18__["MotivosContingenciaComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'add-motivos-contingencia', component: _add_motivos_contingencia_add_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_19__["AddMotivosContingenciaComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] },
    { path: 'add-motivos-contingencia/:motivoContingenciaId', component: _add_motivos_contingencia_add_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_19__["AddMotivosContingenciaComponent"], canActivate: [_configuration_system_routes_guard__WEBPACK_IMPORTED_MODULE_14__["ConfigurationSystemRoutesGuard"]] }
];
let ConfigurationSystemRoutingModule = class ConfigurationSystemRoutingModule {
};
ConfigurationSystemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ConfigurationSystemRoutingModule);



/***/ }),

/***/ "./src/app/modules/configuration-system/configuration-system.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/configuration-system/configuration-system.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigurationSystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationSystemModule", function() { return ConfigurationSystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _configuration_system_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration-system-routing.module */ "./src/app/modules/configuration-system/configuration-system-routing.module.ts");
/* harmony import */ var _field_group_field_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-group/field-group.component */ "./src/app/modules/configuration-system/field-group/field-group.component.ts");
/* harmony import */ var _list_template_list_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-template/list-template.component */ "./src/app/modules/configuration-system/list-template/list-template.component.ts");
/* harmony import */ var _preview_template_preview_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-template/preview-template.component */ "./src/app/modules/configuration-system/preview-template/preview-template.component.ts");
/* harmony import */ var _step_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step/step.component */ "./src/app/modules/configuration-system/step/step.component.ts");
/* harmony import */ var _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-template/create-template.component */ "./src/app/modules/configuration-system/create-template/create-template.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _operation_group_operation_group_list_operation_group_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./operation-group/operation-group-list/operation-group-list.component */ "./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.ts");
/* harmony import */ var _operation_group_operation_group_form_operation_group_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operation-group/operation-group-form/operation-group-form.component */ "./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.ts");
/* harmony import */ var _operation_operation_form_operation_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./operation/operation-form/operation-form.component */ "./src/app/modules/configuration-system/operation/operation-form/operation-form.component.ts");
/* harmony import */ var _operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./operation/operation-list/operation-list.component */ "./src/app/modules/configuration-system/operation/operation-list/operation-list.component.ts");
/* harmony import */ var _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./activity/activity-list/activity-list.component */ "./src/app/modules/configuration-system/activity/activity-list/activity-list.component.ts");
/* harmony import */ var _activity_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./activity/activity-form/activity-form.component */ "./src/app/modules/configuration-system/activity/activity-form/activity-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _motivos_rejeicao_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./motivos-rejeicao/motivos-rejeicao.component */ "./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.ts");
/* harmony import */ var _add_motivos_rejeicao_dialog_motivos_rejeicao_dialog_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component */ "./src/app/modules/configuration-system/add-motivos-rejeicao/dialog-motivos-rejeicao/dialog-motivos-rejeicao.component.ts");
/* harmony import */ var _add_motivos_rejeicao_add_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-motivos-rejeicao/add-motivos-rejeicao.component */ "./src/app/modules/configuration-system/add-motivos-rejeicao/add-motivos-rejeicao.component.ts");
/* harmony import */ var _buttons_decision_buttons_decision_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./buttons-decision/buttons-decision.component */ "./src/app/modules/configuration-system/buttons-decision/buttons-decision.component.ts");
/* harmony import */ var _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/configuration-system-util.service */ "./src/app/modules/configuration-system/services/configuration-system-util.service.ts");
/* harmony import */ var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/dateAdapter/customDate.adapter */ "./src/app/shared/dateAdapter/customDate.adapter.ts");
/* harmony import */ var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/dateAdapter/my-date-formats.const */ "./src/app/shared/dateAdapter/my-date-formats.const.ts");
/* harmony import */ var _preview_template_dialog_preview_dialog_preview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./preview-template/dialog-preview/dialog-preview.component */ "./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.ts");
/* harmony import */ var _motivos_contingencia_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./motivos-contingencia/motivos-contingencia.component */ "./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.ts");
/* harmony import */ var _add_motivos_contingencia_add_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./add-motivos-contingencia/add-motivos-contingencia.component */ "./src/app/modules/configuration-system/add-motivos-contingencia/add-motivos-contingencia.component.ts");
/* harmony import */ var _add_motivos_contingencia_dialog_motivos_contingencia_dialog_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component */ "./src/app/modules/configuration-system/add-motivos-contingencia/dialog-motivos-contingencia/dialog-motivos-contingencia.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");































let ConfigurationSystemModule = class ConfigurationSystemModule {
};
ConfigurationSystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _field_group_field_group_component__WEBPACK_IMPORTED_MODULE_4__["FieldGroupComponent"],
            _list_template_list_template_component__WEBPACK_IMPORTED_MODULE_5__["ListTemplateComponent"],
            _preview_template_preview_template_component__WEBPACK_IMPORTED_MODULE_6__["PreviewTemplateComponent"],
            _step_step_component__WEBPACK_IMPORTED_MODULE_7__["StepComponent"],
            _create_template_create_template_component__WEBPACK_IMPORTED_MODULE_8__["CreateTemplateComponent"],
            _operation_group_operation_group_list_operation_group_list_component__WEBPACK_IMPORTED_MODULE_12__["OperationGroupListComponent"],
            _operation_group_operation_group_form_operation_group_form_component__WEBPACK_IMPORTED_MODULE_13__["OperationGroupFormComponent"],
            _operation_operation_list_operation_list_component__WEBPACK_IMPORTED_MODULE_15__["OperationListComponent"],
            _operation_operation_form_operation_form_component__WEBPACK_IMPORTED_MODULE_14__["OperationFormComponent"],
            _activity_activity_list_activity_list_component__WEBPACK_IMPORTED_MODULE_16__["ActivityListComponent"],
            _activity_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_17__["ActivityFormComponent"],
            _motivos_rejeicao_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_19__["MotivosRejeicaoComponent"],
            _add_motivos_rejeicao_dialog_motivos_rejeicao_dialog_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_20__["DialogMotivosRejeicaoComponent"],
            _add_motivos_rejeicao_add_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_21__["AddMotivosRejeicaoComponent"],
            _buttons_decision_buttons_decision_component__WEBPACK_IMPORTED_MODULE_22__["ButtonsDecisionComponent"],
            _preview_template_dialog_preview_dialog_preview_component__WEBPACK_IMPORTED_MODULE_26__["DialogPreviewComponent"],
            _motivos_contingencia_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_27__["MotivosContingenciaComponent"],
            _add_motivos_contingencia_add_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_28__["AddMotivosContingenciaComponent"],
            _add_motivos_contingencia_dialog_motivos_contingencia_dialog_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_29__["DialogMotivosContingenciaComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__["DragDropModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forRoot(),
            _configuration_system_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConfigurationSystemRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"]
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"], useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_24__["CustomDateAdapter"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_FORMATS"], useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_25__["MY_DATE_FORMATS"] },
            _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_23__["ConfigurationServiceUtilService"]
        ],
        entryComponents: [
            _add_motivos_rejeicao_dialog_motivos_rejeicao_dialog_motivos_rejeicao_component__WEBPACK_IMPORTED_MODULE_20__["DialogMotivosRejeicaoComponent"],
            _add_motivos_contingencia_dialog_motivos_contingencia_dialog_motivos_contingencia_component__WEBPACK_IMPORTED_MODULE_29__["DialogMotivosContingenciaComponent"],
            _preview_template_dialog_preview_dialog_preview_component__WEBPACK_IMPORTED_MODULE_26__["DialogPreviewComponent"]
        ],
    })
], ConfigurationSystemModule);



/***/ }),

/***/ "./src/app/modules/configuration-system/create-template/create-template.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/create-template/create-template.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vY3JlYXRlLXRlbXBsYXRlL2NyZWF0ZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/configuration-system/create-template/create-template.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/create-template/create-template.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplateComponent", function() { return CreateTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_template_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/template.model */ "./src/app/models/template.model.ts");
/* harmony import */ var src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/operation.service */ "./src/app/services/operation.service.ts");
/* harmony import */ var src_app_models_post_template_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/post-template.class */ "./src/app/models/post-template.class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_manager_templates_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/manager-templates.service */ "./src/app/modules/configuration-system/services/manager-templates.service.ts");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");














let CreateTemplateComponent = class CreateTemplateComponent {
    constructor(formBuilder, operationService, router, managerTemplateService, dialog, activatedRoute, matSnackBar) {
        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.router = router;
        this.managerTemplateService = managerTemplateService;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.matSnackBar = matSnackBar;
        this.operations = [];
        this.activities = [];
        this.steps = [];
        this.labelButton = "CADASTRAR NOVO TEMPLATE";
    }
    ngOnInit() {
        this.loading = true;
        /** Obtem o id do template no caso de uma edição */
        this.templateId = this.activatedRoute.snapshot.paramMap.get('idtemplate');
        this.templateCloneId = this.activatedRoute.snapshot.paramMap.get('idClone');
        /** Faz a instância do Template */
        this.postTemplate = new src_app_models_post_template_class__WEBPACK_IMPORTED_MODULE_6__["PostTemplate"]();
        this.postTemplate.template = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_4__["Template"]();
        this.postTemplate.operacaoEstatica = false;
        this.postTemplate.template.steps = [];
        /** Faz a instância do formulário */
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            operacaoEstatica: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            operacaoId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            atividadeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        let hasTemplate;
        if (this.templateId === "new") {
            hasTemplate = false;
        }
        /** Lista de Operações sem Template Associado */
        this.operationService.getOperations(hasTemplate).subscribe(response => {
            this.operations = [...response.data];
            this.populateFields();
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_12__["SnackbarComponent"].showError(this.matSnackBar, null, 'Não foi possível carregar lista de operações e atividades.');
        });
    }
    ngAfterViewInit() {
        this.form.valueChanges.subscribe(response => {
            let changed = false;
            if (response.name && response.name !== "" && response.name !== this.postTemplate.nome) {
                this.postTemplate.nome = response.name;
                changed = true;
            }
            if (response.operacaoId && response.operacaoId !== "" && response.operacaoId !== this.postTemplate.operacaoId) {
                this.postTemplate.operacaoId = response.operacaoId;
                changed = true;
            }
            if (response.atividadeId && response.atividadeId !== "" && response.atividadeId !== this.postTemplate.atividadeId) {
                this.postTemplate.atividadeId = response.atividadeId;
                changed = true;
            }
            if (response.operacaoEstatica && response.operacaoEstatica.toString() !== "" && response.operacaoEstatica.toString() !== this.postTemplate.operacaoEstatica.toString()) {
                this.postTemplate.operacaoEstatica = response.operacaoEstatica;
                changed = true;
            }
            if (changed) {
                this.save();
            }
        });
    }
    populateFields() {
        /** Caso exista o id, é uma edição. Chama o serviço para obter os dados */
        if (this.templateId !== 'new') {
            this.labelButton = "SALVAR ALTERAÇÕES";
            if (this.getData()) {
                this.recoveryData();
            }
            else {
                this.managerTemplateService.getTemplate(this.templateId).subscribe(response => {
                    const data = Object.assign({}, response);
                    Object.freeze(data);
                    this.postTemplate.nome = data.nome;
                    this.postTemplate.operacaoId = data.atividade.operacao.operacaoId;
                    this.postTemplate.atividadeId = data.atividade.id;
                    this.postTemplate.operacaoEstatica = data.operacaoEstatica;
                    this.postTemplate.template = data.template;
                    const operation = this.operations.find(el => el.operacaoId === this.postTemplate.operacaoId);
                    if (operation.atividades) {
                        this.activities = [...operation.atividades];
                    }
                    this.form.patchValue({
                        name: data.nome,
                        operacaoEstatica: data.operacaoEstatica.toString(),
                        operacaoId: data.atividade.operacao.operacaoId,
                        atividadeId: data.atividade.id,
                    });
                    this.steps = [...this.postTemplate.template.steps];
                    this.save();
                });
            }
            this.form.get('name').disable();
            this.form.get('operacaoId').disable();
            this.form.get('atividadeId').disable();
        }
        else {
            if (this.templateCloneId) {
                this.managerTemplateService.getTemplate(this.templateCloneId).subscribe(response => {
                    const data = Object.assign({}, response);
                    this.postTemplate.template = data.template;
                    this.steps = [...this.postTemplate.template.steps];
                    this.save();
                });
            }
            else {
                if (this.getData()) {
                    this.recoveryData();
                }
                else {
                    this.form.get('atividadeId').disable();
                }
            }
        }
        this.loading = false;
    }
    setOperation() {
        const operation = this.operations.find(el => el.operacaoId === this.form.value.operacaoId);
        this.activities = [...operation.atividades];
        this.form.get('atividadeId').enable();
    }
    recoveryData() {
        this.postTemplate = this.getData();
        const operation = this.operations.find(el => el.operacaoId === this.postTemplate.operacaoId);
        if (operation && operation.atividades) {
            this.activities = [...operation.atividades];
        }
        this.form.patchValue({
            name: this.postTemplate.nome,
            operacaoEstatica: this.postTemplate.operacaoEstatica.toString(),
            operacaoId: this.postTemplate.operacaoId,
            atividadeId: this.postTemplate.atividadeId,
        });
        this.steps = [...this.postTemplate.template.steps];
    }
    addStep() {
        if (this.templateId !== 'new') {
            this.router.navigate(['/configuracao/template', this.templateId ? this.templateId : 'new', 'step', this.postTemplate.template.steps.length + 1]);
        }
        else {
            if (this.form.value.name != "" && this.form.value.operacaoId != "") {
                this.postTemplate.nome = this.form.value.name.trim();
                this.postTemplate.operacaoId = this.form.value.operacaoId;
                this.postTemplate.atividadeId = this.form.value.atividadeId;
                this.save();
                this.router.navigate(['/configuracao/template', this.templateId ? this.templateId : 'new', 'step', this.postTemplate.template.steps.length + 1]);
            }
            else {
                this.form.markAllAsTouched();
            }
        }
    }
    removeStep(index) {
        this.postTemplate.template.steps = this.postTemplate.template.steps.filter(step => step.index !== index);
        this.steps = [...this.postTemplate.template.steps];
        this.save();
    }
    addNewTemplate() {
        if (this.toValidateTemplate()) {
            this.loading = true;
            const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_9__["Dialog"]();
            dialog.title = "Sucesso!";
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_11__["DialogTypes"].INFORMATION;
            if (this.templateId && this.templateId === 'new') {
                this.postTemplate.operacaoEstatica = this.postTemplate.operacaoEstatica.toString() === "true";
                this.managerTemplateService.postNewTemplate(this.postTemplate).subscribe(() => {
                    dialog.message = "O template foi <strong>CADASTRADO</strong> com sucesso!";
                    this.showMessage(dialog);
                    this.loading = false;
                });
            }
            else {
                this.postTemplate.operacaoEstatica = this.postTemplate.operacaoEstatica.toString() === "true";
                this.postTemplate['id'] = this.templateId;
                this.managerTemplateService.updateTemplate(this.postTemplate, this.templateId).subscribe(() => {
                    dialog.message = "O template foi <strong>ALTERADO</strong> com sucesso!";
                    this.showMessage(dialog);
                    this.loading = false;
                });
            }
        }
    }
    toValidateTemplate() {
        const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_9__["Dialog"]();
        dialog.title = "Problema ao Cadastrar Template";
        dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_11__["DialogTypes"].INFORMATION;
        if (this.form.invalid) {
            dialog.message = "O template precisa ter um nome e estar associado a uma operação.";
            this.showMessage(dialog);
            return false;
        }
        else if (this.postTemplate.template.steps.length === 0) {
            dialog.message = "O template precisa ter pelo menos 1 passo cadastrado.";
            this.showMessage(dialog);
            return false;
        }
        else {
            let error;
            this.postTemplate.template.steps.forEach(step => {
                step.fieldGroups.forEach(fieldGroup => {
                    if (fieldGroup.fields.length === 0) {
                        dialog.message = "Cada 'Grupo de Campo' precisa ter pelo menos 1 campo associado a ele";
                        this.showMessage(dialog);
                        error = true;
                    }
                });
            });
            if (!this.postTemplate.template.decision || this.postTemplate.template.decision.buttons.length === 0) {
                dialog.message = "Você precisa definir os botões de decisão do template.";
                this.showMessage(dialog);
                error = true;
            }
            if (error) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    showMessage(dialog) {
        this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '600px',
            data: {
                title: dialog.title,
                message: dialog.message,
                type: dialog.type,
            }
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["moveItemInArray"])(this.postTemplate.template.steps, event.previousIndex, event.currentIndex);
        this.steps = [...this.postTemplate.template.steps];
        this.save();
    }
    getIndex(index) {
        return (Number(index) + 1).toString();
    }
    getData() {
        return JSON.parse(sessionStorage.getItem('postTemplate'));
    }
    save() {
        sessionStorage.setItem('postTemplate', JSON.stringify(this.postTemplate));
    }
};
CreateTemplateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_5__["OperationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_manager_templates_service__WEBPACK_IMPORTED_MODULE_8__["ManagerTemplateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
CreateTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-template',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/create-template/create-template.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-template.component.scss */ "./src/app/modules/configuration-system/create-template/create-template.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_5__["OperationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _services_manager_templates_service__WEBPACK_IMPORTED_MODULE_8__["ManagerTemplateService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CreateTemplateComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/field-group/field-group.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/field-group/field-group.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-radio-group {\n  display: block;\n}\n.mat-radio-group .mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n.buttonPosition {\n  position: relative;\n  top: 5px;\n}\n.material-icons {\n  cursor: pointer;\n}\n.icones {\n  width: 50px;\n}\ntable {\n  font-size: 0.9rem;\n}\ntable th {\n  background-color: #3D6E90;\n  color: #ffffff;\n  padding: 10px;\n  font-weight: normal;\n}\ntable td {\n  padding: 10px;\n  border-bottom: 1px solid #DDD;\n}\ntable tr:nth-child(odd) {\n  background-color: #eceff1;\n}\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  height: 44px;\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9maWVsZC1ncm91cC9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcY29uZmlndXJhdGlvbi1zeXN0ZW1cXGZpZWxkLWdyb3VwXFxmaWVsZC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9maWVsZC1ncm91cC9maWVsZC1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7QUNFUjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtBQ0NKO0FERUE7RUFDSSxpQkFBQTtBQ0NKO0FEQUk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURFQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0VBQUE7RUFBQSw4REFBQTtFQUFBLHNEQUFBO0VBQUEsMEdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vZmllbGQtZ3JvdXAvZmllbGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25Qb3NpdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDVweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb25lcyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNENkU5MDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIH1cclxuICAgIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59IiwiLm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1hdC1yYWRpby1ncm91cCAubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5idXR0b25Qb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb25lcyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG50YWJsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxudGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q2RTkwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG59XG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjE7XG59XG5cbi5leGFtcGxlLWN1c3RvbS1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/field-group/field-group.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/configuration-system/field-group/field-group.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FieldGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldGroupComponent", function() { return FieldGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/configuration-system-util.service */ "./src/app/modules/configuration-system/services/configuration-system-util.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _shared_components_add_field_form_add_field_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/add-field-form/add-field-form.component */ "./src/app/shared/components/add-field-form/add-field-form.component.ts");










let FieldGroupComponent = class FieldGroupComponent {
    constructor(activatedRoute, dialog, utilService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.utilService = utilService;
        this.displayedColumns = ['item', 'nameField', 'type', 'visible', 'enable', 'required', 'width', 'edit', 'remove', 'moveToUp', 'moveToDown'];
        /** Todos os campos do template */
        this.formFields = [];
    }
    ngOnInit() {
        this.templateId = this.activatedRoute.snapshot.paramMap.get('idtemplate');
        this.stepIndex = Number(this.activatedRoute.snapshot.paramMap.get('stepIndex'));
        this.fieldGroupIndex = Number(this.activatedRoute.snapshot.paramMap.get('fieldGroupIndex'));
        this.postTemplate = this.getData();
        if (this.postTemplate) {
            this.postTemplate.template.steps.forEach(step => {
                if (step.index === this.stepIndex) {
                    this.step = step;
                    step.fieldGroups.forEach(fieldGroup => {
                        if (fieldGroup.index === this.fieldGroupIndex) {
                            this.fieldGroup = fieldGroup;
                        }
                    });
                }
            });
            this.postTemplate.template.steps.map(step => {
                step.fieldGroups.map(fieldGroup => {
                    fieldGroup.fields.map(field => {
                        this.formFields = [...this.formFields, field];
                    });
                });
            });
        }
    }
    addField(field) {
        if (this.editingField) {
            const indexformFields = this.formFields.map(el => el.name).indexOf(field.name);
            this.formFields[indexformFields] = field;
            const indexfieldGroup = this.fieldGroup.fields.map(el => el.name).indexOf(field.name);
            this.fieldGroup.fields[indexfieldGroup] = field;
            this.editingField = false;
        }
        else {
            this.formFields = [...this.formFields, field];
            this.fieldGroup.fields = [...this.fieldGroup.fields, field];
        }
        this.save(true);
    }
    editField(field) {
        this.editingField = true;
        this.addFieldFormComponent.editField(field);
    }
    removeField(field) {
        let dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_4__["Dialog"]();
        dialog.title = "Exclusão de Campo";
        dialog.message = `Você tem certeza que deseja excluir o campo '${field.name}'?`;
        dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_6__["DialogTypes"].CONFIRMATION;
        this.showMessage(dialog);
        this.dialogRef.afterClosed().subscribe(response => {
            if (response === 'ok') {
                this.formFields = this.formFields.filter(element => element.name !== field.name);
                this.fieldGroup.fields = this.fieldGroup.fields.filter(element => element.name !== field.name);
                this.formFields.forEach(element => {
                    element.conditionsToVisible = element.conditionsToVisible.filter(condition => condition.fieldName !== field.name);
                    element.conditionsToEnable = element.conditionsToEnable.filter(condition => condition.fieldName !== field.name);
                });
                this.save();
            }
        });
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(this.fieldGroup.fields, event.previousIndex, event.currentIndex);
        this.save();
    }
    getData() {
        return JSON.parse(sessionStorage.getItem('postTemplate'));
    }
    save(showMessage) {
        sessionStorage.setItem('postTemplate', JSON.stringify(this.postTemplate));
        if (showMessage) {
            let dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_4__["Dialog"]();
            dialog.title = "Sucesso";
            dialog.message = "Operação realizada com sucesso!";
            dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_6__["DialogTypes"].INFORMATION;
            this.showMessage(dialog);
        }
    }
    getIndex(index) {
        return (Number(index) + 1).toString();
    }
    showMessage(dialog) {
        this.dialogRef = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], {
            width: '600px',
            data: {
                title: dialog.title,
                message: dialog.message,
                type: dialog.type,
            }
        });
    }
};
FieldGroupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationServiceUtilService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_components_add_field_form_add_field_form_component__WEBPACK_IMPORTED_MODULE_9__["AddFieldFormComponent"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_add_field_form_add_field_form_component__WEBPACK_IMPORTED_MODULE_9__["AddFieldFormComponent"])
], FieldGroupComponent.prototype, "addFieldFormComponent", void 0);
FieldGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-field-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./field-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/field-group/field-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./field-group.component.scss */ "./src/app/modules/configuration-system/field-group/field-group.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_configuration_system_util_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationServiceUtilService"]])
], FieldGroupComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/list-template/list-template.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/list-template/list-template.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-column-actions {\n  min-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9saXN0LXRlbXBsYXRlL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxcbGlzdC10ZW1wbGF0ZVxcbGlzdC10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9saXN0LXRlbXBsYXRlL2xpc3QtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9saXN0LXRlbXBsYXRlL2xpc3QtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1hY3Rpb25zIHtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbn0iLCIubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/list-template/list-template.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/list-template/list-template.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTemplateComponent", function() { return ListTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_manager_templates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/manager-templates.service */ "./src/app/modules/configuration-system/services/manager-templates.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");






let ListTemplateComponent = class ListTemplateComponent {
    constructor(managerTemplateService, matSnackBar) {
        this.managerTemplateService = managerTemplateService;
        this.matSnackBar = matSnackBar;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['id', 'templateName', 'activity', 'actions'];
        this.totalItens = 0;
    }
    ngOnInit() {
        this.loading = true;
        sessionStorage.removeItem('postTemplate');
    }
    ngAfterViewInit() {
        this.getListTemplates();
        if (this.paginator) {
            this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.getListTemplates())).subscribe();
        }
    }
    getListTemplates() {
        this.loading = true;
        const pageIndex = this.paginator ? (this.paginator.pageIndex + 1).toString() : '1';
        const pageSize = this.paginator ? this.paginator.pageSize.toString() : '5';
        this.managerTemplateService.getListTemplates(pageIndex, pageSize).subscribe(response => {
            this.totalItens = response.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
            this.loading = false;
        }, () => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "Não foi possível carregar a lista de templates");
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
ListTemplateComponent.ctorParameters = () => [
    { type: _services_manager_templates_service__WEBPACK_IMPORTED_MODULE_2__["ManagerTemplateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], ListTemplateComponent.prototype, "paginator", void 0);
ListTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-template',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/list-template/list-template.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-template.component.scss */ "./src/app/modules/configuration-system/list-template/list-template.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manager_templates_service__WEBPACK_IMPORTED_MODULE_2__["ManagerTemplateService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], ListTemplateComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vbW90aXZvcy1jb250aW5nZW5jaWEvbW90aXZvcy1jb250aW5nZW5jaWEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MotivosContingenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosContingenciaComponent", function() { return MotivosContingenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _services_motivos_contingencia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/motivos-contingencia.service */ "./src/app/modules/configuration-system/services/motivos-contingencia.service.ts");






let MotivosContingenciaComponent = class MotivosContingenciaComponent {
    constructor(formBuilder, MotivosContingenciaService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.MotivosContingenciaService = MotivosContingenciaService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['nome', 'ativo', 'editar'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [10, 25, 100];
        this.period = '1';
        this.pouchs = [];
        this.loader = false;
    }
    ngOnInit() {
        this.formSearch = this.formBuilder.group({
            descricaoMotivo: ['']
        });
        this.formAddMotivosContingencia = this.formBuilder.group({
            motivoContingencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ativo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getMotivosContingencia();
    }
    getMotivosContingencia() {
        this.pouchs = [];
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.loader = true;
        this.MotivosContingenciaService.getAll(this.formSearch.value.descricaoMotivo, pageSize, pageIndex).subscribe(response => {
            this.pouchs = [...response.data];
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pouchs);
            this.length = response.length;
            this.dataSource.paginator = this.paginator;
            this.loader = false;
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getMotivosContingencia();
    }
};
MotivosContingenciaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_motivos_contingencia_service__WEBPACK_IMPORTED_MODULE_5__["MotivosContingenciaService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], MotivosContingenciaComponent.prototype, "paginator", void 0);
MotivosContingenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivos-contingencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./motivos-contingencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./motivos-contingencia.component.scss */ "./src/app/modules/configuration-system/motivos-contingencia/motivos-contingencia.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_motivos_contingencia_service__WEBPACK_IMPORTED_MODULE_5__["MotivosContingenciaService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], MotivosContingenciaComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vbW90aXZvcy1yZWplaWNhby9tb3Rpdm9zLXJlamVpY2FvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MotivosRejeicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosRejeicaoComponent", function() { return MotivosRejeicaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/motivos-rejeicao.service */ "./src/app/modules/configuration-system/services/motivos-rejeicao.service.ts");






let MotivosRejeicaoComponent = class MotivosRejeicaoComponent {
    constructor(formBuilder, MotivosRejeicaoService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.MotivosRejeicaoService = MotivosRejeicaoService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['nome', 'ativo', 'editar'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.period = '1';
        this.pouchs = [];
        this.loader = false;
    }
    ngOnInit() {
        this.formSearch = this.formBuilder.group({
            descricaoMotivo: ['']
        });
        this.formAddMotivosRejeicao = this.formBuilder.group({
            motivoRejeicao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ativo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getMotivosRejeicao();
    }
    getMotivosRejeicao() {
        this.pouchs = [];
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.loader = true;
        this.MotivosRejeicaoService.getAll(this.formSearch.value.descricaoMotivo, pageSize, pageIndex).subscribe(response => {
            this.pouchs = [...response.data];
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pouchs);
            this.length = response.length;
            this.dataSource.paginator = this.paginator;
            this.loader = false;
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getMotivosRejeicao();
    }
};
MotivosRejeicaoComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_5__["MotivosRejeicaoService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], MotivosRejeicaoComponent.prototype, "paginator", void 0);
MotivosRejeicaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivos-rejeicao',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./motivos-rejeicao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./motivos-rejeicao.component.scss */ "./src/app/modules/configuration-system/motivos-rejeicao/motivos-rejeicao.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_motivos_rejeicao_service__WEBPACK_IMPORTED_MODULE_5__["MotivosRejeicaoService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], MotivosRejeicaoComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle {\n  position: relative;\n  top: 15px;\n  margin-right: 40px;\n}\n\n.btn.btn-success {\n  position: relative;\n  top: 10px;\n}\n\n.blue {\n  color: #2196f3;\n}\n\n.result {\n  margin-top: 30px;\n}\n\n.result label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24tZ3JvdXAvb3BlcmF0aW9uLWdyb3VwLWZvcm0vRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbmZpZ3VyYXRpb24tc3lzdGVtXFxvcGVyYXRpb24tZ3JvdXBcXG9wZXJhdGlvbi1ncm91cC1mb3JtXFxvcGVyYXRpb24tZ3JvdXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24tZ3JvdXAvb3BlcmF0aW9uLWdyb3VwLWZvcm0vb3BlcmF0aW9uLWdyb3VwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vb3BlcmF0aW9uLWdyb3VwL29wZXJhdGlvbi1ncm91cC1mb3JtL29wZXJhdGlvbi1ncm91cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsIi5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmJ0bi5idG4tc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG4ucmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZXN1bHQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: OperationGroupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationGroupFormComponent", function() { return OperationGroupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_operation_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/operation-group.service */ "./src/app/modules/configuration-system/services/operation-group.service.ts");







let OperationGroupFormComponent = class OperationGroupFormComponent {
    constructor(activatedRoute, formBuilder, service, router, matSnackBar, cdRef) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.cdRef = cdRef;
        this.displayedColumns = ['operacaoId', 'nome', 'actions'];
        this.tipoPerfis = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.loader = false;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.formEntity = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.id)
            this.get();
    }
    ngAfterViewInit() {
        this.nomeElement.nativeElement.focus();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    get() {
        this.service.get(this.id).subscribe(response => {
            this.entity = response.data;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](response.data.operacoes);
            this.length = response.data.operacoes.length;
            this.formEntity.controls['nome'].setValue(this.entity.nome);
            this.loader = false;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loader = false;
        });
    }
    save() {
        this.loader = true;
        if (this.formEntity.valid) {
            this.service.save(this.formEntity.value, this.id).subscribe(response => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.router.navigate(['/configuracao/operacao-grupos']);
                this.loader = false;
            });
        }
    }
};
OperationGroupFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_operation_group_service__WEBPACK_IMPORTED_MODULE_6__["OperationGroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('elementNome', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OperationGroupFormComponent.prototype, "nomeElement", void 0);
OperationGroupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operation-group-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operation-group-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operation-group-form.component.scss */ "./src/app/modules/configuration-system/operation-group/operation-group-form/operation-group-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_operation_group_service__WEBPACK_IMPORTED_MODULE_6__["OperationGroupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], OperationGroupFormComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".completed {\n  background-color: #c8e6c9;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.align-button-header {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24tZ3JvdXAvb3BlcmF0aW9uLWdyb3VwLWxpc3QvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbmZpZ3VyYXRpb24tc3lzdGVtXFxvcGVyYXRpb24tZ3JvdXBcXG9wZXJhdGlvbi1ncm91cC1saXN0XFxvcGVyYXRpb24tZ3JvdXAtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24tZ3JvdXAvb3BlcmF0aW9uLWdyb3VwLWxpc3Qvb3BlcmF0aW9uLWdyb3VwLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24tZ3JvdXAvb3BlcmF0aW9uLWdyb3VwLWxpc3Qvb3BlcmF0aW9uLWdyb3VwLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XHJcbn1cclxuXHJcbi5maXJzdC1jb2x1bW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4uYWxpZ24tYnV0dG9uLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufSIsIi5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xufVxuXG4uZmlyc3QtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNSU7XG59XG5cbi5hbGlnbi1idXR0b24taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: OperationGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationGroupListComponent", function() { return OperationGroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_operation_group_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/operation-group.service */ "./src/app/modules/configuration-system/services/operation-group.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let OperationGroupListComponent = class OperationGroupListComponent {
    constructor(formBuilder, service, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.displayedColumns = ['id', 'nome', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.filterDebounce = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loader = false;
    }
    ngOnInit() {
        this.formFilter = this.formBuilder.group({
            nome: ['']
        });
        this.find();
    }
    ngAfterViewInit() {
        if (this.paginator) {
            this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.find())).subscribe();
        }
    }
    find() {
        this.loader = true;
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.service.find(pageIndex, pageSize, this.formFilter.value.nome).subscribe(response => {
            this.loader = false;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
            this.length = response.length;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loader = false;
        });
    }
    newRegister() {
        this.router.navigate(['/configuracao/operacao-grupos/formulario']);
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.find();
    }
};
OperationGroupListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_operation_group_service__WEBPACK_IMPORTED_MODULE_5__["OperationGroupService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], OperationGroupListComponent.prototype, "paginator", void 0);
OperationGroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operation-group-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operation-group-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operation-group-list.component.scss */ "./src/app/modules/configuration-system/operation-group/operation-group-list/operation-group-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_operation_group_service__WEBPACK_IMPORTED_MODULE_5__["OperationGroupService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], OperationGroupListComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/operation/operation-form/operation-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation/operation-form/operation-form.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-slide-toggle {\n  position: relative;\n  top: 15px;\n  margin-right: 40px;\n}\n\n.btn.btn-success {\n  position: relative;\n  top: 10px;\n}\n\n.blue {\n  color: #2196f3;\n}\n\n.result {\n  margin-top: 30px;\n}\n\n.result label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24vb3BlcmF0aW9uLWZvcm0vRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbmZpZ3VyYXRpb24tc3lzdGVtXFxvcGVyYXRpb25cXG9wZXJhdGlvbi1mb3JtXFxvcGVyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24vb3BlcmF0aW9uLWZvcm0vb3BlcmF0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZmlndXJhdGlvbi1zeXN0ZW0vb3BlcmF0aW9uL29wZXJhdGlvbi1mb3JtL29wZXJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsIi5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmJ0bi5idG4tc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG4ucmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZXN1bHQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/operation/operation-form/operation-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation/operation-form/operation-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OperationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationFormComponent", function() { return OperationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_operation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/operation.service */ "./src/app/modules/configuration-system/services/operation.service.ts");
/* harmony import */ var _services_operation_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/operation-group.service */ "./src/app/modules/configuration-system/services/operation-group.service.ts");








let OperationFormComponent = class OperationFormComponent {
    constructor(activatedRoute, formBuilder, service, router, matSnackBar, serviceOperationroup, cdRef) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.serviceOperationroup = serviceOperationroup;
        this.cdRef = cdRef;
        this.displayedColumns = ['atividadeId', 'nome', 'actions'];
        this.tipoPerfis = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.loader = false;
        this.operacoes = [];
    }
    ngOnInit() {
        this.loader = true;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.formEntity = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            operacaoGrupoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.serviceOperationroup.list().subscribe(response => {
            this.operacoes = response.data;
            if (this.id)
                this.get();
            else
                this.loader = false;
        }, error => {
            this.loader = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    ngAfterViewInit() {
        this.nomeElement.nativeElement.focus();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    get() {
        this.service.get(this.id).subscribe(response => {
            this.entity = response.data;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](response.data.atividades);
            this.length = response.data.atividades.length;
            this.formEntity.controls['nome'].setValue(this.entity.nome);
            this.formEntity.controls['descricao'].setValue(this.entity.descricao);
            this.formEntity.controls['data'].setValue(this.entity.data);
            this.formEntity.controls['local'].setValue(this.entity.local);
            this.formEntity.controls['operacaoGrupoId'].setValue(this.entity.grupo.operacaoGrupoId);
            this.loader = false;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loader = false;
        });
    }
    save() {
        this.loader = true;
        if (this.formEntity.valid) {
            this.service.save(this.formEntity.value, this.id).subscribe(response => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(this.matSnackBar);
                this.router.navigate(['/configuracao/operacoes']);
                this.loader = false;
            });
        }
    }
};
OperationFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_operation_service__WEBPACK_IMPORTED_MODULE_6__["OperationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _services_operation_group_service__WEBPACK_IMPORTED_MODULE_7__["OperationGroupService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('elementNome', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], OperationFormComponent.prototype, "nomeElement", void 0);
OperationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operation-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operation-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation/operation-form/operation-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operation-form.component.scss */ "./src/app/modules/configuration-system/operation/operation-form/operation-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_operation_service__WEBPACK_IMPORTED_MODULE_6__["OperationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _services_operation_group_service__WEBPACK_IMPORTED_MODULE_7__["OperationGroupService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], OperationFormComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/operation/operation-list/operation-list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation/operation-list/operation-list.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".completed {\n  background-color: #c8e6c9;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.align-button-header {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24vb3BlcmF0aW9uLWxpc3QvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvbmZpZ3VyYXRpb24tc3lzdGVtXFxvcGVyYXRpb25cXG9wZXJhdGlvbi1saXN0XFxvcGVyYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24vb3BlcmF0aW9uLWxpc3Qvb3BlcmF0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9vcGVyYXRpb24vb3BlcmF0aW9uLWxpc3Qvb3BlcmF0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGxldGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XHJcbn1cclxuXHJcbi5maXJzdC1jb2x1bW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG4uYWxpZ24tYnV0dG9uLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufSIsIi5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xufVxuXG4uZmlyc3QtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNSU7XG59XG5cbi5hbGlnbi1idXR0b24taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/operation/operation-list/operation-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/operation/operation-list/operation-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OperationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationListComponent", function() { return OperationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_operation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/operation.service */ "./src/app/modules/configuration-system/services/operation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_operation_group_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/operation-group.service */ "./src/app/modules/configuration-system/services/operation-group.service.ts");










let OperationListComponent = class OperationListComponent {
    constructor(formBuilder, service, serviceOperationroup, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.serviceOperationroup = serviceOperationroup;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.displayedColumns = ['id', 'nome', 'descricao', 'local', 'grupo', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.filterDebounce = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loader = false;
        this.operacoes = [];
    }
    ngOnInit() {
        this.formFilter = this.formBuilder.group({
            nome: [''],
            operacaoGrupoId: [''],
        });
        this.serviceOperationroup.list().subscribe(response => {
            this.operacoes = response.data;
            this.find();
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
        });
    }
    ngAfterViewInit() {
        if (this.paginator) {
            this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.find())).subscribe();
        }
    }
    find() {
        this.loader = true;
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.service.find(pageIndex, pageSize, this.formFilter.value.nome, this.formFilter.value.operacaoGrupoId).subscribe(response => {
            this.loader = false;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
            this.length = response.length;
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loader = false;
        });
    }
    newRegister() {
        this.router.navigate(['/configuracao/operacoes/formulario']);
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.find();
    }
};
OperationListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_operation_service__WEBPACK_IMPORTED_MODULE_5__["OperationService"] },
    { type: _services_operation_group_service__WEBPACK_IMPORTED_MODULE_9__["OperationGroupService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], OperationListComponent.prototype, "paginator", void 0);
OperationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operation-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./operation-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/operation/operation-list/operation-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./operation-list.component.scss */ "./src/app/modules/configuration-system/operation/operation-list/operation-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_operation_service__WEBPACK_IMPORTED_MODULE_5__["OperationService"],
        _services_operation_group_service__WEBPACK_IMPORTED_MODULE_9__["OperationGroupService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], OperationListComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  text-align: center;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\ndiv[mat-dialog-content] {\n  height: calc(100% - 100px);\n}\n\ndiv[mat-dialog-content] .scroll {\n  height: calc(100%);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9wcmV2aWV3LXRlbXBsYXRlL2RpYWxvZy1wcmV2aWV3L0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxccHJldmlldy10ZW1wbGF0ZVxcZGlhbG9nLXByZXZpZXdcXGRpYWxvZy1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24tc3lzdGVtL3ByZXZpZXctdGVtcGxhdGUvZGlhbG9nLXByZXZpZXcvZGlhbG9nLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksa0JBQUE7QUNFUjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24tc3lzdGVtL3ByZXZpZXctdGVtcGxhdGUvZGlhbG9nLXByZXZpZXcvZGlhbG9nLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcC1idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlKTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG4gICAgfVxyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwLWJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcC1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuZGl2W21hdC1kaWFsb2ctY29udGVudF0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbn1cbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIC5zY3JvbGwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DialogPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPreviewComponent", function() { return DialogPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");




let DialogPreviewComponent = class DialogPreviewComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.formatedData = JSON.parse(this.data.message);
    }
    submit() {
        this.dialogRef.close();
    }
};
DialogPreviewComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-preview.component.scss */ "./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"]])
], DialogPreviewComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/preview-template/preview-template.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/preview-template/preview-template.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".boxInfo {\n  margin: 20px 0;\n  background-color: #CFD8DC;\n  padding: 20px;\n}\n.boxInfo label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9wcmV2aWV3LXRlbXBsYXRlL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxccHJldmlldy10ZW1wbGF0ZVxccHJldmlldy10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9wcmV2aWV3LXRlbXBsYXRlL3ByZXZpZXctdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24tc3lzdGVtL3ByZXZpZXctdGVtcGxhdGUvcHJldmlldy10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hJbmZvIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn0iLCIuYm94SW5mbyB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmJveEluZm8gbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/configuration-system/preview-template/preview-template.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/preview-template/preview-template.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PreviewTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewTemplateComponent", function() { return PreviewTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/template-types.enum */ "./src/app/models/template-types.enum.ts");
/* harmony import */ var _dialog_preview_dialog_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-preview/dialog-preview.component */ "./src/app/modules/configuration-system/preview-template/dialog-preview/dialog-preview.component.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");









let PreviewTemplateComponent = class PreviewTemplateComponent {
    constructor(activatedRoute, router, dialog, utilsService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
        this.utilsService = utilsService;
        this.type = src_app_models_template_types_enum__WEBPACK_IMPORTED_MODULE_6__["TemplateTypes"].PREVIEW;
        this.galleries = [];
        this.content = {
            "chave": "16010000039962860",
            "nroProposta": "0000039962860",
            "tipoPessoa": "F",
            "pab": "1601",
            "cpfCnpj": "00058673636434",
            "penumper": "29028315",
            "razaoSocial": "SEBASTIAO DA COSTA MONTEIRO FO",
            "codTipoAbertura": "04",
            "descricao": "MASSIFICADA",
            "dataAbertura": "10/10/2019 00:00:00",
            "faseConta": "01",
            "produtoConta": "22",
            "descricaoProdutoConta": "CONTA CORRENTE",
            "subProdutoConta": "8949",
            "descricaoSubProdutoConta": "SANTANDER MASTER",
            "condMovimentacao": "I",
            "codSegPrincipal": "002",
            "descricaoCodSegPrincipal": "02-VAN GOGH MAX",
            "pacoteTarifas": "5337",
            "agencia": "1601",
            "contaVinculada": "00000000000000",
            "origemConta": "GOVERNOS E INSTITUICOES - NOVO",
            "ctaPrincipal": "0000010123456",
            "uniorgPara": "0011601",
            "redePara": "REDE - NORDESTE",
            "regionalPara": "REG RECIFE NORTE",
            "agenciaPara": "IPUTINGA-RECIFE-PE",
            "isRejeito": false,
            "usuario": "BG4CW920",
            "dataTableReceived": [
                { 'data': '25/12/2019', 'faturamento': '5000.00' },
                { 'data': '26/12/2019', 'faturamento': '5500.00' },
                { 'data': '27/12/2019', 'faturamento': '5600.70' },
                { 'data': '28/12/2019', 'faturamento': '5700.00' },
                { 'data': '29/12/2019', 'faturamento': '5800.35' },
                { 'data': '30/12/2019', 'faturamento': '5200.12' },
            ]
        };
    }
    ngOnInit() {
        this.templateId = this.activatedRoute.snapshot.paramMap.get('idtemplate');
        this.template = this.getData().template;
        this.template.name = this.getData().nome;
        if (this.template.header) {
            this.template.header.bankBranch = '99999';
            this.template.header.bankAccount = '9999999';
            this.template.header.docNumber = '999.999.999-99';
        }
        else {
            this.template.header = { docNumber: '999.999.999-99', bankBranch: '99999', bankAccount: '9999999', indexador: null };
        }
        this.template.actions = [
            { value: 101, name: "Atividade 1 (id: 101)", checked: false },
            { value: 102, name: "Atividade 2 (id: 102)", checked: false },
            { value: 103, name: "Atividade 3 (id: 103)", checked: false },
        ];
        this.template.contingencyReasons = [
            { value: 201, name: "Motivo de Contingência 1 (id: 201)", checked: false },
            { value: 202, name: "Motivo de Contingência 2 (id: 202)", checked: false },
            { value: 203, name: "Motivo de Contingência 3 (id: 203)", checked: false },
        ];
        this.template.rejectionReasons = [
            { value: 301, name: "Motivo de Rejeição 1 (id: 301)", checked: false },
            { value: 302, name: "Motivo de Rejeição 2 (id: 302)", checked: false },
            { value: 303, name: "Motivo de Rejeição 3 (id: 303)", checked: false },
        ];
        /*** Bind dos campos do template mediante carga FAKE */
        if (this.content) {
            this.template.steps.map((step) => {
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
    }
    getData() {
        return JSON.parse(sessionStorage.getItem('postTemplate'));
    }
    goBack() {
        this.router.navigate(['/configuracao/template', this.templateId]);
    }
    submit(event) {
        const dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"]();
        dialog.title = "Dados que serão enviados para o serviço";
        dialog.message = JSON.stringify(event);
        dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_5__["DialogTypes"].INFORMATION;
        this.showMessage(dialog);
    }
    showMessage(dialog) {
        this.dialog.open(_dialog_preview_dialog_preview_component__WEBPACK_IMPORTED_MODULE_7__["DialogPreviewComponent"], {
            width: '600px',
            height: '80%',
            data: {
                title: dialog.title,
                message: dialog.message,
                type: dialog.type,
            }
        });
    }
};
PreviewTemplateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"] }
];
PreviewTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-template',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview-template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/preview-template/preview-template.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview-template.component.scss */ "./src/app/modules/configuration-system/preview-template/preview-template.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"]])
], PreviewTemplateComponent);



/***/ }),

/***/ "./src/app/modules/configuration-system/services/activity.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/configuration-system/services/activity.service.ts ***!
  \***************************************************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ActivityService = class ActivityService {
    constructor(http) {
        this.http = http;
        this.urlController = '/api/v1/atividades';
        this.urlCentroCustos = '/api/v1/centro-custos';
    }
    getAll() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlController}`);
    }
    find(pageIndex, pageSize, filter, operacaoId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlController}/listar`, {
            params: {
                PageSize: pageSize,
                PageIndex: pageIndex,
                Nome: filter,
                OperacaoId: operacaoId || ""
            }
        });
    }
    get(id) {
        if (id) {
            return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlController}/${id}`);
        }
        else {
            const simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                observer.next();
                observer.complete();
            });
            return simpleObservable;
        }
    }
    save(entity) {
        if (entity.id) {
            return this.put(entity);
        }
        else {
            return this.post(entity);
        }
    }
    post(entity) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlController}`, entity);
    }
    put(entity) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlController}/${entity.id}`, entity);
    }
    centroCustos() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}${this.urlCentroCustos}`);
    }
};
ActivityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ActivityService);



/***/ }),

/***/ "./src/app/modules/configuration-system/services/manager-templates.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/services/manager-templates.service.ts ***!
  \************************************************************************************/
/*! exports provided: ManagerTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerTemplateService", function() { return ManagerTemplateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ManagerTemplateService = class ManagerTemplateService {
    constructor(http) {
        this.http = http;
    }
    getListTemplates(pageIndex, pageSize) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}/api/v1/templates`, {
            params: {
                PageSize: pageSize,
                PageIndex: pageIndex
            }
        });
    }
    getTemplate(templateId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}/api/v1/templates/${templateId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response.data));
    }
    postNewTemplate(template) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}/api/v1/templates`, template);
    }
    updateTemplate(template, templateId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}/api/v1/templates/${templateId}`, template);
    }
};
ManagerTemplateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ManagerTemplateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ManagerTemplateService);



/***/ }),

/***/ "./src/app/modules/configuration-system/services/motivos-contingencia.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/configuration-system/services/motivos-contingencia.service.ts ***!
  \***************************************************************************************/
/*! exports provided: MotivosContingenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosContingenciaService", function() { return MotivosContingenciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let MotivosContingenciaService = class MotivosContingenciaService {
    constructor(http) {
        this.http = http;
        this.motivosContingenciaUrl = "/api/v1/motivos-contingencia";
    }
    getAll(descricaoMotivo, pageSize, pageIndex) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosContingenciaUrl, {
            params: {
                DescricaoMotivo: descricaoMotivo,
                PageSize: pageSize,
                PageIndex: pageIndex
            }
        });
    }
    getAtividades() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosContingenciaUrl + '/novo');
    }
    get(motivoContingenciaId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosContingenciaUrl + '/' + motivoContingenciaId);
    }
    post(nome, ativo, atividades) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosContingenciaUrl, {
            "nome": nome,
            "ativo": ativo,
            "atividades": atividades
        });
    }
    put(motivoContingenciaId, nome, ativo, atividades) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosContingenciaUrl + '/' + motivoContingenciaId, {
            "nome": nome,
            "ativo": ativo,
            "atividades": atividades
        });
    }
    delete(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosContingenciaUrl + '/delete/' + id);
    }
};
MotivosContingenciaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MotivosContingenciaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MotivosContingenciaService);



/***/ }),

/***/ "./src/app/modules/configuration-system/services/motivos-rejeicao.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/configuration-system/services/motivos-rejeicao.service.ts ***!
  \***********************************************************************************/
/*! exports provided: MotivosRejeicaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivosRejeicaoService", function() { return MotivosRejeicaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let MotivosRejeicaoService = class MotivosRejeicaoService {
    constructor(http) {
        this.http = http;
        this.motivosRejeicaoUrl = "/api/v1/motivos-rejeicao";
    }
    list() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl + '/listar');
    }
    getAll(descricaoMotivo, pageSize, pageIndex) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl, {
            params: {
                DescricaoMotivo: descricaoMotivo,
                PageSize: pageSize,
                PageIndex: pageIndex
            }
        });
    }
    getAtividades() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl + '/novo');
    }
    get(motivoRejeicaoId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl + '/' + motivoRejeicaoId);
    }
    post(nome, ativo, atividades) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl, {
            "nome": nome,
            "ativo": ativo,
            "atividades": atividades
        });
    }
    put(motivoRejeicaoId, nome, ativo, atividades) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl + '/' + motivoRejeicaoId, {
            "nome": nome,
            "ativo": ativo,
            "atividades": atividades
        });
    }
    delete(id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices + this.motivosRejeicaoUrl + '/delete/' + id);
    }
};
MotivosRejeicaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MotivosRejeicaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MotivosRejeicaoService);



/***/ }),

/***/ "./src/app/modules/configuration-system/services/operation-group.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/configuration-system/services/operation-group.service.ts ***!
  \**********************************************************************************/
/*! exports provided: OperationGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationGroupService", function() { return OperationGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let OperationGroupService = class OperationGroupService {
    constructor(http) {
        this.http = http;
        this.urlController = '/api/v1/operacao-grupos';
    }
    list() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}/listar`, {});
    }
    find(pageIndex, pageSize, filter) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}`, {
            params: {
                PageSize: pageSize,
                PageIndex: pageIndex,
                Nome: filter
            }
        });
    }
    get(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}/${id}`);
    }
    save(entity, id) {
        if (id) {
            return this.put(entity, id);
        }
        else {
            return this.post(entity);
        }
    }
    post(entity) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}`, entity);
    }
    put(entity, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}/${id}`, entity);
    }
};
OperationGroupService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OperationGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], OperationGroupService);



/***/ }),

/***/ "./src/app/modules/configuration-system/services/operation.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/configuration-system/services/operation.service.ts ***!
  \****************************************************************************/
/*! exports provided: OperationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationService", function() { return OperationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let OperationService = class OperationService {
    constructor(http) {
        this.http = http;
        this.urlController = '/api/v1/operacoes';
    }
    list() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}`, {});
    }
    find(pageIndex, pageSize, nome, operacaoGrupoId) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}/listar`, {
            params: {
                PageSize: pageSize,
                PageIndex: pageIndex,
                Nome: nome,
                OperacaoGrupoId: operacaoGrupoId || ""
            }
        });
    }
    get(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}/${id}`);
    }
    save(entity, id) {
        if (id) {
            return this.put(entity, id);
        }
        else {
            return this.post(entity);
        }
    }
    post(entity) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}`, entity);
    }
    put(entity, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlServices}${this.urlController}/${id}`, entity);
    }
};
OperationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OperationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], OperationService);



/***/ }),

/***/ "./src/app/modules/configuration-system/step/step.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/configuration-system/step/step.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mb_5 {\n  margin-top: 5px;\n}\n\ntable {\n  font-size: 0.9rem;\n}\n\ntable th {\n  background-color: #3D6E90;\n  color: #ffffff;\n  padding: 10px;\n  font-weight: normal;\n}\n\ntable td {\n  padding: 10px;\n  border-bottom: 1px solid #DDD;\n}\n\ntable tr:nth-child(odd) {\n  background-color: #eceff1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9zdGVwL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxjb25maWd1cmF0aW9uLXN5c3RlbVxcc3RlcFxcc3RlcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb25maWd1cmF0aW9uLXN5c3RlbS9zdGVwL3N0ZXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREFJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNFUjs7QURBSTtFQUNJLHlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24tc3lzdGVtL3N0ZXAvc3RlcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYl81IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNENkU5MDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIH1cclxuICAgIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIubWJfNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxudGFibGUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbnRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNENkU5MDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xufVxudGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/configuration-system/step/step.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/configuration-system/step/step.component.ts ***!
  \*********************************************************************/
/*! exports provided: StepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepComponent", function() { return StepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_template_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/template.model */ "./src/app/models/template.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");






let StepComponent = class StepComponent {
    constructor(activatedRoute, formBuilder, router) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.step = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_2__["Step"]();
        this.fieldGroups = [];
    }
    ngOnInit() {
        this.postTemplate = this.getData();
        if (this.postTemplate) {
            this.templateId = this.activatedRoute.snapshot.paramMap.get('idtemplate');
            this.step.index = Number(this.activatedRoute.snapshot.paramMap.get('stepIndex'));
            this.step.name = "";
            this.step.fieldGroups = [];
            this.form = this.formBuilder.group({
                nameStep: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                nameFieldGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
            if (this.postTemplate.template.steps) {
                this.postTemplate.template.steps.forEach(step => {
                    if (step.index === this.step.index) {
                        this.step = step;
                        this.fieldGroups = [...this.step.fieldGroups];
                        this.form.patchValue({
                            nameStep: this.step.name,
                        });
                    }
                });
            }
        }
        else {
            this.router.navigate(['/configuracao/template']);
        }
    }
    addFieldGroup() {
        const fieldGroup = new src_app_models_template_model__WEBPACK_IMPORTED_MODULE_2__["FieldGroup"]();
        fieldGroup.index = this.step.fieldGroups.length + 1;
        fieldGroup.name = this.form.value.nameFieldGroup;
        fieldGroup.fields = [];
        this.step.name = this.form.value.nameStep;
        this.step.fieldGroups = [...this.step.fieldGroups, fieldGroup];
        this.fieldGroups = [...this.step.fieldGroups];
        this.form.patchValue({
            nameFieldGroup: ''
        });
        this.setStepOnTemplate(this.step);
    }
    removeFieldGroup(name) {
        this.step.fieldGroups = [...this.step.fieldGroups.filter(step => step.name !== name)];
        this.fieldGroups = [...this.step.fieldGroups];
        this.setStepOnTemplate(this.step);
    }
    setStepOnTemplate(step) {
        const indexOf = this.postTemplate.template.steps.map(el => el.index).indexOf(step.index);
        if (indexOf < 0) {
            this.postTemplate.template.steps.push(this.step);
        }
        else {
            this.postTemplate.template.steps[indexOf] = Object.assign(step);
        }
        this.save();
    }
    getData() {
        return JSON.parse(sessionStorage.getItem('postTemplate'));
    }
    save() {
        sessionStorage.setItem('postTemplate', JSON.stringify(this.postTemplate));
    }
    getIndex(index) {
        return (Number(index) + 1).toString();
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(this.step.fieldGroups, event.previousIndex, event.currentIndex);
        this.fieldGroups = [...this.step.fieldGroups];
        this.save();
    }
};
StepComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-step',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./step.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/configuration-system/step/step.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./step.component.scss */ "./src/app/modules/configuration-system/step/step.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], StepComponent);



/***/ }),

/***/ "./src/app/shared/dateAdapter/custom-convert-date.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/dateAdapter/custom-convert-date.ts ***!
  \***********************************************************/
/*! exports provided: CustomConvertDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomConvertDate", function() { return CustomConvertDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CustomConvertDate {
    static diaHoraToTimeSpan(totalHoras) {
        let timeSpan = null;
        const tempo = parseInt(totalHoras.substring(0, 2));
        const dias = parseInt((tempo / 24).toString());
        const horas = ("00" + (tempo % 24)).slice(-2);
        const minutos = totalHoras.substring(3, 5);
        timeSpan = dias + '.' + horas + ':' + minutos;
        return timeSpan;
    }
    static timeSpanToDiaHora(timeSpan) {
        const dias = parseInt(timeSpan.substring(0, timeSpan.indexOf(".")));
        const horasDias = parseInt((dias * 24).toString());
        const horas = parseInt(timeSpan.substring(timeSpan.indexOf(".") + 1, timeSpan.indexOf(":")));
        const totalHoras = horasDias + horas;
        const minutos = timeSpan.substring(timeSpan.indexOf(":") + 1);
        const diaHoraFormated = totalHoras + ':' + minutos;
        return diaHoraFormated;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-configuration-system-configuration-system-module-es2015.js.map