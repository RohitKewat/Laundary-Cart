import './App.css';
import Order from './Components/Orders/order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateOrder from './Components/CreateOrders/CreateOrder';
import Register from './Register';
import Signin from './Signin';
import Popup from './Components/CreateOrders/Popup.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/popup' element={<Popup />} />
          <Route path='/orders/create-order' element={<CreateOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
