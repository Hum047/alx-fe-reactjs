import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No matching recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} style={{ marginBottom: '1rem' }}>
              <strong>{recipe.title}</strong>
              <div>
                <button onClick={() => navigate(`/recipe/${recipe.id}`)}>
                  View
                </button>
                <button onClick={() => navigate(`/edit/${recipe.id}`)}>
                  Edit
                </button>
                <button onClick={() => navigate(`/delete/${recipe.id}`)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
