export class UI {
  constructor() {
    this.contenedorTareas = document.querySelector('.todo-list');
  }

  ponerHTML(tarea) {
    console.log('poniendo')
    const {nombre,completada} = tarea;   
    const contenedorTarea = document.createElement('div');
    contenedorTarea.innerHTML = `<li class="${completada ? 'completed' : ''}" data-id="abc">
    <div class="view">
      <input class="toggle check" type="checkbox" ${!completada ? 'checked':''}>
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
  }

  actualizaTotalTareasPendientes(numeroTareasPendientes, contenedor){
    document.querySelector(contenedor).children[0].innerText = numeroTareasPendientes;    
  }

  borrarEntradaNuevaTarea(){
    document.querySelector(contenedor).innerText = '';
  }
}