import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Bookpage from './Components/Books/Bookpage';
import Category from './Components/Category/Category';
import store from './Redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="bookstore">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Bookpage />} />
          <Route path="/categories" exact element={<Category />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
