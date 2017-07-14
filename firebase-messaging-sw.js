importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyD6bsBSQeJCSXV5wpjOqRzQjAbwfsHuB4k",
    authDomain: "portal-revendas.firebaseapp.com",
    databaseURL: "https://portal-revendas.firebaseio.com",
    projectId: "portal-revendas",
    storageBucket: "portal-revendas.appspot.com",
    messagingSenderId: "1010230035914"
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
