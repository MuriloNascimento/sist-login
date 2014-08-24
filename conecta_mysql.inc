<?php
	$conecao = mysql_connect("127.0.0.1:3306", "root", "niane");
	if (!$conecao) {
	    die("Não foi possível conectar: " . mysql_error());
	}
	mysql_select_db("sistLogin");
?>