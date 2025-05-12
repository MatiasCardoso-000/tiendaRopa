interface Params { 
  text: string
  className:string
}

export const ErrorMessage = ({ text ,className}:Params) => {
  return <p className={className}>{text}</p>;
};
