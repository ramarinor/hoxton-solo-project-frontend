import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import './Article.css';
type Props = {
  article: Article;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};
function Article({ article, articles, setArticles }: Props) {
  const loggedInUser = useStore((store) => store.loggedInUser);
  const setModalMessage = useStore((store) => store.setModalMessage);
  const navigate = useNavigate();

  function deleteArticle(id: number) {
    fetch(`http://localhost:4000/articles/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.token
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) setModalMessage(data.error);
        else {
          setModalMessage(data.message);
          let updatedArticles: Article[] = JSON.parse(JSON.stringify(articles));
          updatedArticles = updatedArticles.filter(
            (article) => article.id !== id
          );
          setArticles(updatedArticles);
        }
      });
  }

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
      {((loggedInUser?.id === article.userId && loggedInUser?.roleId === 2) ||
        loggedInUser?.roleId === 1) && (
        <div className='article-buttons'>
          <button
            className='article-button'
            onClick={() => deleteArticle(article.id)}
          >
            <span className='material-icons'>delete</span>
          </button>
          <button
            className='article-button'
            onClick={() => {
              navigate(`/articles/${article.id}/edit`);
            }}
          >
            <span className='material-icons'>edit</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Article;
