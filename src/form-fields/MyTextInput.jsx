import { useField } from "formik";

export default function MyTextInput({ label, ...props }) {
  // TODO - Learn this
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const isFocused = meta.touched && meta.error && meta.active;
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={isError && !isFocused ? "input-error" : null}
      />
      {isError ? <div className="error">{meta.error}</div> : null}
    </>
  );
}
