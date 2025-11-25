import { useState, useRef, useEffect } from "react";
import "../styles/tabs.css";

export default function Tabs({ tabs, headerClass = "" }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const tablistRef = useRef(null);

  const tabIds = tabs.map((_, i) => `tab-${i}`);
  const panelIds = tabs.map((_, i) => `panel-${i}`);

  // Focus the active tab when active index changes
  useEffect(() => {
    if (tabRefs.current[active]) {
      tabRefs.current[active].focus();
    }
  }, [active]);

  // Handle keyboard control on the tablist itself
  function handleListKeyDown(e) {
    const key = e.key;

    switch (key) {
      case "ArrowRight":
        e.preventDefault();
        setActive((active + 1) % tabs.length);
        break;

      case "ArrowLeft":
        e.preventDefault();
        setActive((active - 1 + tabs.length) % tabs.length);
        break;

      case "Home":
        e.preventDefault();
        setActive(0);
        break;

      case "End":
        e.preventDefault();
        setActive(tabs.length - 1);
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        // Already activates on index change, nothing additional needed
        break;

      default:
        break;
    }
  }

  return (
    <>
      {/* TABLIST */}
      <div
        className={`tabs-header ${headerClass}`}
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
        ref={tablistRef}
        onKeyDown={handleListKeyDown}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tabIds[i]}
            role="tab"
            aria-selected={active === i}
            aria-controls={panelIds[i]}
            tabIndex={0}
            className={`tab-btn ${active === i ? "active" : ""}`}
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              // Keyboard activation
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(i);
              }

              // Arrow navigation (unchanged)
              if (e.key === "ArrowRight") setActive((active + 1) % tabs.length);
              if (e.key === "ArrowLeft") setActive((active - 1 + tabs.length) % tabs.length);
              if (e.key === "Home") setActive(0);
              if (e.key === "End") setActive(tabs.length - 1);
            }}
          >
            {tab.label}
          </button>

        ))}
      </div>

      {/* TAB PANEL */}
      <div
        id={panelIds[active]}
        role="tabpanel"
        aria-labelledby={tabIds[active]}
        className="tab-panel"
      >
        {tabs[active].content}
      </div>
    </>
  );
}