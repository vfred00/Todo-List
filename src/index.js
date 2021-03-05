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
document.querySelector('.toggle').addEventListener('click', tareaCompletada);
function tareaCompletada(e){
  console.log(e.target)
}

function agregarTarea(e) {
  if (e.key == 'Enter') {
    if (e.target.value !== '') {
      todoList.añadir(e.target.value);
      ui.ponerHTML(todoList.darTarea());
    }
  }
}

function eliminarTareasCompletadas() {
  todoList.eliminarTareasCompletadas();
  ui.limpiarListaTareas();
  ui.mostrarListaTareas(todoList.darListaTareas());
}

function filtros(e) {
  const accion = e.target.textContent;
  let mostrar = [];
  ui.limpiarListaTareas();
  if (accion === 'Todos') {
    mostrar = todoList.darListaTareas();
  } else if (accion === 'Pendientes') {
    mostrar = todoList.darPendientes();    
  } else {
    mostrar = todoList.darCompletadas();
  }
  ui.mostrarListaTareas(mostrar);
}


