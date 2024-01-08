import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import { Outlet, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
        <BottomNavBar />
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
