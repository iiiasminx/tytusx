// BOTONES PARA ANALIZAR
//Analizar
let botonCargar = document.getElementById("btnCargar");
let botonCargar2 = document.getElementById("btnCargar2");
let editorXPATH = (document.getElementById("editor").value = "/catalog");
let editorXML = document.getElementById("consolaJS");
let indiceAux=0;
let tipoAnalizadorXML = "";
let tablaSimbolos = [];
let tablaSimbolosVariables = [];
let listaTokens=[];
let parserXML;
let parserXPATHDER;
let globalencod;
let codificador = document.getElementById("codencod");
let optimizador;

//botones de creacion de ejemplos
let btnEjemplo1 = document.getElementById("btnEjemplo1");
let btnEjemplo2 = document.getElementById("btnEjemplo2");
let btnEjemplo3 = document.getElementById("btnEjemplo3");
let btnEjemplo4 = document.getElementById("btnEjemplo4");
let btnEjemplo5 = document.getElementById("btnEjemplo5");
let btnEjemplo6 = document.getElementById("btnEjemplo6");
let btnEjemplo7 = document.getElementById("btnEjemplo7");
let btnEjemplo8 = document.getElementById("btnEjemplo8");
let btnEjemplo9 = document.getElementById("btnEjemplo9");
let btnEjemplo10 = document.getElementById("btnEjemplo10");

//botones de xquery por la izquierda
let btnCargarxquery = document.getElementById("btnCargarxquery");
let parserXQUERY;
let editorXQUERY = document.getElementById("consolaXQUERY");

//consola de xquery para 3d y GDA
let editorXGDA = document.getElementById("consola3D");

//variables para boton a la derecha de xquery
let btnCargarxqueryder = document.getElementById("btnCargarxqueryder");
let parserXQUERYder;

let textoEntrada = `<?xml version="1.0" encoding="ISO-8859-1"?>
<catalog>
   <book id="bk101">
      <author>GÃ¡mbardellÃ¤, MÃ¡tthew</author>
      <title>XML Developer&apos;s Guide</title>
      <genre>Computer</genre>
      <price>44.95</price>
      <publish_date>2000-10-01</publish_date>
      <description>An in-depth look at creating applications 
      with XML.</description>
   </book>
   <book id="bk102">
      <author>Ralls, Kim</author>
      <title>Midnight Rain</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-12-16</publish_date>
      <description>A former architect battles corporate zombies, 
      an evil sorceress, and her own childhood to become queen 
      of the world.</description>
   </book>
   <book id="bk103">
      <author>Corets, Eva</author>
      <title>Maeve Ascendant</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-11-17</publish_date>
      <description>After the collapse of a nanotechnology 
      society in England, the young survivors lay the 
      foundation for a new society.</description>
   </book>
   <book id="bk104">
      <author>Corets, Eva</author>
      <title>Oberon's Legacy</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2001-03-10</publish_date>
      <description>In post-apocalypse England, the mysterious 
      agent known only as Oberon helps to create a new life 
      for the inhabitants of London. Sequel to Maeve 
      Ascendant.</description>
   </book>
   <book id="bk105">
      <author>Corets, Eva</author>
      <title>The Sundered Grail</title>
      <genre top="cali">Fantasy</genre>
      <price>5.95</price>
      <publish_date>2001-09-10</publish_date>
      <description>The two daughters of Maeve, half-sisters, 
      battle one another for control of England. Sequel to 
      Oberon's Legacy.</description>
   </book>
   <book id="bk106">
      <author>Randall, Cynthia</author>
      <title>Lover Birds</title>
      <genre top="cali">Romance</genre>
      <price>4.95</price>
      <publish_date>2000-09-02</publish_date>
      <description>When Carla meets Paul at an ornithology 
      conference, tempers fly as feathers get ruffled.</description>
   </book>
   <book id="bk107">
      <author>Thurman, Paula</author>
      <title>Splish Splash</title>
      <genre>Romance</genre>
      <price>4.95</price>
      <publish_date>2000-11-02</publish_date>
      <description>A deep sea diver finds true love twenty 
      thousand leagues beneath the sea.</description>
   </book>
   <book id="bk108">
      <author>Knorr, Stefan</author>
      <title>Creepy Crawlies</title>
      <genre>Horror</genre>
      <price>4.95</price>
      <publish_date>2000-12-06</publish_date>
      <description>An anthology of horror stories about roaches,
      centipedes, scorpions  and other insects.</description>
   </book>
   <book id="bk109">
      <author>Kress, Peter</author>
      <title>Paradox Lost</title>
      <genre>Science Fiction</genre>
      <price>6.95</price>
      <publish_date>2000-11-02</publish_date>
      <description>After an inadvertant trip through a Heisenberg
      Uncertainty Device, James Salway discovers the problems 
      of being quantum.</description>
   </book>
   <book id="bk110">
      <author>O'Brien, Tim</author>
      <title>Microsoft .NET: The Programming Bible</title>
      <genre top="cali">Computer</genre>
      <price>36.95</price>
      <publish_date>2000-12-09</publish_date>
      <description>Microsoft's .NET initiative is explored in 
      detail in this deep programmer's reference.</description>
   </book>
   <book id="bk111">
      <author>O'Brien, Tim</author>
      <title>MSXML3: A Comprehensive Guide</title>
      <genre>Computer</genre>
      <price>36.95</price>
      <publish_date>2000-12-01</publish_date>
      <description>The Microsoft MSXML3 parser is covered in 
      detail, with attention to XML DOM interfaces, XSLT processing, 
      SAX and more.</description>
   </book>
   <book id="bk112">
      <author>Galos, Mike</author>
      <title>Visual Studio 7: A Comprehensive Guide</title>
      <genre>Computer</genre>
      <price>49.95</price>
      <publish_date cali="hola">2001-04-16</publish_date>
      <description>Microsoft Visual Studio 7 is explored in depth,
      looking at how Visual Basic, Visual C++, C#, and ASP+ are 
      integrated into a comprehensive development 
      environment.</description>
   </book>
</catalog>
`

