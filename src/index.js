import { TodoList } from './js/TodoList';
import { UI } from './js/UI';

import './styles.css';

const todoList = new TodoList();
const ui = new UI();

document.querySelectorAll('.filtro').forEach(i => {
  i.addEventListener('click', filtros);
})
document.querySelector('.new-todo').addEventListener('keypress', agregarTarea);
document.querySelector('.clear-completed').addEventListener('click', eliminarTareasCompletadas);
document.querySelector('.todo-list').addEventListener('click', opcionesTarea);

document.addEventListener('DOMContentLoaded', ()=> {
  todoList.cargarLocalStorage();
  mostrar(todoList.darListaTareas());  
})


function opcionesTarea(e){  
  const opcion  = e.target.localName;
  const tarea = e.target.parentElement.children[1].textContent;  
  if(opcion === 'input' ){    
    todoList.cambiarEstado(tarea);        
  }
  if(opcion === 'button' ){
    todoList.eliminar(tarea);    
  }
  mostrar(todoList.darListaTareas());
  
}

const mostrar = listaTareas => {
  ui.limpiarListaTareas();
  ui.mostrarListaTareas(listaTareas);
  ui.actualizaTotalTareasPendientes(todoList.numeroTareasPendientes(), '.todo-count');
  todoList.actualizarLocalStorage();
}

function agregarTarea(e) {
  if (e.key == 'Enter') {
    if (e.target.value !== '') {
      todoList.añadir(e.target.value);
      mostrar(todoList.darListaTareas());
      ui.borrarEntradaNuevaTarea('.new-todo');
    }
  }
}

function eliminarTareasCompletadas() {
  todoList.eliminarTareasCompletadas();
  mostrar(todoList.darListaTareas());  
}

function filtros(e) {
  const accion = e.target.textContent;
  let resultado = [];
  if (accion === 'Todos') {
    resultado = todoList.darListaTareas();
  } else if (accion === 'Pendientes') {
    resultado = todoList.darPendientes();    
  } else {
    resultado = todoList.darCompletadas();
  }  
  mostrar(resultado);
}


