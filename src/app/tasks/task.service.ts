import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: Task[] = [
    {
      id: 'aad4d02c-36e9-4e27-9f68-7ab1ee48e2cf',
      title: 'Completar Informe Mensual',
      description: '',
      done: false,
    },
    {
      id: '0bf9c297-74d4-4b8d-bf21-83899fc5b84a',
      title: 'Preparar Presentación de Ventas',
      description:
        'Elaborar una presentación detallada de las cifras de ventas del último trimestre.',
      done: false,
    },
    {
      id: '045e6ef0-4c91-4957-b3c8-4aee77eeb2a2',
      title: 'Entrenamiento de Equipo',
      description:
        'Realizar una sesión de entrenamiento para el equipo de desarrollo.',
      done: true,
    },
    {
      id: 'f392c481-3c8e-40fc-aa6d-843b8550b7e0',
      title: 'Revisar Contrato del Cliente',
      description:
        'Examinar y modificar el contrato del cliente según las últimas negociaciones.',
      done: false,
    },
    {
      id: '176e02e5-b5e6-4d86-9465-349057c4ff14',
      title: 'Organizar Reunión de Estrategia',
      description:
        'Planificar y coordinar una reunión estratégica con los líderes de los departamentos.',
      done: true,
    },
  ];

  getTasks() {
    return this._tasks;
  }

  getTasksDone() {
    return this._tasks.filter((task) => task.done);
  }

  getTasksNotDone() {
    return this._tasks.filter((task) => !task.done);
  }

  deleteTask(id: string) {
    this._tasks = this._tasks.filter((task) => task.id !== id);
  }

  addTask(task: Task) {
    this._tasks.push(task);
  }

  editTask(task: Task) {
    this._tasks = this._tasks.map((t) => (t.id === task.id ? task : t));
  }

  clearTasks() {
    this._tasks = [];
  }

  toggleDone(id: string) {
    this._tasks = this._tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
  }

  clearTasksDone() {
    this._tasks = this._tasks.filter((task) => !task.done);
  }

  

  constructor() {}
}
