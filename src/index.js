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


function agregarTarea(e) {
  if (e.key == 'Enter') {   
    if (e.target.value !== '') {
      todoList.añadir(e.target.value);
      ui.ponerHTML(todoList.darTarea());
    }
  }
}

function eliminarTareasCompletadas(e) {
  todoList.eliminarTareasCompletadas(e.target.value);
}

function filtros() {
  console.log('clic en los filtros');
}


