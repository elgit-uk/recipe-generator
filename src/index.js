function searchForRecipe(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let ingredient = searchInput.value;

  new Typewriter("#searching", {
    strings: `Searching for a recipe with ${ingredient}`,
    autoStart: true,
    delay: 125,
    cursor: "🥘",
  });

  let ingredients = document.querySelector("#ingredients");
  ingredients.innerHTML = "The required ingredients will appear here ...";
  let instructions = document.querySelector("#instructions");
  instructions.innerHTML = "Step by step instructions ...";
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", searchForRecipe);
