import { type ComponentPropsWithoutRef } from "react";

// This type will allows all the props that a form can have.
type FormProps = ComponentPropsWithoutRef<"form">;

export default function Form(props: FormProps) {
  return <form {...props}>{props.children}</form>;
}
