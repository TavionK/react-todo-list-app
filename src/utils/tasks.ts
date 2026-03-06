export interface Task {
  id: string;
  text: string;
  isComplete: boolean;
}

export function addTask(tasksArr: Task[], newTask: Task): Task[] {
  return [...tasksArr, newTask];
}
