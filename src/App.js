import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Bookpage from './Components/Books/Bookpage';
import Category from './Components/Category/Category';

function App() {
  return (
    <div className="bookstore">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Bookpage />} />
        <Route path="/categories" exact element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
