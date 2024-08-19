import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

// ElementType is a special type that tells that the type is a element or if we want to talk about is more concisely it is the name of an element.
type ContainerProps<T extends ElementType> = {
  // making as optional
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// polyphormic component is a componet that can wrap or be any other component.
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  // assigning a default value for Component. and with this typescript always knows that this is a valid element that can be used in jsx.
  const Component = as || "div";
//   Accepting other props which that specific polyphormic element can have. 
  return <Component {...props}>{children}</Component>;
}
