import Home from "@pages/home";
import BottomNavBar from "@components/navBar/bottomNavBar";
import Chat from "@pages/chat";
import MyPage from "@pages/myPage";
import Profile from "@pages/myPage/profile";
import Points from "@pages/myPage/points";
import PointsMiddleTabList from "@pages/myPage/components/PointsMiddleTabList";
import PointsMiddleTabDisappear from "@pages/myPage/components/PointsMiddleTabDisappear";
import SalesHistory from "@pages/myPage/salesHistory";
import PurchaseHistory from "@pages/myPage/purchaseHistory";
import Management from "@pages/myPage/management";
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
import ReservationComplete from "@pages/purchase/reservationComplete";
import Notice from "@pages/notice";
import ChargeLists from "@pages/charge/list";
import { Suspense } from "react";
import SellCorrect from "@pages/sell/correct";

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
        path: "/notice",
        element: <Notice />
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
            path: "register/:id",
            element: <SellRegister />
          },
          {
            path: "correct/:id",
            element: <SellCorrect />
          },
          {
            path: "detail/:id",
            element: <SellDetail />
          },
          {
            path: "result",
            element: <SellResult />
          },
          {
            path: "confirm/:id",
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
            element: (
              <Suspense>
                <MyPage width="100%" />
              </Suspense>
            )
          },
          {
            path: "profile",
            element: (
              <Suspense>
                <Profile width="100%" />
              </Suspense>
            )
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
              <Suspense>
                <SalesHistory width="100%" />
              </Suspense>
            )
          },
          {
            path: "management",
            element: (
              <Suspense>
                <Management width="100%" />
              </Suspense>
            )
          },
          {
            path: "transactionStatement/sale",

            element: (
              <Suspense>
                <TransactionStatement width="100%" from="sale" />
              </Suspense>
            )
          },
          {
            path: "transactionStatement/purchase",
            element: (
              <Suspense>
                <TransactionStatement width="100%" from="purchase" />
              </Suspense>
            )
          },
          {
            path: "transactionStatement/cancel",
            element: (
              <Suspense>
                <TransactionStatement width="100%" from="cancel" />
              </Suspense>
            )
          },
          {
            path: "purchaseHistory",
            element: (
              <Suspense>
                <PurchaseHistory width="100%" />
              </Suspense>
            )
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
            path: "lists",
            element: (
              <Suspense>
                <ChargeLists />
              </Suspense>
            )
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
            path: "confirm/:id",
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
    path: "/products/:productId",
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
        element: <Purchase width="100%" divType="payInfo" />
      },
      {
        path: "editinfo",
        element: <EditInfo />
      },
      {
        path: "confirm",
        element: <ReservationComplete />
      }
    ]
  }
]);

export default router;
