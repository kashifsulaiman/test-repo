import React, { useState } from 'react';

// Define props for the TodoInput component
interface TodoInputProps {
  onAddTask: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTask }) => {
  // State to manage the current value of the input field
  const [input, setInput] = useState("");

  // Handler for adding a new task
  const handleAdd = () => {
    if (input.trim() === '') return; // Prevent adding empty tasks
    onAddTask(input);
    setInput(""); // Clear the input field after adding
  };

  return (
    <div className="flex">
      {/* Input field for entering new tasks */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a new task..."
      />
      {/* Button to add the new task */}
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;