import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ITask } from '../model/task.interface';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, TaskDialogComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  readonly dialog = inject(MatDialog);

  showTaskDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent);
    dialogRef.afterClosed().subscribe((task: ITask) => {
      if (task) console.log(`Dialog result: ${task.title}`);
    });
  }
}
