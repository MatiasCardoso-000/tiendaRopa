import { EventHandler } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

interface Params { 
type:string,
id:string,
name?:string
className:string,
register?: ReturnType<UseFormRegister<FieldValues>>
onChange? : EventHandler<React.ChangeEvent<HTMLInputElement>>
accept?: string
}

export const Input = ({type,id,name,className,register,onChange, accept}: Params) => {
  return (
    <input
    {...register}
    type={type}
    id={id}
    name={name}
    className={className}
    onChange={onChange}
    accept={accept}  />
  )
}