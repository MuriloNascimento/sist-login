<!DOCTYPE html>

<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/stilo.css">
		<title>teste de login</title>
	</head>
	<body>
		<header>
			<div>
				<h1>Teste de login</h1>
			</div>
		</header>
		<section>
			<div>
				<form action="resultado.php" method="post">
					<label for="login">Login
					<input type="text" name="login" id="login" value="" autofcus></label><br>
					<label for="senha">Senha
					<input type="password" name="senha" id="senha" value="" maxlength="8"></label><br>
					<button type="submit" name="logar" id="logar">logar</button>
				</form>
			</div>
		</section>
	</body>
	
	
	<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
        <script>
            // Initialize Firebase
		console.log('teste');
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

            messaging.requestPermission().then(function() {
                console.log('Notification permission granted.');
                messaging.getToken().then(function(currentToken) {
                    if (currentToken) {
                        
                    } else {
                        console.log('No Instance ID token available. Request permission to generate one.');
                    }
                }).catch(function(err) {

                });
            }).catch(function(err) {
                console.log('Unable to get permission to notify.', err);
            });
        </script>
</html>
