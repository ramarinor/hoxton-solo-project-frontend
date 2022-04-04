import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useStore } from './store';

function App() {
  const fetchCategories = useStore((store) => store.fetchCategories);
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
