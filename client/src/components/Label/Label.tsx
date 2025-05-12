
interface Params { 
  htmlFor: string,
  children:string
  className: string
}

export const Label = ({htmlFor,children,className}:Params) => {
  return (
    <label htmlFor={htmlFor} className={className}>{children}</label>
  )
}