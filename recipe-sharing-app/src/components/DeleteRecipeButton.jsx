import React from 'react';
import useRecipeStore from '../store/recipeStore';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    alert("Recipe deleted!");
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteRecipeButton;
