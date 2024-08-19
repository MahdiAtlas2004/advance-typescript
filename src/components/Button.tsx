import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  // Here href is optional but if it's used it's type is never that tells this should not be set to any value.
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  // Here href is optional and if it's used it's type is string.
  href?: string;
};

// This function return true if href is in the props and the annotation after paranthesis demonstrates that if the function returns true then the props is a type of AnchorProps. {props is AnchorProps} in typescript is a specific syntax that is called predicate.
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
