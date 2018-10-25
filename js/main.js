var btn_hamburguer = document.querySelector(".btn-hamburguer");

//MENU DROPDOWn /
btn_hamburguer.addEventListener('click', ()=>{

	var menuToShow = document.querySelector(".menu-dropdown");
	
	if (menuToShow.classList.contains('menu-show')) {
		
		menuToShow.classList.remove('menu-show');

	}else{
		menuToShow.classList.add('menu-show');
	}
	
});

/////////////////////////////////////////////////

// ------ MODAL
var btn_login = document.querySelector(".btn-login");

var modal = document.querySelector(".modal");

var closeM = document.querySelector('.close-modal');


btn_login.addEventListener('click', ()=>{


	if (modal.classList.contains('display-modal')) {
		fechaModal();
	
	}else{

		modal.classList.add('display-modal');
	}

	
});//end btn-login


// close modal
function fechaModal(){

	closeM.addEventListener("click", () => {

		modal.classList.remove('display-modal');
	});
}// end close modal

fechaModal();

// show modal cadastro
let cadastrar = document.querySelector("#cadastrar");
let area_muda_login = document.querySelector(".area-que-muda-login");


cadastrar.addEventListener('click', ()=>{

	// area_muda_login.classList.remove('display-modal');
	console.log('Fazer o modal mudar o conteudo sendo hora para fazer e outra cadastrar');

	
});//end open modal


//////////////////////////////////////////

// efeito no scroll
window.addEventListener('scroll', ()=>{

	let mainMenu = document.querySelector(".main-menu");

	if (window.pageYOffset <= 100) {

		mainMenu.classList.remove('menu-fixo');
		mainMenu.classList.remove('scrolling');
	}else{
		mainMenu.classList.add('menu-fixo');
		mainMenu.classList.add('scrolling');
	}

});//end efeito escroll





	
