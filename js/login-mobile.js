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

cEmailMobi.addEventListener('input', (event) => {
	setTimeout( () => {
		if (!event.target.value.length) {
			btnLogMobi.disabled = true;
			mEmailLogMobi.style.display = 'block';
			mEmailCaracterLogMobi.style.display = 'none';

		}else if (camposLogMobi[0].value.indexOf('@')  < 1 || 
					camposLogMobi[0].value.indexOf('.')  < 1 ) {

				mEmailLogMobi.style.display = 'none';
				mEmailCaracterLogMobi.style.display = 'block';
				btnLogMobi.disabled = true;
			} else{
				mEmailCaracterLogMobi.style.display = 'none';
				btnLogMobi.disabled = false;
			}
	}, 500);
});
cSenhaMobi.addEventListener('input', (event) => {
	setTimeout(() => {
		
		if (!event.target.value.length) {
			btnLogMobi.disabled = true;
			mSenhaMobi.style.display = 'block';
		}else {
			
			mSenhaMobi.style.display = 'none';
			
			btnLogMobi.disabled = false;
		}
	}, 500);
});

btnLogMobi.addEventListener('click', () => {
	
	for(let i=0; i < campos.length; i++) {
		
		if (!camposLogMobi[i].value.length){
			event.preventDefault();
		}
	}
	
});