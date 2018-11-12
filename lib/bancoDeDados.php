<?php

class BancoDeDados {

	/**
	 * Guarda a conexão com o banco de dados
	 * @var PDO
	 */
	private $conexao;

	/**
	 * Guarda os resultados que vem do
	 * banco de dados
	 * @var PDOStatement
	 */
	private $resultado;

	/**
	 * Retorna um array com os dados pedidos
	 * @return array
	 */
	public function lerResultados() {
		return $this->resultado->fetchAll ();
	}

	/**
	 * Executa uma ou mais instruções SQL
	 * @param string $sql
	 * @return bool
	 */
	public function executarSQL($sql) {
		try {
			$this->conexao->beginTransaction ();
			$this->resultado = $this->conexao->prepare ( $sql );
			$this->resultado->execute ();
			$this->conexao->commit ();
			return true;
		}
		catch ( Exception $e ) {
			return false;
		}
	}

	/**
	 * Fecha a conexa
	 * @return bool
	 */
	public function fecharConexao() {
		$this->conexao = null;
		return true;
	}

	/**
	 * Abre a conexão
	 * @return bool
	 */
	public function abrirConexao() {
		$end = "mysql:host=127.0.0.1;dbname=id7241972_targeet";
		try {
			$this->conexao = new PDO ( $end, "root", "1234");
			return true;
		}
		catch ( Exception $e ) {
			echo "Falha ao conectar com o banco de dados";
			exit ( 0 );
		}
	}
}
?>