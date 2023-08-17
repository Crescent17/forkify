import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

async function controlRecipes() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);

  } catch (err) {
    console.log(err);
  }
}

function init() {
  recipeView.addHandlerRender(controlRecipes);
}
init();