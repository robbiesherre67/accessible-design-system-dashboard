export default function SkipToContent() {
  return (
    <a
      href="#main"
      style={{
        position: "absolute",
        top: "5px",
        left: "5px",
        padding: "8px 14px",
        background: "#1a73e8",
        color: "#fff",
        borderRadius: "6px",
        transform: "translateY(-200%)",
        transition: "transform .2s",
      }}
      onFocus={(e) => (e.target.style.transform = "translateY(0)")}
      onBlur={(e) => (e.target.style.transform = "translateY(-200%)")}
    >
      Skip to main content
    </a>
  );
}
