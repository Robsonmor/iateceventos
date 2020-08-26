(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-expedition-expedition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">work_off</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['','expedicao','caixas-definitivas-encerradas']\">Caixas Definitivas Encerradas</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Detalhes</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Detalhes</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup]=\"formCaixa\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Número da Caixa</mat-label>\r\n\t\t\t\t\t\t\t\t<input matInput formControlName=\"codigoExterno\" placeholder=\"Número da Caixa\"/>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Tipo de Documento</mat-label>\r\n\t\t\t\t\t\t\t\t<input matInput formControlName=\"tipoDocumento\" placeholder=\"Tipo de Documento\"/>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Data do Fechamento</mat-label>\r\n\t\t\t\t\t\t\t\t<input matInput\r\n\t\t\t\t\t\t\t\t\t[value]=\"dataFechamento.value\"\r\n\t\t\t\t\t\t\t\t \tformControlName=\"dataFechamento\" #dataFechamento  placeholder=\"Data do Fechamento\"/>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Total de Lotes</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"quantidadeLotes\" placeholder=\"Total de Lotes\"/>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Total de Kits</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"quantidadeKits\" placeholder=\"Total de Kits\"/>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Usuário</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"usuarioFechamento\" placeholder=\"Usuário\"/>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div  class=\"row\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"CaixaDefinitivaFechada != null\">\r\n\t\t\t<mat-expansion-panel class=\"grupo-capa-lote\" *ngFor=\"let capa of CaixaDefinitivaFechada.capaLotes, let i = index\">\r\n\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\tLote: {{ capa.lote }}\r\n\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t{{ capa.kits[0].indice }} - {{ capa.kits[capa.kits.length - 1].indice }}\r\n\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t<div class=\"col-12 text-right mt-3\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"lotePDF(capa.lote)\">Imprimir</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<ul class=\"mt-3 grid-kits\">\r\n\t\t\t\t\t\t<li class=\"list-group-item mat-header-cell\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-1 font-weight-bold\">Blip</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">Nr. Etiqueta</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-1 font-weight-bold\">agência</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">conta</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">CPF/CNPJ</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-4 font-weight-bold\">Nome Razão Social</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li *ngFor=\"let item of capa.kits\" class=\"list-group-item\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-1\">{{ item.indice }}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\">{{ item.etiqueta }}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-1\">{{ item.agencia }}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\">{{ item.contaCorrente }}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\">{{ item.documento }}</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-4\">{{ item.nome }}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</mat-expansion-panel>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/capa-lote/capa-lote.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/capa-lote/capa-lote.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Criar Caixa Definitiva</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Criar Caixa Definitiva</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup]=\"formCaixa\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Número da Caixa</mat-label>\r\n\t\t\t\t\t\t\t\t<input matInput formControlName=\"numeroCaixa\" placeholder=\"Número da Caixa\" required />\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Tipo de Documento</mat-label>\r\n\t\t\t\t\t\t\t\t<select matNativeControl formControlName=\"documento\" required (change)=\"setDocumento()\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let doc of typeDocumentsToArchive\" value=\"{{doc.id}}\">{{ doc.nome }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 d-flex align-items-center\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary mr-3\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"numeroCaixa == null && documento == 0 \" \r\n\t\t\t\t\t\t\t\t(click)=\"addCaixaDefinitiva()\">ADICIONAR CAIXA DEFINITIVA\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class=\"row\" *ngIf=\"caixaDefinitiva != null\">\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<mat-card class=\"itemDash\">\r\n\t\t\t\t<div class=\"iconDash\">\r\n\t\t\t\t\t<i class=\"material-icons\">all_inbox</i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"datas\">\r\n\t\t\t\t\t<span class=\"title\"><strong>Total dos Lotes Criados</strong></span>\r\n\t\t\t\t\t<span class=\"valor\">{{caixaDefinitiva.capaLotes.length}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-card>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<mat-card class=\"itemDash\">\r\n\t\t\t\t<div class=\"iconDash\">\r\n\t\t\t\t\t<i class=\"material-icons\">ballot</i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"datas\">\r\n\t\t\t\t\t<span class=\"title\"><strong>Total dos Kits nos Lotes</strong></span>\r\n\t\t\t\t\t<span class=\"valor\"> {{totalkitsCapaLote}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-card>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-4\">\r\n\t\t\t<mat-card class=\"itemDash\">\r\n\t\t\t\t<div class=\"iconDash\">\r\n\t\t\t\t\t<i class=\"material-icons\">how_to_vote</i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"datas\">\r\n\t\t\t\t\t<span class=\"title\"><strong>Contagem dos novos Kits</strong></span>\r\n\t\t\t\t\t<span class=\"valor\">{{qtdeKits}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-card>\r\n\t\t</div>\r\n\t</div>\r\n\t<form autocomplete=\"off\">\r\n\t\t<div class=\"row justify-content-md-center mt-3\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"jumbotron\" *ngIf=\"numeroCaixa != null\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-label>Código de Etiqueta {{ messageKit }}</mat-label>\r\n\t\t\t\t\t\t<input matInput [formControl]=\"tagNumber\" (keyup)=\"$event.keyCode === 13 ? addKit() : null\"\r\n\t\t\t\t\t\t\tmaxlength=\"11\" placeholder=\"Leia o código de barras da etiqueta\" />\r\n\t\t\t\t\t\t<button mat-button *ngIf=\"tagNumber.hasError('notUnique')\" matSuffix mat-icon-button\r\n\t\t\t\t\t\t\taria-label=\"Clear\" (click)=\" tagNumber.reset() \">\r\n\t\t\t\t\t\t\t<mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"tagNumber.hasError('required')\">Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"tagNumber.hasError('notUnique')\">Item já adicionado a caixa</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"caixaDefinitiva != null\">\r\n\t\t\t<mat-expansion-panel class=\"grupo-capa-lote\" *ngFor=\"let capa of caixaDefinitiva.capaLotes, let i = index\">\r\n\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\tLote: {{ capa.lote }}\r\n\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t{{ capa.kits[0].indice }} - {{ capa.kits[capa.kits.length - 1].indice }}\r\n\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t<div class=\"col-12 text-right mt-3\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"lotePDF(capa.lote)\">Imprimir Capa Lote</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"mt-3 grid-kits\">\r\n\t\t\t\t\t<li class=\"list-group-item mat-header-cell\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-1 font-weight-bold\">Blip</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">Nr. Etiqueta</div>\r\n\t\t\t\t\t\t\t<div class=\"col-1 font-weight-bold\">agência</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">conta</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">CPF/CNPJ</div>\r\n\t\t\t\t\t\t\t<div class=\"col-4 font-weight-bold\">Nome Razão Social</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngFor=\"let item of capa.kits\" class=\"list-group-item\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-1\">{{ item.indice }}</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\">{{ item.etiqueta }}</div>\r\n\t\t\t\t\t\t\t<div class=\"col-1\">{{ item.agencia }}</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\">{{ item.contaCorrente }}</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\">{{ item.documento }}</div>\r\n\t\t\t\t\t\t\t<div class=\"col-4\">{{ item.nome }}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</mat-expansion-panel>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"kits.length > 0\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t<i class=\"material-icons\">warning</i> Cadastre 30 kits por Lote e clique em \"Cadastrar e Imprimir Capa Lote\". <br/>\r\n\t\t\t\t\t<i class=\"material-icons cursor-pointer\" \r\n\t\t\t\t\t\tmatTooltip=\"Ao Encerrar a Caixa com o ultimo lote pendente o cadastro será efetuado e a Capa Lote será gerada\">\r\n\t\t\t\t\t\tcontact_support\r\n\t\t\t\t\t</i>\r\n\t\t\t\t\tObs.: Para cadastro do último Lote com menos de 30 Kits é preciso \"Encerrar a Caixa\"\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<mat-expansion-panel *ngFor=\"let grupo of gruposKits\" [disabled]=\"true\" [expanded]=\"true\" class=\" mt-3\">\r\n\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\tCadastrar Lote\r\n\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t<mat-panel-description>\r\n\r\n\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t<div class=\"col-12 text-right\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\" [disabled]=\"grupo.validaLote\"\r\n\t\t\t\t\t\tmatTooltip=\"Cadastre 30 kits por Lote, se for o último lote Encerre a Caixa\"\r\n\t\t\t\t\t\t(click)=\"cadastrarLote(grupo.lote)\">Cadastrar e Imprimir Capa Lote</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"mt-3 grid-kits\">\r\n\t\t\t\t\t<li class=\"list-group-item mat-header-cell\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">Nr. Etiqueta</div>\r\n\t\t\t\t\t\t\t<div class=\"col-1 font-weight-bold\">agência</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">conta</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2 font-weight-bold\">CPF/CNPJ</div>\r\n\t\t\t\t\t\t\t<div class=\"col-4 font-weight-bold\">Nome Razão Social</div>\r\n\t\t\t\t\t\t\t<div class=\"col-1 font-weight-bold\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngFor=\"let kit of grupo.kits\" class=\"list-group-item\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-2\">{{ kit.etiqueta }}</div>\r\n\t\t\t\t\t\t\t<div class=\"col-1\"><input matInput [(ngModel)]=\"kit.agencia\" maxlength=\"5\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{'lote-input-edit': kit.agencia == ''}\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"><input matInput [(ngModel)]=\"kit.contaCorrente\" maxlength=\"14\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{'lote-input-edit': kit.contaCorrente == ''}\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\"><input matInput [(ngModel)]=\"kit.documento\" maxlength=\"18\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{'lote-input-edit': kit.documento == null || kit.documento == ''}\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-4\"><input matInput [(ngModel)]=\"kit.nome\" maxlength=\"100\"\r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{'lote-input-edit': kit.nome == ''}\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-1\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"removeKit(kit.etiqueta)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons blue cursor-pointer\">delete_outline</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</mat-expansion-panel>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12 text-center\">\r\n\t\t\t<div class=\"jumbotron\" *ngIf=\"finalizarCadastro()\">\r\n\t\t\t\t<h3>Encerrar Caixa</h3>\r\n\t\t\t\t<button class=\"btn btn-primary mt-3\" (click)=\"encerramento()\">Cadastrar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Consultar Tipo do Kit</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Consultar Tipo do Kit</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input [(ngModel)]=\"etiqueta\" (keydown)=\"keyDownEtiqueta($event)\" autofocus maxlength=\"20\" matInput\r\n\t\t\t\t\tplaceholder=\"Leia o código de barras da etiqueta para ver as informações\" />\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row result\" *ngIf=\"!kit && notFound\">\r\n\t\t<div class=\"col-lg-10\">\r\n\t\t\t<label>Etiqueta não localizada</label>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"kit && kit.etiqueta\">\r\n\t\t<div class=\"row result\">\r\n\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<label>N.º da Etiqueta</label>\r\n\t\t\t\t\t<p>{{ kit.etiqueta }}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<label>CPF / CNPJ</label>\r\n\t\t\t\t\t<p>{{ kit.documento }}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<label>Agência</label>\r\n\t\t\t\t\t<p>{{ kit.agencia }}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<label>Conta</label>\r\n\t\t\t\t\t<p>{{ kit.contaCorrente }}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<label>Status</label>\r\n\t\t\t\t\t<p>{{ kit.kitStatus.nome }}</p>\r\n\t\t\t\t\t<button class=\"btn btn-info\" *ngIf=\"kit.kitStatus.id > 1\" (click)=\"openImages()\" >Ver Imagens</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row result\">\r\n\t\t\t<div class=\"col-lg-2\" *ngIf=\"kit.kitOrigem?.malote?.numeroMaloteEnglobador\">\r\n\t\t\t\t<label>Englobador</label>\r\n\t\t\t\t<p>Número: {{ kit.kitOrigem?.malote?.numeroMaloteEnglobador }} <br/>Lacre: {{ kit.kitOrigem?.malote?.numeroLacreMaloteEnglobador }}</p>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"col-lg-2\" *ngIf=\"kit.kitOrigem?.malote?.maloteId\">\r\n\t\t\t\t\t<label>Malote</label>\r\n\t\t\t\t\t<p>Número: {{ kit.kitOrigem?.malote?.numeroMalote }} <br/>Lacre: {{ kit.kitOrigem?.malote?.numeroLacre }}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-2\" *ngIf=\"kit.kitOrigem?.bolsao?.bolsaoId\">\r\n\t\t\t\t\t<label>Bolsão</label>\r\n\t\t\t\t\t<p>{{ kit.kitOrigem?.bolsao?.lacre }}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<label>Tipo</label>\r\n\t\t\t\t\t<p>{{ kit.fila?.atividade?.nome }}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row result\">\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t<label>Número da caixa temporária</label>\r\n\t\t\t\t<p *ngIf=\"kit?.kitCaixa?.codigoExterno\">{{ kit?.kitCaixa?.codigoExterno }}</p>\r\n\t\t\t\t<p *ngIf=\"!kit?.kitCaixa?.codigoExterno\">Sem caixa temporaria</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t<label>Número da caixa definitiva</label>\r\n\t\t\t\t<p *ngIf=\"kit?.kitCaixa?.caixaDefinitiva?.caixa\">{{ kit?.kitCaixa?.caixaDefinitiva?.caixa }}</p>\r\n\t\t\t\t<p *ngIf=\"!kit?.kitCaixa?.caixaDefinitiva?.caixa\">Sem caixa definitiva</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t<label>Lote em capa lote</label>\r\n\t\t\t\t<p *ngIf=\"kit?.kitCaixa?.caixaDefinitiva?.loteCapaLote\">{{ kit?.kitCaixa?.caixaDefinitiva?.loteCapaLote }}</p>\r\n\t\t\t\t<p *ngIf=\"!kit?.kitCaixa?.caixaDefinitiva?.loteCapaLote\">Sem capa lote</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row mt-5\" *ngIf=\"kit.kitStatus.id === 7 && kit.informarCampoCapa == 0\">\r\n\t\t\t<div class=\"col-12 text-center\">\r\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"generateCover(kit.etiqueta)\">Gerar Capa de Devolução</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<form [formGroup]=\"form\" autocomplete=\"off\"  *ngIf=\"kit.kitStatus.id === 7 && kit.informarCampoCapa > 0\">\r\n\t\t\t<div class=\"row mt-3\">\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<h1 class=\"mb-3 mt-3\">Capa para Devolução</h1>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row jumbotron\">\r\n\t\t\t\t<div class=\"col-4\" *ngIf=\"kit.informarCampoCapa == 1 || kit.informarCampoCapa == 2\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-label>Nome do cliente</mat-label>\r\n\t\t\t\t\t\t<input formControlName=\"nomeCapa\" maxlength='200' matInput placeholder=\"Nome do cliente\" required />\r\n\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-4\" *ngIf=\"kit.informarCampoCapa == 1 || kit.informarCampoCapa == 3\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-label>Uniorg</mat-label>\r\n\t\t\t\t\t\t<input formControlName=\"uniorgCapa\" mask=\"0000000\" matInput placeholder=\"Uniorg\" required />\r\n\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\"  (click)=\"generateCover(kit.etiqueta)\">Gerar Capa de Devolução</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\t\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\">Caixas Definitivas</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Detalhes da Caixa Definitiva Nº {{ idDefinitiveBox }}</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Detalhes da Caixa Definitiva Nº {{ idDefinitiveBox }}</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12 mb-4\">\r\n\t\t\t<mat-radio-group aria-label=\"Select an option\" (change)=\"getKits()\" [(ngModel)]=\"onlyReproveds\">\r\n\t\t\t\t<mat-radio-button value=\"false\" class=\"mr-4\">Todos os itens da Caixa</mat-radio-button>\r\n\t\t\t\t<mat-radio-button value=\"true\">Somente os Reprovados</mat-radio-button>\r\n\t\t\t</mat-radio-group>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"kits.length == 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"kits.length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t<ng-container matColumnDef=\"item\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Item</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.position }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"tagNumber\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">N.º da Etiqueta</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.tagNumber }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Tipo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\">{{ element.type }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status | nameStatusKits }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Ação</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"element.status === 6\" (click)=\"remover(element.tagNumber)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">delete_outline</i> \r\n\t\t\t\t\t\t\t\t\t<span>Remover</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"element.status !== 6\" (click)=\"transferToAnotherBox(element.tagNumber)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">swap_horiz</i> \r\n\t\t\t\t\t\t\t\t\t<span>Transferir de Caixa</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"  [ngClass]=\"{ 'reproved' : row.status === 6 }\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"getKits()\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Caixas Definitivas Encerradas</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Caixas Definitivas Encerradas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\r\n\r\n\t\t\t<mat-tab-group>\r\n\t\t\t\t<mat-tab label=\"Pesquisar por período\">\r\n\t\t\t\t\t<div class=\"jumbotron\">\r\n\r\n\r\n\t\t\t\t\t\t<form [formGroup]=\"formDefinitivas\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t<div class=\"row mb-2 ml-2 mr-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<input required matInput [matDatepicker]=\"dataInicial\"\r\n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"dataInicial\" placeholder=\"Data Inicial\"\r\n\t\t\t\t\t\t\t\t\t\t\t[max]=\"formDefinitivas.value.dataFinal\" [min]=\"minDate\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial></mat-datepicker>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2 \">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t<input required matInput [matDatepicker]=\"dataFinal\" formControlName=\"dataFinal\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Data Final\" [min]=\"formDefinitivas.value.dataInicial\"\r\n\t\t\t\t\t\t\t\t\t\t\t[max]=\"currentDate\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker #dataFinal></mat-datepicker>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2 \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"getCaixasDefinitivas(false)\">\r\n\t\t\t\t\t\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary small-menu\" [matMenuTriggerFor]=\"menuExport\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">more_vert</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-menu #menuExport=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item class=\"d-flex align-items-center\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getCaixasDefinitivas(true)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"Pesquisar pelo número da caixa\">\r\n\t\t\t\t\t<div class=\"jumbotron\">\r\n\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Número da Caixa Definitiva</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input matInput [(ngModel)]=\"caixaDefinitiva\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Descrição do Motivo de Contingência\" />\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"getCaixaDefinitiva(false)\">\r\n\t\t\t\t\t\t\t\t\t\tFILTRAR\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary small-menu\" [matMenuTriggerFor]=\"menuExportA\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">more_vert</i>\r\n\t\t\t\t\t\t\t\t\t\t<mat-menu #menuExportA=\"matMenu\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item class=\"d-flex align-items-center\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"getCaixaDefinitiva(true)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t\t<div *ngIf=\"pouchs.length == 0\">\r\n\t\t\t\t<label>Não há registros para exibir</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mat-elevation-z8\" *ngIf=\"pouchs.length > 0\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"codigoExterno\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nº da Caixa</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.codigoExterno }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"quantidadeKits\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Quantidade de Kits</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeKits }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"quantidadeLotes\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Quantidade de Lotes</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeLotes }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"dataCadastro\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data de Cadastro</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t{{ element.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"dataFehamento\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data de Fechamento</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t{{ element.dataFechamento | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"usuarioFechamento\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Usuário</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.usuarioFechamento }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"capaLote\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Consultar Lotes</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t<a href=\"\" [routerLink]=\"[element.codigoExterno, 'detalhes']\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">input</i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Consultar Arquivos</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1>Consultar Arquivos das Caixas Despachadas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<mat-tab-group>\r\n\t\t<mat-tab label=\"Pesquisar pelo número da caixa\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"form\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Número da Caixa</mat-label>\r\n\t\t\t\t\t\t\t\t<input matInput formControlName=\"caixaDefinitiva\" placeholder=\"Número da Caixa\" />\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 \">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"getByCaixa()\">Pesquisar</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t\t<mat-tab label=\"Pesquisar por período\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formTime\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input required matInput [matDatepicker]=\"dataInicial\" formControlName=\"dataInicial\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\" [max]=\"form.value.dataFinal\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-3  \">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input required matInput [matDatepicker]=\"dataFinal\" formControlName=\"dataFinal\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Final\" [min]=\"form.value.dataInicial\" [max]=\"maxDate\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataFinal></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 \">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"getByTime()\">Pesquisar</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group>\r\n\t<section>\r\n\t\t<div class=\"row \">\r\n\t\t\t<div class=\"col-lg-12 mb-3\" *ngIf=\"pouchs.length > 0\">\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"caixas\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column\" width=\"10%\">Detalhes</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column cursorPointer\"\r\n\t\t\t\t\t\t\t\t(click)=\"expand(element.position)\">\r\n\t\t\t\t\t\t\t\tCaixas\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"dataGeracaoArquivo\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column\" width=\"15%\">Data de Expedição</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column cursorPointer text-left\">\r\n\t\t\t\t\t\t\t\t{{ element.dataGeracaoArquivo | date: 'dd/MM/yyyy MM:mm'  }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"usuario\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column\" width=\"25%\">Usuário</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column cursorPointer\">\r\n\t\t\t\t\t\t\t\t{{ element.usuario }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"file\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column\" width=\"30%\">Nome do Arquivo</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column cursorPointer\">\r\n\t\t\t\t\t\t\t\t{{ element.file }}\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"urlDownload\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\" width=\"20%\">Download</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<a  mat-flat-button color=\"primary\" target=\"_blank\" [href]=\"element.urlDownload\" >\r\n                                    Link para Download\r\n                                    <i class=\"material-icons ml-2\">save_alt</i>\r\n                                </a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"expandedDetail\">\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n\t\t\t\t\t\t\t\t<div class=\"example-element-detail\"\r\n\t\t\t\t\t\t\t\t\t[@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t\t\t\t\t\t<thead class=\"thead-dark\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">Número da Caixa</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Quantidade de Lotes</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<th scope=\"col\" class=\"text-center\">Quantidade de Kits</th>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let caixa of element.caixas\" [ngClass]=\"{'bg-new-item': caixa.caixaBuscada}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{ caixa.caixaDefinitiva }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ caixa.quantidadeLotes }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{ caixa.quantidadeKits }}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n\t\t\t\t\t\t\t[class.example-expanded-row]=\"expandedElement === element\">\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<div class=\"row\" *ngIf=\"showErrorMessage\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"alert alert-warning text-center\" role=\"alert\">\r\n\t\t\t\tErro ao obter dados. Não foi possível exibir as informações.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Despachar Caixas Encerradas</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Despachar Caixas Encerradas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<form [formGroup]=\"form\" >\r\n\t\t\t\t<div class=\"row justify-content-md-center\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Código da Caixa</mat-label>\r\n\t\t\t\t\t\t\t\t<input matInput formControlName=\"numeroCaixa\" (keyup)=\"$event.keyCode === 13 ? addKit() : null\" maxlength=\"11\" placeholder=\"Leia o código de barras da caixa\" />\t\r\n\t\t\t\t\t\t\t\t<mat-error >Caixa inválida</mat-error>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"download.length > 1\" class=\"col-lg-12 text-center\">\r\n\t\t\t<p class=\"mr-3\">Arquivo gerado com sucesso, clique no botão para baixá-lo</p>\r\n\t\t\t<a  mat-flat-button color=\"primary\" target=\"_blank\" [href]=\"this.download\" >\r\n\t\t\t\tLink para Download\r\n\t\t\t\t<i class=\"material-icons ml-2\">save_alt</i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12 d-flex justify-content-between align-self-center\" *ngIf=\"pouchs.length > 0\">\r\n\t\t\t<div class=\"d-flex align-self-center\">\r\n\t\t\t\t<h5>Quantidade de Caixas: {{pouchs.length}}</h5>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"salvar()\">Gerar arquivo de saída</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12 mt-3\">\r\n\t\t\t<div class=\"mat-elevation-z8\" *ngIf=\"pouchs.length > 0\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"codigoExterno\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nº da Caixa</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.codigoExterno }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"quantidadeKits\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Quantidade de Kits</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeKits }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"quantidadeLotes\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Quantidade de Lotes</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeLotes }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"dataCadastro\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data de Cadastro</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataCadastro | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"dataFehamento\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data de Fechamento</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataFechamento | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\t\t\t\t\t\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"usuarioFechamento\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Usuário</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.usuarioFechamento }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"capaLote\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\" ></th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\" >\r\n\t\t\t\t\t\t\t<mat-icon class=\"cursor-pointer\" (click)=\"deletar(element.codigoExterno)\">delete_sweep</mat-icon>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Caixas Definitivas</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Caixas Definitivas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<mat-tab-group>\r\n\t\t<mat-tab label=\"Pesquisar por período\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formDefinitivas\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row ml-2 mr-2\">\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input required matInput [matDatepicker]=\"dataInicial\" formControlName=\"dataInicial\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\" [max]=\"formDefinitivas.value.dataFinal\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-2 \">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input required matInput [matDatepicker]=\"dataFinal\" formControlName=\"dataFinal\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Data Final\" [min]=\"formDefinitivas.value.dataInicial\" [max]=\"maxDate\">\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataFinal\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dataFinal></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"btn-group btn-height\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getCaixasDefinitivas(false)\" >\r\n                                FILTRAR\r\n                            </button>\r\n                            <button class=\"btn btn-primary small-menu\" [matMenuTriggerFor]=\"menuExportA\">\r\n                                <i class=\"material-icons\">more_vert</i>\r\n                                <mat-menu #menuExportA=\"matMenu\">\r\n                                    <button mat-menu-item class=\"d-flex align-items-center\" (click)=\"getCaixasDefinitivas(true)\">\r\n                                        <i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </button>\r\n                        </div>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"offset-lg-2 col-4 float-right\" *ngIf=\"false\" >\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<mat-label>Status dos Documentos</mat-label>\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"documento\" (valueChange)=\"filtrarStatus()\">\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"todos\">Todos</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"Aprovados\">Somente com Todos Aprovados</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"DocumentosPendentes\">Com Documentos Pendentes</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"TodosPendentes\">Somente com Todos Pendentes</mat-option>\r\n\t\t\t\t\t\t\t\t\t<!-- <mat-option value=\"Reprovados\">Com Documentos Reprovados</mat-option> -->\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t\t<mat-tab label=\"Pesquisar pelo número da caixa\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<!-- <h3 class=\"mb-4\"></h3> -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Número da Caixa Definitiva</mat-label>\r\n\t\t\t\t\t\t\t<input  matInput [(ngModel)]=\"caixaDefinitiva\" placeholder=\"Descrição do Motivo de Contingência\"/>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"getCaixaDefinitiva(false)\" >\r\n                                FILTRAR\r\n                            </button>\r\n                            <button class=\"btn btn-primary small-menu\" [matMenuTriggerFor]=\"menuExport\">\r\n                                <i class=\"material-icons\">more_vert</i>\r\n                                <mat-menu #menuExport=\"matMenu\">\r\n                                    <button mat-menu-item class=\"d-flex align-items-center\" (click)=\"getCaixaDefinitiva(true)\">\r\n                                        <i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </button>\r\n                        </div>\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group>\r\n\t<div *ngIf=\"pouchs && pouchs.length == 0\">\r\n\t\t<label>Não há registros para exibir</label>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"mat-elevation-z8\" *ngIf=\"pouchs && pouchs.length > 0\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t<ng-container matColumnDef=\"item\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Item</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.position }}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"numeroCaixa\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nº da Caixa</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.numeroCaixa }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"archiveGroup\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Grupo de Arquivo</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">{{ element.archiveGroup }}</td>\r\n\t\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"quantidadeAprovados\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Qtd. Kits</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeAprovados }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"quantidadeCancelados\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Cancelados</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeCancelados }}</td>\r\n\t\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"dataCriacao\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data de Criação</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t{{ element.dataCriacao | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"addItens\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Adiocinar Kits</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['caixa', element.numeroCaixa, 'documento', element.grupoArquivamentoId]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">add</i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"TransferirRemover\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Status dos Kits</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['transfer-remove', element.numeroCaixa]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">list</i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"capaLote\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Adicionar Kits</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"[element.numeroCaixa, 'capa-lote']\" >\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">input</i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"getClass(row)\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  delivery-definitive-boxes works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Devolução de Kits</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Devolução de Kits</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<mat-tab-group>\r\n\t\t<mat-tab label=\"Pesquisar pela agência\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\r\n\t\t\t\t<div class=\"row  ml-2 mr-2\">\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Agência</mat-label>\r\n\t\t\t\t\t\t\t<input matInput [(ngModel)]=\"agencia\" placeholder=\"Digite o código da Agência\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"getKitFiltro()\">\r\n\t\t\t\t\t\t\t\tFILTRAR\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6\" *ngIf=\"kits.length > 0\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary bt-devolution\" *ngIf=\"devolutionGroupKits\"\r\n\t\t\t\t\t\t\t(click)=\"returnGroupKits()\">Devolver todos os Itens dessa Agência</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t\t<mat-tab label=\"Pesquisar pela etiqueta\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<!-- <h3 class=\"mb-4\"></h3> -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Etiqueta</mat-label>\r\n\t\t\t\t\t\t\t<input matInput [(ngModel)]=\"etiqueta\" placeholder=\"Digite o Código da Etiqueta\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"getKitEtiqueta()\">\r\n\t\t\t\t\t\t\t\tFILTRAR\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</mat-tab>\r\n\t</mat-tab-group>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"kits.length == 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"kits.length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t<ng-container matColumnDef=\"item\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Item</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.position }}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"etiqueta\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">N.º da Etiqueta</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.etiqueta }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status  }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"agencia\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Agência</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Ação</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones \">\r\n\t\t\t\t\t\t\t<a (click)=\"returnToAgency([element])\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">reply</i>\r\n\t\t\t\t\t\t\t\t<span>Devolver para Agência</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ data.title }}</h1>\r\n<div mat-dialog-content>\r\n\t<p [innerHTML]=\"data.message\"></p>\r\n\t<form [formGroup]=\"formConfirmTagNumber\" *ngIf=\"data.type === 'confirmTagNumber' && data.tagIds !== undefined\">\r\n\t\t<mat-form-field *ngFor=\"let tag of arrayTags; let i = index\">\r\n\t\t\t<input matInput [formControlName]=\"'tag_'+ i\" (keyup)=\"$event.keyCode === 13 ? focusNextElement(i) : null\" placeholder=\"Leia {{tag}}\">\r\n\t\t</mat-form-field>\r\n\t</form>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>{{ data.title }}</h1>\r\n<div mat-dialog-content>\r\n\t<p [innerHTML]=\"data.message\"></p>\r\n\t<form [formGroup]=\"formTransferToAnotherBox\" *ngIf=\"data.type === 'transferToAnotherBox'\">\r\n\t\t<mat-form-field>\r\n\t\t\t<input maxlength=\"20\" matInput formControlName=\"etiqueta\"  placeholder=\"Número da etiqueta\">\r\n\t\t</mat-form-field>\r\n\t\t<mat-form-field>\r\n\t\t\t<input \r\n\t\t\t\tmaxlength= \"20\" \r\n\t\t\t\tmatInput #fieldBoxId \r\n\t\t\t\tformControlName=\"numeroCaixa\" \r\n\t\t\t\tplaceholder=\"{{data.acao == 'transfer'? 'Número da Caixa de Destino' : 'Número da Caixa de Devolução'}}\">\r\n\t\t</mat-form-field>\r\n\t\t<div class=\"col-12 text-center \">\r\n\t\t\t<button class=\"btn btn-primary\" (click)=\"transferToAnotherBox()\">  Ok  </button>\r\n\t\t</div>\r\n\t</form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['','expedicao','caixas-temporarias']\">Acompanhamento das Caixas Temporárias</a></li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Consultar Caixa Temporária Nº {{ numeroCaixaTemporaria }}</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Consultar Caixa Temporária Nº {{ numeroCaixaTemporaria }}</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div  class=\"col-lg-12\" *ngIf=\"!loading && pouchs.length == 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"pouchs.length > 0\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre por qualquer informação\">\r\n\t\t\t</mat-form-field>\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t<ng-container matColumnDef=\"item\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Item</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.position }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"tagNumber\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nº da Etiqueta</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.etiqueta }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"cpfCnpj\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">CNPJ / CPF</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.documento }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"agency\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Agência</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.agencia }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"account\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Conta</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.contaCorrente }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"pageSize\" \r\n\t\t\t\t\t(page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Acompanhamento das Caixas Temporárias</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-5 mt-3\">Acompanhamento das Caixas Temporárias</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"row col-lg-12\">\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t<input matInput  mask=\"00000000000000000000\" [(ngModel)]=\"etiqueta\" (keyup)=\"resetFilter($event)\" placeholder=\"Filtre pelo número da caixa\">\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-3\">\r\n\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"getBoxes(true, false)\" >\r\n\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button class=\"btn btn-primary small-menu\" [matMenuTriggerFor]=\"menuExport\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">more_vert</i>\r\n\t\t\t\t\t\t<mat-menu #menuExport=\"matMenu\">\r\n\t\t\t\t\t\t\t<button mat-menu-item class=\"d-flex align-items-center\" (click)=\"getBoxes(false, true)\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div  class=\"col-lg-12\" *ngIf=\"pouchs.length == 0\">\r\n\t\t\t<label>Não há registros para exibir</label>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-12\" *ngIf=\"pouchs.length > 0\">\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"item\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Item</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.position }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"tagNumber\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nº da Caixa</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.codigoExterno }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"classifieds\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Já Classificados</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadeClassificados }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"pendings\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Pendentes</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.quantidadePendentes }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"date\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Data</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.dataCriacao | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"[element.codigoExterno]\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">pageview</i> \r\n\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Ver Detalhes</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'completed' : row.pendings === 0}\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">local_shipping</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Acompanhamento das Caixas Definitivas</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Acompanhamento das Caixas Definitivas</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-12\" class=\"row\">\r\n\t\t\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"row mb-2 ml-2 mr-2\">\r\n\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t[(ngModel)]=\"etiqueta\"  \r\n\t\t\t\t\t\t\tmaxlength=\"20\" \r\n\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\tplaceholder=\"Número da Etiqueta\" \r\n\t\t\t\t\t\t\t(keyup)=\"keyDownEtiqueta()\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-4 \">\r\n\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"filtrarEtiqueta()\">FILTRAR</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-4 text-right\">\r\n\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-label>Filtrar por Status</mat-label>\r\n\t\t\t\t\t\t<mat-select [(value)]=\"status\" (valueChange)=\"filtrarStatus()\" >\r\n\t\t\t\t\t\t\t<mat-option value=\"todos\">Todos</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"Aprovado\">Aprovado</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"Reprovado\">Reprovado</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"Cancelado\">Cancelado</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t<ng-container matColumnDef=\"item\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Item</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element.position }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"etiqueta\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">N.º da Etiqueta</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.etiqueta }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Status</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.statusResumido }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"acoes\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"icones text-center\">Ações</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-center\">\r\n\t\t\t\t\t\t\t<a *ngIf=\"(element.statusResumido == 'Aprovado' || element.statusResumido == 'Cancelado') && element.capaLote == false\" (click)=\"transferBox(element.etiqueta)\">\r\n\t\t\t\t\t\t\t\t<span>Transferir de Caixa</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a *ngIf=\"element.statusResumido == 'Reprovado'&& element.capaLote == false\" (click)=\"removeKit(element.etiqueta)\">\r\n\t\t\t\t\t\t\t\t<span>Remover</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<span *ngIf=\"element.capaLote == true\">Com Capa Lote</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"getClass(row)\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator \r\n\t\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 50, 100]\" \r\n\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t(page)=\"changePage($event)\"\r\n\t\t\t\t></mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grupo-capa-lote .mat-expansion-panel-header {\n  background-color: #fafafa;\n}\n\n.capa-kits tbody tr {\n  background-color: #cecece;\n  border-radius: 25px;\n}\n\n.capa-kits tbody tr input {\n  background-color: #ffffff;\n}\n\n.grid-kits {\n  padding: 0px;\n}\n\n.lote-input-edit {\n  border-bottom: solid 1px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2JveGVzLWNsb3NlZC1kZXRhaWxzL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxleHBlZGl0aW9uXFxib3hlcy1jbG9zZWQtZGV0YWlsc1xcYm94ZXMtY2xvc2VkLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9ib3hlcy1jbG9zZWQtZGV0YWlscy9ib3hlcy1jbG9zZWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9ib3hlcy1jbG9zZWQtZGV0YWlscy9ib3hlcy1jbG9zZWQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncnVwby1jYXBhLWxvdGUgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5jYXBhLWtpdHMgdGJvZHkgdHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXBhLWtpdHMgdGJvZHkgdHIgaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZ3JpZC1raXRzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmxvdGUtaW5wdXQtZWRpdCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzAwMDAwMDtcclxufVxyXG5cclxuXHJcbiIsIi5ncnVwby1jYXBhLWxvdGUgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmNhcGEta2l0cyB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jYXBhLWtpdHMgdGJvZHkgdHIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ3JpZC1raXRzIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubG90ZS1pbnB1dC1lZGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDAwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BoxesClosedDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxesClosedDetails", function() { return BoxesClosedDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_expedition_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/expedition/services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let BoxesClosedDetails = class BoxesClosedDetails {
    constructor(formBuilder, definitiveBoxService, activatedRoute, matSnackBar) {
        this.formBuilder = formBuilder;
        this.definitiveBoxService = definitiveBoxService;
        this.activatedRoute = activatedRoute;
        this.matSnackBar = matSnackBar;
        this.tagNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.typeDocumentsToArchive = [];
        this.qtdeKits = 0;
        this.numeroCaixa = null;
        this.messageKit = null;
        this.CaixaDefinitivaFechada = null;
        this.capaLotes = [];
        this.kits = [];
        this.gruposKits = [];
        this.qtd = 30;
        this.quantidadeKits = 0;
        this.totalkitsCapaLote = 0;
        this.loading = false;
    }
    ngOnInit() {
        this.numeroCaixa = this.activatedRoute.snapshot.paramMap.get('numeroCaixa');
        this.formCaixa = this.formBuilder.group({
            codigoExterno: [{ value: '', disabled: true }],
            tipoDocumento: [{ value: '', disabled: true }],
            dataFechamento: [{ value: '', disabled: true }],
            quantidadeKits: [{ value: '', disabled: true }],
            quantidadeLotes: [{ value: '', disabled: true }],
            usuarioFechamento: [{ value: '', disabled: true }]
        });
        this.getCapaLote();
    }
    getCapaLote() {
        this.loading = true;
        this.definitiveBoxService.getDetalhesEncerradas(this.numeroCaixa).subscribe(response => {
            this.CaixaDefinitivaFechada = response.data;
            this.formCaixa.get('codigoExterno').setValue(this.CaixaDefinitivaFechada.codigoExterno);
            this.formCaixa.get('tipoDocumento').setValue(this.CaixaDefinitivaFechada.tipoDocumento);
            this.formCaixa.get('dataFechamento').setValue(moment__WEBPACK_IMPORTED_MODULE_7__(this.CaixaDefinitivaFechada.dataFechamento, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY - HH:mm:ss"));
            this.formCaixa.get('quantidadeKits').setValue(this.CaixaDefinitivaFechada.quantidadeKits);
            this.formCaixa.get('quantidadeLotes').setValue(this.CaixaDefinitivaFechada.quantidadeLotes);
            this.formCaixa.get('usuarioFechamento').setValue(this.CaixaDefinitivaFechada.usuarioFechamento);
            this.loading = false;
        }, error => {
            if (error.status !== 404) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, error);
            }
            this.loading = false;
        });
    }
    lotePDF(lote) {
        this.loading = true;
        this.definitiveBoxService.gerarCapaPDF(this.numeroCaixa, lote).subscribe(response => {
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
        }, error => {
            if (error.status !== 404) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
            }
            this.loading = false;
        });
    }
};
BoxesClosedDetails.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_modules_expedition_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_4__["DefinitiveBoxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], BoxesClosedDetails.prototype, "paginator", void 0);
BoxesClosedDetails = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boxes-closed-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./boxes-closed-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./boxes-closed-details.component.scss */ "./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_modules_expedition_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_4__["DefinitiveBoxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], BoxesClosedDetails);



