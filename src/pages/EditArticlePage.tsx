import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';

function EditArticlePage() {
  const [article, setArticle] = useState<ArticleWithUser | null>(null);
  const params = useParams();
  const cateogories = useStore((store) => store.categories);
  const setModalMessage = useStore((store) => store.setModalMessage);
  useEffect(() => {
    fetch(`http://localhost:4000/article/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => setArticle(data.article));
  }, []);
  function editArticle(
    title: string,
    image: string,
    content: string,
    categoryId: number
  ) {
    fetch(`http://localhost:4000/articles/${params.id}`, {
      method: 'PATCH',
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
  if (article === null) return <div className='main'>Loading...</div>;
  return (
    <div className='main'>
      <h2>EDIT YOUR ARTICLE</h2>
      <form
        className='article-form'
        onSubmit={(e: any) => {
          e.preventDefault();
          editArticle(
            e.target.title.value,
            e.target.image.value,
            e.target.content.value,
            Number(e.target.category.value)
          );
        }}
      >
        <TextField
          fullWidth
          name='title'
          type='text'
          label='TITLE'
          variant='outlined'
          defaultValue={article.title}
          required
        />
        <TextField
          fullWidth
          name='image'
          type='url'
          label='IMAGE URL'
          variant='outlined'
          defaultValue={article.image}
          required
        />
        <TextField
          fullWidth
          name='content'
          rows={5}
          label='CONTENT'
          multiline
          defaultValue={article.content}
          required
        />
        <Select
          fullWidth
          name='category'
          defaultValue={article.categoryId}
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
          SAVE CHANGES
        </Button>
      </form>
    </div>
  );
}

export default EditArticlePage;
