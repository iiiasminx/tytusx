
class Optimizador{

    constructor(bloques){
        this.bloques = bloques;
    }

    Ejecutar(){

        //Aplicando 16 reglas de optimizacion
        this.Regla1();
        this.Regla2();
        this.Regla3();
        this.Regla4();
        this.Regla5();
        this.Regla6();
        this.Regla7();
        this.Regla8();
        this.Regla9();
        this.Regla10();
        this.Regla11();
        this.Regla12();
        this.Regla13();
        this.Regla14();
        this.Regla15();
        this.Regla16();
        return this.GenerarResultado();
    }

    /*
    goto L1; 
    <instrucciones> L1: 
    */
    Regla1(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            //Iteramos sobre cada bloque de instrucciones
            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                //Iteramos sobre cada instruccion del bloque
                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    //Verificamos que la instruccion sea una instruccion GOTO
                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.GOTO){

                        var posicionGoto = i;
                        var inicio = i + 1;
                        for (var j=inicio; j < bloque.getInstrucciones().length;j++ ){

                            if(bloque.getInstrucciones()[j].getTipo() == TipoInstruccion3D.ETIQUETA &&
                               (bloque.getInstrucciones()[posicionGoto].getEtiqueta() == bloque.getInstrucciones()[j].getEtiqueta() )){

                                if((j-1) != posicionGoto){

                                    var existeEtiqueta = false;

                                    for(var x=inicio; (x < bloque.getInstrucciones().length) && (x < j); x++ ){
                                       
                                        if(bloque.getInstrucciones()[x].getTipo() == TipoInstruccion3D.ETIQUETA){
                                            existeEtiqueta = true;
                                            break;
                                        }                              
                                    }
    
                                    if(existeEtiqueta==false){
    
                                        var codigoAntes =  bloque.getInstrucciones()[i].getCodigo3D();
                                        codigoAntes += ` [instruciones] ` + bloque.getInstrucciones()[j].getEtiqueta() + ":";
    
                                        var codigoDespues = bloque.getInstrucciones()[i].getCodigo3D();
                                        codigoDespues += bloque.getInstrucciones()[j].getEtiqueta() + ":";
    
                                        ListaOptimizaciones.push(new Optimizacion(
                                            bloque.getInstrucciones()[i].getLinea(),
                                            bloque.getInstrucciones()[i].getColumna(),
                                            "Bloques",
                                            codigoAntes,
                                            codigoDespues,
                                            "Regla 1",
                                            pasada));
    
                                        bloque.getInstrucciones().splice(inicio,j-inicio);
                                        // OJO CON ESTOS INDICES
                                        j--;
                                        i--;
                                    }  
                                }
                                                          
                            }
                        }
                    }            
                }
            }
        });
    }

    /*
    If (x == x) goto L1; 
    goto L2; 
    */
    Regla2(){
        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length; i++){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.IF){

                        if((i+2) < bloque.getInstrucciones().length){

                            if((bloque.getInstrucciones()[i+1].getTipo() == TipoInstruccion3D.GOTO) &&
                            (bloque.getInstrucciones()[i+2].getTipo() == TipoInstruccion3D.ETIQUETA) &&
                            (bloque.getInstrucciones()[i].getGOTO() == bloque.getInstrucciones()[i+2].getEtiqueta())){

                                var codigoAntes =  bloque.getInstrucciones()[i].getCodigo3D();
                                    codigoAntes += bloque.getInstrucciones()[i+1].getCodigo3D();
                                    codigoAntes += bloque.getInstrucciones()[i+2].getCodigo3D();

                                bloque.getInstrucciones()[i].InvertirOperador();
                                bloque.getInstrucciones()[i].setGOTO(bloque.getInstrucciones()[i+1].getEtiqueta());
                                bloque.getInstrucciones()[i].GenerarC3D();

                                var codigoDespues = bloque.getInstrucciones()[i].getCodigo3D();
                            
                                ListaOptimizaciones.push(new Optimizacion(
                                    bloque.getInstrucciones()[i].getLinea(),
                                    bloque.getInstrucciones()[i].getColumna(),
                                    "Bloques",
                                    codigoAntes,
                                    codigoDespues,
                                    "Regla 2",
                                    pasada));
                                bloque.getInstrucciones().splice(i+1,2);
                                i--; 

                            }

                        }
                    }

                }
            }
        });
    }

    /* If (1 == 1) goto L1; 
        goto L2;
     */
    Regla3(){

        function EsNumero(str) {
            if (typeof str != "string") return false 
            return !isNaN(str) && !isNaN(parseFloat(str)) 
        }

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length; i++){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.IF){

                        if((((EsNumero(bloque.getInstrucciones()[i].getOperando1()) == true) && (EsNumero(bloque.getInstrucciones()[i].getOperando2()) == true))) || 
                        ((((EsNumero(bloque.getInstrucciones()[i].getOperando1()) == false) && (EsNumero(bloque.getInstrucciones()[i].getOperando2()) == false))) && 
                        ((bloque.getInstrucciones()[i].getOperando1()) == (bloque.getInstrucciones()[i].getOperando2())) )){

                            if((i+1) < bloque.getInstrucciones().length){

                                if((bloque.getInstrucciones()[i].esConstantePositiva()== true) &&
                                (bloque.getInstrucciones()[i+1].getTipo() == TipoInstruccion3D.GOTO)){
    
                                    var codigoAntes =  bloque.getInstrucciones()[i].getCodigo3D();
                                        codigoAntes += bloque.getInstrucciones()[i+1].getCodigo3D();
                              
                                    bloque.getInstrucciones()[i+1].setEtiqueta(bloque.getInstrucciones()[i].getGOTO());
                                    bloque.getInstrucciones()[i+1].GenerarC3D();
    
                                    var codigoDespues = bloque.getInstrucciones()[i+1].getCodigo3D();
    
                                    ListaOptimizaciones.push(new Optimizacion(
                                        bloque.getInstrucciones()[i].getLinea(),
                                        bloque.getInstrucciones()[i].getColumna(),
                                        "Bloques",
                                        codigoAntes,
                                        codigoDespues,
                                        "Regla 3",
                                        pasada));
                                    bloque.getInstrucciones().splice(i,1);
                                    i--; 
    
                                }
                            }

                        }

                        
                    }
                }
            }
        });

    }

    /* If (4 == 1) goto L1; 
        goto L2;
    */
    Regla4(){

        function EsNumero(str) {
            if (typeof str != "string") return false 
            return !isNaN(str) && !isNaN(parseFloat(str)) 
        }

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length; i++){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.IF){

                        if((((EsNumero(bloque.getInstrucciones()[i].getOperando1()) == true) && (EsNumero(bloque.getInstrucciones()[i].getOperando2()) == true))) || 
                        ((((EsNumero(bloque.getInstrucciones()[i].getOperando1()) == false) && (EsNumero(bloque.getInstrucciones()[i].getOperando2()) == false))) && 
                        ((bloque.getInstrucciones()[i].getOperando1()) == (bloque.getInstrucciones()[i].getOperando2())) )){

                        
                        if((i+1) < bloque.getInstrucciones().length){
                      

                            if((bloque.getInstrucciones()[i].esConstantePositiva()== false) &&
                            (bloque.getInstrucciones()[i+1].getTipo() == TipoInstruccion3D.GOTO)){

                                var codigoAntes =  bloque.getInstrucciones()[i].getCodigo3D();
                                    codigoAntes += bloque.getInstrucciones()[i+1].getCodigo3D();
                                                  
                                var codigoDespues = bloque.getInstrucciones()[i+1].getCodigo3D();

                                ListaOptimizaciones.push(new Optimizacion(
                                    bloque.getInstrucciones()[i].getLinea(),
                                    bloque.getInstrucciones()[i].getColumna(),
                                    "Bloques",
                                    codigoAntes,
                                    codigoDespues,
                                    "Regla 4",
                                    pasada));
                                bloque.getInstrucciones().splice(i,1);
                                i--; 

                            }
                        }



                        }
                        
                    }
                }
            }
        });

    }

    /* 
    T3 = T2; 
    <instrucciones> 
    T2 = T3;    
    */
    Regla5(){

        function EsNumero(str) {
            if (typeof str != "string") return false 
            return !isNaN(str) && !isNaN(parseFloat(str)) 
        }

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            //Iteramos sobre cada bloque de instrucciones
            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                //Iteramos sobre cada instruccion del bloque
                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    //Verificamos que la instruccion sea una instruccion ASIGNACION_SIMPLE
                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_SIMPLE){

                        //Validamos que el temporal no este igualado a un numero
                        if(EsNumero(bloque.getInstrucciones()[i].getValor()) == false){

                            var Temporal1 = bloque.getInstrucciones()[i].getTemporal();
                            var Temporal2 = bloque.getInstrucciones()[i].getValor();

                            var posicionAsignacionSimple = i;
                            var inicio = i + 1;

                            for (var j=inicio; j < bloque.getInstrucciones().length; j++){

                                //buscamos por una instruccion de la forma a = b o de la forma b = a

                                if(bloque.getInstrucciones()[j].getTipo() == TipoInstruccion3D.ASIGNACION_SIMPLE &&
                               (((bloque.getInstrucciones()[j].getTemporal() == Temporal1) && (bloque.getInstrucciones()[j].getValor() == Temporal2)) || 
                               ((bloque.getInstrucciones()[j].getTemporal() == Temporal2) && (bloque.getInstrucciones()[j].getValor() == Temporal1)))){

                                var cambiaValor = false;

                                    for(var x=inicio; (x < bloque.getInstrucciones().length) && (x < j); x++){
                                    
                                        if((bloque.getInstrucciones()[x].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION) ||
                                        (bloque.getInstrucciones()[x].getTipo() == TipoInstruccion3D.ASIGNACION_SIMPLE) ||
                                        (bloque.getInstrucciones()[x].getTipo() == TipoInstruccion3D.ASIGNACION_ARREGLO) ||
                                        (bloque.getInstrucciones()[x].getTipo() == TipoInstruccion3D.ASIGNACION_METODO)){

                                            if((bloque.getInstrucciones()[x].getTemporal() == Temporal1) ||
                                            (bloque.getInstrucciones()[x].getTemporal() == Temporal2)){
                                                cambiaValor = true;
                                                break;
                                            }
                                        }                              
                                    }

                                    if(cambiaValor==false){

                                        var codigoAntes =  bloque.getInstrucciones()[i].getCodigo3D();
                                        codigoAntes += ` [instruciones] ` + bloque.getInstrucciones()[j].getCodigo3D();

                                        var codigoDespues = bloque.getInstrucciones()[i].getCodigo3D();
                                        codigoDespues += ` [instruciones] `;

                                        ListaOptimizaciones.push(new Optimizacion(
                                            bloque.getInstrucciones()[i].getLinea(),
                                            bloque.getInstrucciones()[i].getColumna(),
                                            "Bloques",
                                            codigoAntes,
                                            codigoDespues,
                                            "Regla 5",
                                            pasada));
                                        bloque.getInstrucciones().splice(j,1);
                                        j--; 
                                    }        
                               }
                            }
                        }
                    }
                }
            }
        });

    }

    // T1 = T1 + 0;
    Regla6(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.SUMA) &&
                        (bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando1() ||
                         bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "0" || bloque.getInstrucciones()[i].getOperando2() == "0")){

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                bloque.getInstrucciones()[i].getCodigo3D(),
                                "Se eliminó la instrucción.",
                                "Regla 6",
                                pasada));
                            bloque.getInstrucciones().splice(i,1);
                            i--;     
                        }
                    }    
                }
            }           
        });
    }  

    // T1 = T1 - 0;
    Regla7(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.RESTA) &&
                        (bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando1() ||
                         bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "0" || bloque.getInstrucciones()[i].getOperando2() == "0")){

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                bloque.getInstrucciones()[i].getCodigo3D(),
                                "Se eliminó la instrucción.",
                                "Regla 7",
                                pasada));
                            bloque.getInstrucciones().splice(i,1);
                            i--;     
                        }
                    }    
                }
            }           
        });
    } 

    // T1 = T1 * 1;
    Regla8(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.MULTIPLICACION) &&
                        (bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando1() ||
                         bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "1" || bloque.getInstrucciones()[i].getOperando2() == "1")){

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                bloque.getInstrucciones()[i].getCodigo3D(),
                                "Se eliminó la instrucción.",
                                "Regla 8",
                                pasada));
                            bloque.getInstrucciones().splice(i,1);
                            i--;     
                        }
                    }    
                }
            }           
        });
    } 

    // T1 = T1 / 1;
    Regla9(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.DIVISION) &&
                        (bloque.getInstrucciones()[i].getTemporal() == bloque.getInstrucciones()[i].getOperando1()) &&
                        (bloque.getInstrucciones()[i].getOperando2() == "1")){

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                bloque.getInstrucciones()[i].getCodigo3D(),
                                "Se eliminó la instrucción.",
                                "Regla 9",
                                pasada));
                            bloque.getInstrucciones().splice(i,1);
                            i--;     
                        }
                    }    
                }
            }           
        });
    } 

    // T1 = T2 + 0;
    Regla10(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.SUMA) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                         bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&              
                        (bloque.getInstrucciones()[i].getOperando1() == "0" || bloque.getInstrucciones()[i].getOperando2() == "0")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal();

                            if(bloque.getInstrucciones()[i].getOperando2() == "0"){
                                codigoAux += " = " + bloque.getInstrucciones()[i].getOperando1() + ";\n";
                            } else if (bloque.getInstrucciones()[i].getOperando1() == "0"){
                                codigoAux += " = " + bloque.getInstrucciones()[i].getOperando2() + ";\n";
                            }

                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 10",
                                pasada));
                               
                        }
                    }    
                }
            }           
        });
    }

    // T1 = T2 - 0;
    Regla11(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.RESTA) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                         bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando2() == "0")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal() +  " = " + bloque.getInstrucciones()[i].getOperando1() + ";\n";
                            
                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 11",
                                pasada));
                               
                        }
                    }    
                }
            }           
        });
    }

    // T1 = T2 * 1;
    Regla12(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.MULTIPLICACION) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                            bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "1" || bloque.getInstrucciones()[i].getOperando2() == "1")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal();

                            if(bloque.getInstrucciones()[i].getOperando2() == "1"){
                                codigoAux += " = " + bloque.getInstrucciones()[i].getOperando1() + ";\n";
                            } else if (bloque.getInstrucciones()[i].getOperando1() == "1"){
                                codigoAux += " = " + bloque.getInstrucciones()[i].getOperando2() + ";\n";
                            }

                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 12",
                                pasada));
                                
                        }
                    }    
                }
            }           
        });
    }

    // T1 = T2 / 1;
    Regla13(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.DIVISION) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                         bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando2() == "1")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal();
                            codigoAux += " = " + bloque.getInstrucciones()[i].getOperando1() + ";\n";
                            
                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 13",
                                pasada));
                                
                        }
                    }    
                }
            }           
        });
    }

    // T1 = T2 * 2;
    Regla14(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.MULTIPLICACION) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                         bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "2" || bloque.getInstrucciones()[i].getOperando2() == "2")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal();

                            if(bloque.getInstrucciones()[i].getOperando2() == "2"){
                                codigoAux += " = " + bloque.getInstrucciones()[i].getOperando1() + " + "
                                 + bloque.getInstrucciones()[i].getOperando1() + ";\n";
                            } else if (bloque.getInstrucciones()[i].getOperando1() == "2"){
                                codigoAux += " = " + bloque.getInstrucciones()[i].getOperando2() + " + "
                                 + bloque.getInstrucciones()[i].getOperando2() + ";\n";
                            }

                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 14",
                                pasada));
                                
                        }
                    }    
                }
            }           
        });
    }

    // T1 = T2 * 0;
    Regla15(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.MULTIPLICACION) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                            bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "0" || bloque.getInstrucciones()[i].getOperando2() == "0")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal()+" = 0;\n";


                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 15",
                                pasada));
                                
                        }
                    }    
                }
            }           
        });
    }

    // T1 = 0 / T2;
    Regla16(){

        var bloques = this.bloques;

        bloques.forEach(function (bloque){

            if(bloque.getTipo() == TipoBloque.VOID || bloque.getTipo() == TipoBloque.MAIN){

                for (var i=0; i < bloque.getInstrucciones().length;i++ ){

                    if(bloque.getInstrucciones()[i].getTipo() == TipoInstruccion3D.ASIGNACION_OPERACION){

                        if(( bloque.getInstrucciones()[i].getOperador() == Operador.DIVISION) &&
                        (bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando1() &&
                         bloque.getInstrucciones()[i].getTemporal() != bloque.getInstrucciones()[i].getOperando2()) &&
                        (bloque.getInstrucciones()[i].getOperando1() == "0")){

                            var codigoAntes = bloque.getInstrucciones()[i].getCodigo3D();
                            var codigoAux = bloque.getInstrucciones()[i].getTemporal()+" = 0;\n";
                            bloque.getInstrucciones()[i].setCodigo(codigoAux);

                            ListaOptimizaciones.push(new Optimizacion(
                                bloque.getInstrucciones()[i].getLinea(),
                                bloque.getInstrucciones()[i].getColumna(),
                                "Bloques",
                                codigoAntes,
                                codigoAux,
                                "Regla 16",
                                pasada));
                                
                        }
                    }    
                }
            }           
        });
    }


    GenerarResultado(){

        var bloques = this.bloques;
        var resultadoAux = 
`/* RESULTADO OPTIMIZADO (Desarrollado por Oscar Llamas :D) */
/*------HEADER------*/
        
`;
        
        bloques.forEach(function (bloque){
            resultadoAux += bloque.getCodigo3D();
        });

        return resultadoAux;

    }

}