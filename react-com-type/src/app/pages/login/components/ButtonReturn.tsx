
interface IButtonReturn {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
}

export const ButtonReturn: React.FC<IButtonReturn> = ({
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