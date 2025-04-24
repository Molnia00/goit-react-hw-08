import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './pages/registerAndLogin/Login';
import Register from './pages/registerAndLogin/Register';
import Header from './components/header/header';
import Layout from './Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contactss from './pages/contactss/Contactss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  refreshThunk } from './redux/auth/operations';
import {  selectIsRefreshing } from './redux/auth/selectors';
import { PrivateRoute } from './components/privateItems';
import { PublicRoute } from './components/publicRoutes';

function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  return isRefreshing ? null : (
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/> }></Route>
        <Route path='contacts' element={
          <PrivateRoute>
            <Contactss />
          </PrivateRoute>
        }></Route>
      <Route path='login' element={<PublicRoute><Login /></PublicRoute>
}></Route>
      <Route path='register' element={<PublicRoute><Register/></PublicRoute> }></Route>
      <Route path='*' element={<NotFound />}></Route>
      </Route>
      
      </Routes>)
}



export default App


