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
import BookingScreen from './Screens/BookingScreen';
import Signup from './Components/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route  path='book' element={<Booking />} />
        <Route path="/book/:id" element={<BookingScreen/>} />
        <Route path='help' element={<Help />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
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