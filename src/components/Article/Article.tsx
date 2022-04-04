import { Link } from 'react-router-dom';
import './Article.css';
type Props = {
  article: Article;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};
function Article({ article, articles, setArticles }: Props) {
  return (
    <div className='article'>
      <div className='article-image'>
        <img src={article.image} alt='article image' />
      </div>
      <div className='article-title-and-content'>
        <h4 className='article-title'>{article.title}</h4>
        <p className='article-content'>
          {article.content.slice(0, 350) + '...'}
          <Link className='article-link' to={`/articles/${article.id}`}>
            Read more...
          </Link>
        </p>
      </div>
      <span className='article-date-time'>
        {article.createdAt.slice(0, 19)}
      </span>
    </div>
  );
}

export default Article;
