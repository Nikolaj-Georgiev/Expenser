/* eslint-disable no-unused-vars */
import { useRouteError } from 'react-router-dom';

import brokenPigImg from '../assets/brokenPig3.webp';
import ErrorPageContent from '../components/error/ErrorPageContent.jsx';
import MainNav from '../components/main-nav/MainNav.jsx';
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  let title = 'An error has occured!';
  let message = 'Something went wrong';

  if (error.status === 404) {
    title = 'Page you are trying to reach does not exist';
    message = '404';
  }

  if (error.error_description === 'Invalid login credentials') {
    title = 'Unable to login';
    message = error.error_description;
  }

  if (error.error_description === 'User already registered') {
    title = 'Unable to register';
    message = error.error_description;
  }

  return (
    <>
      <Header>
        <MainNav />
      </Header>
      <ErrorPageContent
        title={title}
        img={brokenPigImg}
        imgText='Broken piggy bank'
        cssClass='broken-piggy-bank'
      >
        {message}
      </ErrorPageContent>
      <Footer />
    </>
  );
}
