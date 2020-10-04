// Question 2 

const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";


const loader = document.querySelector(".loader");
const gamesContainer = document.querySelector(".games-container");
const results = document.querySelector(".results");


async function gamesApiCall() {
    try {
        const response = await fetch(apiUrl);

        const results = await response.json();

        console.log(results);
        results.innerHTML = "We did it!";


    } catch (error) {
        console.log(error);
        gamesContainer.innerHTML = "An error occurred when calling the API..";
        
    }
 

    gamesContainer.innerHTML = "";
    loader.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
        console.log(results[i].object);

        if (i === 8) {
            break;
        }
        gamesContainer.innerHTML += `<div class="games-container">${results[i].name}</div>`;

    }
    
    
}
gamesApiCall();