/***/ }),

/***/ "./src/app/modules/expedition/capa-lote/capa-lote.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/expedition/capa-lote/capa-lote.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grupo-capa-lote .mat-expansion-panel-header {\n  background-color: #e9ecef;\n}\n\n.capa-kits tbody tr {\n  background-color: #cecece;\n  border-radius: 25px;\n}\n\n.capa-kits tbody tr input {\n  background-color: #ffffff;\n}\n\n.grid-kits {\n  padding: 0px;\n}\n\n.lote-input-edit {\n  border-bottom: solid 1px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2NhcGEtbG90ZS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZXhwZWRpdGlvblxcY2FwYS1sb3RlXFxjYXBhLWxvdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9jYXBhLWxvdGUvY2FwYS1sb3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2NhcGEtbG90ZS9jYXBhLWxvdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3J1cG8tY2FwYS1sb3RlIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG4uY2FwYS1raXRzIHRib2R5IHRyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uY2FwYS1raXRzIHRib2R5IHRyIGlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmdyaWQta2l0cyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5sb3RlLWlucHV0LWVkaXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAubmctdG5zLWMxMy04IC5uZy10cmlnZ2VyIC5uZy10cmlnZ2VyLWV4cGFuc2lvbkhlaWdodCAubmctc3Rhci1pbnNlcnRlZCAubWF0LWV4cGFuZGVkIHtcclxuXHJcbn1cclxuXHJcbi8vIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM5RTlFOUUgIWltcG9ydGFudDtcclxuLy8gfSIsIi5ncnVwby1jYXBhLWxvdGUgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cblxuLmNhcGEta2l0cyB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jYXBhLWtpdHMgdGJvZHkgdHIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZ3JpZC1raXRzIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ubG90ZS1pbnB1dC1lZGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDAwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/capa-lote/capa-lote.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/expedition/capa-lote/capa-lote.component.ts ***!
  \*********************************************************************/
