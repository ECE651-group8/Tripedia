import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <a href="/display"><img className="form-img-2" src="https://images.unsplash.com/photo-1571055582845-67e98663656f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="success-image"/></a>

      {/* <button>
        <> Let us explore more. </Link>
      </button> */}
    </div>
  );
};

export default FormSuccess;
