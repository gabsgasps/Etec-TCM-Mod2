<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Targeet - Nosso alvo é acertar</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
	
		
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

	<link rel="stylesheet" href="fontawesome-free-5.3.1-web/css/all.min.css">

	<link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="main-menu" id="topo">
		<div class="header-top">
			<a href="index.php" class="logo"><i class="fas fa-adjust"></i></a>
			<nav>
				<ul>
					<li>
						<a href="index.php">Home</a>
					</li>
					<li><a href="sobre.php">Sobre</a></li>
					<li><a href="planos.php">Planos</a></li>
					<li><a href="contato.php">Contato</a></li>
				</ul>
				<button class="btn-login">Login</button>
			</nav>
			<i class="fa fa-bars btn-hamburguer" style="font-size: 2rem;">
				
				<div class="menu-dropdown">
					<ul>
						<li>
							<a href="index.php">Home</a>
						</li>
						<li><a href="sobre.php">Sobre</a></li>
						<li><a href="planos.php">Planos</a></li>
						<li><a href="contato.php">Contato</a></li>
					</ul>
					
				</div>
			</i>
		</div>
	</div>


	<div class="modal-login">
		<div>
			<div class="close-modal">
				
				<i class="fas fa-times"></i>
			</div>
			<div class="img-usuario">
				<i class="fas fa-user" style="font-size: 2rem"></i>
			</div>
			<form action="" method="post">
				<input type="text" placeholder="Email" name="campoEmail" class="campoEmail">
				<input type="password" placeholder="Senha" name="campoSenha" class="campoSenha">
				<button type="submit">Envia</button>
			</form>
		</div>
	</div>