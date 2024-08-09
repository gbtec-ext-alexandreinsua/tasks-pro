import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITask } from 'src/app/model/task.interface';
import { TaskRepositoryService } from 'src/app/services/task-repository.service';
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
  @Input() identifier!: string;
  @Output() movedTask = new EventEmitter<ITask[]>();

  tasksService = inject(TaskRepositoryService);

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
      this.movedTask.emit(this.tasks);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const updatedTask = event.item.data;
      updatedTask.status = event.container.id;
      this.tasksService.updateTask(updatedTask);
    }
  }
}
