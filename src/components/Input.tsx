import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

// For using ref in a custom component we have to pass two generic type to the forwardRef function that wraps our component the first type is the type for ref and the second type is for props of the function.
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      {/* Setting name prop for input elements so we can get thier values while submitting the form. */}
      <input id={id} name={id} type="text" {...props} ref={ref} />
    </p>
  );
});

export default Input;
