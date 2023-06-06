import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../App.css";
import MyTextInput from "../form-fields/MyTextInput";
import MySelect from "../form-fields/MySelect";
import MyCheckbox from "../form-fields/MyCheckbox";
import { initialValues, getSessionValue } from "../functions/functions";

function FormValidation() {
  const [formState] = useState(getSessionValue("formState") || initialValues);

  useEffect(() => {
    const formStateFromStorage = sessionStorage.getItem("formState");
    if (!formStateFromStorage) {
      sessionStorage.setItem("formState", JSON.stringify(formState));
    }
  }, []);

  return (
    <Formik
      initialValues={formState}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      onReset={(values, { setValues }) => {
        sessionStorage.removeItem("formState");
        setValues(initialValues);
      }}
    >
      {({ isSubmitting, handleReset }) => (
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Joe"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Johnson"
          />
          <MyTextInput
            label="Email"
            name="email"
            type="text"
            placeholder="jj@jj.com"
          />
          <MySelect
            label="Job Type"
            name="jobType"
          >
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
            <br />
            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormValidation;
