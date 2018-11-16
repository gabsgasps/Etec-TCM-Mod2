var bEnviar = document.querySelector(".enviar");

// campos
let cNome = document.querySelector(".campoNome");
let cEmail = document.querySelector(".campoEmail"); 
let cCpf = document.querySelector(".campoCpf");
let cTel = document.querySelector(".campoTel"); 
let cSenha = document.querySelector(".campoSenha");
let cConfirmaSenha = document.querySelector(".cConfirmaSenha");

let campos = [cNome,cEmail, cCpf, cTel, cSenha, cConfirmaSenha];
// areas de mensagens
let messageNome = document.querySelector(".messageNome");
let messageEmail = document.querySelector(".messageEmail");
let messageEmailCaracter = document.querySelector(".messageEmailCaracter");
let messageCpf = document.querySelector(".messageCpf");
let messageTel = document.querySelector(".messageTel");
let messageSenha = document.querySelector(".messageSenha");
let messageConfSenhaReq = document.querySelector(".messageConfSenhaReq");
let messageConfSenha = document.querySelector(".messageConfSenha");
let messageCpfConfig = document.querySelector(".messageCpfConfig");
// end area mensagens

var statusButton = [];


cNome.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		messageNome.style.display = 'block';
		bEnviar.disabled = true;
	}else {
		bEnviar.disabled = false;
		messageNome.style.display = 'none';
	}
});

cEmail.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageEmail.style.display = 'block';
		messageEmailCaracter.style.display = 'none';
	}else {
		if (campos[1].value.indexOf('@')  < 1 || 
				campos[1].value.indexOf('.')  < 1 ) {
			bEnviar.disabled = true;
			messageEmailCaracter.style.display = 'block';
			messageEmail.style.display = 'none';
			
		} else{
			messageEmailCaracter.style.display = 'none';
			bEnviar.disabled = false;
		}
	}
});

cCpf.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageCpf.style.display = 'block';
		messageCpfConfig.style.display = 'none';
	}else {
		if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(campos[2].value)) {
			bEnviar.disabled = true;
			messageCpfConfig.style.display = 'block';
			messageCpf.style.display = 'none';
		}else {
			bEnviar.disabled = false;
			messageCpfConfig.style.display = 'none';
		}
	}
});

cTel.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageTel.style.display = 'block';
	}else {
		bEnviar.disabled = false;
		messageTel.style.display = 'none';
	}
});

cSenha.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageSenha.style.display = 'block';
	}else {
		if( campos[4].value !== campos[5].value) {
			bEnviar.disabled = true;
			messageConfSenha.style.display = 'block';
			messageConfSenhaReq.style.display = 'none';
			messageSenha.style.display = 'none';
		}else {
			messageConfSenha.style.display = 'none';
			bEnviar.disabled = false;
		}
	}
});

cConfirmaSenha.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageConfSenhaReq.style.display = 'block';
		messageConfSenha.style.display = 'none';
	}else {
		if( campos[4].value !== campos[5].value) {
			bEnviar.disabled = true;
			messageConfSenha.style.display = 'block';
			messageConfSenhaReq.style.display = 'none';
		}else {
			messageConfSenha.style.display = 'none';
			bEnviar.disabled = false;
		}
	}
});
/////////////// ??????????????????????///

bEnviar.addEventListener('click', () => {
	
	for(let i=0; i < campos.length; i++) {
		// console.log(campos[i].value);
		if (!campos[i].value.length){
			event.preventDefault();
		}
	}
	
});


// ///////////////////////// //////////////////////////

const enviarLogin = document.querySelector('.enviarLogin');

// campos
const campoEmailLogin = document.querySelector(".campoEmailLogin");
const campoSenhaLogin = document.querySelector(".campoSenhaLogin");
// end campos

const camposLog = [campoEmailLogin, campoSenhaLogin];


// areas messages
let messageEmailLog = document.querySelector(".messageEmailLog");
let messageEmailCaracterLog = document.querySelector(".messageEmailCaracterLog");
let messageSenhaLog = document.querySelector(".messageSenhaLog");
// end messages areas

campoEmailLogin.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		enviarLogin.disabled = true;
		messageEmailLog.style.display = 'block';
		messageEmailCaracterLog.style.display = 'none';

	}else {
		if (camposLog[0].value.indexOf('@')  < 1 || 
				camposLog[0].value.indexOf('.')  < 1 ) {

			messageEmailLog.style.display = 'none';
			messageEmailCaracterLog.style.display = 'block';
			enviarLogin.disabled = true;
		} else{
			messageEmailCaracterLog.style.display = 'none';
			enviarLogin.disabled = false;
		}
	}
});
campoSenhaLogin.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		enviarLogin.disabled = true;
		messageSenhaLog.style.display = 'block';
	}else {
		
		messageSenhaLog.style.display = 'none';
		
		enviarLogin.disabled = false;
	}
});
enviarLogin.addEventListener('click', () => {
	
	for(let i=0; i < campos.length; i++) {
		
		if (!camposLog[i].value.length){
			event.preventDefault();
		}
	}
	
});


