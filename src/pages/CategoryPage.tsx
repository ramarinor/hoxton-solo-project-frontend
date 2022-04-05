import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList/ArticleList';

function CategoryPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/articles/${params.category}`)
      .then((resp) => resp.json())
      .then((articles) => setArticles(articles));
  }, [params]);
  return (
    <div className='main'>
      <ArticleList articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default CategoryPage;
