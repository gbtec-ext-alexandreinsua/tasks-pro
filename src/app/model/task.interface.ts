export interface ITask {
  title: string;
  description: string;
  status?: TaskStatesEnum;
  createAt?: number;
}

export enum TaskStatesEnum {
  PENDING = 'pending',
  ACTIVE = 'active',
  DONE = 'done'
}
