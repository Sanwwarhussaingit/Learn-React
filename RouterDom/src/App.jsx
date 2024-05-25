import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./RoutesComponent/Layout";
import Home from "./RoutesComponent/Home";
import Blogs from "./RoutesComponent/Blogs";
import About from "./RoutesComponent/About";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "",
          element: <Home />,
        },

        {
          path: "Blogs",
          element: <Blogs />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
