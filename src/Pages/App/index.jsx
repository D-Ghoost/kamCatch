import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginContent from "../LoginContent";


const AppRouter = createBrowserRouter([
  { path: "/", element: <LoginContent /> },
  { path: "/login", element: <LoginContent /> },
]);

function App() {
  return (
    <RouterProvider router={ AppRouter } />
  )
}

export default App
