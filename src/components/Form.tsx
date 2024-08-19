import {
  type FormEvent,
  type ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

// This type will allows all the props that a form can have.
type FormProps = ComponentPropsWithoutRef<"form"> & {
  // setting the value type to unknown because we don't know this value is from which kind of element in our form.
  onSave: (value: unknown) => void;
};

// forwardRef tells that our component is able to be rferred in another components. 
const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  // This hook helps us to create a function in our custom component which we can call outside that component in other components.
  // Which in this case the clear method which clears the form after clicking the save button.
  // and also this hook take two parameters.
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // converting formData to a simpler object to be able to access specific data with {data.name} syntax.
    const data = Object.fromEntries(formData);
    onSave(data);
    // this will reset the form.
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
