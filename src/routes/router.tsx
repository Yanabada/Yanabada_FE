import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Points from "@pages/myPage/points";
import PointsMiddleTabList from "@pages/myPage/components/PointsMiddleTabList";
import PointsMiddleTabDisappear from "@pages/myPage/components/PointsMiddleTabDisappear";
import Sell from "@pages/sell";
import Products from "@pages/products";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Search from "@pages/search";

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
        element: <Chat />
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
            element: <MyPage />
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
          }
        ]
      }
    ]
  }
]);

export default router;
