import { Container, Grid } from '@mui/material';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap.jpg';
import Csharp from './images/csharp.jpg';
import KompleWeb from './images/completeweb.jpg';

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Kart Projesi</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course image={Angular} title="Angular" description="Lorem commodo commodo aliqua ipsum aliqua veniam consectetur enim excepteur adipisicing incididunt duis voluptate sit. Ex velit ea irure cupidatat. Duis deserunt nulla deserunt sunt pariatur ullamco nulla non." />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course image={Bootstrap} title="Bootstrap" description="Lorem commodo commodo aliqua ipsum aliqua veniam consectetur enim excepteur adipisicing incididunt duis voluptate sit. Ex velit ea irure cupidatat. Duis deserunt nulla deserunt sunt pariatur ullamco nulla non." />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course image={Csharp} title="Csharp" description="Lorem commodo commodo aliqua ipsum aliqua veniam consectetur enim excepteur adipisicing incididunt duis voluptate sit. Ex velit ea irure cupidatat. Duis deserunt nulla deserunt sunt pariatur ullamco nulla non." />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course image={KompleWeb} title="KompleWeb" description="Lorem commodo commodo aliqua ipsum aliqua veniam consectetur enim excepteur adipisicing incididunt duis voluptate sit. Ex velit ea irure cupidatat. Duis deserunt nulla deserunt sunt pariatur ullamco nulla non." />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
