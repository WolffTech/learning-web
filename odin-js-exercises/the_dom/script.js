// define a variable to hold the DOM element container
const container = document.querySelector("#container");
// define content to be a new div element
const content = document.createElement("div");
// set content to be the class for the content div element created above
content.classList.add("content");
// add text to the content div element
content.textContent = "This is the content";

// repeat what we just did
const content2 = document.createElement("div");
content2.classList.add("content2");
content2.textContent = "This is the second content";

// practice adding the content div elements to the container div element
const paragraph = document.createElement("p");
paragraph.textContent = "Hi I'm red!";
paragraph.style.color = "red";

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue H3!";
header3.style.color = "blue";

const stylediv = document.createElement("div");
stylediv.classList.add("stylediv");
stylediv.style.backgroundColor = "pink";
stylediv.style.border = "1px solid black";

const header1 = document.createElement("h1");
header1.textContent = "I'm a div";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "I am TOO!";

// append the content div element to the container div element defined above
container.appendChild(content);
container.appendChild(content2);
container.appendChild(paragraph);
container.appendChild(header3);

container.appendChild(stylediv);
stylediv.appendChild(header1);
stylediv.appendChild(paragraph2);