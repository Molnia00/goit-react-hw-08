import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './pages/registerAndLogin/Login';
import Register from './pages/registerAndLogin/Register';
import Header from './components/header/header';
import Layout from './Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contactss from './pages/contactss/Contactss'

function App() {



  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/> }></Route>
           <Route path='contacts' element={<Contactss/>}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='register' element={<Register/> }></Route>
      <Route path='*' element={<NotFound />}></Route>
      </Route>
      
      </Routes>)
}



export default App


