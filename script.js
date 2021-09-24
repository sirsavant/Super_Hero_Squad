/* Referenced: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

keywords: JSON, XMLHttpRequest, HTTP methods,

JSON - A text-based file based on the data structured from a Javascript object which consists of property-value pairs and arrays.

XMLHttpRequest (often called XHR) - A JavaScript object that allows us to make network requests to retrieve resources from a server via JavaScript (example: images, text, JSON, HTML snippets). The object allows us to update specific content on a webpage without refershing the whole web page.

*/

// select HTML elements using the querySelector method and store them into variables.
const selectHeader = document.querySelector("header");
const selectSection = document.querySelector("section");

//// Obtaining the JSON
// store the URL where the JSON is located into a variable.
const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function() {
   const superHeroes = request.response;
   populateHeader(superHeroes);
   populateSection(superHeroes);
   showHeroes(superHeroes);
}

function populateHeader(object) {
  // create element > assign textContent to it > appendChild to the html element on the page.
  const createH1 = document.createElement("h1");
  createH1.textContent = object["squadName"];
  selectHeader.appendChild(createH1);
}

function populateSection(object) {
  const createP = document.createElement("p");
  createP.textContent = `Hometown: ${object["homeTown"]} // Formed: ${object["formed"]}`;
  selectHeader.appendChild(createP);
}

function showHeroes(object) {
  const heroes = object["members"];

  for (a = 0; a < heroes.length; a++) {
    const createArticle = document.createElement("article");
    const heroName = document.createElement("h2");
    const secretIdentity = document.createElement("p");
    const age = document.createElement("p");
    const superpower = document.createElement("p");
    const superpowersList = document.createElement("ul");

    heroName.textContent = heroes[a]["name"];
    createArticle.appendChild(heroName);

    secretIdentity.textContent = `Secret identity: ${heroes[a]["secretIdentity"]}`;
    createArticle.appendChild(secretIdentity);

    age.textContent = `Age: ${heroes[a]["age"]}`;
    createArticle.appendChild(age);

    superpower.textContent = "Superpowers: ";
    createArticle.appendChild(superpower);


    
    for(b = 0; b < heroes[a]["powers"][a].length; b++) {
      superpowersList.innerHTML += `<li>${heroes[a]["powers"][b]}</li>`;
      console.log("test");
    }

    createArticle.appendChild(superpowersList);

    selectSection.appendChild(createArticle);
  }


}
