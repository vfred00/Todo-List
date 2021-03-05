export class UI {
  constructor() {
    console.log('ui');
  }

  ponerHTML(tarea) {
    const {nombre,completada} = tarea;   
    const contenedorTarea = document.createElement('div');
    contenedorTarea.innerHTML = `<li class="${completada ? 'completed' : ''}" data-id="abc">
    <div class="view">
      <input class="toggle" type="checkbox" checked>
      <label>${nombre}</label>
      <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>`;
    document.querySelector('.todo-list').append(contenedorTarea);
       

  }
}