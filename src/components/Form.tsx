import { type FormEvent, type ComponentPropsWithoutRef } from "react";

// This type will allows all the props that a form can have.
type FormProps = ComponentPropsWithoutRef<"form"> & {
  // setting the value type to unknown because we don't know this value is from which kind of element in our form.
  onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: FormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    
    // converting formData to a simpler object to be able to access specific data with {data.name} syntax.
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
