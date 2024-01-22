/* eslint-disable no-unused-vars */
import { useRouteError } from 'react-router-dom';
import brokenPigImg from '../assets/brokenPig3.webp';

import ErrorPageContent from '../components/ErrorPageContent.jsx';
import MainNav from '../components/MainNav.jsx';
import Header from '../components/Header.jsx';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  let title = 'An error has occured!';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.message;
  }

  if (error.status === 404) {
    title = 'Page not found!';
    message = 'Could not find resource or page.';
  }

  if (error.status === 422) {
    title = 'Unable to login';
    message = error.message;
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
    </>
  );
}
