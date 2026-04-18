import type { Task } from "../utils/tasks.ts";
import { Trash2 } from "lucide-react";
import { deleteTask, toggleTask } from "../utils/tasks.ts";
import type { Dispatch, SetStateAction } from "react";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";

interface ListItemProps {
  listItem: Task;
  setTask: Dispatch<SetStateAction<Task[]>>;
}

export default function ListItem({ listItem, setTask }: ListItemProps) {
  function handleDelete() {
    setTask((prevTask: Task[]) => deleteTask(prevTask, listItem));
  }

  return (
    <li className="bg-gray-300 border border-gray-400 rounded-md py-2 px-4 flex justify-between items-center text-lg">
      <div className="flex items-center gap-4">
        <Checkbox.Root
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTask((prevTask: Task[]) => toggleTask(prevTask, listItem));
            }
          }}
          className="flex items-center justify-center size-5 shrink-0 rounded-md appearance-none  bg-gray-100 outline-none border border-gray-500 data-[state=checked]:bg-purple-700 data-[state=checked]:border-purple-700 cursor-pointer a11y-rings"
          checked={listItem.isComplete}
          aria-label={`Toggle ${listItem.text} Completion`}
          id={`${listItem.id}`}
          onCheckedChange={() => {
            setTask((prevTask: Task[]) => toggleTask(prevTask, listItem));
          }}
        >
          <Checkbox.Indicator className="flex items-center justify-center text-white">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        {!listItem.isComplete ? (
          <p>{listItem.text}</p>
        ) : (
          <p className="line-through text-gray-600">{listItem.text}</p>
        )}
      </div>
      <button
        aria-label={`Delete ${listItem.text}`}
        className="group rounded-md cursor-pointer p-2  focus-visible:outline-red-500 focus-visible:outline-2"
        onClick={handleDelete}
      >
        <Trash2
          strokeWidth={2}
          className="size-4 text-gray-600 cursor-pointer
          group-focus-visible:text-red-500 group-hover:text-red-500 outline-none
          transition-colors duration-200 ease-in-out"
        />
      </button>
    </li>
  );
}
