function displayRecipe(response) {
  console.log(response.data.answer);
  let searchingMessage = document.querySelector("#searching");
  searchingMessage.innerHTML = "";

  recipe.innerHTML = `${response.data.answer}`;
}

function searchForRecipe(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let ingredient = searchInput.value;
  let recipeDisplay = document.querySelector("#recipe-display");
  recipeDisplay.classList.remove("hide");
  let recipe = document.querySelector("#recipe");
  recipe.innerHTML = "";
  new Typewriter("#searching", {
    strings: `A recipe with ${ingredient}`,
    autoStart: true,
    delay: 100,
    cursor: "🥘",
  });

  let apiKey = "2d3ffca2b4824o0a82a3f230545c636t";
  let context = "generate a short and simple recipe.";
  let prompt = `please generate a recipe using the ${ingredient}. Return the recipe formatting in clean HTML text.`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayRecipe);
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", searchForRecipe);
