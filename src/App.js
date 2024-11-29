
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './template/Header';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Enquiry from './enquiry/Enquiry';
import ViewData from './enquiry/ViewData';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='add' element={<Enquiry/>}></Route>
      <Route path='view' element={<ViewData/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
