import React from 'react';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipe />
      <RecipeList />
    </div>
  );
}

export default HomePage;
