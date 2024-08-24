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
import HubsPage from './pages/HubsPage';
import HubPage from './pages/HubPage';
import NotFoundPage from './pages/NotFoundPage';
import { Grid } from '@mui/material';
import OrdersPage from './pages/OrdersPage';
import RegisterHub from './pages/RegisterHub';
import ProductUploadPage from './pages/UploadPdt';
import RegisterCategoryPage from './pages/RegisterCategory';
import useToken from './utils/UseToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
      <ThemeProvider theme={MainTheme}>
        <Router>
          <div>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='*' element={<LoginPage />} />
              </Routes>
            </Grid>
          </div>
        </Router>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <div className="App">
          <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<LandingPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/product' element={<ProductPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/hubs' element={<HubsPage />} />
                <Route path='/hub' element={<HubPage />} />
                <Route path='/orders' element={<OrdersPage />} />
                <Route path='/hubregisteration' element={<RegisterHub />} />
                <Route path='/addproduct' element={<ProductUploadPage />} />
                <Route path='/addcategory' element={<RegisterCategoryPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
