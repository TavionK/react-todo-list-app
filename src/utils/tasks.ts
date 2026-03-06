export interface Task {
  id: string;
  text: string;
  isComplete: boolean;
}

export function addTask(tasksArr: Task[], newTask: Task): Task[] {
  return [...tasksArr, newTask];
}

export function deleteTask(tasksArr: Task[], taskItem: Task) {
  return tasksArr.filter((task: Task) => taskItem.id !== task.id);
}
