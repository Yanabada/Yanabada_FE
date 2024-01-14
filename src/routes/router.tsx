import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Points from "@pages/myPage/points";
import PointsMiddleTabList from "@pages/myPage/components/PointsMiddleTabList";
import PointsMiddleTabDisappear from "@pages/myPage/components/PointsMiddleTabDisappear";
import SalesHistory from "@pages/myPage/salesHistory";
import Sell from "@pages/sell";
import Products from "@pages/products";
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
      { path: "/products", element: <Products /> },
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
      },
      {
        path: "/mypage",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: <MyPage width="100%" />
          },
          {
            path: "points/list",
            element: (
              <>
                <Points />
                <PointsMiddleTabList width="100%" />
              </>
            )
          },
          {
            path: "points/disappear",
            element: (
              <>
                <Points />
                <PointsMiddleTabDisappear width="100%" />
              </>
            )
          },
          {
            path: "salesHistory",
            element: (
              <>
                <SalesHistory width="100%" />
              </>
            )
          }
        ]
      }
    ]
  }
]);

export default router;
