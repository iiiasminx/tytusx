class AnyAtributeIdentifier extends ExpresionAncestor{
    private identifier:string;
    private predicatesList: Expresion[];
    linea: number;
    columna: number;

    constructor(identifier: string, predicatesList: Expresion[], linea: number, columna: number) {
        super();
        this.identifier = identifier;
        this.predicatesList = predicatesList;
        this.linea = linea;
        this.columna = columna;
    }

    getTipo(tsXquery:TablaSimbolosXquery,ent: TablaSimbolos): Tipo {
        return new Tipo(TipoDato.err);
    }

    getValor(tsXquery:TablaSimbolosXquery,ent: TablaSimbolos): any {
        let ts = ent.findAtributesByNombreElementoRecursive(this.identifier);
        return PredicateExpresion.filterXpathExpresion(ts,this.predicatesList);
    }
}