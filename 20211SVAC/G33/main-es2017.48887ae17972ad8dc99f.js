(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/bnf/bnf.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/bnf/bnf.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"simbolos\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n    The actual rendered columns are set as a property on the row definition\" -->\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"no\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.no}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"produccion\">\r\n      <th mat-header-cell *matHeaderCellDef> Produccion </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.produccion}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"accion\">\r\n      <th mat-header-cell *matHeaderCellDef> Accion </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.accion}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/grafico/grafico.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/grafico/grafico.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id = \"vis\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/principal/home.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/principal/home.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id = \"barra\">\r\n  <mat-toolbar color = \"warn\">\r\n    <span>Tytus X</span>\r\n\r\n    <div class = \"spacer\"></div>\r\n\r\n    <button mat-raised-button color = \"accent\" [matMenuTriggerFor] = \"archivo\">Archivo</button>\r\n    <mat-menu #archivo = \"matMenu\">\r\n        <button mat-menu-item>\r\n            <mat-icon>attach_file</mat-icon>\r\n            <label for = \"file\">Abrir XML</label>\r\n            <input type = \"file\"\r\n            id = \"file\"\r\n            class = \"hidend\"\r\n            (change) = \"abrirXML($event.target.files)\">\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>attach_file</mat-icon>\r\n            <span>Abrir XPath</span>\r\n        </button>\r\n        <button mat-menu-item>\r\n            <mat-icon>delete</mat-icon>\r\n            <span>Limpiar</span>\r\n        </button>\r\n    </mat-menu>\r\n\r\n    <button mat-raised-button color = \"accent\" [matMenuTriggerFor] = \"ejecutar\">Ejecutar</button>\r\n    <mat-menu #ejecutar = \"matMenu\">\r\n        <button mat-menu-item (click) = \"ejecutarAscendente()\">\r\n            <mat-icon>keyboard_arrow_up</mat-icon>\r\n            <span>Ascendete XPATH</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"ejecutarDescendente()\"> \r\n            <mat-icon>keyboard_arrow_down</mat-icon>\r\n            <span>Descendente XPATH</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"ejecutarXquery()\"> \r\n          <mat-icon>keyboard_arrow_up</mat-icon>\r\n          <span>Ascendete XQUERY</span>\r\n        </button>\r\n    </mat-menu>\r\n\r\n    <button mat-raised-button color = \"accent\" [matMenuTriggerFor] = \"reporte\">Reportes</button>\r\n    <mat-menu #reporte = \"matMenu\">\r\n        <button mat-menu-item (click) = \"reporteTablaSimbolosXML()\">\r\n            <span>Tabla de simbolos XML</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"reporteCSTXML()\">\r\n          <span>CST XML</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"reporteASTXPATH()\">\r\n          <span>AST XPATH</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"reporteCSTXPATH()\">\r\n          <span>CST XPATH</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"reporteBNFXML()\">\r\n          <span>BNF XML</span>\r\n        </button>  \r\n        <button mat-menu-item (click) = \"reporteBNFXPATH()\">\r\n          <span>BNF XPATH</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"reporteErroresXPATH()\">\r\n          <span>Errores XPATH</span>\r\n        </button>\r\n        <button mat-menu-item (click) = \"reporteErroresXML()\">\r\n          <span>Errores XML</span>\r\n        </button>\r\n      </mat-menu>\r\n</mat-toolbar>\r\n</div>\r\n\r\n<div id = \"superior\">\r\n  <ngx-codemirror\r\n    [options] = \"editorQueryOptions\"\r\n    [(ngModel)] = \"querys\">\r\n  </ngx-codemirror>\r\n</div>\r\n\r\n<div id = \"separador1\"></div>\r\n\r\n<div id = \"inferior\">\r\n  <div id = \"izquierda\">\r\n    <ngx-codemirror\r\n      [options] = \"editorXMLEntradaOptions\"\r\n      [(ngModel)] = \"xmlEntrada\">\r\n    </ngx-codemirror>\r\n  </div>\r\n  <div id = \"separador2\"></div>\r\n  <div id = \"derecha\">\r\n    <div id = \"superior2\">\r\n      <ngx-codemirror\r\n      [options] = \"editorXMLSalidaOptions\"\r\n      [(ngModel)] = \"xmlSalida\">\r\n    </ngx-codemirror>\r\n    </div>\r\n    <div id = \"separador3\"></div>\r\n    <div id = \"inferior2\">\r\n      <ngx-codemirror\r\n      [options] = \"editor3DSalidaOptions\"\r\n      [(ngModel)] = \"salida3D\">\r\n    </ngx-codemirror>\r\n    </div>  \r\n  </div> \r\n</div>\r\n\r\n<div id = \"grafo\" *ngIf=\"grafo == true\">\r\n  <app-grafico></app-grafico>\r\n</div>\r\n\r\n<div id = \"tablaS\" *ngIf = \"tabla == true\">\r\n  <app-tabla-xml></app-tabla-xml>\r\n</div>\r\n\r\n<div id = \"bnf\" *ngIf = \"bnf == true\">\r\n  <app-bnf></app-bnf>\r\n</div>\r\n\r\n<div id = \"bnf\" *ngIf = \"error == true\">\r\n  <app-tabla-errores></app-tabla-errores>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tabla-errores/tabla-errores.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tabla-errores/tabla-errores.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"simbolos\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n    The actual rendered columns are set as a property on the row definition\" -->\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"no\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.no}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"tipo\">\r\n      <th mat-header-cell *matHeaderCellDef> Tipo </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.tipo}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"valor\">\r\n      <th mat-header-cell *matHeaderCellDef> Valor </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.valor}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fila\">\r\n        <th mat-header-cell *matHeaderCellDef> Fila </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.linea}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"columna\">\r\n        <th mat-header-cell *matHeaderCellDef> Columna </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.columna}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tabla-xml/tabla-xml.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tabla-xml/tabla-xml.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"simbolos\" class=\"mat-elevation-z8\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n    The actual rendered columns are set as a property on the row definition\" -->\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"no\">\r\n      <th mat-header-cell *matHeaderCellDef> No. </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.no}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"nombre\">\r\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.nombre}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"tipo\">\r\n      <th mat-header-cell *matHeaderCellDef> Tipo </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.tipo}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"valor\">\r\n      <th mat-header-cell *matHeaderCellDef> Valor </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.valor}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"ambito\">\r\n        <th mat-header-cell *matHeaderCellDef> Ambito </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.ambito}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"tipoEtiqueta\">\r\n      <th mat-header-cell *matHeaderCellDef> Tipo de etiqueta </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.tipoEtiqueta}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"fila\">\r\n        <th mat-header-cell *matHeaderCellDef> Fila </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.linea}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"columna\">\r\n        <th mat-header-cell *matHeaderCellDef> Columna </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.columna}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>");

/***/ }),

/***/ "./src/analizadorXML/AST/CST.ts":
/*!**************************************!*\
  !*** ./src/analizadorXML/AST/CST.ts ***!
  \**************************************/
/*! exports provided: CST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CST", function() { return CST; });
class CST {
    constructor(objetos) {
        this.cuerpoDot = '';
        this.objetos = objetos;
    }
    generarArbolCST(objetos) {
        var num;
        this.cuerpoDot = 'digraph D { \n ';
        objetos.forEach((object) => {
            num = `${object.linea.toString()}_${object.columna.toString()}`;
            this.cuerpoDot += this.generarNodoObjeto(object, num, null);
            num = num + 1000;
        });
        this.cuerpoDot += '} \n ';
        return this.cuerpoDot;
    }
    generarNodoObjeto(objeto, pos, padre) {
        let id = objeto.identificador;
        id = id.replace(/\'/gi, "");
        id = id.replace(/\"/gi, "");
        var nodo = `nodo${pos} [label = 
        \"ETIQUETA
${id}\" ]\n`;
        if (padre !== null) {
            nodo += `nodo${padre} -> nodo${pos}\n`;
        }
        if (objeto.texto !== '') {
            let texto = objeto.texto;
            texto = texto.replace(/\'/gi, "");
            texto = texto.replace(/\"/gi, "");
            nodo += `nodo${pos}_t [label =\"${texto}\" ]\n`;
            nodo += `nodo${pos} -> nodo${pos}_t [label=\"txt\"]\n`;
        }
        objeto.listaAtributos.forEach((atribute) => {
            var num = `${atribute.linea.toString()}_${atribute.columna.toString()}`;
            nodo += this.generarNodoAtributo(atribute, num, pos);
        });
        objeto.listaObjetos.forEach((obj) => {
            var num = `${obj.linea.toString()}_${obj.columna.toString()}`;
            nodo += this.generarNodoObjeto(obj, num, pos);
        });
        return nodo;
    }
    generarNodoAtributo(objeto, pos, padre) {
        let id = objeto.identificador;
        id = id.replace(/\'/gi, "");
        id = id.replace(/\"/gi, "");
        let valor = objeto.valor;
        valor = valor.replace(/\'/gi, "");
        valor = valor.replace(/\"/gi, "");
        var nodo = `nodo${pos} [label =
        \"ATRIBUTO
${id}\"]\n`;
        nodo += `nodo${padre} -> nodo${pos}\n`;
        nodo += `nodo${pos}_a [label=${valor}]\n`;
        nodo += `nodo${pos} -> nodo${pos}_a [label=\"valor\"]\n`;
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXML/AST/Entorno.ts":
/*!******************************************!*\
  !*** ./src/analizadorXML/AST/Entorno.ts ***!
  \******************************************/
/*! exports provided: Entorno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entorno", function() { return Entorno; });
class Entorno {
    constructor(anterior) {
        this.tabla = {};
        this.anterior = anterior;
    }
    agregar(id, simbolo) {
        id = id.toLowerCase();
        simbolo.indentificador = simbolo.indentificador.toLowerCase();
        this.tabla[id] = simbolo;
    }
    eliminar(id) {
        id = id.toLowerCase();
        for (let e = this; e != null; e = e.anterior) {
            const value = e.tabla[id];
            if (value !== undefined) {
                delete e.tabla[id];
                return true;
            }
        }
        return false;
    }
    existe(id) {
        id = id.toLowerCase();
        for (let e = this; e != null; e = e.anterior) {
            const value = e.tabla[id];
            if (value !== undefined) {
                return true;
            }
        }
        return false;
    }
    existeEnActual(id) {
        id = id.toLowerCase();
        if (this.tabla[id] !== undefined) {
            return true;
        }
        return false;
    }
    getSimbolo(id) {
        id = id.toLowerCase();
        for (let e = this; e != null; e = e.anterior) {
            if (e.tabla[id] !== undefined) {
                return e.tabla[id];
            }
        }
        return null;
    }
    reemplazar(id, nuevoValor) {
        id = id.toLowerCase();
        for (let e = this; e != null; e = e.anterior) {
            const value = e.tabla[id];
            if (value !== undefined) {
                e.tabla[id] = nuevoValor;
            }
        }
    }
}


/***/ }),

/***/ "./src/analizadorXML/AST/GramaticaBNF.ts":
/*!***********************************************!*\
  !*** ./src/analizadorXML/AST/GramaticaBNF.ts ***!
  \***********************************************/
/*! exports provided: GramaticaBNF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GramaticaBNF", function() { return GramaticaBNF; });
class GramaticaBNF {
    constructor(repo, repo2) {
        this.reporte = repo;
        this.reporte2 = repo2;
    }
    getBNFReport() {
        let ret = [];
        for (let i = 0; i < this.reporte.length; i++) {
            ret.push(this.generarBodyReporte(this.reporte[i], this.reporte2[i], i));
        }
        return ret;
    }
    generarBodyReporte(object, object2, iterator) {
        var fila = {
            no: iterator,
            produccion: object,
            accion: object2
        };
        return fila;
    }
}


/***/ }),

/***/ "./src/analizadorXML/AST/SalidaGramatica.ts":
/*!**************************************************!*\
  !*** ./src/analizadorXML/AST/SalidaGramatica.ts ***!
  \**************************************************/
/*! exports provided: SalidaGramatica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaGramatica", function() { return SalidaGramatica; });
class SalidaGramatica {
    constructor(objetos, reporte, reporte2, encoding, lError) {
        this.objetos = objetos;
        this.reporteBNF = reporte;
        this.reporteBNF2 = reporte2;
        this.encoding = encoding;
        this.lErrores = lError;
    }
}


/***/ }),

/***/ "./src/analizadorXML/AST/TablaSimbolos.ts":
/*!************************************************!*\
  !*** ./src/analizadorXML/AST/TablaSimbolos.ts ***!
  \************************************************/
/*! exports provided: TablaSimbolos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaSimbolos", function() { return TablaSimbolos; });
class TablaSimbolos {
    constructor() {
        this.contador = 1;
        this.contador = 1;
    }
    generarReporteTablaObjetos(objetos) {
        var arrayCuerpo = [];
        objetos.forEach((object) => {
            this.generarFilaObjeto(object, null, 'Etiqueta', arrayCuerpo);
        });
        return arrayCuerpo;
    }
    generarFilaObjeto(objeto, ambito, tipo, array) {
        let valor;
        objeto.texto === '' ? valor = "Etiqueta raiz" : valor = objeto.texto;
        let ambitoElemento;
        ambito === null ? ambitoElemento = "Global" : ambitoElemento = ambito;
        let tipoEti;
        objeto.completa === 1 ? tipoEti = "Doble" : tipoEti = "Simple";
        let fila = { no: this.contador,
            nombre: objeto.identificador,
            tipo: tipo,
            valor: valor,
            tipoEtiqueta: tipoEti,
            linea: objeto.linea,
            columna: objeto.columna,
            ambito: ambitoElemento
        };
        array.push(fila);
        this.contador++;
        objeto.listaAtributos.forEach((atribute) => {
            this.generarFilaAtributo(atribute, objeto.identificador, 'Atributo', array);
        });
        objeto.listaObjetos.forEach((atribute) => {
            this.generarFilaObjeto(atribute, objeto.identificador, 'Etiqueta', array);
        });
    }
    generarFilaAtributo(objeto, ambito, tipo, array) {
        let fila = {
            no: this.contador,
            nombre: objeto.identificador,
            tipo: tipo,
            valor: objeto.valor,
            tipoEtiqueta: "No aplica",
            linea: objeto.linea,
            columna: objeto.columna,
            ambito: ambito
        };
        array.push(fila);
        this.contador++;
    }
}


/***/ }),

/***/ "./src/analizadorXML/Codigo3D/xml3D.ts":
/*!*********************************************!*\
  !*** ./src/analizadorXML/Codigo3D/xml3D.ts ***!
  \*********************************************/
/*! exports provided: xml3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xml3D", function() { return xml3D; });
//const fs = require('fs');
class xml3D {
    constructor() {
        this.salida3D = '';
        this.tmpArray = [];
        this.contadorSalidas = 0;
        this.contadorEtiqueta = 0;
        this.contadort4 = 0;
        this.contadort5 = 0;
    }
    //Construccion del codigo 3D en C
    /*
    EJEMPLO LLAMADA:
    const dir = new xml3D();
    dir.getNodesByFilters(salidaG.objetos,lError.validateEtiquetas(salidaG.objetos).length,busqueda.returnListValues());
    */
    getNodesByFilters(objects, validationEt = 0, xpath) {
        this.salida3D += `
#include <stdio.h>
#include <locale.h>
#include <stdlib.h>\n\n

int STACK[30101999];
int HEAP[30101999];
int H = 0;
int S = 0;
int sp = 0;
int t0 = 0;
int t1 = 0;
int t2 = 0;
int t3 = 0;
int t4 = 0;
int t5 = 0;

void imprimir(){

    etiqueta_a:
        if(HEAP[t2] == 160){
            printf("á");
            goto etiqueta_exit;
        }
    etiqueta_e:
        if(HEAP[t2] == 130){
            printf("é");
            goto etiqueta_exit;
        }
    etiqueta_i:
        if(HEAP[t2] == 161){
            printf("í");
            goto etiqueta_exit;
        }
    etiqueta_o:
        if(HEAP[t2] == 162){
            printf("ó");
            goto etiqueta_exit;
        }
    etiqueta_u:
        if(HEAP[t2] == 163){
            printf("ú");
            goto etiqueta_exit;
        }
    etiqueta_n:
        if(HEAP[t2] == 164 ){
            printf("ñ");
            goto etiqueta_exit;
        }
    imprimir_todo:
        printf("%c",  HEAP[t2]);
        goto etiqueta_exit;

    etiqueta_exit:
        return;
}

void imprimir2(){
    etiqueta_a:
        if(HEAP[t4] == 160){
            printf("á");
            goto etiqueta_exit;
        }
    etiqueta_e:
        if(HEAP[t4] == 130){
            printf("é");
            goto etiqueta_exit;
        }
    etiqueta_i:
        if(HEAP[t4] == 161){
            printf("í");
            goto etiqueta_exit;
        }
    etiqueta_o:
        if(HEAP[t4] == 162){
            printf("ó");
            goto etiqueta_exit;
        }
    etiqueta_u:
        if(HEAP[t4] == 163){
            printf("ú");
            goto etiqueta_exit;
        }
    etiqueta_n:
        if(HEAP[t4] == 164 ){
            printf("ñ");
            goto etiqueta_exit;
        }
    etiqueta_neg:
        if(HEAP[t4] == -1 ){
            printf(" ");
            goto etiqueta_exit;
        }
    imprimir_todo:
        printf("%c",  HEAP[t4]);
        goto etiqueta_exit;

    etiqueta_exit:
        return;
}

void xml(){
    ${this.salida3D += this.create3dC(this.initSearchMethod(objects))}
    \n
    // ---------------------------------------- INICIO CODIGO PARA IMPRIMIR LOS VALORES XML
    sp = t1 - 1;
    int t4 = 0;
    
    printf("VALORES XML:%c",10);

    etiqueta_for:
        //printf("%d",HEAP[t4]);
        if( HEAP[t4] == -1 ){
            printf("%c", 10);            
            goto etiqueta_for2;
        }
        goto etiqueta_imp;
    etiqueta_for2:
        t4 = t4 + 1;
        if (t4 >= sp ) {
            goto etiqueta_salida;
        }
        goto etiqueta_for;

    etiqueta_imp:
        if( HEAP[t4] == 152 ){
            goto etiqueta_for2;
        }
    etiqueta_imp1:
        if( HEAP[t4] == 153 ){
            goto etiqueta_for2;
        }
    etiqueta_imp2:
        if( HEAP[t4] == 154 ){
            goto etiqueta_for2;
        }
    etiqueta_imp3:
        t2 = t4;
        imprimir();
        goto etiqueta_for2;
    // ---------------------------------------- FIN CODIGO PARA IMPRIMIR LOS VALORES

    etiqueta_salida:
        printf("Final Valores XML%c",10);

    return;
}

${this.getXpath3D(xpath)}


\n\n`;
        this.salida3D += `int main() {
    setlocale(LC_ALL,"");
    int ID_0 = 0;
    ID_0 = ${validationEt};

    if(ID_0 == 0){
        xml();
        goto impresion_xpath;
    }
    printf("Existe un error en las etiquetas");
    goto etiqueta_final;

    impresion_xpath:
        xpath();

    etiqueta_final:    
        return 0;`;
        this.salida3D += `\n}`;
        //Crear archivo 3d .c
        // fs.appendFile('codigo3D.c', this.salida3D, (error: any) => {
        //   if (error) {
        //     throw error;
        //}
        //});
        console.log(this.salida3D);
        return this.salida3D;
    }
    //Recorrer objetos obtenidos del analisis, para crear lista de 1d
    initSearchMethod(objects) {
        var qryValue = '';
        var index = 0;
        for (let i = 0; i < objects.length; i++) {
            qryValue += `152\n`;
            //qryValue += `${objects[i].linea}_${objects[i].columna}\n`;
            qryValue += `${objects[i].identificador}\n`;
            qryValue += this.findByRootNode(objects[i], index);
        }
        //console.log('-Salida {0}\n', qryValue);
        return qryValue;
    }
    findByRootNode(nodeObject, index = 0, parent = null) {
        var valueQry = '';
        var tamObj = 0;
        var tamAtr = 0;
        var arr = nodeObject.listaObjetos;
        var arr2 = nodeObject.listaAtributos;
        tamObj = arr.length;
        tamAtr = arr2.length;
        for (let i = 0; i < arr.length; i++) {
            valueQry += `153\n `; //OBJETO
            //valueQry += `${arr[i].linea}_${arr[i].columna}\n`;
            valueQry += `${arr[i].identificador}\n`;
            valueQry += `${arr[i].texto}\n`;
            valueQry += this.findByRootNode(arr[i]);
        }
        for (let i = 0; i < arr2.length; i++) {
            valueQry += `154\n`; //ATRIBUTO
            //valueQry += `${arr2[i].linea}_${arr2[i].columna}\n`;
            valueQry += `${arr2[i].identificador}\n`;
            valueQry += `${arr2[i].valor}\n`;
        }
        return valueQry;
    }
    //Colocar los valores de la lista1d en arreglo de caracteres en C
    create3dC(list) {
        var lista = '';
        var valores = list.split('\n');
        var contadorStack = 0;
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] === '') {
                lista += `\tHEAP[t1] = 32;   //TEXTO VACIO \n`;
                lista += `\tt1 = t1 + 1;\n`;
                this.tmpArray.push('32');
            }
            else if (valores[i].includes("152")) {
                //lista += `\tSTACK[(int)${contadorStack}] =  t1;   // --- AGREGAR OBJETO\n`;
                //contadorStack++;
                lista += `\tt0 = t1;\n`;
                lista += `\tHEAP[t1] = ${valores[i]};   //RAIZ\n`;
                lista += `\tt1 = t1 + 1;\n`;
                lista += `\tSTACK[(int)${contadorStack}] =  t0;   // --- AGREGAR OBJETO\n`;
                this.tmpArray.push(153);
            }
            else if (valores[i].includes("153")) {
                contadorStack++;
                lista += `\tt0 = t1;\n`;
                lista += `\tHEAP[t1] = ${valores[i]};   //OBJETO\n`;
                lista += `\tt1 = t1 + 1;\n`;
                lista += `\tSTACK[(int)${contadorStack}] =  t0;   // --- AGREGAR OBJETO\n`;
                this.tmpArray.push(valores[i]);
            }
            else if (valores[i].includes("154")) {
                lista += `\tHEAP[t1] = ${valores[i]};   //ATRIBUTO\n`;
                lista += `\tt1 = t1 + 1;\n`;
                this.tmpArray.push(valores[i]);
            }
            else if (valores[i].startsWith(" ")) {
                lista += this.splitString(valores[i].substring(1));
                lista += `\tHEAP[t1] = -1;   // --------- FIN DEL STRING\n`;
                lista += `\tt1 = t1 + 1;\n`;
                this.tmpArray.push(-1);
            }
            else {
                lista += this.splitString(valores[i]);
                lista += `\tHEAP[t1] = -1;   // --------- FIN DEL STRING\n`;
                lista += `\tt1 = t1 + 1;\n`;
                this.tmpArray.push(-1);
            }
        }
        return lista;
    }
    //Pasar string a cadena de caracteres
    splitString(word) {
        var tmpWord = '';
        var tmp = word.split('');
        for (let i = 0; i < tmp.length; i++) {
            var letter = '';
            if (tmp[i] === 'á' || tmp[i] === 'Á') {
                letter = '160';
            }
            else if (tmp[i] === 'é' || tmp[i] === 'É') {
                letter = '130';
            }
            else if (tmp[i] === 'í' || tmp[i] === 'Í') {
                letter = '161';
            }
            else if (tmp[i] === 'ó' || tmp[i] === 'Ó') {
                letter = '162';
            }
            else if (tmp[i] === 'ú' || tmp[i] === 'Ú') {
                letter = '163';
            }
            else if (tmp[i] === 'ñ' || tmp[i] === 'Ñ') {
                letter = '164';
            }
            else {
                letter = tmp[i].charCodeAt(0);
            }
            tmpWord += `\tHEAP[t1] = ${letter};     //${tmp[i]}\n`;
            tmpWord += `\tt1 = t1 + 1;\n`;
            this.tmpArray.push(letter);
        }
        return tmpWord;
    }
    getXpath3D(xpath) {
        var tmpCodigo = `void xpath(){
    printf("%c", 10);            
    printf("INICIO VALORES XPATH%c",10);

    `;
        for (let contAtr = 0; contAtr < xpath.length; contAtr++) {
            // console.log('--- ', xpath[contAtr]); //XPATH VALS
            tmpCodigo += this.findPosition(this.getSplitString(xpath[contAtr]));
        }
        tmpCodigo += `
    etiqueta_salida:
        printf("FIN VALORES XPATH%c",10);
        return;
}`;
        return tmpCodigo;
    }
    // Pasar el resultado del xpath a un arreglo de caracteres
    getSplitString(valList) {
        var tmp = [];
        if (valList.tipo === 'A') {
            tmp.push(154);
        }
        else if (valList.tipo === 'O') {
            tmp.push(153);
        }
        tmp = tmp.concat(this.getCharAtCodeSplit(valList.id));
        tmp = tmp.concat(-1);
        tmp = tmp.concat(this.getCharAtCodeSplit(valList.val));
        return tmp;
    }
    // Obtener code del caracter 
    getCharAtCodeSplit(valL) {
        var tmpAr = [];
        valL = valL.split('');
        for (let i = 0; i < valL.length; i++) {
            var letter = '';
            if (valL[i] === 'á' || valL[i] === 'Á') {
                letter = '160';
            }
            else if (valL[i] === 'é' || valL[i] === 'É') {
                letter = '130';
            }
            else if (valL[i] === 'í' || valL[i] === 'Í') {
                letter = '161';
            }
            else if (valL[i] === 'ó' || valL[i] === 'Ó') {
                letter = '162';
            }
            else if (valL[i] === 'ú' || valL[i] === 'Ú') {
                letter = '163';
            }
            else if (valL[i] === 'ñ' || valL[i] === 'Ñ') {
                letter = '164';
            }
            else if (valL[i] === '') {
                letter = '32';
            }
            else {
                letter = valL[i].charCodeAt(0);
            }
            tmpAr.push(letter);
        }
        return tmpAr;
    }
    // buscar posicion
    findPosition(xpathL) {
        var xpath3dCode = '';
        var found = false;
        for (let i = 0; i < this.tmpArray.length; i++) {
            if (this.tmpArray[i] == xpathL[0]) {
                found = this.validate(this.tmpArray, xpathL, i, 0);
                if (found) {
                    //console.log(' -- ', i, ' tam ', xpathL.length);
                    xpath3dCode += this.traducir3DXpath(i, xpathL.length);
                    break;
                }
            }
        }
        return xpath3dCode;
    }
    validate(arrTodo, arrPath, contTodo, contPath) {
        var hasFounded = false;
        if (arrTodo[contTodo] == arrPath[contPath]) {
            //console.log(contTodo, ' ', String.fromCharCode(arrPath[contPath]),' -- ', contPath);
            contTodo++;
            contPath++;
            hasFounded = this.validate(arrTodo, arrPath, contTodo, contPath);
        }
        if (contPath == (arrPath.length - 1)) {
            hasFounded = true;
        }
        return hasFounded;
    }
    traducir3DXpath(pos, tam) {
        var tmp = `
    t4 = ${pos};
    t5 = ${tam};
    etiqueta_part${this.contadorEtiqueta}:
        imprimir2();
        t4 = t4 + 1;
        t5 = t5 - 1; 
        if(t5 == 0) goto inicio${this.contadorSalidas};
        goto etiqueta_part${this.contadorEtiqueta};
        
    inicio${this.contadorSalidas}:
    printf("%c", 10);            
    \n`;
        this.contadorEtiqueta++;
        this.contadorSalidas++;
        return tmp;
    }
}
/*
    if(valores[i] === "OBJETO"){
    lista += `
    \n\n
    // ------------------------------ INICIA A GUARDAR UN OBJETO
    t1 = H;
    H = H + 5
    HEAP[(int)t1] = ${valores[i+2]};
    t1 = t1 + 1;
    HEAP[(int)t1] = ${valores[i+3]};
    t1 = t1 + 1;
    HEAP[(int)t1] = LISTA_OBJETOS};
    t1 = t1 + 1;
    HEAP[(int)t1] = -1};
    // ------------------------------ TERMINA GUARDAR UN OBJETO
    \n`;

    } else if(valores[i] === "ATRIBUTO"){

    }
*/


/***/ }),

/***/ "./src/analizadorXML/Errores/ListaErrores.ts":
/*!***************************************************!*\
  !*** ./src/analizadorXML/Errores/ListaErrores.ts ***!
  \***************************************************/
/*! exports provided: ListaErrores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaErrores", function() { return ListaErrores; });
/* harmony import */ var _Expresiones_tError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expresiones/tError */ "./src/analizadorXML/Expresiones/tError.ts");

class ListaErrores {
    constructor() {
        this.contador = 1;
        this.contador = 1;
    }
    //LLAMARLO AL INICIO PARA VALIDAR LAS ETIQUETAS
    validateEtiquetas(listaO) {
        var tmpArray = [];
        for (let i = 0; i < listaO.length; i++) {
            if (listaO[i].identificador !== listaO[i].cierre) {
                tmpArray.push(new _Expresiones_tError__WEBPACK_IMPORTED_MODULE_0__["tError"]('Semantico', `Etiquetas incorrectas ${listaO[i].identificador} !=== ${listaO[i].cierre}`, listaO[i].linea, listaO[i].columna));
                //console.log(`Etiquetas incorrectas ${listaO[i].identificador} !=== ${listaO[i].cierre}`);
            }
            else {
                var tmp = this.validateEtiquetas(listaO[i].listaObjetos);
                if (tmp.length !== 0) {
                    tmpArray = tmp;
                }
            }
        }
        return tmpArray;
    }
    /*
        var arrTmp = lError.validateEtiquetas(salidaG.objetos);
        console.log(lError.generateHtmlBody(salidaG.lErrores, arrTmp));
    */
    //ARCHIVO .HTML
    generateHtmlBody(erroresLS, erroresEtiquetas) {
        var arrayCuerpo = [];
        if (erroresLS.length > 0) {
            erroresLS.forEach((object) => {
                arrayCuerpo.push(this.getHtmlBody(object));
            });
        }
        if (erroresEtiquetas.length > 0) {
            erroresEtiquetas.forEach((object) => {
                arrayCuerpo.push(this.getHtmlBody(object));
            });
        }
        return arrayCuerpo;
    }
    getHtmlBody(error) {
        var fila = {
            no: this.contador,
            tipo: error.tipo,
            valor: error.texto,
            linea: error.linea,
            columna: error.columna
        };
        return fila;
    }
}


/***/ }),

/***/ "./src/analizadorXML/Expresiones/Atributo.ts":
/*!***************************************************!*\
  !*** ./src/analizadorXML/Expresiones/Atributo.ts ***!
  \***************************************************/
/*! exports provided: Atributo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atributo", function() { return Atributo; });
class Atributo {
    constructor(id, valor, linea, columna) {
        this.identificador = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }
}


/***/ }),

/***/ "./src/analizadorXML/Expresiones/Objeto.ts":
/*!*************************************************!*\
  !*** ./src/analizadorXML/Expresiones/Objeto.ts ***!
  \*************************************************/
/*! exports provided: Objeto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Objeto", function() { return Objeto; });
/* harmony import */ var _AST_Entorno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AST/Entorno */ "./src/analizadorXML/AST/Entorno.ts");

