import './SingleArticlePage.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleArticlePage() {
  const [article, setArticle] = useState<ArticleWithUser | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/article/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setArticle(data.article));
  }, []);

  if (article === null) return <div className='main'>Loading...</div>;
  return (
    <div className='main'>
      <h3 className='article-title'>{article.title}</h3>
      <div className='article-metadata'>
        <div className='article-user-image'>
          <img src={`${article.user.image}`} />
        </div>
        <div className='article-info'>
          <span className='articla-user-name'>
            {article.user.firstName} {article.user.lastName}
          </span>
          <span className='article-time'>{article.createdAt.slice(0, 19)}</span>
        </div>
      </div>
      <div className='article-image'>
        <img src={article.image} />
      </div>
      <div className='article-content'>{article.content}</div>
    </div>
  );
}

export default SingleArticlePage;
