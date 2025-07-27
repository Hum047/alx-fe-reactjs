import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function RecipeDetails() {
  const { id } = useParams(); // get recipe id from URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h2>{recipe.title}</h2>
      <p><strong>ID:</strong> {recipe.id}</p>
      <p><strong>Description:</strong> {recipe.description}</p>
      {/* You can add EditRecipeForm and DeleteRecipeButton here later */}
    </div>
  );
}

export default RecipeDetails;
