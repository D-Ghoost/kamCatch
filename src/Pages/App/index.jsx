import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../Login";
import Home from "../Home";


const AppRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return (
    <RouterProvider router={ AppRouter } />
  )
}

export default App
