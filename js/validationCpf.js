function vCpf (cpf) {
	
	cpf = cpf.replace(/\./g, "");
	cpf = cpf.replace(/-/g, "")
    
      if (cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
        return false;
    
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

