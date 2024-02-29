// Import a css that which style all things in web label/button/background/etc..
import './App.css';
// Call my componants and put it in this file to let it SHOW
import HeaderComp from './componants/Header';
import MainComp from './componants/Main' ;
// impoert "BrowserRouter" that allow me to use "Link componants" that which work like "hypertext <a></a>" but the advantge of "link" it is too faster
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // Here i put my componants in (BrowserRouter) to movement between them by use "Link componats"
    <>
      <BrowserRouter>
        <HeaderComp/>
        <MainComp/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
