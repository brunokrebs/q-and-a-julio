import { useTasksCount } from "./api/api.hooks";

export const Summary = () => {
  const { data: tasksCount } = useTasksCount();
  return (
    <div className="flex flex-col justify-end">
      <small>You have {tasksCount} tasks open.</small>
    </div>
  );
};