let textoPrueba = `<?xml version="1.0" encoding="ISO-8859-1"?>
<catalog>
   <book id="bk101">
      <author>GÃ¡mbardellÃ¤, MÃ¡tthew</author>
      <title>XML Developer&apos;s Guide</title>
      <genre>Computer</genre>
      <price>44.95</price>
      <publish_date>2000-10-01</publish_date>
      <description>An in-depth look at creating applications 
      with XML.</description>
   </book>
   <book id="bk102">
      <author>Ralls, Kim</author>
      <title>Midnight Rain</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-12-16</publish_date>
      <description>A former architect battles corporate zombies, 
      an evil sorceress, and her own childhood to become queen 
      of the world.</description>
   </book>
   <book id="bk103">
      <author>Corets, Eva</author>
      <title>Maeve Ascendant</title>
      <genre>Fantasy</genre>
      <price>5.95</price>
      <publish_date>2000-11-17</publish_date>
      <description>After the collapse of a nanotechnology 
      society in England, the young survivors lay the 
      foundation for a new society.</description>
   </book>
</catalog>
`

let XQuery = `for $x in /catalog/book
return if ($x/@id="bk101")
then {data($x)}
`

let XQueryflwr = `for $x in /catalog/book
where $x/price<60
order by $x/price
return $x/price
`
let XQueryfrt = `	(:estoesun comentario:)
for $x in  /catalog/book(:estoesun comentario:)
(:estoesun comentario:)
return $x/title(:estoesun comentario:)
`

let XQueryfrtes = `for $x in /catalog/book
return if ($x/@id="bk102")
then <LIBRO112>{data($x/title)}</LIBRO112>
else <NO>{data($x/title)}</NO>	
`


let XQueryxmlacke = `<hola>
<m>2</m>
<n>2</n>
</hola>	
`

let XQueryAcke = `declare function local:ackerman($m as xs:integer,$n as xs:integer) as xs:integer
{
if ($m = 0) then $n+1
else if ($m > 0 and $n=0) then local:ackerman($m - 1, 1)
else local:ackerman($m - 1, local:ackerman($m, $n -1))
};

local:ackerman(/hola/m,/hola/n)
`

