<?php
	if(!empty($_POST)) {
		$cab= "Form: ".$_POST['Nome']. "<".$_POST['Email']."\n";
		$mensagem = "contado via site Targeet\n";
		$mensagem.= "Nome: ".$_POST['campoNome']."\n";
		$mensagem.= "Email: ".$_POST['campoEmail']."\n";
		
		if(mail("ttargeet@gmail.com", "formulario de contato", $mensagem, $cab )) {
			
			echo "Menssagem enviada com Sucesso!";
		}
		else {
			
			echo "ocorreu um erro, tente novamente!";
			}	
	}
	else {
		
		
	}
?>