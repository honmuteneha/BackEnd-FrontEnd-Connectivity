
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './template/Header';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Enquiry from './enquiry/Enquiry';
import ViewData from './enquiry/ViewData';
import Slider from './Slider';
import Footer from './template/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header> 
       
      <Routes>
      <Route path='add' element={<Enquiry/>}></Route>
      <Route path='view' element={<ViewData/>}></Route>
      <Route path='edit/:applicant_Id' element={<Enquiry/>}></Route>
      </Routes>
      <Slider></Slider>
      <Footer></Footer>
      </BrowserRouter>
      
      
      
       
    </div>
    
  );
}

export default App;
