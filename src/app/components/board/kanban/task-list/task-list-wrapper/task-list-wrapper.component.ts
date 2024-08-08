import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
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

  drop(event: CdkDragDrop<ITask[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    // todo: save the tasks order
  }
}
