import { useState, useEffect } from 'react'
import { Typography, Button, Card } from '@mui/material';
import './app.css'




function App() {
  const [post, setPost] = useState<string>('');
  console.log(post);

  useEffect(() => {
    fetchApi();
  }, [])
  const fetchApi = async () => {
    const data = await fetch(import.meta.env.VITE_API_URL);
    const response: any = await data.json();
    setPost(response.slip.advice);
    console.log(response);
  }
  const handleClick = () => {
    fetchApi();
  }
  return (
    <>
      <div className='flex card'>

        <Card style={{ padding: '2rem', backgroundImage: "linear-gradient(to right, #0f0c29, #302b63, #24243e)", width: '50%' }} className='flex'>
          <Typography variant="subtitle2" display="block" gutterBottom fontSize={32} style={{ fontWeight: '700', color: 'white' }}>
            {post}
          </Typography>
          <Button onClick={handleClick} variant='contained' color="success">Next One</Button>
        </Card>

        <footer className='footer'>
          <p style={{color:'white'}} >©PuzzledBird</p>
        </footer>

      </div>



    </>
  )
}

export default App
