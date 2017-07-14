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
    body: 'Olá voce tem uma nova mensagem no chat.',
    icon: 'http://vm.dev.socarrao/images/icone-socarrao.gif',
    click_action: 'http://dev.socarrao/meu-socarrao/chat-resumo'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
