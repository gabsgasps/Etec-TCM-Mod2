<?php include_once('header-nav-diferente/header-nav.php') ?>
	<section class="area-Usu">
		<div class="wrap">
			<div class="card">
				<div class="card-thumb">
					<label for="envia" class="enviarFoto">Alterar Foto
						<i class="fas fa-camera icon-camera"></i>
					</label>
					<input id="envia"
					type="file" onchange="exibeImagem(event);" >
						<img src="img/GGR.jpg" alt="" id="preview">

				</div>

				<div class="card-info">
					<form action="">
						<input type="text" value="COlocar dados">
						<input type="text" value="COlocar dados">
						<input type="text" value="COlocar dados">
						<input type="text" value="COlocar dados">
						<input type="text" value="COlocar dados">

						<button>Salvar</button>
					</form>
				</div>
			</div>
		</div>
	</section>
	
    <script type="text/javascript">
		function exibeImagem(eventObject){
			

			var leitorDeArquivo = new FileReader();
			leitorDeArquivo.onload = function (e){
				document.getElementById("preview").src = e.target.result;
			}

			leitorDeArquivo.readAsDataURL(eventObject.target.files[0]);

			console.log(eventObject.target);

		}
	</script>

	

<?php include_once('footer.php') ?>