import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import PlaceOrder from './Pages/PlaceOrder';
import OrderConfirmation from './Pages/OrderConfirmation';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';

const App = () => {
  return (
  
    <div>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/confirmorder" element={<OrderConfirmation/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App; 