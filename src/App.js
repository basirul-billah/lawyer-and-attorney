import './App.css';
import Header from './Pages/Components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Components/Footer/Footer';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services/:checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/Register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
