import { useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList.tsx";
import type { Task } from "./utils/tasks.ts";

gsap.registerPlugin(SplitText);

function App() {
  const [tasks, setTask] = useState<Task[]>(() => {
    const storedTasks: string | null = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Saves the list to local storage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <main className="max-w-lg mx-auto px-4 mt-10">
        <Header
          completeTaskCount={
            tasks.filter((task: Task): boolean => !task.isComplete).length
          }
        />
        <AddTask setTask={setTask} />
        <hr className="my-8 border-gray-600" />
        <TodoList tasks={tasks} setTask={setTask} />
      </main>
    </>
  );
}

export default App;
