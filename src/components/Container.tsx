import { type ElementType } from "react"

// ElementType is a special type that tells that the type is a element.
type ContainerProps = {
    as: ElementType;
}

// polyphormic component is a componet that can wrap or be any other component.
// We could alias {as} like this {as:Component} too.
export default function Container({as}: ContainerProps) {
    const Component = as;
    return <Component />
}