import { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch('http://localhost:4000/articles/')
      .then((resp) => resp.json())
      .then((articles) => setArticles(articles));
  }, []);
  return (
    <div className='main'>
      <ArticleList articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default Home;
