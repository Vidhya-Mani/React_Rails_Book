import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Bookadd from './component/Bookadd';
import Displaybook from './component/Displaybook';
import Updatebook from './component/Updatebook';
import Deletebook from './component/Deletebook';
import Searchbook from './component/Searchbook';

function App() {
  return (
    <>
    <h1><center>Welcome to Integration of F.E with B.E for Book Management!!</center> </h1>
    <Routes>
      <Route element={<Bookadd/>} path="/bookadd" />
      <Route element={<Displaybook />} path="/" />
      <Route element={<Searchbook />} path="/searchbook" />
      <Route element={<Updatebook />} path="/updatebook" />
      <Route element={<Deletebook />} path="/deletebook" />

    </Routes>
    
     </>
  );
}

export default App;
