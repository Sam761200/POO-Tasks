// Définir la classe Task
class Task {
    constructor(id, title, description) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = false;
    }
  
    complete() {
      this.completed = true;
    }
  
    toString() {
      return `Tâche ${this.id}: ${this.title} - ${this.description} [${this.completed ? 'Terminée' : 'En cours'}]`;
    }
  }
  
  // Définir la classe TaskManager
  class TaskManager {
    constructor() {
      this.tasks = [];
      this.currentId = 1;
    }
  
    addTask(title, description) {
      const task = new Task(this.currentId++, title, description);
      this.tasks.push(task);
    }
  
    completeTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.complete();
      }
    }
  
    listTasks() {
      this.tasks.forEach(task => {
        console.log(task.toString());
      });
    }
  }
  
  // Utilisation des classes
  const taskManager = new TaskManager();
  
  taskManager.addTask("Faire les courses", "Acheter des fruits et légumes.");
  taskManager.addTask("Faire le ménage", "Nettoyer la maison.");
  taskManager.addTask("Travailler sur le projet POO", "Créer un projet en JavaScript.");
  
  taskManager.completeTask(2);
  
  taskManager.listTasks();
  