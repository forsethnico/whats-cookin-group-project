class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData
  }

  filterByTag(tag) {
    let filteredRecipes = this.recipeData.filter(recipe => recipe.tags.includes(tag));
    return filteredRecipes;
  }

  filterByName(name) {
    let filteredRecipes = this.recipeData.filter(recipe => recipe.name.includes(name));
    return filteredRecipes;
  }

}

export default RecipeRepository;
