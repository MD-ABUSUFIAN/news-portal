import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';
import './index.css';
// import AboutLayout from './layout/AboutLayout/AboutLayout.jsx'
// import CareerLayout from './layout/CareerLayout/CareerLayout.jsx'
import NavItemMain from './components/NavItemMain.jsx';
import NewsDetails from './components/NewsDetails.jsx';
import AuthLayout from './layout/AuthLayout/AuthLayout.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/category/:categoryId" element={<NavItemMain />}></Route>
        </Route>
        {/* <Route path="/about" element={<AboutLayout/>} />
           <Route path="/career" element={<CareerLayout />} /> */}
        <Route path="/newsDetails/:newsId" element={<NewsDetails />}></Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  </StrictMode>
);
