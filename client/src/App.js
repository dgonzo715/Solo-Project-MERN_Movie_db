// requires running: npm install bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Router } from '@reach/router';
import AllMovies from './components/AllMovies';
import MovieDetails from './components/MovieDetails';
import CreateMovie from './components/CreateMovie';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <div className="App">
      {/* Anything outside of the router will always show! */}
      <h1>Welcome to the Movie DB</h1>
      <Router>
        <AllMovies default />
        <CreateMovie path="/movies/new" />
        <MovieDetails path="/movies/:id" />
        <EditMovie path="/movies/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
