import { useField } from "formik";
import { handleInputChange } from "../functions/functions";

export default function MySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;
  const isFocused = meta.touched && meta.error && meta.active;

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className={isError && !isFocused ? "input-error" : null}
        onChange={(e) => {
          handleInputChange(e);
          field.onChange(e);
        }}
      />
      {isError ? <div className="error">{meta.error}</div> : null}
    </div>
  );
}
