import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouterLayout from './pages/Rout.jsx';
import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage, { action as loginAction } from './pages/Login.jsx';
import RegisterPage, { action as registerAction } from './pages/Register.jsx';
import DashboardLayout from './pages/DashboardRouts.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import { tokenLoader } from './util/auth.js';
import { action as logoutAction } from './pages/Logout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <RegisterPage />,
        action: registerAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: tokenLoader,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      {
        path: 'logout',
        action: logoutAction,
      },
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
