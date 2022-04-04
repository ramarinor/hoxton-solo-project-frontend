/// <reference types="vite/client" />
type Category = {
  id: number;
  name: string;
};
type User = {
  id: number;
  firstName: String;
  lastName: String;
  username: String;
  image: String;
  roleId: number;
};

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  userId: number;
  categoryId: number;
};
