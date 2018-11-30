<?php
require_once '../lib/bancoDeDados.php';

session_start ();

$bd = new BancoDeDados();

if (formularioEnviado ()) {
    $nome = $_POST["campoNome"];
    $email = $_POST["campoEmail"];
    $cpf = $_POST["campoCpf"];
    $tel = $_POST["campoTel"];
    $senha = $_POST["campoSenha"];
    
	if ($bd->abrirConexao()) {
	    $bd->executarSQL ( "insert into usuario (nomeUser,emailUser,cpfUser,telUser,nomeImgUser,senhaUser)values('$nome','$email','$cpf','$tel','./img/userPadrao.jpg','$senha')");
	}
	header ( "location: index.php" );
	
}

$bd->fecharConexao();


function formularioEnviado() {
    return isset ( $_POST ["campoNome"] ) && isset ( $_POST ["campoEmail"]) && isset ( $_POST ["campoCpf"]) && isset ( $_POST ["campoTel"])&& isset ( $_POST ["campoSenha"]);
}
?>