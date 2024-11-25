import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Homepage from './pages/Homepage';
import './index.css';
import './assets/stylesheets/responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/stylesheets/style.css';
import { PageWrapper, SmoothScroll } from './components/PageWrapper';
import ContactForm from './pages/ContactUs';
import ContactList from './pages/ContactList';


const App = () => {
  const location = useLocation();

  return (
    <>
    <SmoothScroll>
      <Navbar />
        <div className='mb-5'>
          <AnimatePresence mode="popLayout">
            <Routes location={location} key={location.pathname}>
              <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
              <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
              <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <PageWrapper><Profile /></PageWrapper>
                  </ProtectedRoute>
                }
              />
              <Route path="/contact" element={<PageWrapper><ContactForm /></PageWrapper>} />
              <Route path="/data" element={<PageWrapper><ContactList /></PageWrapper>} />

            </Routes>
          </AnimatePresence>
        </div>
        <Footer />
    </SmoothScroll>
      </>
  );
};

export default function RouterWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
