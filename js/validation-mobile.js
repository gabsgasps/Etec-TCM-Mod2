var btnCadMobi = document.querySelector(".btnCadMobi");

// campos
let cNomeMobiCad = document.querySelector(".cNomeMobiCad");
let cEmailMobiCad = document.querySelector(".cEmailMobiCad"); 
let cCpfMobiCad = document.querySelector(".cCpfMobiCad");
let cTelMobiCad = document.querySelector(".cTelMobiCad"); 
let cSenhaMobiCad = document.querySelector(".cSenhaMobiCad");
let cConfSenhaMobiCad = document.querySelector(".cConfSenhaMobiCad");

let camposMobiCad = [cNomeMobiCad,cEmailMobiCad, cCpfMobiCad, cTelMobiCad, cSenhaMobiCad, cConfSenhaMobiCad];
// areas de mensagens
let mNomeMobiCad = document.querySelector(".mNomeMobiCad");
let mEmailMobiCad = document.querySelector(".mEmailMobiCad");
let mEmailMobiCadCaracter = document.querySelector(".mEmailMobiCadCaracter");
let mCpfMobiCad = document.querySelector(".mCpfMobiCad");
let mTelMobiCad = document.querySelector(".mTelMobiCad");
let mTelMobiCadConfig = document.querySelector(".mTelMobiCadConfig");
let mSenhaMobiCad = document.querySelector(".mSenhaMobiCad");
let mConfSenhaReq = document.querySelector(".mConfSenhaReq");
let mConfSenha = document.querySelector(".mConfSenha");
let mCpfMobiCadConfig = document.querySelector(".mCpfMobiCadConfig");
// end area mensagens

var statusButton = [];
var statusMobi = {
	nome: false,
	email: false,
	cpf: false,
	tel: false,
	senha: false,
	cConfirmaSenha: false
};

cNomeMobiCad.addEventListener('input', (event) => {
		if (!event.target.value.length) {
			mNomeMobiCad.style.display = 'block';
			
			statusMobi.nome = false;
		}else {
			
			mNomeMobiCad.style.display = 'none';
			statusMobi.nome = true;
		}
});

cEmailMobiCad.addEventListener('input', (event) => {
		if (!event.target.value.length) {
			
			mEmailMobiCad.style.display = 'block';
			mEmailMobiCadCaracter.style.display = 'none';
			statusMobi.email = false;
		}else if (camposMobiCad[1].value.indexOf('@')  < 1 || 
					camposMobiCad[1].value.indexOf('.')  < 1 ) {
				
				mEmailMobiCadCaracter.style.display = 'block';
				mEmailMobiCad.style.display = 'none';
				
			} else{
				mEmailMobiCadCaracter.style.display = 'none';
				
				statusMobi.email = true;
			}
	
});

cCpfMobiCad.addEventListener('input', (event) => {
	if (!event.target.value.length) {
		
		mCpfMobiCad.style.display = 'block';
		mCpfMobiCadConfig.style.display = 'none';
		statusMobi.cpf = false;
	}else if (event.target.value.length < 11 || 
		(event.target.value.length > 11 && event.target.value.length < 14)
		|| event.target.value.length > 14) {

			
			mCpfMobiCadConfig.style.display = 'block';
			mCpfMobiCad.style.display = 'none';
		}else {
			
			mCpfMobiCadConfig.style.display = 'none';
			statusMobi.cpf = true;
		}
	
});

cTelMobiCad.addEventListener('input', (event) => {
	if (!event.target.value.length) {
		
		mTelMobiCadConfig.style.display = 'none';
		mTelMobiCad.style.display = 'block';
		statusMobi.tel = false;
	}else if(!/\(\d{2}\)\s\d{5}-\d{4}/.test(event.target.value)) {
			mTelMobiCad.style.display = 'none';
			mTelMobiCadConfig.style.display = 'block';
		}else{
			mTelMobiCadConfig.style.display = 'none';
			
			statusMobi.tel = true;
		}
});

cSenhaMobiCad.addEventListener('input', (event) => {
	if (!event.target.value.length) {
		
		mSenhaMobiCad.style.display = 'block';
		statusMobi.senha = false;
	}else if( camposMobiCad[4].value !== camposMobiCad[5].value) {
			
			mConfSenha.style.display = 'block';
			mConfSenhaReq.style.display = 'none';
			mSenhaMobiCad.style.display = 'none';
			
		}else {
			mConfSenha.style.display = 'none';
			
			statusMobi.senha = true;
		}
});

cConfSenhaMobiCad.addEventListener('input', (event) => {
		if (!event.target.value.length) {
			
			mConfSenha.style.display = 'none';
			mConfSenhaReq.style.display = 'block';
			statusMobi.cConfirmaSenha = false;
		}else if( camposMobiCad[4].value !== camposMobiCad[5].value) {

				mConfSenhaReq.style.display = 'none';
				
				mConfSenha.style.display = 'block';
			}else {
				mConfSenha.style.display = 'none';
				
				statusMobi.cConfirmaSenha = true;
				statusMobi.senha = true;
			}
	
});
/////////////// ??????????????????????///
var formCadMobi = document.querySelector("#formCadMobi");
btnCadMobi.addEventListener('click', () => {

	if(statusMobi.nome && statusMobi.email && 
		statusMobi.tel && statusMobi.cpf &&
		statusMobi.senha && statusMobi.cConfirmaSenha) {
		formCadMobi.submit();
	}
	
});

