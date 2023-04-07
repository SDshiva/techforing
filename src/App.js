import './App.css';
import { AppBar, Button, ButtonGroup, Grid } from '@mui/material';

function App() {

  return (
    <div className="App">
      <header>
        <AppBar>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <h3>Tech Foring</h3>
              <p><small>Shaping Tomorrows Cybersecurity</small></p>
            </Grid>
            <Grid item md={4}>

              <Button variant='outlined' color='error'>Sign Up</Button>
              <Button variant="contained" color="success">Sign In</Button>

            </Grid>
          </Grid>
        </AppBar>
      </header>

      <main className='main-class'>
        <h1 color='black'>WORK AT TECH FORING LIMITED</h1>

        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>Software Project manager</Button>
          <Button>Project Manager</Button>
          <Button>Content Writer</Button>
          <Button>Software Project manager</Button>
          <Button>Project Manager</Button>
          <Button>Content Writer</Button>
        </ButtonGroup>
      </main>
    </div >
  );
}

export default App;
