
import './App.css';
import BottomBox from './components/BottomBox';
import Navbar from './components/Navbar';
import RegisterSection from './components/RegisterSection';
import SignInSection from './components/SignInSection';

import SocialHandle from './components/SocialHandle';
import { ContextProvider } from './components/UserContext';
function App() {
  return (
        <>
       <ContextProvider>
       <Navbar/>
       </ContextProvider> 
       {/* <RegisterSection/> */}
       <SignInSection/>
         <SocialHandle/>
          <BottomBox/>
        </>
  );
}

export default App;
