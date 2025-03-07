import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Page1 from './Page/Page1';
import Page2 from './Page/page22';
import  Acceuil from './Page/Acceuil';
import Inscription from './Page/Inscription';
import Connexion from './Page/Connexion';
function Rooter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Acceuil/>} />
        <Route path='/inscription' element={<Inscription/>} />
         <Route path='/connexion' element={<Connexion />} />
         <Route path="/App" element={<App />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default Rooter;
