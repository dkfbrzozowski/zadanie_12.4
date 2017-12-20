var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

// wyświetlenie 'joke' po załadowaniu strony wariant 1: document.addEventListener("DOMContentLoaded", getJoke()); lub poniżej wariant 2:
window.onload = (getJoke);

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
    	paragraph.innerHTML = response.value.joke;
  	});
  	xhr.send();
}