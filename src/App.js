import './App.css';
import { AppBar, Button, Grid, TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Grid container>
          <Grid item md={8}>
            <h3>Tech Foring</h3>
            <small>Shaping Tomorrows Cybersecurity</small>
          </Grid>
          <Grid item md={4}>

            <Button variant='outlined' color='error'>Sign Up</Button>
            <Button variant="contained" color="success">Sign In</Button>

          </Grid>
        </Grid>
      </AppBar>
      <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </div>
  );
}

export default App;
