<?php session_start();
require_once 'lib/bancoDeDados.php';?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="UTF-8">
	<title>Targeet - Nosso alvo é acertar</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">

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
				<?php
					if($_SESSION){
						if($_SESSION["cod"]){

				?>
					<button class="btn-login" onclick="location.href='areaUsuario.php?sair=sim'">Sair</button>
				<?php
					}
					}
					else{
						echo '<button class="btn-login">Login</button>';
					}
				?>
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
		<div style="z-index: 9999;">
			<div class="close-modal">
				
				<i class="material-icons">
		close
		</i>
			</div>
			<div class="area-que-muda-login">
				<div class="img-usuario">
					<i class="material-icons" style="font-size: 4rem">person_outline</i>
				</div>
				<form action="/funcaoBancoDeDados/logar.php" method="post">
					<input type="text" placeholder="Email" name="campoEmail" class="campoEmailLogin">
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmailLog">
							Campo Email Obrigatório
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmailCaracterLog">
							Insira os caracteres '@'  e ' . ' no campo Email 
						</li>
					<input type="password" placeholder="Senha" name="campoSenha" class="campoSenhaLogin">
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageSenhaLog">
							Campo Senha Obrigatório
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
				<form action="./funcaoBancoDeDados/cadastrar.php" method="post" id="formCadastro">
					<input type="text" class="campoNome" class="campos" name="campoNome" placeholder="Nome">
					<ul>
						<li style="display:none;text-align: center; color: red; font-size: .9rem;font-weight: bolder;" class="messageNome" >
							Campo Nome Obrigatório
						</li>
					</ul>
					<input type="email" class="campoEmail" class="campos" name="campoEmail" placeholder="Email"/>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmail">
							Campo Email Obrigatório
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageEmailCaracter">
							Insira os caracteres '@'  e ' . ' no campo Email 
						</li>

					</ul>
					<input type="text" class="campoCpf" class="campos" name="campoCpf" placeholder="CPF/CNPJ" maxlength="18" />
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageCpf">
							Campo CPF/CNPJ Obrigatório
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageCpfConfig">
							Campo CPF/CPNJ com formatação incorreta
						</li>
					</ul>
					<input type="tel" class="campoTel" class="campos" name="campoTel" placeholder="(xx)xxxxx-xxxx" maxlength="15" />
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageTel">
							Campo Telefone Obrigatório
						</li>
					</ul>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageTelConfig">
							Campo Telefone está no formato errado
						</li>
					</ul>
					<input type="password" class="campoSenha" class="campos" name="campoSenha" placeholder="Senha" value="opa" maxlength="15"/>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageSenha">
							Campo Senha Obrigatório
						</li>
					</ul>
					<input type="password" class="cConfirmaSenha" class="campos" placeholder="Confirmar Senha" maxlength="15"/>
					<ul>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageConfSenhaReq">
							Campo Confirma Senha Obrigatório
						</li>
						<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="messageConfSenha">
							Confirme a Senha
						</li>
					</ul>
					<button class="enviar" type="button">Cadastrar</button>
				</form>

			</div>
		</div>
        <div class="toOut" style="    opacity: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    border: transparent;
    z-index: 30;
    transition: all cubic-bezier(0.4, 0, 0.09, 0.12);">
        AQUI</div>
	</div>

	