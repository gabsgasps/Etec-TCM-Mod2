<?php include_once('header-nav.php');?>
	<section class="header-cadastro-M">
		<div class="wrap">
			<h1>Faça seu cadastro</h1>
			<h6>E contrate nossos fantásticos planos</h6>
		</div>
	</section>

	<section class="area-cadastro">
		<div class="wrap">
			<form action="cadastro-mobile.php" method="">
				<input type="text" class="campos" placeholder="Nome"></input>
				<input type="text" class="campos" placeholder="Sobrenome"/>
				<input type="email" class="campos" placeholder="Email"/>
				<input type="date"/>
				<input type="text" class="campos" placeholder="RG: xx.xxx.xxx-xx"/>
				<input type="tel" class="campos" placeholder="(xx)xxxxx-xxxx"/>
				<button type="submit">ENVIAR</button>
			</form>
		</div>
	</section>
<?php include_once('footer.php'); ?>