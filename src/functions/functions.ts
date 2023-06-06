export const initialValues = {
  firstName: "Joe",
  lastName: "Joe",
  email: "joe@joe.com",
  jobType: "Designer",
  acceptedTerms: true,
};

export const handleInputChange = (event) => {
  // TODO - fix function use for checkbox. It sets the wrong value to session & after refresh.
  const storedFormValues = sessionStorage.getItem("formState");
  const { name, value } = event.target;
  if (storedFormValues) {
    if (value === "false" || value === "true") {
      sessionStorage.setItem(
        "formState",
        JSON.stringify({
          ...JSON.parse(storedFormValues),
          [name]: JSON.stringify(value),
        })
      );
    } else {
      sessionStorage.setItem(
        "formState",
        JSON.stringify({ ...JSON.parse(storedFormValues), [name]: value })
      );
    }
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
    let form = JSON.parse(storedFormValues);
    return { ...form, acceptedTerms: JSON.parse(form.acceptedTerms) };
  }
  return null;
};
