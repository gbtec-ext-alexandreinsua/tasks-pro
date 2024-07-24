export interface ITask {
  title: string;
  description: string;
  status?: TaskStatesEnum;
  createAt?: number;
}

export enum TaskStatesEnum {
  TODO = 'todo',
  ACTIVE = 'active',
  DONE = 'done'
}
