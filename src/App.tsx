import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';
import Login from './pages/Login';

import { useStore } from './store';

function App() {
  const fetchCategories = useStore((store) => store.fetchCategories);
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
      </Routes>
    </div>
  );
}

export default App;
