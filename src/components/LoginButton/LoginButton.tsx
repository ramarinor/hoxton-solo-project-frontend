import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function LogInButton() {
  const navigate = useNavigate();
  return (
    <Stack spacing={2} direction='row'>
      <Button
        variant='contained'
        onClick={() => {
          navigate('login');
        }}
      >
        LOG IN
      </Button>
    </Stack>
  );
}
