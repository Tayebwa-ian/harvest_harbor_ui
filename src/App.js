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

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <div className="App">
        <Header />
        <Checkout />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
