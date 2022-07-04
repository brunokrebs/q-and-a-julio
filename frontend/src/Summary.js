/* eslint-disable import/no-duplicates */
// eslint-disable-next-line no-unused-vars
import { useTasksCount } from "./api/api.hooks";
import { useTasksQuery } from "./api/api.hooks";

export const Summary = () => {
  const { data: tasks } = useTasksQuery();
  var taskEffort = 0;
  var taskOpen = 0;
  var effortOpen = 0;
  if (tasks && tasks.length) {
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      taskEffort = taskEffort + (task ? parseInt(tasks[i].effort || 0) : 0);
      if (!task.archived) {
        taskOpen = taskOpen + 1;
        effortOpen = effortOpen + (parseInt(task.effort) || 0);
      }
    }
  }

  return (
    <div className="flex flex-col justify-end">
      <small>
        <strong>Sumarry:</strong>
        <ul style={{ display: "flex" }}>
          <div style={{ marginRight: "15px" }}>
            <li>Tasks open: {taskOpen}</li>
            <li>Effort open: {effortOpen}</li>
          </div>
          <div>
            <li>Total tasks: {tasks ? tasks.length : 0}</li>
            <li>Total effort: {taskEffort}</li>
          </div>
        </ul>
      </small>
    </div>
  );
};