let XQueryxmlfact = `<hola>
<m>6</m>
</hola>	
`

let XQueryFact = `declare function local:factorial($integer as xs:integer) as xs:double
{
if ($integer gt 1) then $integer * local:factorial($integer - 1) else 1};

local:factorial(/hola/m)
`
let XQueryFibo = `declare function local:fibo($num as xs:integer) as xs:integer {
  if($num eq 0) then 0
  else if ($num eq 1) then 1
  else (local:fibo($num - 1 ) + local:fibo($num - 2) )
  };
  local:fibo(/hola/m)
`

let XQueryFNat = `for $x in /catalog/book
return if ($x/@id="bk101")
then {substring($x,0)}
`

let XQueryfrtot = `for $x in (1 to 5)
return <test>{$x}</test>
`
let XQueryfrtat = `for $x at $i in doc("books.xml")/catalog/book/title
return <book>{$i}_ {data($x)}</book>
`


let EJEMGDA = `//ENTRADA PARA ARBOL GDA

// Regla 5
t1 = b;
t8 = 4;
t2 = t3 + 1;
b = t1;
t5 = t9;
t9 = t5;

//Regla 6, 7, 8, 9
t5 = t5 + 0;
t5 = t5 % 0;
t7 = t7 - 0;
t9 = t9 * 1 ;
t2 = t3 + 3;
t8 = t8 / 1;

//Regla 10 - 13
T1 = T2 + 0;
T3 = T4 - 0;
T5 = T6 * 1;
T7 = T8 / 1;

//Regla 14 - 16
T9 = T10 * 2;
T11 = T12 * 0;
T13 = 0 / T14;
`



editorXQUERY.value=XQuery;

editorXML.value = textoEntrada;
let consolaC3D = document.getElementById('consola3D');
let consolaC3DOptimizada = document.getElementById('consola3DOptimizada');



// =========================================
//EJECUCION DE CODIGO PARA MOSTRAR EJEMPLOS
// =========================================


// =========================================
// CONSOLAS DENTRO DE LA PANTALLA PRINCIPAL
//          XML =>  consolaJS editorXML
//          XPATH => editor  editorXPATH
//          XQUERY => consolaXQUERY  editorXQUERY
//
//          SALIDA => consolaPython 
//          SALIDA3D => consolaC3D
//          SALIDA OP-3D => consola3DOptimizada    consolaC3DOptimizada
// =========================================

// Boton de ejemplo para realizar el GDA
btnEjemplo1.addEventListener("click", () => {
//  console.log("Presion del boton para el ejemplo 1");
    editorXML.value = " ";
    editorXPATH.value = " ";
    editorXQUERY.value = " ";
    consolaC3D.value = " ";
    consolaC3DOptimizada.value = " ";
    consolaC3D.value = EJEMGDA;
})

// Boton de ejemplo para verificar un FLOWR
btnEjemplo2.addEventListener("click", () => {
  //  console.log("Presion del boton para el ejemplo 1");
    editorXML.value = " ";
    editorXPATH.value = " ";
    editorXQUERY.value = " ";
    consolaC3D.value = " ";
    consolaC3DOptimizada.value = " ";
    editorXML.value = textoPrueba;
    editorXQUERY.value = XQueryflwr;
  })
  
  // Boton de ejemplo para verificar un FLOWR
btnEjemplo3.addEventListener("click", () => {
  //  console.log("Presion del boton para el ejemplo 1");
    editorXML.value = " ";
    editorXPATH.value = " ";
    editorXQUERY.value = " ";
    consolaC3D.value = " ";
    consolaC3DOptimizada.value = " ";
    editorXML.value = textoPrueba;
    editorXQUERY.value = XQueryfrt;
  })

  // Boton de ejemplo para verificar un FLOWR
btnEjemplo4.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = textoPrueba;
      editorXQUERY.value = XQueryfrtes;
    })  

  // Boton de ejemplo para verificar un FLOWR
