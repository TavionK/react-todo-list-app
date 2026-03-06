import { Plus } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { type Task, addTask } from "../utils/tasks.ts";

interface AddTaskProps {
  setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function AddTask({ setTask }: AddTaskProps) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      text: e.target[0].value,
      isComplete: false,
    };
    setTask((prevTask: Task[]) => addTask(prevTask, newTask));
    e.target[0].value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center gap-4 mt-10"
    >
      <input
        required
        type="text"
        placeholder="Add Item..."
        className="border-2 border-purple-600 rounded-md w-full p-2"
      />
      <button className="bg-purple-600 p-2 text-black rounded-md ml-2">
        <Plus className="size-4" strokeWidth={3} />
      </button>
    </form>
  );
}
