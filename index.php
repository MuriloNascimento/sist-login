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
</html>