%lex

%%
\s+            {/*espacio en blanco*/}

//------------------------------------------------------Basicos rutas xpath------------------------------------------------------



"/" {
    //console.log('Detecto diagonal');
     return 'diagonal';
}

"." {
    //console.log('Detecto punto');
     return 'punto';
}


"@" {
    //console.log('Detecto arroba');
     return 'arroba';
}

"node" {
    //console.log('Detecto node');
     return 'node';
}

"text" {
    //console.log('Detecto text');
     return 'text';
}

"last" {
    //console.log('Detecto last');
     return 'last';
}

"position" {
    //console.log('Detecto position');
     return 'position';
}



//------------------------------------------------------AXES------------------------------------------------------



"ancestor" {
    //console.log('Detecto ancestor');
     return 'ancestor';
}

"attribute" {
    //console.log('Detecto attribute');
     return 'attribute';
}

"child" {
    //console.log('Detecto child');
     return 'child';
}

"descendant" {
    //console.log('Detecto descendant');
     return 'descendant';
}

"-or-self" {
    //console.log('Detecto descendant-or-self');
     return 'or-self';
}

"following" {
    //console.log('Detecto following');
     return 'following';
}

"-sibling" {
    //console.log('Detecto following-sibling');
     return 'sibling';
}

"parent" {
    //console.log('Detecto parent');
     return 'parent';
}

"preceding" {
    //console.log('Detecto preceding');
     return 'preceding';
}

"self" {
    //console.log('Detecto self');
     return 'self';
}



//------------------------------------------------------OPERADORES------------------------------------------------------




"|" {
    //console.log('Detecto operador_o');
    return 'operador_o';
}

"+" {
    //console.log('Detecto suma');
    return 'suma';
}

"-" {
    //console.log('Detecto resta');
    return 'resta';
}

"*" {
    //console.log('Detecto multiplicacion');
    return 'multiplicacion';
}

"div" {
    //console.log('Detecto division');
    return 'division';
}

"=" {
    //console.log('Detecto igual');
    return 'igual';
}

"!=" {
    //console.log('Detecto diferente');
    return 'diferente';
}

"<" {
    //console.log('Detecto menor');
    return 'menor';
}

"<=" {
    //console.log('Detecto menor_igual');
    return 'menor_igual';
}

">" {
    //console.log('Detecto mayor');
    return 'mayor';
}

">" {
    //console.log('Detecto mayor_igual');
    return 'mayor_igual';
}

"or" {
    //console.log('Detecto or');
    return 'or';
}

"and" {
    //console.log('Detecto and');
    return 'and';
}

"mod" {
    // equivalente a %
    //console.log('Detecto mod');
    return 'mod';
}


"(" {
    //console.log('Detecto parentesis_abierto');
     return 'parentesis_abierto';
    }

")" {
    //console.log('Detecto parentesis_cerrado');
     return 'parentesis_cerrado';
    }

"[" {
    //console.log('Detecto corchete_abierto');
    return 'corchete_abierto';
    }

"]" {
    //console.log('Detecto corchete_cerrado');
     return 'corchete_cerrado';
    }

":" {
    //console.log('Detecto dos_puntos');
     return 'dos_puntos';
    }



//------------------------------------------------------EXPRESIONES------------------------------------------------------


(0|[1-9][0-9]*)(\.(0|[0-9]*[1-9](0)?))? {
    //console.log('Detecto digito');
     return 'digito';
    }

\w+  {
    //console.log('Detecto identificador');
     return 'identificador';
    }

"&&"[^\n]* {
    //console.log('Salto linea '+yytext);
}

"\""[^"\""]*"\"" {
    //console.log('string '+yytext);
    return 'string';
}

<<EOF>>   return 'eof';

.					{
    agregarErrorLexico("Lexico",yytext,yylloc.first_line,yylloc.first_column+1);
    }
/lex
%{
//metodos o atributos
%}

%left 'suma' 'resta'
%left 'multiplicacion' 'division' 'mod'

