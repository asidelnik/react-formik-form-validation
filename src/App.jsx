// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from "react";
// import ReactDOM from "react-dom";
import { useFormik } from "formik";

function FormValidation() {
    const formik = useFormik({
      initialValues: { email: "" },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    );
}

export default FormValidation
