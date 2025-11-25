import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Tabs from "../components/Tabs";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main id="main">
      <h1 style={{ fontSize: "2.4rem", marginBottom: "2rem", marginLeft: "35px" }}>
        Accessible Design System
      </h1>

      {/* Buttons Section */}
      <div className="component-block">
        <Card>
          <h2>Buttons</h2>
          <div style={{ display: "flex", gap: "12px" }}>
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </Card>
      </div>

      {/* Open Modal Button Section */}
      <div className="component-block">
        <div className="section-spacing">
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
        </div>
      </div>

      {/* Tabs Section */}
<div className="component-block">
  <Tabs
    headerClass="left-30"
    tabs={[
      {
        label: "Overview",
        content: "A fully accessible design system, WCAG compliant."
      },
      {
        label: "Components",
        content: "Buttons, Cards, Modals, Tabs are fully compliant."
      }
    ]}
  />
</div>


      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>
          This modal is fully ADA compliant: ESC closes, clicking background
          closes, focus is restored, and screen readers can identify it.
        </p>
      </Modal>
    </main>
  );
}
