import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITask } from 'src/app/model/task.interface';
import { ITaskList } from 'src/app/model/taskList.interface';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnChanges {
  @Input() pendingTasks!: ITask[];
  @Input() activeTasks!: ITask[];
  @Input() doneTasks!: ITask[];

  tasksList!: ITaskList[];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.tasksList = [
      { title: 'Pending', tasks: this.pendingTasks },
      { title: 'In progress', tasks: this.activeTasks },
      { title: 'Finished', tasks: this.doneTasks }
    ];
  }
}