class Objeto {
    constructor(id, texto, linea, columna, listaAtributos, listaO, completa, cierre) {
        this.identificador = id;
        this.texto = texto;
        this.linea = linea;
        this.columna = columna;
        this.listaAtributos = listaAtributos;
        this.listaObjetos = listaO;
        this.entorno = new _AST_Entorno__WEBPACK_IMPORTED_MODULE_0__["Entorno"](null);
        this.completa = completa;
        this.cierre = cierre;
    }
}


/***/ }),

/***/ "./src/analizadorXML/Expresiones/tError.ts":
/*!*************************************************!*\
  !*** ./src/analizadorXML/Expresiones/tError.ts ***!
  \*************************************************/
/*! exports provided: tError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tError", function() { return tError; });
class tError {
    /**
     * @constructor creamos un nuevo primitivo
     * @param tipo hace referencia al tipo de error
     * @param texto hace referencia al contenido del mensaje del error
     * @param linea idica la linea donde se encuentra
     * @param columna indica la columna donde se encuentra
     */
    constructor(tipo, texto, linea, columna) {
        this.columna = columna;
        this.linea = linea;
        this.texto = texto;
        this.tipo = tipo;
    }
}


/***/ }),

/***/ "./src/analizadorXML/Gramatica/gramatica.js":
/*!**************************************************!*\
  !*** ./src/analizadorXML/Gramatica/gramatica.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,8],$V2=[2,6,7],$V3=[1,14],$V4=[1,15],$V5=[2,7],$V6=[14,20],$V7=[1,21],$V8=[1,20],$V9=[2,14,17,20],$Va=[1,40],$Vb=[1,47],$Vc=[1,38],$Vd=[1,37],$Ve=[1,45],$Vf=[1,35],$Vg=[1,36],$Vh=[1,39],$Vi=[1,42],$Vj=[1,43],$Vk=[1,44],$Vl=[1,46],$Vm=[1,48],$Vn=[1,49],$Vo=[1,50],$Vp=[1,51],$Vq=[1,52],$Vr=[1,53],$Vs=[1,54],$Vt=[1,55],$Vu=[1,56],$Vv=[1,57],$Vw=[1,58],$Vx=[1,59],$Vy=[1,60],$Vz=[1,61],$VA=[1,62],$VB=[1,63],$VC=[1,64],$VD=[1,65],$VE=[1,66],$VF=[2,7,9,11,12,17,20,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],$VG=[2,29];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"ENCODING":4,"RAICES":5,"EOF":6,"lt":7,"interC":8,"xml":9,"version":10,"asig":11,"StringLiteral":12,"encoding":13,"gt":14,"RAIZ":15,"OBJETO":16,"identifier":17,"LATRIBUTOS":18,"OBJETOS":19,"div":20,"LISTA_ID_OBJETO":21,"ATRIBUTOS":22,"ATRIBUTO":23,"LISTA_VALORES":24,"IntegerLiteral":25,"DoubleLiteral":26,"CharLiteral":27,"CARACTERES":28,"plus":29,"minus":30,"times":31,"mod":32,"equal":33,"nequal":34,"and":35,"or":36,"not":37,"semicolon":38,"lparen":39,"rparen":40,"lcurly":41,"rcurly":42,"lbracket":43,"rbracket":44,"period":45,"coma":46,"lesst":47,"greatert":48,"ampersand":49,"apostro":50,"quotation":51,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"lt",8:"interC",9:"xml",10:"version",11:"asig",12:"StringLiteral",13:"encoding",14:"gt",17:"identifier",20:"div",25:"IntegerLiteral",26:"DoubleLiteral",27:"CharLiteral",29:"plus",30:"minus",31:"times",32:"mod",33:"equal",34:"nequal",35:"and",36:"or",37:"not",38:"semicolon",39:"lparen",40:"rparen",41:"lcurly",42:"rcurly",43:"lbracket",44:"rbracket",45:"period",46:"coma",47:"lesst",48:"greatert",49:"ampersand",50:"apostro",51:"quotation"},
productions_: [0,[3,3],[4,11],[4,2],[5,2],[5,1],[15,1],[16,9],[16,9],[16,5],[16,2],[18,1],[18,0],[22,2],[22,1],[23,3],[23,2],[23,2],[19,2],[19,1],[21,2],[21,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
   
                                        reportBNF.push(`<START> ::= <RAICES> EOF`);
                                        reportBNF2.push('Start.val = Raiz.val. // Fin del documento');
                                        this.$ = $$[$0-1];
                                        return new SalidaGramatica(this.$, reportBNF, reportBNF2, $$[$0-2], listaErrores);
                                    
break;
case 2:
   this.$ = $$[$0-2]; 
break;
case 3:

            listaErrores.push(new tError('Sintactico',`Token inesperado: ${yytext}`,_$[$0-1].first_line,_$[$0-1].first_column));
        
break;
case 4:
   
                                reportBNF.push('<RAICES> ::= <RAICES> <RAIZ>');
                                reportBNF2.push('Raices.val = Raices.push(Raiz)');
                                $$[$0-1].push($$[$0]);
                                this.$ = $$[$0-1];
                            
break;
case 5:
 
                                reportBNF.push('<RAICES> ::= <RAIZ>');
                                reportBNF2.push('Raices.val = Raiz.val');
                                this.$ = [$$[$0]];
                            
break;
case 6:
 
                                reportBNF.push('<RAIZ> ::= <OBJETO>');
                                reportBNF2.push('Raiz.val = Objeto.val');
                                this.$ = $$[$0];
                            
break;
case 7:
 
                                                                                    reportBNF.push('<OBJETO> ::= lt identifier <LATRIBUTOS> gt <OBJETOS> lt div identifier gt');
                                                                                    reportBNF2.push('Objeto = new Objeto(id,\'\',linea, columna, atributos, objetos)');
                                                                                    this.$ = new Objeto($$[$0-7],'',_$[$0-8].first_line, _$[$0-8].first_column,$$[$0-6],$$[$0-4],1,$$[$0-1]);
                                                                                
break;
case 8:
 
                                                                                    reportBNF.push('<OBJETO> ::= lt identifier <LATRIBUTOS> gt <LISTA_ID_OBJETO> lt div identifier gt');
                                                                                    reportBNF2.push('Objeto = new Objeto(id,texto,linea, columna,atributos,[])');
                                                                                    this.$ = new Objeto($$[$0-7],$$[$0-4],_$[$0-8].first_line, _$[$0-8].first_column,$$[$0-6],[],1,$$[$0-1]);
                                                                                
break;
case 9:
 
                                                                                    reportBNF.push('<OBJETO> ::= lt identifier <LATRIBUTOS> div gt');
                                                                                    reportBNF2.push('Objeto = new Objeto(id,\'\',linea, columna,atributos,[])');
                                                                                    this.$ = new Objeto($$[$0-3],'',_$[$0-4].first_line, _$[$0-4].first_column,$$[$0-2],[],0,'');
                                                                                
break;
case 10:
   listaErrores.push(
                                                                                        new tError('Sintactico',`Token inesperado: ${yytext}`,_$[$0-1].first_line,_$[$0-1].first_column )
                                                                                    );
                                                                                
break;
case 11:
 
                                                    reportBNF.push('<LATRIBUTOS> ::= <ATRIBUTOS>');
                                                    reportBNF2.push('Lista_Atributos.val = Atributos.val');
                                                    this.$ = $$[$0];
                                                
break;
case 12:
 
                                                    reportBNF.push('<LATRIBUTOS> ::= /*vacio*/');
                                                    reportBNF2.push('Lista_Atributos.val = [] ');
                                                    this.$ = [];
                                                
break;
case 13:
   
                                                    reportBNF.push('<ATRIBUTOS> ::= <ATRIBUTOS> <ATRIBUTO>');
                                                    reportBNF2.push('Atributos.val = Atributos.push(Atributo)');
                                                    $$[$0-1].push($$[$0]);
                                                    this.$ = $$[$0-1];/*revisar*/
                                                
break;
case 14:
 
                                                    reportBNF.push('<ATRIBUTOS> ::= <ATRIBUTO>');
                                                    reportBNF2.push('Atributos.val = Atributo.val');
                                                    this.$ = [$$[$0]];
                                                
break;
case 15:
   
                                                    reportBNF.push('<ATRIBUTO> ::= identifier asig StringLiteral');
                                                    reportBNF2.push('Atributo = new Atributo(id, valor, fila, columna)');
                                                    this.$ = new Atributo($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
                                                
break;
case 16: case 17:
   listaErrores.push(
                                                        new tError('Sintactico',`Token inesperado: ${yytext}`,_$[$0-1].first_line,_$[$0-1].first_column )
                                                    );
                                                
break;
case 18:
   reportBNF.push('<OBJETOS> ::= <OBJETOS> <OBJETO>');
                                reportBNF2.push('Objetos.val = Objetos.push(Objeto)');
                                $$[$0-1].push($$[$0]);
                                this.$ = $$[$0-1];
                            
break;
case 19:
 
                                reportBNF.push('<OBJETOS> ::= <OBJETO>');
                                reportBNF2.push('Objetos.val = Objeto.val');
                                this.$ = [$$[$0]];
                            
break;
case 20:
 
                                                        reportBNF.push('<LISTA_ID_OBJETO> ::= <LISTA_ID_OBJETO> <LISTA_VALORES>');
                                                        reportBNF2.push('Lista_Id_Objeto.val = Lista_Id_Objeto.val + \' \' + Lista_Id_Objeto.val');
                                                        this.$ = $$[$0-1] + ' ' + $$[$0];
                                                    
break;
case 21:
   
                                                        reportBNF.push('<LISTA_ID_OBJETO> ::= <LISTA_VALORES>');
                                                        reportBNF2.push('Lista_Id_Objeto.val = Lista_valores.val');
                                                        this.$ = $$[$0];
                                                    
break;
case 22: case 23: case 24: case 25: case 26: case 27: case 28:

                                    this.$ = $$[$0];
                                
break;
case 29:
   listaErrores.push(
                                        new tError('Sintactico',`Token inesperado: ${yytext}`,_$[$0].first_line,_$[$0].first_column )
                                    );
                                
break;
case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
 this.$ = $$[$0];
break;
case 50:
 this.$ = '<';
break;
case 51:
 this.$ = '>';
break;
case 52:
 this.$ = '&';
break;
case 53:
 this.$ = '\'';
break;
case 54:
 this.$ = '"';
break;
}
},
table: [{2:[1,4],3:1,4:2,7:[1,3]},{1:[3]},{2:$V0,5:5,7:$V1,15:6,16:7},{8:[1,10]},{14:[1,11]},{2:$V0,6:[1,12],7:$V1,15:13,16:7},o($V2,[2,5]),o($V2,[2,6]),{17:$V3},{14:$V4},{9:[1,16]},o($V5,[2,3]),{1:[2,1]},o($V2,[2,4]),o($V6,[2,12],{18:17,22:18,23:19,2:$V7,17:$V8}),o($V2,[2,10]),{10:[1,22]},{14:[1,23],20:[1,24]},o($V6,[2,11],{23:25,2:$V7,17:$V8}),o($V9,[2,14]),{11:[1,26]},{7:[1,28],14:[1,27]},{11:[1,29]},{2:[1,34],7:$V1,9:$Va,11:$Vb,12:$Vc,16:32,17:$Vd,19:30,20:$Ve,21:31,24:33,25:$Vf,26:$Vg,27:$Vh,28:41,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD,51:$VE},{14:[1,67]},o($V9,[2,13]),{12:[1,68]},o($V9,[2,16]),o($V9,[2,17]),{12:[1,69]},{2:$V0,7:[1,70],16:71},{2:[1,74],7:[1,72],9:$Va,11:$Vb,12:$Vc,17:$Vd,20:$Ve,24:73,25:$Vf,26:$Vg,27:$Vh,28:41,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx,45:$Vy,46:$Vz,47:$VA,48:$VB,49:$VC,50:$VD,51:$VE},o($V5,[2,19]),o($VF,[2,21]),o($VF,$VG,{14:$V4}),o($VF,[2,22]),o($VF,[2,23]),o($VF,[2,24]),o($VF,[2,25]),o($VF,[2,26]),o($VF,[2,27]),o($VF,[2,28]),o($VF,[2,30]),o($VF,[2,31]),o($VF,[2,32]),o($VF,[2,33]),o($VF,[2,34]),o($VF,[2,35]),o($VF,[2,36]),o($VF,[2,37]),o($VF,[2,38]),o($VF,[2,39]),o($VF,[2,40]),o($VF,[2,41]),o($VF,[2,42]),o($VF,[2,43]),o($VF,[2,44]),o($VF,[2,45]),o($VF,[2,46]),o($VF,[2,47]),o($VF,[2,48]),o($VF,[2,49]),o($VF,[2,50]),o($VF,[2,51]),o($VF,[2,52]),o($VF,[2,53]),o($VF,[2,54]),o($V2,[2,9]),o($V9,[2,15]),{13:[1,75]},{17:$V3,20:[1,76]},o($V5,[2,18]),{20:[1,77]},o($VF,[2,20]),o($VF,$VG),{11:[1,78]},{17:[1,79]},{17:[1,80]},{12:[1,81]},{14:[1,82]},{14:[1,83]},{8:[1,84]},o($V2,$V5),o($V2,[2,8]),{14:[1,85]},o($V5,[2,2])],
defaultActions: {12:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const {Objeto} = __webpack_require__(/*! ../Expresiones/Objeto */ "./src/analizadorXML/Expresiones/Objeto.ts");
    const {Atributo} = __webpack_require__(/*! ../Expresiones/Atributo */ "./src/analizadorXML/Expresiones/Atributo.ts");
    const {SalidaGramatica} = __webpack_require__(/*! ../AST/SalidaGramatica */ "./src/analizadorXML/AST/SalidaGramatica.ts");
    const {tError} = __webpack_require__(/*! ../Expresiones/tError */ "./src/analizadorXML/Expresiones/tError.ts");
    var listaErrores = [];
    var reportBNF = [];
    var reportBNF2 = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:this.begin('comment');
break;
case 2:this.popState();
break;
case 3:/* skip comment content*/
break;
case 4:/* skip whitespace */
break;
case 5:return 47
break;
case 6:return 48
break;
case 7:return 49
break;
case 8:return 50
break;
case 9:return 51
break;
case 10:return 'null';
break;
case 11:return 'true';
break;
case 12:return 'false';
break;
case 13:return 9;
break;
case 14:return 10;
break;
case 15:return 13;
break;
case 16:return 29;
break;
case 17:return 30;
break;
case 18:return 31;
break;
case 19:return 20;
break;
case 20:return 32;
break;
case 21:return 'lte';
break;
case 22:return 'gte';
break;
case 23:return 7;
break;
case 24:return 14;
break;
case 25:return 11;
break;
case 26:return 33;
break;
case 27:return 34;
break;
case 28:return 35;
break;
case 29:return 36;
break;
case 30:return 37;
break;
case 31:return 8;
break;
case 32:return 38;
break;
case 33:return 46;
break;
case 34:return 45;
break;
case 35:return 39;
break;
case 36:return 40;
break;
case 37:return 41;
break;
case 38:return 42;
break;
case 39:return 43;
break;
case 40:return 44;
break;
case 41:return 26;
break;
case 42:return 25;
break;
case 43:return 17;
break;
case 44:return 12;
break;
case 45:return 27;
break;
case 46:
        listaErrores.push(new tError('Léxico',`Simbolo inesperado: ${yy_.yytext}`,yy_.yylloc.first_line,yy_.yylloc.first_column ));
        //console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
    
break;
case 47:return 6
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:<!--)/i,/^(?:-->)/i,/^(?:.)/i,/^(?:\s+)/i,/^(?:&lt;)/i,/^(?:&gt;)/i,/^(?:&amp;)/i,/^(?:&apos;)/i,/^(?:&quot;)/i,/^(?:null\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:xml\b)/i,/^(?:version\b)/i,/^(?:encoding\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:\?)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\.)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/i,/^(?:[0-9]+)/i,/^(?:[a-zA-Z_ñÑáÁéÉíÍóÓ][a-zA-Z0-9_ñÑáÁéÉíÍóÓ]*)/i,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]+))*"))/i,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]))'))/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"comment":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true},"INITIAL":{"rules":[0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/analizadorXML/Gramatica/gramaticaDesc.js":
/*!******************************************************!*\
  !*** ./src/analizadorXML/Gramatica/gramaticaDesc.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramaticaDesc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,5],$V1=[1,7],$V2=[1,13],$V3=[6,7],$V4=[2,14,22],$V5=[2,15],$V6=[1,17],$V7=[2,18],$V8=[1,33],$V9=[1,40],$Va=[1,31],$Vb=[1,30],$Vc=[1,38],$Vd=[1,28],$Ve=[1,29],$Vf=[1,32],$Vg=[1,35],$Vh=[1,36],$Vi=[1,37],$Vj=[1,39],$Vk=[1,41],$Vl=[1,42],$Vm=[1,43],$Vn=[1,44],$Vo=[1,45],$Vp=[1,46],$Vq=[1,47],$Vr=[1,48],$Vs=[1,49],$Vt=[1,50],$Vu=[1,51],$Vv=[1,52],$Vw=[1,53],$Vx=[1,54],$Vy=[1,55],$Vz=[1,56],$VA=[1,57],$VB=[1,58],$VC=[1,59],$VD=[7,9,11,12,17,22,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],$VE=[1,70],$VF=[1,68];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"ENCODING":4,"RAIZ":5,"EOF":6,"lt":7,"interC":8,"xml":9,"version":10,"asig":11,"StringLiteral":12,"encoding":13,"gt":14,"OBJETO":15,"OBJETOPRIN":16,"identifier":17,"LATRIBUTOS":18,"OBJETOSEC":19,"LISTA_ID_OBJETO":20,"OBJETOTER":21,"div":22,"ATRIBUTO":23,"LISTA_VALORES":24,"IntegerLiteral":25,"DoubleLiteral":26,"CharLiteral":27,"CARACTERES":28,"plus":29,"minus":30,"times":31,"mod":32,"equal":33,"nequal":34,"and":35,"or":36,"not":37,"semicolon":38,"lparen":39,"rparen":40,"lcurly":41,"rcurly":42,"lbracket":43,"rbracket":44,"period":45,"coma":46,"lesst":47,"greatert":48,"ampersand":49,"apostro":50,"quotation":51,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"lt",8:"interC",9:"xml",10:"version",11:"asig",12:"StringLiteral",13:"encoding",14:"gt",17:"identifier",22:"div",25:"IntegerLiteral",26:"DoubleLiteral",27:"CharLiteral",29:"plus",30:"minus",31:"times",32:"mod",33:"equal",34:"nequal",35:"and",36:"or",37:"not",38:"semicolon",39:"lparen",40:"rparen",41:"lcurly",42:"rcurly",43:"lbracket",44:"rbracket",45:"period",46:"coma",47:"lesst",48:"greatert",49:"ampersand",50:"apostro",51:"quotation"},
productions_: [0,[3,3],[4,11],[4,2],[5,2],[5,0],[15,2],[16,3],[19,4],[19,2],[19,2],[21,3],[21,3],[21,2],[18,2],[18,0],[23,3],[20,2],[20,0],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
   
            reportBNF.push(`<START> ::= <ENCODING> <RAIZ> EOF`);
            reportBNF2.push('Start.val = Raiz.val. // Fin del documento');
            this.$ = $$[$0-1];
            return new SalidaGramatica(this.$, reportBNF, reportBNF2, $$[$0-2], listaErrores);
        
break;
case 2:

            reportBNF.push(`<ENCODING> ::= lt interC xml version asig StringLiteral encoding asig StringLiteral interC gt`);
            reportBNF2.push('Encoding.val = StringLiteral'); 
            this.$ = $$[$0-2]; 
        
break;
case 3: case 10: case 13:

            listaErrores.push(new tError('Sintactico',`Token inesperado: ${yytext}`,_$[$0-1].first_line,_$[$0-1].first_column));
        
break;
case 4:
 
            reportBNF.push('<RAIZ> ::= <OBJETO> <RAIZ>');
            reportBNF2.push('Raiz.val = Objeto.val.Concatenar(Raiz.Val])');
            this.$ = $$[$0-1].concat($$[$0]);
        
break;
case 5:
 this.$ = [] 
break;
case 6:
 
            reportBNF.push('<OBJETO> ::= lt <OBJETOPRIN>');
            reportBNF2.push('OBJETO.val = [Objetoprin.val]');
            this.$ = [$$[$0]] 
        
break;
case 7:

            let nuevo = null;
            if ($$[$0].tipo === 0){
                nuevo = new Objeto($$[$0-2], '', _$[$0-2].first_line, _$[$0-2].first_column, $$[$0-1], [], 0, $$[$0].id)
            }else if ($$[$0].id !== ""){
                if ($$[$0].lista !== null){
                    nuevo = new Objeto($$[$0-2], '', _$[$0-2].first_line, _$[$0-2].first_column, $$[$0-1], $$[$0].lista, 1, $$[$0].id)
                }else if ($$[$0].texto !== ""){
                    nuevo = new Objeto($$[$0-2], $$[$0].texto, _$[$0-2].first_line, _$[$0-2].first_column, $$[$0-1], [], 1, $$[$0].id)
                }else{
                    nuevo = new Objeto($$[$0-2], '', _$[$0-2].first_line, _$[$0-2].first_column, $$[$0-1], [], 1, $$[$0].id)
                }
                
            }
            reportBNF.push('<OBJETOPRIN> ::= identifier <LATRIBUTOS> <OBJETOSEC>')
            reportBNF2.push('Objetoprin.val = new Objeto(id, texto, linea, columna, atributos, objetos, completo, cierre)')
            this.$ = nuevo
        
break;
case 8:

            reportBNF.push('<OBJETOSEC> ::= gt <LISTA_ID_OBJETO> lt <OBJETOTER>')
            reportBNF2.push('Objetosec.val = Objetoter.val')
            if ($$[$0].id !== ""){
                if($$[$0-2] !== "") { $$[$0].texto = $$[$0-2] }
                this.$ = $$[$0]
            }
        
break;
case 9:

            reportBNF.push('<OBJETOSEC> ::= div gt')
            reportBNF2.push('Objetosec.val = {texto: vacio, lista: vacia: id: vacio, tipo: simple}')
            this.$ = {texto: '', lista: null, id: '', tipo: 0}
        
break;
case 11:

            reportBNF.push('<OBJETOTER> ::= div identifier gt')
            reportBNF2.push('Objetoter = {texto: vacio, lista: vacia, id: identifier, tipo: doble}')
            this.$ = {texto: '', lista: null, id: $$[$0-1], tipo: 1}
        
break;
case 12:

            reportBNF.push('<OBJETOTER> ::= <OBJETOPRIN> lt <OBJETOTER>')
            if($$[$0].id !== ""){
                if ($$[$0-2] instanceof Objeto){
                    if ($$[$0].lista === null){
                        reportBNF2.push('Objetoter.val = {texto: vacio, lista: [Objetoprin.val], id: Objetoter.val, tipo: doble}}')
                        this.$ = {texto: '', lista: [$$[$0-2]], id: $$[$0].id, tipo: 1}
                    }else{
                        reportBNF2.push('Objetoter.lista.agregarAlInicio(Objetoprin.val); Objetoter.val = {texto: vacio, lista: Objetoter.val, id: Objetoter.val, tipo: doble}}')
                        $$[$0].lista.unshift($$[$0-2])
                        this.$ = {texto: '', lista: $$[$0].lista, id: $$[$0].id, tipo: 1}
                    }
                }else if($$[$0-2] === null) { 
                    reportBNF2.push('Objetoter.val = Objetoter.val')
                    this.$ === $$[$0] 
                }
            }
        
break;
case 14:
 
            reportBNF.push('<LATRIBUTOS> ::= <ATRIBUTOS> <LATRIBUTOS>');
            reportBNF2.push('Latributos.val.agregar(Atributo.val)');
            this.$ = $$[$0-1].concat($$[$0])
        
break;
case 15:
 
            reportBNF.push('<LATRIBUTOS> ::= epsilon');
            reportBNF2.push('Latributos.val = [] ');
            this.$ = [];
        
break;
case 16:
   
            reportBNF.push('<ATRIBUTO> ::= identifier asig StringLiteral');
            reportBNF2.push('Atributo.val = [new Atributo(id, valor, fila, columna)]');
            this.$ = [new Atributo($$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column)]
        
break;
case 17:

            reportBNF.push('<LISTA_ID_OBJETO> ::= <LISTA_VALORES> <LISTA_ID_OBJETO>');
            reportBNF2.push('Lista_id_objeto.val = Lista_valores.val + \" \" + Lista_id_objeto.val');
            this.$ = $$[$0-1] + " " +  $$[$0];
        
break;
case 18:
   
            reportBNF.push('<LISTA_ID_OBJETO> ::= epsilon');
            reportBNF2.push('Lista_id_objeto.val = \"\"');
            this.$ = "";
        
break;
case 19:

            reportBNF.push('<LISTA_VALORES> ::= IntegerLiteral');
            reportBNF2.push('Lista_valores.val = IntegerLiteral');
            this.$ = $$[$0]; 
        
break;
case 20:
 
            reportBNF.push('<LISTA_VALORES> ::= DoubleLiteral');
            reportBNF2.push('Lista_valores.val = DoubleLiteral');
            this.$ = $$[$0]; 
        
break;
case 21:
 
            reportBNF.push('<LISTA_VALORES> ::= identifier');
            reportBNF2.push('Lista_valores.val = identifier');
            this.$ = $$[$0]; 
        
break;
case 22:
 
            reportBNF.push('<LISTA_VALORES> ::= StringLiteral');
            reportBNF2.push('Lista_valores.val = StringLiteral');
            this.$ = $$[$0]; 
        
break;
case 23:
 
            reportBNF.push('<LISTA_VALORES> ::= CharLiteral');
            reportBNF2.push('Lista_valores.val = CharLiteral');
            this.$ = $$[$0]; 
        
break;
case 24:
 
            reportBNF.push('<LISTA_VALORES> ::= xml');
            reportBNF2.push('Lista_valores.val = xml');
            this.$ = $$[$0]; 
        
break;
case 25:
 
            reportBNF.push('<LISTA_VALORES> ::= <CARACTERES>');
            reportBNF2.push('Lista_valores.val = Caracteres.val');
            this.$ = $$[$0]; 
        
break;
case 26: case 27:
 
            reportBNF.push('<CARACTERES> ::= plus');
            reportBNF2.push('Caracteres.val = plus');
            this.$ = $$[$0];
        
break;
case 28:
 
            reportBNF.push('<CARACTERES> ::= times');
            reportBNF2.push('Caracteres.val = times');
            this.$ = $$[$0];
        
break;
case 29:
 
            reportBNF.push('<CARACTERES> ::= div');
            reportBNF2.push('Caracteres.val = div');
            this.$ = $$[$0];
        
break;
case 30:
 
            reportBNF.push('<CARACTERES> ::= mod');
            reportBNF2.push('Caracteres.val = mod');
            this.$ = $$[$0];
        
break;
case 31:
 
            reportBNF.push('<CARACTERES> ::= asign');
            reportBNF2.push('Caracteres.val = asign');
            this.$ = $$[$0];
        
break;
case 32:
 
            reportBNF.push('<CARACTERES> ::= equal');
            reportBNF2.push('Caracteres.val = equal');
            this.$ = $$[$0];
        
break;
case 33:
 
            reportBNF.push('<CARACTERES> ::= nequal');
            reportBNF2.push('Caracteres.val = nequal');
            this.$ = $$[$0];
        
break;
case 34:
 
            reportBNF.push('<CARACTERES> ::= and');
            reportBNF2.push('Caracteres.val = and');
            this.$ = $$[$0];
        
break;
case 35:
 
            reportBNF.push('<CARACTERES> ::= or');
            reportBNF2.push('Caracteres.val = or');
            this.$ = $$[$0];
        
break;
case 36:
 
            reportBNF.push('<CARACTERES> ::= not');
            reportBNF2.push('Caracteres.val = not');
            this.$ = $$[$0];
        
break;
case 37:
 
            reportBNF.push('<CARACTERES> ::= semicolon');
            reportBNF2.push('Caracteres.val = semicolon');
            this.$ = $$[$0];
        
break;
case 38:
 
            reportBNF.push('<CARACTERES> ::= lparen');
            reportBNF2.push('Caracteres.val = lparen');
            this.$ = $$[$0];
        
break;
case 39:
 
            reportBNF.push('<CARACTERES> ::= rparen');
            reportBNF2.push('Caracteres.val = rparen');
            this.$ = $$[$0];
        
break;
case 40:
 
            reportBNF.push('<CARACTERES> ::= lcurly');
            reportBNF2.push('Caracteres.val = lcurly');
            this.$ = $$[$0];
        
break;
case 41:
 
            reportBNF.push('<CARACTERES> ::= rcurly');
            reportBNF2.push('Caracteres.val = rcurly');
            this.$ = $$[$0];
        
break;
case 42:
 
            reportBNF.push('<CARACTERES> ::= lbracket');
            reportBNF2.push('Caracteres.val = lbracket');
            this.$ = $$[$0];
        
break;
case 43:
 
            reportBNF.push('<CARACTERES> ::= rbracket');
            reportBNF2.push('Caracteres.val = rbracket');
            this.$ = $$[$0];
        
break;
case 44:
 
            reportBNF.push('<CARACTERES> ::= period');
            reportBNF2.push('Caracteres.val = period');
            this.$ = $$[$0];
        
break;
case 45:
 
            reportBNF.push('<CARACTERES> ::= coma');
            reportBNF2.push('Caracteres.val = coma');
            this.$ = $$[$0];
        
break;
case 46:
 
            reportBNF.push('<CARACTERES> ::= lesst');
            reportBNF2.push('Caracteres.val = >');
            this.$ = '<';
        
break;
case 47:
 
            reportBNF.push('<CARACTERES> ::= greatert');
            reportBNF2.push('Caracteres.val = >');
            this.$ = '>';
        
break;
case 48:
 
            reportBNF.push('<CARACTERES> ::= ampersand');
            reportBNF2.push('Caracteres.val = &');
            this.$ = '&';
        
break;
case 49:
 
            reportBNF.push('<CARACTERES> ::= apostro');
            reportBNF2.push('Caracteres.val = \'');
            this.$ = '\'';
        
break;
case 50:
 
            reportBNF.push('<CARACTERES> ::= quotation');
            reportBNF2.push('Caracteres.val = \"');
            this.$ = '"';
        
break;
}
},
table: [{2:[1,4],3:1,4:2,7:[1,3]},{1:[3]},{5:5,6:$V0,7:$V1,15:6},{8:[1,8]},{14:[1,9]},{6:[1,10]},{5:11,6:$V0,7:$V1,15:6},{16:12,17:$V2},{9:[1,14]},o($V3,[2,3]),{1:[2,1]},{6:[2,4]},o($V3,[2,6]),o($V4,$V5,{18:15,23:16,17:$V6}),{10:[1,18]},{2:[1,22],14:[1,20],19:19,22:[1,21]},o($V4,$V5,{23:16,18:23,17:$V6}),{11:[1,24]},{11:[1,25]},o($V3,[2,7]),{7:$V7,9:$V8,11:$V9,12:$Va,17:$Vb,20:26,22:$Vc,24:27,25:$Vd,26:$Ve,27:$Vf,28:34,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz,49:$VA,50:$VB,51:$VC},{14:[1,60]},{14:[1,61]},o($V4,[2,14]),{12:[1,62]},{12:[1,63]},{7:[1,64]},{7:$V7,9:$V8,11:$V9,12:$Va,17:$Vb,20:65,22:$Vc,24:27,25:$Vd,26:$Ve,27:$Vf,28:34,29:$Vg,30:$Vh,31:$Vi,32:$Vj,33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw,46:$Vx,47:$Vy,48:$Vz,49:$VA,50:$VB,51:$VC},o($VD,[2,19]),o($VD,[2,20]),o($VD,[2,21]),o($VD,[2,22]),o($VD,[2,23]),o($VD,[2,24]),o($VD,[2,25]),o($VD,[2,26]),o($VD,[2,27]),o($VD,[2,28]),o($VD,[2,29]),o($VD,[2,30]),o($VD,[2,31]),o($VD,[2,32]),o($VD,[2,33]),o($VD,[2,34]),o($VD,[2,35]),o($VD,[2,36]),o($VD,[2,37]),o($VD,[2,38]),o($VD,[2,39]),o($VD,[2,40]),o($VD,[2,41]),o($VD,[2,42]),o($VD,[2,43]),o($VD,[2,44]),o($VD,[2,45]),o($VD,[2,46]),o($VD,[2,47]),o($VD,[2,48]),o($VD,[2,49]),o($VD,[2,50]),o($V3,[2,9]),o($V3,[2,10]),o([2,14,17,22],[2,16]),{13:[1,66]},{2:$VE,16:69,17:$V2,21:67,22:$VF},{7:[2,17]},{11:[1,71]},o($V3,[2,8]),{17:[1,72]},{7:[1,73]},{14:[1,74]},{12:[1,75]},{14:[1,76]},{2:$VE,16:69,17:$V2,21:77,22:$VF},o($V3,[2,13]),{8:[1,78]},o($V3,[2,11]),o($V3,[2,12]),{14:[1,79]},o($V3,[2,2])],
defaultActions: {10:[2,1],11:[2,4],65:[2,17]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const {Objeto} = __webpack_require__(/*! ../Expresiones/Objeto */ "./src/analizadorXML/Expresiones/Objeto.ts");
    const {Atributo} = __webpack_require__(/*! ../Expresiones/Atributo */ "./src/analizadorXML/Expresiones/Atributo.ts");
    const {SalidaGramatica} = __webpack_require__(/*! ../AST/SalidaGramatica */ "./src/analizadorXML/AST/SalidaGramatica.ts");
    const {tError} = __webpack_require__(/*! ../Expresiones/tError */ "./src/analizadorXML/Expresiones/tError.ts");

    var listaErrores = [];
    var reportBNF = [];
    var reportBNF2 = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:this.begin('comment');
