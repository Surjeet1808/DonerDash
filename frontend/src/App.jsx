import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Listing from './pages/Listing'
import Status from './component/Status'
import LandingMain from './component/LandingMain'
import About from './pages/About'
import Help from './pages/Help'
function App() {
 
  return (
    <>
      <Routes>
            <Route path='/' element={<Landing/>}>
                 <Route path='/'element={<LandingMain/>}/>
                 <Route path='about'element={<About/>}/>
                 <Route path='help'element={<Help/>}/>
            </Route>
            <Route path='/general' element={<Home/>}>
                <Route path='' element={<Listing/>}/>
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='transactions' element={<Transactions/>} />
                <Route path={"*"} element={<Status/>} />
            </Route>
      </Routes>
    </>
  )
}

export default App
