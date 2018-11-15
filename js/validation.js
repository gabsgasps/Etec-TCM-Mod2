var bEnviar = document.querySelector(".enviar");


// campos
let cNome = document.querySelector("#campoNome");
let cEmail = document.querySelector("#campoEmail"); 
let cCpf = document.querySelector("#campoCpf");
let cTel = document.querySelector("#campoTel"); 
let cSenha = document.querySelector("#campoSenha");
let cConfirmaSenha = document.querySelector("#cConfirmaSenha");

let campos = [cNome,cEmail, cCpf, cTel, cSenha, cConfirmaSenha];
// areas de mensagens
let messageNome = document.querySelector(".messageNome");
let messageEmail = document.querySelector(".messageEmail");
let messageCpf = document.querySelector(".messageCpf");
let messageTel = document.querySelector(".messageTel");
let messageSenha = document.querySelector(".messageSenha");
let messageConfSenha = document.querySelector(".messageConfSenha");
// end area mensagens

var statusButton;




cNome.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		// bEnviar.disabled = true;
		messageNome.style.display = 'block';
	}else {
		s();
		bEnviar.disabled = false;
		messageNome.style.display = 'none';
	}
});

cEmail.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		// bEnviar.disabled = true;
		messageEmail.style.display = 'block';
	}else {
		s();
		bEnviar.disabled = false;
		messageEmail.style.display = 'none';
	}
});

cCpf.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		// bEnviar.disabled = true;
		messageCpf.style.display = 'block';
	}else {
		s();
		bEnviar.disabled = false;
		messageCpf.style.display = 'none';
	}
});

cTel.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		// bEnviar.disabled = true;
		messageTel.style.display = 'block';
	}else {
		s();
		bEnviar.disabled = false;
		messageTel.style.display = 'none';
	}
});

cSenha.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		// bEnviar.disabled = true;
		messageSenha.style.display = 'block';
	}else {
		s();
		bEnviar.disabled = false;
		messageSenha.style.display = 'none';
	}
});

cConfirmaSenha.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		// bEnviar.disabled = true;
		messageConfSenha.style.display = 'block';
	}else {
		s();
		bEnviar.disabled = false;
		messageConfSenha.style.display = 'none';
	}
});


// if(statusButton == true) {
// }else {
// 	bEnviar.disabled = true;
// }

function s() {
	campos.forEach((c) => {

		if(!c.value.length) {
			bEnviar.disabled = true;
			return false;
		}
	});
}
bEnviar.addEventListener('click', () => {
	// event.preventDefault();
	campos.forEach((c) => {

		if(!c.value.length) {
			bEnviar.disabled = true;
			return false;
		}else {
			bEnviar.disabled = false;
			return true;
		}
	});
});