/*! exports provided: CapaLoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapaLoteComponent", function() { return CapaLoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general-informations.service */ "./src/app/services/general-informations.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var src_app_modules_expedition_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/expedition/services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");













let CapaLoteComponent = class CapaLoteComponent {
    constructor(formBuilder, generalInformation, definitiveBoxService, activatedRoute, dialog, matSnackBar, router) {
        this.formBuilder = formBuilder;
        this.generalInformation = generalInformation;
        this.definitiveBoxService = definitiveBoxService;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.tagNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.typeDocumentsToArchive = [];
        this.qtdeKits = 0;
        this.numeroCaixa = null;
        this.messageKit = null;
        this.caixaDefinitiva = null;
        this.capaLotes = [];
        this.kits = [];
        this.gruposKits = [];
        this.qtd = 30;
        this.quantidadeKits = 0;
        this.totalkitsCapaLote = 0;
        this.loading = false;
        this.documento = 0;
        this.maximoPermitido = 120;
    }
    ngOnInit() {
        this.numeroCaixa = this.activatedRoute.snapshot.paramMap.get('numeroCaixa');
        this.formCaixa = this.formBuilder.group({
            numeroCaixa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        if (this.numeroCaixa != null && this.numeroCaixa != undefined) {
            this.getCapaLote();
        }
        else {
            this.getDocuments();
        }
    }
    getCapaLote() {
        this.loading = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])(this.generalInformation.getTypeOfDocuments(), this.definitiveBoxService.getCapaLote(this.numeroCaixa)).subscribe(([responseDocuments, responseDefinitiveBox]) => {
            this.typeDocumentsToArchive = [...responseDocuments.data];
            this.caixaDefinitiva = responseDefinitiveBox.data;
            this.formCaixa.get('numeroCaixa').setValue(this.caixaDefinitiva.codigoExterno);
            const documento = this.typeDocumentsToArchive.find(element => element.nome == this.caixaDefinitiva.tipoDocumento);
            this.formCaixa.get('documento').setValue(documento.id);
            this.formCaixa.controls['numeroCaixa'].disable();
            this.formCaixa.controls['documento'].disable();
            this.quantidadeKits = this.caixaDefinitiva.quantidadeKits;
            this.totalkitsCapaLote = 0;
            this.caixaDefinitiva.capaLotes.forEach(element => {
                this.totalkitsCapaLote += element.kits.length;
            });
            this.loading = false;
            this.montarGrupo();
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loading = false;
        });
    }
    getDocuments() {
        this.generalInformation.getTypeOfDocuments().subscribe(response => {
            this.typeDocumentsToArchive = [...response.data];
            this.formCaixa.get("documento").setValue(5);
            this.maximoPermitido = 120;
        });
    }
    addKit() {
        if (this.tagNumber.value > 8) {
            if (this.qtdeKits + this.totalkitsCapaLote > 1000) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Quantidade máxima de 1000 kits pro caixa definitiva");
            }
            if (this.kits.findIndex(item => item.etiqueta == this.tagNumber.value) >= 0) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Kit já cadastrado");
            }
            else {
                this.definitiveBoxService.getDadosKit(this.numeroCaixa, this.tagNumber.value).subscribe(response => {
                    if (!response.data.pertenceCapaLote) {
                        let kit = response.data;
                        this.qtdeKits++;
                        this.kits.push(kit);
                        this.montarGrupo();
                    }
                    else {
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Kit já cadastrado");
                    }
                }, errorResponse => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, errorResponse.error.message);
                });
            }
            this.tagNumber.reset();
        }
    }
    montarGrupo() {
        let ordemGrupo = null;
        const lastGrupo = this.caixaDefinitiva.capaLotes.length;
        this.kits.forEach((element, i) => {
            if (i % this.qtd == 0) {
                ordemGrupo = (i / this.qtd) + 1;
            }
            element.lote = ordemGrupo;
        });
        const lotes = [...new Set(this.kits.map((element) => element.lote))];
        let arrGrupos = [];
        lotes.forEach(lote => {
            const tempKits = this.kits.filter(element => element.lote == lote);
            const tempQtdKits = tempKits.length;
            const tempLote = (lote + lastGrupo);
            arrGrupos.push({ lote: tempLote, kits: tempKits, validaLote: this.validaGrupoLote(lote, tempQtdKits) });
        });
        this.gruposKits = arrGrupos;
    }
    montarCapaLote(_lote) {
        const capaLote = { lote: _lote, kits: this.kits.filter(element => element.lote == _lote) };
        this.caixaDefinitiva.capaLotes.push(capaLote);
        this.kits = this.kits.filter(element => element.lote != _lote);
    }
    removeKit(idKit) {
        if (idKit) {
            this.kits = this.kits.filter(element => element.etiqueta !== idKit);
            this.qtdeKits--;
            this.montarGrupo();
        }
    }
    validaGrupoLote(lote, qtdKits) {
        const qtdLotes = this.caixaDefinitiva.capaLotes.length;
        const totalBruto = this.totalkitsCapaLote + this.qtdeKits;
        if ((lote == 1 && qtdLotes == 0) && qtdKits < this.qtd) {
            return true;
        }
        if (qtdKits == this.qtd) {
            return false;
        }
        if (totalBruto == this.quantidadeKits && lote == 1) {
            return false;
        }
        return true;
    }
    cadastrarLote(lote) {
        const grupoKit = this.gruposKits.find(element => element.lote == lote);
        let indice = (this.caixaDefinitiva.capaLotes.length) * this.qtd;
        delete grupoKit.validaLote;
        const newLote = this.caixaDefinitiva.capaLotes.length + 1;
        grupoKit.lote = newLote;
        grupoKit.kits = grupoKit.kits.filter(element => {
            indice++;
            element.indice = indice;
            delete element["capaLoteId"];
            delete element["id"];
            delete element["lote"];
            delete element["pertenceCapaLote"];
            return element;
        });
        this.loading = true;
        this.definitiveBoxService.postLotes(this.numeroCaixa, grupoKit).subscribe(() => {
            this.loading = false;
            this.lotePDF(newLote.toString());
            grupoKit.kits.forEach(element => {
                this.kits = this.kits.filter(item => item.etiqueta != element.etiqueta);
                this.qtdeKits--;
            });
            this.getCapaLote();
        }, responseError => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, responseError.error.message);
            this.loading = false;
        });
    }
    lotePDF(lote) {
        this.definitiveBoxService.gerarCapaPDF(this.numeroCaixa, lote).subscribe(response => {
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
        }, error => {
            if (error.status !== 404) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
            }
            this.loading = false;
        });
    }
    encerramento() {
        if ((this.qtdeKits + this.totalkitsCapaLote) >= this.maximoPermitido) {
            if (this.gruposKits.length > 0) {
                //encerrar e fechar ultimo lote
                const dialogRef = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                    width: '600px',
                    data: {
                        title: "Finalizar Cadastro",
                        message: "Esse procedimento cadastra o último lote pendente e fecha a caixa definitivamente, sem possibilidade de alteração. Deseja prosseguir?",
                        type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_9__["DialogTypes"].CONFIRMATION
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (result == undefined || result.length < 1 || result.length == 'cancel') {
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showAlert(this.matSnackBar, 'Cancelada pelo Usuário');
                    }
                    else if (result == 'ok') {
                        this.setUltimoLoteEncerrar();
                    }
                });
            }
            else {
                //encerrar lotes fechados
                const dialogRef = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                    width: '600px',
                    data: {
                        title: "Encerrar Caixa",
                        message: "Esse procedimento fecha a caixa definitivamente, sem possibilidade de alteração. Deseja prosseguir?",
                        type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_9__["DialogTypes"].CONFIRMATION
                    }
                });
                dialogRef.afterClosed().subscribe(result => {
                    if (result == undefined || result.length < 1 || result.length == 'cancel') {
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showAlert(this.matSnackBar, 'Cancelada pelo Usuário');
                    }
                    else if (result == 'ok') {
                        this.encerrarCaixa();
                    }
                });
            }
        }
        else {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showAlert(this.matSnackBar, `É necessário cadastrar no mínimo ${this.maximoPermitido} kits para encerrar a caixa`);
        }
    }
    setUltimoLoteEncerrar() {
        const grupoKit = this.gruposKits[this.gruposKits.length - 1];
        let indice = (this.caixaDefinitiva.capaLotes.length) * this.qtd;
        delete grupoKit.validaLote;
        const newLote = this.caixaDefinitiva.capaLotes.length + 1;
        grupoKit.lote = newLote;
        grupoKit.kits = grupoKit.kits.filter(element => {
            indice++;
            element.indice = indice;
            delete element["capaLoteId"];
            delete element["id"];
            delete element["lote"];
            delete element["pertenceCapaLote"];
            return element;
        });
        this.loading = true;
        this.definitiveBoxService.postLotes(this.numeroCaixa, grupoKit).subscribe(() => {
            this.loading = false;
            this.lotePDF(newLote.toString());
            this.encerrarCaixa();
        }, responseError => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, responseError.error.message);
            this.loading = false;
        });
    }
    encerrarCaixa() {
        this.loading = true;
        this.definitiveBoxService.putEncerrarCaixa(this.numeroCaixa).subscribe(() => {
            this.loading = false;
            this.router.navigate(['expedicao', 'caixas-definitivas-encerradas', this.numeroCaixa.trim(), 'detalhes']);
        }, error => {
            this.loading = false;
            if (error.status !== 404) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, "Erro ao cadastrar a caixa. Se o erro persistir, entre em contato com o suporte.");
            }
        });
    }
    finalizarCadastro() {
        if (this.totalkitsCapaLote >= 30 && this.totalkitsCapaLote <= 1000 && this.qtdeKits < 30) {
            return true;
        }
        return false;
    }
    addCaixaDefinitiva() {
        if (this.formCaixa.valid) {
            const form = this.formCaixa.value;
            let numeroCaixa = null;
            if (this.numeroCaixa != null) {
                numeroCaixa = this.numeroCaixa;
            }
            else {
                numeroCaixa = form.numeroCaixa;
            }
            let numeroDocumento = 0;
            if (this.documento != 0) {
                numeroDocumento = this.documento;
            }
            else {
                numeroDocumento = form.documento;
            }
            this.loading = true;
            this.definitiveBoxService.postKitsCaixa(numeroCaixa, numeroDocumento, []).subscribe(response => {
                const caixa = response.data;
                this.caixaDefinitiva = {
                    caixaDefinitivaId: caixa.caixaDefinitivaId,
                    caixaDefinitivaStatus: caixa.caixaDefinitivaStatus,
                    capaLotes: [],
                    codigoExterno: caixa.codigoExterno,
                    quantidadeKits: 0,
                    tipoDocumento: caixa.tipoDocumento
                };
                this.numeroCaixa = caixa.codigoExterno;
                this.loading = false;
                this.tagNumber.reset();
                this.formCaixa.disable();
            }, error => {
                this.loading = false;
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, error.error.message);
            });
        }
    }
    setDocumento() {
        if (Number(this.formCaixa.value.documento) == 5) {
            this.maximoPermitido = 120;
        }
        else {
            this.maximoPermitido = 250;
        }
    }
};
CapaLoteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_5__["GeneralInformationsService"] },
    { type: src_app_modules_expedition_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_7__["DefinitiveBoxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], CapaLoteComponent.prototype, "paginator", void 0);
CapaLoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-capa-lote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./capa-lote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/capa-lote/capa-lote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./capa-lote.component.scss */ "./src/app/modules/expedition/capa-lote/capa-lote.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_general_informations_service__WEBPACK_IMPORTED_MODULE_5__["GeneralInformationsService"],
        src_app_modules_expedition_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_7__["DefinitiveBoxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], CapaLoteComponent);



/***/ }),

/***/ "./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".result {\n  margin-top: 30px;\n}\n.result label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2NvbnN1bHQtdHlwZS1vZi1raXQvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXGNvbnN1bHQtdHlwZS1vZi1raXRcXGNvbnN1bHQtdHlwZS1vZi1raXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9jb25zdWx0LXR5cGUtb2Yta2l0L2NvbnN1bHQtdHlwZS1vZi1raXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2NvbnN1bHQtdHlwZS1vZi1raXQvY29uc3VsdC10eXBlLW9mLWtpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsIi5yZXN1bHQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnJlc3VsdCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConsultTypeOfKitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultTypeOfKitComponent", function() { return ConsultTypeOfKitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_consult_type_of_kit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/consult-type-of-kit.service */ "./src/app/modules/expedition/services/consult-type-of-kit.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ConsultTypeOfKitComponent = class ConsultTypeOfKitComponent {
    constructor(consultService, formBuilder) {
        this.consultService = consultService;
        this.formBuilder = formBuilder;
        this.notFound = false;
        this.loader = false;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            nomeCapa: [''],
            uniorgCapa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(7)]]
        });
    }
    get() {
        this.loader = true;
        this.kit = null;
        this.notFound = false;
        this.consultService.get(this.etiqueta).subscribe(response => {
            this.kit = response.data;
            if (!this.kit) {
                this.notFound = true;
            }
            this.loader = false;
        }, () => {
            this.loader = false;
        });
        this.form.reset();
    }
    keyDownEtiqueta(event) {
        if (event.keyCode === 113) {
            this.etiqueta = null;
        }
        if ((event.keyCode === 13 || event.keyCode === 118)) {
            this.get();
        }
    }
    generateCover(tagNumber) {
        this.loader = true;
        if (this.form.valid) {
            this.consultService.generateCover(tagNumber, this.form.value.nomeCapa, this.form.value.uniorgCapa).subscribe(response => {
                const blob = new Blob([response], { type: 'application/pdf' });
                const linkArquivo = window.URL.createObjectURL(blob);
                const fileName = `capa_devolucao_kit_etiqueta_${this.kit.etiqueta}.pdf`;
                var link = document.createElement("a");
                link.setAttribute("href", linkArquivo.toString());
                link.setAttribute("download", fileName);
                link.style.display = "none";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                this.loader = false;
            }, () => {
                this.loader = false;
            });
        }
    }
    openImages() {
        const displayImages = {
            document: this.kit.documento,
            images: this.kit.esteiras[0].galleries
        };
        localStorage.setItem('displayImages', JSON.stringify(displayImages));
        window.open('/#/operacao/exibir-imagens');
    }
};
ConsultTypeOfKitComponent.ctorParameters = () => [
    { type: _services_consult_type_of_kit_service__WEBPACK_IMPORTED_MODULE_2__["ConsultTypeKitService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ConsultTypeOfKitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consult-type-of-kit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consult-type-of-kit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consult-type-of-kit.component.scss */ "./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_consult_type_of_kit_service__WEBPACK_IMPORTED_MODULE_2__["ConsultTypeKitService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ConsultTypeOfKitComponent);



/***/ }),

/***/ "./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".reproved {\n  background-color: #ffcdd2;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.icones a {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94LWRldGFpbHMvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXGRlZmluaXRpdmUtYm94LWRldGFpbHNcXGRlZmluaXRpdmUtYm94LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveC1kZXRhaWxzL2RlZmluaXRpdmUtYm94LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FER0k7RUFDSSxtQkFBQTtVQUFBLFlBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveC1kZXRhaWxzL2RlZmluaXRpdmUtYm94LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwcm92ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcclxufVxyXG5cclxuLmZpcnN0LWNvbHVtbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5pY29uZXMge1xyXG4gICAgYSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG59IiwiLnJlcHJvdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcbn1cblxuLmZpcnN0LWNvbHVtbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUlO1xufVxuXG4uaWNvbmVzIGEge1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DefinitiveBoxDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitiveBoxDetailsComponent", function() { return DefinitiveBoxDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dialog-tags-number/dialog-tags-number.component */ "./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");









let DefinitiveBoxDetailsComponent = class DefinitiveBoxDetailsComponent {
    constructor(activatedRoute, dialog, definitiveBoxService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.definitiveBoxService = definitiveBoxService;
        this.displayedColumns = ['item', 'tagNumber', 'type', 'status', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.kits = [];
        this.totalItens = 0;
        this.onlyReproveds = "false";
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
    }
    ngOnInit() {
        this.idDefinitiveBox = this.activatedRoute.snapshot.paramMap.get('id');
        this.getKits();
    }
    ngAfterViewInit() {
        this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.getKits())).subscribe();
    }
    getKits() {
        this.definitiveBoxService.getKits(this.idDefinitiveBox, this.pageSize.toString(), this.pageIndex.toString()).subscribe(response => {
            this.kits = [...response.data];
            this.totalItens = response.length;
            this.kits.forEach((element, index) => {
                element['position'] = (response.pageSize * response.pageIndex) + (index + 1);
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
        });
    }
    remover(idKit) {
        const dialogRef = this.dialog.open(_shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_7__["DialogTagsNumberComponent"], {
            width: '600px',
            data: {
                title: "Confirmar Remoção",
                message: "Leia o número da etiqueta do(s) processo(s) que quer remover:",
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_8__["DialogTypes"].CONFIRM_TAG_NUMBER,
                tagIds: [idKit]
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (idKit === result) {
                    this.successMessage();
                }
                else {
                    this.errorMessage();
                }
            }
        });
    }
    successMessage() {
        this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: '600px',
            data: {
                title: "Sucesso",
                message: "O Kit foi removido com sucesso dessa caixa. Acesse para a página de devolução de Kits para dar continuidade ao processo.",
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_8__["DialogTypes"].INFORMATION,
            }
        });
    }
    errorMessage() {
        this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            data: {
                title: "Erro",
                message: "O código do Kit que foi lido é diferente do código do item selecionado.",
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_8__["DialogTypes"].INFORMATION,
            },
            width: '600px'
        });
    }
    transferToAnotherBox(idKit) {
        this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: '600px',
            data: {
                title: "Transferir Kit de Caixa",
                message: "Leia o número da etiqueta do Kit que você quer transferir e da caixa de destino.",
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_8__["DialogTypes"].TRANSFER_TO_ANOTHER_BOX,
                tagIds: [idKit]
            }
        });
    }
};
DefinitiveBoxDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_5__["DefinitiveBoxService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], DefinitiveBoxDetailsComponent.prototype, "paginator", void 0);
DefinitiveBoxDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-definitive-box-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./definitive-box-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./definitive-box-details.component.scss */ "./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_5__["DefinitiveBoxService"]])
], DefinitiveBoxDetailsComponent);



