import FormValidation from "./components/FormValidation";

export default function App() {
  const initialValues = {
    firstName: "Joe",
    lastName: "Joe",
    email: "joe@joe.com",
    jobType: "Designer",
    acceptedTerms: true,
  };
  return <FormValidation {...initialValues} />;
}
