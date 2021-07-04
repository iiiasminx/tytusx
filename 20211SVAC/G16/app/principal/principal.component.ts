import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Instruccion } from './../Clases/Interfaces/Instruccion';
const parser = require('../../Gramaticas/gramaticaXML')
const parserDesc = require('../../Gramaticas/Analyzer')
const parserXpathAsc = require('../../Gramaticas/XPathA')
const parserXpathDesc = require('../../Gramaticas/XPathDESC')
const errores = require('../Clases/Models/ListaError.js')
const Estado = require('../Clases/Models/Estado.js')
const ListaGramatica = require('../Clases/Models/ListaGramatica.js')
const parserXQuery = require("../../Gramaticas/xquery")
import { Recorrer } from '../Clases/Models/Recorrer'
const tradXML = require('../Clases/Models/TraductorXML.js')
const Listita = require("../Clases/Hijos/Listita.js")
const TablaSim = require('../Clases/XPath/TablaSimbolosXP.js')
const parserOp = require('../../Gramaticas/Optimizar.js')
const Optimizador = require('../Clases/Models/Optimizador.js')

import Crear from '../Clases/AST/CrearTS'
import { Router } from '@angular/router';
import Entorno from '../Clases/AST/Entorno';
const TableSimbols = require("../Clases/AST/TSXQuery.js");
import { Formato } from '../Clases/Models/Formato'

const defaults = {
  xml:
    '',
};
const defaults2 = {
  xquery:
    '',
};

