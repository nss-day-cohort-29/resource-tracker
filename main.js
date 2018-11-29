let formContainer = document.querySelector("#form-container");

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

const videosContainer = document.createElement("section");
videosContainer.classList.add("videos-container");
const articlesContainer = document.createElement("section");
articlesContainer.classList.add("articles-container");


let resourcesContainer = document.querySelector("#resources-container");
resourcesContainer.appendChild(videosContainer);
resourcesContainer.appendChild(articlesContainer);


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

let createAndAppendResources = () => {
  // for(let i = 0; i < resourcesArray.length; i++){
  //   console.log(resourcesArray[i]);
  // }
  articlesContainer.innerHTML = "";
  videosContainer.innerHTML = "";

  resourcesArray.forEach(function(resourceObj){
    console.log(resourceObj);
    const resourceElement = document.createElement("section");
    // <a href={link}>{name}</a>
    const linkElement = document.createElement("a");
    linkElement.textContent = resourceObj.name;
    linkElement.setAttribute("href", resourceObj.link);
    resourceElement.appendChild(linkElement);
    
    if(resourceObj.type === "Article"){
      articlesContainer.appendChild(resourceElement);
    } else if(resourceObj.type === "Video") {
      videosContainer.appendChild(resourceElement);
    }
  })
}

createAndAppendResources();

let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", () => {
  console.log("Button was clicked");

  let resourceName = document.querySelector('input[name="resourcename"]').value;
  let resourceLink = document.querySelector('input[name="resourcelink"]').value;
  let resourceType = document.querySelector('input[name="resourcetype"]:checked').value;

  console.log("Input values: ", resourceName, resourceLink, resourceType);

  let resource = {
    name: resourceName,
    link: resourceLink,
    type: resourceType
  }

  resourcesArray.push(resource);
  createAndAppendResources();
})
