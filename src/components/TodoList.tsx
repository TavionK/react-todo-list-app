import type { Task } from "../utils/tasks.ts";
import ListItem from "./ListItem.tsx";
import type { Dispatch, SetStateAction } from "react";

interface TodoListProps {
  tasks: Task[];
  setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function TodoList({ tasks, setTask }: TodoListProps) {
  return (
    <>
      <p className="text-gray-500 text-xs mt-2 uppercase">
        {tasks.length} total items
      </p>
      <section aria-label="Todo List" className="mt-8">
        <ul className="space-y-4">
          {tasks.map((task: Task) => {
            return <ListItem key={task.id} listItem={task} setTask={setTask} />;
          })}
        </ul>
      </section>
    </>
  );
}
