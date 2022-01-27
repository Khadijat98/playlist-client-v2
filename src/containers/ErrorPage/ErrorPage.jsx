import React from 'react';
import "./ErrorPage.scss";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return <div className="error-page">
    <h1 className="error-page__header">Oops!</h1>
    <h2 className="error-page__sub-header">Error 404: Page Not Found</h2>
    <p className="error-page__description">This wasn't what you were looking for, but I think this might be &#8594; <Link to="/">Back to Home</Link></p> 
  </div>
};

export default ErrorPage;