break;
case 2:this.popState();
break;
case 3:/* skip comment content*/
break;
case 4:/* skip whitespace */
break;
case 5:return 47
break;
case 6:return 48
break;
case 7:return 49
break;
case 8:return 50
break;
case 9:return 51
break;
case 10:return 'null';
break;
case 11:return 'true';
break;
case 12:return 'false';
break;
case 13:return 9;
break;
case 14:return 10;
break;
case 15:return 13;
break;
case 16:return 29;
break;
case 17:return 30;
break;
case 18:return 31;
break;
case 19:return 22;
break;
case 20:return 32;
break;
case 21:return 'lte';
break;
case 22:return 'gte';
break;
case 23:return 7;
break;
case 24:return 14;
break;
case 25:return 11;
break;
case 26:return 33;
break;
case 27:return 34;
break;
case 28:return 35;
break;
case 29:return 36;
break;
case 30:return 37;
break;
case 31:return 8;
break;
case 32:return 38;
break;
case 33:return 46;
break;
case 34:return 45;
break;
case 35:return 39;
break;
case 36:return 40;
break;
case 37:return 41;
break;
case 38:return 42;
break;
case 39:return 43;
break;
case 40:return 44;
break;
case 41:return 26;
break;
case 42:return 25;
break;
case 43:return 17;
break;
case 44:return 12;
break;
case 45:return 27;
break;
case 46:
        listaErrores.push(new tError('Léxico',`Simbolo inesperado: ${yy_.yytext}`,yy_.yylloc.first_line,yy_.yylloc.first_column ));
        console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
    
break;
case 47:return 6
break;
}
},
rules: [/^(?:\/\/.*)/i,/^(?:<!--)/i,/^(?:-->)/i,/^(?:.)/i,/^(?:\s+)/i,/^(?:&lt;)/i,/^(?:&gt;)/i,/^(?:&amp;)/i,/^(?:&apos;)/i,/^(?:&quot;)/i,/^(?:null\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:xml\b)/i,/^(?:version\b)/i,/^(?:encoding\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:\?)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\.)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/i,/^(?:[0-9]+)/i,/^(?:[a-zA-Z_áÁéÉíÍóÓ][a-zA-Z0-9_ñÑ]*)/i,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]+))*"))/i,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]))'))/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"comment":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true},"INITIAL":{"rules":[0,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = gramaticaDesc;
exports.Parser = gramaticaDesc.Parser;
exports.parse = function () { return gramaticaDesc.parse.apply(gramaticaDesc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ 1).readFileSync(__webpack_require__(/*! path */ 2).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/analizadorXML/Instrucciones/Busqueda/xpathBusqueda.ts":
/*!*******************************************************************!*\
  !*** ./src/analizadorXML/Instrucciones/Busqueda/xpathBusqueda.ts ***!
  \*******************************************************************/
/*! exports provided: xpathBusqueda */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xpathBusqueda", function() { return xpathBusqueda; });
class xpathBusqueda {
    constructor() {
        this.listNodosName = [];
        this.listObjects = [];
    }
    getNodesByFilters(filter, param, objects) {
        var salida;
        // solo el nombre del root ej: mundo
        if (filter === '1') {
            salida = this.findByRootName(param, objects);
        }
        // rutas 
        if (filter === '2') {
            salida = this.startTypeSearch(param, objects);
        }
        //multiples rutas ej. /mundo/continente/pais1/nombre|/mundo/continente/pais/nombre
        if (filter === '3') {
            salida = [];
            if (param.includes('|')) {
                var parameters = param.split('|');
                //console.log('val nodo m ', parameters);
                for (let i = 0; i < parameters.length; i++) {
                    salida.push(this.startTypeSearch(parameters[i], objects));
                }
            }
        }
        return salida;
    }
    startTypeSearch(param, objects) {
        // console.log('param ', param);
        param = param.replace('//', '/-');
        // console.log('param replace ', param);
        //ruta relativa, inicia con /        
        if (param.startsWith('/')) {
            /*console.log('val nodo\n\t', */ return this.initSearchMethod(param.substring(1), objects); //);
        }
        else {
            /*console.log('val nodo\n\t',*/ return this.initSearchMethod(param, objects); //);
        }
    }
    // 1. Obtener cuando solo se escribe el nombre
    findByRootName(param, objects) {
        var valorNodo = '';
        objects.forEach((obj) => {
            if (obj.identificador === param) {
                valorNodo += '\n - ';
                if (obj.listaObjetos.length !== 0) {
                    valorNodo += this.findValuesNodes(obj);
                }
                else {
                    valorNodo += obj.text;
                }
            }
        });
        return valorNodo;
    }
    // 2. Obtener cuando la ruta empiza por el root '/'
    initSearchMethod(param, objects) {
        var qryValue = '';
        var parameters = param.split('/');
        for (let i = 0; i < objects.length; i++) {
            qryValue = this.findByRootNode(parameters, objects[i]);
        }
        return qryValue;
    }
    findByRootNode(param, nodeObject, index = 0, parent = null) {
        // console.log('\nNODE: ', nodeObject.identificador);
        // console.log('PARAM: ', index);
        // console.log('TMP ROOT: ', param[index]);
        var valueQry = '';
        const tmp = index + 1;
        var root = param[index];
        var hasDoubleSlash = false;
        if (root.startsWith('-')) {
            hasDoubleSlash = true;
        }
        if (nodeObject.identificador === root && tmp === param.length) {
            //console.log('FINAL NODE ', nodeObject.identificador);
            valueQry += this.findValuesNodes(nodeObject);
        }
        else if (nodeObject.identificador === root && param.length > tmp) {
            var arr = nodeObject.listaObjetos;
            var secondR = param[tmp];
            // console.log('SECOND ROOT', secondR);
            var hasPassedDot = false;
            var hasAtribute = false;
            for (let i = 0; i < arr.length; i++) {
                var tmpParam = param;
                if (arr[i].identificador === secondR) {
                    valueQry += `${this.findByRootNode(tmpParam, arr[i], tmp, nodeObject)}\n`;
                }
                else if (secondR.startsWith('-')) {
                    valueQry += `${this.findByRootNode(tmpParam, arr[i], tmp, nodeObject)}\n`;
                }
                else if (secondR === '.' && !hasPassedDot) {
                    hasPassedDot = true;
                    valueQry += this.findValuesNodes(nodeObject);
                }
                else if (secondR === '..' && !hasPassedDot) {
                    hasPassedDot = true;
                    valueQry += this.findValuesNodes(parent);
                }
                else if (secondR.startsWith('@*') && !hasAtribute) {
                    hasAtribute = true;
                    valueQry += this.findAllAtribute(nodeObject);
                }
                else if (secondR.startsWith('@') && !hasAtribute) {
                    hasAtribute = true;
                    valueQry += this.findAtribute(nodeObject, secondR);
                }
            }
            if (arr.length === 0 && secondR === '.') {
                valueQry += this.findValuesNodes(nodeObject);
            }
            else if (arr.length === 0 && secondR === '..') {
                valueQry += this.findValuesNodes(parent);
            }
            else if (arr.length === 0 && secondR.startsWith('@*')) {
                valueQry += this.findAllAtribute(nodeObject);
            }
            else if (arr.length === 0 && secondR.startsWith('@')) {
                valueQry += this.findAtribute(nodeObject, secondR);
            }
        }
        else if (hasDoubleSlash) {
            //  console.log('TIENE SLASH');
            const tmpName = param[index].substring(1);
            if (tmpName === nodeObject.identificador && tmp === param.length) {
                valueQry += this.findValuesNodes(nodeObject);
            }
            else if (tmpName === nodeObject.identificador) {
                var arr = nodeObject.listaObjetos;
                var secondR = param[tmp];
                // console.log('SECOND ROOT+', secondR);
                var hasPassedDot = false;
                var hasAtribute = false;
                for (let i = 0; i < arr.length; i++) {
                    var tmpParam = param;
                    if (arr[i].identificador === secondR) {
                        valueQry += `${this.findByRootNode(tmpParam, arr[i], tmp, nodeObject)}\n`;
                    }
                    else if (secondR.startsWith('-')) {
                        valueQry += `${this.findByRootNode(tmpParam, arr[i], tmp, nodeObject)}\n`;
                    }
                    else if (secondR === '.' && !hasPassedDot) {
                        hasPassedDot = true;
                        valueQry += this.findValuesNodes(nodeObject);
                    }
                    else if (secondR === '..' && !hasPassedDot) {
                        hasPassedDot = true;
                        valueQry += this.findValuesNodes(parent);
                    }
                    else if (secondR.startsWith('@*') && !hasAtribute) {
                        hasAtribute = true;
                        valueQry += this.findAllAtribute(nodeObject);
                    }
                    else if (secondR.startsWith('@') && !hasAtribute) {
                        hasAtribute = true;
                        valueQry += this.findAtribute(nodeObject, secondR);
                    }
                }
                if (arr.length === 0 && secondR === '.') {
                    valueQry += this.findValuesNodes(nodeObject);
                }
                else if (arr.length === 0 && secondR === '..') {
                    valueQry += this.findValuesNodes(parent);
                }
                else if (arr.length === 0 && secondR.startsWith('@*')) {
                    valueQry += this.findAllAtribute(nodeObject);
                }
                else if (arr.length === 0 && secondR.startsWith('@')) {
                    valueQry += this.findAtribute(nodeObject, secondR);
                }
            }
            else {
                if (param[index].startsWith('-@*')) {
                    valueQry += this.findAllAtribute(nodeObject);
                }
                else if (param[index].startsWith('-@')) {
                    valueQry += this.findAtribute(nodeObject, param[index].substring(1));
                }
                else if (param[index].startsWith('-*')) {
                    valueQry += `NODOS: \n\t ${this.findValuesNodes(nodeObject)}`;
                    // valueQry += `ATRIBUTOS: \n\t ${this.findAllAtribute(nodeObject)}`;
                }
                var arr1 = nodeObject.listaObjetos;
                for (let i = 0; i < arr1.length; i++) {
                    var tmpParam = param;
                    valueQry += `${this.findByRootNode(tmpParam, arr1[i], index)}`;
                }
            }
        }
        else {
            console.log('ELSEEEEEEEEEEE', nodeObject.identificador, '-', param);
        }
        return valueQry;
    }
    // Obtener el valor de los nodos
    findValuesNodes(nodeList) {
        var texto = ' ';
        if (nodeList.listaObjetos.length !== 0) {
            nodeList.listaObjetos.forEach((obj) => {
                texto += this.findValuesNodes(obj);
            });
        }
        else {
            texto += `<${nodeList.identificador}>${nodeList.texto}</${nodeList.cierre}>\n`;
            this.listNodosName.push({ id: nodeList.identificador, val: nodeList.texto, tipo: 'O' });
            this.listObjects.push(nodeList); //para el for
        }
        // console.log('TEXTO ', texto);
        return texto;
    }
    findAtribute(nodeList, param) {
        var texto = ' ';
        if (nodeList.listaAtributos.length !== 0) {
            nodeList.listaAtributos.forEach((obj) => {
                if (obj.identificador === param.substring(1)) {
                    texto += `- ${obj.valor}\n`;
                    this.listNodosName.push({ id: obj.identificador, val: obj.valor, tipo: 'A' });
                    this.listObjects.push(nodeList); //para el for
                }
            });
        }
        return texto;
    }
    findAllAtribute(nodeList) {
        var texto = ' ';
        if (nodeList.listaAtributos.length !== 0) {
            nodeList.listaAtributos.forEach((obj) => {
                texto += `- ${obj.valor}\n`;
                this.listNodosName.push({ id: obj.identificador, val: obj.valor, tipo: 'A' });
                this.listObjects.push(nodeList); //para el for
            });
        }
        return texto;
    }
    returnListValues() {
        //SALIDA 3D
        /*for(let i = 0; i < this.listNodosName.length; i ++){
            console.log(this.listNodosName[i]);
        }*/
        return this.listNodosName;
    }
    returnListObjects() {
        /*for (let i = 0; i < this.listObjects.length; i++) {
            console.log(this.listObjects[i]);
        }*/
        return this.listObjects;
    }
    clearList() {
        this.listNodosName = [];
        this.listObjects = [];
    }
}


/***/ }),

/***/ "./src/analizadorXML/index.ts":
/*!************************************!*\
  !*** ./src/analizadorXML/index.ts ***!
  \************************************/
/*! exports provided: AnalizadorASCXML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalizadorASCXML", function() { return AnalizadorASCXML; });
/* harmony import */ var _AST_CST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AST/CST */ "./src/analizadorXML/AST/CST.ts");
/* harmony import */ var _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AST/GramaticaBNF */ "./src/analizadorXML/AST/GramaticaBNF.ts");
/* harmony import */ var _AST_TablaSimbolos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AST/TablaSimbolos */ "./src/analizadorXML/AST/TablaSimbolos.ts");
/* harmony import */ var _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errores/ListaErrores */ "./src/analizadorXML/Errores/ListaErrores.ts");
/* harmony import */ var _Gramatica_gramatica__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gramatica/gramatica */ "./src/analizadorXML/Gramatica/gramatica.js");
/* harmony import */ var _Gramatica_gramatica__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Gramatica_gramatica__WEBPACK_IMPORTED_MODULE_4__);





class AnalizadorASCXML {
    ejecutarCodigo(entrada) {
        const tabla = new _AST_TablaSimbolos__WEBPACK_IMPORTED_MODULE_2__["TablaSimbolos"]();
        const salidaG = _Gramatica_gramatica__WEBPACK_IMPORTED_MODULE_4__["parse"](entrada);
        const arbolCST = new _AST_CST__WEBPACK_IMPORTED_MODULE_0__["CST"](salidaG.objetos);
        const Listaerrores = new _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_3__["ListaErrores"]();
        // TABLA SIMBOLOS
        let reporteTabla = tabla.generarReporteTablaObjetos(salidaG.objetos);
        // BNF
        let gramBnf = new _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_1__["GramaticaBNF"](salidaG.reporteBNF, salidaG.reporteBNF2);
        let reporteBNF = gramBnf.getBNFReport();
        // DOT CST
        let reporteCST = arbolCST.generarArbolCST(salidaG.objetos);
        //Errores
        let errores = Listaerrores.generateHtmlBody(salidaG.lErrores, Listaerrores.validateEtiquetas(salidaG.objetos));
        let ret = {
            tablaRep: reporteTabla,
            bnfRep: reporteBNF,
            cstRep: reporteCST,
            encoding: salidaG.encoding,
            objetos: salidaG.objetos,
            errores: errores
        };
        return ret;
    }
}


/***/ }),

/***/ "./src/analizadorXML/indexDesc.ts":
/*!****************************************!*\
  !*** ./src/analizadorXML/indexDesc.ts ***!
  \****************************************/
/*! exports provided: AnalizadorASCXML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalizadorASCXML", function() { return AnalizadorASCXML; });
/* harmony import */ var _AST_CST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AST/CST */ "./src/analizadorXML/AST/CST.ts");
/* harmony import */ var _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AST/GramaticaBNF */ "./src/analizadorXML/AST/GramaticaBNF.ts");
/* harmony import */ var _AST_TablaSimbolos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AST/TablaSimbolos */ "./src/analizadorXML/AST/TablaSimbolos.ts");
/* harmony import */ var _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Errores/ListaErrores */ "./src/analizadorXML/Errores/ListaErrores.ts");
/* harmony import */ var _Gramatica_gramaticaDesc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gramatica/gramaticaDesc */ "./src/analizadorXML/Gramatica/gramaticaDesc.js");
/* harmony import */ var _Gramatica_gramaticaDesc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Gramatica_gramaticaDesc__WEBPACK_IMPORTED_MODULE_4__);





