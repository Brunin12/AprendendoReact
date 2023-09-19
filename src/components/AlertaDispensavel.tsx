
import { ReactNode } from "react";

interface Props {
  cor?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  children: ReactNode;
  onClose: () => void;
}

const AlertaDispensavel = ({ cor, children, onClose }: Props) => {
  return (
    <div className={"alert alert-"+cor+" alert-dismissible fade show"} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default AlertaDispensavel;
