import NavBar from "components/navBar";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />
  }
]);

export default router;
