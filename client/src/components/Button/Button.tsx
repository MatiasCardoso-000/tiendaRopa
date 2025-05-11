import {MouseEventHandler } from "react";

interface Params {
  className: string;
  children: string | React.ReactNode;
  onClick? : MouseEventHandler
}

export const Button = ({ className, children,onClick }: Params) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};
