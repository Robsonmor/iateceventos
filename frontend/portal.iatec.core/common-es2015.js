(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/models/fila.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/fila.model.ts ***!
  \**************************************/
/*! exports provided: Fila */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fila", function() { return Fila; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Fila {
    constructor(fila, filaId, atividade, atividadeId, atividadeCodigoExterno, operacao, operacaoId, operacaoCodigoExterno, operacaoGrupo, operacaoGrupoId, prioridade, checked, priorizado) {
        this.fila = fila;
        this.filaId = filaId;
        this.atividade = atividade;
        this.atividadeId = atividadeId;
        this.atividadeCodigoExterno = atividadeCodigoExterno;
        this.operacao = operacao;
        this.operacaoId = operacaoId;
        this.operacaoCodigoExterno = operacaoCodigoExterno;
        this.operacaoGrupo = operacaoGrupo;
        this.operacaoGrupoId = operacaoGrupoId;
        this.prioridade = prioridade;
        this.checked = checked;
        this.priorizado = priorizado;
    }
}


/***/ }),

/***/ "./src/app/modules/expedition/expedition-routes.guard.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/expedition/expedition-routes.guard.ts ***!
  \***************************************************************/
/*! exports provided: ExpeditionRoutesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpeditionRoutesGuard", function() { return ExpeditionRoutesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/autentication.service */ "./src/app/services/autentication.service.ts");



let ExpeditionRoutesGuard = class ExpeditionRoutesGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(event) {
        if (event.routeConfig.path == 'home') {
            return this.authenticationService.isLoggedIn();
        }
        return this.authenticationService.isPermitted("expedicao", event.url[0].path);
    }
};
ExpeditionRoutesGuard.ctorParameters = () => [
    { type: _services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"] }
];
ExpeditionRoutesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_autentication_service__WEBPACK_IMPORTED_MODULE_2__["AutenticationService"]])
], ExpeditionRoutesGuard);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map