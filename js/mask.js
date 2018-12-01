document.querySelector(".campoCpf").addEventListener('blur', (event) => {
	if(event.target.value.length == 11 ||
		/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(event.target.value)	) {

		 if (vCpf(event.target.value)) {

				event.target.value = event.target.value
					.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
				messageCpfConfig.style.display = 'none';
			}else {
				messageCpfConfig.style.display = 'block';
			}
	}else if(event.target.value.length == 14 || 
			/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(event.target.value)) {

		if(vCpnj(event.target.value)) {

			event.target.value = event.target.value
				.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
			messageCpfConfig.style.display = 'none';

		}else {

			messageCpfConfig.style.display = 'block';
		}
	}
});

document.querySelector(".campoTel").addEventListener('input', (event) => {


		if(/\d/.test(event.target.value[event.target.value.length - 1]) && !/\D/.test(event.target.value[[event.target.value.length - 1]])) {
			// console.log('certo');
		}else{
			// console.log('errado');
			event.target.value = event.target.value.substring(0, (event.target.value.length - 1));
		}
	
});
document.querySelector(".campoTel").addEventListener('input', (event) => {


		if(/^\d{2}/.test(event.target.value)) {

		event.target.value = 
		event.target.value.replace(/^(\d{2})$/, '($1)');
		}

		if(/^\(\d{2}\)\d{5}/.test(event.target.value)){
		event.target.value = 
		event.target.value.replace(/^(\(\d{2}\))(\d{5})/, '$1 $2-');
		}
		if(/^\(\d{2}\)\d{5}\-\d{4}/.test(event.target.value)){
		event.target.value = 
		event.target.value.replace(/^(\(\d{2}\))(\d{5})(\d{4})/, '$1 $2-$3');
		}
	
});


document.querySelector(".cCpfMobiCad").addEventListener('blur', (event) => {


		if(event.target.value.length == 11 ||
		/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(event.target.value)) {

		if (vCpf(event.target.value)) {

				event.target.value = event.target.value
					.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
				mCpfMobiCadConfig.style.display = 'none';
			}else {
				mCpfMobiCadConfig.style.display = 'block';
			}
			
		}else if(event.target.value.length == 14 || 
			/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(event.target.value)) {

			if(vCpnj(event.target.value)) {

				event.target.value = event.target.value
					.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
				mCpfMobiCadConfig.style.display = 'none';

			}else {

				mCpfMobiCadConfig.style.display = 'block';
			}
		}
	
});

document.querySelector(".cTelMobiCad").addEventListener('input', (event) => {


		if(/\d/.test(event.target.value[event.target.value.length - 1]) && !/\D/.test(event.target.value[[event.target.value.length - 1]])) {
			// console.log('certo');
		}else{
			// console.log('errado');
			event.target.value = event.target.value.substring(0, (event.target.value.length - 1));
		}
	
});
document.querySelector(".cTelMobiCad").addEventListener('input', (event) => {

		if(/\d/.test(event.target.value)) {
			event.target.value = event.target.value
				.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
		}else{
			event.target.value = '';
		}
	
});