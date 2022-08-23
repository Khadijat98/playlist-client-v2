import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import "./App.scss";
import Dashboard from "./containers/Dashboard/Dashboard";

const App = () => {
  const queryClient = new QueryClient();

  return (
      <div className="app min-h-screen max-h-content w-screen bg-gradient-to-br from-purple-app to-blue-app box-border m-0 p-0">
         <QueryClientProvider client={queryClient}>
          <Dashboard />
         </QueryClientProvider>
      </div>
  );
}

export default App;