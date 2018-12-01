function vCpnj() {
	var cnpj = '99.352.861/0001-04';

	cnpj = cnpj.replace(/\./g, "");
	cnpj = cnpj.replace(/\//g, "");
	cnpj = cnpj.replace(/-/g, "");
	console.log(cnpj);
	
}

vCpnj();