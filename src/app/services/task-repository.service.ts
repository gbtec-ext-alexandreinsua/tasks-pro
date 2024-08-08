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
    return this._tasks.filter((task: ITask) => task.status === TaskStatesEnum.PENDING);
  }

  get doneTasks(): ITask[] {
    return this._tasks.filter((task: ITask) => task.status === TaskStatesEnum.PENDING);
  }

  save(task: ITask) {
    task.id = uuid.v4();
    this._tasks.push(task);
    localStorage.setItem(this.TASK_KEY, JSON.stringify(this._tasks));
  }
}
