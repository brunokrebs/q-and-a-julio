import { useDeleteTask, useTasksQuery } from "./api/api.hooks";
import { Task } from "./Task";

export const ListTasks = () => {
  const { data: tasks } = useTasksQuery();
  const deleteTask = useDeleteTask();

  return (
    <ul className="flex flex-col gap-4">
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task} deleteTask={deleteTask.mutate} />
        </li>
      ))}
    </ul>
  );
};
