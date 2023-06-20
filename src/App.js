
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './compoenets/Header';
import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';

function App() {
  return (
    <div className="App">
  
      <Router>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={'/categories'} element={<CategoryMovies/>}/>
          <Route path={'/*'} element={<Home/>}/>
        </Routes>
      </Router>
       </div>
  );
}

export default App;
