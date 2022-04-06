import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

function CreateArticlePage() {
  const cateogories = useStore((store) => store.categories);
  const setModalMessage = useStore((store) => store.setModalMessage);
  const loggedInUser = useStore((store) => store.loggedInUser);
  const navigate = useNavigate();
  function createArticle(
    title: string,
    image: string,
    content: string,
    categoryId: number
  ) {
    fetch(`http://localhost:4000/articles`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, image, content, categoryId })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) setModalMessage(data.error);
        else setModalMessage(data.message);
      });
  }
  return (
    <div
      className='main'
      style={{ backgroundColor: '#dbdbdb', color: 'black' }}
    >
      <h2>Create an Article</h2>
      <form
        className='article-form'
        onSubmit={(e: any) => {
          e.preventDefault();
          createArticle(
            e.target.title.value,
            e.target.image.value,
            e.target.content.value,
            Number(e.target.category.value)
          );
          navigate(`/users/${loggedInUser?.username}`);
        }}
      >
        <TextField
          fullWidth
          name='title'
          type='text'
          label='TITLE'
          variant='outlined'
          required
        />
        <TextField
          fullWidth
          name='image'
          type='url'
          label='IMAGE URL'
          variant='outlined'
          required
        />
        <TextField
          fullWidth
          name='content'
          rows={5}
          label='CONTENT'
          multiline
          required
        />
        <Select
          fullWidth
          name='category'
          defaultValue={''}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          required
        >
          <MenuItem disabled value={''}>
            <em>Select the category</em>
          </MenuItem>
          {cateogories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>

        <Button type='submit' variant='contained'>
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default CreateArticlePage;
