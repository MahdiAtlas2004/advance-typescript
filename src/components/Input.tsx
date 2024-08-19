import { ComponentPropsWithoutRef } from "react";

// Merging custom props types with predefined input element props types using ComponentPropsWithoutRef generic type. thus we can use other props for our custom Input component.
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

// Destructuring all possible props that an input element can have with ...props.
export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      {/* using {...props} to get all possible remained props. */}
      <input id={id} type="text" {...props} />
    </p>
  );
}