btnEjemplo5.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = XQueryxmlacke;
      editorXQUERY.value = XQueryAcke;
    })     

  // Boton de ejemplo para verificar un FLOWR
  btnEjemplo6.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = XQueryxmlfact;
      editorXQUERY.value = XQueryFact;
    })   

  // Boton de ejemplo para verificar un FLOWR
  btnEjemplo7.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = XQueryxmlfact;
      editorXQUERY.value = XQueryFibo;
    }) 
    
  // Boton de ejemplo para verificar un FLOWR
  btnEjemplo8.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = textoPrueba;
      editorXQUERY.value = XQueryFNat;
    }) 
    
  // Boton de ejemplo para verificar un FLOWR
  btnEjemplo9.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = textoPrueba;
      editorXQUERY.value = XQueryfrtot;
    }) 
  // Boton de ejemplo para verificar un FLOWR
  btnEjemplo10.addEventListener("click", () => {
    //  console.log("Presion del boton para el ejemplo 1");
      editorXML.value = " ";
      editorXPATH.value = " ";
      editorXQUERY.value = " ";
      consolaC3D.value = " ";
      consolaC3DOptimizada.value = " ";
      editorXML.value = textoPrueba;
      editorXQUERY.value = XQueryfrtat;
    })     
    
// ======================================
//BOTON DE XML DESCENDENTE
// ======================================


// Analizar la entrada XML al hacer CLICK al boton
botonCargar.addEventListener("click", () => {
    alert("Ejecutando XML Descendente");

    tipoAnalizadorXML = "Descendente";

    // Analizador XML por la izquierda
    parserXML = xmlDerecha.parse(editorXML.value);

    console.log("EL ANALIZADOR REGRESA");
    console.log(parserXML);
    console.log("tipo de encoding: " + parserXML.tipoencoding);    

    codificador.innerHTML = parserXML.tipoencoding;
    globalencod =parserXML.tipoencoding;
    //console.log(consulta_xml.parse("<price>5.95</price>"));

    // Se genera la Tabla de Simbolos
    tablaSimbolos = new TablaSimbolos(parserXML.json);
    tablaSimbolos = tablaSimbolos.generarTabla();
    
})

// ======================================
// BOTON DE XML ASCENDENTE
// ======================================

botonCargar2.addEventListener("click", () => {
  alert("Ejecutando XML Ascendente");

  tipoAnalizadorXML = "Ascendente";

  // Analizador XML por la izquierda
  parserXML = analizador_izq.parse(editorXML.value);

  console.log("EL ANALIZADOR REGRESA");
  console.log(parserXML);
  console.log("tipo de encoding: " + parserXML.tipoencoding);    

  codificador.innerHTML = parserXML.tipoencoding;
  globalencod =parserXML.tipoencoding;

  // Se genera la Tabla de Simbolos
  tablaSimbolos = new TablaSimbolos(parserXML.json);
  tablaSimbolos = tablaSimbolos.generarTabla();
  
})


// ======================================
//BOTON DE XPATH ARBOL AST
// ======================================


document.getElementById("ast").addEventListener("click", () => {
    let AST_xPath=analizadorizq_xpath.parse(document.getElementById("editor").value);
  
    // Se activa el modal
    activarModal();

    // Generar el arbol con Treant JS
    graficarArbol(AST_xPath);
  
})

// ======================================
//BOTON DE XPATH ARBOL CST
// ======================================


document.getElementById("btnReporteXPATHcst").addEventListener("click", () => {
  let AST_xPath2=analizador_xpath.parse(document.getElementById("editor").value);

  // Se activa el modal
  activarModal();

  // Generar el arbol con Treant JS
  graficarArbol(AST_xPath2);

})

// ======================================
// MODAL XML
// ======================================
let btnReporteXML = document.getElementById('btnReporteXML');
let btnReporteXMLCST= document.getElementById('btnReporteXMLcst');
let btnReporteGram = document.getElementById('btnReporteXGRAM');
let btnReporteXMLErrores = document.getElementById('btnReporteXMLErrores');
let btnReporteXQUERYTB = document.getElementById('btnReporteXQUERYTB');

let tablaTitulo = document.getElementById('EpicModalLabel');
let tablaTituloCST = document.getElementById('EpicModalLabelAST');
let tabla = document.getElementById('tablaSimbolos');
let contenidoModal2 = document.getElementById('modal2Content');

