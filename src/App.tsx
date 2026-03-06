import { useState } from "react";
// Component Imports
import Header from "./components/Header";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTask] = useState([]);

  return (
    <>
      <main className="max-w-lg mx-auto px-4 mt-10">
        <Header taskCount={tasks.length} />
        <AddTask setTask={setTask} />
      </main>
    </>
  );
}

export default App;
