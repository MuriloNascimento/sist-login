importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');

var config = {
    messagingSenderId: "761472737871"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Sócarrão';
  const notificationOptions = {
    body: 'Olá voce tem uma nova mensagem.',
    icon: 'http://vm.dev.socarrao/images/icone-socarrao.gif'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
