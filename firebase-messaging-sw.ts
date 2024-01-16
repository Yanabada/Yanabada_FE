import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// import { firebase } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

// IDs of divs that display registration token UI or request permission UI.
// const tokenDivId = "token_div";
// const permissionDivId = "permission_div";

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // Update the UI to include the received message.
  // appendMessage(payload);
});

export function resetUI() {
  // clearMessages();
  // showToken("loading...");
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.

  const vapidKey = import.meta.env.VITE_APP_VAPID_KEY;

  getToken(messaging, { vapidKey: vapidKey })
    .then((currentToken) => {
      if (currentToken) {
        sendTokenToServer(currentToken);
        console.log("currentToken", currentToken);
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

// function showToken(currentToken: string) {
//   // Show token in console and UI.
//   const tokenElement = document.querySelector("#token")!;
//   tokenElement.textContent = currentToken;
// }

// Send the registration token your application server, so that it can:
// - send messages back to this app
// - subscribe/unsubscribe the token from topics
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

// function showHideDiv(divId: string, show: boolean) {
//   const div = document.querySelector("#" + divId)! as HTMLDivElement;
//   if (show) {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// }

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

// function deleteTokenFromFirebase() {
//   // Delete registration token.
//   getToken(messaging)
//     .then((currentToken) => {
//       deleteToken(messaging)
//         .then(() => {
//           console.log("Token deleted.", currentToken);
//           setTokenSentToServer(false);
//           // Once token is deleted update UI.
//           resetUI();
//         })
//         .catch((err) => {
//           console.log("Unable to delete token. ", err);
//         });
//     })
//     .catch((err) => {
//       console.log("Error retrieving registration token. ", err);
//       // showToken("Error retrieving registration token.");
//     });
// }

// Add a message to the messages element.
// function appendMessage(payload: MessagePayload) {
//   const messagesElement = document.querySelector("#messages")!;
//   const dataHeaderElement = document.createElement("h5");
//   const dataElement = document.createElement("pre");
//   dataElement.style.overflowX = "hidden;";
//   dataHeaderElement.textContent = "Received message:";
//   dataElement.textContent = JSON.stringify(payload, null, 2);
//   messagesElement.appendChild(dataHeaderElement);
//   messagesElement.appendChild(dataElement);
// }

// Clear the messages element of all children.
// function clearMessages() {
//   const messagesElement = document.querySelector("#messages")!;
//   while (messagesElement.hasChildNodes()) {
//     messagesElement.removeChild(messagesElement.lastChild!);
//   }
// }

// function updateUIForPushEnabled(currentToken: string) {
//   showHideDiv(tokenDivId, true);
//   showHideDiv(permissionDivId, false);
//   showToken(currentToken);
// }

// function updateUIForPushPermissionRequired() {
//   showHideDiv(tokenDivId, false);
//   showHideDiv(permissionDivId, true);
// }

// document.getElementById("request-permission-button")!.addEventListener("click", requestPermission);
// document.getElementById("delete-token-button")!.addEventListener("click", deleteTokenFromFirebase);

navigator.serviceWorker
  .register("./firebase-messaging-sw.js")
  .then(function (registration) {
    console.log("Service Worker registered with scope:", registration.scope);
  })
  .catch(function (error) {
    console.error("Service Worker registration failed:", error);
  });
