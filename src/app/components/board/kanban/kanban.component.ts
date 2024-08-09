import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ITask, TaskStatesEnum } from 'src/app/model/task.interface';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [TaskListComponent, CdkDropListGroup],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss'
})
export class KanbanComponent implements OnChanges {
  @Input() pendingTasks!: ITask[];
  @Input() activeTasks!: ITask[];
  @Input() doneTasks!: ITask[];

  taskStatesEnum = TaskStatesEnum;

  @Output() saveOrderedTaskList = new EventEmitter<ITask[]>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  saveOrderedTasksList(event: ITask[]) {
    this.saveOrderedTaskList.emit(event);
  }
}
