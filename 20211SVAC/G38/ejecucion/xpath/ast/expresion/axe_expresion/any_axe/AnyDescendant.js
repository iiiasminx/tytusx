"use strict";
class AnyDescendant extends ExpresionAncestor {
    constructor(axeType, axeOperation, identifier, listaPredicados, linea, columna) {
        super();
        this.axeType = axeType;
        this.axeOperation = axeOperation;
        this.identifier = identifier;
        this.listaPredicados = listaPredicados;
        this.linea = linea;
        this.columna = columna;
    }
    getTipo(tsXquery, ent) {
        return new Tipo(TipoDato.err);
    }
    getValor(tsXquery, ent) {
        var ts = new TablaSimbolos(null);
        switch (this.axeType) {
            case AxeType.descendantType:
                ts = this.getDescendant(ent);
                break;
            case AxeType.descendantOrSelfType:
                ts = this.getDescendant(ent);
                ts.merge(ent);
                break;
        }
        return PredicateExpresion.filterXpathExpresion(ts, this.listaPredicados);
    }
    getDescendant(ent) {
        var ts = new TablaSimbolos(null);
        switch (this.axeOperation) {
            case AxeOperation.identifier:
                ts = ent.findAllObjectsByNombreElemento(this.identifier);
                break;
            case AxeOperation.node:
                ts = ent.findAllNodes();
                break;
            case AxeOperation.times:
                ts = ent.findAllSubObjects();
                break;
            case AxeOperation.text:
                ts = ent.findAllSubTextInTS();
                break;
        }
        return PredicateExpresion.filterXpathExpresion(ts, this.listaPredicados);
    }
}
