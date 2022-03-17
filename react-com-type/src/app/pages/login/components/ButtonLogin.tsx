

export interface IButtonLogin {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export const ButtonLogin: React.FC<IButtonLogin> = ({
  type,
  onClick,
  children,
}) => {

  
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