class AnalizadorASCXML {
    ejecutarCodigo(entrada) {
        const tabla = new _AST_TablaSimbolos__WEBPACK_IMPORTED_MODULE_2__["TablaSimbolos"]();
        const salidaG = _Gramatica_gramaticaDesc__WEBPACK_IMPORTED_MODULE_4__["parse"](entrada);
        const arbolCST = new _AST_CST__WEBPACK_IMPORTED_MODULE_0__["CST"](salidaG.objetos);
        const Listaerrores = new _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_3__["ListaErrores"]();
        // TABLA SIMBOLOS
        let reporteTabla = tabla.generarReporteTablaObjetos(salidaG.objetos);
        // BNF
        let gramBnf = new _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_1__["GramaticaBNF"](salidaG.reporteBNF, salidaG.reporteBNF2);
        let reporteBNF = gramBnf.getBNFReport();
        // DOT CST
        let reporteCST = arbolCST.generarArbolCST(salidaG.objetos);
        //Errores
        let errores = Listaerrores.generateHtmlBody(salidaG.lErrores, Listaerrores.validateEtiquetas(salidaG.objetos));
        let ret = {
            tablaRep: reporteTabla,
            bnfRep: reporteBNF,
            cstRep: reporteCST,
            encoding: salidaG.encoding,
            objetos: salidaG.objetos,
            errores: errores
        };
        return ret;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Arbol/Ejecucion.ts":
/*!*************************************************!*\
  !*** ./src/analizadorXQUERY/Arbol/Ejecucion.ts ***!
  \*************************************************/
/*! exports provided: EjecucionXpath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjecucionXpath", function() { return EjecucionXpath; });
class EjecucionXpath {
    constructor(objetos, dot) {
        this.objetos = objetos;
        this.dot = dot;
    }
    //constructor(){}
    ejecutarArbol() {
        this.dot = "";
        if (this.objetos.length > 1) {
            for (let i = 0; i < this.objetos.length; i++) {
                this.dot += this.ejecutarNodoArbol(this.objetos[i]);
                if (i != this.objetos.length - 1) {
                    this.dot += "|";
                }
            }
        }
        else {
            this.dot += this.ejecutarNodoArbol(this.objetos[0]);
        }
        return this.dot;
    }
    ejecutarNodoArbol(objeto) {
        var aux = objeto.estado + objeto.identificador;
        if (objeto.nodos.length > 0) {
            aux += this.ejecutarNodoArbol(objeto.nodos[0]);
        }
        return aux;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Arbol/Nodo.ts":
/*!********************************************!*\
  !*** ./src/analizadorXQUERY/Arbol/Nodo.ts ***!
  \********************************************/
/*! exports provided: Nodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nodo", function() { return Nodo; });
class Nodo {
    constructor(tipo, line, column) {
        this.tipo = tipo;
        this.line = line;
        this.column = column;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Arbol/NodoAST.ts":
/*!***********************************************!*\
  !*** ./src/analizadorXQUERY/Arbol/NodoAST.ts ***!
  \***********************************************/
/*! exports provided: NodoAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodoAST", function() { return NodoAST; });
//import LinkedList from 'ts-linked-list';
class NodoAST {
    constructor(valor) {
        this.hijos = new Array();
        this.valor = valor;
    }
    setHijos(hijos) {
        this.hijos = hijos;
    }
    agregarHijo(hijo) {
        if (hijo instanceof NodoAST) {
            this.hijos.push(hijo);
        }
        else {
            this.hijos.push(new NodoAST(hijo));
        }
    }
    agregarHijos(hijos) {
        hijos.forEach(hijo => this.hijos.push(hijo));
    }
    agregarPrimerHijo(hijo) {
        if (hijo instanceof String) {
            this.hijos.push(new NodoAST(hijo));
        }
        else if (hijo instanceof NodoAST) {
            this.hijos.push(hijo);
        }
    }
    getValor() {
        return this.valor;
    }
    setValor(cad) {
        this.valor = cad;
    }
    getHijos() {
        return this.hijos;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Expresiones/Aritmetica.ts":
/*!********************************************************!*\
  !*** ./src/analizadorXQUERY/Expresiones/Aritmetica.ts ***!
  \********************************************************/
/*! exports provided: Aritmetica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aritmetica", function() { return Aritmetica; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");
/* harmony import */ var _Varios_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");




function esEntero(numero) {
    if (numero % 1 == 0) {
        return true;
    }
    else {
        return false;
    }
}
class Aritmetica extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(operadorIzq, operadorDer, operador, line, column) {
        super(null, line, column);
        this.operadorIzq = operadorIzq;
        this.operadorDer = operadorDer;
        this.operador = operador;
    }
    execute(table, tree) {
        if (this.operadorIzq !== null) {
            const resultadoIzq = this.operadorIzq.execute(table, tree);
            if (resultadoIzq instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]) {
                return resultadoIzq;
            }
            const resultadoDerecho = this.operadorDer.execute(table, tree);
            if (resultadoDerecho instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]) {
                return resultadoDerecho;
            }
            if (this.operador === '+') {
                //ENTERO + 
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                    //ENTERO + ENTERO = ENTERO
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO);
                        return resultadoIzq + resultadoDerecho;
                        //ENTERO + DECIMAL = DECIMAL
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq + resultadoDerecho;
                        //ENTERO + STRING = STRING
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING);
                        return resultadoIzq + resultadoDerecho;
                    }
                    //DOUBLE + 
                }
                else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                    //DOUBLE + ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq + resultadoDerecho;
                        //DOUBLE + DOUBLE = DOUBLE
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq + resultadoDerecho;
                        //DOUBLE + STRING = STRING
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING);
                        return resultadoIzq + resultadoDerecho;
                    }
                    //STRING +
                }
                else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING) {
                    //STRING + ENTERO = STRING
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING);
                        return resultadoIzq + resultadoDerecho;
                        //STRING + DOUBLE = STRING
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING);
                        return resultadoIzq + resultadoDerecho;
                        //STRING + STRING = STRING
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].STRING);
                        return resultadoIzq + resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Sumar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Sumar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operador === '-') {
                //ENTERO - 
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                    //ENTERO - ENTERO = ENTERO
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO);
                        return resultadoIzq - resultadoDerecho;
                        //ENTERO - DECIMAL = DECIMAL
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq - resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Restar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                    //DOUBLE -
                }
                else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                    //DOUBLE - ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq - resultadoDerecho;
                        //DOUBLE - DOUBLE = DOUBLE
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq - resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Restar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Restar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operador === '*') {
                //ENTERO * 
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                    //ENTERO * ENTERO = ENTERO
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO);
                        return resultadoIzq * resultadoDerecho;
                        //ENTERO * DECIMAL = DECIMAL
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq * resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Multiplicar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                    //DOUBLE *
                }
                else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                    //DOUBLE * ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq * resultadoDerecho;
                        //DOUBLE * DOUBLE = DOUBLE
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq * resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Multiplicar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Multiplicar los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operador === '/') {
                //DIVISION SOBRE 0
                if (resultadoDerecho === 0) {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `Error aritmetico, La division con cero no esta permitida`, this.line, this.column);
                    tree.errores.push(error);
                    return error;
                }
                //ENTERO / 
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                    //ENTERO / ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq / resultadoDerecho;
                        //DECIMAL / DECIMAL = DECIMAL
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq / resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Dividir los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                    //DOUBLE /
                }
                else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                    //DOUBLE / ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq / resultadoDerecho;
                        //DOUBLE / DOUBLE = DOUBLE
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq / resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Dividir los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se pueden Dividir los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operador === '%') {
                //ENTERO % 
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                    //ENTERO % ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq % resultadoDerecho;
                        //ENTERO % DECIMAL = DECIMAL
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq % resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se puede aplicar modulo con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                    //DOUBLE %
                }
                else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                    //DOUBLE % ENTERO = DOUBLE
                    if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq % resultadoDerecho;
                        //DOUBLE % DOUBLE = DOUBLE
                    }
                    else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL) {
                        this.tipo = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL);
                        return resultadoIzq % resultadoDerecho;
                    }
                    else {
                        const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se puede aplicar modulo los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                        tree.errores.push(error);
                        // tree.consola.push(error.toString());
                        return error;
                    }
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `No se puede aplicar modulo los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_2__["Error"]('Semantico', `Error, Operador desconocido`, this.line, this.column);
                tree.errores.push(error);
                tree.consola.push(error.toString());
                return error;
            }
        }
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_1__["NodoAST"]("ARITMETICA");
        if (this.operadorIzq != null) {
            nodo.agregarHijo(this.operadorIzq.getNodo());
            nodo.agregarHijo(this.operador + "");
            nodo.agregarHijo(this.operadorDer.getNodo());
        }
        else {
            nodo.agregarHijo(this.operador + "");
            nodo.agregarHijo(this.operadorDer.getNodo());
        }
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Expresiones/Logico.ts":
/*!****************************************************!*\
  !*** ./src/analizadorXQUERY/Expresiones/Logico.ts ***!
  \****************************************************/
/*! exports provided: Logico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logico", function() { return Logico; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Varios_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");




class Logico extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(operadorIzq, operadorDer, operador, line, column) {
        super(new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO), line, column);
        this.operadorIzq = operadorIzq;
        this.operadorDer = operadorDer;
        this.operador = operador;
    }
    execute(table, tree) {
        if (this.operadorIzq !== null) {
            const resultadoIzq = this.operadorIzq.execute(table, tree);
            if (resultadoIzq instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]) {
                return resultadoIzq;
            }
            const resultadoDer = this.operadorDer.execute(table, tree);
            if (resultadoDer instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]) {
                return resultadoDer;
            }
            if (this.operador === '||') {
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO && this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq || resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `No se puede operar OR con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operador === '&&') {
                if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO && this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq && resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `No se puede operar AND con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `Error, Operador desconocido`, this.line, this.column);
                tree.errores.push(error);
                tree.consola.push(error.toString());
                return error;
            }
        }
        else {
            const resultadoDer = this.operadorDer.execute(table, tree);
            if (resultadoDer instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]) {
                return resultadoDer;
            }
            if (this.operador === '!') {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return !resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `No se puede operar Not con el tipo ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `Error, Operador desconocido`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__["NodoAST"]("LOGICO");
        if (this.operadorIzq != null) {
            nodo.agregarHijo(this.operadorIzq.getNodo());
            nodo.agregarHijo(this.operador + "");
            nodo.agregarHijo(this.operadorDer.getNodo());
        }
        else {
            nodo.agregarHijo(this.operador + "");
            nodo.agregarHijo(this.operadorDer.getNodo());
        }
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Expresiones/NodoX.ts":
/*!***************************************************!*\
  !*** ./src/analizadorXQUERY/Expresiones/NodoX.ts ***!
  \***************************************************/
/*! exports provided: NodoX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodoX", function() { return NodoX; });
class NodoX {
    constructor(estado, identificador, nodos) {
        this.estado = estado;
        this.identificador = identificador;
        this.nodos = nodos;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Expresiones/Primitivo.ts":
/*!*******************************************************!*\
  !*** ./src/analizadorXQUERY/Expresiones/Primitivo.ts ***!
  \*******************************************************/
/*! exports provided: Primitivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primitivo", function() { return Primitivo; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");


// Esta clase crea un nodo del tipo primitivo, ya sea int, double, string, char, boolean
class Primitivo extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(tipo, valor, line, column) {
        super(tipo, line, column);
        this.valor = valor;
    }
    execute(table, tree) {
        return this.valor;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_1__["NodoAST"]("PRIMITIVO");
        nodo.agregarHijo(this.valor + '');
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Expresiones/Relacional.ts":
/*!********************************************************!*\
  !*** ./src/analizadorXQUERY/Expresiones/Relacional.ts ***!
  \********************************************************/
/*! exports provided: Relacional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relacional", function() { return Relacional; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Varios_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");




class Relacional extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(operadorIzq, operadorDer, operador, line, column) {
        super(new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO), line, column);
        this.operadorIzq = operadorIzq;
        this.operadorDer = operadorDer;
        this.operador = operador;
    }
    execute(table, tree) {
        const resultadoIzq = this.operadorIzq.execute(table, tree);
        if (resultadoIzq instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]) {
            return resultadoIzq;
        }
        const resultadoDer = this.operadorDer.execute(table, tree);
        if (resultadoDer instanceof _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]) {
            return resultadoDer;
        }
        if (this.operador === '<') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq < resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq < resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === 'lt') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq < resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq < resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq < resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === '<=') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq <= resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq <= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq <= resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq <= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq <= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq <= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MENOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === 'gt') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq > resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq > resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === '>') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq > resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq > resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq > resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === '>=') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq >= resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq >= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq >= resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq >= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq >= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq >= resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional MAYOR IGUAL QUE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === '!=') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq != resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq != resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional DIFERENTE DE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq != resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq != resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional DIFERENTE DE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq != resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional DIFERENTE DE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq != resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional DIFERENTE DE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional DIFERENTE DE se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else if (this.operador === '==') {
            if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq == resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq == resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional IGUAL A se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
                    return resultadoIzq == resultadoDer;
                }
                else if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
                    return resultadoIzq == resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional IGUAL A se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
                    return resultadoIzq == resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional IGUAL A se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else if (this.operadorIzq.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                if (this.operadorDer.tipo.tipo === _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
                    return resultadoIzq == resultadoDer;
                }
                else {
                    const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional IGUAL A se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                    tree.errores.push(error);
                    // tree.consola.push(error.toString());
                    return error;
                }
            }
            else {
                const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `El operador relacional IGUAL A se esta tratando de operar con los tipos ${this.operadorIzq.tipo} y ${this.operadorDer.tipo}`, this.line, this.column);
                tree.errores.push(error);
                // tree.consola.push(error.toString());
                return error;
            }
        }
        else {
            const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `Operador desconocido`, this.line, this.column);
            tree.errores.push(error);
            // tree.consola.push(error.toString());
            return error;
        }
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__["NodoAST"]("RELACIONAL");
        nodo.agregarHijo(this.operadorIzq.getNodo());
        nodo.agregarHijo(this.operador + "");
        nodo.agregarHijo(this.operadorDer.getNodo());
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Expresiones/identificador.ts":
/*!***********************************************************!*\
  !*** ./src/analizadorXQUERY/Expresiones/identificador.ts ***!
  \***********************************************************/
/*! exports provided: Identificador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identificador", function() { return Identificador; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Varios_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");



class Identificador extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(id, line, column) {
        super(null, line, column);
        this.id = id;
    }
    execute(table, tree) {
        let variable;
        variable = table.getVariable(this.id);
        if (variable == null) {
            const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', `La variable {${this.id}} no ha sido encontrada`, this.line, this.column);
            tree.errores.push(error);
            return error;
        }
        this.tipo = variable.tipo;
        this.valor = variable.valor;
        return variable.valor;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__["NodoAST"]("IDENTIFICADOR");
        var nodo2 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__["NodoAST"](this.id + "");
        nodo2.agregarHijo(this.valor + "");
        nodo.agregarHijo(nodo2);
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/GramaticaXquery.js":
/*!*************************************************!*\
  !*** ./src/analizadorXQUERY/GramaticaXquery.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var GramaticaXquery = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,16],$V2=[1,15],$V3=[1,14],$V4=[1,17],$V5=[1,13],$V6=[1,11],$V7=[5,7,11,12,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,99,101],$V8=[5,7,20,23,39,52,54,55,59,64,67,69,71,74,75,76,77,79,80,81,82,83,84,85,86,87],$V9=[2,92],$Va=[1,29],$Vb=[1,31],$Vc=[1,30],$Vd=[1,32],$Ve=[1,37],$Vf=[1,26],$Vg=[1,27],$Vh=[1,28],$Vi=[1,35],$Vj=[1,36],$Vk=[1,38],$Vl=[1,41],$Vm=[5,20,23,54,55,64,69,74,75,76,77,79,80,81,82,83,84,85,86,87],$Vn=[1,47],$Vo=[23,73],$Vp=[14,23,54,64,74,75,76,77,79,80,81,82,83,84,85,86,87],$Vq=[5,7,11,20,25,26,39,52,55,59,67,69,71,88,89,90,95,99,101],$Vr=[1,70],$Vs=[1,68],$Vt=[1,69],$Vu=[1,64],$Vv=[1,53],$Vw=[1,54],$Vx=[1,55],$Vy=[1,56],$Vz=[1,57],$VA=[1,58],$VB=[1,59],$VC=[1,60],$VD=[1,61],$VE=[1,62],$VF=[1,63],$VG=[1,65],$VH=[1,66],$VI=[1,67],$VJ=[5,7,11,12,14,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,99,101],$VK=[2,82],$VL=[1,74],$VM=[2,109],$VN=[1,73],$VO=[1,79],$VP=[1,80],$VQ=[5,7,11,12,14,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,93,95,99,101],$VR=[1,89],$VS=[1,93],$VT=[1,90],$VU=[1,87],$VV=[1,91],$VW=[1,92],$VX=[5,7,11,12,14,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,93,95,101],$VY=[1,102],$VZ=[23,52,55,59],$V_=[5,7,14,20,23,39,52,54,55,59,64,67,69,71,74,75,76,77,79,80,81,82,83,84,85,86,87],$V$=[11,25,78,95,101,102],$V01=[1,134],$V11=[2,5,7,11,12,14,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,93,95,99,101],$V21=[5,7,11,14,20,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,88,89,90,95,99,101],$V31=[5,7,11,14,20,25,26,39,52,54,55,59,64,67,69,71,76,77,78,79,80,81,82,83,84,85,86,88,89,90,95,99,101],$V41=[5,7,11,14,20,25,26,39,52,54,55,59,64,67,69,71,77,79,80,81,82,83,84,85,86,88,89,90,95,99,101],$V51=[5,7,11,14,20,25,26,39,52,54,55,59,64,67,69,71,77,85,86,88,89,90,95,99,101],$V61=[5,7,11,14,20,25,26,39,52,55,59,67,69,71,88,89,90,95,99,101],$V71=[1,168],$V81=[14,23],$V91=[1,190],$Va1=[1,211],$Vb1=[1,212],$Vc1=[1,213],$Vd1=[1,214],$Ve1=[1,215],$Vf1=[2,4],$Vg1=[1,218],$Vh1=[14,19,22,23];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO_XQUERY":3,"INSTRUCCIONES":4,"EOF":5,"FUNCION":6,"tk_declare":7,"tk_function":8,"MENU_LOCAL":9,"tk_dosPuntos":10,"tk_identificador":11,"tk_parA":12,"LISTA_DECLARACION_FUNCION":13,"tk_parC":14,"tk_as":15,"tk_xs":16,"TIPO_DATO":17,"MENU_INTERROGA":18,"llaveA":19,"llaveC":20,"tk_punto_coma":21,"tk_Interroga":22,"tk_coma":23,"DECLARACION_FUNCION":24,"tk_identificadorXQUERY":25,"tk_local":26,"tk_int":27,"tk_string":28,"tk_double":29,"tk_DECIMAL":30,"tk_integer":31,"INSTRUCCION":32,"DECLARACION_GLOBAL":33,"IF":34,"WHERE":35,"FOR":36,"LLAMADA_FUNCION":37,"RETURN_CICLO":38,"tk_for":39,"DECLARACIONES_FOR":40,"OPCIONES_FOR":41,"DECLARACION_FOR":42,"OPCION_AT":43,"tk_in":44,"FOR_REC":45,"tk_at":46,"CORDERNADA":47,"EXP_XQUERY":48,"XPATH":49,"OPCION_FOR":50,"ORDER":51,"tk_where":52,"CONDITIONES_WHERE":53,"tk_and":54,"tk_order":55,"tk_by":56,"LISTA_ORDER":57,"ORDER_":58,"tk_return":59,"Lista_Ciclo":60,"valor_if":61,"LISTA_ASIGNACION":62,"ASIGNACION_SIMPLE":63,"tk_igual":64,"valores_if":65,"TK":66,"tk_if":67,"tk_then":68,"tk_else":69,"Parametros_llamada":70,"tk_let":71,"LISTA_ID":72,"tk_igualXQUERY":73,"tk_menos":74,"tk_mas":75,"tk_div":76,"tk_mod":77,"tk_asterisco":78,"tk_menor":79,"tk_gt":80,"tk_lt":81,"tk_mayor":82,"tk_menorIgual":83,"tk_mayorIgual":84,"tk_distinto":85,"tk_or":86,"tk_to":87,"tk_entero":88,"tk_decimal":89,"tk_stringTexto":90,"OPCION_IDQ":91,"INICIO":92,"tk_barra":93,"INICIALES":94,"tk_punto":95,"DIAGONALES":96,"DERIVADOSLIMITADO":97,"DERIVACIONDIAGONAL":98,"tk_diagonal":99,"DERIVADOS":100,"tk_node":101,"tk_arroba":102,"ATRIBUTO":103,"tk_ParC":104,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"tk_declare",8:"tk_function",10:"tk_dosPuntos",11:"tk_identificador",12:"tk_parA",14:"tk_parC",15:"tk_as",16:"tk_xs",19:"llaveA",20:"llaveC",21:"tk_punto_coma",22:"tk_Interroga",23:"tk_coma",25:"tk_identificadorXQUERY",26:"tk_local",27:"tk_int",28:"tk_string",29:"tk_double",30:"tk_DECIMAL",31:"tk_integer",39:"tk_for",44:"tk_in",46:"tk_at",52:"tk_where",54:"tk_and",55:"tk_order",56:"tk_by",59:"tk_return",64:"tk_igual",66:"TK",67:"tk_if",68:"tk_then",69:"tk_else",71:"tk_let",73:"tk_igualXQUERY",74:"tk_menos",75:"tk_mas",76:"tk_div",77:"tk_mod",78:"tk_asterisco",79:"tk_menor",80:"tk_gt",81:"tk_lt",82:"tk_mayor",83:"tk_menorIgual",84:"tk_mayorIgual",85:"tk_distinto",86:"tk_or",87:"tk_to",88:"tk_entero",89:"tk_decimal",90:"tk_stringTexto",93:"tk_barra",95:"tk_punto",99:"tk_diagonal",101:"tk_node",102:"tk_arroba",104:"tk_ParC"},
productions_: [0,[3,2],[6,17],[18,1],[18,0],[13,3],[13,1],[24,6],[9,1],[17,1],[17,1],[17,1],[17,1],[17,1],[4,2],[4,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[36,3],[40,3],[40,1],[42,4],[43,2],[43,0],[47,5],[45,1],[45,1],[45,1],[41,2],[41,1],[50,1],[50,1],[50,1],[35,2],[53,3],[53,1],[51,3],[57,3],[57,1],[58,2],[58,1],[38,2],[60,3],[60,1],[62,3],[62,1],[63,3],[63,4],[34,6],[34,8],[34,8],[65,2],[65,1],[61,1],[61,1],[37,6],[70,3],[70,1],[33,4],[72,3],[72,1],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,1],[48,3],[48,1],[48,1],[48,1],[48,1],[48,2],[48,3],[48,6],[48,4],[48,0],[91,1],[91,0],[49,1],[92,3],[92,1],[94,4],[94,2],[94,3],[94,4],[94,2],[94,4],[94,2],[96,1],[96,2],[96,2],[98,3],[98,0],[97,1],[97,1],[97,3],[97,2],[97,1],[100,1],[100,2],[100,1],[103,1],[103,1],[103,3],[103,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        return new Tree($$[$0-1]); 
    
break;
case 2:

            this.$ = new DeclaracionMetodo($$[$0-5], $$[$0-12], $$[$0-10], $$[$0-2], _$[$0-16].first_line, _$[$0-16].first_column);
        
break;
case 3: case 105:

            this.$ = $$[$0]
        
break;
case 4:
 
            this.$ = ''
        
break;
case 5:
 
            this.$.push($$[$0]);
        
break;
case 6: case 62:

            this.$ = [$$[$0]]
        
break;
case 7:

            this.$ = new Declaracion($$[$0-1], $$[$0-5], null, _$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 8:
this.$=$$[$0];
break;
case 9: case 13:
this.$ = new Tipo(tipos.ENTERO);
break;
case 10:
this.$ = new Tipo(tipos.STRING);
break;
case 11: case 12:
this.$ = new Tipo(tipos.DECIMAL);
break;
case 14:
 this.$.push($$[$0]); 
break;
case 15:
 this.$ = [$$[$0]] 
break;
case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 57:
this.$=$$[$0]
break;
case 46:

            this.$ = new Retorno($$[$0], _$[$0-1].first_line, _$[$0-1].first_column)
        
break;
case 47:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2];
break;
case 48:
 this.$ = $$[$0];
break;
case 53:

            this.$ = new If($$[$0-3], $$[$0], [], _$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 54:

            this.$ = new If($$[$0-5],$$[$0-2],$$[$0], _$[$0-7].first_line, _$[$0-7].first_column);
        
break;
case 55:

            this.$ = new If($$[$0-5], $$[$0-2], [$$[$0]], _$[$0-7].first_line, _$[$0-7].first_column);
        
break;
case 56:
$$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 58: case 59:
 
            this.$ = $$[$0]
        
break;
case 60:

            this.$ = new Print(new LlamadaMetodo($$[$0-3], $$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column), _$[$0-5].first_line, _$[$0-5].first_column)
        
break;
case 61:
 
            this.$.push($$[$0]); 
        
break;
case 63:

            this.$ = new Declaracion(new Tipo(tipos.VARIABLE), $$[$0-2], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
        
break;
case 64:
$$[$0-2].push($$[$0]); this.$=$$[$0-2];  
break;
case 65:
this.$ = $$[$0]
break;
case 66:

            this.$ = new Aritmetica($$[$0-2], $$[$0], '-', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 67:

            this.$ = new Aritmetica($$[$0-2], $$[$0], '+', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 68:

            this.$ = new Aritmetica($$[$0-2], $$[$0], '/', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 69:

            this.$ = new Aritmetica($$[$0-2], $$[$0], '%', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 70:

            this.$ = new Aritmetica($$[$0-2], $$[$0], '*', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 71: case 73:

            this.$ = new Relacional($$[$0-2], $$[$0], '<', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 72: case 74:

            this.$ = new Relacional($$[$0-2], $$[$0], '>', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 75:

            this.$ = new Relacional($$[$0-2], $$[$0], '<=', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 76:

            this.$ = new Relacional($$[$0-2], $$[$0], '>=', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 77:

            this.$ = new Relacional($$[$0-2], $$[$0], '==', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 78:

            this.$ = new Relacional($$[$0-2], $$[$0], '!=', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 79:

            this.$ = new Logico($$[$0-2], $$[$0], '||', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 80: case 81:
this.$=$$[$0-2]+$$[$0-1]+$$[$0]
break;
case 83:

            this.$ = new Logico($$[$0-2], $$[$0], '&&', _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 84: case 85:

            this.$ = new Primitivo(new Tipo(esEntero(Number($$[$0]))), Number($$[$0]), _$[$0].first_line, _$[$0].first_column);
        
break;
case 86:

            this.$ = new Primitivo(new Tipo(tipos.STRING), $$[$0], _$[$0].first_line, _$[$0].first_column);
        
break;
case 87:

            this.$ = new Identificador($$[$0], _$[$0].first_line, _$[$0].first_column);
        
break;
case 88:

            this.$ = new Identificador($$[$0-1], _$[$0-1].first_line, _$[$0-1].first_column);
        
break;
case 89:

            this.$ = $$[$0-1]
        
break;
case 90:

            this.$ = new LlamadaMetodo($$[$0-3], $$[$0-1], _$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 93:
 this.$ = $$[$0]
break;
case 94:
this.$ = []
break;
case 95:

            let analizador = new AnalizadorASCXML();
            let buscador = new xpathBusqueda();
            let ejecu = new EjecucionXpath($$[$0], "");

            let ret = analizador.ejecutarCodigo(localStorage.getItem("xml"));
            let tabla = ret.objetos;
            let query = ejecu.ejecutarArbol();

            if(query.includes("|")) {
                buscador.getNodesByFilters("3", query, tabla);
            }else if(query[0] !== "/" && query[0] !== "//"){
                buscador.getNodesByFilters("1", query, tabla)
            }else{
                buscador.getNodesByFilters("2", query, tabla)
            }

            let retorno = buscador.returnListObjects()
            let valor = retorno[0].texto;
            let tipoR;

            if (valor.match(/^[0-9]+$/)){
                tipoR = new Tipo(esEntero(valor))
                valor = parseInt(valor)
            }else if (valor.match(/^[0-9]+[.][0-9]+$/)){
                tipoR = new Tipo(esEntero(valor))
                valor = parseInt(valor)
            }else{
                tipoR = new Tipo(tipos.STRING)
            }

            this.$ = new Primitivo(tipoR, valor, _$[$0].first_line, _$[$0].first_column);
        
break;
case 96:
 
            this.$.push($$[$0])
        
break;
case 97:
 
            this.$ = [$$[$0]]
        
break;
case 98:

            this.$ = new NodoX("", ".", [new NodoX($$[$0-2], $$[$0-1].val, [...$$[$0]])]);
        
break;
case 99: case 102:

            this.$ = new NodoX("", $$[$0-1], [...$$[$0]]);
        
break;
case 100:

            this.$ = new NodoX($$[$0-2], $$[$0-1].val, [...$$[$0]]);
        
break;
case 101:

            this.$ = new NodoX("//", $$[$0-1].val, [...$$[$0]]);
        
break;
case 103:

            this.$ = new NodoX("", "node()", [...$$[$0]]);
        
break;
case 104:

            $$[$0-1] = $$[$0-1].substring(1, $$[$0-1].length)
            this.$ = new NodoX("", $$[$0-1], [...$$[$0]]);
        
break;
case 106:

            this.$ = "//"
        
break;
case 108:

            this.$ = new Array();
            this.$.push(new NodoX($$[$0-2], $$[$0-1].val, [...$$[$0]])); 
        
break;
case 109:

            this.$ = [];
        
break;
case 110: case 111:

            this.$ = {val: $$[$0], pre: null};
        
break;
case 112:

            this.$ = {val: "node()", pre: null}
        
break;
case 113:

            this.$ = {val: $$[$0-1] + "" + $$[$0], pre: null};
        
break;
case 114:

            $$[$0] = $$[$0].substring(1, $$[$0].length)
            this.$ = {val: $$[$0], pre: null}
        
break;
case 115:

            this.$ = {val: $$[$0], pre: null}; 
        
break;
case 116:

            this.$ = {val: "..", pre: null}; 
        
break;
case 117:

            this.$ = $$[$0]; 
        
break;
case 118: case 119:

            this.$ = $$[$0];
        
break;
case 120:

            this.$ = "node()"
        
break;
case 121:

            $$[$0] = $$[$0].substring(1, $$[$0].length)
            this.$ = $$[$0]
        
break;
}
},
table: [{3:1,4:2,6:5,7:$V0,26:$V1,32:3,33:4,34:6,35:7,36:8,37:9,38:10,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6},{1:[3]},{5:[1,18],6:5,7:$V0,26:$V1,32:19,33:4,34:6,35:7,36:8,37:9,38:10,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6},o($V7,[2,15]),o($V7,[2,16]),o($V7,[2,17]),o($V7,[2,18]),o($V7,[2,19]),o($V7,[2,20]),o($V7,[2,21]),o($V7,[2,22]),{25:[1,21],72:20},{8:[1,22]},{12:[1,23]},o($V8,$V9,{48:24,49:25,92:33,94:34,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{25:$Vl,40:39,42:40},{10:[1,42]},o($Vm,$V9,{32:3,33:4,6:5,34:6,35:7,36:8,37:9,38:10,49:25,92:33,94:34,60:43,61:44,48:45,4:46,7:$V0,11:$Va,12:$Vb,25:$Vc,26:$Vn,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{1:[2,1]},o($V7,[2,14]),{23:[1,49],73:[1,48]},o($Vo,[2,65]),{9:50,26:[1,51]},o($Vp,$V9,{49:25,92:33,94:34,48:52,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($Vq,[2,38],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI}),o($VJ,$VK),o($VJ,[2,84]),o($VJ,[2,85]),o($VJ,[2,86]),o([5,7,11,12,14,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,101],[2,87],{98:71,96:72,2:$VL,93:$VM,99:$VN}),o([5,7,12,14,20,23,26,39,52,54,55,59,64,67,69,71,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,90,93],[2,94],{92:33,94:34,96:72,91:75,98:76,49:77,2:$VL,11:$VO,25:$VP,78:$Ve,95:$Vi,99:[1,78],101:$Vk}),o($Vp,$V9,{49:25,92:33,94:34,48:81,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{10:[1,82]},o($VJ,[2,95],{93:[1,83]}),o($VQ,[2,97]),{2:$VL,96:84,99:$VN},{11:$VR,25:$VS,78:$VT,95:$VU,97:88,99:[1,86],100:85,101:$VV,102:$VW},o($VX,$VM,{96:72,98:94,2:$VL,99:$VN}),{12:[1,95]},{23:[1,97],35:99,38:101,41:96,50:98,51:100,52:$V3,55:$VY,59:$V4},o($VZ,[2,25]),{43:103,44:[2,28],46:[1,104]},{11:[1,105]},o([5,7,11,12,20,23,25,26,39,52,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,99,101],[2,46],{54:[1,106]}),o($V7,[2,48]),o($Vq,[2,58],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI}),o([5,11,12,20,23,25,54,55,64,69,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,99,101],[2,59],{33:4,6:5,34:6,35:7,36:8,37:9,38:10,32:19,7:$V0,26:$V1,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6}),{10:[1,107]},o($V8,$V9,{49:25,92:33,94:34,48:108,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{25:[1,109]},{10:[1,110]},{10:[2,8]},{12:$Vr,14:[1,111],23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI},o($V_,$V9,{49:25,92:33,94:34,48:112,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:113,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:114,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:115,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:116,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:117,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:118,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:119,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:120,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:121,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:122,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:123,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:124,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:125,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:126,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:127,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V_,$V9,{49:25,92:33,94:34,48:128,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($Vp,$V9,{49:25,92:33,94:34,48:129,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($VQ,[2,99]),{11:$VR,25:$VS,78:$VT,95:$VU,97:88,100:130,101:$VV,102:$VW},o($V$,[2,105],{99:[1,131]}),{99:[1,132]},o($VJ,[2,88]),o($VQ,[2,104]),o($VJ,[2,93]),{11:$VR,25:$VS,78:$VT,95:$VU,97:88,99:[1,133],100:85,101:$VV,102:$VW},o($VX,$VM,{98:71,96:72,2:$VL,99:$VN}),o($VX,$VM,{96:72,98:76,2:$VL,99:$VN}),{12:$Vr,14:$V01,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI},{11:[1,135]},{11:$VO,25:$VP,78:$Ve,94:136,95:$Vi,99:$Vj,101:$Vk},{11:$VR,25:$VS,78:$VT,97:137,101:$VV,102:$VW},o($VX,$VM,{96:72,98:138,2:$VL,99:$VN}),{11:$VR,25:$VS,78:$VT,95:$VU,97:88,100:139,101:$VV,102:$VW},o([2,5,7,11,12,14,20,23,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,93,99,101],[2,115],{95:[1,140]}),o($V11,[2,117]),o($V11,[2,110]),o($V11,[2,111]),{12:[1,141]},{11:[1,144],25:[1,146],78:[1,143],101:[1,145],103:142},o($V11,[2,114]),o($VQ,[2,102]),{14:[1,147]},o([5,7,11,12,20,23,25,26,39,54,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,99,101],[2,23],{35:99,51:100,38:101,50:148,52:$V3,55:$VY,59:$V4}),{25:$Vl,42:149},o($V7,[2,34]),o($V7,[2,35]),o($V7,[2,36]),o($V7,[2,37]),{56:[1,150]},{44:[1,151]},{25:[1,152]},{12:[1,153]},o($Vm,$V9,{32:3,33:4,6:5,34:6,35:7,36:8,37:9,38:10,49:25,92:33,94:34,48:45,4:46,61:154,7:$V0,11:$Va,12:$Vb,25:$Vc,26:$Vn,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{11:[1,155]},o([5,7,11,20,25,26,39,52,54,55,59,64,67,69,71,77,85,86,88,89,90,95,99,101],[2,63],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,87:$VI}),o($Vo,[2,64]),{11:[1,156]},{68:[1,157]},o($V21,[2,66],{12:$Vr,23:$Vs,87:$VI}),o($V21,[2,67],{12:$Vr,23:$Vs,87:$VI}),o($V31,[2,68],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,87:$VI}),o([5,7,11,14,20,25,26,39,52,55,59,67,69,71,77,88,89,90,95,99,101],[2,69],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI}),o($V31,[2,70],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,87:$VI}),o($V41,[2,71],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,87:$VI}),o($V41,[2,72],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,87:$VI}),o($V41,[2,73],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,87:$VI}),o($V41,[2,74],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,87:$VI}),o($V41,[2,75],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,87:$VI}),o($V41,[2,76],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,87:$VI}),o($V51,[2,77],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,87:$VI}),o($V51,[2,78],{12:$Vr,23:$Vs,74:$Vv,75:$Vw,76:$Vx,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,87:$VI}),o([5,7,11,14,20,25,26,39,52,55,59,67,69,71,77,86,88,89,90,95,99,101],[2,79],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,87:$VI}),o($V61,[2,80],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI}),o($V61,[2,81],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI}),o([5,7,11,14,20,25,26,39,52,54,55,59,67,69,71,77,86,88,89,90,95,99,101],[2,83],{12:$Vr,23:$Vs,64:$Vu,74:$Vv,75:$Vw,76:$Vx,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,87:$VI}),{12:$Vr,14:[1,158],23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI},o($VX,$VM,{96:72,98:159,2:$VL,99:$VN}),o($V$,[2,106]),o($V$,[2,107]),{11:$VR,25:$VS,78:$VT,95:$VU,97:88,100:139,101:$VV,102:$VW},o($VJ,[2,89]),{12:[1,160]},o($VQ,[2,96]),o($VX,$VM,{96:72,98:161,2:$VL,99:$VN}),o($VQ,[2,100]),o($VX,$VM,{96:72,98:162,2:$VL,99:$VN}),o($V11,[2,116]),{14:[1,163]},o($V11,[2,113]),o($V11,[2,118]),o($V11,[2,119]),{12:[1,164]},o($V11,[2,121]),o($VX,$VM,{96:72,98:165,2:$VL,99:$VN}),o($V7,[2,33]),o($VZ,[2,24]),{25:$V71,57:166,58:167},o([23,52,54,55,59,64,74,75,76,77,79,80,81,82,83,84,85,86,87],$V9,{92:33,94:34,45:169,49:170,48:171,47:172,11:$Va,12:[1,173],25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{44:[2,27]},{11:$VO,25:$VP,49:175,70:174,78:$Ve,92:33,94:34,95:$Vi,99:$Vj,101:$Vk},o($V7,[2,47]),{12:[1,176]},{12:[1,177]},o($Vm,$V9,{32:3,33:4,6:5,34:6,35:7,36:8,37:9,38:10,49:25,92:33,94:34,48:45,4:46,65:178,61:179,7:$V0,11:$Va,12:$Vb,25:$Vc,26:$Vn,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($VJ,[2,91]),o($VQ,[2,108]),o($Vp,$V9,{49:25,92:33,94:34,48:180,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($VQ,[2,98]),o($VQ,[2,101]),o($V11,[2,112]),{104:[1,181]},o($VQ,[2,103]),o([5,7,11,12,20,25,26,39,52,54,55,59,64,67,69,71,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,95,99,101],[2,41],{23:[1,182]}),o($V7,[2,43]),o([5,7,12,20,23,26,39,52,54,55,59,64,67,69,71,74,75,76,77,79,80,81,82,83,84,85,86,87,88,89,90],[2,45],{92:33,94:34,49:183,11:$VO,25:$VP,78:$Ve,95:$Vi,99:$Vj,101:$Vk}),o($VZ,[2,26]),o([12,23,52,54,55,59,64,74,75,76,77,78,79,80,81,82,83,84,85,86,87],[2,30]),o([52,55,59],[2,31],{12:$Vr,23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI}),o($VZ,[2,32]),o($Vp,$V9,{49:25,92:33,94:34,48:184,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{14:[1,185],23:[1,186]},o($V81,[2,62]),o($Vp,$V9,{92:33,94:34,70:174,48:180,49:187,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),{13:188,24:189,25:$V91},o([5,12,20,23,54,55,64,74,75,76,77,78,79,80,81,82,83,84,85,86,87,99],[2,53],{32:3,33:4,6:5,34:6,35:7,36:8,37:9,38:10,49:25,92:33,94:34,48:45,4:46,61:192,7:$V0,11:$Va,25:$Vc,26:$Vn,39:$V2,52:$V3,59:$V4,67:$V5,69:[1,191],71:$V6,88:$Vf,89:$Vg,90:$Vh,95:$Vi,101:$Vk}),o($V7,[2,57]),{12:$Vr,14:[1,193],23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI},o($V11,[2,120]),{25:$V71,58:194},o($V7,[2,44]),{12:$Vr,14:$V01,23:[1,195],54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI},o($V7,[2,60]),{11:$VO,25:$VP,49:196,78:$Ve,92:33,94:34,95:$Vi,99:$Vj,101:$Vk},o([12,14,23,54,64,74,75,76,77,78,79,80,81,82,83,84,85,86,87],$VK),{14:[1,197],23:[1,198]},o($V81,[2,6]),{15:[1,199]},o($Vm,$V9,{32:3,33:4,6:5,35:7,36:8,37:9,38:10,49:25,92:33,94:34,48:45,4:46,61:179,65:200,34:201,7:$V0,11:$Va,12:$Vb,25:$Vc,26:$Vn,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V7,[2,56]),o($VJ,[2,90]),o($V7,[2,42]),o($Vp,$V9,{49:25,92:33,94:34,48:202,11:$Va,12:$Vb,25:$Vc,26:$Vd,78:$Ve,88:$Vf,89:$Vg,90:$Vh,95:$Vi,99:$Vj,101:$Vk}),o($V81,[2,61]),{15:[1,203]},{24:204,25:$V91},{16:[1,205]},o([5,12,20,23,54,55,64,69,74,75,76,77,78,79,80,81,82,83,84,85,86,87,99],[2,54],{32:3,33:4,6:5,34:6,35:7,36:8,37:9,38:10,49:25,92:33,94:34,48:45,4:46,61:192,7:$V0,11:$Va,25:$Vc,26:$Vn,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6,88:$Vf,89:$Vg,90:$Vh,95:$Vi,101:$Vk}),o($V7,[2,55]),{12:$Vr,14:[1,206],23:$Vs,54:$Vt,64:$Vu,74:$Vv,75:$Vw,76:$Vx,77:$Vy,78:$Vz,79:$VA,80:$VB,81:$VC,82:$VD,83:$VE,84:$VF,85:$VG,86:$VH,87:$VI},{16:[1,207]},o($V81,[2,5]),{10:[1,208]},o($VZ,[2,29]),{10:[1,209]},{17:210,27:$Va1,28:$Vb1,29:$Vc1,30:$Vd1,31:$Ve1},{17:216,27:$Va1,28:$Vb1,29:$Vc1,30:$Vd1,31:$Ve1},o($V81,$Vf1,{18:217,22:$Vg1}),o($Vh1,[2,9]),o($Vh1,[2,10]),o($Vh1,[2,11]),o($Vh1,[2,12]),o($Vh1,[2,13]),{18:219,19:$Vf1,22:$Vg1},o($V81,[2,7]),o([14,19,23],[2,3]),{19:[1,220]},{4:221,6:5,7:$V0,26:$V1,32:3,33:4,34:6,35:7,36:8,37:9,38:10,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6},{6:5,7:$V0,20:[1,222],26:$V1,32:19,33:4,34:6,35:7,36:8,37:9,38:10,39:$V2,52:$V3,59:$V4,67:$V5,71:$V6},{21:[1,223]},o($V7,[2,2])],
defaultActions: {18:[2,1],51:[2,8],152:[2,27]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const { Tree } = __webpack_require__(/*! ./Simbolos/Tree */ "./src/analizadorXQUERY/Simbolos/Tree.ts");
    const { Tipo, tipos, esEntero } = __webpack_require__(/*! ./Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
    const { Primitivo }  = __webpack_require__(/*! ./Expresiones/Primitivo */ "./src/analizadorXQUERY/Expresiones/Primitivo.ts");
    const { Error } = __webpack_require__(/*! ./Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
    const { Identificador } = __webpack_require__(/*! ./Expresiones/identificador */ "./src/analizadorXQUERY/Expresiones/identificador.ts");
    //const {Vector} = require('../Expresiones/Vector');
    //const {Lista} = require('../Expresiones/Lista');
    //Instrucciones
    const {Print} = __webpack_require__(/*! ./Instrucciones/Print */ "./src/analizadorXQUERY/Instrucciones/Print.ts");
    const {Declaracion} = __webpack_require__(/*! ./Instrucciones/Declaracion */ "./src/analizadorXQUERY/Instrucciones/Declaracion.ts");
  // // const {DeclaracionArray} = require('../Instrucciones/DeclaracionArray');
    //const {DeclaracionLista} = require('../Instrucciones/DeclaracionLista');
    //const {Asignacion} = require('../Instrucciones/Asignacion');
    //const {AsignacionVector} = require('../Instrucciones/AsignacionVector');
   // const {AsignacionLista} = require('../Instrucciones/AsignacionLista');
    /*const {AddLista} = require('../Instrucciones/AddLista');
    
    const {Switch} = require('../Instrucciones/Switch');
    const {Case} = require('../Instrucciones/Case');
    const {While} = require('../Instrucciones/While');
    const {DoWhile} = require('../Instrucciones/DoWhile');
    const {For} = require('../Instrucciones/For');
    const {DeclaracionMetodo} = require('../Instrucciones/DeclaracionMetodo');
    const {LlamadaMetodo} = require('../Instrucciones/LlamadaMetodo');
    const {Continue} = require('../Expresiones/Continue');
    const {Break} = require('../Expresiones/Break');
    const {Retorno} = require('../Instrucciones/Retorno');
    *///Expresion
    const { DeclaracionMetodo } = __webpack_require__(/*! ./Instrucciones/DeclaracionMetodo */ "./src/analizadorXQUERY/Instrucciones/DeclaracionMetodo.ts");
    const { LlamadaMetodo } = __webpack_require__(/*! ./Instrucciones/LlamadaMetodo */ "./src/analizadorXQUERY/Instrucciones/LlamadaMetodo.ts");
    const { If } = __webpack_require__(/*! ./Instrucciones/If */ "./src/analizadorXQUERY/Instrucciones/If.ts");
    const { Retorno } = __webpack_require__(/*! ./Instrucciones/Retorno */ "./src/analizadorXQUERY/Instrucciones/Retorno.ts");
    const { Aritmetica } = __webpack_require__(/*! ./Expresiones/Aritmetica */ "./src/analizadorXQUERY/Expresiones/Aritmetica.ts");
    const { Relacional } = __webpack_require__(/*! ./Expresiones/Relacional */ "./src/analizadorXQUERY/Expresiones/Relacional.ts");
    const { Logico } = __webpack_require__(/*! ./Expresiones/Logico */ "./src/analizadorXQUERY/Expresiones/Logico.ts");
    const { NodoX } = __webpack_require__(/*! ./Expresiones/NodoX */ "./src/analizadorXQUERY/Expresiones/NodoX.ts");
    const { EjecucionXpath } = __webpack_require__(/*! ./Arbol/Ejecucion */ "./src/analizadorXQUERY/Arbol/Ejecucion.ts");
    /*const {Logico} = require('../Expresiones/Logico');
    const {Ternario} = require('../Expresiones/Ternario');
    const {Casteo} = require('../Expresiones/Casteo');
    const {InDecrement} = require('../Expresiones/InDecrement');
    const {Length} = require('../Expresiones/Length');
    const {ToLower} = require('../Expresiones/ToLower');
    const {ToUpper} = require('../Expresiones/ToUpper');
    const {Truncate} = require('../Expresiones/Truncate');
    const {Round} = require('../Expresiones/Round');
    const {TypeOf} = require('../Expresiones/TypeOf');
    const {ToString} = require('../Expresiones/ToString');
    const {ToCharArray} = require('../Expresiones/ToCharArray');*/
    const { AnalizadorASCXML } = __webpack_require__(/*! ../analizadorXML/index */ "./src/analizadorXML/index.ts");
    const { xpathBusqueda } = __webpack_require__(/*! ../analizadorXML/Instrucciones/Busqueda/xpathBusqueda */ "./src/analizadorXML/Instrucciones/Busqueda/xpathBusqueda.ts");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "tk_decimal";
