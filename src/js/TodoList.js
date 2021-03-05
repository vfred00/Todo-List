export class TodoList {

  constructor() {
    this.listaTareas = [];    
  }

  eliminarTareasCompletadas() {
    this.listaTareas = this.darPendientes();
  }

  darPendientes() {    
    return this.listaTareas.filter(i => !i.completada);
  }

  darCompletadas() {        
    return this.listaTareas.filter(i => i.completada);
  }

  darListaTareas() {
    return this.listaTareas;
  }

  añadir(tarea) {
    this.listaTareas.push({
      nombre: tarea,
      completada: false
    });   
  }

  darTarea(){
    this.listaTareas[0].completada = true;
    return this.listaTareas[this.listaTareas.length-1];
  }

}
