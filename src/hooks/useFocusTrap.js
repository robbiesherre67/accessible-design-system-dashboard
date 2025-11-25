import { useEffect } from "react";

export default function useFocusTrap(ref, active) {
  useEffect(() => {
    // no trap active → exit safely
    if (!active) return;

    const node = ref.current;
    if (!node) return;

    const focusable = node.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleKey(e) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // SHIFT+TAB
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // TAB
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    node.addEventListener("keydown", handleKey);

    // Cleanup — but only if node still exists
    return () => {
      const cleanupNode = ref.current;
      if (cleanupNode) cleanupNode.removeEventListener("keydown", handleKey);
    };
  }, [ref, active]);
}
