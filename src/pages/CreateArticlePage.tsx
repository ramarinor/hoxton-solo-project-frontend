import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useStore } from '../store';

function CreateArticlePage() {
  const cateogories = useStore((store) => store.categories);
  return (
    <div className='main'>
      <h2>Create an Article</h2>
      <form className='article-form'>
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

        <Button type='submit' variant='contained' onClick={() => {}}>
          SUBMIT
        </Button>
      </form>
    </div>
  );
}

export default CreateArticlePage;
