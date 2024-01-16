import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import theme from "themes/theme";
import "./main.css";
import { Global, ThemeProvider } from "@emotion/react";
import globalStyles from "styles/globalStyles";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Update the UI to include the received message.
  // appendMessage(payload);
});

function resetUI() {
  const vapidKey = import.meta.env.VITE_APP_VAPID_KEY;

  getToken(messaging, { vapidKey: vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        sendTokenToServer(currentToken);
        alert(currentToken);
        // updateUIForPushEnabled(currentToken);
      } else {
        // Show permission request.
        console.log("No registration token available. Request permission to generate one.");
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // showToken("Error retrieving registration token.");
      setTokenSentToServer(false);
    });
}

function sendTokenToServer(currentToken: string) {
  if (!isTokenSentToServer()) {
    console.log("Sending token to server...", currentToken);
    // TODO(developer): Send the current token to your server.
    setTokenSentToServer(true);
  } else {
    console.log("Token already sent to server so won't send it again unless it changes");
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem("sentToServer") === "1";
}

function setTokenSentToServer(sent: boolean) {
  window.localStorage.setItem("sentToServer", sent ? "1" : "0");
}

export function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // TODO(developer): Retrieve a registration token for use with FCM.
      // In many cases once an app has been granted notification permission,
      // it should update its UI reflecting this.
      resetUI();
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
}

requestPermission();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>
);
