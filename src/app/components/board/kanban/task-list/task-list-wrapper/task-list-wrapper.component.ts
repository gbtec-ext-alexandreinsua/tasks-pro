import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list-wrapper',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-list-wrapper.component.html',
  styleUrl: './task-list-wrapper.component.scss'
})
export class TaskListWrapperComponent {}