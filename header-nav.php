<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Targeet - Nosso alvo é acertar</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
	
		
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

	<link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="main-menu " id="topo">
		<div class="header-top">
			<a href="index.php" class="logo">
				<img src="img/logo.png" alt="logo-targeet">
			</a>
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
			
				<i class="material-icons btn-hamburguer" style="font-size: 2.5rem;">
				menu
				</i>
			
				
				<div class="menu-dropdown">
					<ul>
						<a href="./area-Login.php"><button class="btn-login b-l-dropdowm">Login</button></a>
						<li>
							<a href="index.php">Home</a>
						</li>
						<li><a href="sobre.php">Sobre</a></li>
						<li><a href="planos.php">Planos</a></li>
						<li><a href="contato.php">Contato</a></li>
					</ul>
					
				</div>
		</div>
	</div>


	<div class="modal">
		<div>
			<div class="close-modal">
				
				<i class="fas fa-times"></i>
			</div>
			<div class="area-que-muda-login">
				<div class="img-usuario">
					<i class="material-icons" style="font-size: 4rem">person_outline</i>
				</div>
				<form action="logar.php" method="post">
					<input type="text" placeholder="Email" name="campoEmail" class="campoEmail">
					<input type="password" placeholder="Senha" name="campoSenha" class="campoSenha">
					<button type="submit">Envia</button>
				</form>
			<a id="cadastrar">Quero me cadastrar</a>
	<!-- href="cadastro-mobile.php"   --> 
			</div>
			<div class="area-que-muda-cadastro d-none">
               <div>
                <i class="material-icons" id="logar">
                    arrow_back
                </i>
               </div>
				<form action="cadastrar.php" method="post">
					<input type="text" class="campos" name="campoNome" placeholder="Nome">
					<input type="email" class="campos" name="campoEmail" placeholder="Email"/>
					<input type="text" class="campos" name="campoCpf" placeholder="CPF: "/>
					<input type="tel" class="campos" name="campoTel" placeholder="(xx)xxxxx-xxxx"/>
					<input type="password" class="campos" name="campoSenha" placeholder="Senha"/>
					<input type="password" class="campos" placeholder="Confirmar Senha"/>
					<button type="submit">Envia</button>
				</form>

			</div>
		</div>
	</div>

	