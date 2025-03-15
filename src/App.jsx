
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './pages/Game';
import Dashboard from './pages/Dashboard';
import ProgressQuiz from './pages/ProgressQuiz';

function App() {

  return (
    <>
       <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Auth isLogin={true} />} />
          <Route path={'/register'} element={<Auth  />} />
          <Route path={'/dashboard'} element={<Dashboard/>} />
          <Route path={'/game'} element={<Game/>} />
          <Route path={'/progress'} element={<ProgressQuiz/>}/>
        </Routes>
    </>
  )
}

export default App
