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
      <label htmlFor="inputBox" className="sr-only"></label>
      <input
        id="inputBox"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
        type="text"
        placeholder="Add Item..."
        className="border-2 border-purple-600 rounded-md w-full p-2"
      />
      <button
        aria-label="Add Item"
        className="bg-purple-600 p-2 text-black rounded-md ml-2 cursor-pointer hover:bg-purple-700 transition-colors duration-200 ease-in-out"
      >
        <Plus className="size-4" strokeWidth={3} />
      </button>
    </form>
  );
}