/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aproved {\n  background-color: #c8e6c9;\n}\n\n.withReproveds {\n  background-color: #ffcdd2;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94ZXMtY2xvc2VkL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxleHBlZGl0aW9uXFxkZWZpbml0aXZlLWJveGVzLWNsb3NlZFxcZGVmaW5pdGl2ZS1ib3hlcy1jbG9zZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveGVzLWNsb3NlZC9kZWZpbml0aXZlLWJveGVzLWNsb3NlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveGVzLWNsb3NlZC9kZWZpbml0aXZlLWJveGVzLWNsb3NlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHJvdmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XHJcbn1cclxuXHJcbi53aXRoUmVwcm92ZWRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XHJcbn1cclxuXHJcbi5maXJzdC1jb2x1bW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcblxyXG5cclxuLnNtYWxsLW1lbnV7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn0iLCIuYXByb3ZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XG59XG5cbi53aXRoUmVwcm92ZWRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcbn1cblxuLmZpcnN0LWNvbHVtbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUlO1xufVxuXG4uc21hbGwtbWVudSB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DefinitiveBoxesClosedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitiveBoxesClosedComponent", function() { return DefinitiveBoxesClosedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");








let DefinitiveBoxesClosedComponent = class DefinitiveBoxesClosedComponent {
    constructor(formBuilder, definitiveBoxService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.definitiveBoxService = definitiveBoxService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['codigoExterno', 'quantidadeLotes', 'quantidadeKits', 'dataCadastro', 'dataFehamento', 'usuarioFechamento', 'capaLote'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.pouchs = [];
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.currentDate = new Date();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(4, "months").toDate();
        this.loading = false;
    }
    ngOnInit() {
        const dateNow = moment__WEBPACK_IMPORTED_MODULE_5__();
        const datePrevious = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(7, 'days');
        this.formDefinitivas = this.formBuilder.group({
            dataInicial: [datePrevious.toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFinal: [dateNow.toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            documento: String,
        });
        this.getCaixasDefinitivas();
    }
    getCaixaDefinitiva(exportaXLSX = false) {
        if (this.caixaDefinitiva != undefined) {
            if (this.caixaDefinitiva.trim().length > 3) {
                this.loading = true;
                //initialDate: string, finalDate: string, pageSize: string, pageIndex: string, exportaXLSX: boolean
                //this.definitiveBoxService.getEncerradas(null, null, null, null, this.caixaDefinitiva, exportaXLSX).subscribe(
                this.definitiveBoxService.getEncerradas(null, null, null, null, this.caixaDefinitiva, exportaXLSX).subscribe(response => {
                    if (response.type == "application/octet-stream") {
                        this.CreateFile(response);
                    }
                    else {
                        this.ViewResultTable(response);
                    }
                    this.loading = false;
                }, error => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, null, error);
                    this.loading = false;
                });
            }
        }
    }
    getCaixasDefinitivas(exportaXLSX = false) {
        this.loading = true;
        const form = this.formDefinitivas.value;
        this.pouchs = [];
        let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]("en-US");
        const dataInicial = datePipe.transform(form.dataInicial, 'yyyy-MM-dd');
        const dataFinal = datePipe.transform(form.dataFinal, 'yyyy-MM-dd');
        const pageIndex = (this.pageIndex + 1).toString();
        const pageSize = this.pageSize.toString();
        this.definitiveBoxService.getEncerradas(dataInicial, dataFinal, pageSize, pageIndex, null, exportaXLSX).subscribe(response => {
            if (response.type == "application/octet-stream") {
                this.CreateFile(response);
            }
            else {
                this.ViewResultTable(response);
            }
            this.loading = false;
        }, (error) => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loading = false;
        });
    }
    CreateFile(response) {
        var dateToday = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDDHHmmss');
        var fileName = "caixaencerrada" + "_" + dateToday + ".xlsx";
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
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getCaixasDefinitivas();
    }
    ViewResultTable(response) {
        this.length = response.length;
        this.pouchs = [...response.data];
        this.pouchs.forEach((element, index) => {
            element['position'] = index + 1;
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
        this.dataSource.paginator = this.paginator;
    }
};
DefinitiveBoxesClosedComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], DefinitiveBoxesClosedComponent.prototype, "paginator", void 0);
DefinitiveBoxesClosedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-definitive-boxes-closed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./definitive-boxes-closed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./definitive-boxes-closed.component.scss */ "./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], DefinitiveBoxesClosedComponent);



