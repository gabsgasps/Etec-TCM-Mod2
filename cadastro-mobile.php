<?php include_once('header-nav-diferente/header-nav.php') ?>	
<section class="header-cadastro-M">
		<div class="wrap">
			<h1>Faça seu cadastro</h1>
			<h6>E contrate nossos fantásticos planos</h6>
		</div>
	</section>

	<section class="area-cadastro">
		<div class="wrap">
			<form action="cadastro-mobile.php" method="">
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
					type="file" onchange="exibeImagem(event);" >
						<img src="img/GGR.jpg" alt="" class="preview">

				</div>
				<input type="text" class="campos" placeholder="Nome">
				<input type="email" class="campos" placeholder="Email"/>
				<input type="text" class="campos" placeholder="CPF: "/>
				<input type="tel" class="campos" placeholder="(xx)xxxxx-xxxx"/>
				<input type="password" class="campos" placeholder="Senha"/>
				<input type="password" class="campos" placeholder="Confirmar Senha"/>
				<button type="submit">ENVIAR</button>
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

			console.log(eventObject.target);

		}
	</script>

<?php include_once('footer.php'); ?>