export const initialValues = {
  firstName: "Joe",
  lastName: "Joe",
  email: "joe@joe.com",
  jobType: "Designer",
  acceptedTerms: true,
};

export const handleInputChange = (event) => {
  // TODO - fix functio for updating key acceptedTerms. In useEffect, it sets boolean, but here string.
  const storedFormValues = sessionStorage.getItem("formState");
  const { name, value } = event.target;
  if (storedFormValues) {
    sessionStorage.setItem(
      "formState",
      JSON.stringify({ ...JSON.parse(storedFormValues), [name]: value })
    );
  } else {
    sessionStorage.setItem(
      "formState",
      JSON.stringify({ ...initialValues, [name]: value })
    );
  }
};

export const getSessionValue = (sessionKey) => {
  const storedFormValues = sessionStorage.getItem(sessionKey);
  if (storedFormValues) {
    return JSON.parse(storedFormValues);
  }
  return null;
};
