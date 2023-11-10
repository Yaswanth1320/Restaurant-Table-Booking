import './App.css';
import SharedLayout from './Screens/SharedLayout';
import Home from './Components/Home';
import About from './Components/About'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,RouterProvider} 
   from 'react-router-dom'
import Help from './Components/Help';
import Login from './Components/Login';
import Booking from './Components/Booking';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<Booking />} />
        <Route path='help' element={<Help />} />
        <Route path='login' element={<Login />} />
    </Route>
  )
)

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;