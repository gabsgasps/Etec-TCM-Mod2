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


var btn_login = document.querySelector(".btn-login");

var modal = document.querySelector(".modal-login");

var closeM = document.querySelector('.close-modal');

btn_login.addEventListener('click', ()=>{


	if (modal.classList.contains('display-modal')) {
		fechaModal();
	
	}else{

		modal.classList.add('display-modal');
	}

	
});

window.addEventListener('scroll', ()=>{

	let mainMenu = document.querySelector(".main-menu");

	if (window.pageYOffset <= 100) {

		mainMenu.classList.remove('menu-fixo');
		mainMenu.classList.remove('scrolling');
	}else{
		mainMenu.classList.add('menu-fixo');
		mainMenu.classList.add('scrolling');
	}

});

// modal
let cadastrar = document.querySelector("#cadastrar");

let modal_cadastro = document.querySelector(".modal-cadastro");

cadastrar.addEventListener('click', ()=>{


	if (modal_cadastro.classList.contains('display-modal')) {
		fechaModal();
	
	}else{

		modal_cadastro.classList.add('display-modal');
		modal.classList.remove('display-modal');
	}

	
});

function fechaModal(){

	closeM.addEventListener("click", () => {

		modal.classList.remove('display-modal');
		modal_cadastro.classList.remove('display-modal');
	});
}
fechaModal();