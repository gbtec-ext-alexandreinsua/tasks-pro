import { Injectable } from '@angular/core';
import { ITask } from '../model/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService {
  private TASK_KEY = 'TASKS';
  private _tasks: ITask[];

    constructor() {
    this._tasks = JSON.parse(localStorage.getItem(this.TASK_KEY) || '[]');
  }

  get tasks(): ITask[] {
    return this._tasks;
  }
  

  save(task: ITask) {
    this._tasks.push(task);
    localStorage.setItem(this.TASK_KEY, JSON.stringify(this._tasks));
  }
}
