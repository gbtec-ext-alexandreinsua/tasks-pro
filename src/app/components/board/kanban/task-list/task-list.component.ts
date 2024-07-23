import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/model/task.interface';
import { TaskListWrapperComponent } from './task-list-wrapper/task-list-wrapper.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskListWrapperComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() title!: string;
  @Input() tasks!: ITask[];
}
