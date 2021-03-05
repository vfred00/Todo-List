export class TodoList {

  constructor() {
    this.listaTareas = [];    
  }


  eliminar(tarea) {

  }

  eliminarTareasCompletadas(listaTareas) {

  }

  eliminarTareasCompletadas() {
    console.log('se han limpiado las tareas')
  }

  mostrarTareasPendientes() {

  }

  mostrarTareasCompletadas() {

  }

  añadir(tarea) {
    this.listaTareas.push({
      nombre: tarea,
      completada: false
    });   
  }

  darTarea(){
    return this.listaTareas[this.listaTareas.length-1];
  }

}
