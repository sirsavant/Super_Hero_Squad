# Super_Hero_Squad
This displays information about three super heroes and their attributes. My focus was to learn how to work with JSON files. 

## index.html
In the head tag, I linked a google font and the style.css file.
In the body, there is a blank header and section tag which JavaScript will use to add content to. A script tag on on the bottom of the body tag links the script.js file.

## style.css
The content within the style.css is taken from https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css

## script.js
### **Process**

1. Initialize two variables to select the header and section using the `querySelector()` method.
2. Stored the URL where the JSON is located into a variable called `requestURL`.
3. Initialized a variable called `request` as a new object to `XMLHttpRequest()`.
4. Used `request.open("GET", requestURL)` to initlize a request. I placed two parameters. The first parameter as the HTTP method GET (used to retrieve data) and the requestURL (URL where the JSON file is located).
5. Set the `request.responseType = "json";` so the XHR knows the server will be returning JSON and to convert the JSON into a JavaScript object behind the scenes.
6. The `request.send()` method sends the request.

7. The `request.onload` executes a function when the JSON file is loaded, and populateHeader, populateSubHeader, and showHeroes functions are invoked.

**THE PROCESS** for the next steps all involved creating an element in JavaScript using the createElement() method > adding text to the created element using the textContent property or the innerHTML property > using the appendChild() method to append it to a parent node. Each function also took in a parameter called "object" that referenced the "request.response".

8. Created a function called `populateHeader()`. It populates the header with the "squadName" in the JSON file. It creates an h1 element > adds the "squadName" from the JSON file > appends it as the first child in the header.

9. Created a populateSubHeader function which adds to the header tag. A `p` element is created > added textContent(Hometown and formed values from the JSON file) > appended it to the header tag.

10. Created a showHeroes function which references the object["members"] values in the json file. It goes through a for loop which iterates through each object["members"] and displays information about each object["member"]. An inner for loop is created to iterate though each object["members"]["powers"] to display the superheroes superpower. An article tag is created within JavaScript and when an object["member"] is created after going through the outer for loop once, it is appended to the article tag. Then the article is appended within the section tag.


*Referenced: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON*