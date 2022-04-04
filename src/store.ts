import create from 'zustand';
type Store = {
  categories: Category[];
  fetchCategories: () => void;
  modalMessage: string;
  resetModalMessage: () => void;
  loggedInUser: User | null;
  signIn: (username: string, password: string) => void;
  signUp: (
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    image: string
  ) => void;
  signOut: () => void;
  validate: () => void;
};
export const useStore = create<Store>((set, get) => ({
  categories: [],
  fetchCategories: () =>
    fetch('http://localhost:4000/categories')
      .then((resp) => resp.json())
      .then((categories) => set({ categories })),
  modalMessage: '',
  resetModalMessage: () => set({ modalMessage: '' }),
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
        if (data.error) {
          set({ modalMessage: data.error });
        } else {
          localStorage.token = data.token;
          set({ loggedInUser: data.user });
        }
      }),
  signUp: (
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    image: string
  ) => {
    fetch('http://localhost:4000/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, username, password, image })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          set({ modalMessage: data.error });
        } else {
          localStorage.token = data.token;
          set({ loggedInUser: data.user });
        }
      });
  },
  signOut: () => {
    localStorage.removeItem('token');
    set({ loggedInUser: null });
  },
  validate: () => {
    if (localStorage.token) {
      fetch('http://localhost:4000/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            set({ modalMessage: data.error });
          } else {
            set({ loggedInUser: data.user });
          }
        });
    }
  }
}));
