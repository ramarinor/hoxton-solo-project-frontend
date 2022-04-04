import create from 'zustand';
type Store = {
  categories: Category[];
  fetchCategories: () => void;
};
export const useStore = create<Store>((set, get) => ({
  categories: [],
  fetchCategories: () =>
    fetch('http://localhost:4000/categories')
      .then((resp) => resp.json())
      .then((categories) => set({ categories }))
}));
