import type { Category } from './Category';
import type { TaskStatus } from './TaskStatus';
export interface Task {
    id: number;
    name: string;
    description: string;
    dueDate: Date;
    status: TaskStatus;
    category: Category | undefined
  }
  