%left 'igual' 'diferente' 'menor' 'menor_igual' 'mayor' 'mayor_igual'
%left 'or' 'and'

%start INIT

%%

INIT
    : CONSULTAS_XPATH eof {
        console.log('\nexito al analizar\n');
        return $1;
    }
    | error eof {
        erroresXpath.agregarError("Sintactico","Errores seguidos"+yytext,this._$.first_line,this._$.first_column);
        return [];
    }
;


CONSULTAS_XPATH
    : CONSULTAS_XPATH operador_o CONSULTA_XPATH         {$1.push($3); $$ = $1;}
    | CONSULTA_XPATH                                    {$$ = [$1]}
    | corchete_abierto error corchete_cerrado {
        $$ = [];
        erroresXpath.agregarError("Sintactico","No puede venir un predicado como un nodo\n"+yytext,this._$.first_line,this._$.first_column);
    }
    | parentesis_abierto error parentesis_cerrado {
        $$ = [];
        erroresXpath.agregarError("Sintactico","No puede venir una expresion como un nodo\n"+yytext,this._$.first_line,this._$.first_column);
    }
;

CONSULTA_XPATH
    : RELATIVA                  {$$ = [new ConsultaSimple(TipoConsulta.SIMPLE, $1.id, $1.pred, false)];}
    | EXPRESIONES_RUTA          {$$ = $1;}
    | PUNTOS EXPRESIONES_RUTA {
        $$= [];
        if ($1 === "punto") {
            $$.push(new ConsultaPunto(TipoConsulta.PUNTO, "", []));
        }
        $2.forEach(e => $$.push(e));
    }
;

EXPRESIONES_RUTA
    : EXPRESIONES_RUTA EXPRESION_RUTA       {$2.forEach(e => $1.push(e)); $$ = $1;}
    | EXPRESION_RUTA                        {$$ = $1;}
    | error operador_o {
        $$ = [];
        erroresXpath.agregarError("Sintactico","Consulta no aceptada:\n"+yytext,this._$.first_line,this._$.first_column);
    }
;

EXPRESION_RUTA
    : RELATIVA DIAGONALES ACCESORES         {
            $$ = [];
            if (!($1.id === "")) {
                $$.push(new ConsultaSimple(TipoConsulta.SIMPLE, $1.id, $1.pred, false));
            }
            $$.push(FabricaConsulta.fabricar($2, $3.id, $3.eje, $3.pred));
    }
    | error identificador {
        erroresXpath.agregarError("Sintactico",yytext,this._$.first_line,this._$.first_column);
        $$ = [];
    }
;

RELATIVA :                                  {$$ = {id:"", pred: []}}
    | identificador OPCIONAL_PREDICADO      {$$ = {id:$1, pred: $2}}
;

DIAGONALES
    : diagonal diagonal                     {$$ = "doble";}
    | diagonal                              {$$ = "simple";}
;

PUNTOS : punto              {$$ = "punto";}
    | punto punto           {$$ = "puntos";}
;

ACCESORES
    : ID OPCIONAL_PREDICADO             {$$ = {id: $1.id, eje: $1.eje, pred: $2};}
    | ATRIBUTO OPCIONAL_PREDICADO       {$$ = {id: $1,    eje: "",     pred: $2};}
    | PUNTOS OPCIONAL_PREDICADO         {$$ = {id: $1,    eje: "",     pred: $2};}
    | multiplicacion                    {$$ = {id: $1,    eje: "",     pred: []};}
    | NODE                              {$$ = {id: $1,    eje: "",     pred: []};}
    | TEXT                              {$$ = {id: $1,    eje: "",     pred: []};}
;

TEXT
    : text parentesis_abierto parentesis_cerrado {$$ = $1 + "()";}
;

NODE
    : node parentesis_abierto parentesis_cerrado {$$ = $1 + "()";}
;

ATRIBUTO
    : arroba identificador          {$$ = $1 + $2;}
    | arroba multiplicacion         {$$ = $1 + $2;}
;

ID : identificador      {$$ = {id: $1, eje: ""};}
    | EJE               {$$ = $1;}
