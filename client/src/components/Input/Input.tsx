import { FieldValues, UseFormRegister } from "react-hook-form"

interface Params { 
type:string,
id:string,
className:string,
register: ReturnType<UseFormRegister<FieldValues>>
}

export const Input = ({type,id,className,register}: Params) => {
  return (
    <input
    {...register}
    type={type}
    id={id}
    className={className}
  />
  )
}