/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itemDashMV {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n.itemDashMV .row {\n  width: 100%;\n}\n.itemDashMV .iconDash {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.itemDashMV .iconDash i {\n  font-size: 40px;\n  color: #E53935;\n}\n.itemDashMV .datas {\n  display: inline-block;\n}\n.itemDashMV .datas .title {\n  display: block;\n  color: #546E7A;\n  text-align: center;\n}\n.itemDashMV .datas .valor {\n  text-align: center;\n  display: block;\n}\nh1 {\n  font-size: 2rem;\n  margin-bottom: 25px;\n}\ntable {\n  width: 100%;\n}\n.cursorPointer {\n  cursor: pointer;\n}\n.cursorPointer:hover {\n  background-color: #B0BEC5;\n}\ntr.example-detail-row {\n  height: 0;\n  background: #ECEFF1;\n}\ntable td.mat-cell, table th.mat-header-cell {\n  padding: 0 24px;\n}\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #CFD8DC;\n}\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-expanded-row {\n  font-weight: bold;\n  background: #ECEFF1;\n}\n.example-expanded-row td {\n  border-bottom-width: 0;\n}\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n.table {\n  margin: 15px auto;\n  box-shadow: 0px 3px 7px 0px #666666;\n  width: 98%;\n}\n.table th {\n  border-bottom: none;\n  background-color: #1565C0;\n  color: #FFFFFF;\n}\n.table tr {\n  background-color: #FFFFFF;\n}\n.table tr:nth-child(even) {\n  background-color: #FAFAFA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gtZmlsZXMvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXGRlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gtZmlsZXNcXGRlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gtZmlsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveGVzLWRpc3BhdGNoLWZpbGVzL2RlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gtZmlsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0FDQ1I7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ1o7QURFSTtFQUNJLHFCQUFBO0FDQVI7QURDUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNESjtBREVJO0VBQ0kseUJBQUE7QUNBUjtBRElBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7QUNESjtBRElBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0RKO0FER0k7RUFDSSxzQkFBQTtBQ0RSO0FES0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKO0FES0E7RUFDSSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FER0k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER0k7RUFDSSx5QkFBQTtBQ0RSO0FER1E7RUFDSSx5QkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gtZmlsZXMvZGVmaW5pdGl2ZS1ib3hlcy1kaXNwYXRjaC1maWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtRGFzaE1WIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaWNvbkRhc2gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI0U1MzkzNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGF0YXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICM1NDZFN0E7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbG9yIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3Vyc29yUG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjBCRUM1O1xyXG4gICAgfVxyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0VDRUZGMTtcclxufVxyXG5cclxudGFibGUgdGQubWF0LWNlbGwsIHRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0NGRDhEQztcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZXhwYW5kZWQtcm93IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogI0VDRUZGMTtcclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggN3B4IDBweCByZ2JhKDEwMiwxMDIsMTAyLDEpO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIHRoIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTY1QzA7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIuaXRlbURhc2hNViB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pdGVtRGFzaE1WIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtRGFzaE1WIC5pY29uRGFzaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLml0ZW1EYXNoTVYgLmljb25EYXNoIGkge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjRTUzOTM1O1xufVxuLml0ZW1EYXNoTVYgLmRhdGFzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLml0ZW1EYXNoTVYgLmRhdGFzIC50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzU0NkU3QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1EYXNoTVYgLmRhdGFzIC52YWxvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3Vyc29yUG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXJzb3JQb2ludGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0IwQkVDNTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xufVxuXG50YWJsZSB0ZC5tYXQtY2VsbCwgdGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0NGRDhEQztcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1leHBhbmRlZC1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcbn1cbi5leGFtcGxlLWV4cGFuZGVkLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYmxlIHtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAzcHggN3B4IDBweCAjNjY2NjY2O1xuICB3aWR0aDogOTglO1xufVxuLnRhYmxlIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4udGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLnRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DefinitiveBoxesDispatchFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitiveBoxesDispatchFilesComponent", function() { return DefinitiveBoxesDispatchFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");










let DefinitiveBoxesDispatchFilesComponent = class DefinitiveBoxesDispatchFilesComponent {
    constructor(definitiveBoxService, formBuilder, matSnackBar) {
        this.definitiveBoxService = definitiveBoxService;
        this.formBuilder = formBuilder;
        this.matSnackBar = matSnackBar;
        this.loading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.columnsToDisplay = ['caixas', 'file', 'dataGeracaoArquivo', 'usuario', 'urlDownload'];
        this.showErrorMessage = false;
        this.filter = null;
        this.pageConfig = null;
        this.maxDate = new Date();
        this.pouchs = [];
    }
    ngOnInit() {
        const dateNow = moment__WEBPACK_IMPORTED_MODULE_6__();
        const datePrevious = moment__WEBPACK_IMPORTED_MODULE_6__().subtract(7, 'days');
        this.form = this.formBuilder.group({
            caixaDefinitiva: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(3)]]
        });
        this.formTime = this.formBuilder.group({
            dataInicial: [datePrevious.toISOString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            dataFinal: [dateNow.toISOString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
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
    applyFilter() {
        this.dataSource.filter = this.filter.trim().toLowerCase();
    }
    getByCaixa() {
        if (this.form.valid) {
            const data = {
                caixaDefinitiva: this.form.value.caixaDefinitiva
            };
            this.getloteCaixasDespachadas(data, true);
        }
    }
    getByTime() {
        if (this.formTime.valid) {
            const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
            const dataInicial = datePipe.transform(this.formTime.value.dataInicial, 'yyyy-MM-dd');
            const dataFinal = datePipe.transform(this.formTime.value.dataFinal, 'yyyy-MM-dd');
            const data = {
                dataInicial: dataInicial,
                dataFinal: dataFinal
            };
            this.getloteCaixasDespachadas(data, false);
        }
    }
    getloteCaixasDespachadas(data, buscaCaixa) {
        this.loading = true;
        this.definitiveBoxService.getFilesCaixasDespachadas(data).subscribe(response => {
            this.pouchs = response.data;
            this.pouchs.forEach((element, index) => {
                element['position'] = index;
            });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pouchs);
            this.loading = false;
            this.showErrorMessage = false;
            if (buscaCaixa) {
                this.expand(0);
                this.pouchs.forEach((element, index) => {
                    element.caixas.forEach(item => {
                        item['caixaBuscada'] = (item.caixaDefinitiva == this.form.value.caixaDefinitiva);
                    });
                });
            }
        }, error => {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarComponent"].showError(this.matSnackBar, error);
            this.loading = false;
            this.showErrorMessage = true;
        });
    }
};
DefinitiveBoxesDispatchFilesComponent.ctorParameters = () => [
    { type: _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_4__["DefinitiveBoxService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], DefinitiveBoxesDispatchFilesComponent.prototype, "paginator", void 0);
DefinitiveBoxesDispatchFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-managerial-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./definitive-boxes-dispatch-files.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./definitive-boxes-dispatch-files.component.scss */ "./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_4__["DefinitiveBoxService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], DefinitiveBoxesDispatchFilesComponent);



/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aproved {\n  background-color: #c8e6c9;\n}\n\n.withReproveds {\n  background-color: #ffcdd2;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXGRlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2hcXGRlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveGVzLWRpc3BhdGNoL2RlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94ZXMtZGlzcGF0Y2gvZGVmaW5pdGl2ZS1ib3hlcy1kaXNwYXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHJvdmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XHJcbn1cclxuXHJcbi53aXRoUmVwcm92ZWRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XHJcbn1cclxuXHJcbi5maXJzdC1jb2x1bW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUlO1xyXG59IiwiLmFwcm92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xufVxuXG4ud2l0aFJlcHJvdmVkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XG59XG5cbi5maXJzdC1jb2x1bW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DefinitiveBoxesDispatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitiveBoxesDispatchComponent", function() { return DefinitiveBoxesDispatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");







let DefinitiveBoxesDispatchComponent = class DefinitiveBoxesDispatchComponent {
    constructor(formBuilder, definitiveBoxService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.definitiveBoxService = definitiveBoxService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['codigoExterno', 'quantidadeLotes', 'quantidadeKits', 'dataCadastro', 'dataFehamento', 'usuarioFechamento', 'capaLote'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.pouchs = [];
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.download = '';
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            numeroCaixa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    addKit() {
        const numeroCaixa = this.form.value.numeroCaixa;
        if (numeroCaixa != null || numeroCaixa.trim() != "") {
            const index = this.pouchs.map(el => el.codigoExterno).indexOf(numeroCaixa);
            if (index >= 0) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, "A Caixa já foi adicionada");
            }
            else {
                this.loading = true;
                this.definitiveBoxService.getBox(numeroCaixa).subscribe(response => {
                    this.loading = false;
                    this.pouchs.push(response.data);
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
                }, error => {
                    this.loading = false;
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, error);
                });
            }
        }
        this.form.reset();
        this.download = '';
    }
    salvar() {
        this.loading = true;
        let caixasDefinitivas = [];
        this.pouchs.forEach(element => {
            caixasDefinitivas.push(element.codigoExterno);
        });
        this.definitiveBoxService.setCaixasDespachadas(caixasDefinitivas).subscribe(response => {
            this.loading = false;
            this.pouchs = [];
            this.download = response.data.toString();
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(this.matSnackBar);
        }, error => {
            this.loading = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(this.matSnackBar, null, error.message);
        });
    }
    deletar(codigoExterno) {
        this.pouchs = this.pouchs.filter(element => element.codigoExterno != codigoExterno);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
    }
};
DefinitiveBoxesDispatchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], DefinitiveBoxesDispatchComponent.prototype, "paginator", void 0);
DefinitiveBoxesDispatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-definitive-boxes-dispatch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./definitive-boxes-dispatch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./definitive-boxes-dispatch.component.scss */ "./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], DefinitiveBoxesDispatchComponent);



/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aproved {\n  background-color: #c8e6c9;\n}\n\n.withReproveds {\n  background-color: #ffcdd2;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.btn-height {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2RlZmluaXRpdmUtYm94ZXMvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXGRlZmluaXRpdmUtYm94ZXNcXGRlZmluaXRpdmUtYm94ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWZpbml0aXZlLWJveGVzL2RlZmluaXRpdmUtYm94ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVkaXRpb24vZGVmaW5pdGl2ZS1ib3hlcy9kZWZpbml0aXZlLWJveGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcm92ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcclxufVxyXG5cclxuLndpdGhSZXByb3ZlZHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcclxufVxyXG5cclxuLmZpcnN0LWNvbHVtbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi5zbWFsbC1tZW51e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWhlaWdodHtcclxuICAgIGhlaWdodDogNDBweDtcclxufSIsIi5hcHJvdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcbn1cblxuLndpdGhSZXByb3ZlZHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xufVxuXG4uZmlyc3QtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNSU7XG59XG5cbi5zbWFsbC1tZW51IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmJ0bi1oZWlnaHQge1xuICBoZWlnaHQ6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefinitiveBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitiveBoxesComponent", function() { return DefinitiveBoxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");








let DefinitiveBoxesComponent = class DefinitiveBoxesComponent {
    constructor(formBuilder, definitiveBoxService, matSnackBar) {
        this.formBuilder = formBuilder;
        this.definitiveBoxService = definitiveBoxService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['item', 'numeroCaixa', 'quantidadeAprovados', 'dataCriacao', 'capaLote'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.definitiveBoxes = [];
        this.pouchs = null;
        this.maxDate = new Date();
        this.period = '';
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.documento = 'todos';
        this.loading = false;
    }
    ngOnInit() {
        const dateNow = moment__WEBPACK_IMPORTED_MODULE_5__();
        const datePrevious = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(7, 'days');
        this.formDefinitivas = this.formBuilder.group({
            dataInicial: [datePrevious.toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dataFinal: [dateNow.toISOString(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            documento: String,
        });
        this.getCaixasDefinitivas();
    }
    getCaixasDefinitivas(exportaXLSX = false) {
        if (this.formDefinitivas.valid) {
            this.loading = true;
            this.documento = 'todos';
            const form = this.formDefinitivas.value;
            this.pouchs = null;
            let datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]("en-US");
            const dataInicial = datePipe.transform(form.dataInicial, 'yyyy-MM-dd');
            const dataFinal = datePipe.transform(form.dataFinal, 'yyyy-MM-dd');
            const pageIndex = (this.pageIndex + 1).toString();
            const pageSize = this.pageSize.toString();
            this.definitiveBoxService.getCaixasDefinitivas(dataInicial, dataFinal, pageSize, pageIndex, exportaXLSX).subscribe(response => {
                if (response.type == "application/octet-stream") {
                    var dateToday = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDDHHmmss');
                    var fileName = "caixadefinitiva" + "_" + dateToday + ".xlsx";
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
                    this.pouchs = [...response.data];
                    this.pouchs.forEach((element, index) => {
                        element['position'] = index + 1;
                    });
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
                    this.dataSource.paginator = this.paginator;
                    //this.formDefinitivas.reset()
                }
                this.loading = false;
            }, (error) => {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, error);
                this.loading = false;
            });
        }
    }
    getCaixaDefinitiva(exportaXLSX = false) {
        if (this.caixaDefinitiva != undefined) {
            if (this.caixaDefinitiva.trim().length > 3) {
                this.loading = true;
                this.definitiveBoxService.getCaixaDefinitiva(this.caixaDefinitiva, exportaXLSX).subscribe(response => {
                    if (response.type == "application/octet-stream") {
                        var dateToday = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDDHHmmss');
                        var fileName = "caixadefinitiva" + "_ " + dateToday + ".xlsx";
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
                        this.pouchs = [...response.data];
                        this.pouchs.forEach((element, index) => {
                            element['position'] = index + 1;
                        });
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
                        this.dataSource.paginator = this.paginator;
                    }
                    this.loading = false;
                }, error => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(this.matSnackBar, null, error);
                    this.loading = false;
                });
            }
        }
    }
    filtrarStatus() {
        let caixasFiltro = [];
        switch (this.documento) {
            case 'todos':
                caixasFiltro = this.pouchs;
                break;
            case 'Aprovados':
                caixasFiltro = this.pouchs.filter(item => item.quantidadeAprovados > 0 && item.quantidadePendentes == 0 && item.quantidadeReprovados == 0); //Somente com Todos Aprovados
                break;
            case 'DocumentosPendentes':
                caixasFiltro = this.pouchs.filter(item => item.quantidadePendentes > 0); //Com Documentos Pendentes
                break;
            case 'TodosPendentes':
                caixasFiltro = this.pouchs.filter(item => item.quantidadeAprovados == 0 && item.quantidadePendentes > 0 && item.quantidadeReprovados == 0); //Somente com Todos Pendentes
                break;
            case 'Reprovados':
                caixasFiltro = this.pouchs.filter(item => item.quantidadeReprovados > 0); //Com Documentos Reprovados
                break;
            // case 'Cancelados':
            // 	caixasFiltro = this.pouchs.filter(item => item.quantidadeCancelados > 0); //Com Documentos Reprovados
            // 	break;
            default:
                caixasFiltro = this.pouchs;
                break;
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](caixasFiltro);
    }
    getClass(element) {
        if (element.quantidadeAprovados > 0 && element.quantidadePendentes === 0 && element.quantidadeReprovados === 0) {
            return 'aproved';
        }
        else if (element.quantidadeReprovados > 0) {
            return 'withReproveds';
        }
        return;
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getCaixasDefinitivas();
    }
    gerarCapa(tagNumber) {
        this.definitiveBoxService.generateCapaLoteDefinitiva(tagNumber).subscribe(response => {
            const blob = new Blob([response], { type: 'application/pdf' });
            const linkArquivo = window.URL.createObjectURL(blob);
            const fileName = `capa.pdf`;
            var link = document.createElement("a");
            link.setAttribute("href", linkArquivo.toString());
            link.setAttribute("download", fileName);
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, () => {
        });
    }
};
DefinitiveBoxesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], DefinitiveBoxesComponent.prototype, "paginator", void 0);
DefinitiveBoxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-definitive-boxes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./definitive-boxes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./definitive-boxes.component.scss */ "./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], DefinitiveBoxesComponent);



/***/ }),

/***/ "./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZWxpdmVyeS1kZWZpbml0aXZlLWJveGVzL2RlbGl2ZXJ5LWRlZmluaXRpdmUtYm94ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DeliveryDefinitiveBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryDefinitiveBoxesComponent", function() { return DeliveryDefinitiveBoxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryDefinitiveBoxesComponent = class DeliveryDefinitiveBoxesComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryDefinitiveBoxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-definitive-boxes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delivery-definitive-boxes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delivery-definitive-boxes.component.scss */ "./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeliveryDefinitiveBoxesComponent);



/***/ }),

/***/ "./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bt-devolution {\n  position: relative;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL2Rldm9sdXRpb24tb2Yta2l0cy9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZXhwZWRpdGlvblxcZGV2b2x1dGlvbi1vZi1raXRzXFxkZXZvbHV0aW9uLW9mLWtpdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9kZXZvbHV0aW9uLW9mLWtpdHMvZGV2b2x1dGlvbi1vZi1raXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVkaXRpb24vZGV2b2x1dGlvbi1vZi1raXRzL2Rldm9sdXRpb24tb2Yta2l0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idC1kZXZvbHV0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG59IiwiLmJ0LWRldm9sdXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DevolutionOfKitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevolutionOfKitsComponent", function() { return DevolutionOfKitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_devolution_kits_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/devolution-kits.service */ "./src/app/modules/expedition/services/devolution-kits.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/dialog-tags-number/dialog-tags-number.component */ "./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.ts");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");









let DevolutionOfKitsComponent = class DevolutionOfKitsComponent {
    constructor(devolutionKitsService, dialog, matSnackBar) {
        this.devolutionKitsService = devolutionKitsService;
        this.dialog = dialog;
        this.matSnackBar = matSnackBar;
        this.loading = false;
        this.displayedColumns = ['item', 'etiqueta', 'status', 'agencia', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.kits = [];
        this.length = 0;
        this.devolutionGroupKits = false;
        this.pageSize = 50;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
    }
    ngOnInit() {
        this.getKits();
    }
    getKits() {
        this.loading = true;
        this.devolutionKitsService.getKitsToDevolution((this.pageIndex + 1).toString(), this.pageSize.toString()).subscribe(response => {
            this.kits = [];
            this.kits = [...response.data];
            this.kits.forEach((element, index) => {
                element['position'] = (index + 1);
            });
            this.devolutionGroupKits = false;
            this.length = response.length;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getKitsAgencia() {
        this.loading = true;
        this.devolutionKitsService.getKitsAgenciaToDevolution((this.pageIndex + 1).toString(), this.pageSize.toString(), this.agencia).subscribe(response => {
            this.kits = [];
            this.kits = [...response.data];
            this.length = response.length;
            this.kits.forEach((element, index) => {
                element['position'] = (index + 1);
            });
            this.devolutionGroupKits = true;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getKitsEtiqueta() {
        this.loading = true;
        this.devolutionKitsService.getKitsEtiquetaToDevolution((this.pageIndex + 1).toString(), this.pageSize.toString(), this.etiqueta).subscribe(response => {
            this.kits = [];
            this.kits = [...response.data];
            this.length = response.length;
            this.kits.forEach((element, index) => {
                element['position'] = (index + 1);
            });
            this.devolutionGroupKits = true;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    getKitFiltro() {
        this.pageIndex = 0;
        this.pageSize = 50;
        if (this.agencia.length > 2) {
            this.getKitsAgencia();
        }
        else if (this.agencia.length == 0) {
            this.getKits();
        }
    }
    getKitEtiqueta() {
        if (this.etiqueta.length > 2) {
            this.pageIndex = 0;
            this.pageSize = 1;
            this.getKitsEtiqueta();
        }
        else if (this.etiqueta.length == 0) {
            this.pageIndex = 0;
            this.pageSize = 50;
            this.getKits();
        }
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getKits();
    }
    returnGroupKits() {
        this.returnToAgency(this.kits);
    }
    returnToAgency(kits) {
        const dialogRef = this.dialog.open(_shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_6__["DialogTagsNumberComponent"], {
            width: '600px',
            height: '90%',
            data: {
                title: "Validar Kits para Devolução",
                message: "Leia o número da etiqueta do(s) processo(s) que quer remover:",
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].CONFIRM_TAG_NUMBER,
                tagIds: kits.map(x => `etiqueta ${x.etiqueta}`)
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == undefined || result.length < 1) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, 'Cancelada pelo Usuário');
            }
            else {
                const tagIDsReturned = result;
                let etiquetas = [];
                let valid = true;
                let message = null;
                let repeatedValues = tagIDsReturned.filter((item, i) => tagIDsReturned.indexOf(item) !== i);
                if (repeatedValues.length > 0) {
                    message = 'Não é possivel cadastrar Etiquetas repeditas: ' + repeatedValues;
                    valid = false;
                }
                else if (tagIDsReturned.filter(item => item === "").length !== 0) {
                    message = 'Digite todas Etiquetas';
                    valid = false;
                }
                else {
                    for (let kit of kits) {
                        etiquetas.push(kit.etiqueta);
                    }
                    let diferentValues = [];
                    diferentValues = tagIDsReturned.filter(item => etiquetas.indexOf(item) < 0);
                    if (diferentValues.length > 0) {
                        message = 'Kits cadastrados difetentes dos listados para devolução: ' + diferentValues;
                        valid = false;
                    }
                }
                if (valid) {
                    this.successMessage(etiquetas);
                }
                else {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, message);
                }
            }
        });
    }
    successMessage(etiquetas) {
        const dialogRef = this.dialog.open(_shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_6__["DialogTagsNumberComponent"], {
            width: '600px',
            maxHeight: '90%',
            data: {
                title: "Malote",
                message: "Digite o número do Malote e o Número do Lacre para devolução dos Kits",
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_7__["DialogTypes"].CONFIRM_TAG_NUMBER,
                tagIds: ['Malote', 'Lacre']
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == undefined || result.length < 1) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, 'Cancelada pelo Usuário');
            }
            else {
                this.loading = true;
                this.devolutionKitsService.putTrasferirKitCaixaDefinitiva(result[0], result[1], etiquetas).subscribe(response => {
                    this.loading = false;
                    if (response.type == "application/octet-stream") {
                        src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(this.matSnackBar, 'Malotes devolvido com Sucesso');
                        this.pageIndex = 0;
                        this.pageSize = 50;
                        this.getKits();
                        var dateToday = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDDHHmmss');
                        var fileName = `capa_devolucao_${result[0]}_${dateToday}.pdf`;
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
                }, () => {
                    this.loading = false;
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar);
                });
            }
        });
    }
};
DevolutionOfKitsComponent.ctorParameters = () => [
    { type: _services_devolution_kits_service__WEBPACK_IMPORTED_MODULE_3__["DevolutionKitsService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], DevolutionOfKitsComponent.prototype, "paginator", void 0);
DevolutionOfKitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devolution-of-kits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./devolution-of-kits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./devolution-of-kits.component.scss */ "./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_devolution_kits_service__WEBPACK_IMPORTED_MODULE_3__["DevolutionKitsService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], DevolutionOfKitsComponent);



/***/ }),

/***/ "./src/app/modules/expedition/expedition-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/expedition/expedition-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ExpeditionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpeditionRoutingModule", function() { return ExpeditionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _temporary_boxes_temporary_boxes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./temporary-boxes/temporary-boxes.component */ "./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.ts");
/* harmony import */ var _consult_type_of_kit_consult_type_of_kit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consult-type-of-kit/consult-type-of-kit.component */ "./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.ts");
/* harmony import */ var _definitive_boxes_definitive_boxes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definitive-boxes/definitive-boxes.component */ "./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.ts");
/* harmony import */ var _devolution_of_kits_devolution_of_kits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devolution-of-kits/devolution-of-kits.component */ "./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.ts");
/* harmony import */ var _temporary_box_details_temporary_box_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./temporary-box-details/temporary-box-details.component */ "./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.ts");
/* harmony import */ var _definitive_box_details_definitive_box_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./definitive-box-details/definitive-box-details.component */ "./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.ts");
/* harmony import */ var _expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expedition-routes.guard */ "./src/app/modules/expedition/expedition-routes.guard.ts");
/* harmony import */ var _transfer_remove_kits_transfer_remove_kits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transfer-remove-kits/transfer-remove-kits.component */ "./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.ts");
/* harmony import */ var _capa_lote_capa_lote_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capa-lote/capa-lote.component */ "./src/app/modules/expedition/capa-lote/capa-lote.component.ts");
/* harmony import */ var _definitive_boxes_closed_definitive_boxes_closed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./definitive-boxes-closed/definitive-boxes-closed.component */ "./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.ts");
/* harmony import */ var _boxes_closed_details_boxes_closed_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./boxes-closed-details/boxes-closed-details.component */ "./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.ts");
/* harmony import */ var _definitive_boxes_dispatch_definitive_boxes_dispatch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./definitive-boxes-dispatch/definitive-boxes-dispatch.component */ "./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.ts");
/* harmony import */ var _definitive_boxes_dispatch_files_definitive_boxes_dispatch_files_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component */ "./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.ts");
















