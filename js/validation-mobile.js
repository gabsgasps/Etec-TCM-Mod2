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
let mSenhaMobiCad = document.querySelector(".mSenhaMobiCad");
let mConfSenhaReq = document.querySelector(".mConfSenhaReq");
let mConfSenha = document.querySelector(".mConfSenha");
let mCpfMobiCadConfig = document.querySelector(".mCpfMobiCadConfig");
// end area mensagens

var statusButton = [];


cNomeMobiCad.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		mNomeMobiCad.style.display = 'block';
		btnCadMobi.disabled = true;
	}else {
		btnCadMobi.disabled = false;
		mNomeMobiCad.style.display = 'none';
	}
});

cEmailMobiCad.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mEmailMobiCad.style.display = 'block';
		mEmailMobiCadCaracter.style.display = 'none';
	}else {
		if (camposMobiCad[1].value.indexOf('@')  < 1 || 
				camposMobiCad[1].value.indexOf('.')  < 1 ) {
			btnCadMobi.disabled = true;
			mEmailMobiCadCaracter.style.display = 'block';
			mEmailMobiCad.style.display = 'none';
			
		} else{
			mEmailMobiCadCaracter.style.display = 'none';
			btnCadMobi.disabled = false;
		}
	}
});

cCpfMobiCad.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mCpfMobiCad.style.display = 'block';
		mCpfMobiCadConfig.style.display = 'none';
	}else {
		if (!/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(camposMobiCad[2].value)) {
			btnCadMobi.disabled = true;
			mCpfMobiCadConfig.style.display = 'block';
			mCpfMobiCad.style.display = 'none';
		}else {
			btnCadMobi.disabled = false;
			mCpfMobiCadConfig.style.display = 'none';
		}
	}
});

cTelMobiCad.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mTelMobiCad.style.display = 'block';
	}else {
		btnCadMobi.disabled = false;
		mTelMobiCad.style.display = 'none';
	}
});

cSenhaMobiCad.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mSenhaMobiCad.style.display = 'block';
	}else {
		if( camposMobiCad[4].value !== camposMobiCad[5].value) {
			btnCadMobi.disabled = true;
			mConfSenha.style.display = 'block';
			mConfSenhaReq.style.display = 'none';
			mSenhaMobiCad.style.display = 'none';
		}else {
			mConfSenha.style.display = 'none';
			btnCadMobi.disabled = false;
		}
	}
});

cConfSenhaMobiCad.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnCadMobi.disabled = true;
		mConfSenhaReq.style.display = 'block';
		mConfSenha.style.display = 'none';
	}else {
		if( camposMobiCad[4].value !== camposMobiCad[5].value) {
			btnCadMobi.disabled = true;
			mConfSenha.style.display = 'block';
			mConfSenhaReq.style.display = 'none';
		}else {
			mConfSenha.style.display = 'none';
			btnCadMobi.disabled = false;
		}
	}
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

// ///////////////////////// //////////////////////////

const btnLogMobi = document.querySelector('.btnLogMobi');

// campos
const cEmailMobi = document.querySelector(".cEmailMobi");
const cSenhaMobi = document.querySelector(".cSenhaMobi");
// end campos

const camposLogMobi = [cEmailMobi, cSenhaMobi];


// areas messages
let mEmailLogMobi = document.querySelector(".mEmailLogMobi");
let mEmailCaracterLogMobi = document.querySelector(".mEmailCaracterLogMobi");
let mSenhaMobi = document.querySelector(".mSenhaMobi");
// end messages areas

cEmailMobi.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnLogMobi.disabled = true;
		mEmailLogMobi.style.display = 'block';
		mEmailCaracterLogMobi.style.display = 'none';

	}else {
		if (camposLogMobi[0].value.indexOf('@')  < 1 || 
				camposLogMobi[0].value.indexOf('.')  < 1 ) {

			mEmailLogMobi.style.display = 'none';
			mEmailCaracterLogMobi.style.display = 'block';
			btnLogMobi.disabled = true;
		} else{
			mEmailCaracterLogMobi.style.display = 'none';
			btnLogMobi.disabled = false;
		}
	}
});
cSenhaMobi.addEventListener('keyup', (event) => {

	if (!event.target.value.length) {
		btnLogMobi.disabled = true;
		mSenhaMobi.style.display = 'block';
	}else {
		
		mSenhaMobi.style.display = 'none';
		
		btnLogMobi.disabled = false;
	}
});

btnLogMobi.addEventListener('click', () => {
	
	for(let i=0; i < campos.length; i++) {
		
		if (!camposLogMobi[i].value.length){
			event.preventDefault();
		}
	}
	
});