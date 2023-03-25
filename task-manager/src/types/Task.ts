import { Category } from './Category';

export interface Task {
    id: number;
    name: string;
    description: string;
    dueDate: Date;
    status: 'TODO' | 'WIP' | 'DONE';
    category: Category | undefined
  }
  