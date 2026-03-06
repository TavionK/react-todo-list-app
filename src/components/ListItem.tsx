import type { Task } from "../utils/tasks.ts";
import { Trash } from "lucide-react";
import { deleteTask } from "../utils/tasks.ts";
import type { Dispatch, SetStateAction } from "react";

interface ListItemProps {
  listItem: Task;
  setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function ListItem({ listItem, setTask }: ListItemProps) {
  function handleDelete() {
    setTask((prevTask: Task[]) => deleteTask(prevTask, listItem));
  }

  return (
    <li className="bg-gray-700 rounded-md py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        {/*<input*/}
        {/*  type="checkbox"*/}
        {/*  className="mr-2"*/}
        {/*  checked={listItem.isComplete}*/}
        {/*></input>*/}
        {listItem.text}
      </div>
      <button
        className="group rounded-md cursor-pointer p-2"
        onClick={handleDelete}
      >
        <Trash className="size-4 cursor-pointer group-focus-visible:text-red-500 group-hover:text-red-500 transition-colors duration-200 ease-in-out" />
      </button>
    </li>
  );
}
