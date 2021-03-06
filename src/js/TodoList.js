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

  darTarea() {    
    return this.listaTareas[this.listaTareas.length - 1];
  }

  cambiarEstado(tarea) {
    this.listaTareas = this.listaTareas.map(i => {
      if (i.nombre === tarea) {
        i.completada = i.completada ? false : true;        
      }

      return i;
    })

  }

  eliminar(tarea) {
    this.listaTareas = this.listaTareas.filter(i => i.nombre !== tarea);
  }

}
