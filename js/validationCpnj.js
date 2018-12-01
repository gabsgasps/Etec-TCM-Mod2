function vCpnj() {
	var cnpj = '99.352.861/0001-04';


        var aux = [6,5,4,3,2,9,8,7,6,5,4,3,2];
	cnpj = cnpj.replace(/\./g, "");
	cnpj = cnpj.replace(/\//, "");
	cnpj = cnpj.replace(/-/g, "");

	
	console.log(cnpj);

	if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        alert('CPNJ errado');
        

        var soma = 0;
        for (var i = 1; i <= 10; i++) {
                soma = soma + (parseInt(cnpj[i -1]) * aux[i];
        }

        // var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        alert(soma);
}

vCpnj();