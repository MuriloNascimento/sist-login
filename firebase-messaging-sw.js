importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');


var config = {
    apiKey: "AIzaSyDOhdzJdYkrPz9yw4e694SDq0tRWecbpYc",
    authDomain: "app-portal-revenda.firebaseapp.com",
    databaseURL: "https://app-portal-revenda.firebaseio.com",
    projectId: "app-portal-revenda",
    storageBucket: "app-portal-revenda.appspot.com",
    messagingSenderId: "761472737871"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
