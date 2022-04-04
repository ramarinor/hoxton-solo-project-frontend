import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import CategoryPage from './pages/CategoryPage';
import CreateArticlePage from './pages/CreateArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import Home from './pages/Home';
import Login from './pages/Login';
import SingleArticlePage from './pages/SingleArticlePage';
import UserArticles from './pages/UserArticles';
import UsersAdminPage from './pages/UsersAdminPage';

import { useStore } from './store';

function App() {
  const fetchCategories = useStore((store) => store.fetchCategories);
  const validate = useStore((store) => store.validate);
  const modalMessage = useStore((store) => store.modalMessage);
  useEffect(() => {
    validate();
  }, []);
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Navigate replace to={'/home'} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:category' element={<CategoryPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/articles/:id' element={<SingleArticlePage />} />
        <Route path='/articles/:id/edit' element={<EditArticlePage />} />
        <Route path='/create' element={<CreateArticlePage />} />
        <Route path='/users' element={<UsersAdminPage />} />
        <Route path='/users/:username' element={<UserArticles />} />
      </Routes>
      {modalMessage !== '' && <Modal />}
    </div>
  );
}

export default App;