const routes = [
    { path: 'caixas-temporarias', component: _temporary_boxes_temporary_boxes_component__WEBPACK_IMPORTED_MODULE_3__["TemporaryBoxesComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-temporarias/:id', component: _temporary_box_details_temporary_box_details_component__WEBPACK_IMPORTED_MODULE_7__["TemporaryBoxDetailsComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'consultar-tipo-do-kit', component: _consult_type_of_kit_consult_type_of_kit_component__WEBPACK_IMPORTED_MODULE_4__["ConsultTypeOfKitComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'criar-caixa-definitiva', component: _capa_lote_capa_lote_component__WEBPACK_IMPORTED_MODULE_11__["CapaLoteComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'devolucao-de-kits', component: _devolution_of_kits_devolution_of_kits_component__WEBPACK_IMPORTED_MODULE_6__["DevolutionOfKitsComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-definitivas-em-espera', component: _definitive_boxes_definitive_boxes_component__WEBPACK_IMPORTED_MODULE_5__["DefinitiveBoxesComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-definitivas-em-espera/:id', component: _definitive_box_details_definitive_box_details_component__WEBPACK_IMPORTED_MODULE_8__["DefinitiveBoxDetailsComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-definitivas-em-espera/transfer-remove/:id', component: _transfer_remove_kits_transfer_remove_kits_component__WEBPACK_IMPORTED_MODULE_10__["TransferRemoveKitsComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-definitivas-em-espera/:numeroCaixa/capa-lote', component: _capa_lote_capa_lote_component__WEBPACK_IMPORTED_MODULE_11__["CapaLoteComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-definitivas-encerradas', component: _definitive_boxes_closed_definitive_boxes_closed_component__WEBPACK_IMPORTED_MODULE_12__["DefinitiveBoxesClosedComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'caixas-definitivas-encerradas/:numeroCaixa/detalhes', component: _boxes_closed_details_boxes_closed_details_component__WEBPACK_IMPORTED_MODULE_13__["BoxesClosedDetails"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'despachar-caixas-definitivas', component: _definitive_boxes_dispatch_definitive_boxes_dispatch_component__WEBPACK_IMPORTED_MODULE_14__["DefinitiveBoxesDispatchComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] },
    { path: 'arquivos-caixas-definitivas-despachadas', component: _definitive_boxes_dispatch_files_definitive_boxes_dispatch_files_component__WEBPACK_IMPORTED_MODULE_15__["DefinitiveBoxesDispatchFilesComponent"], canActivate: [_expedition_routes_guard__WEBPACK_IMPORTED_MODULE_9__["ExpeditionRoutesGuard"]] }
];
let ExpeditionRoutingModule = class ExpeditionRoutingModule {
};
ExpeditionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ExpeditionRoutingModule);



/***/ }),

/***/ "./src/app/modules/expedition/expedition.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/expedition/expedition.module.ts ***!
  \*********************************************************/
/*! exports provided: ExpeditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpeditionModule", function() { return ExpeditionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _expedition_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expedition-routing.module */ "./src/app/modules/expedition/expedition-routing.module.ts");
/* harmony import */ var _temporary_boxes_temporary_boxes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./temporary-boxes/temporary-boxes.component */ "./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.ts");
/* harmony import */ var _consult_type_of_kit_consult_type_of_kit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consult-type-of-kit/consult-type-of-kit.component */ "./src/app/modules/expedition/consult-type-of-kit/consult-type-of-kit.component.ts");
/* harmony import */ var _definitive_boxes_definitive_boxes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./definitive-boxes/definitive-boxes.component */ "./src/app/modules/expedition/definitive-boxes/definitive-boxes.component.ts");
/* harmony import */ var _definitive_box_details_definitive_box_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./definitive-box-details/definitive-box-details.component */ "./src/app/modules/expedition/definitive-box-details/definitive-box-details.component.ts");
/* harmony import */ var _temporary_box_details_temporary_box_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./temporary-box-details/temporary-box-details.component */ "./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.ts");
/* harmony import */ var _devolution_of_kits_devolution_of_kits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devolution-of-kits/devolution-of-kits.component */ "./src/app/modules/expedition/devolution-of-kits/devolution-of-kits.component.ts");
/* harmony import */ var _transfer_remove_kits_transfer_remove_kits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transfer-remove-kits/transfer-remove-kits.component */ "./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.ts");
/* harmony import */ var _delivery_definitive_boxes_delivery_definitive_boxes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delivery-definitive-boxes/delivery-definitive-boxes.component */ "./src/app/modules/expedition/delivery-definitive-boxes/delivery-definitive-boxes.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_devolution_kits_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/devolution-kits.service */ "./src/app/modules/expedition/services/devolution-kits.service.ts");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var _services_consult_type_of_kit_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/consult-type-of-kit.service */ "./src/app/modules/expedition/services/consult-type-of-kit.service.ts");
/* harmony import */ var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/dateAdapter/customDate.adapter */ "./src/app/shared/dateAdapter/customDate.adapter.ts");
/* harmony import */ var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/dateAdapter/my-date-formats.const */ "./src/app/shared/dateAdapter/my-date-formats.const.ts");
/* harmony import */ var _capa_lote_capa_lote_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./capa-lote/capa-lote.component */ "./src/app/modules/expedition/capa-lote/capa-lote.component.ts");
/* harmony import */ var _definitive_boxes_closed_definitive_boxes_closed_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./definitive-boxes-closed/definitive-boxes-closed.component */ "./src/app/modules/expedition/definitive-boxes-closed/definitive-boxes-closed.component.ts");
/* harmony import */ var _boxes_closed_details_boxes_closed_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./boxes-closed-details/boxes-closed-details.component */ "./src/app/modules/expedition/boxes-closed-details/boxes-closed-details.component.ts");
/* harmony import */ var _shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/dialog-tags-number/dialog-tags-number.component */ "./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.ts");
/* harmony import */ var _shared_dialog_transfer_to_another_box_dialog_transfer_to_another_box_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component */ "./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.ts");
/* harmony import */ var _definitive_boxes_dispatch_definitive_boxes_dispatch_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./definitive-boxes-dispatch/definitive-boxes-dispatch.component */ "./src/app/modules/expedition/definitive-boxes-dispatch/definitive-boxes-dispatch.component.ts");
/* harmony import */ var _definitive_boxes_dispatch_files_definitive_boxes_dispatch_files_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component */ "./src/app/modules/expedition/definitive-boxes-dispatch-files/definitive-boxes-dispatch-files.component.ts");




























