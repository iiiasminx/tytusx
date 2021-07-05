export class XPATHC3D {
    contadorTemporal = 0;
    contadorEtiqueta = 0;
    heap = null;
    stack = null;
    codigo = null;
    ultimaEtiquedaSalida = ``;

    c3d = null;

    constructor() {
        this.contadorTemporal = 0;
        this.contadorEtiqueta = 0;
        this.heap = null;
        this.stack = null;
        this.codigo = Array<String>[];
        this.ultimaEtiquedaSalida = ``;
        this.c3d = Array<String>[];
    }

    getHeap(){
        return this.heap;
    }

    getStack(){
        return this.stack;
    }

    getTemporal(){ 
        this.contadorTemporal++;
        return this.contadorTemporal;
    }

    getEtiqueta(){
        return this.contadorEtiqueta;
    }

    crearTemporal() {
        this.contadorTemporal++;
        return `t${this.contadorTemporal}`;
    }
  
    crearEtiqueta() {
        this.contadorEtiqueta++;
        return `L${this.contadorEtiqueta}`;
    }

    getHP() {
        return `H = H + 1;\r\n`;
    }

    getXpath(resultado, temporal, heap, stack){
        this.codigo = resultado;
        this.contadorTemporal = temporal;
        this.heap = heap;
        this.stack = stack;
        this.c3d = this.guardarResultadoXpath(this.codigo);

        //console.log(this.c3d);
        return this.c3d;
    }

    guardarResultadoXpath(resultado){
        let cadena = ``;
        let tempInicio = this.crearTemporal();
        //let temp = this.crearTemporal();
        let lv = this.crearEtiqueta();
        let lf = this.crearEtiqueta();
        let hpInicio = 0;
        let spInicio = this.stack.lista.length;

        //Se inicia a guardar consulta
        cadena = `/* --- --- --- COMENZANDO XPATH --- --- --- */ \r\n`;
        cadena += `void Consulta() {\r\n`;
        cadena += `if (1 == 1) goto ${lv};\r\n`;
        cadena += `goto ${lf};\r\n`;
        cadena += `${lv}:\r\n`;
        cadena += `${tempInicio} = H;\r\n`;
        hpInicio = this.heap.hp;

        cadena += `heap[(int)H] = 225; //Guardando en heap "Inicio sentencia XPath" \r\n`;
        cadena += this.getHP();
        this.heap.lista.push(225);
        this.heap.hp++;


        for (let index = 0; index < resultado.length; index++) {
            cadena += `heap[(int)H] = ${resultado[index].charCodeAt(0)}; //Guardando en heap ${resultado[index]} \r\n`;
            cadena += this.getHP();
            this.heap.lista.push(resultado[index].charCodeAt(0));
            this.heap.hp++;
        }
        cadena += `heap[(int)H] = -1; //Guardando en heap, posición -1 \r\n`;
        cadena += this.getHP();
        this.heap.lista.push(-1);
        this.heap.hp++;

        cadena += `stack[(int)${spInicio}] = ${tempInicio};\r\n`;
        this.stack.lista[spInicio] = hpInicio;

        

        cadena += `${lf}:\r\n`;
        cadena += `return;\r\n`;

        cadena += `}\r\n`;

        let imprimir = this.imprimirXpath(spInicio);

        cadena += imprimir;
        

        console.log('Contenido del heap en XPath =', this.heap.lista)
        console.log('Contenido del stack en Xpath =', this.stack.lista)

        return cadena;

    }

    imprimirXpath(spInicio){
        let cadena = ``;
        let temp = this.crearTemporal();
        let temp1 = this.crearTemporal();
        let lv = this.crearEtiqueta();
        let lf = this.crearEtiqueta();
        
        let formateador = "\"%c\", (char)";
        
        //Se inicia a imprimir Consulta
        cadena = `void Imprimir() {\r\n`;

        cadena += `${temp} = stack[(int)${spInicio}];\r\n`;
        cadena += `${temp1} = heap[(int)${temp}];\r\n`;

        cadena += `if (${temp1} == 225) goto ${lv};\r\n`;
        cadena += `goto ${lf};\r\n`;
        cadena += `${lv}:\r\n`;

        temp = this.crearTemporal();
        temp1 = this.crearTemporal();
        let temp2 = this.crearTemporal();

        let lv1 = this.crearEtiqueta();
        let lf1 = this.crearEtiqueta();
        let ls = this.crearEtiqueta();

        cadena += `${temp} = stack[(int)${spInicio}];\r\n`;
        cadena += `${ls}:\r\n`;
        cadena += `${temp1} = ${temp} + 1;\r\n`;
        cadena += `${temp2} = heap[(int)${temp1}];\r\n`;
        cadena += `if (${temp2} != -1) goto ${lv1};\r\n`;
        cadena += `goto ${lf1};\r\n`;
        cadena += `${lv1}:\r\n`;
        
        cadena += `printf(${formateador}${temp2});\r\n`;
        cadena += `${temp} = ${temp1};\r\n`;

        cadena += `goto ${ls};\r\n`;

        cadena += `${lf1}:\r\n`;
        cadena += `${lf}:\r\n`;
        cadena += `return;\r\n`;

        cadena += `}\r\n`;

        return cadena;
    }

}