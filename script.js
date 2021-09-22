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
  // create element > assign text content to it > appendChild to the html element on the page.
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
  const createArticleCol1 = document.createElement("article");
  selectSection.appendChild(createArticleCol1);
  
  // Column 1 
  const createFirstH2Col1 = document.createElement("h2");
  createFirstH2Col1.textContent = object["members"][0]["name"];
  createArticleCol1.appendChild(createFirstH2Col1);

  const createFirstPCol1 = document.createElement("p");
  createFirstPCol1.textContent = "Secret identity: " + object["members"][0]["secretIdentity"];
  createArticleCol1.appendChild(createFirstPCol1);

  const createSecondPCol1 = document.createElement("p");
  createSecondPCol1.textContent = "Age: " + object["members"][0]["age"];
  createArticleCol1.appendChild(createSecondPCol1);

  const createThirdPCol1 = document.createElement("p");
  createThirdPCol1.textContent = "Superpowers:";
  createArticleCol1.appendChild(createThirdPCol1);

  const createUlCol1 = document.createElement("ul");
  
  let superpowersCol1 = "";

  for (i = 0; i < object["members"][0]["powers"].length; i++) {
    superpowersCol1 += `<li>${object["members"][0]["powers"][i]}</li>`;
  }
  
  // innerHTML property sets the HTML contents of an element on a web page.
  createUlCol1.innerHTML = superpowersCol1;
  createArticleCol1.appendChild(createUlCol1);
  
  // Column 2 
  const createArticleCol2 = document.createElement("article");
  selectSection.appendChild(createArticleCol2);

  const createH2Col2 = document.createElement("h2");
  createH2Col2.textContent = object["members"][1]["name"];
  createArticleCol2.appendChild(createH2Col2);

  const createFirstPCol2 = document.createElement("p");
  createFirstPCol2.textContent = `Secret Identity: ${object["members"][1]["secretIdentity"]}`;
  createArticleCol2.appendChild(createH2Col2);

  const createSecondPCol2 = document.createElement("p");
  createSecondPCol2.textContent = `Age: ${object["members"][1]["age"]}`;
  createArticleCol2.appendChild(createSecondPCol2);

  const createThirdPCol2 = document.createElement("p");
  createThirdPCol2.textContent = "Superpowers: ";
  createArticleCol2.appendChild(createThirdPCol2);

  const createUlCol2 = document.createElement("ul");
  
  let superpowersCol2 = "";

  for (a = 0; a < object["members"][1]["powers"].length; a++) {
    superpowersCol2 += `<li>${object["members"][1]["powers"][a]}</li>`;
  }

  createUlCol2.innerHTML = superpowersCol2;
  createArticleCol2.appendChild(createUlCol2);

  // Column 3
  const createArticleCol3 = document.createElement("article");
  selectSection.appendChild(createArticleCol3);

  const createH2Col3 = document.createElement("h2");
  createH2Col3.textContent = object["members"][2]["name"];
  createArticleCol3.appendChild(createH2Col3);

  const createFirstPCol3 = document.createElement("p");
  createFirstPCol3.textContent = "Secret identity: " + object["members"][2]["secretIdentity"];
  createArticleCol3.appendChild(createFirstPCol3);

  const createSecondPCol3 = document.createElement("p");
  createSecondPCol3.textContent = `Age: ${object["members"][2]["age"]}`;
  createArticleCol3.appendChild(createSecondPCol3);

  const createThirdPCol3 = document.createElement("p");
  createThirdPCol3.textContent = "Superpowers: ";
  createArticleCol3.appendChild(createThirdPCol3);

  const createUlCol3 = document.createElement("ul");

  let superpowersCol3 = "";

  for(a = 0; a < object["members"][2]["powers"].length; a++) {
    superpowersCol3 += `<li>${object["members"][2]["powers"][a]}</li>`;
  }

  createUlCol3.innerHTML = superpowersCol3;

  createArticleCol3.appendChild(createUlCol3);
}
