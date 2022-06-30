import { FaTrashAlt } from "react-icons/fa";

import { Button } from "./Button";

export const Task = ({ task, deleteTask }) => {
  return (
    <div className="bg-gray-500 text-white p-4 rounded-md drop-shadow-lg flex justify-between">
      <div className="text-lg">
        <span className="block text-sm text-gray-800">Task Description</span>
        {task.title}
      </div>
      <div className="flex items-stretch">
        <Button
          action={() => {
            deleteTask(task);
          }}
        >
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
};
