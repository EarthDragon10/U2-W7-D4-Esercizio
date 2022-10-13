async function getObjectFromServer() {
	let objResponse = await fetch("http://localhost:3000/");
	let responseJSON = await objResponse.json();

	console.log(responseJSON);

	showResponseJSON(responseJSON);
}

function showResponseJSON(objJSON) {
	showTitleFilm(objJSON);
	showMovieDirector(objJSON);
	showProductionHouse(objJSON);
	showYearPublication(objJSON);
	showActor(objJSON);
}

function showTitleFilm(objJSON) {
	let titleCard = document.querySelectorAll(".card>h2");

	// console.log(titleCard);

	for (let i = 0; i < titleCard.length; i++) {
		titleCard[i].innerHTML = `Titolo del film: ${objJSON[i].title}`;
	}
}

function showMovieDirector(objJSON) {
	let movieDirectorCard = document.querySelectorAll(
		".card > ul > .movie-director"
	);

	for (let i = 0; i < movieDirectorCard.length; i++) {
		movieDirectorCard[
			i
		].innerHTML = `Regista: ${objJSON[i]["movie-director"]}`;
	}
}

function showProductionHouse(objJSON) {
	let productionHouseCard = document.querySelectorAll(
		".card > ul > .production-house"
	);

	for (let i = 0; i < productionHouseCard.length; i++) {
		productionHouseCard[
			i
		].innerHTML = `Casa produttrice: ${objJSON[i]["production-house"]}`;
	}
}

function showActor(objJSON) {
	let actorCard = document.querySelectorAll(".card > ul > .actor");

	for (let i = 0; i < actorCard.length; i++) {
		actorCard[i].innerHTML = `Attore Principale: ${objJSON[i].actor}`;
	}
}

function showYearPublication(objJSON) {
	let yearPublicationCard = document.querySelectorAll(
		".card > ul > .year-publication"
	);

	// console.log(movieDirectorCard);

	for (let i = 0; i < yearPublicationCard.length; i++) {
		yearPublicationCard[
			i
		].innerHTML = `Anno di pubblicazione: ${objJSON[i].year}`;
	}
}

window.onload = () => {
	getObjectFromServer();
};
