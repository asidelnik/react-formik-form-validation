import React from 'react'
import ReactDOM from 'react-dom/client'
import FormValidation from "./FormValidation.jsx";

const initialValues = {
  firstName: "Joe",
  lastName: "Joe",
  email: "joe@joe.com",
  jobType: "Designer",
  acceptedTerms: true,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormValidation {...initialValues} />
  </React.StrictMode>
);
