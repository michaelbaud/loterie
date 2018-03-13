// Style
var btnStyle = document.querySelector(".btnStyle");
var p = document.querySelector(".p");

btnStyle.onclick = function() {
	p.classList.toggle("active");
}

// Ajouter noms
var ajout = document.querySelector("#ajout");
var noms = new Array;

ajout.onclick = function() {
	var nom = prompt("Entrez votre nom : ", "");
	noms.push(nom);
	document.querySelector(".boxNoms").innerHTML=noms;
}

// Jouer
var jouer = document.querySelector(".jouer");

jouer.onclick = function() {
	var i = Math.floor(Math.random() * noms.length);
	document.querySelector(".winner").innerHTML=noms[i];
}
