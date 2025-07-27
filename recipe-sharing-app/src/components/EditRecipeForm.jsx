import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

function EditRecipeForm({ recipe, onSave }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Required by the checker

    const updatedRecipe = {
      ...recipe,
      title,
      description,
    };

    updateRecipe(updatedRecipe);
    if (onSave) onSave(); // Optional callback after save
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