let tablaCabeceras = document.getElementById('tablaCabeceras');



// REPORTE TABLA DE SIMBOLOS
btnReporteXML.addEventListener("click", () => {
  tablaTitulo.innerHTML = 'Reporte Tabla Simbolos XML ' + tipoAnalizadorXML;
  tabla.innerHTML = "";

  
  // Agregar las cabeceras
  tablaCabeceras.innerHTML = `
  <th scope="col">Nombre</th>
  <th scope="col">Tipo</th>
  <th scope="col">Ambito</th>
  <th scope="col">Fila</th>
  <th scope="col">Columna</th>
  <th scope="col">Valor</th>
  <th scope="col">Indice</th>
  `;


  // Agregar contenido a la tabla
  tablaSimbolos.forEach(simbolo => {
    tabla.innerHTML += `
      <tr>
        <td>${simbolo.nombre}</td>
        <td>${simbolo.tipo}</td>
        <td>${simbolo.ambito}</td>
        <td>${simbolo.fila}</td>
        <td>${simbolo.columna}</td>
        <td>${simbolo.valor}</td>
        <td>${simbolo.indice === -1 ? '' : simbolo.indice}</td>
      </tr>
    `;
  });
});

// ======================================
//BOTON DE XML DE REPORTE DE ARBOL CST
// ======================================

// REPORTE DEL CST
btnReporteXMLCST.addEventListener("click", () => {

  // Se activa el modal
  activarModal();

  // Generar el arbol con Treant JS
  graficarArbol(parserXML.json.nodo);

});

// ======================================
//BOTON DE REPORTE DE GRAMATICA
// ======================================

// REPORTE DE LA GRAMATICA
btnReporteGram.addEventListener('click', () => {
  tablaTituloCST.innerHTML = 'Reporte Gramatical XML ' + tipoAnalizadorXML;

  contenidoModal2.innerHTML = `<textarea style="width: 38%; height: 700px; resize: none;">${parserXML.gramatical}</textarea>
  <textarea style="width: 60%; height: 700px; resize: none;">${parserXML.gramaticapp}</textarea>
  `;
});

// ======================================
//BOTON DE REPORTE DE ERRORES
// ======================================

//REPORTE DE ERRORES
btnReporteXMLErrores.addEventListener("click", () => {
  tablaTitulo.innerHTML = 'Reporte Errores XML ' + tipoAnalizadorXML;
  tabla.innerHTML = "";

  // Lista de errores
  listaErrores = parserXML.listaErrores;

  console.log("ESTA ES LA LISTA DE ERRORES");
  console.log(listaErrores);

  // Agregar las cabeceras
  tablaCabeceras.innerHTML = `
  <th scope="col">Analizador</th>
  <th scope="col">Tipo</th>
  <th scope="col">Descripcion</th>
  <th scope="col">Linea</th>
  <th scope="col">Columna</th>
  `;

  // Agregar contenido a la tabla
  listaErrores.forEach(error => {
    tabla.innerHTML += `
      <tr>
        <td>${error.analizador}</td>
        <td>${error.tipo}</td>
        <td>${error.descripcion}</td>
        <td>${error.linea}</td>
        <td>${error.columna}</td>
      </tr>
    `;
  });
});



/**
 * ******************************************************
 * XPATH
 * ******************************************************
 */

document.getElementById("btn_EjecutarDer").onclick = this.analizar_xpath;
document.getElementById("btn_EjecutarIzq").onclick = this.analizar_xpath_izq;

function analizar_xpath_izq(){
  listaTokens = [];
  listaErrores = [];

  

  console.log("Analizando XPATH...");
 
  let AST_xPath=analizador_xpath_AST.parse(document.getElementById("editor").value);//Decendente

  contenidoModal2.innerHTML = `
  <div style="background: #eee; width: 100%; max-width: 100%; max-height: 700px; overflow: hidden;">
    <div id="graph" style="width: 100%;"></div>
  </div>
  `;

  //generarAST(AST_xPathizq);
  console.log("Interpretando");
  interpretar(AST_xPath,parserXML.json);
}


