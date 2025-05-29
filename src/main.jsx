import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutLayout from './layout/AboutLayout/AboutLayout.jsx'
import CareerLayout from './layout/CareerLayout/CareerLayout.jsx'
import NavItemMain from './components/NavItemMain.jsx'
import NewsDetails from './components/NewsDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<App />}>
           <Route path='/category/:categoryId' element={<NavItemMain/>}></Route>
           </Route> 
           <Route path="/about" element={<AboutLayout/>} />
           <Route path="/career" element={<CareerLayout />} />
           <Route path='/newsDetails/:newsId' element={<NewsDetails/>}></Route>
           
        </Routes>
      </BrowserRouter>
    
  </StrictMode>,
)
