import './App.css';
import SharedLayout from './Screens/SharedLayout';
import Home from './Components/Home';
import About from './Components/About'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,RouterProvider} 
   from 'react-router-dom';
import Login from './Components/Login';
import Booking from './Components/Booking';
import BookingScreen from './Screens/BookingScreen';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import ProfileScreen from './Screens/ProfileScreen';
import AdminScreen from './Screens/AdminScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route  path='book' element={<Booking />} />
        <Route path="/book/:id/:date/:members" element={<BookingScreen/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<ProfileScreen/>}/>
        <Route path='admin' element={<AdminScreen/>}/>
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