import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../Login";


const AppRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <RouterProvider router={ AppRouter } />
  )
}

export default App
