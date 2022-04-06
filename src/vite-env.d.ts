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

type ArticleWithUser = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  userId: number;
  categoryId: number;
  user: User;
};

type ArticleComment = {
  articleId: number;
  content: string;
  createdAt: string;
  id: number;
  user: User;
  userId: number;
};
