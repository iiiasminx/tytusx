"use strict";
class XmlContent extends XmlObjectAncestor {
    constructor(id, name, parent, line, column, value) {
        super(id, "Contenido", parent, line, column);
        this._value = XpathUtil.procesarCaracteresEspeciales(value);
        this._type = (this.isNumber(value)) ? new Tipo(TipoDato.numero) :
            (this.isBoolean(value)) ? new Tipo(TipoDato.booleano) :
                new Tipo(TipoDato.cadena);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    isNumber(value) {
        var number = parseInt(value);
        return !isNaN(number);
    }
    isBoolean(value) {
        if (value == undefined || value == null) {
            return false;
        }
        var boolean = value.toUpperCase().trim();
        return boolean == 'TRUE' || boolean == "FALSE";
    }
    /*
    OVERRIDE METHODS
     */
    getTsScope(scope, index) {
        var rows = [];
        rows.push(new TsRow(this.name, index, this.name, this, this._type, this.parent.getNameObject(), scope));
        return rows;
    }
    getValueString() {
        return this._value;
    }
    isContent() {
        return true;
    }
    getStrAst(nodoPadre) {
        var nombreRoot = XpathUtil.generarIdUnicoXmlNode();
        var cadenaRoot = nombreRoot + "[" + 'label="' + this._value + '",' + 'color="greenyellow",' + "];\n ";
        var cad = cadenaRoot + nodoPadre + "->" + nombreRoot + ";\n";
        return cad;
    }
    generateString_3d() {
        CodeUtil.printComment("Guardamos el contenido ");
        var tmp = CodeUtil.generarTemporal();
        CodeUtil.printWithComment(tmp + " = RP + 0 ;", "Obtenemos inicio de cadena");
        for (let caracter of this._value) {
            CodeUtil.printWithComment("Repository[RP] = " + caracter.charCodeAt(0) + " ;", caracter);
            CodeUtil.print("RP = RP + 1 ;");
        }
        CodeUtil.printWithComment("Repository[RP] = -1 ;", "EOF");
        CodeUtil.print("RP = RP + 1 ;");
        return tmp;
    }
}
