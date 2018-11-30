// Assigning formContainer to the article tag (child of the body)
let formContainer = document.querySelector("#form-container");


// intering into the form container element and generating DOM elements
formContainer.innerHTML = `<section>
<label for="resourcename">Resource Name</label>
<input type="text" name="resourcename" id="resource-name">
</section>

<section>
<label for="resourcelink">Resource Link</label>
<input type="text" name="resourcelink" id="resource-link">
</section>

<section>
<label for="resourcetype">Resource Type</label>
<input type="radio" name="resourcetype" value="Video" checked> Video
<input type="radio" name="resourcetype" value="Article"> Article<br>
</section>

<section>
  <button type="button" id="add-button">Add Resource</button>
</section>`;



// Setting videosContainer to the created element "section"
const videosContainer = document.createElement("section");
// giving the created element ("section") a class of "videos-container"
videosContainer.classList.add("videos-container");

// Setting articlesContainer to the created element "section"
const articlesContainer = document.createElement("section");
// giving the created element ("section") a class of "articles-container"
articlesContainer.classList.add("articles-container");
// ^ These will hold the output of the data once the function is eventually run

// Selecting the resources container in the HTML and storing its' value in "resourcesContainer"
let resourcesContainer = document.querySelector("#resources-container");

// Attaching 'videosContainer" (a generated 'section' element with the class of "videos-container") to the "resourcesContainer" (the written article HTML element)
resourcesContainer.appendChild(videosContainer);

// Attatching 'articlesContainer' (a generated 'section' element with the class of "articles-container") to the "resourcesContainer" (the written article HTML element)
resourcesContainer.appendChild(articlesContainer);

// Sample data (pre-existing) (Also an array of objects)
let resourcesArray = [
  {
    name: "resource1",
    link: "resource1link",
    type: "Video"
  },
  {
    name: "resource2",
    link: "resource2link",
    type: "Article"
  },
  {
    name: "resource3",
    link: "resource3link",
    type: "Video"
  },
  {
    name: "resource4",
    link: "resource4link",
    type: "Video"
  },
  {
    name: "resource5",
    link: "resource5link",
    type: "Article"
  },
  {
    name: "resource6",
    link: "resource6link",
    type: "Video"
  }
]


// Creating a function with the name of 'createAndAppendResources'
let createAndAppendResources = () => {

  // Another way to write the function above:
  // for(let i = 0; i < resourcesArray.length; i++){
  //   console.log(resourcesArray[i]);
  // }


  // Entering into the (generated) section inside of the 'resources' article and setting the HTML value to an empty string. Doing this resets the elements when the function is called so there is no compounding output values.
  articlesContainer.innerHTML = "";
  videosContainer.innerHTML = "";

  // -Creating a function targeting the 'resourcesArray' and using a 'forEach' loop (exclusive to arrays)
  // -'resouceObj is a parameter, but not sure what it's doing 
  resourcesArray.forEach(function(resourceObj){
    // console.log's every object in the resources array
    console.log(resourceObj);
    const resourceElement = document.createElement("section");
    // <a href={link}>{name}</a>
    const linkElement = document.createElement("a");
    linkElement.textContent = resourceObj.name;
    linkElement.setAttribute("href", resourceObj.link);
    resourceElement.appendChild(linkElement);
    // ^^^For each object within the 'resourceArray' it will be logged to the console, an element named 'section' will be made for the resource, an a tag will be made for the link that will hold the value of the object's name, create an href tag that is equal to the value of resourceObj.link, THEN the linkElement will be attached to the newly created element 'section' 
    

    // Still part of the forEach loop, writes a conditional that if the resource object type is equal to article than it will be attached to the 'section' named articlesContainer
    if(resourceObj.type === "Article"){
      articlesContainer.appendChild(resourceElement);

      // If the resource object type is equal to video than it will be attached to the 'section' named videosContainer
    } else if(resourceObj.type === "Video") {
      videosContainer.appendChild(resourceElement);
    }
  })
}


// Calling on the full function above (it is empty, so just elements are made)
createAndAppendResources();

// Giving the addButton a value of the HTML element '#add-button'
let addButton = document.querySelector("#add-button");
// Gives the button a listener (click) and writes a function
addButton.addEventListener("click", () => {
  console.log("Button was clicked");

  // Creating object values and assigning the values to 3 different resource types (Getting them ready to put into an object)
  let resourceName = document.querySelector('input[name="resourcename"]').value;
  let resourceLink = document.querySelector('input[name="resourcelink"]').value;
  let resourceType = document.querySelector('input[name="resourcetype"]:checked').value;

  console.log("Input values: ", resourceName, resourceLink, resourceType);

  // Creating the object
  let resource = {
    name: resourceName,
    link: resourceLink,
    type: resourceType
  }

  // Adds the created element to the end of the resourcesArray
  resourcesArray.push(resource);
  // Calls on the full funtion again, but with the values that the user has entered. Function will run and data will be assigned a certain section with a specific class (either .videos-container or .articles-container)
  createAndAppendResources();
})
