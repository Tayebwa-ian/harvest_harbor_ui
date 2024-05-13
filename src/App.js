import { ThemeProvider } from '@emotion/react';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import MainTheme from './components/MainTheme'
import ProductPage from './pages/ProductPage';
import './static/styles/App.css'
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
