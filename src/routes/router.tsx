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
import Purchase from "@pages/purchase";
import Sell from "@pages/sell";
import Products from "@pages/products";
import ProductDetail from "@pages/productDetail";
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
import ChatRoom from "@pages/chat/ChatRoom";
import SellResult from "@pages/sell/result";
import SellConfirm from "@pages/sell/confirm";
import Charge from "@pages/charge";
import ChargeIntro from "@pages/charge/intro";
import PasswordConfirm from "@pages/charge/password";
import Account from "@pages/charge/account";
import ChargeConfirm from "@pages/charge/confirm";
import ChargeSuccess from "@pages/charge/success";
import EditInfo from "@pages/purchase/editInfo";
import SignInFourth from "@pages/signIn/components/signInFourth/SignInFourth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <BottomNavBar />
          </>
        )
      },
      {
        path: "/products",
        element: (
          <>
            <Products />
            <BottomNavBar />
          </>
        )
      },
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
          },
          {
            path: "result",
            element: <SellResult />
          },
          {
            path: "confirm",
            element: <SellConfirm />
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
      },
      {
        path: "/charge",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            index: true,
            element: (
              <>
                <Charge />
              </>
            )
          },
          {
            path: "intro",
            element: <ChargeIntro />
          },
          {
            path: "password",
            element: <PasswordConfirm />
          },
          {
            path: "account",
            element: <Account />
          },
          {
            path: "confirm",
            element: <ChargeConfirm />
          },
          {
            path: "success",
            element: <ChargeSuccess />
          }
        ]
      }
    ]
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/products/:id",
    element: <ProductDetail />
  },
  {
    path: "/chat",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <>
            <Chat />
            <BottomNavBar />
          </>
        )
      },
      {
        path: "/chat:roomId",
        element: <ChatRoom />
      }
    ]
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
      },
      {
        path: "3",
        element: <SignInFourth />
      }
    ]
  },
  {
    path: "/purchase",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <Purchase
            width="100%"
            timerText="3일 15시간 23분"
            divType="payInfo"
            yanoljaPurchasePrice="800,000"
            charge="40,000"
            yanoljaPoint="0"
            totalPurchasePrice="840,000"
          />
        )
      },
      {
        path: "editinfo",
        element: <EditInfo />
      }
    ]
  }
]);

export default router;
