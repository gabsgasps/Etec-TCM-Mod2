<?php
require_once '../lib/bancoDeDados.php';

session_start ();

$bd = new BancoDeDados();

if (formularioEnviado ()) {
    if ($bd->abrirConexao()) {
        $bd->executarSQL ( "select codUser from usuario where emailUser='{$_POST["campoEmail"]}'
				and senhaUser='{$_POST["campoSenha"]}'" );
        
        $arrResultado = $bd->lerResultados();
        
        if (count ( $arrResultado ) > 0) {
            // sucesso!!!!!
            $_SESSION ["cod"] = $arrResultado [0] ["codUser"];
            header ( "location: ../areaUsuario.php" );
        }
    }
}
$bd->fecharConexao();
    if (!isset ( $_SESSION ["cod"] )) {
    header ("location: planos.php" );
    return;
    }

function formularioEnviado() {
    return isset ( $_POST ["campoEmail"] ) && isset ( $_POST ["campoSenha"] );
}
?>