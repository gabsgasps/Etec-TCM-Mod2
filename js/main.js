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

var header = document.querySelector("header");

var modal = document.querySelector(".modal-login");

var closeM = document.querySelector('.close-modal');

btn_login.addEventListener('click', ()=>{


	if (header.classList.contains('desfoque') && 
			modal.classList.contains('display-modal')) {
		fechaModal();
	
	}else{

		header.classList.add('desfoque');
		modal.classList.add('display-modal');
	}

	
});

function fechaModal(){

	closeM.addEventListener("click", () => {

		header.classList.remove('desfoque');
		modal.classList.remove('display-modal');
	});
}
fechaModal();


window.addEventListener('scroll', ()=>{

	let mainMenu = document.querySelector(".main-menu");

	if (window.pageYOffset <= 100) {

		mainMenu.classList.remove('menu-fixo');
	}else{
		mainMenu.classList.add('menu-fixo');
	}

});