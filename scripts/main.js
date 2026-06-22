window.addEventListener('resize', function() {
	let win = this;
	//console.log(win.innerWidth);
});

window.onload = function() {
	var dialogOk = document.getElementById("dialog_ok");
	var cardEspCam4wd = document.getElementById("espcam4wd");
	var cardFloatCard = document.getElementById("float_card");
	var cardBoardsConfection = document.getElementById("boards_confection");
	var cardAirplane = document.getElementById("airplane");
	var buttonGit = document.getElementById("button_git");
	buttonGit.addEventListener("click", (e) => {
		window.location.href = "https://github.com/lucnsdev?tab=repositories";
	})

	let onClick = (event) => {
		//console.log("click event now");
		//dialogOk.style.opacity = "1";
	};

	cardEspCam4wd.addEventListener("click", onClick);
	cardFloatCard.addEventListener("click", onClick);
	cardBoardsConfection.addEventListener("click", onClick);
	cardAirplane.addEventListener("click", onClick);
	cardAirplane.addEventListener("click", onClick);
	
	
}


