import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); 

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); 
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '1rem', color: 'red' }}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;
