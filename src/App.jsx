import "./styles/reset.css";
import "./styles/globals.css";
import SkipToContent from "./components/SkipToContent";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <SkipToContent />

      <div style={{ textAlign: "right", padding: "1rem" }}>
        <ThemeSwitcher />
      </div>

      <Home />
    </ThemeProvider>
  );
}
