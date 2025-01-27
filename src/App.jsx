import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import './index.css'
import BaseLayout from './layouts/BaseLayout'
import Tasks from './pages/Tasks'

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout />} >
          <Route index element={<Home />} />
          <Route path='/task' element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