break;
case 1:return "tk_entero";
break;
case 2:return "tk_node";
break;
case 3:return "tk_child";
break;
case 4:return "tk_let";
break;
case 5:return "tk_descendant";
break;
case 6:return "tk_descendatOr"
break;
case 7:return "tk_ancestor";
break;
case 8:return "tk_ancestorOr";
break;
case 9:return "tk_attribute";
break;
case 10:return "tk_following";
break;
case 11:return "tk_followingSi"
break;
case 12:return "tk_parent"
break;
case 13:return "tk_preceding"
break;
case 14:return "tk_precedingSi"
break;
case 15:return "tk_self"
break;
case 16:return "tk_text"
break;
case 17:return "tk_position"
break;
case 18:return "tk_last"
break;
case 19:return "tk_div"
break;
case 20:return "tk_and"
break;
case 21:return "tk_or"
break;
case 22:return "tk_mod"
break;
case 23:console.log(yy_.yytext+"--"); return "tk_for";
break;
case 24:console.log(yy_.yytext+"--"); return "tk_in";
break;
case 25:console.log(yy_.yytext+"--"); return "tk_where";
break;
case 26:console.log(yy_.yytext+"--"); return "tk_order";
break;
case 27:console.log(yy_.yytext+"--"); return "tk_by";
break;
case 28:console.log(yy_.yytext+"--"); return "tk_return";
break;
case 29:console.log(yy_.yytext+"--");return "tk_if";
break;
case 30:console.log(yy_.yytext+"--");return "tk_else";
break;
case 31:console.log(yy_.yytext+"--");return "tk_then";
break;
case 32:console.log(yy_.yytext+"--");return "tk_int";
break;
case 33:console.log(yy_.yytext+"--");return "tk_integer";
break;
case 34:console.log(yy_.yytext+"--");return "tk_string";
break;
case 35:console.log(yy_.yytext+"--");return "tk_DECIMAL";
break;
case 36:console.log(yy_.yytext+"--");return "tk_double";
break;
case 37:console.log(yy_.yytext+"--");return "tk_declare";
break;
case 38:console.log(yy_.yytext+"--");return "tk_function";
break;
case 39:console.log(yy_.yytext+"--");return "tk_AS"
break;
case 40:console.log(yy_.yytext+"--");return "tk_as"
break;
case 41:console.log(yy_.yytext+"--");return "tk_xs"
break;
case 42:console.log(yy_.yytext+"--");return "tk_to"
break;
case 43:console.log(yy_.yytext+"--");return "tk_at"
break;
case 44:console.log(yy_.yytext+"--");return "tk_local";
break;
case 45:console.log(yy_.yytext+"--"); return "tk_gt"
break;
case 46:console.log(yy_.yytext+"--"); return "tk_lt"
break;
case 47:return "tk_barra"
break;
case 48:return "tk_punto"
break;
case 49:return "tk_punto_coma"
break;
case 50:return "tk_coma"
break;
case 51:return "tk_diagonal"
break;
case 52:return "tk_asterisco"
break;
case 53:return "tk_Interroga"
break;
case 54:return "tk_mas"
break;
case 55:return "tk_menos"
break;
case 56:return "tk_menorIgual"
break;
case 57:return "tk_mayorIgual"
break;
case 58:return "tk_menor"
break;
case 59:return "tk_mayor"
break;
case 60:return "tk_distinto"
break;
case 61:console.log(yy_.yytext+"--");return "tk_igualXQUERY"
break;
case 62:return "tk_dosPuntos"
break;
case 63:return "tk_igual"
break;
case 64:return "tk_llaveA"
break;
case 65:return "tk_llaveC"
break;
case 66:return "tk_arroba"
break;
case 67:console.log(yy_.yytext+"--");return "llaveA"
break;
case 68:console.log(yy_.yytext+"--");return "llaveC"
break;
case 69:return "tk_parA"
break;
case 70:return "tk_parC"
break;
case 71:return "tk_stringTexto";
break;
case 72:return "tk_stringTexto";
break;
case 73:return "tk_stringTexto";
break;
case 74:return "tk_stringTexto";
break;
case 75:return "tk_identificador";
break;
case 76:return "tk_identificadorXQUERY";
console.log("indentificador papa")

break;
case 77:return "EOF";
break;
case 78:
break;
case 79:         
    console.log('Léxico',yy_.yytext,yy_.yylloc.first_line,yy_.yylloc.first_column );

break;
}
},
rules: [/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:node\b)/,/^(?:child\b)/,/^(?:let\b)/,/^(?:descendant\b)/,/^(?:descendant-or-self\b)/,/^(?:ancestor\b)/,/^(?:ancestor-or-self\b)/,/^(?:attribute\b)/,/^(?:following\b)/,/^(?:following-sibling\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:preceding-sibling\b)/,/^(?:self\b)/,/^(?:text\b)/,/^(?:position\b)/,/^(?:last\b)/,/^(?:div\b)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:mod\b)/,/^(?:for\b)/,/^(?:in\b)/,/^(?:where\b)/,/^(?:order\b)/,/^(?:by\b)/,/^(?:return\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:then\b)/,/^(?:int\b)/,/^(?:integer\b)/,/^(?:string\b)/,/^(?:decimal\b)/,/^(?:double\b)/,/^(?:declare\b)/,/^(?:function\b)/,/^(?:AS\b)/,/^(?:as\b)/,/^(?:xs\b)/,/^(?:to\b)/,/^(?:at\b)/,/^(?:local\b)/,/^(?:gt\b)/,/^(?:lt\b)/,/^(?:\|)/,/^(?:\.)/,/^(?:;)/,/^(?:,)/,/^(?:\/)/,/^(?:\*)/,/^(?:\?)/,/^(?:\+)/,/^(?:-)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?::=)/,/^(?::)/,/^(?:=)/,/^(?:\[)/,/^(?:\])/,/^(?:@)/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:"[^\"]*")/,/^(?:“[^\“]*“)/,/^(?:'[^\']*')/,/^(?:‘[^\‘]*‘)/,/^(?:[a-zA-Z]([a-zA-Z0-9_])*)/,/^(?:[$]([a-zA-Z0-9_])*)/,/^(?:$)/,/^(?:[ \t\r\n\f])/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = GramaticaXquery;
exports.Parser = GramaticaXquery.Parser;
exports.parse = function () { return GramaticaXquery.parse.apply(GramaticaXquery, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ 5).readFileSync(__webpack_require__(/*! path */ 6).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/analizadorXQUERY/Instrucciones/Declaracion.ts":
/*!***********************************************************!*\
  !*** ./src/analizadorXQUERY/Instrucciones/Declaracion.ts ***!
  \***********************************************************/
/*! exports provided: defal, Declaracion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defal", function() { return defal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Declaracion", function() { return Declaracion; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Varios_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
/* harmony import */ var _Simbolos_Simbolo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Simbolos/Simbolo */ "./src/analizadorXQUERY/Simbolos/Simbolo.ts");
/* harmony import */ var _Expresiones_Primitivo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Expresiones/Primitivo */ "./src/analizadorXQUERY/Expresiones/Primitivo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");






function defal(tipo, line, column) {
    if (tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].ENTERO) {
        return new _Expresiones_Primitivo__WEBPACK_IMPORTED_MODULE_4__["Primitivo"](tipo, 0, line, column);
    }
    else if (tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].DECIMAL) {
        return new _Expresiones_Primitivo__WEBPACK_IMPORTED_MODULE_4__["Primitivo"](tipo, 0.0, line, column);
    }
    else if (tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].BOOLEANO) {
        return new _Expresiones_Primitivo__WEBPACK_IMPORTED_MODULE_4__["Primitivo"](tipo, true, line, column);
    }
    else if (tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].CARACTER) {
        return new _Expresiones_Primitivo__WEBPACK_IMPORTED_MODULE_4__["Primitivo"](tipo, '', line, column);
    }
    else if (tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].STRING) {
        return new _Expresiones_Primitivo__WEBPACK_IMPORTED_MODULE_4__["Primitivo"](tipo, "", line, column);
    }
    return "";
}
class Declaracion extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(tipo, id, valor, line, column) {
        super(tipo, line, column);
        this.id = id;
        this.valor = valor;
    }
    execute(table, tree) {
        const result = this.valor.execute(table, tree);
        let simbolo;
        simbolo = new _Simbolos_Simbolo__WEBPACK_IMPORTED_MODULE_3__["Simbolo"](this.tipo, this.id, result, new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].VARIABLE), this.line, this.column);
        const res = table.setVariable(simbolo);
        tree.Variables.push(simbolo);
        if (res != null) {
            const error = new _Varios_Error__WEBPACK_IMPORTED_MODULE_1__["Error"]('Semantico', "La variable ya a sido declarada", this.line, this.column);
            tree.errores.push(error);
            tree.consola.push(error.toString());
        }
        return null;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_5__["NodoAST"]("DECLARACION");
        nodo.agregarHijo(this.tipo + "");
        nodo.agregarHijo(this.id);
        if (this.valor != null) {
            nodo.agregarHijo("=");
            nodo.agregarHijo(this.valor.getNodo());
        }
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Instrucciones/DeclaracionMetodo.ts":
/*!*****************************************************************!*\
  !*** ./src/analizadorXQUERY/Instrucciones/DeclaracionMetodo.ts ***!
  \*****************************************************************/
/*! exports provided: DeclaracionMetodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclaracionMetodo", function() { return DeclaracionMetodo; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Varios/Exepciones */ "./src/analizadorXQUERY/Varios/Exepciones.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
/* harmony import */ var _Simbolos_Simbolo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Simbolos/Simbolo */ "./src/analizadorXQUERY/Simbolos/Simbolo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");





class DeclaracionMetodo extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(tipo, id, listaParams, instrucciones, line, column) {
        super(tipo, line, column);
        this.id = id;
        this.listaParams = listaParams;
        this.instrucciones = instrucciones;
    }
    execute(table, tree) {
        var nombre = this.id + "$";
        var index = 0;
        for (let param of this.listaParams) {
            // nombre += param.tipo;
            index += 1;
        }
        nombre += index + "";
        if (table.getVariable(nombre) == null) {
            var tipo2 = new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].FUNCION);
            var metodo = new _Simbolos_Simbolo__WEBPACK_IMPORTED_MODULE_3__["Simbolo"](this.tipo, nombre, [this.listaParams, this.instrucciones], tipo2, this.line, this.column);
            table.setVariable(metodo);
            tree.Variables.push(metodo);
        }
        else {
            const error = new _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_1__["Excepcion"]('Semantico', `El metodo {${nombre.split("$", 1)[0]}} ya ha sido creado con anterioridad `, this.line, this.column);
            tree.errores.push(error);
            tree.consola.push(error.toString());
            return error;
        }
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"]("DECLARACION METODO");
        if (this.tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_2__["tipos"].VOID) {
            nodo.agregarHijo("Void");
        }
        else {
            nodo.agregarHijo(this.tipo + "");
        }
        nodo.agregarHijo(this.id);
        nodo.agregarHijo("(");
        if (this.listaParams.length != 0) {
            var nodo2 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"]("Parametros");
            var index = 1;
            for (let i = 0; i < this.listaParams.length; i++) {
                var param = this.listaParams[i];
                var nodo3 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"](param.tipo + "");
                nodo3.agregarHijo(param.id + "");
                nodo2.agregarHijo(nodo3);
            }
            nodo.agregarHijo(nodo2);
        }
        nodo.agregarHijo(")");
        nodo.agregarHijo("{");
        var nodo3 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"]("INSTRUCCIONES");
        for (let i = 0; i < this.instrucciones.length; i++) {
            nodo3.agregarHijo(this.instrucciones[i].getNodo());
        }
        nodo.agregarHijo(nodo3);
        nodo.agregarHijo("}");
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Instrucciones/If.ts":
/*!**************************************************!*\
  !*** ./src/analizadorXQUERY/Instrucciones/If.ts ***!
  \**************************************************/
/*! exports provided: If */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Simbolos_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Simbolos/Table */ "./src/analizadorXQUERY/Simbolos/Table.ts");
/* harmony import */ var _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Exepciones */ "./src/analizadorXQUERY/Varios/Exepciones.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");
/* harmony import */ var _Retorno__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Retorno */ "./src/analizadorXQUERY/Instrucciones/Retorno.ts");





class If extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(condicion, listaIf, listaElse, line, column) {
        super(null, line, column);
        this.condicion = condicion;
        this.listaIf = listaIf;
        this.listaElse = listaElse;
    }
    execute(table, tree) {
        const newtable = new _Simbolos_Table__WEBPACK_IMPORTED_MODULE_1__["Table"](table);
        let result;
        result = this.condicion.execute(newtable, tree);
        if (result instanceof _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__["Excepcion"]) {
            return result;
        }
        if (result) {
            for (let i = 0; i < this.listaIf.length; i++) {
                const res = this.listaIf[i].execute(newtable, tree);
                if (res instanceof _Retorno__WEBPACK_IMPORTED_MODULE_4__["Retorno"]) {
                    return res;
                }
            }
        }
        else {
            for (let i = 0; i < this.listaElse.length; i++) {
                const res = this.listaElse[i].execute(newtable, tree);
                if (res instanceof _Retorno__WEBPACK_IMPORTED_MODULE_4__["Retorno"]) {
                    return res;
                }
            }
        }
        return null;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__["NodoAST"]("IF");
        nodo.agregarHijo("if");
        nodo.agregarHijo("(");
        nodo.agregarHijo(this.condicion.getNodo());
        nodo.agregarHijo(")");
        nodo.agregarHijo("{");
        var nodo2 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__["NodoAST"]("INSTRUCCIONES IF");
        for (let i = 0; i < this.listaIf.length; i++) {
            nodo2.agregarHijo(this.listaIf[i].getNodo());
        }
        nodo.agregarHijo(nodo2);
        nodo.agregarHijo("}");
        if (this.listaElse != null) { // ELSE
            nodo.agregarHijo("else");
            nodo.agregarHijo("{");
            var nodo3 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_3__["NodoAST"]("INSTRUCCIONES ELSE");
            for (let i = 0; i < this.listaElse.length; i++) {
                nodo3.agregarHijo(this.listaElse[i].getNodo());
            }
            nodo.agregarHijo(nodo3);
            nodo.agregarHijo("}");
        }
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Instrucciones/LlamadaMetodo.ts":
/*!*************************************************************!*\
  !*** ./src/analizadorXQUERY/Instrucciones/LlamadaMetodo.ts ***!
  \*************************************************************/
/*! exports provided: LlamadaMetodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LlamadaMetodo", function() { return LlamadaMetodo; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Simbolos_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Simbolos/Table */ "./src/analizadorXQUERY/Simbolos/Table.ts");
/* harmony import */ var _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Varios/Exepciones */ "./src/analizadorXQUERY/Varios/Exepciones.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");
/* harmony import */ var _Retorno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Retorno */ "./src/analizadorXQUERY/Instrucciones/Retorno.ts");






class LlamadaMetodo extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(id, listaParams, line, column) {
        super(null, line, column);
        this.id = id;
        this.listaParams = listaParams;
    }
    execute(table, tree) {
        const newtable = new _Simbolos_Table__WEBPACK_IMPORTED_MODULE_1__["Table"](table);
        var nombre = this.id + "$";
        // var nombre = this.id;
        var index = 0;
        for (let param of this.listaParams) {
            var valor = param.execute(newtable, tree);
            // nombre += <any>param.tipo;
            index += 1;
        }
        nombre += index + "";
        let simboloMetodo;
        simboloMetodo = table.getVariable(nombre);
        if (simboloMetodo == null) {
            const error = new _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__["Excepcion"]('Semantico', `El metodo {${this.id}} no ha sido encontrado con esa combinacion de parametros`, this.line, this.column);
            tree.errores.push(error);
            tree.consola.push(error.toString());
            return error;
        }
        var parametros = simboloMetodo.valor[0];
        for (let i = 0; i < parametros.length; i++) {
            var para;
            var crear;
            para = parametros[i];
            crear = para;
            crear.valor = this.listaParams[i];
            crear.execute(newtable, tree);
        }
        var result = simboloMetodo.valor[1];
        if (result) {
            for (let i = 0; i < result.length; i++) {
                const res = result[i].execute(newtable, tree);
                if (simboloMetodo.tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].VOID) {
                    if (res instanceof _Retorno__WEBPACK_IMPORTED_MODULE_5__["Retorno"]) {
                        const error = new _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__["Excepcion"]('Semantico', `No se esperaba un retorno en este metodo`, res.line, res.column);
                        tree.errores.push(error);
                        tree.consola.push(error.toString());
                        return error;
                    }
                }
                else {
                    if (res instanceof _Retorno__WEBPACK_IMPORTED_MODULE_5__["Retorno"]) {
                        if (res.expresion != null) {
                            this.tipo = res.expresion.tipo;
                            res.execute(newtable, tree);
                            var retorno = res.exp;
                            if (simboloMetodo.tipo.tipo == res.expresion.tipo.tipo) {
                                return retorno;
                            }
                            else {
                                if (simboloMetodo.tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].DECIMAL && (res.expresion.tipo.tipo == _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].ENTERO)) {
                                    return retorno;
                                }
                                const error = new _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__["Excepcion"]('Semantico', `No se puede retornar debido a que es de un tipo diferente al declarado`, res.line, res.column);
                                tree.errores.push(error);
                                tree.consola.push(error.toString());
                                return error;
                            }
                        }
                        else {
                            const error = new _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__["Excepcion"]('Semantico', `No se puede retornar debido a que es de un tipo diferente al declarado`, res.line, res.column);
                            tree.errores.push(error);
                            tree.consola.push(error.toString());
                            return error;
                        }
                    }
                }
            }
            if (simboloMetodo.tipo.tipo != _Varios_Tipo__WEBPACK_IMPORTED_MODULE_3__["tipos"].VOID) {
                const error = new _Varios_Exepciones__WEBPACK_IMPORTED_MODULE_2__["Excepcion"]('Semantico', `Se esperaba un retorno en esta Funcion`, this.line, this.column);
                tree.errores.push(error);
                tree.consola.push(error.toString());
                return error;
            }
        }
        return null;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"]("LLAMADA METODO");
        nodo.agregarHijo(this.id);
        nodo.agregarHijo("(");
        if (this.listaParams.length != 0) {
            var nodo2 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"]("Parametros");
            var index = 1;
            for (let i = 0; i < this.listaParams.length; i++) {
                var param = this.listaParams[i];
                var nodo3 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"](param.tipo + "");
                nodo3.agregarHijo(param.id + "");
                nodo2.agregarHijo(nodo3);
            }
            nodo.agregarHijo(nodo2);
        }
        nodo.agregarHijo(")");
        nodo.agregarHijo("{");
        var nodo3 = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_4__["NodoAST"]("INSTRUCCIONES");
        nodo.agregarHijo(nodo3);
        nodo.agregarHijo("}");
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Instrucciones/Print.ts":
/*!*****************************************************!*\
  !*** ./src/analizadorXQUERY/Instrucciones/Print.ts ***!
  \*****************************************************/
/*! exports provided: Print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Varios_Tipo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Varios/Tipo */ "./src/analizadorXQUERY/Varios/Tipo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");




class Print extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(expresion, line, column) {
        super(new _Varios_Tipo__WEBPACK_IMPORTED_MODULE_1__["Tipo"](_Varios_Tipo__WEBPACK_IMPORTED_MODULE_1__["tipos"].VOID), line, column);
        this.expresion = expresion;
    }
    execute(table, tree) {
        const valor = this.expresion.execute(table, tree);
        tree.consola.push(valor);
        return null;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__["NodoAST"]("PRINT");
        nodo.agregarHijo("print");
        nodo.agregarHijo("(");
        nodo.agregarHijo(this.expresion.getNodo());
        nodo.agregarHijo(")");
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Instrucciones/Retorno.ts":
/*!*******************************************************!*\
  !*** ./src/analizadorXQUERY/Instrucciones/Retorno.ts ***!
  \*******************************************************/
/*! exports provided: Retorno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retorno", function() { return Retorno; });
/* harmony import */ var _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Arbol/Nodo */ "./src/analizadorXQUERY/Arbol/Nodo.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");


class Retorno extends _Arbol_Nodo__WEBPACK_IMPORTED_MODULE_0__["Nodo"] {
    constructor(expresion, line, column) {
        super(null, line, column);
        this.expresion = expresion;
    }
    execute(table, tree) {
        if (this.expresion != null) {
            this.exp = this.expresion.execute(table, tree);
        }
        return this;
    }
    getNodo() {
        var nodo = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_1__["NodoAST"]("RETURN");
        if (this.expresion != null) {
            nodo.agregarHijo(this.expresion.getNodo());
        }
        return nodo;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Simbolos/Simbolo.ts":
/*!**************************************************!*\
  !*** ./src/analizadorXQUERY/Simbolos/Simbolo.ts ***!
  \**************************************************/
/*! exports provided: Simbolo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Simbolo", function() { return Simbolo; });
class Simbolo {
    constructor(tipo, id, valor, tipo2, line, column) {
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
        this.line = line;
        this.column = column;
        this.tipo2 = tipo2;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Simbolos/Table.ts":
/*!************************************************!*\
  !*** ./src/analizadorXQUERY/Simbolos/Table.ts ***!
  \************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
class Table {
    constructor(Anterior) {
        this.Anterior = Anterior;
        this.Variables = new Map();
    }
    setVariable(simbol) {
        let ambito;
        for (ambito = this; ambito != null; ambito = ambito.Anterior) {
            for (let key of Array.from(ambito.Variables.keys())) {
                if (key.toLowerCase() === simbol.id.toLowerCase()) {
                    // return `La variable ${key} ya ha sido declarada.`;
                    return this.Variables.set(simbol.id.toLowerCase(), simbol);
                }
            }
        }
        this.Variables.set(simbol.id.toLowerCase(), simbol);
        return null;
    }
    getVariable(id) {
        let ambito;
        for (ambito = this; ambito != null; ambito = ambito.Anterior) {
            for (let key of Array.from(ambito.Variables.keys())) {
                if (key.toLowerCase() === id.toLowerCase()) {
                    return ambito.Variables.get(key.toLocaleLowerCase());
                }
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Simbolos/Tree.ts":
/*!***********************************************!*\
  !*** ./src/analizadorXQUERY/Simbolos/Tree.ts ***!
  \***********************************************/
/*! exports provided: Tree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return Tree; });
class Tree {
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.errores = new Array();
        this.consola = new Array();
        this.Variables = new Array();
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Varios/Error.ts":
/*!**********************************************!*\
  !*** ./src/analizadorXQUERY/Varios/Error.ts ***!
  \**********************************************/
/*! exports provided: Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
class Error {
    constructor(tipo, descripcion, line, column) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.line = line;
        this.column = column;
    }
    toString() {
        return `Error ${this.tipo} en la linea ${this.line} y columna ${this.column}, ${this.descripcion}`;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Varios/Exepciones.ts":
/*!***************************************************!*\
  !*** ./src/analizadorXQUERY/Varios/Exepciones.ts ***!
  \***************************************************/
/*! exports provided: Excepcion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Excepcion", function() { return Excepcion; });
class Excepcion {
    constructor(tipo, descripcion, line, column) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.line = line;
        this.column = column;
    }
    toString() {
        return `Error ${this.tipo} en la linea ${this.line} y columna ${this.column}, ${this.descripcion}`;
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/Varios/Tipo.ts":
/*!*********************************************!*\
  !*** ./src/analizadorXQUERY/Varios/Tipo.ts ***!
  \*********************************************/
/*! exports provided: tipos, esEntero, Tipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipos", function() { return tipos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esEntero", function() { return esEntero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tipo", function() { return Tipo; });
var tipos;
(function (tipos) {
    tipos[tipos["ENTERO"] = 0] = "ENTERO";
    tipos[tipos["DECIMAL"] = 1] = "DECIMAL";
    tipos[tipos["NUMERO"] = 2] = "NUMERO";
    tipos[tipos["CARACTER"] = 3] = "CARACTER";
    tipos[tipos["STRING"] = 4] = "STRING";
    tipos[tipos["BOOLEANO"] = 5] = "BOOLEANO";
    tipos[tipos["LISTA"] = 6] = "LISTA";
    tipos[tipos["ARRAY"] = 7] = "ARRAY";
    tipos[tipos["VOID"] = 8] = "VOID";
    tipos[tipos["METODO"] = 9] = "METODO";
    tipos[tipos["FUNCION"] = 10] = "FUNCION";
    tipos[tipos["VARIABLE"] = 11] = "VARIABLE";
})(tipos || (tipos = {}));
function esEntero(numero) {
    if (numero % 1 == 0) {
        return tipos.ENTERO;
    }
    else {
        return tipos.DECIMAL;
    }
}
class Tipo {
    constructor(tipo) {
        this.tipo = tipo;
    }
    toString() {
        if (this.tipo === tipos.BOOLEANO) {
            return 'boolean';
        }
        else if (this.tipo === tipos.ENTERO) {
            return 'entero';
        }
        else if (this.tipo === tipos.DECIMAL) {
            return 'decimal';
        }
        else if (this.tipo === tipos.STRING) {
            return 'string';
        }
        else if (this.tipo === tipos.CARACTER) {
            return 'caracter';
        }
        else if (this.tipo === tipos.VARIABLE) {
            return 'Variable';
        }
        else if (this.tipo === tipos.METODO) {
            return 'Metodo';
        }
        else if (this.tipo === tipos.FUNCION) {
            return 'Funcion';
        }
        else if (this.tipo === tipos.VOID) {
            return 'Void';
        }
        else if (this.tipo === tipos.ARRAY) {
            return 'Vector';
        }
        else if (this.tipo === tipos.LISTA) {
            return 'Lista';
        }
    }
}


/***/ }),

/***/ "./src/analizadorXQUERY/index.ts":
/*!***************************************!*\
  !*** ./src/analizadorXQUERY/index.ts ***!
  \***************************************/
/*! exports provided: AnalizadorXquery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalizadorXquery", function() { return AnalizadorXquery; });
/* harmony import */ var _Varios_Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Varios/Error */ "./src/analizadorXQUERY/Varios/Error.ts");
/* harmony import */ var _Simbolos_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Simbolos/Table */ "./src/analizadorXQUERY/Simbolos/Table.ts");
/* harmony import */ var _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Arbol/NodoAST */ "./src/analizadorXQUERY/Arbol/NodoAST.ts");
/* harmony import */ var _GramaticaXquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GramaticaXquery */ "./src/analizadorXQUERY/GramaticaXquery.js");
/* harmony import */ var _GramaticaXquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GramaticaXquery__WEBPACK_IMPORTED_MODULE_3__);




