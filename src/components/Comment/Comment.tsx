import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useStore } from '../../store';
import './Comment.css';
type Props = {
  comment: ArticleComment;
  setComments: React.Dispatch<React.SetStateAction<ArticleComment[]>>;
};
function Comment({ comment, setComments }: Props) {
  const loggedInUser = useStore((store) => store.loggedInUser);
  const setModalMessage = useStore((store) => store.setModalMessage);
  const [isEditing, setIsEditing] = useState(false);

  function editComment(content: string) {
    fetch(`http://localhost:4000/comments/${comment.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) setModalMessage(data.error);
        else setComments(data);
      });
  }

  if (isEditing)
    return (
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          editComment(e.target.content.value);
          setIsEditing(false);
        }}
      >
        <TextField
          fullWidth
          name='content'
          rows={3}
          label='CONTENT'
          multiline
          defaultValue={comment.content}
          required
        />
        <Button type='submit' variant='contained'>
          SAVE CHANGES
        </Button>
      </form>
    );
  return (
    <div className='comment'>
      <div className='comment-user-image'>
        <img src={`${comment.user.image}`}></img>
      </div>
      <div className='comment-info'>
        <div className='comment-username-and-time'>
          <b className='comment-username'>@{comment.user.username}</b>
          <span className='comment-time'>
            {comment.createdAt.slice(0, 19).replace('T', ' ')}
          </span>
        </div>
        <div className='comment-content'>{comment.content}</div>
        <div className='comment-buttons'>
          {
            <button className='commment-button' onClick={() => {}}>
              <span className='material-icons'>delete</span>
            </button>
          }
          {loggedInUser?.id === comment.userId && (
            <button
              className='comment-button'
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <span className='material-icons'>edit</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
