<?php include_once('header-nav.php');?>
	<div class="area-Login">
		<div class="wrap">
			<h1>Vamos Conversar!</h1>
			<h3>Em caso de dúvidas, estaremos a disposição</h3>
		</div>
	</div>
	<div class="areaForm">
		<div class="wrap">
            <div class="info-destaqueCont">
                <i class="material-icons" style="font-size: 10rem; color: goldenrod;text-align: center;">
                    mail
                </i>
            <p>Se tiver dúvidas ou quiser apenas entrar em contato, use o formulario ao lado. Estamos ansiosos para ouvir de você</p>
            
            <p>
				<i class="material-icons">
                    mail
                </i>
            ttargeet@gmail.com</p>
            <p>
			        <i class="material-icons">
			local_phone
			</i>
                +55(11)94631-0146
            </p>
            <p>
				                <i class="material-icons">
				phone_android
				</i>
                +55(11)96101-4583
            </p>

            </div>
            
			<form action="enviar.php" method="post">
				<h2 style="text-align: center; font-size: 2.5rem;
				font-weight: bolder; margin-bottom: 2rem">Contato</h2>
				<input type="text" placeholder="Nome" name="campoNome" class="campoEmail">
				<input type="text" placeholder="Email" name="campoEmail" class="campoEmail">

				<textarea name="mensagem" cols="30" rows="10"></textarea>
				<button type="submit">Envia</button>
			</form>
		</div>
	</div>
<?php include_once('footer.php'); ?>