import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (recipe) =>
    set((state) => {
      const updated = [...state.recipes, recipe];
      return { recipes: updated, filteredRecipes: updated };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((recipe) => recipe.id !== id);
      return { recipes: updated, filteredRecipes: updated };
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return { recipes: updated, filteredRecipes: updated };
    }),
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Call filtering automatically
  },
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
