import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alerta = ({ children }: Props) => {
  return <div className="alert alert-primary text-black">{children}</div>;
};

export default Alerta;
