import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
});

export const insertTask = (task) => {
  return axiosClient.post("/", task);
};

export const getTasks = () => {
  return axiosClient.get("/");
};

export const deleteTask = (task) => {
  return axiosClient.delete(`/${task._id}`);
};
