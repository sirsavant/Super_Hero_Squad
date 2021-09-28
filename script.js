/* Referenced: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

keywords: JSON, XMLHttpRequest, HTTP methods

JSON - A text-based file based on the data structured from a Javascript object which consists of property-value pairs and arrays.

XMLHttpRequest (often called XHR) - A JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (example: images, text, JSON, HTML snippets). The object allows us to update specific content on a webpage without refershing the whole web page.

*/

// (1)
const selectHeader = document.querySelector("header");
const selectSection = document.querySelector("section");

// (2)
const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// (3)
let request = new XMLHttpRequest();

// (4)
request.open("GET", requestURL);

// (5)
request.responseType = "json";

// (6)
request.send();

// (7)
request.onload = function() {
   const superHeroes = request.response;
   populateHeader(superHeroes);
   populateSubHeader(superHeroes);
   showHeroes(superHeroes);
}

// (8)
function populateHeader(object) {
  const createH1 = document.createElement("h1");
  createH1.textContent = object["squadName"];
  selectHeader.appendChild(createH1);
}

// (9)
function populateSubHeader(object) {
  const createP = document.createElement("p");
  createP.textContent = `Hometown: ${object["homeTown"]} // Formed: ${object["formed"]}`;
  selectHeader.appendChild(createP);
}

// (10)
function showHeroes(object) {
  const heroes = object["members"];

  for (let i = 0; i < heroes.length; i++) {
    const createArticle = document.createElement("article");
    const heroName = document.createElement("h2");
    const secretIdentity = document.createElement("p");
    const age = document.createElement("p");
    const superpower = document.createElement("p");
    const superpowersList = document.createElement("ul");

    heroName.textContent = heroes[i]["name"];
    createArticle.appendChild(heroName);

    secretIdentity.textContent = `Secret identity: ${heroes[i]["secretIdentity"]}`;
    createArticle.appendChild(secretIdentity);

    age.textContent = `Age: ${heroes[i]["age"]}`;
    createArticle.appendChild(age);

    superpower.textContent = "Superpowers: ";
    createArticle.appendChild(superpower);

    for(let j = 0; j < heroes[i]["powers"].length; j++) {
      superpowersList.innerHTML += `<li>${heroes[i]["powers"][j]}</li>`;
    }

    createArticle.appendChild(superpowersList);

    selectSection.appendChild(createArticle);
  }
}
