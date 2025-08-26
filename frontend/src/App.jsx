import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContextProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Pcbuild from './pages/Pcbuild'
import Pcparts from './pages/Pcparts'

const AppContent = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login'

  return (
    <div>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pc-build" element={<Pcbuild />} />
        <Route path="/pc-parts" element={<Pcparts />} />
      </Routes>
      {!isLoginPage && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <AppContent />
      </AppContextProvider>
    </Router>
  )
}

export default App
