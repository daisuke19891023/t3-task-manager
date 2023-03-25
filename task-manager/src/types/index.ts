export interface Task {
    id: number;
    name: string;
    description: string;
    dueDate: Date;
    status: 'TODO' | 'WIP' | 'DONE';
    category: Category | null
  }
  
  export interface Category {
    id: number;
    name: string;
    description: string;
    color:string
  }
  