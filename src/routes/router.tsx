import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Sell from "@pages/sell";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "@pages/login";
import EmailLogin from "@pages/login/EmailLogin";
import SignIn from "@pages/signIn";
import Search from "@pages/search";
import SignInFirst from "@pages/signIn/components/signInFirst/SignInFirst";
import SignInSecond from "@pages/signIn/components/signInSecond/SignInSecond";
import SignInThird from "@pages/signIn/components/signInThird/SignInThird";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/sell",
        element: <Sell />
      },
      {
        path: "/chat",
        element: (
          <>
            <Chat />
            <BottomNavBar />
          </>
        )
      },
      {
        path: "/myPage",
        element: <MyPage />
      },
      {
        path: "/login",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Login />
          },
          {
            path: "email",
            element: <EmailLogin />
          }
        ]
      },
      {
        path: "/signin",
        element: <SignIn />,
        children: [
          {
            index: true,
            element: <SignInFirst />
          },
          {
            path: "1",
            element: <SignInSecond />
          },
          {
            path: "2",
            element: <SignInThird />
          }
        ]
      }
    ]
  }
]);

export default router;
