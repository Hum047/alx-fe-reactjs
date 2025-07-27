import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

function AddRecipe() {
  const [input, setInput] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addRecipe(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter recipe name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
