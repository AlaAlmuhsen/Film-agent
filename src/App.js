import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';


function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/Movie"  element={<Movie />}/>
      <Route path="/Movie/:id"  element={<Movie />}/>
    </Routes>
  );
}

export default App;
