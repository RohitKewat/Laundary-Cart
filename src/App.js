

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './components/UserContext';
import Register from './Register';
import Signin from './Signin';
import User from './User';
function App() {
  return (
        <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/signin' element={<Signin/>}/>
        
        <Route path='/user' element={<User/>}/>
        
       </Routes>
       </BrowserRouter>
       
        </>
  );
}

export default App;
