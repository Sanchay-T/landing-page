"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { buttonVariants, type ButtonVariantProps } from "./button-variants"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, children, type, ...props },
    ref
  ) => {
    const classes = cn(buttonVariants({ variant, size, className }))

    if (asChild) {
      if (!React.isValidElement<Record<string, unknown>>(children)) {
        return null
      }

      const childElement = children
      const childProps = childElement.props ?? {}
      const {
        ref: childRef,
        className: childClassName,
        ...restChildProps
      } = childProps as {
        ref?: React.Ref<HTMLElement>
        className?: string
        [key: string]: unknown
      }

      const { className: providedClassName, ...restProps } = props as {
        className?: unknown
        [key: string]: unknown
      }

      const mergedProps: Record<string, unknown> = {
        ...restChildProps,
        ...restProps,
        className:
          cn(
            typeof childClassName === "string" ? childClassName : undefined,
            typeof providedClassName === "string"
              ? providedClassName
              : undefined,
            classes
          ) || undefined,
        ref: mergeRefs(childRef, ref as React.Ref<HTMLElement>),
      }

      if (typeof type !== "undefined") {
        mergedProps.type = type
      }

      return React.cloneElement(childElement, mergedProps)
    }

    return (
      <button className={classes} ref={ref} type={type ?? "button"} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }

function mergeRefs<T>(
  ...refs: (React.Ref<T | null> | undefined)[]
): React.RefCallback<T | null> {
  return (value) => {
    for (const ref of refs) {
      if (!ref) continue
      if (typeof ref === "function") {
        ref(value)
      } else {
        ;(ref as React.MutableRefObject<T | null>).current = value
      }
    }
  }
}
