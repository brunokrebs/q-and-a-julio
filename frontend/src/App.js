import { QueryClientProvider, QueryClient } from "react-query";
import { AddTask } from "./AddTask";
import { ListTasks } from "./ListTasks";
import { Header } from "./Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-400 h-full">
        <div className="container mx-auto py-5 flex flex-col gap-5">
          <Header />
          <AddTask />
          <ListTasks />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
