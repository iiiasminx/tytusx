class AnyIdentifier extends ExpresionAncestor{
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
        let ts = ent.findAllObjectsByNombreElemento(this.identifier);
        return PredicateExpresion.filterXpathExpresion(ts,this.predicatesList);
    }

    traducir3D(ambito:string, sizeScope:string):string{
        CodeUtil.printComment("Traduccion de RootIdentifier :"+this.identifier);
        let posCadena = CodeUtil.guardarTexto(this.identifier);
        CodeUtil.printComment("Buscamos en la lista por nombre")

        CodeUtil.printWithComment("SP = SP + "+sizeScope + " ;", "Cambiamos ambito")
        //Calculamos las posiciones
        let tmpPosPar1=CodeUtil.generarTemporal();
        CodeUtil.print(tmpPosPar1+"= SP + 0 ;")
        let tmpPosPar2=CodeUtil.generarTemporal();
        CodeUtil.print(tmpPosPar2+"= SP + 1 ;")
        let tmpPosPar3=CodeUtil.generarTemporal();
        CodeUtil.print(tmpPosPar3+"= SP + 2 ;")
        let tmpPosPar4=CodeUtil.generarTemporal();
        CodeUtil.print(tmpPosPar4+"= SP + 3 ;")
        //Pasamos los parametros
        CodeUtil.print("Stack[(int)"+tmpPosPar1+"] = "+ambito+" ;");
        CodeUtil.print("Stack[(int)"+tmpPosPar2+"] = "+TipoDato3D.objeto+" ;");
        CodeUtil.print("Stack[(int)"+tmpPosPar3+"] = "+posCadena+" ;");
        CodeUtil.print("Stack[(int)"+tmpPosPar4+"] = "+CodeUtil.VAL_INDEX_DEFAULT+" ;");
        CodeUtil.print("buscarObjeto();")
        let tmpPosReturn = CodeUtil.generarTemporal();
        CodeUtil.printWithComment(tmpPosReturn + " = Stack[SP] ;","Se recupera el return")
        CodeUtil.printWithComment("SP = SP - "+sizeScope + " ;", "Recuperamos ambito")
        //return tmpPosReturn;
        CodeUtil.printComment("Fin de RootIdentifier :"+this.identifier);
        return tmpPosReturn;
    }
}