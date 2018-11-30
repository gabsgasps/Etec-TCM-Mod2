<?php
session_start();
if(!isset($_SESSION["cod"])){
    header("location:index.php");
}
if(isset($_GET["sair"]) && $_GET["sair"]=='sim'){
    session_destroy();
    header("location: index.php");}
include_once('header-nav-diferente/header-nav.php');
require_once './lib/bancoDeDados.php';

$bd = new BancoDeDados();
if (! $bd->abrirConexao()) {
    echo "Falha ao atualizar o banco de dados!";
    return;
}

if (! isset ( $_SESSION ["cod"] )) {
    header ( "location: index.php" );
    return;
}
$codDono = $_SESSION ["cod"];

function formularioEnviado() {
    return isset ( $_FILES ["arquivo"] ) && isset ( $_POST ["campoNome"] ) && isset ( $_POST ["campoEmail"] ) && isset ( $_POST ["campoCpf"] ) && isset ( $_POST ["campoTel"]) ;
    
}
if (formularioEnviado ()) {
    $nomeDoArquivo = rand () . microtime ( true ) . "." . end ( explode ( ".", $_FILES ["arquivo"] ["name"] ) );
    $caminhoDoArquivo = $_FILES ["arquivo"] ["tmp_name"];
    
    
    
    $nome = $_POST ["campoNome"];
    $email = $_POST ["campoEmail"];
    $cpf = $_POST ["campoCpf"];
    $tel = $_POST ["campoTel"];
    
    $destino = "./img/$nomeDoArquivo";
    
    $resultado= move_uploaded_file ( $caminhoDoArquivo, $destino );
    
    if ($resultado) {
        $bd->executarSQL("update usuario set nomeUser='$nome', emailUser='$email', cpfUser='$cpf', telUser='$tel',nomeImgUser='$destino' where codUser='$codDono'");
        
    }
    else {
        $bd->executarSQL("update usuario set nomeUser='$nome', emailUser='$email', cpfUser='$cpf', telUser='$tel' where codUser='$codDono'");
//         echo' <script type="text/javascript">
//         window.location.reload();
//         </script>';
    }
}

$bd->executarSQL( "select * from usuario where codUser='$codDono'" );
$arrResultados = $bd->lerResultados();
$linha = $arrResultados[0];
?>
	<section class="area-Usu">
		<div class="wrap">
			<div class="card">
			<form action="areaUsuario.php" enctype="multipart/form-data" method="post">
				<div class="card-thumb">
					<label for="envia" class="enviarFoto">Alterar Foto
						<i class="fas fa-camera icon-camera"></i>
					</label>
					<input id="envia" type="file" name="arquivo" onchange="exibeImagem(event);" accept="image/*">
						<img src="<?php echo $linha["nomeImgUser"]; ?>" id="preview">
					</div>
					

					<div class="card-info">
					
						<input type="text" name="campoNome" value="<?php echo $linha["nomeUser"];?>" placeholder="Nome">
						<input type="text" name="campoEmail" value="<?php echo $linha["emailUser"];?>" placeholder="Email">
						<input type="text" name="campoCpf" value="<?php echo $linha["cpfUser"];?>" placeholder="CPF">
						<input type="text" name="campoTel" value="<?php echo $linha["telUser"];?>" placeholder="Telefone">
						<button>Salvar</button>
					</div>
				</form>
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
<?php 
include_once('footer.php');
$bd->fecharConexao();
?>