function analizar_xpath() {
  listaTokens = [];
  listaErrores = [];
  //console.log("Analizando XML ...");
  //let AST_xml=xmlDerecha.parse(editorXML.value);//Decendente
  

  console.log("Analizando XPATH...");
  
  console.log("Analizando XPATH por la derecha");

  
  let AST_xPath=analizador_xpath_AST.parse(document.getElementById("editor").value);//Decendente
  console.log(AST_xPath);

  //GENERANDO ARBOL AST
  contenidoModal2.innerHTML = `
  <div style="background: #eee; width: 100%; max-width: 100%; max-height: 700px; overflow: hidden;">
    <div id="graph" style="width: 100%;"></div>
  </div>
  `;
  
  //generarAST(AST_xPath);
  

  //generarAST(AST_xPath);
  console.log("Interpretando");
  interpretar(AST_xPath,parserXML.json);
  //interpretar(AST_xPath,AST_xml);
  //imprimiConsola("&lt;  &amp es un caracter especial  y aqui &quot;  un txt &quot; y un apostrofe &apos; &gt;");
 // imprimiConsola(parseCadena.parse("&lt;  &amp es un caracter especial  y aqui &quot;  un txt &quot; y un apostrofe &apos; &gt;"));
  
}
/**
 * ******************************************************
 * CONSOLA 3D
 * ******************************************************
 */
let boton3D = document.getElementById('btn3d');
    

boton3D.addEventListener("click", () => {

  // Mostrar el C3D Traducido
  if (tablaSimbolos.length > 0) {
    consolaC3D.value = traductorC3D.obtenerCodigo();
  }

})

/**
 * ******************************************************
 * XQUERY
 * ******************************************************
 */
 btnCargarxquery.addEventListener("click", () => {
  tablaSimbolosVariables = new TablaSimbolos();

  console.log("Analizando XQUERY ")
  tipoAnalizadorXML = "ASCENDENTE";

  // Analizador XQUERY por la izquierda
  parserXQUERY = analizador_xqueryizq.parse(editorXQUERY.value);

  console.log("EL ANALIZADOR REGRESA");
  console.log(listaErrores);
  globalencod =parserXML.tipoencoding;
  ejecutarXQuery(parserXQUERY,parserXML.json);
  tablaSimbolosVariables = tablaSimbolosVariables.generarTabla2();

})
/*
btnCargarxqueryder.addEventListener("click", () => {
  console.log("Analizando XQUERY ")
  tipoAnalizadorXML = "DESCENDENTE";

  // Analizador XQUERY por la DERECHA
  parserXQUERYder = analizador_xqueryder.parse(editorXQUERY.value);

  console.log("EL ANALIZADOR REGRESA");
  console.log(parserXQUERYder);


})*/
document.getElementById("btnReporteXQUERYcst").addEventListener("click", () => {
  let AST_xQuery=analizador_xquery_ast.parse(editorXQUERY.value);

  // Se activa el modal
  activarModal();

  // Generar el arbol con Treant JS
  graficarArbol(AST_xQuery);

})

document.getElementById("btnReporteXQUERYgda").addEventListener("click", () => {
  let gda_xquery = gdagram.parse(editorXGDA.value);

  // Se activa el modal
  activarModal();

  // Generar el arbol con Treant JS
  graficarArbol(gda_xquery);

})



let botonCargar3 = document.getElementById("btnCargar3");
botonCargar3.addEventListener("click", () => {
  alert("Vaciaste el consola");
  editorXML.value = " ";
})




