import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import { AppProvider } from "../../Context";


const AppRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={ AppRouter } />
    </AppProvider>
  )
}

export default App
