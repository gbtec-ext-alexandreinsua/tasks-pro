import { CdkDrag } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ITask, TaskStatesEnum } from 'src/app/model/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [DatePipe, MatCardModule, CdkDrag],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  task: ITask = {
    title: 'My Task',
    description: 'my description',
    status: TaskStatesEnum.TODO,
    createAt: 1721648681538
  };
}
