import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import NavBar from "components/navBar";
import { Outlet, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
        <NavBar />
      </div>
    ),
    children: [
      {
        index: true
        // element: <Home />
      },
      {
        path: "/search"
        // element: <Search />
      },
      {
        path: "/sell"
        // element: <Sell />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/myPage",
        element: <MyPage />
      }
    ]
  }
]);

export default router;
