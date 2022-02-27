import React from 'react';
import './Form.css';
import { Link } from "react-router-dom";

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='images/sign-3.svg' alt='success-image' />
      <button>
        <Link to="/post"> Let's explore more. </Link>
      </button>
    </div>
  );
};

export default FormSuccess;
