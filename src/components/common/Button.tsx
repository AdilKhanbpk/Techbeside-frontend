interface ButtonType {
  title?: string;
  className?: string;
  disabled?: boolean; // Specify the type for the disabled prop
  handleClick?: () => void;
  type?: "button" | "submit" | "reset"; // Add type prop
}

function CommonButton(props: ButtonType) {
  const { title, className, handleClick, type = "button", disabled = false } = props; // Default to false for disabled
  
  return (
    <button className={className} onClick={handleClick} type={type} disabled={disabled}>
      {title}
    </button>
  );
}

export default CommonButton;
