import type { Task } from "../utils/tasks.ts";
import ListItem from "./ListItem.tsx";

interface TodoListProps {
  totalTasks: number;
  tasks: Task[];
}

export default function TodoList({ tasks, totalTasks }: TodoListProps) {
  return (
    <>
      <p className="text-gray-500 text-xs mt-2 uppercase">
        {totalTasks} total items
      </p>
      <section aria-label="Todo List" className="mt-8">
        <ul>
          {tasks.map((task: Task) => {
            return <ListItem listItem={task} />;
          })}
        </ul>
      </section>
    </>
  );
}
