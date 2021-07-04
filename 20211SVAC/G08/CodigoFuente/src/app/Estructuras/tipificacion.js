"use strict";
exports.__esModule = true;
exports.TipoInstruccion = exports.TipoDato = exports.ParamType = exports.TipoDeclaracionXquery = exports.TipoFuncion = exports.TipoClausulaIntermedia = exports.OrderModifierType = exports.TipoBinding = exports.FLWORTipo = exports.SingleExpresionType = exports.TipoOperador = exports.TipoNodo = exports.TipoParametro = void 0;
var TipoParametro;
(function (TipoParametro) {
    TipoParametro[TipoParametro["Entero"] = 0] = "Entero";
    TipoParametro[TipoParametro["Decimal"] = 1] = "Decimal";
    TipoParametro[TipoParametro["Funtion_Last"] = 2] = "Funtion_Last";
    TipoParametro[TipoParametro["Funtion_Position"] = 3] = "Funtion_Position";
    TipoParametro[TipoParametro["DosPuntos"] = 4] = "DosPuntos";
    TipoParametro[TipoParametro["Punto"] = 5] = "Punto";
    TipoParametro[TipoParametro["Atributo"] = 6] = "Atributo";
    TipoParametro[TipoParametro["Cadena"] = 7] = "Cadena";
    TipoParametro[TipoParametro["Nodo"] = 8] = "Nodo";
    TipoParametro[TipoParametro["Operacion"] = 9] = "Operacion";
    TipoParametro[TipoParametro["Ruta"] = 10] = "Ruta";
    TipoParametro[TipoParametro["Variable"] = 11] = "Variable";
    TipoParametro[TipoParametro["FuncionDefinida"] = 12] = "FuncionDefinida";
})(TipoParametro = exports.TipoParametro || (exports.TipoParametro = {}));
var TipoNodo;
(function (TipoNodo) {
    TipoNodo["Raiz"] = "RAIZ";
    TipoNodo["Descendiente"] = "DESCENDIENTE";
    TipoNodo["ID"] = "ID";
    TipoNodo["Axis"] = "AXIS";
    TipoNodo["AutoReferencia"] = "AUTOREFERENCIA";
    TipoNodo["Asterisco"] = "ASTERISCO";
    TipoNodo["NodoPadre"] = "NODO_PADRE";
    TipoNodo["Atributo"] = "ATRIBUTO";
    TipoNodo["Funcion_Node"] = "Funcion_Node";
    TipoNodo["Funcion_Text"] = "Funcion_Text";
})(TipoNodo = exports.TipoNodo || (exports.TipoNodo = {}));
var TipoOperador;
(function (TipoOperador) {
    TipoOperador[TipoOperador["Mas"] = 0] = "Mas";
    TipoOperador[TipoOperador["Menos"] = 1] = "Menos";
    TipoOperador[TipoOperador["Por"] = 2] = "Por";
    TipoOperador[TipoOperador["Mod"] = 3] = "Mod";
    TipoOperador[TipoOperador["Div"] = 4] = "Div";
    TipoOperador[TipoOperador["MenorIgual"] = 5] = "MenorIgual";
    TipoOperador[TipoOperador["MayorIgual"] = 6] = "MayorIgual";
    TipoOperador[TipoOperador["Menor"] = 7] = "Menor";
    TipoOperador[TipoOperador["Mayor"] = 8] = "Mayor";
    TipoOperador[TipoOperador["Igual"] = 9] = "Igual";
    TipoOperador[TipoOperador["Diferente"] = 10] = "Diferente";
    TipoOperador[TipoOperador["And"] = 11] = "And";
    TipoOperador[TipoOperador["Or"] = 12] = "Or";
    TipoOperador[TipoOperador["None"] = 13] = "None";
})(TipoOperador = exports.TipoOperador || (exports.TipoOperador = {}));
var SingleExpresionType;
(function (SingleExpresionType) {
    SingleExpresionType[SingleExpresionType["FLWORExpr"] = 0] = "FLWORExpr";
    SingleExpresionType[SingleExpresionType["IfExpr"] = 1] = "IfExpr";
    SingleExpresionType[SingleExpresionType["Contador"] = 2] = "Contador";
    SingleExpresionType[SingleExpresionType["HtmlSequence"] = 3] = "HtmlSequence";
    SingleExpresionType[SingleExpresionType["FuncionDefinida"] = 4] = "FuncionDefinida";
    SingleExpresionType[SingleExpresionType["XPARAM"] = 5] = "XPARAM";
    SingleExpresionType[SingleExpresionType["Path"] = 6] = "Path";
    SingleExpresionType[SingleExpresionType["LlamadaFuncion"] = 7] = "LlamadaFuncion";
    SingleExpresionType[SingleExpresionType["Sentencia"] = 8] = "Sentencia";
})(SingleExpresionType = exports.SingleExpresionType || (exports.SingleExpresionType = {}));
var FLWORTipo;
(function (FLWORTipo) {
    FLWORTipo[FLWORTipo["For"] = 0] = "For";
    FLWORTipo[FLWORTipo["Let"] = 1] = "Let";
})(FLWORTipo = exports.FLWORTipo || (exports.FLWORTipo = {}));
var TipoBinding;
(function (TipoBinding) {
    TipoBinding[TipoBinding["VarInSentencia"] = 0] = "VarInSentencia";
})(TipoBinding = exports.TipoBinding || (exports.TipoBinding = {}));
var OrderModifierType;
(function (OrderModifierType) {
    OrderModifierType[OrderModifierType["Ascendente"] = 0] = "Ascendente";
    OrderModifierType[OrderModifierType["Descendente"] = 1] = "Descendente";
    OrderModifierType[OrderModifierType["Ninguno"] = 2] = "Ninguno";
})(OrderModifierType = exports.OrderModifierType || (exports.OrderModifierType = {}));
var TipoClausulaIntermedia;
(function (TipoClausulaIntermedia) {
    TipoClausulaIntermedia[TipoClausulaIntermedia["InitialClause"] = 0] = "InitialClause";
    TipoClausulaIntermedia[TipoClausulaIntermedia["OrderByClause"] = 1] = "OrderByClause";
    TipoClausulaIntermedia[TipoClausulaIntermedia["WhereClause"] = 2] = "WhereClause";
})(TipoClausulaIntermedia = exports.TipoClausulaIntermedia || (exports.TipoClausulaIntermedia = {}));
var TipoFuncion;
(function (TipoFuncion) {
    TipoFuncion[TipoFuncion["Definida"] = 0] = "Definida";
    TipoFuncion[TipoFuncion["Nativa"] = 1] = "Nativa";
})(TipoFuncion = exports.TipoFuncion || (exports.TipoFuncion = {}));
var TipoDeclaracionXquery;
(function (TipoDeclaracionXquery) {
    TipoDeclaracionXquery[TipoDeclaracionXquery["Varible"] = 0] = "Varible";
    TipoDeclaracionXquery[TipoDeclaracionXquery["FuncionDefinida"] = 1] = "FuncionDefinida";
})(TipoDeclaracionXquery = exports.TipoDeclaracionXquery || (exports.TipoDeclaracionXquery = {}));
var ParamType;
(function (ParamType) {
    ParamType[ParamType["xsString"] = 0] = "xsString";
    ParamType[ParamType["xsDate"] = 1] = "xsDate";
    ParamType[ParamType["xsDecimal"] = 2] = "xsDecimal";
    ParamType[ParamType["xsBoolean"] = 3] = "xsBoolean";
    ParamType[ParamType["xsInteger"] = 4] = "xsInteger";
})(ParamType = exports.ParamType || (exports.ParamType = {}));
var TipoDato;
(function (TipoDato) {
    TipoDato[TipoDato["Primitivo"] = 0] = "Primitivo";
    TipoDato[TipoDato["Operacion"] = 1] = "Operacion";
})(TipoDato = exports.TipoDato || (exports.TipoDato = {}));
var TipoInstruccion;
(function (TipoInstruccion) {
    TipoInstruccion[TipoInstruccion["Asignacion"] = 0] = "Asignacion";
    TipoInstruccion[TipoInstruccion["AsignacionArray"] = 1] = "AsignacionArray";
    TipoInstruccion[TipoInstruccion["ArrayAsignacion"] = 2] = "ArrayAsignacion";
    TipoInstruccion[TipoInstruccion["Etiqueta"] = 3] = "Etiqueta";
    TipoInstruccion[TipoInstruccion["GoTo"] = 4] = "GoTo";
    TipoInstruccion[TipoInstruccion["Llamada"] = 5] = "Llamada";
    TipoInstruccion[TipoInstruccion["Print"] = 6] = "Print";
    TipoInstruccion[TipoInstruccion["If"] = 7] = "If";
    TipoInstruccion[TipoInstruccion["Return"] = 8] = "Return";
})(TipoInstruccion = exports.TipoInstruccion || (exports.TipoInstruccion = {}));
