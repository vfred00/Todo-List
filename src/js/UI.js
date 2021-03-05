export class UI {
  constructor() {
    console.log('ui');
    this.contenedorTareas = document.querySelector('.todo-list');
  }

  ponerHTML(tarea) {
    console.log('poniendo')
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
    this.contenedorTareas.append(contenedorTarea);
  }


  limpiarListaTareas(){
    while (this.contenedorTareas.firstChild) {
     this.contenedorTareas.removeChild(this.contenedorTareas.firstChild);
    }
    
  }

  mostrarListaTareas(tareas){
    tareas.forEach(i => {
      this.ponerHTML(i);  
      console.log(i)        
    });
    console.log('ui mostarr');
  }
}