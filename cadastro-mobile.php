<?php include_once('header-nav-diferente/header-nav.php') ?>	
<section class="header-cadastro-M">
		<div class="wrap">
			<h1>Faça seu cadastro</h1>
			<h6>E contrate nossos fantásticos planos</h6>
		</div>
	</section>

	<section class="area-cadastro">
		<div class="wrap">
			<form action="cadastro-mobile.php" method="" id="formCadMobi">
				<div class="img-up">
					<label for="img-up" class="">Alterar Foto
						<i class="material-icons">
						camera_alt</i>


					</label>
					
<!--
					<input id="img-up"
					type="file" >
						<img src="" alt="">
-->
						<input id="img-up"
					type="file" onchange="exibeImagem(event);" accept="image/*" >
						<img src="img/GGR.jpg" alt="" class="preview">

				</div>
				<input type="text" class="campos cNomeMobiCad" placeholder="Nome" autofocus="true">
				<ul>
					<li style="display:none;text-align: center; color: red; font-size: .9rem;font-weight: bolder;" class="mNomeMobiCad" >
						Campo Nome Requirido
					</li>
				</ul>
				<input type="email" class="campos cEmailMobiCad" placeholder="Email"/>
				<ul>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mEmailMobiCad">
						Campo Email Requirido
					</li>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mEmailMobiCadCaracter">
						Insira os caracteres '@'  e ' . ' no campo Email 
					</li>

				</ul>
				<input type="text" class="campos cCpfMobiCad" placeholder="CPF: xxx.xxx.xxx-xx" maxlength="14" />
				<ul>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mCpfMobiCad">
						Campo Cpf Requirido
					</li>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mCpfMobiCadConfig">
						Campo CPF errado
					</li>
				</ul>
				<input type="tel" class="campos cTelMobiCad" placeholder="(xx)xxxxx-xxxx" maxlength="15" />
				<ul>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mTelMobiCad">
						Campo Telefone Requirido
					</li>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mTelMobiCadConfig">
						Campo Telefone está no formato errado
					</li>
				</ul>
				
					
				<input type="password" class="campos cSenhaMobiCad" placeholder="Senha" maxlength="15" />
				<ul>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mSenhaMobiCad">
						Campo Senha Requirido
					</li>
				</ul>
				<input type="password" class="campos cConfSenhaMobiCad" placeholder="Confirmar Senha" maxlength="15"/>
				<ul>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mConfSenhaReq">
						Campo Confirma Senha Requirido
					</li>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mConfSenha">
						Confirme a Senha
					</li>
				</ul>
				<button type="button" class="btnCadMobi">ENVIAR</button>
			</form>
		</div>
	</section>
	
	<script type="text/javascript">
		function exibeImagem(eventObject){
			

			var leitorDeArquivo = new FileReader();
			leitorDeArquivo.onload = function (e){
				document.querySelector('.preview').src = e.target.result;
			}

			leitorDeArquivo.readAsDataURL(eventObject.target.files[0]);

			// console.log(eventObject.target);

		}
	</script>

<?php include_once('footer.php'); ?>