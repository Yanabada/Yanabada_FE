import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Points from "@pages/myPage/points";
import PointsMiddleTabList from "@pages/myPage/components/PointsMiddleTabList";
import PointsMiddleTabDisappear from "@pages/myPage/components/PointsMiddleTabDisappear";
import SalesHistory from "@pages/myPage/salesHistory";
import PurchaseHistory from "@pages/myPage/purchaseHistory";
import TransactionStatement from "@pages/myPage/transactionStatement";
import Sell from "@pages/sell";
import Products from "@pages/products";
// import ProductDetail from "@pages/productDetail";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "@pages/login";
import EmailLogin from "@pages/login/EmailLogin";
import SignIn from "@pages/signIn";
import Search from "@pages/search";
import SignInFirst from "@pages/signIn/components/signInFirst/SignInFirst";
import SignInSecond from "@pages/signIn/components/signInSecond/SignInSecond";
import SignInThird from "@pages/signIn/components/signInThird/SignInThird";
import SellRegister from "@pages/sell/register";
import SellDetail from "@pages/sell/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
        <BottomNavBar />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: (
          <>
            <Products />
          </>
        )
      },
      // {
      //   path: "/products/:id",
      //   element: <ProductDetail />
      // },
      {
        path: "/sell",
        element: (
          <>
            <Outlet />
            <BottomNavBar />
          </>
        ),
        children: [
          {
            index: true,
            element: (
              <>
                <Sell />
              </>
            )
          },
          {
            path: "register",
            element: <SellRegister />
          },
          {
            path: "detail",
            element: <SellDetail />
          }
        ]
      },
      {
        path: "/chat",
        element: (
          <>
            <Chat />
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
            element: <SalesHistory width="100%" />
          },
          {
            path: "transactionStatement/sale",
            element: <TransactionStatement width="100%" from="sale" />
          },
          {
            path: "transactionStatement/purchase",
            element: <TransactionStatement width="100%" from="purchase" />
          },
          {
            path: "transactionStatement/cancel",
            element: <TransactionStatement width="100%" from="cancel" />
          },
          {
            path: "purchaseHistory",
            element: <PurchaseHistory width="100%" />
          }
        ]
      }
    ]
  },
  {
    path: "/search",
    element: <Search />
  }
]);

export default router;
