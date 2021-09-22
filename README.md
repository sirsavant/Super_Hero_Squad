# Working_With_JSON (JavaScript)

### What is JSON?
A text-based file which consists of data structured in javascript like objects with property-value pairs and arrays. 
* JSON exists as a string - useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data. JavaScript provides a global **JSON** object that has methods available for converting between the two.
* A JSON string can be stored in its own file, which is a text file with an extension of `.json,` and a MIME type of `appplication/json`.
* You can include the same basic data types inside JSON as you can in a standard JavaScript object - strings, numbers, arrays, booleans, and other object literals.



Example of a JSON file [HERE](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json).

*MIME Type:* A string that is sent with file describing what type of file it is. 
*Examples*
1. An audio file - audio/ogg
2. An image file - image/png
3. A JSON file - application/json

> **Note:** Converting a string to a native object is called *deserialization,* while converting a native object to a string so it can be transmitted across the network is called *serialization.*

### Uses
* It is commonly used for transmitting data in web applications (example: sending some data from the server to the client, so it can be displayed on a web page, or vice versa).
* JSON can be used independently from JavaScript and many programming environments feature the ability to parse and generate JSON.

## Other notes
* JSON is purely a string with a specified data format - it contains only properties, no methods.
* JSON requires double quotes to be used around strings and property names. Single quotes are not vailed other than surrounding the entire JSON string. ONLY quoted strings may be used as properties.
* A single misplaced comma or colon will cause a JSON file to stop working. Make sure to validate any data you are attempting to use. You can validate JSON using an application like [JSONLint](https://jsonlint.com/).
* JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.

**Keywords:** JSON, MIME type.

**Referenced:** https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON