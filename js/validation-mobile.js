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


cNomeMobiCad.addEventListener('keyup', (event) => {
	setTimeout(() => {
		if (!event.target.value.length) {
			mNomeMobiCad.style.display = 'block';
			btnCadMobi.disabled = true;
		}else {
			btnCadMobi.disabled = false;
			mNomeMobiCad.style.display = 'none';
		}
	}, 500);
});

cEmailMobiCad.addEventListener('keyup', (event) => {
	setTimeout(() => {
		if (!event.target.value.length) {
			btnCadMobi.disabled = true;
			mEmailMobiCad.style.display = 'block';
			mEmailMobiCadCaracter.style.display = 'none';
		}else if (camposMobiCad[1].value.indexOf('@')  < 1 || 
					camposMobiCad[1].value.indexOf('.')  < 1 ) {
				btnCadMobi.disabled = true;
				mEmailMobiCadCaracter.style.display = 'block';
				mEmailMobiCad.style.display = 'none';
				
			} else{
				mEmailMobiCadCaracter.style.display = 'none';
				btnCadMobi.disabled = false;
			}
	}, 500);
	
});

cCpfMobiCad.addEventListener('keyup', (event) => {
setTimeout(() => {
	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mCpfMobiCad.style.display = 'block';
		mCpfMobiCadConfig.style.display = 'none';
	}else if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(camposMobiCad[2].value)) {
			btnCadMobi.disabled = true;
			mCpfMobiCadConfig.style.display = 'block';
			mCpfMobiCad.style.display = 'none';
		}else {
			btnCadMobi.disabled = false;
			mCpfMobiCadConfig.style.display = 'none';
		}
	}, 500);
	
});

cTelMobiCad.addEventListener('keyup', (event) => {
setTimeout(() => {
	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mTelMobiCadConfig.style.display = 'none';
		mTelMobiCad.style.display = 'block';
	}else if(!/\(\d{2}\)\s\d{5}-\d{4}/.test(event.target.value)) {
			mTelMobiCad.style.display = 'none';
			mTelMobiCadConfig.style.display = 'block';
		}else{
			mTelMobiCadConfig.style.display = 'none';
			btnCadMobi.disabled = false;
		}
	}, 500);
});

cSenhaMobiCad.addEventListener('keyup', (event) => {
setTimeout(() => {
	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mSenhaMobiCad.style.display = 'block';
	}else if( camposMobiCad[4].value !== camposMobiCad[5].value) {
			btnCadMobi.disabled = true;
			mConfSenha.style.display = 'block';
			mConfSenhaReq.style.display = 'none';
			mSenhaMobiCad.style.display = 'none';
		}else {
			mConfSenha.style.display = 'none';
			btnCadMobi.disabled = false;
		}
	}, 500);
});

cConfSenhaMobiCad.addEventListener('keyup', (event) => {
	setTimeout(() => {
		if (!event.target.value.length) {
			btnCadMobi.disabled = true;
			mConfSenha.style.display = 'none';
			mConfSenhaReq.style.display = 'block';
		}else if( camposMobiCad[4].value !== camposMobiCad[5].value) {

				mConfSenhaReq.style.display = 'none';
				btnCadMobi.disabled = true;
				mConfSenha.style.display = 'block';
			}else {
				mConfSenha.style.display = 'none';
				btnCadMobi.disabled = false;
			}
	}, 500);
	
});
/////////////// ??????????????????????///

btnCadMobi.addEventListener('click', () => {
	
	for(let i=0; i < campos.length; i++) {
		// console.log(camposMobiCad[i].value);
		if (!camposMobiCad[i].value.length){
			event.preventDefault();
		}
	}
	
});