let ExpeditionModule = class ExpeditionModule {
};
ExpeditionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _boxes_closed_details_boxes_closed_details_component__WEBPACK_IMPORTED_MODULE_23__["BoxesClosedDetails"],
            _capa_lote_capa_lote_component__WEBPACK_IMPORTED_MODULE_21__["CapaLoteComponent"],
            _consult_type_of_kit_consult_type_of_kit_component__WEBPACK_IMPORTED_MODULE_5__["ConsultTypeOfKitComponent"],
            _definitive_box_details_definitive_box_details_component__WEBPACK_IMPORTED_MODULE_7__["DefinitiveBoxDetailsComponent"],
            _definitive_boxes_closed_definitive_boxes_closed_component__WEBPACK_IMPORTED_MODULE_22__["DefinitiveBoxesClosedComponent"],
            _definitive_boxes_definitive_boxes_component__WEBPACK_IMPORTED_MODULE_6__["DefinitiveBoxesComponent"],
            _devolution_of_kits_devolution_of_kits_component__WEBPACK_IMPORTED_MODULE_9__["DevolutionOfKitsComponent"],
            _delivery_definitive_boxes_delivery_definitive_boxes_component__WEBPACK_IMPORTED_MODULE_11__["DeliveryDefinitiveBoxesComponent"],
            _shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_24__["DialogTagsNumberComponent"],
            _shared_dialog_transfer_to_another_box_dialog_transfer_to_another_box_component__WEBPACK_IMPORTED_MODULE_25__["DialogTransferToAnotherBoxComponent"],
            _temporary_boxes_temporary_boxes_component__WEBPACK_IMPORTED_MODULE_4__["TemporaryBoxesComponent"],
            _temporary_box_details_temporary_box_details_component__WEBPACK_IMPORTED_MODULE_8__["TemporaryBoxDetailsComponent"],
            _transfer_remove_kits_transfer_remove_kits_component__WEBPACK_IMPORTED_MODULE_10__["TransferRemoveKitsComponent"],
            _definitive_boxes_dispatch_definitive_boxes_dispatch_component__WEBPACK_IMPORTED_MODULE_26__["DefinitiveBoxesDispatchComponent"],
            _definitive_boxes_dispatch_files_definitive_boxes_dispatch_files_component__WEBPACK_IMPORTED_MODULE_27__["DefinitiveBoxesDispatchFilesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _expedition_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpeditionRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]
        ],
        providers: [
            _services_devolution_kits_service__WEBPACK_IMPORTED_MODULE_16__["DevolutionKitsService"],
            _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_17__["DefinitiveBoxService"],
            _services_consult_type_of_kit_service__WEBPACK_IMPORTED_MODULE_18__["ConsultTypeKitService"],
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"], useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_19__["CustomDateAdapter"] },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_FORMATS"], useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_20__["MY_DATE_FORMATS"] }
        ],
        entryComponents: [
            _shared_dialog_tags_number_dialog_tags_number_component__WEBPACK_IMPORTED_MODULE_24__["DialogTagsNumberComponent"],
            _shared_dialog_transfer_to_another_box_dialog_transfer_to_another_box_component__WEBPACK_IMPORTED_MODULE_25__["DialogTransferToAnotherBoxComponent"]
        ]
    })
], ExpeditionModule);



/***/ }),

/***/ "./src/app/modules/expedition/services/consult-type-of-kit.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/expedition/services/consult-type-of-kit.service.ts ***!
  \****************************************************************************/
/*! exports provided: ConsultTypeKitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultTypeKitService", function() { return ConsultTypeKitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let ConsultTypeKitService = class ConsultTypeKitService {
    constructor(http) {
        this.http = http;
    }
    get(etiqueta) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/kits/${etiqueta}/consulta`);
    }
    generateCover(tagNumber, nomeCapa, uniorgCapa) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/kits/${tagNumber}/capa-devolucao`, {
            responseType: 'blob',
            params: {
                nomeCapa: nomeCapa,
                uniorgCapa: uniorgCapa
            }
        });
    }
};
ConsultTypeKitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConsultTypeKitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ConsultTypeKitService);



/***/ }),

/***/ "./src/app/modules/expedition/services/definitive-box.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/expedition/services/definitive-box.service.ts ***!
  \***********************************************************************/
/*! exports provided: DefinitiveBoxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitiveBoxService", function() { return DefinitiveBoxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let DefinitiveBoxService = class DefinitiveBoxService {
    constructor(http) {
        this.http = http;
        this.definitiveBoxUrl = '/api/v1/caixas-definitivas';
        this.capaLoteUrl = '/api/v1/capa-lote';
    }
    postKitsCaixa(caixa, documentoId, kits) {
        const etiquetas = [];
        for (let kit of kits) {
            etiquetas.push(kit.etiqueta);
        }
        const data = {
            caixa: caixa,
            codigoGrupoArquivamento: documentoId,
            kits: etiquetas
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl, data);
    }
    putKitsCaixa(caixa, kits) {
        const etiquetas = [];
        for (let kit of kits) {
            etiquetas.push(kit.etiqueta);
        }
        const data = {
            caixa: caixa,
            kits: etiquetas
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl, data);
    }
    getCaixasDefinitivas(initialDate, finalDate, pageSize, pageIndex, exportaXLSX) {
        const data = {
            DataInicial: initialDate,
            DataFinal: finalDate,
            PageIndex: pageIndex,
            PageSize: pageSize,
            ExportaXLSX: exportaXLSX
        };
        let options = {};
        if (exportaXLSX) {
            options = { responseType: 'blob' };
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/acompanhamento-caixa-definitiva', data, options);
    }
    getCaixaDefinitiva(numeroCaixa, exportaXLSX) {
        const data = {
            CodigoExterno: numeroCaixa,
            ExportaXLSX: exportaXLSX
        };
        let options = {};
        if (exportaXLSX) {
            options = { responseType: 'blob' };
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/acompanhamento-caixa-definitiva', data, options);
    }
    getKits(caixaDefinitivaId, pageSize, pageIndex) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + '/api/v1/kits/kits-caixa-definitiva', {
            params: {
                codigoCaixaDefinitiva: caixaDefinitivaId,
                PageSize: pageSize,
                PageIndex: pageIndex,
            }
        });
    }
    putTrasferirKitCaixaDefinitiva(caixa, etiquetaKit) {
        const data = {
            caixa: caixa,
            etiquetaKit: etiquetaKit
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/transferir-kit', data);
    }
    putRemoveKitCaixaDefinitiva(caixa, etiquetaKit) {
        const dataKit = {
            caixa: caixa,
            etiquetaKit: etiquetaKit
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/remover-kit', dataKit);
    }
    getCapaLote(numeroCaixa) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + '/api/v1/caixas-definitivas/capa-lote', {
            params: {
                caixa: numeroCaixa
            }
        });
    }
    getDadosKit(numeroCaixa, etiqueta) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + '/api/v1/kits/kit-caixa-definitiva', {
            params: {
                caixa: numeroCaixa,
                etiqueta: etiqueta
            }
        });
    }
    postLotes(numeroCaixa, capaLotes) {
        const data = {
            caixa: numeroCaixa,
            capaLotes: [capaLotes]
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.capaLoteUrl, data);
    }
    putEncerrarCaixa(numeroCaixa) {
        const data = {
            caixa: numeroCaixa
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/encerrar-caixa-definitiva', data);
    }
    gerarCapaPDF(numeroCaixa, lote) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.capaLoteUrl + '/gerar-capa-lote', {
            responseType: 'blob',
            params: {
                caixa: numeroCaixa,
                lote: lote
            },
            observe: 'response'
        });
    }
    generateCapaLoteDefinitiva(tagNumber) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices}/api/v1/caixas-definitivas/${tagNumber}/capa-lote`, {
            responseType: 'blob',
            params: {}
        });
    }
    getEncerradas(initialDate, finalDate, pageSize, pageIndex, caixaDefinitiva, exportaXLSX) {
        const data = {
            DataInicial: initialDate,
            DataFinal: finalDate,
            PageIndex: pageIndex,
            PageSize: pageSize,
            CaixaDefinitiva: caixaDefinitiva,
            ExportaXLSX: exportaXLSX
        };
        let options = {};
        if (exportaXLSX) {
            options = { responseType: 'blob' };
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/relatorio-caixa-definitiva', data, options);
    }
    getDetalhesEncerradas(numeroCaixa) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl}/${numeroCaixa}/relatorio-caixa-definitiva-detalhado`);
    }
    getBox(numeroCaixa) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + "/" + numeroCaixa + '/caixa-definitiva-expedicao');
    }
    setCaixasDespachadas(caixasDefinitivas) {
        const data = {
            caixasDefinitivas: caixasDefinitivas
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.capaLoteUrl + "/gerar-file-expedicao", data);
    }
    getFilesCaixasDespachadas(data) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.definitiveBoxUrl + '/consultar-arquivo-expedicao', {
            params: data
        });
    }
    getFile(link) {
        return this.http.get(link, {
            responseType: 'blob',
            observe: 'response'
        });
    }
};
DefinitiveBoxService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DefinitiveBoxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DefinitiveBoxService);



/***/ }),

/***/ "./src/app/modules/expedition/services/devolution-kits.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/expedition/services/devolution-kits.service.ts ***!
  \************************************************************************/
/*! exports provided: DevolutionKitsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevolutionKitsService", function() { return DevolutionKitsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let DevolutionKitsService = class DevolutionKitsService {
    constructor(http) {
        this.http = http;
        this.devolucaoKitUrl = '/api/v1/kits/kits-devolucao';
    }
    getKitsToDevolution(pageIndex, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.devolucaoKitUrl, {
            params: {
                PageIndex: pageIndex,
                PageSize: pageSize
            }
        });
    }
    getKitsAgenciaToDevolution(pageIndex, pageSize, numeroAgencia) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.devolucaoKitUrl, {
            params: {
                NumeroAgencia: numeroAgencia,
                PageSize: pageSize,
                PageIndex: pageIndex
            }
        });
    }
    getKitsEtiquetaToDevolution(pageIndex, pageSize, etiqueta) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.devolucaoKitUrl + '/etiqueta', {
            params: {
                Etiqueta: etiqueta,
                PageSize: pageSize,
                PageIndex: pageIndex
            }
        });
    }
    putTrasferirKitCaixaDefinitiva(maloteAzul, lacre, kits) {
        const data = {
            numeroMaloteDevolucao: maloteAzul,
            numeroLacreDevolucao: lacre,
            kits: kits
        };
        const options = { responseType: 'blob' };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + '/api/v1/kits/devolver-kit', data, options);
    }
};
DevolutionKitsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DevolutionKitsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DevolutionKitsService);



/***/ }),

/***/ "./src/app/modules/expedition/services/temporary-boxes.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/expedition/services/temporary-boxes.service.ts ***!
  \************************************************************************/
/*! exports provided: TemporaryBoxesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporaryBoxesService", function() { return TemporaryBoxesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




let TemporaryBoxesService = class TemporaryBoxesService {
    constructor(http) {
        this.http = http;
        this.urlTemporarias = "/api/v1/caixas-temporarias";
    }
    getTemporaryBoxes(pageIndex, pageSize, codigoExterno, exportaXLSX) {
        let data = {
            PageIndex: pageIndex,
            PageSize: pageSize,
            codigoExterno: codigoExterno,
            exportaXLSX: exportaXLSX
        };
        let options = {};
        if (exportaXLSX) {
            options = { responseType: 'blob' };
        }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlTemporarias + '/consulta', data, options);
    }
};
TemporaryBoxesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TemporaryBoxesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TemporaryBoxesService);



/***/ }),

