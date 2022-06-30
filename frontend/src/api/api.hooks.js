import { useMutation, useQuery, useQueryClient } from "react-query";
import { insertTask, getTasks, deleteTask } from "./api.requests";

export const useTasksQuery = (select) => {
  return useQuery(
    ["tasks"],
    async () => {
      const { data } = await getTasks();
      return data;
    },
    { select }
  );
};

export const useTasksCount = () => useTasksQuery((data) => data.length);

export const useInsertTask = () => {
  const queryClient = useQueryClient();
  return useMutation((task) => insertTask(task), {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation((task) => deleteTask(task), {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
