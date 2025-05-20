
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Game from './pages/Game';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProgressQuiz from './pages/ProgressQuiz';
import ProtectRoute from './context/ProtectRoute';
import AdminDashboard from './pages/AdminDashboard';
import { ProgressHistory } from './pages/ProgressHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Pnf from './pages/Pnf';

function App() {

  return (
    <>
       <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Auth isLogin={true} />} />
          <Route path={'/register'} element={<Auth  />} />
          <Route path={'/dashboard'} element={<ProtectRoute allowedRoles={["User", "Admin"]}><Dashboard/></ProtectRoute>} />
          <Route path={'/game'} element={<Game/>} />
          <Route path={'/progress'} element={<ProtectRoute allowedRoles={["User", "Admin"]}><ProgressQuiz/></ProtectRoute>}/>
          <Route path={'/history'} element={<ProtectRoute allowedRoles={["User", "Admin"]}><ProgressHistory/></ProtectRoute>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/admin'} element={<ProtectRoute allowedRoles={[ "Admin"]}><AdminDashboard/></ProtectRoute>}/>
          <Route path='*' element={<Pnf/>}/>
        </Routes>
    </>
  ) 
}

export default App
