import type { Task } from "../utils/tasks.ts";
import ListItem from "./ListItem.tsx";
import type { Dispatch, SetStateAction } from "react";
import { clearAllTasks, deleteCompletedTasks } from "../utils/tasks.ts";

interface TodoListProps {
  tasks: Task[];
  setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function TodoList({ tasks, setTask }: TodoListProps) {
  function handleClearCompleted() {
    setTask(deleteCompletedTasks(tasks));
  }

  function handleClearAll() {
    setTask(clearAllTasks);
  }

  return (
    <>
      <p className="text-gray-500 text-xs mt-2 uppercase">
        {tasks.length} total {tasks.length === 1 ? "task" : "tasks"} |{" "}
        <span
          onClick={handleClearCompleted}
          className="cursor-pointer border-b border-b-purple-700/0  hover:text-purple-700 hover:border-b-purple-700 transition-colors duration-300 ease-in-out"
        >
          Clear Complete
        </span>
      </p>
      <section aria-label="Todo List" className="mt-8">
        <ul className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-600 text-center text-lg translate-y-10">
              No tasks, add one above.
            </p>
          ) : (
            tasks.map((task: Task) => (
              <ListItem key={task.id} listItem={task} setTask={setTask} />
            ))
          )}
        </ul>
      </section>
      {tasks.length > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleClearAll}
            className="bg-purple-600 px-2 py-1 rounded-md cursor-pointer hover:bg-purple-700 transition-colors duration-200 ease-in-out"
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
}
