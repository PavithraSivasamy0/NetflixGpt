import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Component/Login";
import Browse from "./Component/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter}>
        <Login />
        <Browse />
      </RouterProvider>
    </div>
  );
}

export default App;
