import {Routes,Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import './Cssfiles/Home.css'
import './Cssfiles/Dashboard.css'
import './Cssfiles/Login.css'
import './Cssfiles/Navbarland.css'
import './Cssfiles/Reg.css'
import './Cssfiles/Userreg.css'
import './Cssfiles/UserSignup.css'

import Register from './pages/Reg'
import Home from './pages/Home';
import Navbar1 from './navbars/Navbarland'
import Navbar2 from './navbars/Navbarlandr'
import Login from './pages/Login'
import Userreg from './pages/Userreg'
import UserSignup from './pages/UserSignup'
import Dashboard from './pages/Dashboard'

function App() {
  return (

    <Routes>
        <Route path='/' element={<><Navbar1/><Home/></>}></Route>
        <Route path='Login' element={<><Navbar2/><Login/></>}></Route>
        <Route path='Dashboard' element={<><Navbar2/><Dashboard/></>}></Route>
        <Route path='Register' element={<><Navbar2/><Register/></>}></Route>
        <Route path='UserRegistration' element={<><Navbar2/><Userreg/></>}></Route>
        <Route path='UserSignup' element={<><Navbar2/><UserSignup/></>}></Route>
      </Routes>


  );
}
export default App;
