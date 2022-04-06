import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './Comment.css';
type Props = {
  comment: ArticleComment;
};
function Comment({ comment }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  if (isEditing)
    return (
      <form>
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
      </div>
    </div>
  );
}

export default Comment;
