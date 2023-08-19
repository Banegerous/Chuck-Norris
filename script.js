const jokeNew = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
   const config = {
    headers: {
        Accept: 'application/json',
    },
   };

   fetch('https://api.chucknorris.io/jokes/random', config) 
    .then((res) => res.json())
    .then((data) => {
        jokeNew.innerHTML = data.value;
    });
};

// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.
// https://www.w3schools.com/jsref/api_fetch.asp

/*
or this way

const jokeNew = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    jokeNew.innerHTML = JSON.parse(this.responseText).value;
                } else {
                    jokeNew.innerHTML = 'Something went wrong (Not funny)';
                }
            }
        }

    xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);

document.addEventListener('DOMContentLoaded', generateJoke);
*/