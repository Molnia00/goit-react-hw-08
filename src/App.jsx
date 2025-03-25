
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/registerAndLogin/Login';
import Register from './pages/registerAndLogin/Register';
import Todos from './pages/todos';
import Header from './components/header/header';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/> }></Route>
           <Route path='todos' element={<Todos/> }></Route>
      </Route>

      <Route path='login' element={ <Login/>}></Route>
      <Route path='register' element={<Register/> }></Route>
      <Route path='*' element={<NotFound />}></Route>
      </Routes>)
}


export default App
