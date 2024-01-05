import CustomDatePicker from "../components/Calendar/index";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World</h1>
  },
  {
    path: "/calendar",
    element: <CustomDatePicker />
  }
]);

export default router;
