import { Formik, Form } from "formik";
import "./App.css";
import * as Yup from "yup";
import TextInput from "./form-fields/TextInput";

function FormValidation() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Joe"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Johnson"
        />
        <TextInput
          label="Email"
          name="email"
          type="text"
          placeholder="jj@jj.com"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
}

export default FormValidation;