;

EJE : EJES dos_puntos dos_puntos ACCESORES_EJE  {$$ = {id: $4, eje: $1}}
;

ACCESORES_EJE
    : identificador               {$$ = $1;}
    | NODE                        {$$ = $1;}
    | TEXT                        {$$ = $1;}
    | multiplicacion              {$$ = $1;}
;

EJES
    : ancestor                  {$$ = $1;}
    | ancestor or-self          {$$ = $1+$2;}
    | attribute                 {$$ = $1;}
    | child                     {$$ = $1;}
    | descendant or-self        {$$ = $1+$2;}
    | descendant                {$$ = $1;}
    | following                 {$$ = $1;}
    | following sibling         {$$ = $1+$2;}
    | parent                    {$$ = $1;}
    | preceding                 {$$ = $1;}
    | preceding sibling         {$$ = $1+$2;}
    | self                      {$$ = $1;}
;

OPCIONAL_PREDICADO
    :                           {$$ = [];}
    | PREDICADOS                {$$ = $1;}
;

PREDICADOS
    :PREDICADOS PREDICADO       {$1.push($2); $$ = $1;}
    | PREDICADO                 {$$ = $1;}
    | corchete_abierto error corchete_cerrado {
        erroresXpath.agregarError("Sintactico","Error en predicado\n"+yytext,this._$.first_line,this._$.first_column);
        $$ = [];
    }
;

PREDICADO : corchete_abierto FILTRO corchete_cerrado        {$$ = $2;}
;

FILTRO
    : EXPR igual EXPR               {
        if ($1.type === 2) {
            $$ = [new FiltroAtributo($1.val, $3.val)];
        } else if ($1.type === 4) {
            $$ = [new FiltroHijo($1.val, $3.val)];
        }
    }
    | EXPR diferente EXPR           {$$ = [];}
    | EXPR mayor EXPR               {$$ = [];}
    | EXPR menor EXPR               {$$ = [];}
    | EXPR mayor_igual EXPR         {$$ = [];}
    | EXPR menor_igual EXPR         {$$ = [];}
    | FILTRO and FILTRO             {$$ = $1.concat($3);}
    | FILTRO or FILTRO              {$$ = [];}
    //| EJE OPCIONAL_PREDICADO        {$$ = }
    | EXPR                          {
        if ($1.type === 1){
            $$ = [new FiltroPosicion($1.val)];
        }
    }
;

EXPR
    : EXPR suma EXPR                                    {$$ = {val: $1.val + "+" + $3.val, type: $1.type}}
    | EXPR resta EXPR                                   {$$ = {val: $1.val + "-" + $3.val, type: $1.type}}
    | EXPR multiplicacion EXPR                          {$$ = {val: $1.val + "*" + $3.val, type: $1.type}}
    | EXPR division EXPR                                {$$ = {val: $1.val + "/" + $3.val, type: $1.type}}
    | EXPR mod EXPR                                     {$$ = {val: $1.val + "%" + $3.val, type: $1.type}}
    | parentesis_abierto EXPR parentesis_cerrado        {$$ = {val: "(" + $2.val + ")", type: $2.type}}
    | TIPOS                                             {$$ = $1;}
    | parentesis_abierto error parentesis_cerrado {
        erroresXpath.agregarError("Sintactico","Error dentro expresion\n"+yytext,this._$.first_line,this._$.first_column);
        $$ = "";
    }
;

TIPOS
    : string                                            {$$ = {val: $1.replaceAll('\"', ''), type: 3}}
    | digito                                            {$$ = {val: $1, type: 1}}
    | ATRIBUTO                                          {$$ = {val: $1.replace('@', ''), type: 2}}
    //| PUNTOS
    //| CONSULTA_XPATH
    | last parentesis_abierto parentesis_cerrado        {$$ = {val: $1 + "()", type: 1}}
    //| position parentesis_abierto parentesis_cerrado    {$$ = {val: $1 + "()", type: 1}}
    //| TEXT
    | ID                                                {$$ = {val: $1.id, type: 4}}
;
