import { ReactNode } from "react";

interface AlertButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const alertButton = ({ children, onClick }: AlertButtonProps) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
      </div>
      <button className="btn-close" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default alertButton;
