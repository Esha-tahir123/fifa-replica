
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './footer';
import Men1 from './men1';
import Fifa from './middlesection';
import Privacy from './privacy';
import Submenu from './submenu';
import Terms from './terms';




function App() {
  return (
    <div className="App">

       <Men1/>
       <Routes>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Terms' element={<Terms/>}/>
   <Route path='/Submenu' element={<Submenu/>}/>
       </Routes>
      <Fifa/>

   
   <Footer/>
    </div>

  );
}

export default App;
