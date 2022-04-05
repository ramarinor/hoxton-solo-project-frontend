import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList/ArticleList';

function UserArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/users/${params.username}`)
      .then((resp) => resp.json())
      .then((data) => setArticles(data.user.articles));
  }, [params]);
  return (
    <div className='main'>
      <ArticleList articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default UserArticles;
