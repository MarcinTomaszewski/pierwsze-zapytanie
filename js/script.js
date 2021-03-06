var url = 'https://api.icndb.com/jokes/random';

window.addEventListener('load', function(){     //zadanie dla chętnych. Dowcip pojawia sie po załadowaniu strony. Bez potrzeby naciskania na przycisk.
    getJoke();
}); 

var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

button.addEventListener('click', function(){
    getJoke();
});

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
}
