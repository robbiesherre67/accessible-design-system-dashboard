import "../styles/modal.css";
import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, children }) {
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  // When the modal opens, capture what had focus
  useEffect(() => {
    if (open) {
      openerRef.current = document.activeElement;
    }
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Restore focus when closing
  useEffect(() => {
    if (!open && openerRef.current) {
      openerRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={dialogRef} className="modal">
        <h2 id="modal-title">Dialog</h2>

        {children}

        <button
          className="button secondary"
          style={{ marginTop: "1rem" }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
