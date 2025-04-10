import React from 'react';

// Define the Task interface to enforce the task structure
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Define props for the TodoItem component
interface TodoItemProps {
  task: Task;
  toggleTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask }) => {
  return (
    <li className="flex items-center justify-between p-2 border rounded hover:bg-gray-50">
      <div className="flex items-center space-x-3">
        {/* Checkbox to mark task completion */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        {/* Display the task text with style changes if completed */}
        <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.text}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;