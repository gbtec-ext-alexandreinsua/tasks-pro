import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITask, TaskStatesEnum } from 'src/app/model/task.interface';
import { ITaskList } from 'src/app/model/taskList.interface';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KanbanComponent implements OnInit {
  @Input() tasks!: ITask[];

  tasksList!: ITaskList[];

  ngOnInit(): void {
    this.tasksList = [
      { title: 'Pending', tasks: this.assigTask(TaskStatesEnum.TODO) },
      { title: 'In progress', tasks: this.assigTask(TaskStatesEnum.ACTIVE) },
      { title: 'Finished', tasks: this.assigTask(TaskStatesEnum.DONE) }
    ];
  }

  private assigTask(status: TaskStatesEnum) {
    return this.tasks?.filter(task => task.status === status);
  }
}
