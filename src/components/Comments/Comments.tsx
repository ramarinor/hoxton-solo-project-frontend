import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css';

function Comments() {
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/comments/${params.id}`)
      .then((resp) => resp.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <div className='comment'>
          <div className='comment-user-image'>
            <img src={`${comment.user.image}`}></img>
          </div>
          <div className='comment-info'>
            <div className='comment-username-and-time'>
              <span className='comment-username'>{comment.user.username}</span>
              <span className='comment-time'>
                {comment.createdAt.slice(0, 19).replace('T', ' ')}
              </span>
            </div>
            <div className='comment-content'>{comment.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
