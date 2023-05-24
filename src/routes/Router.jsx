import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Mani from "../Layout/Mani";
import Home from "../Pages/Home/Home";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Mani></Mani>
      }
    ]
  }
]);

export default router;