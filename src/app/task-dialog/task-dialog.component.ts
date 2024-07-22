import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ITask, TaskStatesEnum } from '../model/task.interface';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [FormlyModule, FormlyMaterialModule, MatButtonModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskDialogComponent {
  form = new FormGroup({});
  model: ITask = { title: '', description: '', status: TaskStatesEnum.TODO, createAt: new Date().getTime() };
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props: {
        label: 'Title',
        placeholder: 'Task title',
        required: true,
        minLength: 5
      }
    },
    {
      key: 'description',
      type: 'textarea',
      props: {
        label: 'Description',
        placeholder: 'Task description',
        required: true,
        rows: 10,
        minLength: 10
      }
    }
  ];

  onSubmit(model: ITask) {
    if (this.form.valid) console.log(model);
  }
}
