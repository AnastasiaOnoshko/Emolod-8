import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Gallery from './pages/Gallery/index.tsx'
import Projects from './pages/Projects/index.tsx'
import Certifications from './pages/Certifications/index.tsx'
import Contacts from './pages/Contacts/index.tsx'
import Main from './pages/Main/index.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/' element={<Main />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/certification' element={<Certifications />} />
      <Route path='/contacts' element={<Contacts />} />

    </Routes>
  </BrowserRouter>
)
