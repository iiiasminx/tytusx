"use strict";

var XDeclararFuncion = /** @class */ (function () {
    function XDeclararFuncion(linea, columna, XFunction) {
        this.linea = linea;
        this.columna = columna;
        this.XFunction = XFunction;
        this.tipo = TipoXInstruccion.XDECLARARFUNCION;
        this.entorno = null;
    }
    XDeclararFuncion.prototype.ejecutar = function (ent, arbol) {

        var XFunctionAux = this.XFunction;
        var existe = false;

        for(var i = 0; i < funcionesXQuery.length; i++){

            if(funcionesXQuery[i].getID() == XFunctionAux.getID()){
                existe = true;
                break;
            }
        }

        if(existe == false){
            funcionesXQuery.push(XFunctionAux);
            return "Función \"" + XFunctionAux.getID() + "\" declarada y creada con éxito! :D";
        } else {
            return "Ya existe una función llamada " + XFunctionAux.getID() + " :O";
        }
  
        
    };

    XDeclararFuncion.prototype.getEntorno = function (){
        return this.entorno;
    };

    XDeclararFuncion.prototype.getTipo = function (){
        return this.tipo;
    };

    XDeclararFuncion.prototype.getXFuncion = function (){
        return this.XFunction;
    };

    XDeclararFuncion.prototype.isInt = function (n) {
        return Number(n) === n && n % 1 === 0;
    };


    return XDeclararFuncion;
}());