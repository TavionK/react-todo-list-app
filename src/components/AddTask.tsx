import { Plus } from "lucide-react";
import { type Task, addTask } from "../utils/tasks.ts";
import { type Dispatch, type SetStateAction, useState } from "react";

interface AddTaskProps {
  setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function AddTask({ setTask }: AddTaskProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newTask = {
          id: crypto.randomUUID(),
          text: inputValue,
          isComplete: false,
        };
        setTask((prevTask: Task[]) => addTask(prevTask, newTask));
        setInputValue("");
      }}
      className="flex justify-between items-center gap-4 mt-10"
    >
      <label htmlFor="inputBox" className="sr-only">
        Input Task
      </label>
      <input
        id="inputBox"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        type="text"
        placeholder="Add Item..."
        className="border border-gray-400 bg-gray-300 rounded-md w-full p-2 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-transparent h-10"
      />
      <button
        aria-label="Add Item"
        className="bg-purple-600 p-2 text-white rounded-md cursor-pointer hover:bg-purple-700 transition-colors duration-200 ease-in-out size-10 flex items-center justify-center shrink-0 a11y-rings"
      >
        <Plus className="size-5" strokeWidth={3} />
      </button>
    </form>
  );
}
