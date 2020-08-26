function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-administrator-administrator-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorAlertaAtividadeAlertaAtividadeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row mt-3\">\r\n        <div class=\"col-lg-12\">\r\n            <nav aria-label=\"breadcrumb\">\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item material-icons\" aria-current=\"page\">add_alert</li>\r\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Alerta de Atividades</li>\r\n                </ol>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n    <section>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h1>Alerta de Atividades</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"jumbotron\">\r\n            <form [formGroup]=\"form\" autocomplete=\"off\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-5\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Operação</mat-label>\r\n                                <mat-select formControlName=\"operacaoId\" #operacaoId (selectionChange)=\"setOperation()\">\r\n                                    <mat-option *ngFor=\"let operation of operations\" [value]=\"operation.operacaoId\">\r\n                                        {{ operation.nome }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-5\">\r\n                        <div class=\"form-group\">\r\n                            <mat-form-field>\r\n                                <mat-label>Atividade</mat-label>\r\n                                <mat-select formControlName=\"atividade\">\r\n                                    <mat-option *ngFor=\"let activity of activities\" [value]=\"activity\">\r\n                                        {{ activity.nome }}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                                <mat-error>Campo Obrigatório</mat-error>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-2 text-right\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"add()\">\r\n                                Cadastrar\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n    <mat-tab-group (selectedTabChange)=\"tipo = ($event.index==0?'atividade':'documento')\">\r\n        <mat-tab label=\"Atividade\"> \r\n            <section *ngIf=\"alertasAtividades.length > 0\">\r\n                <div class=\"row mt-5\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"mat-elevation-z8 mb-3\">\r\n                            <div class=\"containerTable\">\r\n                                <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n        \r\n                                    <ng-container matColumnDef=\"atividade\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left  limite-campo\" width=\"20%\">Atividade</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left limite-campo cursor-pointer\">{{ element.atividade.nome }}\r\n                                        </td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"mensagem\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left limite-campo\" width=\"20%\">Mensagem</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.mensagem}}\" class=\"text-left limite-campo cursor-pointer\">{{ element.mensagem }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"dataInicial\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"10%\">Data Inicial</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            {{ element.dataInicial  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"dataVencimento\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"10%\">Data Vencimento</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            {{ element.dataVencimento  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"editar\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"5%\"></th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            <mat-icon class=\"cursor-pointer\" (click)=\"edit(element)\">edit</mat-icon>\r\n                                        </td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"deletar\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"5%\"></th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            <mat-icon class=\"cursor-pointer\" (click)=\"deletarAlerta(element.id)\">delete\r\n                                            </mat-icon>\r\n                                        </td>\r\n                                    </ng-container>\r\n        \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        \r\n                                    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\r\n                                        class=\"example-element-row\"></tr>\r\n        \r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </mat-tab>\r\n        <mat-tab label=\"Documentos\"> \r\n            <section *ngIf=\"alertasAtividadesDocumentos.length > 0\">\r\n                <div class=\"row mt-5\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"mat-elevation-z8 mb-3\">\r\n                            <div class=\"containerTable\">\r\n                                <table mat-table [dataSource]=\"dataSourceDocumentos\" multiTemplateDataRows>\r\n        \r\n                                    <ng-container matColumnDef=\"atividade\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left limite-campo\" width=\"25%\">Atividade</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.atividade.nome}}\" class=\"text-left limite-campo cursor-pointer\">{{ element.atividade.nome }}\r\n                                        </td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"mensagem\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left limite-campo\" width=\"15%\">Mensagem</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.mensagem}}\" class=\"text-left limite-campo cursor-pointer\">{{ element.mensagem }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"dataInicial\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"10%\">Data Inicial</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            {{ element.dataInicial  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"dataVencimento\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"10%\">Data Vencimento</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            {{ element.dataVencimento  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"documentos\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"20%\">Documentos</th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left text-nowrap\">\r\n                                            {{ element.documento }}</td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"editar\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"5%\"></th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            <mat-icon class=\"cursor-pointer\" (click)=\"edit(element)\">edit</mat-icon>\r\n                                        </td>\r\n                                    </ng-container>\r\n        \r\n                                    <ng-container matColumnDef=\"deletar\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"5%\"></th>\r\n                                        <td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n                                            <mat-icon class=\"cursor-pointer\" (click)=\"deletarDocumento(element.id)\">delete\r\n                                            </mat-icon>\r\n                                        </td>\r\n                                    </ng-container>\r\n        \r\n                                    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsDocumentos\"></tr>\r\n        \r\n                                    <tr mat-row *matRowDef=\"let element; columns: displayedColumnsDocumentos;\"\r\n                                        class=\"example-element-row\"></tr>\r\n        \r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorAlertaAtividadeDialogAtividadeDialogAtividadeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\r\n<h1 mat-dialog-title class=\"mat-dialog-title\">Alerta Atividade</h1>\r\n<div mat-dialog-content>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<h4>{{ data.atividade.nome }}</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Mensagem de Alerta</mat-label>\r\n\t\t\t\t\t\t\t\t\t<textarea matInput formControlName=\"mensagem\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Mensagem de Alerta\"></textarea>\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dataInicial\" formControlName=\"dataInicial\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Data Inicial\" [min]=\"dataAtual\"\r\n\t\t\t\t\t\t\t\t\t\t[max]=\"form.value.dataFinal\">\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataInicial\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker #dataInicial></mat-datepicker>\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput [min]=\"form.value.dataInicial\" [matDatepicker]=\"dataVencimento\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"dataVencimento\" placeholder=\"Data Vencimento\">\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dataVencimento\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker #dataVencimento></mat-datepicker>\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Observação</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"observacao\" placeholder=\"Observação\" />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<form  *ngIf=\"tipo == 'documento'\" [formGroup]=\"formDoc\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-5\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Documento</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"documento\" placeholder=\"Documento\" />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"col-3\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"addDocumento()\"\r\n\t\t\t\t\t\t\t\t[disabled]=\"dataSource.data.length >= 1\">\r\n\t\t\t\t\t\t\t\tAdicionar Documento\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- <div class=\"row\" *ngIf=\"tipo == 'documento'\">\r\n\t\t<div class=\"col-lg-12 mb-2\" *ngIf=\"data.documento\">\r\n\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"documentos\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"first-column text-left\">Documentos</th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"first-column text-left\">{{ element }}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"deletar\">\r\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\"></th>\r\n\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t<mat-icon class=\"cursor-pointer\" (click)=\"deletar(element)\">delete</mat-icon>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n\t\t\t\t\t[ngClass]=\"{'completed' : row.pendings === 0 }\"></tr>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div> -->\r\n<div mat-dialog-actions class=\"wrap-buttons mt-3 text-left\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"fecharModal()\">Cancelar</button>\r\n\t<button type=\"submit\" class=\"btn btn-primary ml-3\" *ngIf=\"this.acao =='new'\" (click)=\"salvar()\"\r\n\t\tcdkFocusInitial>Salvar</button>\r\n\t<button type=\"submit\" class=\"btn btn-primary ml-3\" *ngIf=\"this.acao =='edit'\" (click)=\"atualizar()\"\r\n\t\tcdkFocusInitial>Atualizar</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorMonitorUsersMonitorUsersFilasDialogUsersFilasDialogUsersFilasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tree-top\"></div>\r\n<div><h1 mat-dialog-title class=\"mat-dialog-title\">Filas do Usuário</h1>\r\n\t<div class=\"uniorgAtual\">\r\n\t\t<label>Selecione as filas que deseja atribuir ao usuário</label>\r\n\t\t<span></span>\r\n\t</div>\r\n</div>\r\n<div class=\"tree-content\">\r\n\t<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n\t\t<!-- This is the tree node template for leaf nodes -->\r\n\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n\t\t\t<!-- use a disabled button to provide padding for tree leaf -->\r\n\t\t\t<mat-checkbox class=\"checklist-leaf-node\"\r\n\t\t\t\t[(ngModel)]=\"node.checked\"\r\n                [checked]=\"checklistSelection.isSelected(node)\"\r\n\t\t\t\t(change)=\"todoLeafItemSelectionToggle(node, $event)\">{{node.name}}</mat-checkbox>\r\n\t\t\t\t  \r\n\t\t</mat-tree-node>\r\n\t\t<!-- This is the tree node template for expandable nodes -->\r\n\t\t<mat-tree-node *matTreeNodeDef=\"let node;when: hasChild; index\" matTreeNodePadding>\r\n\t\t\t<i class=\"cursor-pointer\" mat-icon-button matTreeNodeToggle\r\n\t\t\t\t\t[attr.aria-label]=\"'toggle ' + node.id\">\r\n\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t</mat-icon>\r\n\t\t\t</i>\r\n\t\t\t<!-- <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n\t\t\t\t  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n\t\t\t\t  [(ngModel)]=\"node.checked\"\r\n\t\t\t\t  (change)=\"todoItemSelectionToggle(node, $event)\">{{node.name}}</mat-checkbox> -->\r\n\t\t\t\t  {{node.name}}\r\n\t\t</mat-tree-node>\r\n\t</mat-tree>\r\n</div>\r\n<div mat-dialog-actions class=\"wrap-buttons tree-bottom\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"cancel()\">Fechar</button>\r\n\t<button class=\"btn btn-primary\" (click)=\"atualizar()\" cdkFocusInitial>Atualizar</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorMonitorUsersMonitorUsersFilasMonitorUsersFilasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">how_to_reg</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\"><a [routerLink]=\"['','administracao','usuarios']\">Gerenciar Usuários</a></li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Filas</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Edição das Filas do Usuário</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"jumbotron result mb-3\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<label>Usuário</label>\r\n\t\t\t\t<p>{{user?.login}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t<label>Nome Completo</label>\r\n\t\t\t\t<p>{{user?.nomeCompleto}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-6 button-row\">\r\n\t\t\t<button mat-raised-button color=\"danger\"  (click)=\"getFilas()\"><mat-icon>undo</mat-icon> Desfazer</button>\r\n\t\t\t<button mat-raised-button color=\"primary\" (click)=\"postFilas()\"><mat-icon>save</mat-icon> Salvar</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-6 text-right\">\r\n\t\t\t<button mat-raised-button color=\"success\" (click)=\"openModal()\"><mat-icon>playlist_add_check</mat-icon> Associar filas</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"mat-elevation-z8 mt-3 mb-3\">\r\n\t\t<div >\r\n\t\t\t<table>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<th class=\"col-1 text-center\">Prioridade</th>\r\n\t\t\t\t\t<th class=\"col-2\">Grupo Operação</th>\r\n\t\t\t\t\t<th class=\"col-2\">Operação</th>\r\n\t\t\t\t\t<th class=\"col-4\">Atividade</th>\r\n\t\t\t\t\t<th class=\"col-1 text-center\">Somente Backlog</th>\r\n\t\t\t\t\t<th class=\"col-1 text-center\">Excluir</th>\r\n\t\t\t\t\t<th class=\"col-1 text-center\"></th>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody cdkDropList class=\"containerTable\" (cdkDropListDropped)=\"drop($event)\">\r\n\t\t\t\t\t<tr [ngClass]=\"{'bg-new-item': item.novoItem}\" *ngFor=\"let item of checkedList; let idx = index\" class=\"drag-drop-box\" cdkDragBoundary=\".containerTable\" cdkDrag>\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td class=\"col-1 text-center\">{{item.prioridade}}</td>\r\n\t\t\t\t\t\t<td class=\"col-2\">{{item.operacaoGrupo}}</td>\r\n\t\t\t\t\t\t<td class=\"col-2\">{{item.operacao}}</td>\r\n\t\t\t\t\t\t<td class=\"col-4\">{{item.atividade}}</td>\r\n\t\t\t\t\t\t<td class=\"col-1 text-center\">\r\n\t\t\t\t\t\t\t<mat-slide-toggle color=\"warn\" [checked]=\"item.priorizado\" (change)=\"changePriorizado(item, $event.checked)\"></mat-slide-toggle>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"col-1 text-center\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons cursor-pointer text-center\" (click)='deleteAtividade(item.atividadeId)'>delete</i>\t\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"col-1 text-center\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">drag_handle</i>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorMonitorUsersMonitorUsersPerfilMonitorUsersPerfilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">how_to_reg</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item\" aria-current=\"page\"><a\r\n\t\t\t\t\t\t\t[routerLink]=\"['','administracao','usuarios']\">Gerenciar Usuários</a></li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Perfil</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Edição do Perfil do Usuário</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row result mb-3\">\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<label>Usuário</label>\r\n\t\t\t<p>{{user?.login}}</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-3\">\r\n\t\t\t<label>Nome Completo</label>\r\n\t\t\t<p>{{user?.nomeCompleto}}</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<div class=\"jumbotron\">\r\n\t\t\t\t<form [formGroup]=\"formEntity\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Status</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"statusId\" required>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let status of tipoStatus\" [value]=\"status.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ status.label }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Perfil</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select matNativeControl formControlName=\"perfilId\" required>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let perfil of tipoPerfis\" [value]=\"perfil.perfilId\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{ perfil.nome }}</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>Centro de Custo</mat-label>\r\n\t\t\t\t\t\t\t\t\t<mat-select formControlName=\"bus\" multiple>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of user?.bus\" [value]=\"item.id\">{{item.nome}}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-label>E-mail</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"email\" matInput placeholder=\"E-mail\" required />\r\n\t\t\t\t\t\t\t\t\t<mat-error>Campo Obrigatório</mat-error>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-1\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"put()\" type=\"button\" class=\"btn btn-success\">Modificar</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorMonitorUsersMonitorUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loader\"></app-loader>\r\n<div class=\"container-fluid mb-3\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">how_to_reg</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Gerenciar Usuários</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<h1 class=\"mb-3 mt-3\">Gerenciar Usuários</h1>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"offset-lg-8 col-lg-4\">\r\n\t\t\t\t<form [formGroup]=\"formFilter\" autocomplete=\"off\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label class=\"label-filter\">Pesquisar</label>\r\n\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\" class=\"pb-0 form-filter\">\r\n\t\t\t\t\t\t\t\t\t<mat-label>Nome do usuário</mat-label>\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"nome\" matInput \r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Digite parte do nome do usuário\" (ngModelChange)=\"this.filterDebounce.next($event)\" />\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"mat-elevation-z8\">\r\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"login\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef >Login de Acesso</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element;\" >{{ element.login }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"lacre\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Nome</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element;\">{{ element.nomeCompleto }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"perfil\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Perfil</th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element;\" class=\"text-center\">{{ element.perfil }}</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\">Status</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element;\" class=\"text-center\">{{ element.status }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> </th>\r\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element;\" class=\"icones text-center width-action\">\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"[element.id, 'perfil']\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">portrait</i> \r\n\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Perfil</span>\r\n\t\t\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"[element.id, 'filas']\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons blue\">format_list_numbered</i> \r\n\t\t\t\t\t\t\t\t\t<span class=\"d-none d-sm-table-cell\">Filas</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<mat-paginator \r\n\t\t\t\t\t\t[pageSizeOptions]=\"pageSizeOptions\" \r\n\t\t\t\t\t\t[length]=\"length\" \r\n\t\t\t\t\t\t[pageIndex]= \"pageIndex\"\r\n\t\t\t\t\t\t[pageSize]= \"pageSize\"\r\n\t\t\t\t\t\t(page) = \"setPageSizeOptions($event)\"\r\n\t\t\t\t\t></mat-paginator>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorPriorizarSlaDialogPriorizarSlaDialogPriorizarSlaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title class=\"mat-dialog-title\">Lista de Usuários</h1>\r\n<div class=\"row mt-5 modal-custom-content\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"modal-custom-data mt-3\">\r\n\t\t\t<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n\t\t\t<div class=\"col-lg-12 mat-elevation-z8 mb-3\" *ngIf=\"length > 0\">\r\n\t\t\t\t\r\n\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"usuario\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\">Nome</th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.nomeCompleto }}</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-right\"></th>\r\n\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"icones text-right\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"selecionar(element)\">Selecionar</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\r\n\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\">\r\n\t\t\t\t</mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div mat-dialog-actions class=\"wrap-buttons modal-custom-bottom\">\r\n\t<button class=\"btn btn-secondary\" (click)=\"cancel()\">Cancelar</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdministratorPriorizarSlaPriorizarSlaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader [visibility]=\"loading\"></app-loader>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row mt-3\">\r\n\t\t<div class=\"col-lg-12\">\r\n\t\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t\t<ol class=\"breadcrumb\">\r\n\t\t\t\t\t<li class=\"breadcrumb-item material-icons\" aria-current=\"page\">how_to_reg</li>\r\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Priorizar SLA</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<section>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h1>Priorizar SLA</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"jumbotron\">\r\n\t\t\t<form [formGroup]=\"form\" autocomplete=\"off\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- <div class=\"col-lg-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Agência</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"agencia\" matInput mask=\"9999\" matInput placeholder=\"Nº da Agência\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Conta Corrente</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"contaCorrente\" minlength=\"5\" mask=\"9999999999999\" matInput placeholder=\"Conta Corrente\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>CPF/CNPJ</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"documento\" matInput placeholder=\"CPF/CNPJ\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Número do Processo</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"numeroProcesso\" minlength=\"5\" matInput placeholder=\"Número do Processo\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Número da Pasta</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"numeroPasta\" minlength=\"5\" matInput placeholder=\"Número da Pasta\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-label>Etiqueta</mat-label>\r\n\t\t\t\t\t\t\t<input formControlName=\"etiqueta\" matInput placeholder=\"Etiqueta\"  minlength=\"9\" maxlength=\"9\" />\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2 text-center\">\r\n\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" (click)=\"getResult(false)\" >\r\n\t\t\t\t\t\t\tPesquisar\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary small-menu\" mat-button [matMenuTriggerFor]=\"menuExport\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons\">more_vert</i>\r\n\t\t\t\t\t\t\t<mat-menu #menuExport=\"matMenu\">\r\n\t\t\t\t\t\t\t\t<button mat-menu-item class=\"d-flex align-items-center\" (click)=\"getResult(true)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons mr-2\">save_alt</i> Exportar Planilha\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>            \r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length > 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h3 class=\"mb-3\">Resultado da Pesquisa:</h3>\r\n\t\t\t\t<div class=\"mat-elevation-z8 mb-3\">\r\n\t\t\t\t\t<div class=\"containerTable\">\r\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"etiqueta\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"10%\">Etiqueta</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.etiqueta }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"dataRecepcao\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"20%\">Data Recepção</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">\r\n\t\t\t\t\t\t\t\t\t{{ element.dataRecepcao  | date: 'dd/MM/yyyy HH:mm' }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"atividade\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"30%\">Atividade</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.atividade }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"sla\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-center\"  width=\"10%\">SLA</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" \r\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{\r\n\t\t\t\t\t\t\t\t\t\t'text-center': true ,\r\n\t\t\t\t\t\t\t\t\t\t'bg-success': element.atividadeSLA > 4 && element.atividadeSLA <= 15, \r\n\t\t\t\t\t\t\t\t\t\t'bg-alert': element.atividadeSLA > 15 && element.atividadeSLA <= 30,\r\n\t\t\t\t\t\t\t\t\t\t'bg-brown': element.atividadeSLA > 30 && element.atividadeSLA <= 40, \r\n\t\t\t\t\t\t\t\t\t\t'bg-danger' : element.atividadeSLA > 40  }\" \r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t{{ element.atividadeSLA }}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-left\" width=\"20%\">Status</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-left\">{{ element.status }}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"acoes\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef class=\"text-right\" width=\"10%\"></th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let element\" class=\"text-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-2 cursor-pointer text-right\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"openModal(element)\">Priorizar</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\" ></tr>\r\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t<mat-paginator [pageSizeOptions]=\"pageSizeOptions\" [length]=\"length\" [pageIndex]=\"pageIndex\"\r\n\t\t\t\t\t\t\t[pageSize]=\"pageSize\" (page)=\"setPageSizeOptions($event)\"></mat-paginator>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section *ngIf=\"length === 0\">\r\n\t\t<div class=\"row mt-5\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\tNão foram localizados registros no sistema para essa pesquisa\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/administrator/administrator-routes.guard.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/administrator/administrator-routes.guard.ts ***!
    \*********************************************************************/

  /*! exports provided: AdministratorRoutesGuard */

  /***/
  function srcAppModulesAdministratorAdministratorRoutesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministratorRoutesGuard", function () {
      return AdministratorRoutesGuard;
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

    var AdministratorRoutesGuard =
    /*#__PURE__*/
    function () {
      function AdministratorRoutesGuard(authenticationService) {
        _classCallCheck(this, AdministratorRoutesGuard);

        this.authenticationService = authenticationService;
      }

      _createClass(AdministratorRoutesGuard, [{
        key: "canActivate",
        value: function canActivate(event) {
          return this.authenticationService.isPermitted("administracao", event.url[0].path);
        }
      }]);

      return AdministratorRoutesGuard;
    }();

    AdministratorRoutesGuard.ctorParameters = function () {
      return [{
        type: _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]
      }];
    };

    AdministratorRoutesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]])], AdministratorRoutesGuard);
    /***/
  },

  /***/
  "./src/app/modules/administrator/administrator-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/administrator/administrator-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AdministratorRoutingModule */

  /***/
  function srcAppModulesAdministratorAdministratorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministratorRoutingModule", function () {
      return AdministratorRoutingModule;
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


    var _monitor_users_monitor_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./monitor-users/monitor-users.component */
    "./src/app/modules/administrator/monitor-users/monitor-users.component.ts");
    /* harmony import */


    var _monitor_users_monitor_users_perfil_monitor_users_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./monitor-users/monitor-users-perfil/monitor-users-perfil.component */
    "./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.ts");
    /* harmony import */


    var _monitor_users_monitor_users_filas_monitor_users_filas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./monitor-users/monitor-users-filas/monitor-users-filas.component */
    "./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.ts");
    /* harmony import */


    var _administrator_routes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./administrator-routes.guard */
    "./src/app/modules/administrator/administrator-routes.guard.ts");
    /* harmony import */


    var _alerta_atividade_alerta_atividade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./alerta-atividade/alerta-atividade.component */
    "./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.ts");
    /* harmony import */


    var _priorizar_sla_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./priorizar-sla/priorizar-sla.component */
    "./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.ts");

    var routes = [{
      path: 'usuarios',
      component: _monitor_users_monitor_users_component__WEBPACK_IMPORTED_MODULE_3__["MonitorUsersComponent"],
      canActivate: [_administrator_routes_guard__WEBPACK_IMPORTED_MODULE_6__["AdministratorRoutesGuard"]]
    }, {
      path: 'usuarios/:id/perfil',
      component: _monitor_users_monitor_users_perfil_monitor_users_perfil_component__WEBPACK_IMPORTED_MODULE_4__["MonitorUsersPerfilComponent"],
      canActivate: [_administrator_routes_guard__WEBPACK_IMPORTED_MODULE_6__["AdministratorRoutesGuard"]]
    }, {
      path: 'usuarios/:id/filas',
      component: _monitor_users_monitor_users_filas_monitor_users_filas_component__WEBPACK_IMPORTED_MODULE_5__["MonitorUsersFilasComponent"],
      canActivate: [_administrator_routes_guard__WEBPACK_IMPORTED_MODULE_6__["AdministratorRoutesGuard"]]
    }, {
      path: 'priorizar-sla',
      component: _priorizar_sla_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_8__["PriorizarSlaComponent"],
      canActivate: [_administrator_routes_guard__WEBPACK_IMPORTED_MODULE_6__["AdministratorRoutesGuard"]]
    }, {
      path: 'alerta-atividade',
      component: _alerta_atividade_alerta_atividade_component__WEBPACK_IMPORTED_MODULE_7__["AlertaAtividadeComponent"],
      canActivate: [_administrator_routes_guard__WEBPACK_IMPORTED_MODULE_6__["AdministratorRoutesGuard"]]
    }];

    var AdministratorRoutingModule = function AdministratorRoutingModule() {
      _classCallCheck(this, AdministratorRoutingModule);
    };

    AdministratorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdministratorRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/administrator/administrator.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/administrator/administrator.module.ts ***!
    \***************************************************************/

  /*! exports provided: AdministratorModule */

  /***/
  function srcAppModulesAdministratorAdministratorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdministratorModule", function () {
      return AdministratorModule;
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


    var _administrator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./administrator-routing.module */
    "./src/app/modules/administrator/administrator-routing.module.ts");
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


    var _monitor_users_monitor_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./monitor-users/monitor-users.component */
    "./src/app/modules/administrator/monitor-users/monitor-users.component.ts");
    /* harmony import */


    var _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/monitor-users.service */
    "./src/app/modules/administrator/services/monitor-users.service.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var _monitor_users_monitor_users_perfil_monitor_users_perfil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./monitor-users/monitor-users-perfil/monitor-users-perfil.component */
    "./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.ts");
    /* harmony import */


    var _monitor_users_monitor_users_filas_monitor_users_filas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./monitor-users/monitor-users-filas/monitor-users-filas.component */
    "./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.ts");
    /* harmony import */


    var _monitor_users_monitor_users_filas_dialog_users_filas_dialog_users_filas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component */
    "./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/dateAdapter/customDate.adapter */
    "./src/app/shared/dateAdapter/customDate.adapter.ts");
    /* harmony import */


    var src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/dateAdapter/my-date-formats.const */
    "./src/app/shared/dateAdapter/my-date-formats.const.ts");
    /* harmony import */


    var _alerta_atividade_alerta_atividade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./alerta-atividade/alerta-atividade.component */
    "./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.ts");
    /* harmony import */


    var _services_alerta_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/alerta.service */
    "./src/app/modules/administrator/services/alerta.service.ts");
    /* harmony import */


    var _alerta_atividade_dialog_atividade_dialog_atividade_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./alerta-atividade/dialog-atividade/dialog-atividade.component */
    "./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.ts");
    /* harmony import */


    var _priorizar_sla_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./priorizar-sla/priorizar-sla.component */
    "./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.ts");
    /* harmony import */


    var _priorizar_sla_dialog_priorizar_sla_dialog_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component */
    "./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.ts");

    var AdministratorModule = function AdministratorModule() {
      _classCallCheck(this, AdministratorModule);
    };

    AdministratorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_monitor_users_monitor_users_component__WEBPACK_IMPORTED_MODULE_7__["MonitorUsersComponent"], _monitor_users_monitor_users_perfil_monitor_users_perfil_component__WEBPACK_IMPORTED_MODULE_10__["MonitorUsersPerfilComponent"], _monitor_users_monitor_users_filas_monitor_users_filas_component__WEBPACK_IMPORTED_MODULE_11__["MonitorUsersFilasComponent"], _monitor_users_monitor_users_filas_dialog_users_filas_dialog_users_filas_component__WEBPACK_IMPORTED_MODULE_12__["DialogUsersFilasomponent"], _alerta_atividade_alerta_atividade_component__WEBPACK_IMPORTED_MODULE_16__["AlertaAtividadeComponent"], _alerta_atividade_dialog_atividade_dialog_atividade_component__WEBPACK_IMPORTED_MODULE_18__["DialogAtividadeComponent"], _priorizar_sla_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_19__["PriorizarSlaComponent"], _priorizar_sla_dialog_priorizar_sla_dialog_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_20__["DialogPriorizarSlaComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _administrator_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdministratorRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"].forRoot(), _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"]],
      exports: [],
      providers: [_services_monitor_users_service__WEBPACK_IMPORTED_MODULE_8__["MonitorUsersService"], _services_alerta_service__WEBPACK_IMPORTED_MODULE_17__["AlertaService"], {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
        useClass: src_app_shared_dateAdapter_customDate_adapter__WEBPACK_IMPORTED_MODULE_14__["CustomDateAdapter"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"],
        useValue: src_app_shared_dateAdapter_my_date_formats_const__WEBPACK_IMPORTED_MODULE_15__["MY_DATE_FORMATS"]
      }],
      entryComponents: [_monitor_users_monitor_users_filas_dialog_users_filas_dialog_users_filas_component__WEBPACK_IMPORTED_MODULE_12__["DialogUsersFilasomponent"], _alerta_atividade_dialog_atividade_dialog_atividade_component__WEBPACK_IMPORTED_MODULE_18__["DialogAtividadeComponent"], _priorizar_sla_dialog_priorizar_sla_dialog_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_20__["DialogPriorizarSlaComponent"]]
    })], AdministratorModule);
    /***/
  },

  /***/
  "./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorAlertaAtividadeAlertaAtividadeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".limite-campo {\n  max-width: 1ch;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL2FsZXJ0YS1hdGl2aWRhZGUvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluaXN0cmF0b3JcXGFsZXJ0YS1hdGl2aWRhZGVcXGFsZXJ0YS1hdGl2aWRhZGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9hbGVydGEtYXRpdmlkYWRlL2FsZXJ0YS1hdGl2aWRhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluaXN0cmF0b3IvYWxlcnRhLWF0aXZpZGFkZS9hbGVydGEtYXRpdmlkYWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbWl0ZS1jYW1wbyB7XHJcbiAgICBtYXgtd2lkdGg6IDFjaDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0iLCIubGltaXRlLWNhbXBvIHtcbiAgbWF4LXdpZHRoOiAxY2g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AlertaAtividadeComponent */

  /***/
  function srcAppModulesAdministratorAlertaAtividadeAlertaAtividadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertaAtividadeComponent", function () {
      return AlertaAtividadeComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var _services_alerta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/alerta.service */
    "./src/app/modules/administrator/services/alerta.service.ts");
    /* harmony import */


    var _dialog_atividade_dialog_atividade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dialog-atividade/dialog-atividade.component */
    "./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.ts");
    /* harmony import */


    var src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/models/dialog.model */
    "./src/app/models/dialog.model.ts");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/models/dialog-types.enum */
    "./src/app/models/dialog-types.enum.ts");

    var AlertaAtividadeComponent =
    /*#__PURE__*/
    function () {
      function AlertaAtividadeComponent(formBuilder, operationService, alertaService, matSnackBar, dialog) {
        _classCallCheck(this, AlertaAtividadeComponent);

        this.formBuilder = formBuilder;
        this.operationService = operationService;
        this.alertaService = alertaService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog; //@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

        this.loading = false;
        this.operations = [];
        this.activities = [];
        this.displayedColumns = ['atividade', 'mensagem', 'dataInicial', 'dataVencimento', 'editar', 'deletar'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumnsDocumentos = ['atividade', 'mensagem', 'dataInicial', 'dataVencimento', 'documentos', 'editar', 'deletar'];
        this.dataSourceDocumentos = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.alertasAtividades = [];
        this.alertasAtividadesDocumentos = [];
        this.tipo = 'atividade';
      }

      _createClass(AlertaAtividadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            operacaoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            atividade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.operacoes();
          this.getAlertas();
          this.getAlertasDocumentos();
        }
      }, {
        key: "operacoes",
        value: function operacoes() {
          var _this = this;

          this.loading = true;
          this.operationService.getOperations(true).subscribe(function (response) {
            _this.operations = _toConsumableArray(response.data);
            _this.loading = false;
          }, function () {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this.matSnackBar, null, "Erro ao obter a lista de Operações e Atividades. Se o erro persistir, entre em contato com o suporte.");
            _this.loading = false;
          });
        }
      }, {
        key: "setOperation",
        value: function setOperation() {
          var _this2 = this;

          var operation = this.operations.find(function (el) {
            return el.operacaoId === _this2.form.value.operacaoId;
          });
          this.activities = _toConsumableArray(operation.atividades); //this.form.get('atividade').enable();
        }
      }, {
        key: "getAlertas",
        value: function getAlertas() {
          var _this3 = this;

          this.loading = true;
          this.alertaService.get().subscribe(function (response) {
            _this3.alertasAtividades = _toConsumableArray(response.data);
            _this3.dataSource.data = _this3.alertasAtividades;
            _this3.loading = false;
          }, function () {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this3.matSnackBar, null, "Erro ao obter a lista de Alertas");
            _this3.loading = false;
          });
        }
      }, {
        key: "getAlertasDocumentos",
        value: function getAlertasDocumentos() {
          var _this4 = this;

          this.loading = true;
          this.alertaService.getDocumentos().subscribe(function (response) {
            _this4.alertasAtividadesDocumentos = _toConsumableArray(response.data);
            _this4.dataSourceDocumentos.data = _this4.alertasAtividadesDocumentos;
            _this4.loading = false;
          }, function () {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this4.matSnackBar, null, "Erro ao obter a lista de Alertas");
            _this4.loading = false;
          });
        }
      }, {
        key: "openModal",
        value: function openModal(alertaAtividade, acao) {
          var _this5 = this;

          var dialogRef = this.dialog.open(_dialog_atividade_dialog_atividade_component__WEBPACK_IMPORTED_MODULE_7__["DialogAtividadeComponent"], {
            width: '80%',
            maxHeight: '100%',
            height: '90%',
            data: {
              alerta: alertaAtividade,
              tipo: this.tipo,
              acao: acao
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined) {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showAlert(_this5.matSnackBar, "Cancelada pelo usuário!");
            } else if (result == 'atividade') {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(_this5.matSnackBar, "Alerta cadastrado com Sucesso!");

              _this5.getAlertas();
            } else if (result == 'documento') {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(_this5.matSnackBar, "Alerta Documentos cadastrado com Sucesso!");

              _this5.getAlertasDocumentos();
            }
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this6 = this;

          if (this.form.valid) {
            var check = false;

            if (this.tipo == 'atividade') {
              check = this.alertasAtividades.findIndex(function (element) {
                return element.atividade.id == _this6.form.value.atividade.id;
              }) < 0;
            } else if (this.tipo == 'documento') {
              //check = (this.alertasAtividadesDocumentos.findIndex(element => element.atividade.id == this.form.value.atividade.id) < 0);
              check = true;
            }

            if (check) {
              var alerta = {
                dataInicial: null,
                dataVencimento: null,
                mensagem: null,
                documento: null,
                atividade: {
                  id: this.form.value.atividade.id,
                  nome: this.form.value.atividade.nome
                }
              };
              this.openModal(alerta, 'new');
            } else {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showAlert(this.matSnackBar, "O alerta para essa atividade já foi cadastrado", null);
            }
          }
        }
      }, {
        key: "edit",
        value: function edit(alertaAtividade) {
          this.openModal(alertaAtividade, 'edit');
        }
      }, {
        key: "deletarAlerta",
        value: function deletarAlerta(id) {
          var _this7 = this;

          var dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_8__["Dialog"]();
          dialog.title = "Confirmar Exclusão";
          dialog.message = "Você tem certeza que deseja excluir o Alerta adicionado?";
          dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_10__["DialogTypes"].CONFIRMATION;
          this.showMessage(dialog);
          this.dialogReference.afterClosed().subscribe(function (response) {
            if (response === 'ok') {
              _this7.alertaService.delete(id).subscribe(function () {
                _this7.getAlertas();
              }, function (error) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this7.matSnackBar, error);
              });
            }
          });
        }
      }, {
        key: "deletarDocumento",
        value: function deletarDocumento(id) {
          var _this8 = this;

          var dialog = new src_app_models_dialog_model__WEBPACK_IMPORTED_MODULE_8__["Dialog"]();
          dialog.title = "Confirmar Exclusão";
          dialog.message = "Você tem certeza que deseja excluir o Alerta adicionado?";
          dialog.type = src_app_models_dialog_types_enum__WEBPACK_IMPORTED_MODULE_10__["DialogTypes"].CONFIRMATION;
          this.showMessage(dialog);
          this.dialogReference.afterClosed().subscribe(function (response) {
            if (response === 'ok') {
              _this8.alertaService.deleteDocumento(id).subscribe(function () {
                _this8.getAlertasDocumentos();
              }, function (error) {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this8.matSnackBar, error);
              });
            }
          });
        }
      }, {
        key: "showMessage",
        value: function showMessage(dialog) {
          this.dialogReference = this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], {
            width: '600px',
            data: {
              title: dialog.title,
              message: dialog.message,
              type: dialog.type
            }
          });
        }
      }]);

      return AlertaAtividadeComponent;
    }();

    AlertaAtividadeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"]
      }, {
        type: _services_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    AlertaAtividadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alerta-atividade',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alerta-atividade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alerta-atividade.component.scss */
      "./src/app/modules/administrator/alerta-atividade/alerta-atividade.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_operation_service__WEBPACK_IMPORTED_MODULE_3__["OperationService"], _services_alerta_service__WEBPACK_IMPORTED_MODULE_6__["AlertaService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], AlertaAtividadeComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorAlertaAtividadeDialogAtividadeDialogAtividadeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.modal-custom-content .modal-custom-data {\n  position: absolute;\n  top: 420px;\n  left: 20px;\n  right: 20px;\n  bottom: 80px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL2FsZXJ0YS1hdGl2aWRhZGUvZGlhbG9nLWF0aXZpZGFkZS9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5pc3RyYXRvclxcYWxlcnRhLWF0aXZpZGFkZVxcZGlhbG9nLWF0aXZpZGFkZVxcZGlhbG9nLWF0aXZpZGFkZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL2FsZXJ0YS1hdGl2aWRhZGUvZGlhbG9nLWF0aXZpZGFkZS9kaWFsb2ctYXRpdmlkYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL2FsZXJ0YS1hdGl2aWRhZGUvZGlhbG9nLWF0aXZpZGFkZS9kaWFsb2ctYXRpdmlkYWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9tb2RhbCBjdXN0b21cclxuaDEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1vZGFsLWN1c3RvbS1jb250ZW50IC5tb2RhbC1jdXN0b20tZGF0YXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA0MjBweDtcclxuXHRsZWZ0OiAyMHB4O1xyXG5cdHJpZ2h0OiAyMHB4O1xyXG5cdGJvdHRvbTogODBweDtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuXHQvLyBtYXJnaW46IDBweCA0cHg7XHJcblx0Ly8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xyXG59IiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb2RhbC1jdXN0b20tY29udGVudCAubW9kYWwtY3VzdG9tLWRhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDgwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: DialogAtividadeComponent */

  /***/
  function srcAppModulesAdministratorAlertaAtividadeDialogAtividadeDialogAtividadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogAtividadeComponent", function () {
      return DialogAtividadeComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_alerta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/alerta.service */
    "./src/app/modules/administrator/services/alerta.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_validators_form_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/validators/form-validators */
    "./src/app/shared/validators/form-validators.ts");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");

    var DialogAtividadeComponent =
    /*#__PURE__*/
    function () {
      function DialogAtividadeComponent(dialogRef, modalData, alertaService, formBuilder, matSnackBar) {
        _classCallCheck(this, DialogAtividadeComponent);

        this.dialogRef = dialogRef;
        this.modalData = modalData;
        this.alertaService = alertaService;
        this.formBuilder = formBuilder;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['documentos', 'deletar'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.loading = false;
        this.dataAtual = new Date();
      }

      _createClass(DialogAtividadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.data = this.modalData.alerta;
          this.tipo = this.modalData.tipo;
          this.acao = this.modalData.acao;
          this.form = this.formBuilder.group({
            mensagem: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(50)]],
            dataInicial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            dataVencimento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            observacao: ['']
          });
          this.formDoc = this.formBuilder.group({
            documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_app_shared_validators_form_validators__WEBPACK_IMPORTED_MODULE_5__["FormValidator"].documento]]
          });

          if (this.data.mensagem != undefined || this.data.mensagem != null) {
            this.editar();
          }
        }
      }, {
        key: "editar",
        value: function editar() {
          this.form.get('mensagem').setValue(this.data.mensagem);
          this.form.get('dataInicial').setValue(this.data.dataInicial);
          this.form.get('dataVencimento').setValue(this.data.dataVencimento);
          this.form.get('observacao').setValue(this.data.observacao);

          if (this.tipo == 'documento') {
            this.formDoc.get("documento").setValue(this.data.documento); //this.dataSource = new MatTableDataSource<any>([this.data.documento]);
          }
        }
      }, {
        key: "addDocumento",
        value: function addDocumento() {
          if (this.formDoc.valid) {
            //this.data.documento.push(this.formDoc.value.documento);
            this.data.documento = this.formDoc.value.documento; //this.dataSource = new MatTableDataSource<any>([this.data.documento]);
          }
        }
      }, {
        key: "salvar",
        value: function salvar() {
          if (this.form.valid) {
            if (this.tipo == 'atividade') {
              this.postAlerta();
            } else if (this.tipo == 'documento') {
              if (this.formDoc.valid) {
                this.postAlertaDocumentos();
              } else {
                src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, 'Adicione um documento');
              }
            }
          }
        }
      }, {
        key: "atualizar",
        value: function atualizar() {
          if (this.tipo == 'atividade') {
            this.putAlerta();
          } else if (this.tipo == 'documento') {
            if (this.formDoc.valid) {
              this.putAlertaDocumentos();
            } else {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(this.matSnackBar, null, 'Adicione um documento');
            }
          }
        }
      }, {
        key: "postAlerta",
        value: function postAlerta() {
          var _this9 = this;

          this.loading = true;
          var form = this.form.value;
          var dataInicial = new Date(form.dataInicial);
          var dataVencimento = new Date(form.dataVencimento);
          var alerta = {
            dataInicial: dataInicial,
            dataVencimento: dataVencimento,
            atividadeId: this.data.atividade.id,
            tipoAlertaId: 1,
            mensagem: form.mensagem,
            observacao: form.observacao
          };
          this.alertaService.post(alerta).subscribe(function () {
            _this9.loading = false;

            _this9.fecharModal(_this9.tipo);
          }, function (error) {
            _this9.loading = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(_this9.matSnackBar, error);
          });
        }
      }, {
        key: "putAlerta",
        value: function putAlerta() {
          var _this10 = this;

          this.loading = true;
          var form = this.form.value;
          var dataInicial = new Date(form.dataInicial);
          var dataVencimento = new Date(form.dataVencimento);
          var alerta = {
            id: this.data.id,
            dataInicial: dataInicial,
            dataVencimento: dataVencimento,
            atividadeId: this.data.atividade.id,
            mensagem: form.mensagem,
            observacao: form.observacao,
            tipoAlertaId: this.data.tipoAlertaId
          };
          this.alertaService.put(alerta).subscribe(function () {
            _this10.loading = false;

            _this10.fecharModal(_this10.tipo);
          }, function (error) {
            _this10.loading = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(_this10.matSnackBar, error);
          });
        }
      }, {
        key: "postAlertaDocumentos",
        value: function postAlertaDocumentos() {
          var _this11 = this;

          this.loading = true;
          var form = this.form.value;
          var dataInicial = new Date(form.dataInicial);
          var dataVencimento = new Date(form.dataVencimento);
          var alerta = {
            dataInicial: dataInicial,
            dataVencimento: dataVencimento,
            atividadeId: this.data.atividade.id,
            tipoAlertaId: 1,
            mensagem: form.mensagem,
            observacao: form.observacao,
            documento: this.formDoc.value.documento
          };
          this.alertaService.postDocumentos(alerta).subscribe(function () {
            _this11.loading = false;

            _this11.fecharModal(_this11.tipo);
          }, function (error) {
            _this11.loading = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(_this11.matSnackBar, error);
          });
        }
      }, {
        key: "putAlertaDocumentos",
        value: function putAlertaDocumentos() {
          var _this12 = this;

          this.loading = true;
          var form = this.form.value;
          var dataInicial = new Date(form.dataInicial);
          var dataVencimento = new Date(form.dataVencimento);
          var alerta = {
            id: this.data.id,
            dataInicial: dataInicial,
            dataVencimento: dataVencimento,
            atividadeId: this.data.atividade.id,
            mensagem: form.mensagem,
            observacao: form.observacao,
            tipoAlertaId: this.data.tipoAlertaId,
            documento: this.formDoc.value.documento
          };
          this.alertaService.putDocumentos(alerta).subscribe(function () {
            _this12.loading = false;

            _this12.fecharModal(_this12.tipo);
          }, function (error) {
            _this12.loading = false;
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"].showError(_this12.matSnackBar, error);
          });
        }
      }, {
        key: "fecharModal",
        value: function fecharModal(status) {
          this.dialogRef.close(status);
        }
      }, {
        key: "deletar",
        value: function deletar(documento) {
          //this.data.documento = this.data.documento.filter(element => element != documento);
          this.data.documento = null;
          this.dataSource.data = [];
        }
      }]);

      return DialogAtividadeComponent;
    }();

    DialogAtividadeComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_alerta_service__WEBPACK_IMPORTED_MODULE_3__["AlertaService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    DialogAtividadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-atividade',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-atividade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-atividade.component.scss */
      "./src/app/modules/administrator/alerta-atividade/dialog-atividade/dialog-atividade.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_alerta_service__WEBPACK_IMPORTED_MODULE_3__["AlertaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], DialogAtividadeComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.scss":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.scss ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersFilasDialogUsersFilasDialogUsersFilasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  margin-top: 20px;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL21vbml0b3ItdXNlcnMvbW9uaXRvci11c2Vycy1maWxhcy9kaWFsb2ctdXNlcnMtZmlsYXMvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluaXN0cmF0b3JcXG1vbml0b3ItdXNlcnNcXG1vbml0b3ItdXNlcnMtZmlsYXNcXGRpYWxvZy11c2Vycy1maWxhc1xcZGlhbG9nLXVzZXJzLWZpbGFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluaXN0cmF0b3IvbW9uaXRvci11c2Vycy9tb25pdG9yLXVzZXJzLWZpbGFzL2RpYWxvZy11c2Vycy1maWxhcy9kaWFsb2ctdXNlcnMtZmlsYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9tb25pdG9yLXVzZXJzL21vbml0b3ItdXNlcnMtZmlsYXMvZGlhbG9nLXVzZXJzLWZpbGFzL2RpYWxvZy11c2Vycy1maWxhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuLnRyZWUtdG9we1xyXG4gICBcclxufVxyXG5cclxuLnRyZWUtY29udGVudHtcclxuXHJcbn1cclxuXHJcbi50cmVlLWJvdHRvbSB7XHJcbiAgICBcclxufVxyXG5cclxuIiwiaDEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi53cmFwLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLndyYXAtYnV0dG9ucyBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: DialogUsersFilasomponent */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersFilasDialogUsersFilasDialogUsersFilasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogUsersFilasomponent", function () {
      return DialogUsersFilasomponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/tree.model */
    "./src/app/models/tree.model.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");

    var DialogUsersFilasomponent =
    /*#__PURE__*/
    function () {
      function DialogUsersFilasomponent(dialogRef, data) {
        _classCallCheck(this, DialogUsersFilasomponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);

        this._transformer = function (node, level) {
          return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
            checked: node.checked,
            id: node.id,
            prioridade: node.prioridade,
            fila: node.fila,
            filaId: node.filaId,
            atividadeId: node.atividadeId,
            priorizado: node.priorizado
          };
        };

        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](function (node) {
          return node.level;
        }, function (node) {
          return node.expandable;
        });
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this._transformer, function (node) {
          return node.level;
        }, function (node) {
          return node.expandable;
        }, function (node) {
          return node.children;
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true
        /* multiple */
        );

        this.hasChild = function (_, node) {
          return node.expandable;
        };

        this.getLevel = function (node) {
          return node.level;
        };

        this.hasNoContent = function (_, _nodeData) {
          return _nodeData.item === '';
        };

        this.dataSource.data = data;
      }

      _createClass(DialogUsersFilasomponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "todoItemSelectionToggle",
        value: function todoItemSelectionToggle(node, event) {
          var _this$checklistSelect,
              _this$checklistSelect2,
              _this13 = this;

          this.checklistSelection.toggle(node);
          var descendants = this.treeControl.getDescendants(node);
          this.checklistSelection.isSelected(node) ? (_this$checklistSelect = this.checklistSelection).select.apply(_this$checklistSelect, _toConsumableArray(descendants)) : (_this$checklistSelect2 = this.checklistSelection).deselect.apply(_this$checklistSelect2, _toConsumableArray(descendants)); // Force update for the parent

          descendants.forEach(function (child) {
            return _this13.checklistSelection.isSelected(child);
          });
          this.checkAllParentsSelection(node);
          this.atualizaGrupo(event, node);
        }
      }, {
        key: "checkAllParentsSelection",
        value: function checkAllParentsSelection(node) {
          var parent = this.getParentNode(node);

          while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
          }
        }
        /* Get the parent node of a node */

      }, {
        key: "getParentNode",
        value: function getParentNode(node) {
          var currentLevel = this.getLevel(node);

          if (currentLevel < 1) {
            return null;
          }

          var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

          for (var i = startIndex; i >= 0; i--) {
            var currentNode = this.treeControl.dataNodes[i];

            if (this.getLevel(currentNode) < currentLevel) {
              return currentNode;
            }
          }

          return null;
        }
        /** Whether all the descendants of the node are selected. */

      }, {
        key: "descendantsAllSelected",
        value: function descendantsAllSelected(node) {
          var _this14 = this;

          var descendants = this.treeControl.getDescendants(node);
          var descAllSelected = descendants.every(function (child) {
            return _this14.checklistSelection.isSelected(child);
          });
          return descAllSelected;
        }
        /** Check root node checked state and change it accordingly */

      }, {
        key: "checkRootNodeSelection",
        value: function checkRootNodeSelection(node) {
          var _this15 = this;

          var nodeSelected = this.checklistSelection.isSelected(node);
          var descendants = this.treeControl.getDescendants(node);
          var descAllSelected = descendants.every(function (child) {
            return _this15.checklistSelection.isSelected(child);
          });

          if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
          } else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
          }
        }
        /** Whether part of the descendants are selected */

      }, {
        key: "descendantsPartiallySelected",
        value: function descendantsPartiallySelected(node) {
          var _this16 = this;

          var descendants = this.treeControl.getDescendants(node);
          var result = descendants.some(function (child) {
            return _this16.checklistSelection.isSelected(child);
          });
          return result && !this.descendantsAllSelected(node);
        }
        /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */

      }, {
        key: "todoLeafItemSelectionToggle",
        value: function todoLeafItemSelectionToggle(node, event) {
          this.checklistSelection.toggle(node);
          this.checkAllParentsSelection(node);
        }
      }, {
        key: "atualizar",
        value: function atualizar() {
          this.dialogRef.close(this.treeControl);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }, {
        key: "atualizaGrupo",
        value: function atualizaGrupo(event, node) {
          if (node.level == 0) {
            this.dataSource.data.forEach(function (item) {
              if (item.id == node.id) {
                item.children.forEach(function (i) {
                  i.checked = event.checked;
                });
              }
            });
          } else if (node.level == 1) {
            this.dataSource.data.forEach(function (item) {
              item.children.forEach(function (it) {
                if (it.id == node.id) {
                  it.children.forEach(function (i) {
                    i.checked = event.checked;
                  });
                }
              });
            });
          } //quando submeter


          this.data = this.dataSource.data; // Notify the change.

          this.dataChange.next(this.data);
        }
      }, {
        key: "atualizaNivel2",
        value: function atualizaNivel2(event, node) {
          if (node.level == 1) {
            this.dataSource.data.forEach(function (a) {
              if (a.id == node.id) {
                a.children.forEach(function (i) {
                  i.checked = event.checked;
                });
              }
            });
          }

          this.dataChange.next(this.dados);
        }
      }, {
        key: "atualizaDataLevel",
        value: function atualizaDataLevel() {}
      }, {
        key: "buildFileTree",
        value: function buildFileTree(obj, level) {
          var _this17 = this;

          return Object.keys(obj).reduce(function (accumulator, key) {
            var value = obj[key];
            var node = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_5__["Tree"]();
            node.item = key;

            if (value != null) {
              if (typeof value === 'object') {
                node.children = _this17.buildFileTree(value, level + 1);
              } else {
                node.item = value;
              }
            }

            return accumulator.concat(node);
          }, []);
        }
      }, {
        key: "dados",
        get: function get() {
          return this.dataChange.value;
        }
      }]);

      return DialogUsersFilasomponent;
    }();

    DialogUsersFilasomponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogUsersFilasomponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dialog-users-filas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-users-filas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-users-filas.component.scss */
      "./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.scss")).default]
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], DialogUsersFilasomponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersFilasMonitorUsersFilasComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".result {\n  margin-top: 30px;\n}\n.result label {\n  font-weight: bold;\n}\n.label-bold {\n  font-weight: bold;\n}\n.area-prioridade {\n  width: 5%;\n}\nh1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n.wrap-buttons {\n  margin-top: 20px;\n}\n.wrap-buttons button {\n  margin-right: 15px;\n}\n.tree-content .mat-tree {\n  display: block;\n  height: 500px;\n  background-color: #e9ecef;\n  overflow: auto;\n  padding: 10px;\n  box-shadow: inset 0 0 2px #000000;\n}\n.button-row button {\n  margin-right: 8px;\n}\n.mat-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.mat-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.mat-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\ntable {\n  font-size: 0.9rem;\n}\ntable thead {\n  display: -webkit-box;\n  display: flex;\n}\ntable th {\n  background-color: #3D6E90;\n  color: #ffffff;\n  padding: 10px;\n  font-weight: normal;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\ntable tr {\n  display: -webkit-box;\n  display: flex;\n}\ntable td {\n  padding: 10px;\n  border-bottom: 1px solid #DDD;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\ntable tr:nth-child(odd) {\n  background-color: #eceff1;\n}\n.drag-drop-box {\n  color: rgba(0, 0, 0, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n}\n.drag-drop-box td {\n  padding: 10px;\n  border-bottom: 1px solid #DDD;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.drag-drop-box:last-child {\n  border: none;\n}\n.containerTable.cdk-drop-list-dragging .drag-drop-box:not(.cdk-drag-placeholder) {\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL21vbml0b3ItdXNlcnMvbW9uaXRvci11c2Vycy1maWxhcy9EOlxcUHJvamV0b3NcXGFnZW5kYXNcXElBdGVjQWdlbmRhXFxmcm9udGVuZC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5pc3RyYXRvclxcbW9uaXRvci11c2Vyc1xcbW9uaXRvci11c2Vycy1maWxhc1xcbW9uaXRvci11c2Vycy1maWxhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL21vbml0b3ItdXNlcnMvbW9uaXRvci11c2Vycy1maWxhcy9tb25pdG9yLXVzZXJzLWZpbGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUNESjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREtBO0VBQ0ksaUJBQUE7QUNGSjtBREtBO0VBQ0ksU0FBQTtBQ0ZKO0FETUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0FDSEo7QURLSTtFQUNJLGtCQUFBO0FDSFI7QURRQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUdELGlDQUFBO0FDTEg7QURZRTtFQUNFLGlCQUFBO0FDVEo7QURZRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDVEo7QURZRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDVEo7QURZRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDVEo7QURhRTtFQUNFLGlCQUFBO0FDVko7QURXSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ1ROO0FEV0k7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNUUjtBRFdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDVE47QURXSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1RSO0FEV0k7RUFDSSx5QkFBQTtBQ1RSO0FEY0E7RUFFRSwwQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDWkY7QURjRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1pKO0FEZ0JBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDYkY7QURrQkE7RUFDRSxVQUFBO0FDZkY7QURrQkE7RUFDRSxzRUFBQTtFQUFBLDhEQUFBO0VBQUEsc0RBQUE7RUFBQSwwR0FBQTtBQ2ZGO0FEa0JBO0VBQ0UsWUFBQTtBQ2ZGO0FEa0JBO0VBQ0Usc0VBQUE7RUFBQSw4REFBQTtFQUFBLHNEQUFBO0VBQUEsMEdBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9tb25pdG9yLXVzZXJzL21vbml0b3ItdXNlcnMtZmlsYXMvbW9uaXRvci11c2Vycy1maWxhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnJlc3VsdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxhYmVsLWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hcmVhLXByaW9yaWRhZGV7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuXHJcbi8vbGlzdFxyXG5oMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud3JhcC1idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4udHJlZS1jb250ZW50IC5tYXQtdHJlZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMnB4ICMwMDAwMDA7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xyXG4gICBib3gtc2hhZG93OiAgICAgICAgIGluc2V0IDAgMCAycHggIzAwMDAwMDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBidXR0b25zIHN0eWxlc1xyXG5cclxuICAuYnV0dG9uLXJvdyBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXN1Y2Nlc3Mge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICB9XHJcblxyXG4gIC5tYXQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICB9XHJcblxyXG4gIC8vIHRhYmxlIHN0eWxlc1xyXG4gIHRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGhlYWQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDZFOTA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgIH1cclxuICAgIHRyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgIH1cclxuICAgIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEcmFnLWRyb3Agc3R5bGVzXHJcbi5kcmFnLWRyb3AtYm94XHJcbntcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxuICAgIGZsZXg6MTtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmRyYWctZHJvcC1ib3g6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyVGFibGUuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZHJhZy1kcm9wLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59IiwiLnJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ucmVzdWx0IGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYWJlbC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcmVhLXByaW9yaWRhZGUge1xuICB3aWR0aDogNSU7XG59XG5cbmgxIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ud3JhcC1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi53cmFwLWJ1dHRvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4udHJlZS1jb250ZW50IC5tYXQtdHJlZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4ICMwMDAwMDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4ICMwMDAwMDA7XG59XG5cbi5idXR0b24tcm93IGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ubWF0LXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xufVxuXG4ubWF0LXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubWF0LWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG50YWJsZSB0aGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRDZFOTA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmbGV4OiAxO1xufVxudGFibGUgdHIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxudGFibGUgdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgZmxleDogMTtcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcbn1cblxuLmRyYWctZHJvcC1ib3gge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5kcmFnLWRyb3AtYm94IHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEREQ7XG4gIGZsZXg6IDE7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5kcmFnLWRyb3AtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb250YWluZXJUYWJsZS5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5kcmFnLWRyb3AtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: MonitorUsersFilasComponent */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersFilasMonitorUsersFilasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorUsersFilasComponent", function () {
      return MonitorUsersFilasComponent;
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


    var _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/monitor-users.service */
    "./src/app/modules/administrator/services/monitor-users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/tree.model */
    "./src/app/models/tree.model.ts");
    /* harmony import */


    var _dialog_users_filas_dialog_users_filas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dialog-users-filas/dialog-users-filas.component */
    "./src/app/modules/administrator/monitor-users/monitor-users-filas/dialog-users-filas/dialog-users-filas.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/models/fila.model */
    "./src/app/models/fila.model.ts");

    var MonitorUsersFilasComponent =
    /*#__PURE__*/
    function () {
      function MonitorUsersFilasComponent(activatedRoute, userService, router, cdRef, matSnackBar, dialog) {
        _classCallCheck(this, MonitorUsersFilasComponent);

        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.cdRef = cdRef;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.displayedColumns = ['associar', 'operacaoGrupo', 'fila', 'prioridade'];
        this.loader = false;
      }

      _createClass(MonitorUsersFilasComponent, [{
        key: "openModal",
        value: function openModal() {
          var _this18 = this;

          var dialogRef = this.dialog.open(_dialog_users_filas_dialog_users_filas_component__WEBPACK_IMPORTED_MODULE_7__["DialogUsersFilasomponent"], {
            height: '80%',
            width: '800px',
            data: this.treeFila
          });
          dialogRef.afterClosed().subscribe(function (result) {
            var tempCheckedList = [];

            if (result !== undefined) {
              var tempUsuarioFila;
              var operacaoGrupo;
              var operacao;
              result.dataNodes.map(function (item) {
                if (item.level == 0) {
                  operacaoGrupo = new src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_9__["Fila"]();
                  operacaoGrupo.operacaoGrupoId = item.id;
                  operacaoGrupo.operacaoGrupo = item.name;
                }

                if (item.level == 1) {
                  operacao = new src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_9__["Fila"]();
                  operacao.operacao = item.name;
                  operacao.operacaoId = item.id;
                }

                if (item.level == 2) {
                  tempUsuarioFila = new src_app_models_fila_model__WEBPACK_IMPORTED_MODULE_9__["Fila"]();
                  tempUsuarioFila.filaId = item.filaId;
                  tempUsuarioFila.fila = item.fila;
                  tempUsuarioFila.operacaoGrupoId = operacaoGrupo.operacaoGrupoId;
                  tempUsuarioFila.operacaoGrupo = operacaoGrupo.operacaoGrupo;
                  tempUsuarioFila.operacaoId = operacao.operacaoId;
                  tempUsuarioFila.operacao = operacao.operacao;
                  tempUsuarioFila.atividade = item.name;
                  tempUsuarioFila.atividadeId = item.id;
                  tempUsuarioFila.prioridade = item.prioridade;
                  tempUsuarioFila.checked = item.checked;
                  tempUsuarioFila.priorizado = item.priorizado;
                  tempCheckedList.push(tempUsuarioFila);
                }
              });
              _this18.filas = tempCheckedList;

              _this18.dataTree(_this18.filas);
            }
          });
        }
      }, {
        key: "drop",
        value: function drop(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(this.checkedList, event.previousIndex, event.currentIndex);
          this.atualizaPrioridade();
        }
      }, {
        key: "atualizaPrioridade",
        value: function atualizaPrioridade() {
          var cont = 1;
          this.checkedList.forEach(function (item) {
            item.prioridade = cont;
            cont++;
          });
        }
      }, {
        key: "dataTree",
        value: function dataTree(fila) {
          var tempTree = [];
          var operacoesGrupo = [];
          var operacoes = [];
          fila = fila.map(function (item) {
            if (!item.checked) {
              item.prioridade = 0;
            }

            return item;
          }); //Grupo operacoes

          fila.map(function (grupo) {
            var grupoTemp;

            if (!operacoesGrupo.find(function (gp) {
              return gp.operacaoGrupoId == grupo.operacaoGrupoId;
            })) {
              var operacaoGrupoId = grupo.operacaoGrupoId,
                  operacaoGrupo = grupo.operacaoGrupo,
                  ckecked = grupo.ckecked;
              operacoesGrupo.push({
                operacaoGrupoId: operacaoGrupoId,
                operacaoGrupo: operacaoGrupo,
                ckecked: ckecked
              });
              grupoTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_6__["Tree"]();
              grupoTemp.id = grupo.operacaoGrupoId;
              grupoTemp.name = grupo.operacaoGrupo;
              grupoTemp.checked = true; //operacoes

              fila.map(function (opera) {
                var operacoesTemp;

                if (!operacoes.find(function (opr) {
                  return opr.operacaoId == opera.operacaoId;
                })) {
                  var operacaoId = opera.operacaoId,
                      operacao = opera.operacao,
                      _operacaoGrupoId = opera.operacaoGrupoId,
                      _operacaoGrupo = opera.operacaoGrupo;
                  operacoes.push({
                    operacaoId: operacaoId,
                    operacao: operacao,
                    operacaoGrupoId: _operacaoGrupoId,
                    operacaoGrupo: _operacaoGrupo
                  });

                  if (opera.operacaoGrupoId == grupo.operacaoGrupoId) {
                    operacoesTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_6__["Tree"]();
                    operacoesTemp.id = opera.operacaoId;
                    operacoesTemp.name = opera.operacao;
                    operacoesTemp.checked = true;
                    grupoTemp.children.push(operacoesTemp);
                  } //atividades


                  fila.map(function (ativ) {
                    var atividadeTemp;

                    if (ativ.operacaoGrupoId == grupo.operacaoGrupoId && ativ.operacaoId == opera.operacaoId) {
                      atividadeTemp = new src_app_models_tree_model__WEBPACK_IMPORTED_MODULE_6__["Tree"]();
                      atividadeTemp.fila = ativ.fila;
                      atividadeTemp.filaId = ativ.filaId;
                      atividadeTemp.id = ativ.atividadeId;
                      atividadeTemp.name = ativ.atividade;
                      atividadeTemp.checked = ativ.checked;
                      atividadeTemp.atividadeId = ativ.atividadeId;
                      atividadeTemp.prioridade = ativ.prioridade;
                      atividadeTemp.priorizado = ativ.priorizado;
                      operacoesTemp.children.push(atividadeTemp);
                    }
                  });
                }
              });
              operacoes = [];
              tempTree.push(grupoTemp);
            }
          });
          this.treeFila = tempTree;
          this.setList();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = this.activatedRoute.snapshot.paramMap.get('id');
          this.loader = true;
          this.getUser();
          this.getFilas();
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.cdRef.detectChanges();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this19 = this;

          this.userService.get(this.userId).subscribe(function (response) {
            _this19.user = response.data;
          });
        }
      }, {
        key: "getFilas",
        value: function getFilas() {
          var _this20 = this;

          this.userService.getFilas(this.userId).subscribe(function (response) {
            _this20.filas = response.data;
            _this20.loader = false;

            _this20.dataTree(_this20.filas);
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(_this20.matSnackBar, error);
            _this20.loader = false;
          });
        }
      }, {
        key: "setList",
        value: function setList() {
          this.checkedList = this.filas.filter(function (item) {
            return item.checked;
          }).sort(function (a, b) {
            return a.prioridade < b.prioridade ? -1 : 1;
          });
          var lastprioridade;
          this.checkedList.forEach(function (item) {
            lastprioridade = item.prioridade;
          }); //reordenar

          this.checkedList = this.checkedList.map(function (item, index) {
            if (item.prioridade == 0) {
              item.prioridade = lastprioridade + (index + 1);
              item.novoItem = true;
            }

            return item;
          });
          this.checkedList = this.sortCheckList(this.checkedList);
        }
      }, {
        key: "sortCheckList",
        value: function sortCheckList(checkedList) {
          return checkedList.sort(function (a, b) {
            return a.prioridade < b.prioridade ? -1 : 1;
          });
        }
      }, {
        key: "postFilas",
        value: function postFilas() {
          var _this21 = this;

          this.loader = true;
          this.userService.postFilas(this.checkedList, this.userId).subscribe(function (response) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(_this21.matSnackBar);

            _this21.router.navigate(['/administracao/usuarios']);

            _this21.loader = false;
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(_this21.matSnackBar, error);
            _this21.loader = false;
          });
        }
      }, {
        key: "deleteAtividade",
        value: function deleteAtividade(idAtividade) {
          this.checkedList = this.checkedList.filter(function (item) {
            return item.atividadeId != idAtividade;
          });
          this.atualizaPrioridade();
        }
      }, {
        key: "changePriorizado",
        value: function changePriorizado(item, priorizado) {
          var filaUsuario = this.checkedList.find(function (x) {
            return x.atividadeId == item.atividadeId;
          });

          if (filaUsuario) {
            filaUsuario.priorizado = priorizado;
            var grupo = this.treeFila.find(function (g) {
              return g.id == filaUsuario.operacaoGrupoId;
            });

            if (grupo) {
              var operacao = grupo.children.find(function (o) {
                return o.id == filaUsuario.operacaoId;
              });

              if (operacao) {
                var atividade = operacao.children.find(function (a) {
                  return a.id == filaUsuario.atividadeId;
                });

                if (atividade) {
                  atividade.priorizado = filaUsuario.priorizado;
                }
              }
            }
          }
        }
      }]);

      return MonitorUsersFilasComponent;
    }();

    MonitorUsersFilasComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_2__["MonitorUsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    MonitorUsersFilasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-users-filas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-users-filas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-users-filas.component.scss */
      "./src/app/modules/administrator/monitor-users/monitor-users-filas/monitor-users-filas.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_2__["MonitorUsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], MonitorUsersFilasComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersPerfilMonitorUsersPerfilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-slide-toggle {\n  position: relative;\n  top: 15px;\n  margin-right: 40px;\n}\n\n.btn.btn-success {\n  position: relative;\n  top: 10px;\n}\n\n.blue {\n  color: #2196f3;\n}\n\n.result {\n  margin-top: 30px;\n}\n\n.result label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL21vbml0b3ItdXNlcnMvbW9uaXRvci11c2Vycy1wZXJmaWwvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluaXN0cmF0b3JcXG1vbml0b3ItdXNlcnNcXG1vbml0b3ItdXNlcnMtcGVyZmlsXFxtb25pdG9yLXVzZXJzLXBlcmZpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL21vbml0b3ItdXNlcnMvbW9uaXRvci11c2Vycy1wZXJmaWwvbW9uaXRvci11c2Vycy1wZXJmaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREFJO0VBQ0ksaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9tb25pdG9yLXVzZXJzL21vbml0b3ItdXNlcnMtcGVyZmlsL21vbml0b3ItdXNlcnMtcGVyZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zdWNjZXNzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsIi5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmJ0bi5idG4tc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG4ucmVzdWx0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yZXN1bHQgbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: MonitorUsersPerfilComponent */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersPerfilMonitorUsersPerfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorUsersPerfilComponent", function () {
      return MonitorUsersPerfilComponent;
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


    var _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/monitor-users.service */
    "./src/app/modules/administrator/services/monitor-users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MonitorUsersPerfilComponent =
    /*#__PURE__*/
    function () {
      function MonitorUsersPerfilComponent(activatedRoute, formBuilder, userService, router, matSnackBar) {
        _classCallCheck(this, MonitorUsersPerfilComponent);

        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.tipoPerfis = [];
        this.tipoStatus = [{
          id: 1,
          label: 'Pendente',
          nome: null
        }, {
          id: 2,
          label: 'Ativo',
          nome: null
        }, {
          id: 3,
          label: 'Inativo',
          nome: null
        }];
        this.busIds = [];
        this.bus = [];
        this.loader = false;
      }

      _createClass(MonitorUsersPerfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.loader = true;
          this.userId = this.activatedRoute.snapshot.paramMap.get('id');
          this.formEntity = this.formBuilder.group({
            statusId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            perfilId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bus: []
          });
          this.userService.getPerfis().subscribe(function (response) {
            _this22.tipoPerfis = response.data;

            _this22.get();
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this22.matSnackBar, error);
            _this22.loader = false;
          });
        }
      }, {
        key: "get",
        value: function get() {
          var _this23 = this;

          this.userService.get(this.userId).subscribe(function (response) {
            _this23.user = response.data;

            _this23.formEntity.controls['statusId'].setValue(_this23.user.statusId);

            _this23.formEntity.controls['perfilId'].setValue(_this23.user.perfilId);

            _this23.formEntity.controls['email'].setValue(_this23.user.email);

            _this23.loader = false;
            var busIds = [];

            if (_this23.user.bus != undefined) {
              _this23.user.bus.forEach(function (item) {
                if (item.checked == true) {
                  busIds.push(item.id);
                }
              });

              _this23.formEntity.get("bus").setValue(busIds);
            }
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this23.matSnackBar, error);
            _this23.loader = false;
          });
        }
      }, {
        key: "put",
        value: function put() {
          var _this24 = this;

          this.loader = true;

          if (this.formEntity.valid) {
            this.userService.put(this.formEntity.value, this.userId).subscribe(function () {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showSuccess(_this24.matSnackBar);

              _this24.router.navigate(['/administracao/usuarios']);

              _this24.loader = false;
            }, function (error) {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"].showError(_this24.matSnackBar, error);
              _this24.loader = false;
            });
          }
        }
      }]);

      return MonitorUsersPerfilComponent;
    }();

    MonitorUsersPerfilComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_3__["MonitorUsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    MonitorUsersPerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-users-perfil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-users-perfil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-users-perfil.component.scss */
      "./src/app/modules/administrator/monitor-users/monitor-users-perfil/monitor-users-perfil.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_3__["MonitorUsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])], MonitorUsersPerfilComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-slide-toggle {\n  position: relative;\n  top: 15px;\n  margin-right: 40px;\n}\n\n.btn.btn-success {\n  position: relative;\n  top: 10px;\n}\n\n.blue {\n  color: #2196f3;\n}\n\n.label-filter {\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n:host ::ng-deep .form-filter .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  -webkit-transform: translateY(-1.1em) scale(0.75);\n          transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.width-action {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL21vbml0b3ItdXNlcnMvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluaXN0cmF0b3JcXG1vbml0b3ItdXNlcnNcXG1vbml0b3ItdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9tb25pdG9yLXVzZXJzL21vbml0b3ItdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQXlELDZCQUFBO0FDRXpEOztBRERBO0VBQTBDLFdBQUE7QUNLMUM7O0FESEE7RUFDSSxpREFBQTtVQUFBLHlDQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURIQTtFQUNJLFVBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9tb25pdG9yLXVzZXJzL21vbml0b3ItdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICBjb2xvcjogIzIxOTZmMztcclxufVxyXG5cclxuLmxhYmVsLWZpbHRlcntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5mb3JtLWZpbHRlciAubWF0LWZvcm0tZmllbGQtd3JhcHBlcntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gICAgd2lkdGg6IDEzMy4zMzMzMyU7XHJcbn1cclxuXHJcbi53aWR0aC1hY3Rpb24ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufSIsIi5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmJ0bi5idG4tc3VjY2VzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG4ubGFiZWwtZmlsdGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZm9ybS1maWx0ZXIgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC40ZW0gMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTEuNWVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzJTtcbn1cblxuLndpZHRoLWFjdGlvbiB7XG4gIHdpZHRoOiAyMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/monitor-users/monitor-users.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/administrator/monitor-users/monitor-users.component.ts ***!
    \********************************************************************************/

  /*! exports provided: MonitorUsersComponent */

  /***/
  function srcAppModulesAdministratorMonitorUsersMonitorUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorUsersComponent", function () {
      return MonitorUsersComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/monitor-users.service */
    "./src/app/modules/administrator/services/monitor-users.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");

    var MonitorUsersComponent =
    /*#__PURE__*/
    function () {
      function MonitorUsersComponent(formBuilder, envelopeService, matSnackBar) {
        var _this25 = this;

        _classCallCheck(this, MonitorUsersComponent);

        this.formBuilder = formBuilder;
        this.envelopeService = envelopeService;
        this.matSnackBar = matSnackBar;
        this.displayedColumns = ['login', 'lacre', 'perfil', 'status', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.users = [];
        this.pageSize = 5;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.filterDebounce = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loader = false;
        this.filterDebounce.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (value) {
          _this25.pageIndex = 0;
          _this25.pageSize = 5;
          var valueLength = value.trim().length;

          if (valueLength > 3 || valueLength === 0) {
            _this25.find();
          }
        });
      }

      _createClass(MonitorUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formFilter = this.formBuilder.group({
            nome: ['']
          });
          this.find();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this26 = this;

          if (this.paginator) {
            this.paginator.page.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              return _this26.find();
            })).subscribe();
          }
        }
      }, {
        key: "find",
        value: function find() {
          var _this27 = this;

          this.loader = true;
          this.users = [];
          var pageIndex = (this.pageIndex + 1).toString();
          var pageSize = this.pageSize.toString();
          this.envelopeService.find(this.formFilter.value.nome, pageIndex, pageSize).subscribe(function (response) {
            _this27.loader = false;
            _this27.users = _toConsumableArray(response.data);
            _this27.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this27.users);
            _this27.length = response.length;
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"].showError(_this27.matSnackBar, error);
            _this27.loader = false;
          });
        }
      }, {
        key: "setPageSizeOptions",
        value: function setPageSizeOptions(eventOptions) {
          this.pageIndex = eventOptions.pageIndex;
          this.pageSize = eventOptions.pageSize;
          this.find();
        }
      }]);

      return MonitorUsersComponent;
    }();

    MonitorUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_5__["MonitorUsersService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], MonitorUsersComponent.prototype, "paginator", void 0);
    MonitorUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/monitor-users/monitor-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-users.component.scss */
      "./src/app/modules/administrator/monitor-users/monitor-users.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_5__["MonitorUsersService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])], MonitorUsersComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.scss":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.scss ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorPriorizarSlaDialogPriorizarSlaDialogPriorizarSlaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  border-bottom: 1px solid #DDD;\n  font-weight: bold;\n}\n\n.wrap-buttons {\n  margin-top: 20px;\n}\n\n.wrap-buttons button {\n  margin-right: 15px;\n}\n\n.mat-dialog-actions {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.modal-custom-content .modal-custom-data {\n  top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL3ByaW9yaXphci1zbGEvZGlhbG9nLXByaW9yaXphci1zbGEvRDpcXFByb2pldG9zXFxhZ2VuZGFzXFxJQXRlY0FnZW5kYVxcZnJvbnRlbmQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluaXN0cmF0b3JcXHByaW9yaXphci1zbGFcXGRpYWxvZy1wcmlvcml6YXItc2xhXFxkaWFsb2ctcHJpb3JpemFyLXNsYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhdG9yL3ByaW9yaXphci1zbGEvZGlhbG9nLXByaW9yaXphci1zbGEvZGlhbG9nLXByaW9yaXphci1zbGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FER0E7RUFDSSxTQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluaXN0cmF0b3IvcHJpb3JpemFyLXNsYS9kaWFsb2ctcHJpb3JpemFyLXNsYS9kaWFsb2ctcHJpb3JpemFyLXNsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53cmFwLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1jdXN0b20tY29udGVudCAubW9kYWwtY3VzdG9tLWRhdGEge1xyXG4gICAgdG9wOiA2MHB4O1xyXG59XHJcblxyXG4iLCJoMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLndyYXAtYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ud3JhcC1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWN1c3RvbS1jb250ZW50IC5tb2RhbC1jdXN0b20tZGF0YSB7XG4gIHRvcDogNjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: DialogPriorizarSlaComponent */

  /***/
  function srcAppModulesAdministratorPriorizarSlaDialogPriorizarSlaDialogPriorizarSlaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogPriorizarSlaComponent", function () {
      return DialogPriorizarSlaComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/components/snackbar/snackbar.component */
    "./src/app/shared/components/snackbar/snackbar.component.ts");
    /* harmony import */


    var _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/monitor-users.service */
    "./src/app/modules/administrator/services/monitor-users.service.ts");

    var DialogPriorizarSlaComponent =
    /*#__PURE__*/
    function () {
      function DialogPriorizarSlaComponent(dialogRef, data, userService, matSnackBar) {
        _classCallCheck(this, DialogPriorizarSlaComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.usuarios = [];
        this.loading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.displayedColumns = ['usuario', 'actions'];
        this.dataAtual = new Date();
        this.length = null;
        this.pageSize = 100;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25, 50, 100];
      }

      _createClass(DialogPriorizarSlaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsuarios();
        }
      }, {
        key: "getUsuarios",
        value: function getUsuarios() {
          var _this28 = this;

          this.loading = true;
          var pageIndex = (this.pageIndex + 1).toString();
          var pageSize = this.pageSize.toString();
          this.userService.getUsuarios(pageIndex, pageSize).subscribe(function (response) {
            _this28.usuarios = response.data;
            _this28.length = response.length;
            _this28.dataSource.data = _this28.usuarios;
            _this28.loading = false;
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["SnackbarComponent"].showError(_this28.matSnackBar, error);
            _this28.loading = false;
          });
        }
      }, {
        key: "setPageSizeOptions",
        value: function setPageSizeOptions(eventOptions) {
          this.pageIndex = eventOptions.pageIndex;
          this.pageSize = eventOptions.pageSize;
          this.getUsuarios();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.dialogRef.close();
        }
      }, {
        key: "selecionar",
        value: function selecionar(usuario) {
          this.dialogRef.close(usuario);
        }
      }]);

      return DialogPriorizarSlaComponent;
    }();

    DialogPriorizarSlaComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_4__["MonitorUsersService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    DialogPriorizarSlaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dialog-priorizar-sla',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-priorizar-sla.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-priorizar-sla.component.scss */
      "./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_monitor_users_service__WEBPACK_IMPORTED_MODULE_4__["MonitorUsersService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], DialogPriorizarSlaComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdministratorPriorizarSlaPriorizarSlaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5pc3RyYXRvci9wcmlvcml6YXItc2xhL3ByaW9yaXphci1zbGEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.ts ***!
    \********************************************************************************/

  /*! exports provided: PriorizarSlaComponent */

  /***/
  function srcAppModulesAdministratorPriorizarSlaPriorizarSlaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriorizarSlaComponent", function () {
      return PriorizarSlaComponent;
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


    var _operation_services_esteira_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../operation/services/esteira.service */
    "./src/app/modules/operation/services/esteira.service.ts");
    /* harmony import */


    var _dialog_priorizar_sla_dialog_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dialog-priorizar-sla/dialog-priorizar-sla.component */
    "./src/app/modules/administrator/priorizar-sla/dialog-priorizar-sla/dialog-priorizar-sla.component.ts");
    /* harmony import */


    var src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/validators/br-validators */
    "./src/app/shared/validators/br-validators.ts"); //import { RevisaoDigitalizacao } from 'src/app/models/revisao-digitalizacao.interface';


    var PriorizarSlaComponent =
    /*#__PURE__*/
    function () {
      function PriorizarSlaComponent(formBuilder, esteiraService, matSnackBar, dialog) {
        _classCallCheck(this, PriorizarSlaComponent);

        this.formBuilder = formBuilder;
        this.esteiraService = esteiraService;
        this.matSnackBar = matSnackBar;
        this.dialog = dialog;
        this.loading = false;
        this.tipos = [];
        this.status = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['etiqueta', 'dataRecepcao', 'atividade', 'sla', 'status', 'acoes'];
        this.today = new Date();
        this.pageSizeOptions = [5, 10, 25, 50, 100];
        this.length = null;
        this.pageSize = 10;
        this.pageIndex = 0;
      }

      _createClass(PriorizarSlaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            agencia: ['', [this.validaAgencia]],
            contaCorrente: [''],
            documento: ['', [this.validaDocumento]],
            numeroProcesso: [''],
            numeroPasta: [''],
            etiqueta: ['']
          });
          this.getResult();
        }
      }, {
        key: "getResult",
        value: function getResult() {
          var _this29 = this;

          var exportaXLSX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.form.valid) {
            this.loading = true;
            var form = this.form.value;
            var pageIndex = (this.pageIndex + 1).toString();
            var pageSize = this.pageSize.toString();
            var body = {
              Agencia: form.agencia,
              ContaCorrente: form.contaCorrente,
              Documento: form.documento,
              NumeroProcesso: form.numeroProcesso,
              numeroPasta: form.numeroPasta,
              Etiqueta: form.etiqueta,
              PageSize: pageSize,
              PageIndex: pageIndex,
              ExportaXLSX: exportaXLSX
            };
            this.esteiraService.getSla(body).subscribe(function (response) {
              if (response.type == "application/octet-stream") {
                var dateToday = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYYMMDDHHmmss');
                var fileName = "report_" + _this29.form.value.atividadeId + "_" + dateToday + ".xlsx";
                var linkArquivo = window.URL.createObjectURL(response);
                var link = document.createElement("a");
                link.setAttribute("href", linkArquivo);
                link.setAttribute("download", fileName);
                link.style.display = "none";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                _this29.length = null;
              } else {
                _this29.length = response.length;
                _this29.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response.data);
                _this29.dataSource.paginator = _this29.paginator;
              }

              _this29.loading = false;
            }, function () {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(_this29.matSnackBar, null, "Erro ao obter dados. Se o erro persistir, entre em contato com o suporte.");
              _this29.loading = false;
            });
          }
        }
      }, {
        key: "setPageSizeOptions",
        value: function setPageSizeOptions(event) {
          this.pageIndex = event.pageIndex;
          this.pageSize = event.pageSize;
          this.getResult();
        }
      }, {
        key: "openModal",
        value: function openModal(esteira) {
          var _this30 = this;

          var dialogRef = this.dialog.open(_dialog_priorizar_sla_dialog_priorizar_sla_component__WEBPACK_IMPORTED_MODULE_7__["DialogPriorizarSlaComponent"], {
            width: '700px',
            height: '90%',
            data: null
          });
          dialogRef.afterClosed().subscribe(function (usuario) {
            if (usuario !== undefined) {
              _this30.priorizar(esteira.esteiraId, usuario.id);
            } else {
              src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showAlert(_this30.matSnackBar, 'Cancelada pelo Usuário');
            }
          });
        }
      }, {
        key: "priorizar",
        value: function priorizar(esteiraId, usuarioId) {
          var _this31 = this;

          this.loading = true;
          this.esteiraService.putPriorizarEsteira(esteiraId, usuarioId).subscribe(function () {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showSuccess(_this31.matSnackBar, 'Priorizado com sucesso!');
            _this31.loading = false;
          }, function (error) {
            src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"].showError(_this31.matSnackBar, error);
            _this31.loading = false;
          });
        }
      }, {
        key: "validaDocumento",
        value: function validaDocumento(abstractControl) {
          var documento = abstractControl.value;
          if (!documento) return null;

          if (src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_8__["BrValidator"].cpf(documento) || src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_8__["BrValidator"].cnpj(documento)) {
            return null;
          }

          return {
            isError: true
          };
        }
      }, {
        key: "validaAgencia",
        value: function validaAgencia(abstractControl) {
          var valor = abstractControl.value;
          if (!valor) return null;

          if (src_app_shared_validators_br_validators__WEBPACK_IMPORTED_MODULE_8__["BrValidator"].agencia(valor)) {
            return null;
          }

          return {
            isError: true
          };
        }
      }]);

      return PriorizarSlaComponent;
    }();

    PriorizarSlaComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _operation_services_esteira_service__WEBPACK_IMPORTED_MODULE_6__["EsteiraService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], PriorizarSlaComponent.prototype, "paginator", void 0);
    PriorizarSlaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-priorizar-sla',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./priorizar-sla.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./priorizar-sla.component.scss */
      "./src/app/modules/administrator/priorizar-sla/priorizar-sla.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _operation_services_esteira_service__WEBPACK_IMPORTED_MODULE_6__["EsteiraService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])], PriorizarSlaComponent);
    /***/
  },

  /***/
  "./src/app/modules/administrator/services/alerta.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/administrator/services/alerta.service.ts ***!
    \******************************************************************/

  /*! exports provided: AlertaService */

  /***/
  function srcAppModulesAdministratorServicesAlertaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertaService", function () {
      return AlertaService;
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

    var AlertaService =
    /*#__PURE__*/
    function () {
      function AlertaService(http) {
        _classCallCheck(this, AlertaService);

        this.http = http;
        this.urlAlerta = '/api/v1/alertasAtividade';
        this.urlDocumento = '/api/v1/alertasDocumento';
      }

      _createClass(AlertaService, [{
        key: "get",
        value: function get() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlAlerta);
        }
      }, {
        key: "post",
        value: function post(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlAlerta, data);
        }
      }, {
        key: "put",
        value: function put(data) {
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlAlerta, data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http.delete("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices).concat(this.urlAlerta, "/").concat(id));
        }
      }, {
        key: "getDocumentos",
        value: function getDocumentos() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlDocumento);
        }
      }, {
        key: "postDocumentos",
        value: function postDocumentos(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlDocumento, data);
        }
      }, {
        key: "putDocumentos",
        value: function putDocumentos(data) {
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlDocumento, data);
        }
      }, {
        key: "deleteDocumento",
        value: function deleteDocumento(id) {
          return this.http.delete("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices).concat(this.urlDocumento, "/").concat(id));
        }
      }]);

      return AlertaService;
    }();

    AlertaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AlertaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AlertaService);
    /***/
  },

  /***/
  "./src/app/modules/administrator/services/monitor-users.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/administrator/services/monitor-users.service.ts ***!
    \*************************************************************************/

  /*! exports provided: MonitorUsersService */

  /***/
  function srcAppModulesAdministratorServicesMonitorUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorUsersService", function () {
      return MonitorUsersService;
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

    var MonitorUsersService =
    /*#__PURE__*/
    function () {
      function MonitorUsersService(http) {
        _classCallCheck(this, MonitorUsersService);

        this.http = http;
        this.urlUsuarioPushService = '/api/v1/usuarios';
        this.urlPerfilPushService = '/api/v1/perfis';
      }

      _createClass(MonitorUsersService, [{
        key: "find",
        value: function find(nome, pageIndex, pageSize) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlUsuarioPushService, {
            params: {
              Nome: nome,
              PageIndex: pageIndex,
              PageSize: pageSize
            }
          });
        }
      }, {
        key: "getPerfis",
        value: function getPerfis() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlPerfilPushService);
        }
      }, {
        key: "getFilas",
        value: function getFilas(userId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlUsuarioPushService + '/' + userId + '/filas');
        }
      }, {
        key: "get",
        value: function get(userId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlUsuarioPushService + '/' + userId);
        }
      }, {
        key: "put",
        value: function put(formulario, userId) {
          var data = {
            id: userId,
            statusId: formulario.statusId,
            perfilId: formulario.perfilId,
            email: formulario.email,
            bus: formulario.bus
          };
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlUsuarioPushService, data);
        }
      }, {
        key: "postFilas",
        value: function postFilas(formulario, userId) {
          var data = {
            filas: formulario
          };
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlUsuarioPushService + '/' + userId + '/filas', data);
        }
      }, {
        key: "getUsuarios",
        value: function getUsuarios(pageIndex, pageSize) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlServices + this.urlUsuarioPushService, {
            params: {
              PageIndex: pageIndex,
              PageSize: pageSize
            }
          });
        }
      }]);

      return MonitorUsersService;
    }();

    MonitorUsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MonitorUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MonitorUsersService);
    /***/
  }
}]);
//# sourceMappingURL=modules-administrator-administrator-module-es5.js.map