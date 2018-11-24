<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Targeet - Nosso alvo é acertar</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
	
		
	<!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"> -->

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
				
				<i class="material-icons">
		close
		</i>
			</div>
			<div class="area-que-muda-login">
				<div class="img-usuario">
					<i class="material-icons" style="font-size: 4rem">person_outline</i>
				</div>
				<form action="logar.php" method="post">
					<input type="text" placeholder="Email" name="campoEmail" class="campoEmailLogin">
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmailLog">
							Campo Email Requirido
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmailCaracterLog">
							Insira os caracteres '@'  e ' . ' no campo Email 
						</li>
					<input type="password" placeholder="Senha" name="campoSenha" class="campoSenhaLogin">
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageSenhaLog">
							Campo Senha Requirido
						</li>
					</ul>
					<button type="submit" class="enviarLogin">Entrar</button>
				</form>
			<a id="cadastrar" style="cursor: pointer;">Quero me cadastrar</a>
			<!-- href="cadastro-mobile.php"   --> 
			</div>
			<div class="area-que-muda-cadastro d-none">
               <div>
                <i class="material-icons" id="logar">
                    arrow_back
                </i>
               </div>
				<form action="cadastrar.php" method="post">
					<input type="text" class="campoNome" class="campos" name="campoNome" placeholder="Nome">
					<ul>
						<li style="display:none;text-align: center; color: red; font-size: .9rem;font-weight: bolder;" class="messageNome" >
							Campo Nome Requirido
						</li>
					</ul>
					<input type="email" class="campoEmail" class="campos" name="campoEmail" placeholder="Email"/>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmail">
							Campo Email Requirido
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmailCaracter">
							Insira os caracteres '@'  e ' . ' no campo Email 
						</li>

					</ul>
					<input type="text" class="campoCpf" class="campos" name="campoCpf" placeholder="CPF: 000.000.000-00" maxlength="14" />
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageCpf">
							Campo Cpf Requirido
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageCpfConfig">
							Campo CPF sem a formatação xxx.xxx.xxx-xx
						</li>
					</ul>
					<input type="tel" class="campoTel" class="campos" name="campoTel" placeholder="(xx)xxxxx-xxxx" maxlength="15" />
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageTel">
							Campo Telefone Requirido
						</li>
					</ul>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageTelConfig">
							Campo Telefone está no formato errado
						</li>
					</ul>
					<input type="password" class="campoSenha" class="campos" name="campoSenha" placeholder="Senha" value="opa" />
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageSenha">
							Campo Senha Requirido
						</li>
					</ul>
					<input type="password" class="cConfirmaSenha" class="campos" placeholder="Confirmar Senha"/>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageConfSenhaReq">
							Campo Confirma Senha Requirido
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageConfSenha">
							Confirme a Senha
						</li>
					</ul>
					<button class="enviar" type="submit">Cadastrar</button>
				</form>

			</div>
		</div>
	</div>

	