class AnalizadorXquery {
    ejecutarCodigo(entrada) {
        //entrada = `local:minPrice($/bookstore/book/price,$/bookstore/book/year)`
        //let arbol: Tree = gramatica.parse(entrada)
        let ret = {
            errores: [],
            consola: []
        };
        try {
            const tree = _GramaticaXquery__WEBPACK_IMPORTED_MODULE_3__["parse"](entrada);
            const tabla = new _Simbolos_Table__WEBPACK_IMPORTED_MODULE_1__["Table"](null);
            tree.instrucciones.map((m) => {
                try {
                    const res = m.execute(tabla, tree);
                }
                catch (error) {
                    const error2 = new _Varios_Error__WEBPACK_IMPORTED_MODULE_0__["Error"]('Sintactico', `Irrecuperable`, 0, 0);
                    tree.consola.push(error2.toString());
                    console.log(error);
                }
            });
            var init = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__["NodoAST"]("RAIZ");
            var instr = new _Arbol_NodoAST__WEBPACK_IMPORTED_MODULE_2__["NodoAST"]("INSTRUCCIONES");
            tree.instrucciones.map((m) => {
                instr.agregarHijo(m.getNodo());
            });
            init.agregarHijo(instr);
            //graphAST(init);
            //graphTabla(tree.Variables);
            console.log(tree);
            ret.consola = tree.consola;
            ret.errores = tree.errores;
        }
        catch (error) {
            console.log(error);
            let consola2 = new Array();
            consola2.push(error);
            consola2.push("Ocurrio un Error sintactico Irrecuperable\n\n");
            consola2.push("                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFF\n" +
                "                   FFFFFF\n" +
                "                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFFFFFFFFFFF\n" +
                "                   FFFFFFF\n" +
                "                   FFFFFFF\n" +
                "                   FFFFFFF\n" +
                "                   FFFFFFF");
            ret.consola = consola2;
            ret.errores = [];
        }
        return ret;
    }
}


/***/ }),

/***/ "./src/analizadores/AST/Arbol.ts":
/*!***************************************!*\
  !*** ./src/analizadores/AST/Arbol.ts ***!
  \***************************************/
/*! exports provided: Arbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arbol", function() { return Arbol; });
class Arbol {
    constructor(objetos) {
        this.dot = "";
        this.objetos = [];
        this.objetos = objetos;
        this.dot = "";
    }
    crearGrafoAST() {
        this.dot = "digraph AST{\n";
        this.dot += "\"raiz\" [label = \"Raiz\"]\n";
        if (this.objetos.length > 1) {
            let i = 0;
            while (i < this.objetos.length) {
                this.dot += `\"${i}\" [label = \"|\"]\n`;
                this.dot += `\"raiz\" -> \"${i}\"\n`;
                this.dot += this.generarNodoAST(this.objetos[i], `${i}`);
                if (i + 1 < this.objetos.length) {
                    this.dot += this.generarNodoAST(this.objetos[i + 1], `${i}`);
                }
                i += 2;
            }
        }
        else {
            this.objetos.forEach((objeto) => {
                this.dot += this.generarNodoAST(objeto, 'raiz');
            });
        }
        this.dot += "}";
        console.log(this.dot);
        return this.dot;
    }
    generarNodoAST(objeto, padre) {
        var aux = "";
        var izqID = `${objeto.linea.toString()}_${objeto.columna.toString()}I`;
        var derID = `${objeto.linea.toString()}_${objeto.columna.toString()}D`;
        aux = `\"${izqID}\" [label = \"${objeto.estado}\"]\n`;
        aux += `\"${derID}\" [label = \"${objeto.identificador}\"]\n`;
        aux += `\"${padre}\" -> \"${izqID}\"\n`;
        aux += `\"${padre}\" -> \"${derID}\"\n`;
        if (objeto.nodos.length > 0) {
            aux += this.generarNodoAST(objeto.nodos[0], izqID);
        }
        return aux;
    }
    crearGrafoCST() {
        this.dot = "digraph AST {\n";
        this.dot += "\"raiz\" [label = \"Raiz\"]\n";
        if (this.objetos.length > 1) {
            let i = 0;
            while (i < this.objetos.length) {
                this.dot += `\"${i}S\" [label = \"Separador\"]\n`;
                this.dot += `\"${i}\" [label = \"|\"]\n`;
                this.dot += `\"raiz\" -> \"${i}S\"\n`;
                this.dot += `\"${i}S\" -> \"${i}\"\n`;
                this.dot += this.generarNodoCST(this.objetos[i], `${i}`);
                if (i + 1 < this.objetos.length) {
                    this.dot += this.generarNodoCST(this.objetos[i + 1], `${i}`);
                }
                i += 2;
            }
        }
        else {
            this.objetos.forEach((objeto) => {
                this.dot += this.generarNodoCST(objeto, 'raiz');
            });
        }
        this.dot += "}";
        return this.dot;
    }
    generarNodoCST(objeto, padre) {
        var aux = "";
        var izqID = `${objeto.linea.toString()}_${objeto.columna.toString()}I`;
        var derID = `${objeto.linea.toString()}_${objeto.columna.toString()}D`;
        var centroID = `${objeto.linea.toString()}_${objeto.columna.toString()}C`;
        aux = `\"${izqID}\" [label = \"${objeto.estado}\"]\n`;
        aux += `\"${derID}\" [label = \"${objeto.identificador}\"]\n`;
        aux += `\"${centroID}\" [label = \"Nodo\"]\n`;
        aux += `\"${centroID}\" -> \"${izqID}\"\n`;
        aux += `\"${centroID}\" -> \"${derID}\"\n`;
        aux += `\"${padre}\" -> \"${centroID}\"\n`;
        if (objeto.nodos.length > 0) {
            aux += this.generarNodoCST(objeto.nodos[0], izqID);
        }
        return aux;
    }
    ejecutarArbol() {
        this.dot = "";
        if (this.objetos.length > 1) {
            for (let i = 0; i < this.objetos.length; i++) {
                this.dot += this.ejecutarNodoArbol(this.objetos[i]);
                if (i != this.objetos.length - 1) {
                    this.dot += "|";
                }
            }
        }
        else {
            this.dot += this.ejecutarNodoArbol(this.objetos[0]);
        }
        console.log(this.dot);
        return this.dot;
    }
    ejecutarNodoArbol(objeto) {
        var aux = objeto.estado + objeto.identificador;
        if (objeto.nodos.length > 0) {
            aux += this.ejecutarNodoArbol(objeto.nodos[0]);
        }
        /*if (objeto.predicado !== null){
            let ret = this.ejecutarPredicado(objeto.predicado.expresion)
            aux += "[" + ret.ex1 + ret.ex2 + "]";
        }*/
        return aux;
    }
}


/***/ }),

/***/ "./src/analizadores/AST/GramaticaBNF.ts":
/*!**********************************************!*\
  !*** ./src/analizadores/AST/GramaticaBNF.ts ***!
  \**********************************************/
/*! exports provided: GramaticaBNF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GramaticaBNF", function() { return GramaticaBNF; });
class GramaticaBNF {
    constructor(repo, repo2) {
        this.reporte = repo;
        this.reporte2 = repo2;
    }
    getBNFReport() {
        let ret = [];
        for (let i = 0; i < this.reporte.length; i++) {
            ret.push(this.generarBodyReporte(this.reporte[i], this.reporte2[i], i));
        }
        return ret;
    }
    generarBodyReporte(object, object2, iterator) {
        var fila = {
            no: iterator,
            produccion: object,
            accion: object2
        };
        return fila;
    }
}


/***/ }),

/***/ "./src/analizadores/AST/SalidaGramatica.ts":
/*!*************************************************!*\
  !*** ./src/analizadores/AST/SalidaGramatica.ts ***!
  \*************************************************/
/*! exports provided: SalidaGramatica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalidaGramatica", function() { return SalidaGramatica; });
class SalidaGramatica {
    constructor(objetos, reporte, reporte2, reporteE) {
        this.objetos = objetos;
        this.reporteBNF = reporte;
        this.reporteBNF2 = reporte2;
        this.reportError = reporteE;
    }
}


/***/ }),

/***/ "./src/analizadores/Errores/ListaErrores.ts":
/*!**************************************************!*\
  !*** ./src/analizadores/Errores/ListaErrores.ts ***!
  \**************************************************/
/*! exports provided: ListaErrores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaErrores", function() { return ListaErrores; });
/* harmony import */ var _Expresiones_tError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expresiones/tError */ "./src/analizadores/Expresiones/tError.ts");

class ListaErrores {
    constructor() {
        this.contador = 1;
        this.contador = 1;
    }
    //LLAMARLO AL INICIO PARA VALIDAR LAS ETIQUETAS
    validateEtiquetas(listaO) {
        var tmpArray = [];
        for (let i = 0; i < listaO.length; i++) {
            if (listaO[i].identificador !== listaO[i].cierre) {
                tmpArray.push(new _Expresiones_tError__WEBPACK_IMPORTED_MODULE_0__["tError"]('Semantico', `Etiquetas incorrectas ${listaO[i].identificador} !=== ${listaO[i].cierre}`, listaO[i].linea, listaO[i].columna));
                //console.log(`Etiquetas incorrectas ${listaO[i].identificador} !=== ${listaO[i].cierre}`);
            }
            else {
                var tmp = this.validateEtiquetas(listaO[i].listaObjetos);
                if (tmp.length !== 0) {
                    tmpArray = tmp;
                }
            }
        }
        return tmpArray;
    }
    /*
        var arrTmp = lError.validateEtiquetas(salidaG.objetos);
        console.log(lError.generateHtmlBody(salidaG.lErrores, arrTmp));
    */
    //ARCHIVO .HTML
    generateHtmlBody(erroresLS, erroresEtiquetas) {
        var arrayCuerpo = [];
        if (erroresLS.length > 0) {
            erroresLS.forEach((object) => {
                arrayCuerpo.push(this.getHtmlBody(object));
            });
        }
        if (erroresEtiquetas.length > 0) {
            erroresEtiquetas.forEach((object) => {
                arrayCuerpo.push(this.getHtmlBody(object));
            });
        }
        return arrayCuerpo;
    }
    getHtmlBody(error) {
        var fila = {
            no: this.contador,
            tipo: error.tipo,
            valor: error.texto,
            linea: error.linea,
            columna: error.columna
        };
        return fila;
    }
}


/***/ }),

/***/ "./src/analizadores/Expresiones/Nodo.ts":
/*!**********************************************!*\
  !*** ./src/analizadores/Expresiones/Nodo.ts ***!
  \**********************************************/
/*! exports provided: Nodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nodo", function() { return Nodo; });
class Nodo {
    constructor(estado, identificador, predicado, nodos, linea, columna) {
        this.estado = estado;
        this.identificador = identificador;
        this.predicado = predicado;
        this.nodos = nodos;
        this.linea = linea;
        this.columna = columna;
    }
}


/***/ }),

/***/ "./src/analizadores/Expresiones/Predicate.ts":
/*!***************************************************!*\
  !*** ./src/analizadores/Expresiones/Predicate.ts ***!
  \***************************************************/
/*! exports provided: Predicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predicate", function() { return Predicate; });
class Predicate {
    constructor(expresion, linea, columna) {
        this.expresion = expresion;
        this.linea = linea;
        this.columna = columna;
    }
}


/***/ }),

/***/ "./src/analizadores/Expresiones/Primitivo.ts":
/*!***************************************************!*\
  !*** ./src/analizadores/Expresiones/Primitivo.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Primitivo; });
class Primitivo {
    /**
     * @constructor creamos un nuevo primitivo
     * @param primitivo hace referencia a los valores enteros, dobles, cadenas, caracteres, booleanos
     * @param linea idica la linea donde se encuentra
     * @param columna indica la columna donde se encuentra
     */
    constructor(primitivo, linea, columna) {
        this.columna = columna;
        this.linea = linea;
        this.primitivo = primitivo;
    }
    getTipo() {
        let valor = this.getValor();
        if (typeof valor === 'number') {
            return "numero";
        }
        else if (typeof valor === 'string') {
            return "string";
        }
    }
    /**
     * @returns retorna el valor exacto del primitivo
     */
    getValor() {
        return this.primitivo;
    }
}


/***/ }),

/***/ "./src/analizadores/Expresiones/tError.ts":
/*!************************************************!*\
  !*** ./src/analizadores/Expresiones/tError.ts ***!
  \************************************************/
/*! exports provided: tError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tError", function() { return tError; });
class tError {
    /**
     * @constructor creamos un nuevo primitivo
     * @param tipo hace referencia al tipo de error
     * @param texto hace referencia al contenido del mensaje del error
     * @param linea idica la linea donde se encuentra
     * @param columna indica la columna donde se encuentra
     */
    constructor(tipo, texto, linea, columna) {
        this.columna = columna;
        this.linea = linea;
        this.texto = texto;
        this.tipo = tipo;
    }
}


/***/ }),

/***/ "./src/analizadores/Operaciones/Aritmeticas.ts":
/*!*****************************************************!*\
  !*** ./src/analizadores/Operaciones/Aritmeticas.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Aritmetica; });
class Aritmetica {
    constructor(exp1, operador, exp2, linea, columna) {
        this.exp1 = exp1;
        this.operador = operador;
        this.exp2 = exp2;
        this.linea = linea;
        this.columna = columna;
    }
    getTipo() {
        let valor = this.getValor();
        if (typeof valor === 'number') {
            return "numero";
        }
        else if (typeof valor === 'string') {
            return "string";
        }
    }
    getValor() {
        let valor_exp1 = this.exp1.getValor();
        let valor_exp2 = this.exp2.getValor();
        switch (this.operador) {
            case "+":
                if (typeof valor_exp1 === 'number') {
                    if (typeof valor_exp2 === 'number') {
                        return valor_exp1 + valor_exp2;
                    }
                }
                break;
            case "-":
                if (typeof valor_exp1 == 'number') {
                    if (typeof valor_exp2 == "number") {
                        return valor_exp1 - valor_exp2;
                    }
                }
                break;
            case "*":
                if (typeof valor_exp1 === 'number') {
                    if (typeof valor_exp2 === 'number') {
                        return valor_exp1 * valor_exp2;
                    }
                }
                break;
            case "/":
                if (typeof valor_exp1 === 'number') {
                    if (typeof valor_exp2 === 'number') {
                        if (valor_exp2 != 0) {
                            return valor_exp1 / valor_exp2;
                        }
                    }
                }
                break;
            case "%":
                if (typeof valor_exp1 === 'number') {
                    if (typeof valor_exp2 === 'number') {
                        if (valor_exp2 != 0) {
                            return valor_exp1 % valor_exp2;
                        }
                    }
                }
                break;
            default:
                return "";
                break;
        }
    }
}


/***/ }),

/***/ "./src/analizadores/Operaciones/Logica.ts":
/*!************************************************!*\
  !*** ./src/analizadores/Operaciones/Logica.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logica; });
class Logica /*extends Operacion*/ {
    constructor(exp1, operador, exp2, linea, columna) {
        this.exp1 = exp1;
        this.operador = operador;
        this.exp2 = exp2;
        this.linea = linea;
        this.columna = columna;
    }
    getTipo( /*controlador: Controlador, ts: TablaSimbolos*/) {
        return "";
    }
    getValor( /*Controlador: Controlador, TablaSimbolos: TablaSimbolos*/) {
        return this.exp1.getValor() + " " + this.operador + " " + this.exp2.getValor();
    }
}


/***/ }),

/***/ "./src/analizadores/Operaciones/Relacional.ts":
/*!****************************************************!*\
  !*** ./src/analizadores/Operaciones/Relacional.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Relacional; });
class Relacional /*extends Operacion*/ {
    constructor(exp1, operador, exp2, linea, columna) {
        this.exp1 = exp1;
        this.operador = operador;
        this.exp2 = exp2;
        this.linea = linea;
        this.columna = columna;
    }
    getTipo( /*controlador: Controlador, ts: TablaSimbolos*/) {
        return "";
    }
    getValor( /*Controlador: Controlador, TablaSimbolos: TablaSimbolos*/) {
        return this.exp1.getValor() + " " + this.operador + " " + this.exp2.getValor();
    }
}


/***/ }),

/***/ "./src/analizadores/index.ts":
/*!***********************************!*\
  !*** ./src/analizadores/index.ts ***!
  \***********************************/
/*! exports provided: AnalizadosAscXpath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalizadosAscXpath", function() { return AnalizadosAscXpath; });
/* harmony import */ var _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AST/GramaticaBNF */ "./src/analizadores/AST/GramaticaBNF.ts");
/* harmony import */ var _AST_Arbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AST/Arbol */ "./src/analizadores/AST/Arbol.ts");
/* harmony import */ var _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errores/ListaErrores */ "./src/analizadores/Errores/ListaErrores.ts");
/* harmony import */ var _xpathAsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xpathAsc */ "./src/analizadores/xpathAsc.js");
/* harmony import */ var _xpathAsc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_xpathAsc__WEBPACK_IMPORTED_MODULE_3__);




class AnalizadosAscXpath {
    ejecutarCodigo(entrada) {
        const salidaG = _xpathAsc__WEBPACK_IMPORTED_MODULE_3__["parse"](entrada);
        const gramBnf = new _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_0__["GramaticaBNF"](salidaG.reporteBNF, salidaG.reporteBNF2);
        const arbol = new _AST_Arbol__WEBPACK_IMPORTED_MODULE_1__["Arbol"](salidaG.objetos);
        const Listaerrores = new _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_2__["ListaErrores"]();
        console.log(salidaG.objetos);
        let reporteBNF = gramBnf.getBNFReport();
        let reporteAST = arbol.crearGrafoAST();
        let reporteCST = arbol.crearGrafoCST();
        let resultado = arbol.ejecutarArbol();
        //Errores
        let errores = Listaerrores.generateHtmlBody(salidaG.reportError, []);
        return {
            objetos: salidaG.objetos,
            bnfRep: reporteBNF,
            astRep: reporteAST,
            cstRep: reporteCST,
            ejecutado: resultado,
            errores: errores
        };
    }
}


/***/ }),

/***/ "./src/analizadores/indexDesc.ts":
/*!***************************************!*\
  !*** ./src/analizadores/indexDesc.ts ***!
  \***************************************/
/*! exports provided: AnalizadosAscXpath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalizadosAscXpath", function() { return AnalizadosAscXpath; });
/* harmony import */ var _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AST/GramaticaBNF */ "./src/analizadores/AST/GramaticaBNF.ts");
/* harmony import */ var _AST_Arbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AST/Arbol */ "./src/analizadores/AST/Arbol.ts");
/* harmony import */ var _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errores/ListaErrores */ "./src/analizadores/Errores/ListaErrores.ts");
/* harmony import */ var _xpathDesc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xpathDesc */ "./src/analizadores/xpathDesc.js");
/* harmony import */ var _xpathDesc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_xpathDesc__WEBPACK_IMPORTED_MODULE_3__);




class AnalizadosAscXpath {
    ejecutarCodigo(entrada) {
        const salidaG = _xpathDesc__WEBPACK_IMPORTED_MODULE_3__["parse"](entrada);
        const gramBnf = new _AST_GramaticaBNF__WEBPACK_IMPORTED_MODULE_0__["GramaticaBNF"](salidaG.reporteBNF, salidaG.reporteBNF2);
        const arbol = new _AST_Arbol__WEBPACK_IMPORTED_MODULE_1__["Arbol"](salidaG.objetos);
        const Listaerrores = new _Errores_ListaErrores__WEBPACK_IMPORTED_MODULE_2__["ListaErrores"]();
        let reporteBNF = gramBnf.getBNFReport();
        let reporteAST = arbol.crearGrafoAST();
        let reporteCST = arbol.crearGrafoCST();
        let resultado = arbol.ejecutarArbol();
        //Errores
        let errores = Listaerrores.generateHtmlBody(salidaG.reportError, []);
        return {
            objetos: salidaG.objetos,
            bnfRep: reporteBNF,
            astRep: reporteAST,
            cstRep: reporteCST,
            ejecutado: resultado,
            errores: errores
        };
    }
}


/***/ }),

/***/ "./src/analizadores/xpathAsc.js":
/*!**************************************!*\
  !*** ./src/analizadores/xpathAsc.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xpathAsc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,6],$V3=[1,7],$V4=[1,8],$V5=[5,6],$V6=[1,13],$V7=[1,12],$V8=[2,5,6,14],$V9=[2,40],$Va=[1,15],$Vb=[1,18],$Vc=[1,20],$Vd=[1,21],$Ve=[1,22],$Vf=[1,23],$Vg=[1,25],$Vh=[1,26],$Vi=[1,27],$Vj=[1,28],$Vk=[1,29],$Vl=[1,30],$Vm=[1,31],$Vn=[1,32],$Vo=[1,33],$Vp=[1,34],$Vq=[1,35],$Vr=[1,36],$Vs=[8,12,16,17,20,23,26,27,28,29,30,31,32,33,34,35,36],$Vt=[2,14],$Vu=[1,49],$Vv=[1,53],$Vw=[1,48],$Vx=[1,46],$Vy=[1,47],$Vz=[1,50],$VA=[1,51],$VB=[1,52],$VC=[1,62],$VD=[1,61],$VE=[1,63],$VF=[1,83],$VG=[1,81],$VH=[1,82],$VI=[1,84],$VJ=[1,85],$VK=[1,86],$VL=[1,87],$VM=[1,88],$VN=[1,89],$VO=[1,90],$VP=[1,91],$VQ=[1,92],$VR=[1,93],$VS=[16,19,40,41,42,43,44,45,46,47,48,49,50,51,52],$VT=[2,5,6,14,16,19,40,41,42,43,44,45,46,47,48,49,50,51,52],$VU=[1,136],$VV=[1,134],$VW=[1,135],$VX=[1,137],$VY=[16,19,40,43,44,45,46,47,48,49,50,51,52],$VZ=[19,40,44,45,46,47,48,49,50,51,52],$V_=[19,40,44,49,50,51,52];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIOPURO":3,"INICIO":4,"EOF":5,"tk_barra":6,"INICIALES":7,"tk_punto":8,"DIAGONALES":9,"DERIVADOSLIMITADO":10,"DERIVACIONDIAGONAL":11,"tk_identificador":12,"PREDICATE":13,"tk_diagonal":14,"DERIVADOS":15,"tk_asterisco":16,"tk_node":17,"tk_parA":18,"tk_parC":19,"tk_arroba":20,"ATRIBUTO":21,"AXES":22,"tk_child":23,"tk_dosPuntos":24,"NODETEST":25,"tk_descendant":26,"tk_descendatOr":27,"tk_ancestor":28,"tk_ancestorOr":29,"tk_attribute":30,"tk_following":31,"tk_followingSi":32,"tk_parent":33,"tk_preceding":34,"tk_precedingSi":35,"tk_self":36,"tk_text":37,"tk_llaveA":38,"EXPRESION":39,"tk_llaveC":40,"tk_mas":41,"tk_menos":42,"tk_div":43,"tk_mod":44,"tk_menor":45,"tk_mayor":46,"tk_menorIgual":47,"tk_mayorIgual":48,"tk_igual":49,"tk_distinto":50,"tk_or":51,"tk_and":52,"tk_entero":53,"tk_decimal":54,"tk_position":55,"tk_last":56,"tk_stringTexto":57,"tk_ParC":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"tk_barra",8:"tk_punto",12:"tk_identificador",14:"tk_diagonal",16:"tk_asterisco",17:"tk_node",18:"tk_parA",19:"tk_parC",20:"tk_arroba",23:"tk_child",24:"tk_dosPuntos",26:"tk_descendant",27:"tk_descendatOr",28:"tk_ancestor",29:"tk_ancestorOr",30:"tk_attribute",31:"tk_following",32:"tk_followingSi",33:"tk_parent",34:"tk_preceding",35:"tk_precedingSi",36:"tk_self",37:"tk_text",38:"tk_llaveA",40:"tk_llaveC",41:"tk_mas",42:"tk_menos",43:"tk_div",44:"tk_mod",45:"tk_menor",46:"tk_mayor",47:"tk_menorIgual",48:"tk_mayorIgual",49:"tk_igual",50:"tk_distinto",51:"tk_or",52:"tk_and",53:"tk_entero",54:"tk_decimal",55:"tk_position",56:"tk_last",57:"tk_stringTexto",58:"tk_ParC"},
productions_: [0,[3,2],[4,3],[4,1],[7,4],[7,3],[7,3],[7,4],[7,3],[7,5],[9,1],[9,2],[9,2],[11,3],[11,0],[10,2],[10,2],[10,4],[10,2],[10,1],[15,1],[15,2],[15,1],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[22,4],[25,2],[25,4],[25,2],[25,3],[13,3],[13,0],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,1],[39,1],[39,2],[39,1],[39,3],[39,3],[39,1],[39,3],[21,1],[21,1],[21,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

            produccion.push('<INICIOPURO> ::= <INICIO> EOF');
            accion.push('INICIOPURO.Val = INICIO.val //fin del documento');
            return new SalidaGramatica($$[$0-1], produccion, accion,listaErrores);
        
break;
case 2:
 
            produccion.push('<INICIO> ::= <INICIO> | <INICIALES>');
            accion.push('INICIO.Val = INICIO.push(INICIALES)');
            //this.$ = new Array();
            this.$.push($$[$0]); 
        
break;
case 3:

            produccion.push('<INICIO> ::= <INICIALES>');
            accion.push('INICIO.Val = INICIALES.Val');
            this.$ = [$$[$0]]; 
        
break;
case 4:

            produccion.push(`<INICIALES> ::= punto <DIAGONALES> <DERIVADOSLIMITADO> <DERIVAIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo("", ".", null, [new Nodo($$[$0-2], $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-3].first_line, _$[$0-3].first_column)], _$[$0-3].first_line, _$[$0-3].first_column);
        
break;
case 5:

            produccion.push(`<INICIALES> ::= identificador <PREDICATE> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            //this.$ = new Array();
            this.$ = new Nodo("", $$[$0-2], $$[$0-1], [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)
            //this.$.push(...$$[$0])
        
break;
case 6:

            produccion.push(`<INICIALES> ::= / <DERIVADOS> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            //this.$ = new Array();
            this.$ = new Nodo($$[$0-2], $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)
            //this.$.push(...$$[$0])
        
break;
case 7:

            produccion.push('<INICIALES> ::= // <DERIVADOS> <DERIVACIONDIAGONAL>');
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            //this.$ = new Array();
            this.$ = new Nodo("//", $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-3].first_line, _$[$0-3].first_column)
            //this.$.push(...$$[$0])
        
break;
case 8:

            produccion.push(`<INICIALES> ::= asterisco <PREDICATE> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            //this.$ = new Array();
            this.$ = new Nodo("", $$[$0-2], $$[$0-1], [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)
            //this.$.push(...$$[$0])
        
break;
case 9:

            produccion.push(`<INICIALES> ::= node() <PREDICATE> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            //this.$ = new Array();
            this.$ = new Nodo("", "node()", $$[$0-1], [...$$[$0-2]], _$[$0-4].first_line, _$[$0-4].first_column)
            //this.$.push(...$$[$0-2])
        
break;
case 10:

            produccion.push('<DIAGONALES> ::= /');
            accion.push('DIAGONALES.Val = \"/\"'); 
            this.$ = $$[$0] 
        
break;
case 11:

            produccion.push(`<DIAGONALES> ::= //`);
            accion.push('DIAGONALES.Val = \"//\"'); 
            this.$ = "//" 
        
break;
case 12:

            listaErrores.push(new tError('Sintactico',`Token inesperado: ${yytext}`,_$[$0-1].first_line,_$[$0-1].first_column));
        
break;
case 13:

            produccion.push(`<DERIVACIONDIAGONAL> ::= <DIAGONALES> <DERIVADOS> <DERIVACIONDIAGONAL>`);
            accion.push('DERIVACIONDIAGONAL.Val = []; DERIVACIONDIAGONAL.Val.push(new Nodo(tipo, id, predicado, fila, columna)); DERIVACIONDIAGONAL.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Array();
            this.$.push(new Nodo($$[$0-2], $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)) 
            //this.$.push(...$$[$0])
        
break;
case 14:

            produccion.push(`<DERIVACIONDIAGONAL> ::= epsilon`);
            accion.push('DERIVACIONDIAGONAL.Val = [/*Vacio*/]');
            this.$ = [];
        
break;
case 15:

            produccion.push(`<DERIVADOSLIMIADO> ::= identificador <PREDICATE>`);
            accion.push('DERIVADOSLIMITADO.Val = identificador + PREDICATE.Val'); 
            this.$ = {val: $$[$0-1], pre: $$[$0]};
        
break;
case 16:

            produccion.push(`<DERIVADOSLIMIADO> ::= asterisco <PREDICATE>`);
            accion.push('DERIVADOSLIMITADO.Val = \"*\" + PREDICATE.Val'); 
            this.$ = {val: $$[$0-1], pre: $$[$0]};
        
break;
case 17:

            produccion.push(`<DERIVADOSLIMIADO> ::= node() <PREDICATE>`);
            accion.push('DERIVADOSLIMITADO.Val = \"@\" + ATRIBUTO.Val'); 
            this.$ = {val: "node()", pre: $$[$0]}
        
break;
case 18:

            produccion.push(`<DERIVADOSLIMIADO> ::= arroba <ATRIBUTO>`);
            accion.push('DERIVADOSLIMITADO.Val = \"@\" + ATRIBUTO.Val'); 
            this.$ = {val: $$[$0-1] + "" + $$[$0], pre: null}; 
        
break;
case 19:

            produccion.push(`<DERIVADOSLIMITADO> ::= <AXES>`);
            accion.push('DERIVADOSLIMITADO.Val = AXES.Val'); 
            this.$ = {val: $$[$0], pre: null}
        
break;
case 20:
 
            produccion.push(`<DERIVADOS> ::= punto`);
            accion.push("DERIVADOS.Val = \".\" ");
            this.$ = {val: $$[$0], pre: null}; 
        
break;
case 21:

            produccion.push(`<DERIVADOS> ::= doblePunto`);
            accion.push('DERIVADOS.Val = \"..\"');
            this.$ = {val: "..", pre: null}; 
        
break;
case 22:
 
            produccion.push(`<DERIVADOS> ::= <DERIVADOSLIMITADO>`);
            accion.push('DERIVADOS.Val = DERIVADOSLIMITADO.Val'); 
            this.$ = $$[$0]; 
        
