import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import './index.css'
import BaseLayout from './layouts/BaseLayout'
import Tasks from './pages/Tasks'
import Leaderboard from './pages/Leaderboard'
import Referral from './pages/Referral'
import Game from './pages/Game'

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />} >
          <Route index element={<Home />} />
          <Route path='/task' element={<Tasks />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/referral' element={<Referral />} />
          <Route path='/game' element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
