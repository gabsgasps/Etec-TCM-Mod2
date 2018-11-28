var bEnviar = document.querySelector(".enviar");
var formCadastro = document.querySelector("#formCadastro");
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
let messageTelConfig = document.querySelector(".messageTelConfig");
let messageSenha = document.querySelector(".messageSenha");
let messageConfSenhaReq = document.querySelector(".messageConfSenhaReq");
let messageConfSenha = document.querySelector(".messageConfSenha");
let messageCpfConfig = document.querySelector(".messageCpfConfig");
// end area mensagens

var statusButton = [];
var status = {
	nome: false,
	email: false,
	cpf: false,
	tel: false,
	senha: false,
	cConfirmaSenha: false
};

cNome.addEventListener('input', (event) => {

	if (!event.target.value.length) {
		messageNome.style.display = 'block';
//		bEnviar.disabled = true;
        status.nome = false;
	}else {
//		bEnviar.disabled = false;
		messageNome.style.display = 'none';
        status.nome = true;
	}
});

cEmail.addEventListener('input', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageEmail.style.display = 'block';
		messageEmailCaracter.style.display = 'none';
        status.email = false;
	}else {
		if (campos[1].value.indexOf('@')  < 1 || 
				campos[1].value.indexOf('.')  < 1 ) {
			bEnviar.disabled = true;
			messageEmailCaracter.style.display = 'block';
			messageEmail.style.display = 'none';
			
		} else{
			messageEmailCaracter.style.display = 'none';
			bEnviar.disabled = false;
            status.email = true;
		}
	}
});

cCpf.addEventListener('input', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageCpf.style.display = 'block';
		messageCpfConfig.style.display = 'none';
        status.cpf = false;
	}else if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(campos[2].value)) {
			bEnviar.disabled = true;
			messageCpfConfig.style.display = 'block';
			messageCpf.style.display = 'none';
		}else {
			bEnviar.disabled = false;
			messageCpfConfig.style.display = 'none';
		      status.cpf = true;
        }

});

cTel.addEventListener('input', (event) => {

		if (!event.target.value.length) {
			bEnviar.disabled = true;
			messageTel.style.display = 'block';
			messageTelConfig.style.display = 'none';
            status.tel = false;
		}else if(!/\(\d{2}\)\s\d{5}-\d{4}/.test(event.target.value) 
			|| !/\d/g.test(event.target.value) ) {
				bEnviar.disabled = true;
				messageTel.style.display = 'none';
				messageTelConfig.style.display = 'block';

			}else{
				messageTelConfig.style.display = 'none';			
				bEnviar.disabled = false;
                status.tel = true;
			}

});

cSenha.addEventListener('input', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageSenha.style.display = 'block';
        status.senha = false;
	}else if( campos[4].value !== campos[5].value) {
			bEnviar.disabled = true;
			messageConfSenha.style.display = 'block';
			messageConfSenhaReq.style.display = 'none';
			messageSenha.style.display = 'none';
		}else {
			messageConfSenha.style.display = 'none';
			bEnviar.disabled = false;
            status.senha = true;
		}
	
});

cConfirmaSenha.addEventListener('input', (event) => {

	if (!event.target.value.length) {
		bEnviar.disabled = true;
		messageConfSenhaReq.style.display = 'block';
		messageConfSenha.style.display = 'none';
        status.cConfirmaSenha = true;
	}else {
		if( campos[4].value !== campos[5].value) {
			bEnviar.disabled = true;
			messageConfSenhaReq.style.display = 'none';
			messageConfSenha.style.display = 'block';
		}else {
			messageConfSenha.style.display = 'none';
			bEnviar.disabled = false;
            status.cConfirmaSenha = true;
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
    
    
	if(status.nome && status.cpf && status.email && status.senha && status.cConfirmaSenha && status.tel) {
        formCadastro.submit();
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

campoEmailLogin.addEventListener('input', (event) => {

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
campoSenhaLogin.addEventListener('input', (event) => {

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


