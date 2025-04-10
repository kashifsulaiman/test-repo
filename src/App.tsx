import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

// Define the Task interface for type safety
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // Initialize tasks state with sample todo items
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Tailwind CSS', completed: true },
  ]);

  // Function to add a new task to the list
  const addTask = (text: string) => {
    if (text.trim() === '') return; // Do not add empty tasks
    const newTask: Task = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the completed status of a task
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl font-bold">Todo List</h1>
      </header>
      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white rounded shadow p-4 max-w-xl mx-auto">
          {/* Task Input Section */}
          <TodoInput onAddTask={addTask} />
          {/* Todo List */}
          <ul className="mt-4 space-y-2">
            {tasks.map(task => (
              <TodoItem key={task.id} task={task} toggleTask={toggleTask} />
            ))}
          </ul>
        </div>
      </main>
      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center py-2">
        © 2023 Todo App
      </footer>
    </div>
  );
};

export default App;