import "bootstrap/dist/css/bootstrap.min.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./RoutesComponent/Layout";
import Home from "./RoutesComponent/Home";
import Blogs from "./RoutesComponent/Blogs";
import About from "./RoutesComponent/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,

  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },

  //       {
  //         path: "Blogs",
  //         element: <Blogs />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="Blogs" element={<Blogs/>}/>
        <Route path="About/:id" element={<About/>}/>
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router} />
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, harum.</div>

    </>
  );
}
export default App;
