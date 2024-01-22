import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RooterLayout from './pages/Root.jsx';
import Register from './pages/Register.jsx';
import ErrorPage from './pages/Error.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { action as loginAction } from './pages/Login.jsx';

import LoginPage from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: () => {
          console.log('pesho');
        },
      },
      { path: 'dashboard', element: <Dashboard /> },
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
