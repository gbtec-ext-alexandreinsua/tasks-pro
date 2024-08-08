import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TaskRepositoryService } from 'src/app/services/task-repository.service';
import { ITask } from '../../model/task.interface';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { KanbanComponent } from './kanban/kanban.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [KanbanComponent, MatButtonModule, MatDialogModule, MatIconModule, TaskDialogComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  readonly dialog = inject(MatDialog);
  readonly taskRepository = inject(TaskRepositoryService);

  pendingTasks!: ITask[];
  activeTasks!: ITask[];
  doneTasks!: ITask[];

  constructor() {
    this.pendingTasks = this.taskRepository.pendingTasks;
  }

  showTaskDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent);
    dialogRef.afterClosed().subscribe((task: ITask) => {
      if (task) {
        this.taskRepository.saveTask(task);
        this.pendingTasks = [...this.taskRepository.pendingTasks];
        this.activeTasks = [...this.taskRepository.activeTasks];
        this.doneTasks = [...this.taskRepository.doneTasks];
      }
    });
  }
  safeList(tasks: ITask[]) {
    this.taskRepository.saveTaskList(tasks);
  }
}