/***/ "./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\ndiv[mat-dialog-content] {\n  height: calc(100% - 100px);\n}\n\ndiv[mat-dialog-content] .scroll {\n  height: calc(100%);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL3NoYXJlZC9kaWFsb2ctdGFncy1udW1iZXIvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXHNoYXJlZFxcZGlhbG9nLXRhZ3MtbnVtYmVyXFxkaWFsb2ctdGFncy1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9zaGFyZWQvZGlhbG9nLXRhZ3MtbnVtYmVyL2RpYWxvZy10YWdzLW51bWJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVkaXRpb24vc2hhcmVkL2RpYWxvZy10YWdzLW51bWJlci9kaWFsb2ctdGFncy1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlKTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG4gICAgfVxyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG59XG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSAuc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogTagsNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTagsNumberComponent", function() { return DialogTagsNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let DialogTagsNumberComponent = class DialogTagsNumberComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.arrayTags = [];
    }
    ngOnInit() {
        this.arrayTags = [...this.data.tagIds];
        this.formConfirmTagNumber = this.formBuilder.group({});
        this.arrayTags.forEach((field, index) => {
            const control = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            this.formConfirmTagNumber.addControl('tag_' + index, control);
        });
    }
    focusNextElement(index) {
        const nextInput = this.inputs.find((element, i) => i === (index + 1));
        if (nextInput) {
            nextInput.focus();
        }
        else {
            let arrayValues = [];
            this.inputs.map(element => {
                arrayValues = [...arrayValues, element.value];
            });
            this.dialogRef.close(arrayValues);
        }
    }
};
DialogTagsNumberComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInput"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], DialogTagsNumberComponent.prototype, "inputs", void 0);
DialogTagsNumberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-tags-number',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-tags-number.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-tags-number.component.scss */ "./src/app/modules/expedition/shared/dialog-tags-number/dialog-tags-number.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], DialogTagsNumberComponent);



/***/ }),

/***/ "./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\ndiv[mat-dialog-content] {\n  height: calc(100% - 100px);\n}\n\ndiv[mat-dialog-content] .scroll {\n  height: calc(100%);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL3NoYXJlZC9kaWFsb2ctdHJhbnNmZXItdG8tYW5vdGhlci1ib3gvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGV4cGVkaXRpb25cXHNoYXJlZFxcZGlhbG9nLXRyYW5zZmVyLXRvLWFub3RoZXItYm94XFxkaWFsb2ctdHJhbnNmZXItdG8tYW5vdGhlci1ib3guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi9zaGFyZWQvZGlhbG9nLXRyYW5zZmVyLXRvLWFub3RoZXItYm94L2RpYWxvZy10cmFuc2Zlci10by1hbm90aGVyLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVkaXRpb24vc2hhcmVkL2RpYWxvZy10cmFuc2Zlci10by1hbm90aGVyLWJveC9kaWFsb2ctdHJhbnNmZXItdG8tYW5vdGhlci1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlKTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG4gICAgfVxyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdlttYXQtZGlhbG9nLWNvbnRlbnRdIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG59XG5kaXZbbWF0LWRpYWxvZy1jb250ZW50XSAuc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: DialogTransferToAnotherBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTransferToAnotherBoxComponent", function() { return DialogTransferToAnotherBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dialog.model */ "./src/app/models/dialog.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let DialogTransferToAnotherBoxComponent = class DialogTransferToAnotherBoxComponent {
    constructor(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.formTransferToAnotherBox = this.formBuilder.group({
            etiqueta: [{ value: this.data.etiqueta, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            numeroCaixa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]],
        });
    }
    transferToAnotherBox() {
        if (this.formTransferToAnotherBox.valid) {
            const result = {
                etiqueta: this.formTransferToAnotherBox.value.etiqueta,
                numeroCaixa: this.formTransferToAnotherBox.value.numeroCaixa,
                valid: true
            };
            this.dialogRef.close(result);
        }
    }
};
DialogTransferToAnotherBoxComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DialogTransferToAnotherBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-transfer-to-another-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-transfer-to-another-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-transfer-to-another-box.component.scss */ "./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_3__["Dialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], DialogTransferToAnotherBoxComponent);



/***/ }),

/***/ "./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi90ZW1wb3JhcnktYm94LWRldGFpbHMvdGVtcG9yYXJ5LWJveC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TemporaryBoxDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporaryBoxDetailsComponent", function() { return TemporaryBoxDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_modules_expedition_services_temporary_boxes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/expedition/services/temporary-boxes.service */ "./src/app/modules/expedition/services/temporary-boxes.service.ts");





//import { KitService } from '../../reception/services/kit.service';
let TemporaryBoxDetailsComponent = class TemporaryBoxDetailsComponent {
    constructor(activatedRoute, temporaryBoxesService) {
        this.activatedRoute = activatedRoute;
        this.temporaryBoxesService = temporaryBoxesService;
        this.pageSize = 5;
        this.loading = false;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.length = 0;
        this.displayedColumns = ['item', 'tagNumber', 'cpfCnpj', 'agency', 'account'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.kits = [];
        this.pouchs = [];
    }
    ngOnInit() {
        this.numeroCaixaTemporaria = this.activatedRoute.snapshot.paramMap.get('id');
        this.kitsCaixaTemporaria();
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    kitsCaixaTemporaria() {
        this.loading = true;
        // this.kitService.getKitsCaixaTemporaria(this.numeroCaixaTemporaria, this.pageSize.toString(),(this.pageIndex+1).toString()).subscribe(
        // 	response => {
        // 		this.pouchs = response.data;
        // 		this.length = response.length;
        // 		this.pouchs.map((element, index) => {
        // 			element['position'] = index + 1;
        // 		});
        // 		this.dataSource = new MatTableDataSource<TemporaryBox>(this.pouchs);
        // 		this.dataSource.paginator = this.paginator;
        // 		this.loading = false;
        // 	} 
        // );
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.kitsCaixaTemporaria();
    }
};
TemporaryBoxDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_modules_expedition_services_temporary_boxes_service__WEBPACK_IMPORTED_MODULE_4__["TemporaryBoxesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TemporaryBoxDetailsComponent.prototype, "paginator", void 0);
TemporaryBoxDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temporary-box-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./temporary-box-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./temporary-box-details.component.scss */ "./src/app/modules/expedition/temporary-box-details/temporary-box-details.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_modules_expedition_services_temporary_boxes_service__WEBPACK_IMPORTED_MODULE_4__["TemporaryBoxesService"]])
], TemporaryBoxDetailsComponent);



/***/ }),

/***/ "./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".completed {\n  background-color: #c8e6c9;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n\n.small-menu {\n  padding-bottom: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.aproved {\n  background-color: #c8e6c9;\n}\n\n.withReproveds {\n  background-color: #ffcdd2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL3RlbXBvcmFyeS1ib3hlcy9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcZXhwZWRpdGlvblxcdGVtcG9yYXJ5LWJveGVzXFx0ZW1wb3JhcnktYm94ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi90ZW1wb3JhcnktYm94ZXMvdGVtcG9yYXJ5LWJveGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDSSx5QkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi90ZW1wb3JhcnktYm94ZXMvdGVtcG9yYXJ5LWJveGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xyXG59XHJcblxyXG4uZmlyc3QtY29sdW1uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1JTtcclxufVxyXG5cclxuXHJcbi5zbWFsbC1tZW51e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG5cclxuLmFwcm92ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcclxufVxyXG5cclxuLndpdGhSZXByb3ZlZHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcclxufSIsIi5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xufVxuXG4uZmlyc3QtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNSU7XG59XG5cbi5zbWFsbC1tZW51IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmFwcm92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xufVxuXG4ud2l0aFJlcHJvdmVkcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TemporaryBoxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporaryBoxesComponent", function() { return TemporaryBoxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_modules_expedition_services_temporary_boxes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/expedition/services/temporary-boxes.service */ "./src/app/modules/expedition/services/temporary-boxes.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





let TemporaryBoxesComponent = class TemporaryBoxesComponent {
    constructor(temporaryBoxesService) {
        this.temporaryBoxesService = temporaryBoxesService;
        this.displayedColumns = ['item', 'tagNumber', 'classifieds', 'pendings', 'date', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.pouchs = [];
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.etiqueta = '';
        this.loading = false;
    }
    ngOnInit() {
        this.getBoxes();
    }
    getClass(element) {
        if (element.quantidadeAprovados > 0 && element.quantidadePendentes === 0) {
            return 'aproved';
        }
        else if (element.quantidadePendentes > 0) {
            return 'withReproveds';
        }
        return;
    }
    getBoxes(reset = false, exportaXLSX = false) {
        this.pouchs = [];
        this.loading = true;
        if (reset) {
            this.pageIndex = 0;
            this.pageSize = 10;
        }
        this.temporaryBoxesService.getTemporaryBoxes((this.pageIndex + 1).toString(), this.pageSize.toString(), this.etiqueta, exportaXLSX).subscribe(response => {
            if (response.type == "application/octet-stream") {
                var dateToday = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYYMMDDHHmmss');
                var fileName = "caixatemporaria" + "_ " + dateToday + ".xlsx";
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
                this.pouchs = [...response.data];
                this.length = response.length;
                this.pouchs.forEach((element, index) => {
                    element['position'] = index + 1;
                });
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.pouchs);
            }
            this.loading = false;
        }, () => {
            this.loading = false;
        });
    }
    setPageSizeOptions(eventOptions) {
        this.pageIndex = eventOptions.pageIndex;
        this.pageSize = eventOptions.pageSize;
        this.getBoxes();
    }
    resetFilter(event) {
        if (this.etiqueta.length == 0 && (event.key == "Backspace" || event.key == "Delete")) {
            this.getBoxes();
        }
    }
};
TemporaryBoxesComponent.ctorParameters = () => [
    { type: src_app_modules_expedition_services_temporary_boxes_service__WEBPACK_IMPORTED_MODULE_3__["TemporaryBoxesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TemporaryBoxesComponent.prototype, "paginator", void 0);
TemporaryBoxesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-temporary-boxes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./temporary-boxes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./temporary-boxes.component.scss */ "./src/app/modules/expedition/temporary-boxes/temporary-boxes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_modules_expedition_services_temporary_boxes_service__WEBPACK_IMPORTED_MODULE_3__["TemporaryBoxesService"]])
], TemporaryBoxesComponent);



/***/ }),

/***/ "./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aproved {\n  background-color: #c8e6c9;\n}\n\n.withReproveds {\n  background-color: #ffcdd2;\n}\n\n.first-column {\n  text-align: center;\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9leHBlZGl0aW9uL3RyYW5zZmVyLXJlbW92ZS1raXRzL0Q6XFxQcm9qZXRvc1xcYWdlbmRhc1xcSUF0ZWNBZ2VuZGFcXGZyb250ZW5kL3NyY1xcYXBwXFxtb2R1bGVzXFxleHBlZGl0aW9uXFx0cmFuc2Zlci1yZW1vdmUta2l0c1xcdHJhbnNmZXItcmVtb3ZlLWtpdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZXhwZWRpdGlvbi90cmFuc2Zlci1yZW1vdmUta2l0cy90cmFuc2Zlci1yZW1vdmUta2l0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2V4cGVkaXRpb24vdHJhbnNmZXItcmVtb3ZlLWtpdHMvdHJhbnNmZXItcmVtb3ZlLWtpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXByb3ZlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xyXG59XHJcblxyXG4ud2l0aFJlcHJvdmVkcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xyXG59XHJcblxyXG4uZmlyc3QtY29sdW1uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1JTtcclxufSIsIi5hcHJvdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTZjOTtcbn1cblxuLndpdGhSZXByb3ZlZHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xufVxuXG4uZmlyc3QtY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransferRemoveKitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferRemoveKitsComponent", function() { return TransferRemoveKitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/definitive-box.service */ "./src/app/modules/expedition/services/definitive-box.service.ts");
/* harmony import */ var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/dialog-types.enum */ "./src/app/models/dialog-types.enum.ts");
/* harmony import */ var _shared_dialog_transfer_to_another_box_dialog_transfer_to_another_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component */ "./src/app/modules/expedition/shared/dialog-transfer-to-another-box/dialog-transfer-to-another-box.component.ts");









let TransferRemoveKitsComponent = class TransferRemoveKitsComponent {
    constructor(definitiveBoxService, dialog, matSnackBar, activatedRoute) {
        this.definitiveBoxService = definitiveBoxService;
        this.dialog = dialog;
        this.matSnackBar = matSnackBar;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = ['item', 'etiqueta', 'status', 'acoes'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.pageSize = 5;
        this.pageIndex = 0;
        this.kits = [];
    }
    ngOnInit() {
        this.numeroCaixa = this.activatedRoute.snapshot.paramMap.get('id');
        this.getKits();
    }
    changePage(event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getKits();
    }
    filtrarEtiqueta() {
        if (this.etiqueta != null) {
            this.kits = this.kits.filter(element => element.etiqueta == this.etiqueta);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
        }
    }
    filtrarStatus() {
        if (this.status == 'todos') {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
        }
        else {
            this.kits = this.kits.filter(element => element.statusResumido == this.status);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
        }
    }
    keyDownEtiqueta() {
        if (this.etiqueta == '') {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
        }
    }
    getKits() {
        this.loading = true;
        this.definitiveBoxService.getKits(this.numeroCaixa, this.pageSize.toString(), (this.pageIndex + 1).toString()).subscribe(response => {
            this.length = response.length;
            this.kits = [...response.data];
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.kits);
            this.kits.forEach((element, index) => {
                element['position'] = (this.pageSize * this.pageIndex) + (index + 1);
            });
            this.loading = false;
        });
    }
    getClass(element) {
        if (element.statusResumido == 'Aprovado' && !element.capaLote) {
            return 'aproved';
        }
        else if (element.statusResumido == 'Reprovado' && !element.capaLote) {
            return 'withReproveds';
        }
    }
    transferBox(etiqueta) {
        const dialogRef = this.dialog.open(_shared_dialog_transfer_to_another_box_dialog_transfer_to_another_box_component__WEBPACK_IMPORTED_MODULE_7__["DialogTransferToAnotherBoxComponent"], {
            width: '600px',
            data: {
                title: "Transferir para Outra Caixa",
                message: null,
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_6__["DialogTypes"].TRANSFER_TO_ANOTHER_BOX,
                etiqueta: etiqueta,
                acao: "transfer"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == undefined || !result.valid) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, 'Cancelada pelo Usuário');
            }
            else if (result.valid) {
                this.definitiveBoxService.putTrasferirKitCaixaDefinitiva(result.numeroCaixa, etiqueta).subscribe(() => {
                    const menssage = "Transferência da Etiqueta: " + etiqueta + " registrada com sucesso.";
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(this.matSnackBar, menssage);
                    this.getKits();
                }, responseError => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, responseError, responseError.error);
                });
            }
        });
    }
    removeKit(etiqueta) {
        const dialogRef = this.dialog.open(_shared_dialog_transfer_to_another_box_dialog_transfer_to_another_box_component__WEBPACK_IMPORTED_MODULE_7__["DialogTransferToAnotherBoxComponent"], {
            width: '600px',
            data: {
                title: "Confirmar Remoção do Kit",
                message: null,
                type: src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_6__["DialogTypes"].TRANSFER_TO_ANOTHER_BOX,
                etiqueta: etiqueta,
                acao: "remove"
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == undefined || !result.valid) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(this.matSnackBar, 'Cancelada pelo Usuário');
            }
            else if (result.valid) {
                this.definitiveBoxService.putRemoveKitCaixaDefinitiva(result.numeroCaixa, etiqueta).subscribe(() => {
                    const messenge = 'Transferência da Etiqueta: ' + etiqueta + ' registrada com sucesso';
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(this.matSnackBar, messenge);
                    this.getKits();
                }, responseError => {
                    src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(this.matSnackBar, responseError, responseError.error);
                });
            }
        });
    }
};
TransferRemoveKitsComponent.ctorParameters = () => [
    { type: _services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
TransferRemoveKitsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer-remove-kits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transfer-remove-kits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transfer-remove-kits.component.scss */ "./src/app/modules/expedition/transfer-remove-kits/transfer-remove-kits.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_definitive_box_service__WEBPACK_IMPORTED_MODULE_3__["DefinitiveBoxService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], TransferRemoveKitsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-expedition-expedition-module-es2015.js.map