break;
case 39:

            produccion.push(`<PREDICATE> ::= llaveA <EXPRESION> llaveC`);
            accion.push('PREDICATE.Val = EXPRESION.Val');
            this.$ = new Predicate($$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 40:

            produccion.push(`<PREDICATE> ::= epsilon`);
            accion.push('PREDICATE.Val = /*vacio*/');
            this.$ = null; 
        
break;
case 41:

            produccion.push(`<EXPRESION> ::= <EXPRESION> mas <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '+', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 42:

            produccion.push(`<EXPRESION> ::= <EXPRESION> menos <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val - EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '-', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 43:

            produccion.push(`<EXPRESION> ::= <EXPRESION> asterisco <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val * EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '*', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 44:

            produccion.push(`<EXPRESION> ::= <EXPRESION> div <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val / EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '/', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 45:

            produccion.push(`<EXPRESION> ::= <EXPRESION> mod <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val % EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '%', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 46:

            produccion.push(`<EXPRESION> ::= <EXPRESION> menor <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \"<\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '<', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 47:

            produccion.push(`<EXPRESION> ::= <EXPRESION> mayor <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \">\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '>', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 48:

            produccion.push(`<EXPRESION> ::= <EXPRESION> menorIgual <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \"<=\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '<=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 49:

            produccion.push(`<EXPRESION> ::= <EXPRESION> mayorIgual <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \">=\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '>=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 50:

            produccion.push(`<EXPRESION> ::= <EXPRESION> igual <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \"=\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 51:

            produccion.push(`<EXPRESION> ::= <EXPRESION> distinto <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + "" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '!=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 52:

            produccion.push(`<EXPRESION> ::= <EXPRESION> or <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \"or\" + EXPRESION.Val');
            this.$ = new Logica.default($$[$0-2], 'or', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 53:

            produccion.push(`<EXPRESION> ::= <EXPRESION> and <EXPRESION>`);
            accion.push('EXPRESION.Val = EXPRESION.Val + \"and\" + EXPRESION.Val');
            this.$ = new Logica.default($$[$0-2], 'and', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 54:

            produccion.push(`<EXPRESION> ::= entero`);
            accion.push('EXPRESION.Val = \"entero\"');
            this.$ = new Primitivo.default(Number(yytext), _$[$0].first_line, _$[$0].first_column)
        
break;
case 55:

            produccion.push(`<EXPRESION> ::= decimal`);
            accion.push('EXPRESION.Val = \"decimal\"');
            this.$ = new Primitivo.default(Number(yytext), _$[$0].first_line, _$[$0].first_column)
        
break;
case 56:

            produccion.push(`<EXPRESION> ::= arroba <ATRIBUTO>`);
            accion.push('EXPRESION.Val = \"@\" + ATRIBUTO.Val');
            this.$ = new Primitivo.default(`this._${$$[$0]}`, _$[$0-1].first_line, _$[$0-1].first_column)
        
break;
case 57:

            produccion.push(`<EXPRESION> ::= identificador`);
            accion.push('EXPRESION.Val = \"identificador\"');
            this.$ = new Primitivo.default($$[$0], _$[$0].first_line, _$[$0].first_column)
        
break;
case 58:

            produccion.push(`<EXPRESION> ::= position()`);
            accion.push('EXPRESION.Val = \"position()\"');
            this.$ = new Primitivo.default("position()", _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 59:

            produccion.push(`<EXPRESION> ::= last()`);
            accion.push('EXPRESION.Val = \"last()\"');
            this.$ = new Primitivo.default("last()", _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 60:

            produccion.push(`<EXPRESION> ::= texto`);
            accion.push('EXPRESION.Val = \"texto\"');
            this.$ = new Primitivo.default($$[$0], _$[$0].first_line, _$[$0].first_column)
        
break;
case 61:

            produccion.push(`<EXPRESION> ::= ( <EXPRESION> )`);
            accion.push('EXPRESION.Val = EXPRESION1.Val');
            this.$ = new Primitivo.default($$[$0-2], _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 62:

            produccion.push(`<ATRIBUTO> ::= asterisco`);
            accion.push('ATRIBUTO.Val = \"*\"'); 
            this.$ = $$[$0]; 
        
break;
case 63:

            produccion.push(`<ATRIBUTO> ::= identificador`);
            accion.push('ATRIBUTO.Val = identificador');  
            this.$ = $$[$0] 
break;
case 64:

            produccion.push(`<ATRIBUTO> ::= node`);
            accion.push('ATRIBUTO.Val = \"node()\"'); 
            this.$ = "node()"
        
break;
}
},
table: [{3:1,4:2,7:3,8:$V0,12:$V1,14:$V2,16:$V3,17:$V4},{1:[3]},{5:[1,9],6:[1,10]},o($V5,[2,3]),{2:$V6,9:11,14:$V7},o($V8,$V9,{13:14,38:$Va}),{8:$Vb,10:19,12:$Vc,14:[1,17],15:16,16:$Vd,17:$Ve,20:$Vf,22:24,23:$Vg,26:$Vh,27:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr},o($V8,$V9,{13:37,38:$Va}),{18:[1,38]},{1:[2,1]},{7:39,8:$V0,12:$V1,14:$V2,16:$V3,17:$V4},{10:40,12:$Vc,16:$Vd,17:$Ve,20:$Vf,22:24,23:$Vg,26:$Vh,27:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr},o($Vs,[2,10],{14:[1,41]}),{14:[1,42]},o($V5,$Vt,{11:43,9:44,2:$V6,14:$V7}),{12:$Vu,18:$Vv,20:$Vw,39:45,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},o($V5,$Vt,{9:44,11:54,2:$V6,14:$V7}),{8:$Vb,10:19,12:$Vc,15:55,16:$Vd,17:$Ve,20:$Vf,22:24,23:$Vg,26:$Vh,27:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr},o($V8,[2,20],{8:[1,56]}),o($V8,[2,22]),o($V8,$V9,{13:57,38:$Va}),o($V8,$V9,{13:58,38:$Va}),{18:[1,59]},{12:$VC,16:$VD,17:$VE,21:60},o($V8,[2,19]),{24:[1,64]},{24:[1,65]},{24:[1,66]},{24:[1,67]},{24:[1,68]},{24:[1,69]},{24:[1,70]},{24:[1,71]},{24:[1,72]},{24:[1,73]},{24:[1,74]},{24:[1,75]},o($V5,$Vt,{9:44,11:76,2:$V6,14:$V7}),{19:[1,77]},o($V5,[2,2]),o($V5,$Vt,{9:44,11:78,2:$V6,14:$V7}),o($Vs,[2,11]),o($Vs,[2,12]),o($V5,[2,5]),{8:$Vb,10:19,12:$Vc,15:79,16:$Vd,17:$Ve,20:$Vf,22:24,23:$Vg,26:$Vh,27:$Vi,28:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr},{16:$VF,40:[1,80],41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,51:$VQ,52:$VR},o($VS,[2,54]),o($VS,[2,55]),{12:$VC,16:$VD,17:$VE,21:94},o($VS,[2,57]),{18:[1,95]},{18:[1,96]},o($VS,[2,60]),{12:$Vu,18:$Vv,20:$Vw,39:97,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},o($V5,[2,6]),o($V5,$Vt,{9:44,11:98,2:$V6,14:$V7}),o($V8,[2,21]),o($V8,[2,15]),o($V8,[2,16]),{19:[1,99]},o($V8,[2,18]),o($VT,[2,62]),o($VT,[2,63]),{18:[1,100]},{24:[1,101]},{24:[1,102]},{24:[1,103]},{24:[1,104]},{24:[1,105]},{24:[1,106]},{24:[1,107]},{24:[1,108]},{24:[1,109]},{24:[1,110]},{24:[1,111]},{24:[1,112]},o($V5,[2,8]),o($V8,$V9,{13:113,38:$Va}),o($V5,[2,4]),o($V5,$Vt,{9:44,11:114,2:$V6,14:$V7}),o($V8,[2,39]),{12:$Vu,18:$Vv,20:$Vw,39:115,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:116,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:117,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:118,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:119,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:120,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:121,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:122,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:123,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:124,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:125,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:126,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},{12:$Vu,18:$Vv,20:$Vw,39:127,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB},o($VS,[2,56]),{19:[1,128]},{19:[1,129]},{16:$VF,19:[1,130],41:$VG,42:$VH,43:$VI,44:$VJ,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,51:$VQ,52:$VR},o($V5,[2,7]),o($V8,$V9,{13:131,38:$Va}),{58:[1,132]},{12:$VU,16:$VV,17:$VW,25:133,37:$VX},{12:$VU,16:$VV,17:$VW,25:138,37:$VX},{12:$VU,16:$VV,17:$VW,25:139,37:$VX},{12:$VU,16:$VV,17:$VW,25:140,37:$VX},{12:$VU,16:$VV,17:$VW,25:141,37:$VX},{12:$VU,16:$VV,17:$VW,25:142,37:$VX},{12:$VU,16:$VV,17:$VW,25:143,37:$VX},{12:$VU,16:$VV,17:$VW,25:144,37:$VX},{12:$VU,16:$VV,17:$VW,25:145,37:$VX},{12:$VU,16:$VV,17:$VW,25:146,37:$VX},{12:$VU,16:$VV,17:$VW,25:147,37:$VX},{12:$VU,16:$VV,17:$VW,25:148,37:$VX},o($V5,$Vt,{9:44,11:149,2:$V6,14:$V7}),o($V5,[2,13]),o($VS,[2,41]),o($VS,[2,42]),o($VY,[2,43],{41:$VG,42:$VH}),o($VY,[2,44],{41:$VG,42:$VH}),o([19,40,44],[2,45],{16:$VF,41:$VG,42:$VH,43:$VI,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,51:$VQ,52:$VR}),o($VZ,[2,46],{16:$VF,41:$VG,42:$VH,43:$VI}),o($VZ,[2,47],{16:$VF,41:$VG,42:$VH,43:$VI}),o($VZ,[2,48],{16:$VF,41:$VG,42:$VH,43:$VI}),o($VZ,[2,49],{16:$VF,41:$VG,42:$VH,43:$VI}),o($V_,[2,50],{16:$VF,41:$VG,42:$VH,43:$VI,45:$VK,46:$VL,47:$VM,48:$VN}),o($V_,[2,51],{16:$VF,41:$VG,42:$VH,43:$VI,45:$VK,46:$VL,47:$VM,48:$VN}),o([19,40,44,51],[2,52],{16:$VF,41:$VG,42:$VH,43:$VI,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP,52:$VR}),o([19,40,44,51,52],[2,53],{16:$VF,41:$VG,42:$VH,43:$VI,45:$VK,46:$VL,47:$VM,48:$VN,49:$VO,50:$VP}),o($VS,[2,58]),o($VS,[2,59]),o($VS,[2,61]),o($V8,[2,17]),o($VT,[2,64]),o($V8,[2,23]),o($V8,$V9,{13:150,38:$Va}),{18:[1,151]},o($V8,$V9,{13:152,38:$Va}),{18:[1,153]},o($V8,[2,24]),o($V8,[2,25]),o($V8,[2,26]),o($V8,[2,27]),o($V8,[2,28]),o($V8,[2,29]),o($V8,[2,30]),o($V8,[2,31]),o($V8,[2,32]),o($V8,[2,33]),o($V8,[2,34]),o($V5,[2,9]),o($V8,[2,35]),{19:[1,154]},o($V8,[2,37]),{19:[1,155]},o($V8,$V9,{13:156,38:$Va}),o($V8,[2,38]),o($V8,[2,36])],
defaultActions: {9:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const { SalidaGramatica } = __webpack_require__(/*! ./AST/SalidaGramatica */ "./src/analizadores/AST/SalidaGramatica.ts");
    const { Nodo } = __webpack_require__(/*! ./Expresiones/Nodo */ "./src/analizadores/Expresiones/Nodo.ts");
    const Primitivo = __webpack_require__(/*! ./Expresiones/Primitivo */ "./src/analizadores/Expresiones/Primitivo.ts");
    const Aritmetica = __webpack_require__(/*! ./Operaciones/Aritmeticas */ "./src/analizadores/Operaciones/Aritmeticas.ts")
    const Relacional = __webpack_require__(/*! ./Operaciones/Relacional */ "./src/analizadores/Operaciones/Relacional.ts");
    const Logica = __webpack_require__(/*! ./Operaciones/Logica */ "./src/analizadores/Operaciones/Logica.ts"); 
    const { Predicate } = __webpack_require__(/*! ./Expresiones/Predicate */ "./src/analizadores/Expresiones/Predicate.ts");
    //const { Atributo } = require('./Expresiones/Atributo');
    const { tError } = __webpack_require__(/*! ./Expresiones/tError */ "./src/analizadores/Expresiones/tError.ts");

    var listaErrores = [];
    var produccion = [];
    var accion = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "tk_decimal";
break;
case 1:return "tk_entero";
break;
case 2:return "tk_node";
break;
case 3:return "tk_child";
break;
case 4:return "tk_descendant";
break;
case 5:return "tk_descendatOr"
break;
case 6:return "tk_ancestor";
break;
case 7:return "tk_ancestorOr";
break;
case 8:return "tk_attribute";
break;
case 9:return "tk_following";
break;
case 10:return "tk_followingSi"
break;
case 11:return "tk_parent"
break;
case 12:return "tk_preceding"
break;
case 13:return "tk_precedingSi"
break;
case 14:return "tk_self"
break;
case 15:return "tk_text"
break;
case 16:return "tk_position"
break;
case 17:return "tk_last"
break;
case 18:return "tk_div"
break;
case 19:return "tk_and"
break;
case 20:return "tk_or"
break;
case 21:return "tk_mod"
break;
case 22:return "tk_barra"
break;
case 23:return "tk_punto"
break;
case 24:return "tk_diagonal"
break;
case 25:return "tk_asterisco"
break;
case 26:return "tk_dosPuntos"
break;
case 27:return "tk_mas"
break;
case 28:return "tk_menos"
break;
case 29:return "tk_menorIgual"
break;
case 30:return "tk_mayorIgual"
break;
case 31:return "tk_menor"
break;
case 32:return "tk_mayor"
break;
case 33:return "tk_distinto"
break;
case 34:return "tk_igual"
break;
case 35:return "tk_llaveA"
break;
case 36:return "tk_llaveC"
break;
case 37:return "tk_arroba"
break;
case 38:return "tk_parA"
break;
case 39:return "tk_parC"
break;
case 40:return "tk_stringTexto";
break;
case 41:return "tk_stringTexto";
break;
case 42:return "tk_stringTexto";
break;
case 43:return "tk_stringTexto";
break;
case 44:return "tk_identificador";
break;
case 45:return "EOF";
break;
case 46:
break;
case 47:         
    listaErrores.push(new tError('Léxico',`Simbolo inesperado: ${yy_.yytext}`,yy_.yylloc.first_line,yy_.yylloc.first_column ));

break;
}
},
rules: [/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:node\b)/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:descendant-or-self\b)/,/^(?:ancestor\b)/,/^(?:ancestor-or-self\b)/,/^(?:attribute\b)/,/^(?:following\b)/,/^(?:following-sibling\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:preceding-sibling\b)/,/^(?:self\b)/,/^(?:text\b)/,/^(?:position\b)/,/^(?:last\b)/,/^(?:div\b)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:mod\b)/,/^(?:\|)/,/^(?:\.)/,/^(?:\/)/,/^(?:\*)/,/^(?::)/,/^(?:\+)/,/^(?:-)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?:=)/,/^(?:\[)/,/^(?:\])/,/^(?:@)/,/^(?:\()/,/^(?:\))/,/^(?:"[^\"]*")/,/^(?:“[^\“]*“)/,/^(?:'[^\']*')/,/^(?:‘[^\‘]*‘)/,/^(?:[a-zA-Z]([a-zA-Z0-9_])*)/,/^(?:$)/,/^(?:[ \t\r\n\f])/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = xpathAsc;
exports.Parser = xpathAsc.Parser;
exports.parse = function () { return xpathAsc.parse.apply(xpathAsc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ 3).readFileSync(__webpack_require__(/*! path */ 4).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/analizadores/xpathDesc.js":
/*!***************************************!*\
  !*** ./src/analizadores/xpathDesc.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var xpathDesc = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,6],$V3=[1,7],$V4=[1,8],$V5=[2,4],$V6=[1,11],$V7=[1,13],$V8=[5,8,15],$V9=[2,40],$Va=[1,15],$Vb=[1,18],$Vc=[1,20],$Vd=[1,21],$Ve=[1,22],$Vf=[1,23],$Vg=[1,25],$Vh=[1,26],$Vi=[1,27],$Vj=[1,28],$Vk=[1,29],$Vl=[1,30],$Vm=[1,31],$Vn=[1,32],$Vo=[1,33],$Vp=[1,34],$Vq=[1,35],$Vr=[1,36],$Vs=[9,13,17,18,21,24,27,28,29,30,31,32,33,34,35,36,37],$Vt=[5,8],$Vu=[2,14],$Vv=[2,51],$Vw=[1,50],$Vx=[1,54],$Vy=[1,49],$Vz=[1,47],$VA=[1,48],$VB=[1,51],$VC=[1,52],$VD=[1,53],$VE=[1,63],$VF=[1,62],$VG=[1,64],$VH=[1,85],$VI=[1,83],$VJ=[1,84],$VK=[1,86],$VL=[1,87],$VM=[1,88],$VN=[1,89],$VO=[1,90],$VP=[1,91],$VQ=[1,92],$VR=[1,93],$VS=[1,94],$VT=[1,95],$VU=[17,20,41,49,50,51,52,53,54,55,56,57,58,59,60],$VV=[5,8,15,17,20,41,49,50,51,52,53,54,55,56,57,58,59,60],$VW=[1,138],$VX=[1,136],$VY=[1,137],$VZ=[1,139],$V_=[17,20,41,51,52,53,54,55,56,57,58,59,60],$V$=[20,41,52,53,54,55,56,57,58,59,60],$V01=[20,41,52,57,58,59,60];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIOPURO":3,"INICIO":4,"EOF":5,"INICIALES":6,"INICIOP":7,"tk_barra":8,"tk_punto":9,"DIAGONALES":10,"DERIVADOSLIMITADO":11,"DERIVACIONDIAGONAL":12,"tk_identificador":13,"PREDICATE":14,"tk_diagonal":15,"DERIVADOS":16,"tk_asterisco":17,"tk_node":18,"tk_parA":19,"tk_parC":20,"tk_arroba":21,"ATRIBUTO":22,"AXES":23,"tk_child":24,"tk_dosPuntos":25,"NODETEST":26,"tk_descendant":27,"tk_descendatOr":28,"tk_ancestor":29,"tk_ancestorOr":30,"tk_attribute":31,"tk_following":32,"tk_followingSi":33,"tk_parent":34,"tk_preceding":35,"tk_precedingSi":36,"tk_self":37,"tk_text":38,"tk_llaveA":39,"EXPRESION":40,"tk_llaveC":41,"OPERAR":42,"PRIMITIVO":43,"tk_entero":44,"tk_decimal":45,"tk_position":46,"tk_last":47,"tk_stringTexto":48,"tk_mas":49,"tk_menos":50,"tk_div":51,"tk_mod":52,"tk_menor":53,"tk_mayor":54,"tk_menorIgual":55,"tk_mayorIgual":56,"tk_igual":57,"tk_distinto":58,"tk_or":59,"tk_and":60,"tk_ParC":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"tk_barra",9:"tk_punto",13:"tk_identificador",15:"tk_diagonal",17:"tk_asterisco",18:"tk_node",19:"tk_parA",20:"tk_parC",21:"tk_arroba",24:"tk_child",25:"tk_dosPuntos",27:"tk_descendant",28:"tk_descendatOr",29:"tk_ancestor",30:"tk_ancestorOr",31:"tk_attribute",32:"tk_following",33:"tk_followingSi",34:"tk_parent",35:"tk_preceding",36:"tk_precedingSi",37:"tk_self",38:"tk_text",39:"tk_llaveA",41:"tk_llaveC",44:"tk_entero",45:"tk_decimal",46:"tk_position",47:"tk_last",48:"tk_stringTexto",49:"tk_mas",50:"tk_menos",51:"tk_div",52:"tk_mod",53:"tk_menor",54:"tk_mayor",55:"tk_menorIgual",56:"tk_mayorIgual",57:"tk_igual",58:"tk_distinto",59:"tk_or",60:"tk_and",61:"tk_ParC"},
productions_: [0,[3,2],[4,2],[7,3],[7,0],[6,4],[6,3],[6,3],[6,4],[6,3],[6,5],[10,1],[10,2],[12,3],[12,0],[11,2],[11,2],[11,4],[11,2],[11,1],[16,1],[16,2],[16,1],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[23,4],[26,2],[26,4],[26,2],[26,3],[14,3],[14,0],[40,1],[40,1],[43,1],[43,1],[43,2],[43,1],[43,3],[43,3],[43,1],[43,3],[43,0],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[42,3],[22,1],[22,1],[22,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

            produccion.push('<INICIOPURO> ::= <INICIO> EOF');
            accion.push('INICIOPURO.Val = INICIO.val //fin del documento');
            return new SalidaGramatica($$[$0-1], produccion, accion,listaErrores);
        
break;
case 2:

            produccion.push('<INICIO> ::= <INICIALES>');
            accion.push('INICIO.Val = INICIALES.Val');
            this.$ = [$$[$0-1]];
            this.$.push(...$$[$0])
        
break;
case 3:

            produccion.push('<INICIOP> ::= | <INICIALES> <INICIOP>');
            accion.push('INICIOP.val.push(INICIALES)');
            this.$ = [$$[$0-1]]
            this.$.push(...$$[$0]); 
        
break;
case 4:

            produccion.push('<INICIOP> ::= epsilon');
            accion.push('INICIOP.val = []');
            this.$ = []; 
        
break;
case 5:

            produccion.push(`<INICIALES> ::= punto <DIAGONALES> <DERIVADOSLIMITADO> <DERIVAIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo("", ".", null, [new Nodo($$[$0-2], $$[$0-1].val, $$[$0-1].pre, [...$$[$0]],_$[$0-3].first_line, _$[$0-3].first_column)], _$[$0-3].first_line, _$[$0-3].first_column)
        
break;
case 6:

            produccion.push(`<INICIALES> ::= identificador <PREDICATE> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo("", $$[$0-2], $$[$0-1], [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 7:

            produccion.push(`<INICIALES> ::= / <DERIVADOS> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo($$[$0-2], $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 8:

            produccion.push('<INICIALES> ::= // <DERIVADOS> <DERIVACIONDIAGONAL>');
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo("//", $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-3].first_line, _$[$0-3].first_column)
        
break;
case 9:

            produccion.push(`<INICIALES> ::= asterisco <PREDICATE> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo("", $$[$0-2], $$[$0-1], [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 10:

            produccion.push(`<INICIALES> ::= node() <PREDICATE> <DERIVACIONDIAGONAL>`);
            accion.push('INICIALES.Val = []; INICIALES.Val.push(new Nodo(tipo, id, predicado, fila, columna)); INICIALES.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Nodo("", "node()", $$[$0-1], [...$$[$0-2]], _$[$0-4].first_line, _$[$0-4].first_column)
        
break;
case 11:

            produccion.push('<DIAGONALES> ::= /');
            accion.push('DIAGONALES.Val = \"/\"'); 
            this.$ = $$[$0] 
        
break;
case 12:

            produccion.push(`<DIAGONALES> ::= //`);
            accion.push('DIAGONALES.Val = \"//\"'); 
            this.$ = "//" 
        
break;
case 13:

            produccion.push(`<DERIVACIONDIAGONAL> ::= <DIAGONALES> <DERIVADOS> <DERIVACIONDIAGONAL>`);
            accion.push('DERIVACIONDIAGONAL.Val = []; DERIVACIONDIAGONAL.Val.push(new Nodo(tipo, id, predicado, fila, columna)); DERIVACIONDIAGONAL.push(DERIVACIONDIAGONAL)'); 
            this.$ = new Array();
            this.$.push(new Nodo($$[$0-2], $$[$0-1].val, $$[$0-1].pre, [...$$[$0]], _$[$0-2].first_line, _$[$0-2].first_column)) 
        
break;
case 14:

            produccion.push(`<DERIVACIONDIAGONAL> ::= epsilon`);
            accion.push('DERIVACIONDIAGONAL.Val = [/*Vacio*/]');
            this.$ = [];
        
break;
case 15:

            produccion.push(`<DERIVADOSLIMIADO> ::= identificador <PREDICATE>`);
            accion.push('DERIVADOSLIMITADO.Val = identificador + PREDICATE.Val'); 
            this.$ = {val: $$[$0-1], pre: $$[$0]};
        
break;
case 16:

            produccion.push(`<DERIVADOSLIMIADO> ::= asterisco <PREDICATE>`);
            accion.push('DERIVADOSLIMITADO.Val = \"*\" + PREDICATE.Val'); 
            this.$ = {val: $$[$0-1], pre: $$[$0]};
        
break;
case 17:

            produccion.push(`<DERIVADOSLIMIADO> ::= node() <PREDICATE>`);
            accion.push('DERIVADOSLIMITADO.Val = \"@\" + ATRIBUTO.Val'); 
            this.$ = {val: "node()", pre: $$[$0]}
        
break;
case 18:

            produccion.push(`<DERIVADOSLIMIADO> ::= arroba <ATRIBUTO>`);
            accion.push('DERIVADOSLIMITADO.Val = \"@\" + ATRIBUTO.Val'); 
            this.$ = {val: $$[$0-1] + "" + $$[$0], pre: null}; 
        
break;
case 19:

            produccion.push(`<DERIVADOSLIMITADO> ::= <AXES>`);
            accion.push('DERIVADOSLIMITADO.Val = AXES.Val'); 
            this.$ = {val: $$[$0], pre: null}
        
break;
case 20:
 
            produccion.push(`<DERIVADOS> ::= punto`);
            accion.push("DERIVADOS.Val = \".\" ");
            this.$ = {val: $$[$0], pre: null}; 
        
break;
case 21:

            produccion.push(`<DERIVADOS> ::= doblePunto`);
            accion.push('DERIVADOS.Val = \"..\"');
            this.$ = {val: "..", pre: null}; 
        
break;
case 22:
 
            produccion.push(`<DERIVADOS> ::= <DERIVADOSLIMITADO>`);
            accion.push('DERIVADOS.Val = DERIVADOSLIMITADO.Val'); 
            this.$ = $$[$0]; 
        
break;
case 39:

            produccion.push(`<PREDICATE> ::= llaveA <EXPRESION> llaveC`);
            accion.push('PREDICATE.Val = EXPRESION.Val');
            this.$ = new Predicate($$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 40:

            produccion.push(`<PREDICATE> ::= epsilon`);
            accion.push('PREDICATE.Val = /*vacio*/');
            this.$ = null; 
        
break;
case 41:
 
            produccion.push("<OPERAR> ::= <EXPRESION>")
            accion.push("OPERAR.Val = EXPRESION.Val")
            this.$ = $$[$0];
        
break;
case 42:
 
            produccion.push("<OPERAR> ::= <PRIMITIVO>")
            accion.push("OPERAR.Val = PRIMITIVO.Val")
            this.$ = $$[$0]
        
break;
case 43:

            produccion.push(`<PRIMITIVO> ::= entero`);
            accion.push('PRIMITIVO.Val = \"entero\"');
            this.$ = new Primitivo.default(Number(yytext), _$[$0].first_line, _$[$0].first_column)
        
break;
case 44:

            produccion.push(`<PRIMITIVO> ::= decimal`);
            accion.push('PRIMITIVO.Val = \"decimal\"');
            this.$ = new Primitivo.default(Number(yytext), _$[$0].first_line, _$[$0].first_column)
        
break;
case 45:

            produccion.push(`<PRIMITIVO> ::= arroba <ATRIBUTO>`);
            accion.push('PRIMITIVO.Val = \"@\" + ATRIBUTO.Val');
            this.$ = new Primitivo.default(`this._${$$[$0]}`, _$[$0-1].first_line, _$[$0-1].first_column)
        
break;
case 46:

            produccion.push(`<PRIMITIVO> ::= identificador`);
            accion.push('PPRIMITIVO.Val = \"identificador\"');
            this.$ = new Primitivo.default($$[$0], _$[$0].first_line, _$[$0].first_column)
        
break;
case 47:

            produccion.push(`<PRIMITIVO> ::= position()`);
            accion.push('PRIMITIVO.Val = \"position()\"');
            this.$ = new Primitivo.default("position()", _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 48:

            produccion.push(`<EXPRESION> ::= last()`);
            accion.push('EXPRESION.Val = \"last()\"');
            this.$ = new Primitivo.default("last()", _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 49:

            produccion.push(`<PRIMITIVO> ::= texto`);
            accion.push('PRIMITIVO.Val = \"texto\"');
            this.$ = new Primitivo.default($$[$0], _$[$0].first_line, _$[$0].first_column)
        
break;
case 50:

            produccion.push(`<EXPRESION> ::= ( <EXPRESION> )`);
            accion.push('EXPRESION.Val = EXPRESION1.Val');
            this.$ = new Primitivo.default($$[$0-2], _$[$0-2].first_line, _$[$0-2].first_column)
        
break;
case 52:

            produccion.push(`<OPERAR> ::= <EXPRESION> mas <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '+', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 53:

            produccion.push(`<OPERAR> ::= <EXPRESION> menos <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val - EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '-', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 54:

            produccion.push(`<OPERAR> ::= <EXPRESION> asterisco <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val * EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '*', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 55:

            produccion.push(`<OPERAR> ::= <EXPRESION> div <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val / EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '/', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 56:

            produccion.push(`<OPERAR> ::= <EXPRESION> mod <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val % EXPRESION.Val');
            this.$ = new Aritmetica.default($$[$0-2], '%', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 57:

            produccion.push(`<OPERAR> ::= <EXPRESION> menor <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + \"<\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '<', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 58:

            produccion.push(`<OPERAR> ::= <EXPRESION> mayor <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + \">\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '>', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 59:

            produccion.push(`<OPERAR> ::= <EXPRESION> menorIgual <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + \"<=\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '<=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 60:

            produccion.push(`<OPERAR> ::= <EXPRESION> mayorIgual <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + \">=\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '>=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 61:

            produccion.push(`<OPERAR> ::= <EXPRESION> igual <EXPRESION>`);
            accion.push('OPERA.Val = EXPRESION.Val + \"=\" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 62:

            produccion.push(`<OPERAR> ::= <EXPRESION> distinto <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + "" + EXPRESION.Val');
            this.$ = new Relacional.default($$[$0-2], '!=', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 63:

            produccion.push(`<OPERAR> ::= <EXPRESION> or <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + \"or\" + EXPRESION.Val');
            this.$ = new Logica.default($$[$0-2], 'or', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 64:

            produccion.push(`<OPERAR> ::= <EXPRESION> and <EXPRESION>`);
            accion.push('OPERAR.Val = EXPRESION.Val + \"and\" + EXPRESION.Val');
            this.$ = new Logica.default($$[$0-2], 'and', $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
        
break;
case 65:

            produccion.push(`<ATRIBUTO> ::= asterisco`);
            accion.push('ATRIBUTO.Val = \"*\"'); 
            this.$ = $$[$0]; 
        
break;
case 66:

            produccion.push(`<ATRIBUTO> ::= identificador`);
            accion.push('ATRIBUTO.Val = identificador');  
            this.$ = $$[$0] 
break;
case 67:

            produccion.push(`<ATRIBUTO> ::= node`);
            accion.push('ATRIBUTO.Val = \"node()\"'); 
            this.$ = "node()"
        
break;
}
},
table: [{3:1,4:2,6:3,9:$V0,13:$V1,15:$V2,17:$V3,18:$V4},{1:[3]},{5:[1,9]},{5:$V5,7:10,8:$V6},{10:12,15:$V7},o($V8,$V9,{14:14,39:$Va}),{9:$Vb,11:19,13:$Vc,15:[1,17],16:16,17:$Vd,18:$Ve,21:$Vf,23:24,24:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr},o($V8,$V9,{14:37,39:$Va}),{19:[1,38]},{1:[2,1]},{5:[2,2]},{6:39,9:$V0,13:$V1,15:$V2,17:$V3,18:$V4},{11:40,13:$Vc,17:$Vd,18:$Ve,21:$Vf,23:24,24:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr},o($Vs,[2,11],{15:[1,41]}),o($Vt,$Vu,{12:42,10:43,15:$V7}),o([17,41,49,50,51,52,53,54,55,56,57,58,59,60],$Vv,{40:44,42:45,43:46,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($Vt,$Vu,{10:43,12:55,15:$V7}),{9:$Vb,11:19,13:$Vc,16:56,17:$Vd,18:$Ve,21:$Vf,23:24,24:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr},o($V8,[2,20],{9:[1,57]}),o($V8,[2,22]),o($V8,$V9,{14:58,39:$Va}),o($V8,$V9,{14:59,39:$Va}),{19:[1,60]},{13:$VE,17:$VF,18:$VG,22:61},o($V8,[2,19]),{25:[1,65]},{25:[1,66]},{25:[1,67]},{25:[1,68]},{25:[1,69]},{25:[1,70]},{25:[1,71]},{25:[1,72]},{25:[1,73]},{25:[1,74]},{25:[1,75]},{25:[1,76]},o($Vt,$Vu,{10:43,12:77,15:$V7}),{20:[1,78]},{5:$V5,7:79,8:$V6},o($Vt,$Vu,{10:43,12:80,15:$V7}),o($Vs,[2,12]),o($Vt,[2,6]),{9:$Vb,11:19,13:$Vc,16:81,17:$Vd,18:$Ve,21:$Vf,23:24,24:$Vg,27:$Vh,28:$Vi,29:$Vj,30:$Vk,31:$Vl,32:$Vm,33:$Vn,34:$Vo,35:$Vp,36:$Vq,37:$Vr},{17:$VH,41:[1,82],49:$VI,50:$VJ,51:$VK,52:$VL,53:$VM,54:$VN,55:$VO,56:$VP,57:$VQ,58:$VR,59:$VS,60:$VT},o($VU,[2,41]),o($VU,[2,42]),o($VU,[2,43]),o($VU,[2,44]),{13:$VE,17:$VF,18:$VG,22:96},o($VU,[2,46]),{19:[1,97]},{19:[1,98]},o($VU,[2,49]),o([17,20,49,50,51,52,53,54,55,56,57,58,59,60],$Vv,{42:45,43:46,40:99,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($Vt,[2,7]),o($Vt,$Vu,{10:43,12:100,15:$V7}),o($V8,[2,21]),o($V8,[2,15]),o($V8,[2,16]),{20:[1,101]},o($V8,[2,18]),o($VV,[2,65]),o($VV,[2,66]),{19:[1,102]},{25:[1,103]},{25:[1,104]},{25:[1,105]},{25:[1,106]},{25:[1,107]},{25:[1,108]},{25:[1,109]},{25:[1,110]},{25:[1,111]},{25:[1,112]},{25:[1,113]},{25:[1,114]},o($Vt,[2,9]),o($V8,$V9,{14:115,39:$Va}),{5:[2,3]},o($Vt,[2,5]),o($Vt,$Vu,{10:43,12:116,15:$V7}),o($V8,[2,39]),o($VU,$Vv,{42:45,43:46,40:117,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:118,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:119,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:120,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:121,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:122,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:123,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:124,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:125,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:126,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:127,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:128,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,$Vv,{42:45,43:46,40:129,13:$Vw,19:$Vx,21:$Vy,44:$Vz,45:$VA,46:$VB,47:$VC,48:$VD}),o($VU,[2,45]),{20:[1,130]},{20:[1,131]},{17:$VH,20:[1,132],49:$VI,50:$VJ,51:$VK,52:$VL,53:$VM,54:$VN,55:$VO,56:$VP,57:$VQ,58:$VR,59:$VS,60:$VT},o($Vt,[2,8]),o($V8,$V9,{14:133,39:$Va}),{61:[1,134]},{13:$VW,17:$VX,18:$VY,26:135,38:$VZ},{13:$VW,17:$VX,18:$VY,26:140,38:$VZ},{13:$VW,17:$VX,18:$VY,26:141,38:$VZ},{13:$VW,17:$VX,18:$VY,26:142,38:$VZ},{13:$VW,17:$VX,18:$VY,26:143,38:$VZ},{13:$VW,17:$VX,18:$VY,26:144,38:$VZ},{13:$VW,17:$VX,18:$VY,26:145,38:$VZ},{13:$VW,17:$VX,18:$VY,26:146,38:$VZ},{13:$VW,17:$VX,18:$VY,26:147,38:$VZ},{13:$VW,17:$VX,18:$VY,26:148,38:$VZ},{13:$VW,17:$VX,18:$VY,26:149,38:$VZ},{13:$VW,17:$VX,18:$VY,26:150,38:$VZ},o($Vt,$Vu,{10:43,12:151,15:$V7}),o($Vt,[2,13]),o($VU,[2,52]),o($VU,[2,53]),o($V_,[2,54],{49:$VI,50:$VJ}),o($V_,[2,55],{49:$VI,50:$VJ}),o([20,41,52],[2,56],{17:$VH,49:$VI,50:$VJ,51:$VK,53:$VM,54:$VN,55:$VO,56:$VP,57:$VQ,58:$VR,59:$VS,60:$VT}),o($V$,[2,57],{17:$VH,49:$VI,50:$VJ,51:$VK}),o($V$,[2,58],{17:$VH,49:$VI,50:$VJ,51:$VK}),o($V$,[2,59],{17:$VH,49:$VI,50:$VJ,51:$VK}),o($V$,[2,60],{17:$VH,49:$VI,50:$VJ,51:$VK}),o($V01,[2,61],{17:$VH,49:$VI,50:$VJ,51:$VK,53:$VM,54:$VN,55:$VO,56:$VP}),o($V01,[2,62],{17:$VH,49:$VI,50:$VJ,51:$VK,53:$VM,54:$VN,55:$VO,56:$VP}),o([20,41,52,59],[2,63],{17:$VH,49:$VI,50:$VJ,51:$VK,53:$VM,54:$VN,55:$VO,56:$VP,57:$VQ,58:$VR,60:$VT}),o([20,41,52,59,60],[2,64],{17:$VH,49:$VI,50:$VJ,51:$VK,53:$VM,54:$VN,55:$VO,56:$VP,57:$VQ,58:$VR}),o($VU,[2,47]),o($VU,[2,48]),o($VU,[2,50]),o($V8,[2,17]),o($VV,[2,67]),o($V8,[2,23]),o($V8,$V9,{14:152,39:$Va}),{19:[1,153]},o($V8,$V9,{14:154,39:$Va}),{19:[1,155]},o($V8,[2,24]),o($V8,[2,25]),o($V8,[2,26]),o($V8,[2,27]),o($V8,[2,28]),o($V8,[2,29]),o($V8,[2,30]),o($V8,[2,31]),o($V8,[2,32]),o($V8,[2,33]),o($V8,[2,34]),o($Vt,[2,10]),o($V8,[2,35]),{20:[1,156]},o($V8,[2,37]),{20:[1,157]},o($V8,$V9,{14:158,39:$Va}),o($V8,[2,38]),o($V8,[2,36])],
defaultActions: {9:[2,1],10:[2,2],79:[2,3]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

    const { SalidaGramatica } = __webpack_require__(/*! ./AST/SalidaGramatica */ "./src/analizadores/AST/SalidaGramatica.ts");
    const { Nodo } = __webpack_require__(/*! ./Expresiones/Nodo */ "./src/analizadores/Expresiones/Nodo.ts");
    const Primitivo = __webpack_require__(/*! ./Expresiones/Primitivo */ "./src/analizadores/Expresiones/Primitivo.ts");
    const Aritmetica = __webpack_require__(/*! ./Operaciones/Aritmeticas */ "./src/analizadores/Operaciones/Aritmeticas.ts")
    const Relacional = __webpack_require__(/*! ./Operaciones/Relacional */ "./src/analizadores/Operaciones/Relacional.ts");
    const Logica = __webpack_require__(/*! ./Operaciones/Logica */ "./src/analizadores/Operaciones/Logica.ts"); 
    const { Predicate } = __webpack_require__(/*! ./Expresiones/Predicate */ "./src/analizadores/Expresiones/Predicate.ts");
    //const { Atributo } = require('./Expresiones/Atributo');
    const { tError } = __webpack_require__(/*! ./Expresiones/tError */ "./src/analizadores/Expresiones/tError.ts");

    var listaErrores = [];
    var produccion = [];
    var accion = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return "tk_decimal";
break;
case 1:return "tk_entero";
break;
case 2:return "tk_node";
break;
case 3:return "tk_child";
break;
case 4:return "tk_descendant";
break;
case 5:return "tk_descendatOr"
break;
case 6:return "tk_ancestor";
break;
case 7:return "tk_ancestorOr";
break;
case 8:return "tk_attribute";
break;
case 9:return "tk_following";
break;
case 10:return "tk_followingSi"
break;
case 11:return "tk_parent"
break;
case 12:return "tk_preceding"
break;
case 13:return "tk_precedingSi"
break;
case 14:return "tk_self"
break;
case 15:return "tk_text"
break;
case 16:return "tk_position"
break;
case 17:return "tk_last"
break;
case 18:return "tk_div"
break;
case 19:return "tk_and"
break;
case 20:return "tk_or"
break;
case 21:return "tk_mod"
break;
case 22:return "tk_barra"
break;
case 23:return "tk_punto"
break;
case 24:return "tk_diagonal"
break;
case 25:return "tk_asterisco"
break;
case 26:return "tk_dosPuntos"
break;
case 27:return "tk_mas"
break;
case 28:return "tk_menos"
break;
case 29:return "tk_menorIgual"
break;
case 30:return "tk_mayorIgual"
break;
case 31:return "tk_menor"
break;
case 32:return "tk_mayor"
break;
case 33:return "tk_distinto"
break;
case 34:return "tk_igual"
break;
case 35:return "tk_llaveA"
break;
case 36:return "tk_llaveC"
break;
case 37:return "tk_arroba"
break;
case 38:return "tk_parA"
break;
case 39:return "tk_parC"
break;
case 40:return "tk_stringTexto";
break;
case 41:return "tk_stringTexto";
break;
case 42:return "tk_stringTexto";
break;
case 43:return "tk_stringTexto";
break;
case 44:return "tk_identificador";
break;
case 45:return "EOF";
break;
case 46:
break;
case 47:
    listaErrores.push(new tError('Léxico',`Simbolo inesperado: ${yy_.yytext}`,yy_.yylloc.first_line,yy_.yylloc.first_column ));

break;
}
},
rules: [/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:node\b)/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:descendant-or-self\b)/,/^(?:ancestor\b)/,/^(?:ancestor-or-self\b)/,/^(?:attribute\b)/,/^(?:following\b)/,/^(?:following-sibling\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:preceding-sibling\b)/,/^(?:self\b)/,/^(?:text\b)/,/^(?:position\b)/,/^(?:last\b)/,/^(?:div\b)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:mod\b)/,/^(?:\|)/,/^(?:\.)/,/^(?:\/)/,/^(?:\*)/,/^(?::)/,/^(?:\+)/,/^(?:-)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:!=)/,/^(?:=)/,/^(?:\[)/,/^(?:\])/,/^(?:@)/,/^(?:\()/,/^(?:\))/,/^(?:"[^\"]*")/,/^(?:“[^\“]*“)/,/^(?:'[^\']*')/,/^(?:‘[^\‘]*‘)/,/^(?:[a-zA-Z]([a-zA-Z0-9_])*)/,/^(?:$)/,/^(?:[ \t\r\n\f])/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = xpathDesc;
exports.Parser = xpathDesc.Parser;
exports.parse = function () { return xpathDesc.parse.apply(xpathDesc, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(/*! fs */ 3).readFileSync(__webpack_require__(/*! path */ 4).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paginas_tabla_xml_tabla_xml_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginas/tabla-xml/tabla-xml.component */ "./src/app/paginas/tabla-xml/tabla-xml.component.ts");
/* harmony import */ var _paginas_principal_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginas/principal/home.component */ "./src/app/paginas/principal/home.component.ts");
/* harmony import */ var _paginas_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginas/grafico/grafico.component */ "./src/app/paginas/grafico/grafico.component.ts");
/* harmony import */ var _paginas_bnf_bnf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginas/bnf/bnf.component */ "./src/app/paginas/bnf/bnf.component.ts");







const routes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'home' },
    { path: 'home', component: _paginas_principal_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'tablaSimbolosXML', component: _paginas_tabla_xml_tabla_xml_component__WEBPACK_IMPORTED_MODULE_3__["TablaXMLComponent"] },
    { path: 'grafico', component: _paginas_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_5__["GraficoComponent"] },
    { path: 'bnf', component: _paginas_bnf_bnf_component__WEBPACK_IMPORTED_MODULE_6__["BnfComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _reporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte.service */ "./src/app/reporte.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _paginas_principal_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginas/principal/home.component */ "./src/app/paginas/principal/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/__ivy_ngcc__/fesm2015/ctrl-ngx-codemirror.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm2015/ngx-material-file-input.js");
/* harmony import */ var _paginas_tabla_xml_tabla_xml_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paginas/tabla-xml/tabla-xml.component */ "./src/app/paginas/tabla-xml/tabla-xml.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _paginas_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./paginas/grafico/grafico.component */ "./src/app/paginas/grafico/grafico.component.ts");
/* harmony import */ var _paginas_bnf_bnf_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./paginas/bnf/bnf.component */ "./src/app/paginas/bnf/bnf.component.ts");
/* harmony import */ var _paginas_tabla_errores_tabla_errores_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./paginas/tabla-errores/tabla-errores.component */ "./src/app/paginas/tabla-errores/tabla-errores.component.ts");




















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _paginas_tabla_xml_tabla_xml_component__WEBPACK_IMPORTED_MODULE_15__["TablaXMLComponent"],
            _paginas_principal_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _paginas_grafico_grafico_component__WEBPACK_IMPORTED_MODULE_17__["GraficoComponent"],
            _paginas_bnf_bnf_component__WEBPACK_IMPORTED_MODULE_18__["BnfComponent"],
            _paginas_tabla_errores_tabla_errores_component__WEBPACK_IMPORTED_MODULE_19__["TablaErroresComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_12__["CodemirrorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_14__["MaterialFileInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"]
        ],
        providers: [
            _reporte_service__WEBPACK_IMPORTED_MODULE_3__["ReporteService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/paginas/bnf/bnf.component.css":
/*!***********************************************!*\
  !*** ./src/app/paginas/bnf/bnf.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ibmYvYm5mLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL2JuZi9ibmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/bnf/bnf.component.ts":
/*!**********************************************!*\
  !*** ./src/app/paginas/bnf/bnf.component.ts ***!
  \**********************************************/
/*! exports provided: BnfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BnfComponent", function() { return BnfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BnfComponent = class BnfComponent {
    constructor() {
        this.displayedColumns = ['no', 'produccion', 'accion'];
        this.simbolos = localStorage.getItem('bnf');
    }
    ngOnInit() {
        this.simbolos = JSON.parse(this.simbolos);
        console.log(this.simbolos, "vacia?");
    }
};
BnfComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bnf',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bnf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/bnf/bnf.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bnf.component.css */ "./src/app/paginas/bnf/bnf.component.css")).default]
    })
], BnfComponent);



/***/ }),

/***/ "./src/app/paginas/grafico/grafico.component.css":
/*!*******************************************************!*\
  !*** ./src/app/paginas/grafico/grafico.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#vis {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9ncmFmaWNvL2dyYWZpY28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9ncmFmaWNvL2dyYWZpY28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/paginas/grafico/grafico.component.ts":
/*!******************************************************!*\
  !*** ./src/app/paginas/grafico/grafico.component.ts ***!
  \******************************************************/
/*! exports provided: GraficoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraficoComponent", function() { return GraficoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_2__);



let GraficoComponent = class GraficoComponent {
    constructor() { }
    ngOnInit() {
        var container = document.getElementById("vis");
        console.log(localStorage.getItem("grafo"));
        var DOTstring = localStorage.getItem("grafo");
        ;
        var parsedData = vis__WEBPACK_IMPORTED_MODULE_2__["network"].convertDot(DOTstring);
        var data = {
            nodes: parsedData.nodes,
            edges: parsedData.edges
        };
        var options = parsedData.options;
        // you can extend the options like a normal JSON variable:
        options = {
            layout: {
                hierarchical: {
                    sortMethod: 'directed',
                    direction: 'UD' // UD, DU, LR, RL
                }
            },
            nodes: {
                color: 'skyblue',
                shape: 'box'
            }
        };
        // create a network
        var network = new vis__WEBPACK_IMPORTED_MODULE_2__["Network"](container, data, options);
        network.stabilize();
    }
};
GraficoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grafico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grafico.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/grafico/grafico.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grafico.component.css */ "./src/app/paginas/grafico/grafico.component.css")).default]
    })
], GraficoComponent);



/***/ }),

/***/ "./src/app/paginas/principal/home.component.css":
/*!******************************************************!*\
  !*** ./src/app/paginas/principal/home.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#barra {\r\n    height: 06vh;\r\n}\r\n\r\n.spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n#superior { \r\n    height: 15vh;\r\n}\r\n\r\n#separador1 {\r\n    height: 01vh;\r\n    background-color: #f44336;\r\n}\r\n\r\n#inferior {\r\n    height: 78vh;\r\n    width: 100vw;\r\n    display: flex;\r\n}\r\n\r\n#izquierda {\r\n    width: 49.50vw;\r\n}\r\n\r\n#separador2 {\r\n    width: 01vw;\r\n    background-color: #f44336;\r\n}\r\n\r\n#derecha {\r\n    width: 49.50vw;\r\n}\r\n\r\n#inferior2 {\r\n    height: 49.25%;\r\n}\r\n\r\n#separador3 {\r\n    height: 01vh;\r\n    background-color: #f44336;\r\n}\r\n\r\n#superior2 {\r\n    height: 49.25%;\r\n}\r\n\r\n#grafo {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy9wcmluY2lwYWwvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hcy9wcmluY2lwYWwvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhcnJhIHtcclxuICAgIGhlaWdodDogMDZ2aDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuI3N1cGVyaW9yIHsgXHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbn1cclxuXHJcbiNzZXBhcmFkb3IxIHtcclxuICAgIGhlaWdodDogMDF2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbiNpbmZlcmlvciB7XHJcbiAgICBoZWlnaHQ6IDc4dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jaXpxdWllcmRhIHtcclxuICAgIHdpZHRoOiA0OS41MHZ3O1xyXG59XHJcblxyXG4jc2VwYXJhZG9yMiB7XHJcbiAgICB3aWR0aDogMDF2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbiNkZXJlY2hhIHtcclxuICAgIHdpZHRoOiA0OS41MHZ3O1xyXG59XHJcblxyXG4jaW5mZXJpb3IyIHtcclxuICAgIGhlaWdodDogNDkuMjUlO1xyXG59XHJcblxyXG4jc2VwYXJhZG9yMyB7XHJcbiAgICBoZWlnaHQ6IDAxdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4jc3VwZXJpb3IyIHtcclxuICAgIGhlaWdodDogNDkuMjUlO1xyXG59XHJcblxyXG4jZ3JhZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/paginas/principal/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/paginas/principal/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analizadorXML_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../analizadorXML/index */ "./src/analizadorXML/index.ts");
/* harmony import */ var _analizadorXML_indexDesc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../analizadorXML/indexDesc */ "./src/analizadorXML/indexDesc.ts");
/* harmony import */ var _analizadores_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../analizadores/index */ "./src/analizadores/index.ts");
/* harmony import */ var _analizadores_indexDesc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../analizadores/indexDesc */ "./src/analizadores/indexDesc.ts");
/* harmony import */ var _analizadorXQUERY_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../analizadorXQUERY/index */ "./src/analizadorXQUERY/index.ts");
/* harmony import */ var _reporte_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reporte.service */ "./src/app/reporte.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _analizadorXML_Instrucciones_Busqueda_xpathBusqueda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../analizadorXML/Instrucciones/Busqueda/xpathBusqueda */ "./src/analizadorXML/Instrucciones/Busqueda/xpathBusqueda.ts");
/* harmony import */ var _analizadorXML_Codigo3D_xml3D__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../analizadorXML/Codigo3D/xml3D */ "./src/analizadorXML/Codigo3D/xml3D.ts");











let HomeComponent = class HomeComponent {
    constructor(_servicio, _router) {
        this._servicio = _servicio;
        this._router = _router;
        this.title = 'interfaz';
        //editor query
        this.querys = `declare function local:suma($m as xs:integer, $n as xs:integer ) as xs:integer {
    return $m + $n
};
  
local:suma($/pruebas/m, $/pruebas/n)`;
        this.editorQueryOptions = {
            theme: 'gruvbox-dark',
            mode: "application/xquery",
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
            autoCloseBrackets: true,
            matchBrackets: true,
            lint: true
        };
        //editor XML entrada
        this.xmlEntrada = `<?xml version="1.0" encoding="UTF-8"?>

<pruebas>
  <m>2</m>
  <n>1</n>
</pruebas>`;
        this.editorXMLEntradaOptions = {
            theme: 'gruvbox-dark',
            mode: "application/xml",
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
            autoCloseBrackets: true,
            matchBrackets: true,
            lint: true
        };
        //editor XML Salida
        this.xmlSalida = "XML Salida";
        this.editorXMLSalidaOptions = {
            theme: 'gruvbox-dark',
            mode: "application/xml",
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
            autoCloseBrackets: true,
            matchBrackets: true,
            lint: true
        };
        this.salida3D = "Salida del codigo de tres direcciones";
        this.editor3DSalidaOptions = {
            theme: 'gruvbox-dark',
            mode: "text/x-csrc",
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
            autoCloseBrackets: true,
            matchBrackets: true,
            lint: true
        };
        //reportes
        this.tablaXML = [];
        this.cstXML = "";
        this.bnfXML = [];
        this.encodingXML = "";
        this.erroresXML = [];
        this.erroresXPATH = [];
        this.queryMod = "";
        this.bnfXpath = [];
        this.astXpath = "";
        this.cstXpath = "";
        //reportesVisualizacion
        this.grafo = false;
        this.bnf = false;
        this.tabla = false;
        this.error = false;
    }
    ngOnInit() {
        localStorage.clear();
    }
    abrirXML(files) {
        this.xmlEntrada = files.item(0);
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.xmlEntrada = fileReader.result;
            console.log(fileReader.result);
        };
        fileReader.readAsText(this.xmlEntrada);
    }
    ejecutarXquery() {
        localStorage.clear();
        localStorage.setItem("xml", this.xmlEntrada);
        let ascXquery = new _analizadorXQUERY_index__WEBPACK_IMPORTED_MODULE_6__["AnalizadorXquery"]();
        let ret = ascXquery.ejecutarCodigo(this.querys);
        this.xmlSalida = "";
        for (let i = 0; i < ret.consola.length; i++) {
            this.xmlSalida += ret.consola[i];
        }
    }
    ejecutarAscendente() {
        this.botarReportes();
        localStorage.clear();
        let ascXML = new _analizadorXML_index__WEBPACK_IMPORTED_MODULE_2__["AnalizadorASCXML"]();
        let ascXpath = new _analizadores_index__WEBPACK_IMPORTED_MODULE_4__["AnalizadosAscXpath"]();
        let ret = ascXML.ejecutarCodigo(this.xmlEntrada);
        let ret1 = ascXpath.ejecutarCodigo(this.querys);
        this.simbolos = ret.objetos;
        this.tablaXML = ret.tablaRep;
        this.cstXML = ret.cstRep;
        this.bnfXML = ret.bnfRep;
        this.encodingXML = ret.encoding;
        this.erroresXML = ret.errores;
        this.queryMod = ret1.ejecutado;
        this.bnfXpath = ret1.bnfRep;
        this.astXpath = ret1.astRep;
        this.cstXpath = ret1.cstRep;
        this.erroresXPATH = ret1.errores;
        this.obtenerConsulta(this.queryMod, this.simbolos);
        alert("Analisis concluido");
    }
    obtenerConsulta(query, tabla) {
        var buscador = new _analizadorXML_Instrucciones_Busqueda_xpathBusqueda__WEBPACK_IMPORTED_MODULE_9__["xpathBusqueda"]();
        var texto = "";
        if (query.includes("|")) {
            var multiple = buscador.getNodesByFilters("3", query, tabla);
            this.xmlSalida = "";
            for (let i = 0; i < multiple.length; i++) {
                texto += multiple[i];
                texto += "\n";
            }
        }
        else if (query[0] !== "/" && query[0] !== "//") {
            texto = buscador.getNodesByFilters("1", query, tabla);
        }
        else {
            texto = buscador.getNodesByFilters("2", query, tabla);
        }
        const dir = new _analizadorXML_Codigo3D_xml3D__WEBPACK_IMPORTED_MODULE_10__["xml3D"]();
        this.salida3D = dir.getNodesByFilters(tabla, 0, buscador.returnListValues());
        //var buf = Buffer.from(texto);
        this.xmlSalida = texto; //buf.toString(this.encoding()); 
    }
    ejecutarDescendente() {
        this.botarReportes();
        localStorage.clear();
        let descXML = new _analizadorXML_indexDesc__WEBPACK_IMPORTED_MODULE_3__["AnalizadorASCXML"]();
        let descXPATH = new _analizadores_indexDesc__WEBPACK_IMPORTED_MODULE_5__["AnalizadosAscXpath"]();
        let ret = descXML.ejecutarCodigo(this.xmlEntrada);
        let ret1 = descXPATH.ejecutarCodigo(this.querys);
        this.simbolos = ret.objetos;
        this.tablaXML = ret.tablaRep;
        this.cstXML = ret.cstRep;
        this.bnfXML = ret.bnfRep;
        this.erroresXML = ret.errores;
        this.queryMod = ret1.ejecutado;
        this.bnfXpath = ret1.bnfRep;
        this.astXpath = ret1.astRep;
        this.cstXpath = ret1.cstRep;
        this.erroresXPATH = ret1.errores;
        this.encodingXML = ret.encoding;
        this.obtenerConsulta(this.queryMod, this.simbolos);
        alert("Analisis concluido");
    }
    botarReportes() {
        this.grafo = this.bnf = this.tabla = this.error = false;
    }
    reporteTablaSimbolosXML() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('tablaXML', JSON.stringify(this.tablaXML));
        this.tabla = true;
        //window.open("tablaSimbolosXML", "_blank")
    }
    reporteCSTXML() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('grafo', this.cstXML);
        this.grafo = true;
        //window.open("grafico", "_blank")
    }
    reporteBNFXML() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('bnf', JSON.stringify(this.bnfXML));
        this.bnf = true;
        //window.open("bnf", "_blank")
    }
    reporteBNFXPATH() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('bnf', JSON.stringify(this.bnfXpath));
        this.bnf = true;
        //window.open("bnf", "_blank")
    }
    reporteASTXPATH() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('grafo', this.astXpath);
        this.grafo = true;
        //window.open("grafico", "_blank")
    }
    reporteCSTXPATH() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('grafo', this.cstXpath);
        this.grafo = true;
        // window.open("grafico", "_blank")
    }
    reporteErroresXML() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('errores', JSON.stringify(this.erroresXML));
        this.error = true;
    }
    reporteErroresXPATH() {
        this.botarReportes();
        localStorage.clear();
        localStorage.setItem('errores', JSON.stringify(this.erroresXPATH));
        this.error = true;
    }
    encoding() {
        this.encodingXML = this.encodingXML.toLowerCase();
        if (this.encodingXML.includes("utf8")) {
            return "utf8";
        }
        else if (this.encodingXML.includes("ascii")) {
            return "ascii";
        }
        else if (this.encodingXML.includes("utf16")) {
            return "utf16";
        }
        else if (this.encodingXML.includes("ucs")) {
            return "ucs2";
        }
        else if (this.encodingXML.includes("base")) {
            return "base64";
        }
        else if (this.encodingXML.includes("binary")) {
            return "binary";
        }
        else if (this.encodingXML.includes("hex")) {
            return "hex";
        }
        return "utf8";
    }
};
HomeComponent.ctorParameters = () => [
    { type: _reporte_service__WEBPACK_IMPORTED_MODULE_7__["ReporteService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/principal/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/paginas/principal/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/paginas/tabla-errores/tabla-errores.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/paginas/tabla-errores/tabla-errores.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy90YWJsYS1lcnJvcmVzL3RhYmxhLWVycm9yZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXMvdGFibGEtZXJyb3Jlcy90YWJsYS1lcnJvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/paginas/tabla-errores/tabla-errores.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/paginas/tabla-errores/tabla-errores.component.ts ***!
  \******************************************************************/
/*! exports provided: TablaErroresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaErroresComponent", function() { return TablaErroresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TablaErroresComponent = class TablaErroresComponent {
    constructor() {
        this.displayedColumns = ['no', 'tipo', 'valor', 'fila', 'columna'];
        this.simbolos = localStorage.getItem('errores');
    }
    ngOnInit() {
        this.simbolos = JSON.parse(this.simbolos);
        console.log(this.simbolos, "vacia?");
    }
};
TablaErroresComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabla-errores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabla-errores.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tabla-errores/tabla-errores.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabla-errores.component.css */ "./src/app/paginas/tabla-errores/tabla-errores.component.css")).default]
    })
], TablaErroresComponent);



/***/ }),

/***/ "./src/app/paginas/tabla-xml/tabla-xml.component.css":
/*!***********************************************************!*\
  !*** ./src/app/paginas/tabla-xml/tabla-xml.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hcy90YWJsYS14bWwvdGFibGEteG1sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzL3RhYmxhLXhtbC90YWJsYS14bWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/paginas/tabla-xml/tabla-xml.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/paginas/tabla-xml/tabla-xml.component.ts ***!
  \**********************************************************/
/*! exports provided: TablaXMLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaXMLComponent", function() { return TablaXMLComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _reporte_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reporte.service */ "./src/app/reporte.service.ts");



let TablaXMLComponent = class TablaXMLComponent {
    constructor(_servicio) {
        this.displayedColumns = ['no', 'nombre', 'tipo', 'valor', 'ambito', 'tipoEtiqueta', 'fila', 'columna'];
        this.simbolos = localStorage.getItem('tablaXML');
    }
    ngOnInit() {
        this.simbolos = JSON.parse(this.simbolos);
        console.log(this.simbolos, "vacia?");
    }
};
TablaXMLComponent.ctorParameters = () => [
    { type: _reporte_service__WEBPACK_IMPORTED_MODULE_2__["ReporteService"] }
];
TablaXMLComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabla-xml',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabla-xml.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginas/tabla-xml/tabla-xml.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabla-xml.component.css */ "./src/app/paginas/tabla-xml/tabla-xml.component.css")).default]
    })
], TablaXMLComponent);



/***/ }),

/***/ "./src/app/reporte.service.ts":
/*!************************************!*\
  !*** ./src/app/reporte.service.ts ***!
  \************************************/
/*! exports provided: ReporteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteService", function() { return ReporteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ReporteService = class ReporteService {
    constructor() {
        this.tablaSimbolosXML = [];
    }
    llenarTablaXML(array) {
        this.tablaSimbolosXML = array;
        console.log(this.tablaSimbolosXML);
    }
    obtenerTablaXML() {
        return this.tablaSimbolosXML;
    }
};
ReporteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReporteService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter */ "./node_modules/codemirror/addon/fold/foldgutter.js");
/* harmony import */ var codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold */ "./node_modules/codemirror/addon/fold/brace-fold.js");
/* harmony import */ var codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_lib_codemirror__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/lib/codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror_lib_codemirror__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/edit/closebrackets */ "./node_modules/codemirror/addon/edit/closebrackets.js");
/* harmony import */ var codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_closebrackets__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/edit/matchbrackets */ "./node_modules/codemirror/addon/edit/matchbrackets.js");
/* harmony import */ var codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_edit_matchbrackets__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_addon_lint_lint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/lint/lint */ "./node_modules/codemirror/addon/lint/lint.js");
/* harmony import */ var codemirror_addon_lint_lint__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_lint__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_addon_lint_json_lint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/addon/lint/json-lint */ "./node_modules/codemirror/addon/lint/json-lint.js");
/* harmony import */ var codemirror_addon_lint_json_lint__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_lint_json_lint__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_mode_xquery_xquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/mode/xquery/xquery */ "./node_modules/codemirror/mode/xquery/xquery.js");
/* harmony import */ var codemirror_mode_xquery_xquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xquery_xquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/mode/xml/xml */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/mode/clike/clike */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_14__);















if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Compiladores2\OLC2_Proyecto\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2017.48887ae17972ad8dc99f.js.map