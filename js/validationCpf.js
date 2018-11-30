function vCpf (cpf) {
	
	cpf = cpf.replace(/\./g, "");
	cpf = cpf.replace(/-/g, "")

	var soma = 0;
	for(let i = 1; i <=9; i++) soma = soma + (parseInt(cpf[i -1]) * (11 -i));
	
	var resto = (soma * 10) % 11;

	if(resto === 10 || resto === 11) resto = 0; 

	// console.log(resto);


	var soma = 0;

	for(let i = 1; i <=10; i++) soma = soma + (parseInt(cpf[i -1]) * (12 -i));

	var segundoR = (soma * 10) % 11;

	if(segundoR === 10 || segundoR === 11) segundoR = 0; 


	// console.log(segundoR);


	if (resto == cpf[9]) {

		if(segundoR == cpf[10]) 
			return true;
		else 
			return false;	

	}else 
		return false;
	
}

