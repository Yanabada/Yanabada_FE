import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Sell from "@pages/sell";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "@pages/login";
import EmailLogin from "@pages/login/EmailLogin";

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
        index: true,
        element: <Home />
      },
      {
        path: "/search"
        // element: <Search />
      },
      {
        path: "/sell",
        element: <Sell />
      },
      {
        path: "/chat",
        element: <Chat />
      },
      {
        path: "/myPage",
        element: <MyPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/emailLogin",
        element: <EmailLogin />
      }
    ]
  }
]);

export default router;
