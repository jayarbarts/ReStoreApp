import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useStoreContext } from '../context/StoreContext';
import LoadingComponent from './LoadingComponent';
import { useAppDispatch } from '../store/configureStore';
import { fetchBasketAsync } from '../../feature/basket/basketSlice';
import { fetchCurrentUser } from '../../feature/account/accountSlice';
import HomePage from '../../feature/home/HomePage';
import Footer from './Footer';
import ScrollToTop from '../router/ScrollToTop';

// const products = [
//   {name: 'product1', price: 100},
//   {name: 'product2', price: 300},
//   {name: 'product2', price: 400}
// ]
window.onscroll = function () {
  const currentScrollPos = window.scrollY;
  if (currentScrollPos <= 250) {
    document.getElementById("header")!.style.top = "0";
  } else {
    document.getElementById("header")!.style.top = "-100px";
  }
}

function App() {
  // const {setBasket} = useStoreContext();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
      // return <HomePage />
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false))
  }, [initApp]);

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#3b3b3b'
      }
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message='Initializing app...' />;

  return (
    <>
      <ScrollToTop>
        <div style={{ minHeight: '45rem' }}>
          <ThemeProvider theme={theme}>
            <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
            {
              loading ? <LoadingComponent message='Initializing app...' />
                : location.pathname === '/' ? <HomePage />
                  : <Container sx={{ mt: 4 }}>
                    <Outlet />
                  </Container>
            }
          </ThemeProvider>
        </div>
        <Footer darkMode={darkMode} />
      </ScrollToTop>
    </>
  );
}

export default App;
