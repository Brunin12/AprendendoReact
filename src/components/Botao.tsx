import { ReactNode } from "react";

interface Props {
  cor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  children: ReactNode;
  clickAction: () => void;
}

const Botao = ({ cor, children, clickAction }: Props) => {
  return <button className={"btn mx-auto btn-" + cor} onClick={clickAction}>{children}</button>;
};

export default Botao;
