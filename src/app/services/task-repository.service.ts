import { Injectable } from '@angular/core';

import * as uuid from 'uuid';
import { ITask, TaskStatesEnum } from '../model/task.interface';
@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService {
  private TASK_KEY = 'TASKS';
  private _tasks: ITask[];

  constructor() {
    this._tasks = JSON.parse(localStorage.getItem(this.TASK_KEY) || '[]');
  }

  get pendingTasks(): ITask[] {
    return this._tasks.filter((task: ITask) => task.status === TaskStatesEnum.PENDING);
  }

  get activeTasks(): ITask[] {
    return this._tasks.filter((task: ITask) => task.status === TaskStatesEnum.ACTIVE);
  }

  get doneTasks(): ITask[] {
    return this._tasks.filter((task: ITask) => task.status === TaskStatesEnum.DONE);
  }

  createTask(task: ITask) {
    task.id = uuid.v4();
    this._tasks.push(task);
    localStorage.setItem(this.TASK_KEY, JSON.stringify(this._tasks));
  }

  updateTask(updatedTask: ITask) {
    console.log(updatedTask);
    this._tasks = this._tasks.filter(task => task.id != updatedTask.id);
    this._tasks.push(updatedTask);
    localStorage.setItem(this.TASK_KEY, JSON.stringify(this._tasks));
  }

  saveTaskList(tasks: ITask[]) {
    this._tasks = this._tasks.filter(task => !tasks.includes(task));
    this._tasks.push(...tasks);
    localStorage.setItem(this.TASK_KEY, JSON.stringify(this._tasks));
  }
}
