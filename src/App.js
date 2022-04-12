
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Packages from './components/Packages/Packages';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
     <Header></Header>

     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/packages' element={<Packages></Packages>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;
