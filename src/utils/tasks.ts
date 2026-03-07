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

export function toggleTask(tasksArr: Task[], taskItem: Task) {
  return tasksArr.map((task: Task) => {
    if (taskItem.id === task.id) {
      return { ...task, isComplete: !task.isComplete };
    }
    return task;
  });
}

export function deleteCompletedTasks(tasksArr: Task[]) {
  return tasksArr.filter((task: Task) => !task.isComplete);
}
