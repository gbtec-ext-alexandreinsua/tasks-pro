import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/model/task.interface';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list-wrapper',
  standalone: true,
  imports: [TaskCardComponent, CdkDropList],
  templateUrl: './task-list-wrapper.component.html',
  styleUrl: './task-list-wrapper.component.scss'
})
export class TaskListWrapperComponent {
  @Input() tasks!: ITask[];
  @Output() movedTask = new EventEmitter<ITask[]>();

  drop(event: CdkDragDrop<ITask[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.movedTask.emit(this.tasks);
  }
}
