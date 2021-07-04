"use strict";

var AsignacionArreglo = /** @class */ (function () {
    function AsignacionArreglo(temporal, codigo, linea, columna, tipo) {
        this.linea = linea;
        this.columna = columna;
        this.codigo = codigo;
        this.tipo = tipo;
        this.temporal = temporal;
    }

    AsignacionArreglo.prototype.getTemporal = function () {
        return this.temporal;
    };

    AsignacionArreglo.prototype.getLinea = function () {
        return this.linea;
    };

    AsignacionArreglo.prototype.getColumna = function () {
        return this.columna;
    };

    AsignacionArreglo.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    AsignacionArreglo.prototype.getTipo = function () {
        return this.tipo;
    };
    AsignacionArreglo.prototype.getCodigo3D = function () {
        return this.codigo;
    };
    return AsignacionArreglo;
}());

