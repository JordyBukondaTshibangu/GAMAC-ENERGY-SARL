type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  opnClick?: () => void;
  size?: "sm" | "md" | "lg";
};

function Button({ buttonText, type, disabled, size }: ButtonProps) {
  return (
    <button
      className={`"w-full bg-[#B71C1C] hover:bg-[#D32F2F] text-white px-6 py-2 rounded-md font-medium transition-all
  " ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${
        size === "sm" ? "w-32 h-5 text-sm" : ""
      } ${size === "lg" ? " w-60 h-14 text-lg" : ""} ${
        size === "md" ? "w-40 text-md" : ""
      }`}
      disabled={disabled}
      type={type || "button"}
    >
      {buttonText}
    </button>
  );
}

export default Button;
