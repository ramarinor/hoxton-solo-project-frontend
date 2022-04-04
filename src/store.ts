import create from 'zustand';
type Store = {
  categories: Category[];
  fetchCategories: () => void;
  modalMessage: string;
  setModalMessage: (message: string) => void;
  loggedInUser: User | null;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
};
export const useStore = create<Store>((set, get) => ({
  categories: [],
  fetchCategories: () =>
    fetch('http://localhost:4000/categories')
      .then((resp) => resp.json())
      .then((categories) => set({ categories })),
  modalMessage: '',
  setModalMessage: (message) => set({ modalMessage: message }),
  loggedInUser: null,
  signIn: (username: string, password: string) =>
    fetch('http://localhost:4000/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          set({ modalMessage: data.error });
        } else {
          localStorage.token = data.token;
          set({ loggedInUser: data.user });
        }
      }),
  signOut: () => {
    localStorage.removeItem('token');
    set({ loggedInUser: null });
  }
}));
