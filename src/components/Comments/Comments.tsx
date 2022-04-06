import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store';
import Comment from '../Comment/Comment';
import './Comments.css';
type Props = {
  articleUserId: number;
};
function Comments({ articleUserId }: Props) {
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const params = useParams();
  const setModalMessage = useStore((store) => store.setModalMessage);

  function addComment(content: string) {
    fetch(`http://localhost:4000/comments`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content, articleId: Number(params.id) })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) setModalMessage(data.error);
        else setComments(data);
      });
  }

  useEffect(() => {
    fetch(`http://localhost:4000/comments/${params.id}`)
      .then((resp) => resp.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <div className='comments'>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          setComments={setComments}
          articleUserId={articleUserId}
          key={comment.id}
        />
      ))}
      <form
        className='comment-form'
        onSubmit={(e: any) => {
          e.preventDefault();
          addComment(e.target.content.value);
          e.target.reset();
        }}
      >
        <TextField
          fullWidth
          name='content'
          rows={3}
          label='Write your comment here...'
          multiline
          required
        />
        <Button type='submit' variant='contained'>
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default Comments;
