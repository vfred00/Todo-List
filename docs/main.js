/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/TodoList */ \"./src/js/TodoList.js\");\n/* harmony import */ var _js_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/UI */ \"./src/js/UI.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst todoList = new _js_TodoList__WEBPACK_IMPORTED_MODULE_0__[\"TodoList\"]();\nconst ui = new _js_UI__WEBPACK_IMPORTED_MODULE_1__[\"UI\"]();\n\ndocument.querySelectorAll('.filtro').forEach(i => {\n  i.addEventListener('click', filtros);\n})\ndocument.querySelector('.new-todo').addEventListener('keypress', agregarTarea);\ndocument.querySelector('.clear-completed').addEventListener('click', eliminarTareasCompletadas);\ndocument.querySelector('.todo-list').addEventListener('click', opcionesTarea);\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n  todoList.cargarLocalStorage();\n  mostrar(todoList.darListaTareas());  \n})\n\n\nfunction opcionesTarea(e){  \n  const opcion  = e.target.localName;\n  const tarea = e.target.parentElement.children[1].textContent;  \n  if(opcion === 'input' ){    \n    todoList.cambiarEstado(tarea);        \n  }\n  if(opcion === 'button' ){\n    todoList.eliminar(tarea);    \n  }\n  mostrar(todoList.darListaTareas());\n  \n}\n\nfunction agregarTarea(e) {\n  if (e.key == 'Enter') {\n    if (e.target.value !== '') {\n      todoList.añadir(e.target.value);\n      mostrar(todoList.darListaTareas());\n      ui.borrarEntradaNuevaTarea('.new-todo');\n    }\n  }\n}\n\nfunction eliminarTareasCompletadas() {\n  todoList.eliminarTareasCompletadas();\n  mostrar(todoList.darListaTareas());  \n}\n\nfunction filtros(e) {\n  const accion = e.target.textContent;\n  let resultado = [];\n  if (accion === 'Todos') {\n    resultado = todoList.darListaTareas();\n  } else if (accion === 'Pendientes') {\n    resultado = todoList.darPendientes();    \n  } else {\n    resultado = todoList.darCompletadas();\n  }  \n  mostrar(resultado);\n}\n\nconst mostrar = listaTareas => {\n  ui.limpiarListaTareas();\n  ui.mostrarListaTareas(listaTareas);\n  ui.actualizaTotalTareasPendientes(todoList.numeroTareasPendientes(), '.todo-count');\n  todoList.actualizarLocalStorage();\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/TodoList.js":
/*!****************************!*\
  !*** ./src/js/TodoList.js ***!
  \****************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\nclass TodoList {\n\n  constructor() {       \n    this.cargarLocalStorage();\n  }\n\n  eliminarTareasCompletadas() {\n    this.listaTareas = this.darPendientes();\n  }\n\n  darPendientes() {\n    return this.listaTareas.filter(i => !i.completada);\n  }\n\n  darCompletadas() {\n    return this.listaTareas.filter(i => i.completada);\n  }\n\n  darListaTareas() {\n    return this.listaTareas;\n  }\n\n  añadir(tarea) {\n    this.listaTareas.push({\n      nombre: tarea,\n      completada: false\n    });\n  }\n\n  darTarea() {    \n    return this.listaTareas[this.listaTareas.length - 1];\n  }\n\n  cambiarEstado(tarea) {\n    this.listaTareas = this.listaTareas.map(i => {\n      if (i.nombre === tarea) {\n        i.completada = i.completada ? false : true;        \n      }\n      return i;\n    })\n\n  }\n\n  eliminar(tarea) {\n    this.listaTareas = this.listaTareas.filter(i => i.nombre !== tarea);\n  }\n\n  numeroTareasPendientes(){\n    return this.darPendientes().length;\n  }\n\n  actualizarLocalStorage(){\n    localStorage.setItem('listaTareas', JSON.stringify( this.listaTareas ));\n  }\n  cargarLocalStorage(){\n    const valor = localStorage.getItem('listaTareas');\n    this.listaTareas = valor ? JSON.parse(valor) : []; \n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/TodoList.js?");

/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI\", function() { return UI; });\nclass UI {\n  constructor() {\n    this.contenedorTareas = document.querySelector('.todo-list');\n  }\n\n  ponerHTML(tarea) {    \n    const {nombre,completada} = tarea;   \n    const contenedorTarea = document.createElement('div');\n    contenedorTarea.innerHTML = `<li class=\"${completada ? 'completed' : ''}\" data-id=\"abc\">\n    <div class=\"view\">\n      <input class=\"toggle check\" type=\"checkbox\" ${completada ? 'checked':''}>\n      <label>${nombre}</label>\n      <button class=\"destroy\"></button>\n      </div>\n      <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>`;\n    this.contenedorTareas.append(contenedorTarea);\n  }\n\n\n  limpiarListaTareas(){\n    while (this.contenedorTareas.firstChild) {\n     this.contenedorTareas.removeChild(this.contenedorTareas.firstChild);\n    }\n    \n  }\n\n  mostrarListaTareas(tareas){\n    tareas.forEach(i => {\n      this.ponerHTML(i);        \n    });    \n  }\n\n  actualizaTotalTareasPendientes(numeroTareasPendientes, contenedor){\n    document.querySelector(contenedor).children[0].innerText = numeroTareasPendientes;    \n  }\n\n  borrarEntradaNuevaTarea(contenedor){\n    document.querySelector(contenedor).value = ''\n  }\n}\n\n//# sourceURL=webpack:///./src/js/UI.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });