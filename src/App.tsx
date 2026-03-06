import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import type { Task } from "./utils/tasks.ts";

function App() {
  const [tasks, setTask] = useState<Task[]>([]);

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
      </main>
    </>
  );
}

export default App;
