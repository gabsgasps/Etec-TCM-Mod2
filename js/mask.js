document.querySelector(".campoCpf").addEventListener('keyup', (event) => {



		event.target.value = event.target.value
			.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');

		
});

document.querySelector(".campoTel").addEventListener('keyup', (event) => {


		if(/\d/.test(event.target.value)) {
			event.target.value = event.target.value
				.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
		}else{
			event.target.value = '';
		}
	
});


document.querySelector(".cCpfMobiCad").addEventListener('keyup', (event) => {


		event.target.value = event.target.value
			.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
	
});

document.querySelector(".cTelMobiCad").addEventListener('keyup', (event) => {

		if(/\d/.test(event.target.value)) {
			event.target.value = event.target.value
				.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
		}else{
			event.target.value = '';
		}
	
});