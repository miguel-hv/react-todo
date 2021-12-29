import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './App.scss';

function App() {
  return (
    <>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Tarea"
        minRows={3}
        maxRows={6}
        style={{ width: 200 }}
      />
      <Button variant='contained'>Añadir tarea</Button>
    </>
  );
}

export default App;
