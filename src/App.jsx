import './App.css';
import Hero from './components/Hero';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RooterLayout from './pages/Root.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import About from './pages/About.jsx';
import Testimonials from './pages/Testimonials.jsx';
import ErrorPage from './pages/Error.jsx';
// import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <LandingPage /> },
      { index: true, element: <Hero /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'about', element: <About /> },
      { path: 'testimonials', element: <Testimonials /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
