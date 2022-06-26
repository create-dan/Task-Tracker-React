import React from "react";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";

const App = () => {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

  //Add task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    // console.log('delete',id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleRemainder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTasks(!showAddTasks)}
        showAdd={showAddTasks}
      />
      {showAddTasks && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
};

export default App;
