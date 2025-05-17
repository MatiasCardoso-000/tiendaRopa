import { EventHandler } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

interface Params { 
type:string,
id:string,
className:string,
register?: ReturnType<UseFormRegister<FieldValues>>
onChange? : EventHandler<React.ChangeEvent<HTMLInputElement>>
accept?: string
}

export const Input = ({type,id,className,register,onChange, accept}: Params) => {
  return (
    <input
    {...register}
    type={type}
    id={id}
    className={className}
    onChange={onChange}
    accept={accept}  />
  )
}