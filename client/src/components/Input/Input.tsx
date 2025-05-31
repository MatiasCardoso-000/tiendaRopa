import {  forwardRef } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: ReturnType<UseFormRegister<FieldValues>>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ register, ...rest }, ref) => {
    return (
      <input
        {...rest}
        {...(register ?? {})}
        ref={ref}
      />
    );
  }
);



