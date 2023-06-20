import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Mani from "../Layout/Mani";
import Home from "../Pages/Home/Home";
import AllImage from "../Pages/All Image/AllImage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Mani></Mani>
      },
      {
        path: "/all_image",
        element: <AllImage></AllImage>
      }
    ]
  }
]);

export default router;