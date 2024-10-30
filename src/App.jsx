import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import ProductList from './pages/ProductList';
import Contato from './pages/Contato';
import FormularioPage from './pages/FormularioPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            {/* Rota da Home com Banner, Carousel e ProductList limitado a 3 produtos */}
            <Route path="/" element={
              <>
                <Banner />
                <Carousel />
                <ProductList limit={3} />
              </>
            } />

            {/* Rota da página Produtos sem limite para mostrar todos */}
            <Route path="/produtos" element={<ProductList />} />

            {/* Outras Páginas */}
            <Route path="/contato" element={<Contato />} />
            <Route path="/formulario" element={<FormularioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
