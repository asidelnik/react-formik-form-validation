import { useField } from "formik";
export default function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  const isError = meta.touched && meta.error;
  const isFocused = meta.touched && meta.error && meta.active;

  return (
    <div>
      <label className="checkbox-input">
        <input
          type="checkbox"
          {...field}
          {...props}
          className={isError && !isFocused ? "input-error" : null}
        />
        {children}
      </label>
      {isError ? <div className="error">{meta.error}</div> : null}
    </div>
  );
}
