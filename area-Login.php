<?php include_once('header-nav-diferente/header-nav.php') ?>	
<section class="login-mobile">
		<div class="wrap">
			<h1>Faça seu Login</h1>
			<h6>Para poder contratar um plano</h6>
		</div>
	</section>
	<section class="form-mobile">
		<div class="wrap">
			<form action="">
				<input type="email" placeholder="Email" class="cEmailMobi">
				<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mEmailLogMobi">
							Campo Email Requirido
					</li>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mEmailCaracterLogMobi">
						Insira os caracteres '@'  e ' . ' no campo Email 
					</li>
				<input type="password" placeholder="Senha" class="cSenhaMobi">
				<ul>
					<li style="display:none;text-align: center; color: red; font-weight: bolder; font-size: .9rem;" class="mSenhaMobi">
						Campo Senha Requirido
					</li>
				</ul>
				<button type="submit" class="btnLogMobi">Entrar</button>
			</form>
			<a href="cadastro-mobile.php">
				<h5>Não tenho cadastro? Quero me cadastrar</h5>
			</a>
		</div>
	</section>
<?php include_once('footer.php'); ?>