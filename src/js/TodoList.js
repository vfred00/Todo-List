export class TodoList {

  constructor() {
    // this.listaTareas = [];    
    this.cargarLocalStorage();
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

  numeroTareasPendientes(){
    return this.darPendientes().length;
  }

  actualizarLocalStorage(){
    localStorage.setItem('listaTareas', JSON.stringify( this.listaTareas ));
  }
  cargarLocalStorage(){
    const valor = localStorage.getItem('listaTareas');
    this.listaTareas = valor ? JSON.parse(valor) : []; 
  }
}
