import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              <button onClick={() => addFavorite(recipe.id)} style={{ marginLeft: '1rem' }}>
                Add to Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
