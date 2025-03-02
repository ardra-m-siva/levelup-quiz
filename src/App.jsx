
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Game from './pages/Game';

function App() {

  return (
    <>
     <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Auth isLogin={true} />} />
        <Route path={'/register'} element={<Auth  />} />
        <Route path={'/dashboard'} element={<Dashboard  />} />
        <Route path={'/game'} element={<Game/>} />

      </Routes>
    </>
  )
}

export default App