btnReporteXQUERYTB.addEventListener("click", () => {
  tablaTitulo.innerHTML = 'Reporte Tabla Simbolos XQUERY ' + tipoAnalizadorXML;
  tabla.innerHTML = "";

  
  // Agregar las cabeceras
  tablaCabeceras.innerHTML = `
  <th scope="col">Nombre</th>
  <th scope="col">Tipo</th>
  <th scope="col">Ambito</th>
  <th scope="col">Fila</th>
  <th scope="col">Columna</th>
  <th scope="col">Valor</th>
  <th scope="col">Indice</th>
  `;


  // Agregar contenido a la tabla
  tablaSimbolosVariables.forEach(simbolo => {
    tabla.innerHTML += `
      <tr>
        <td>${simbolo.nombre}</td>
        <td>${simbolo.tipo}</td>
        <td>${simbolo.ambito}</td>
        <td>${simbolo.fila}</td>
        <td>${simbolo.columna}</td>
        <td>${simbolo.valor}</td>
        <td>${simbolo.indice === -1 ? '' : simbolo.indice}</td>
      </tr>
    `;
  });
});


    // Original
    function encode_utf8(s) {
      return unescape(encodeURIComponent(s));
    }

    function decode_utf8(s) {
      return decodeURIComponent(escape(s));
    }

    function codificarascci(t) {
      var caracteres = [];
      valor = t;
      for (var i = 0; i < valor.length; i++) {
        caracteres[i] = valor.charAt(i).charCodeAt(0);
      }
      return caracteres.toString().replaceAll(",",' ');
    }

function imprimiConsola(txt){
  console.log("imprimir en consola");
  console.log(globalencod);  
  //console.log(encode_utf8(txt)+"\n");
  // asi se imprime la salida
  //  document.getElementById("consolaPython").value=txt+"\n";
    if(globalencod.includes('ISO-8859-1')){
      console.log("entre en iso");
      document.getElementById("consolaPython").value=encode_utf8(txt)+"\n";
    }
//IMPLEMENTACION DEL CODIGO ASCII
/*    else if(globalencod.includes('ASCII')){
      console.log("entre en ASCII");
      document.getElementById("consolaPython").value = codificarascci(txt)+"\n";
    }
*/
    else{
      console.log("entre en utf");
      document.getElementById("consolaPython").value=txt+"\n";
    }
  }


// FUNCION PARA COPIAR
let copyButton = document.getElementById('copyBtn');
let clearButton = document.getElementById('clearBtn');

let copyButton2 = document.getElementById('copyBtn2');

copyButton2.addEventListener('click', () => {

  if (consola3DOptimizada.value.trim() !== '') {
    alert("Copiado");
    consola3DOptimizada.select();
    document.execCommand('Codigo Copiado');
  } else {
    alert("No hay codigo");
  }

});


copyButton.addEventListener('click', () => {

  if (consolaC3D.value.trim() !== '') {
    alert("Copiado");
    consolaC3D.select();
    document.execCommand('Codigo Copiado');
  } else {
    alert("No hay codigo");
  }

});

clearButton.addEventListener('click', () => {
  consolaC3D.value = '';
  consolaC3DOptimizada.value = '';
})


// Optimizacion de Codigo de 3D
let optimizarButton = document.getElementById('optimizarBtn');
let optimizarReporteButton = document.getElementById("btnReporteOptimizar");


optimizarButton.addEventListener("click", () => {

  if (consolaC3D.value.trim() !== '') {

    alert('Optimizando');
    optimizador = new Optimizacion(consolaC3D.value);
    optimizador.regla1();
    optimizador.regla2();
    optimizador.regla5();
    optimizador.regla6_7_8_9();
    optimizador.regla3_4();
    consolaC3DOptimizada.value = optimizador.obtenerOptimizacion();

  } else {
    alert('No hay codigo en 3Direcciones para optimizar');
  }

});


optimizarReporteButton.addEventListener("click", () => {

  tablaTitulo.innerHTML = 'Reporte Optimizaciones';
  tabla.innerHTML = "";

  if (optimizador) {
    let bitacoraOptimizacion = optimizador.bitacoraOptimizaciones;

    // Agregar las cabeceras
    tablaCabeceras.innerHTML = `
    <th scope="col">Linea</th>
    <th scope="col">Regla</th>
    <th scope="col">Instruccion</th>
    <th scope="col">Cambio</th>
    `;

    console.log(bitacoraOptimizacion);

    // Agregar contenido a la tabla
    bitacoraOptimizacion.forEach(optimizacion => {
      tabla.innerHTML += `
        <tr>
          <td>${optimizacion.linea}</td>
          <td>${optimizacion.regla}</td>
          <td>${optimizacion.instruccion}</td>
          <td>${optimizacion.cambio}</td>
        </tr>
      `;
    });
    }

});

