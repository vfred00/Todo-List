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

console.log(document.querySelector('li').addEventListener('click', opcionesTarea)
)


function opcionesTarea(e){
  const opcion  = e.target.localName;
  const tarea = e.target.parentElement.children[1].textContent;
  console.log(tarea);
  if(opcion === 'input' ){    
    todoList.cambiarEstado(tarea);    
    console.log('cambiar estado tarea');
  }
  if(opcion === 'button' ){
    todoList.eliminar(tarea);    
    console.log('eliminar tarea');
  }
  console.log(todoList)
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


