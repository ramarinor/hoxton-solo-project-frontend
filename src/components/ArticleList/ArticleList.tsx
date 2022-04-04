import Article from '../Article/Article';
import './ArticleList.css';
type Props = {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};
function ArticleList({ articles, setArticles }: Props) {
  return (
    <div className='article-list'>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          articles={articles}
          setArticles={setArticles}
        />
      ))}
    </div>
  );
}

export default ArticleList;
