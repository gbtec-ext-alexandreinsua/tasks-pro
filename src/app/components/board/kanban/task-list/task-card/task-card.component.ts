import { CdkDrag } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ITask } from 'src/app/model/task.interface';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [DatePipe, MatCardModule, CdkDrag],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task!: ITask;
}
