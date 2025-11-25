import "../styles/button.css";

export default function Button({ children, variant = "primary", onClick }) {
  return (
    <button
      className={`button ${variant === "secondary" ? "secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
