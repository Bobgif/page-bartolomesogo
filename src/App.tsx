
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

/* Componentes del portafolio */
import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Photos } from './pages/Photos';
import { AboutContact } from './pages/AboutContact';
import { NotFound } from './pages/NotFound';
import { UnderConstruction } from './pages/UnderConstruction';
import { Services } from './pages/Services';
/* Componentes del blog */
import { BlogLayout } from './blog/layout/BlogLayout';
import { BlogHome } from './blog/pages/BlogHome';
import { BlogPost } from './blog/pages/BlogPost';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        {/* Rutas del portafolio */}
        <Route element={<MainLayout><Outlet /></MainLayout>}>
          <Route path="/" element={<Home />} />
          <Route path="/fotografias" element={<Photos />} />
          <Route path="/acerca" element={<AboutContact />} />
          <Route path="/contacto" element={<AboutContact />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
      
        </Route>


        {/* Rutas del blog */}
        <Route path="/blog" element={<BlogLayout />}>
        {/*carga blog home*/ }
          <Route index element={<BlogHome />} />
          {/* RUTA CLAVE: El :slug le dice a React Router que capture el nombre del post */}
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Tus otras rutas (Home, About, etc.) */}
            {/* <Route path="/" element={<Home />} /> */}
        </Route>
      </Routes>
        
      
    </BrowserRouter>
    
  );
}

export default App;