const defaults3 = {
  go:
    '',
};

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  encoding
  nodoraiz: any;
  tablaSimbolo: Crear = null;
  salida: string = ""
  errores: string = ""
  public xpath: string = "";
  title = 'frontend';
  readOnly = false;
  tipo: string = ""
  archivo: string = "";
  xquery: string = "";
  traduccion: string = ""
  //USO PARA ABSTRACTAS
  lista = [];
  entornoact = []
  padre = []
  //-----------------
  mode: keyof typeof defaults = 'xml';
  options = {
    lineNumbers: true,
    mode: this.mode,
  };
  defaults = defaults;


  mode2: keyof typeof defaults2 = 'xquery';
  options2 = {
    lineNumbers: true,
    mode: this.mode2,
  };

  defaults2 = defaults2;

  mode3: keyof typeof defaults3 = 'go';
  options3 = {
    lineNumbers: true,
    mode: this.mode2,
  };
  defaults3 = defaults3;

  contador: number;
  array: any[];
  constructor(private router: Router, private toastr: ToastrService) {
    this.contador = 0;
    this.array = []
    this.array.push({
      name: "nuevo",
      indice: this.contador,
      id: "nuevo" + this.contador,
      estado: "true",
      tab: "nuevo" + this.contador + "-tab",
      active: "nav-link active text-uppercase",
      active2: "tab-pane fade show active",
      texto: "text" + this.contador,
      contenido: ""

    });


  }

  ngOnInit(): void {
    this.tipo = localStorage.getItem("TIPO")
    Estado.Estado.Cambio(2)
    TablaSim.TablaSimbolosXP.clear()
  }

  nuevo() {
    this.contador = this.contador + 1;
    this.array.push({
      name: "nuevo",
      indice: this.contador,
      id: "nuevo" + this.contador,
      estado: "false",
      tab: "nuevo" + this.contador + "-tab",
      active: "nav-link text-uppercase",
      active2: "tab-pane fade",
      texto: "text" + this.contador,
      contenido: ""
    })
  }


  compilar() {
    ListaGramatica.ReporteGramatical.clear()
    errores.Errores.clear();
    let cadena = this.archivo;
    try {
      Estado.Estado.Cambio(1)
      const CST = parser.parse(cadena);
      this.GenerarTablaSimbolos(CST.list)
      Estado.Estado.Cambio(2)
      this.nodoraiz = parser.parse(cadena);
      localStorage.setItem("CSTA", JSON.stringify(this.nodoraiz.list))
      localStorage.setItem("encoding", CST.encoding)
      console.log(CST.encoding)
      localStorage.setItem("TIPO", "Ascendente")
    } catch (Error) {
      this.toastr.error("No se ha podido generar correctamente el análisis")
    }
  }

  Xmldesc() {
    ListaGramatica.ReporteGramatical.clear()
    errores.Errores.clear();

    try {
      Estado.Estado.Cambio(1)
      const CST = parserDesc.parse(this.archivo);
      this.GenerarTablaSimbolos(CST.list)
      Estado.Estado.Cambio(2)
      this.nodoraiz = parserDesc.parse(this.archivo);
      localStorage.setItem("CSTA", JSON.stringify(this.nodoraiz.list))
      localStorage.setItem("TIPO", "Descendente")
    } catch (Error) {
      this.toastr.error("No se ha podido generar correctamente el análisis")
    }
  }


  xpathASC() {
    TablaSim.TablaSimbolosXP.clear()
    let x = parserXpathAsc.parse(this.xpath);
    this.RecorrerAbstractas();
  }

  RecorrerAbstractas() {
    this.encoding = localStorage.getItem("encoding");
    this.padre = []
    this.lista = []
    if (TablaSim.TablaSimbolosXP.getSimbolos().length > 0) {
      for (let i = 0; i < TablaSim.TablaSimbolosXP.getSimbolos().length; i++) {
        this.lista.push(TablaSim.TablaSimbolosXP.getSimbolos()[i])
      }
    }
    this.padre = JSON.parse(localStorage.getItem("tablaSimbolo"))
    this.padre = this.padre[0]
    localStorage.setItem("dad", JSON.stringify(this.padre))
    this.lista.forEach(element => {
      this.padre = JSON.parse(localStorage.getItem("dad"))
      element.execute(this.padre);
    });
    try {
      this.padre = JSON.parse(localStorage.getItem("dad"))
      if(this.padre.length!=undefined){
        const formato = new Formato(this.padre, this.encoding);
        var y = formato.darFormato()
        //console.log(y)
        this.salida=y
      }else{
        let lista =[]
        lista.push(this.padre)
        const formato = new Formato(lista, this.encoding);
        var y = formato.darFormato()
        //console.log(y)
        this.salida=y
      }
      
    }catch{
      let textopadre = localStorage.getItem("dad")
      //console.log(textopadre)
      this.salida=textopadre
    }
  }

  xpathDESC() {
    try {
      const AST = parserXpathDesc.parse(this.xpath);
      localStorage.setItem("ASTXPATH", JSON.stringify(AST));
      this.toastr.success("Análisis completado")
    } catch (Error) {
      this.toastr.error("Error", "Hay un error en la sintáxis, compruebe su cadena de entrada")
    }

  }

  GenerarTablaSimbolos(CST: any) {
    let array = []
    this.salida = ">>Analizando archivo XML\n";
    try {
      if (CST != null) {
        this.tablaSimbolo = new Crear();
        let lista = [];
        lista.push(CST)
        this.tablaSimbolo.agregar(lista, "Global");
        this.TablaSimbolos();
        array = errores.Errores.geterror();
        if (array.length != 0) {
          this.toastr.warning("atención", "Se han detectado errores en el archivo");
          this.salida += ">>Se ha analizado el código, errores detectados...\n";
          array.forEach(element => {
            this.salida += ">>Tipo de error: " + element.tipo + ", " + element.valor + ", " + ". línea " + element.linea + " y columna "
              + element.columna + "\n";
          });
        } else {
          this.salida += ">>Análisis satisfactorio"
          this.toastr.success("Se ha analizado el archivo XML correctamente")
        }
      } else {
        this.toastr.warning("No se ha generado el análisis")
        this.errores = ">>No se ha podido generar el análisis"
      }

    } catch (Error) {
      this.toastr.error('Error', "Existe(n) error(es) sintáctico(s) irrecuperables, compruebe el archivo e inténtelo de nuevo. ")
      this.errores += ">>Existe(n) error(es) sintáctico(s) irrecuperables, compruebe el archivo e inténtelo de nuevo."
    }
  }

  leerArchivo(e: any) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = (e) => {
      var contenido = e.target.result;
      if (this.archivo == '') {
        // var a = (<HTMLInputElement>document.getElementById('text0')).value = contenido.toString();
        this.archivo = contenido.toString();
      } else {
        this.nuevo();
        this.archivo = contenido.toString();
      }
    };

    lector.readAsText(archivo);
  }

  leerArchivox(e: any) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = (e) => {
      var contenido = e.target.result;
      if (this.xquery == '') {
        // var a = (<HTMLInputElement>document.getElementById('text0')).value = contenido.toString();
        this.xquery = contenido.toString();
      } else {
        this.nuevo();

        this.xquery = contenido.toString();
      }
    };

    lector.readAsText(archivo);
  }


  AnalizarXQuery() {
    Listita.Listita.clear();
    TableSimbols.TableSimbols.clear();
    let resultado = parserXQuery.parse(this.xquery);
    let global = new Entorno("Global", null);
    if (resultado.length != undefined) {
      console.log(resultado)
      resultado.forEach(element => {
        if (element.t == "Instrucción") {
          console.log("-------- iteración nueva -----------")
          let retorno = element.ejecutar(global, element);
          if (retorno != undefined) {
            if (retorno == "return") {
              return
            }
            this.salida = retorno;
          }
        }
      })
    } else {
      if (resultado.t == "Instrucción") {
        console.log("pasó por el objeto")
        resultado.ejecutar(global, resultado);
      }
    }
    console.log(TableSimbols.TableSimbols.getLista());
  }

  TablaSimbolos() {
    localStorage.setItem("tablaSimbolo", "")
    localStorage.setItem("tablaSimbolo", JSON.stringify(this.tablaSimbolo.getTabla()))
    localStorage.setItem("tablaSimboloAux", JSON.stringify(this.tablaSimbolo.getTablaAux()))
  }

  repoSimbolos() {
    this.router.navigate(['./tablasimbolos']);
  }
  CSTAsc() {
    this.router.navigate(['./cstASC']);
  }

  ASTXPATH() {
    this.router.navigate(['./astASC']);
  }
  Errores() {
    this.router.navigate(['./errores']);
  }

  ReporteGram() {
    this.router.navigate(['./gramatical']);
  }

  ReporteOpt() {
    this.router.navigate(['./optimizado']);
  }

  getJSON() {
    //return (data as any); // aqui obtenemos el JSON completo
  }

  traducirXML() {
    let cadena = ""
    var tablita = JSON.parse(localStorage.getItem("tablaSimboloAux"))
    var consulta = this.padre
    let trad = new tradXML.default(tablita, consulta, "xpath");
    cadena = trad.getTraduccion();
    this.traduccion = cadena;
  }

  optimizarC3D() {
    let prueba = parserOp.parse(this.traduccion)
    let repo = prueba.reporte.getReporte()
    this.traduccion = prueba.cadena
  }

}

