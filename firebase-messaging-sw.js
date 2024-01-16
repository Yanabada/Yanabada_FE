/* global firebase */

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.

  **/
self.importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js");
self.importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
});

// firebase.initializeApp({
//   apiKey: "AIzaSyDlvtPFyTnDxhnvVFk9g2jZ13-FmBX3yr8",
//   authDomain: "yanabada-b13ee.firebaseapp.com",
//   projectId: "yanabada-b13ee",
//   storageBucket: "yanabada-b13ee.appspot.com",
//   messagingSenderId: "520725640895",
//   appId: "1:520725640895:web:baca2dbe171b4a14ff380a",
//   measurementId:
//     "BHqMHGxxzdqP53a45E4IiCG48QhtNY9AlufUFHxz7afvMlhJO-npd3TWJHGXgqQz_OoZuVHqn4SMfrn1wA465po"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
const messaging = firebase.messaging();

self.addEventListener("install", function () {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function () {
  console.log("fcm sw activate..");
});

self.addEventListener("push", function (e) {
  console.log("push: ", e.data.json());
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData
  };
  console.log("push: ", { resultData, notificationTitle, notificationOptions });

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(self.clients.openWindow(url));
});

messaging.onBackgroundMessage(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
