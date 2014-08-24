<?php

	$login = $_POST["login"];
	$senha = $_POST["senha"];

	include "conecta_mysql.inc";

	try {

		$sql = "SELECT * FROM usuario WHERE login = '$login' AND senha = '$senha'";
		$resultado = mysql_query($sql,$conecao);

		if(mysql_num_rows($resultado) == 0){
			$saida = "Senha inválida";
		} else {
			$saida = "Senha válida";
		}

	} catch (Exception $e) {
		echo $e;
	}

	mysql_close();

?>

<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/stilo.css">
		<title>Resultado</title>
	</head>
	<body>
		<section>
				<?php echo "<div> $saida </div>";  ?>
		</section>
	</body>
</html>