import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ITask, TaskStatesEnum } from '../../model/task.interface';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [FormlyModule, FormlyMaterialModule, MatButtonModule, MatDialogModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<TaskDialogComponent>);

  form = new FormGroup({});
  model: ITask = {
    title: 'My task',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repellat consequuntur? Nostrum sit, alias autem quo maxime quis vitae perferendis porro explicabo. Fugiat modi aut provident accusantium blanditiis dolores illo!',
    status: TaskStatesEnum.PENDING,
    createAt: new Date().getTime()
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      props: {
        label: 'Title',
        placeholder: 'Task title',
        attributes: {
          autocomplete: 'off'
        },
        appearance: 'outline',
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
        attributes: {
          autocomplete: 'off'
        },
        appearance: 'outline',
        required: true,
        rows: 5,
        minLength: 10
      }
    }
  ];

  onSubmit(model: ITask) {
    if (this.form.valid) this.dialogRef.close(model);
  }
}
