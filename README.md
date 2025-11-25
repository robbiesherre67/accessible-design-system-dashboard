Accessible Design System Dashboard

A fully accessible, WCAG-compliant design system built in React + Vite.
This project demonstrates mastery of front-end engineering, semantic HTML, keyboard accessibility, 
and component-driven UI architecture, all deployed cleanly on GitHub Pages for public viewing.

Live Demo:
https://robbiesherre67.github.io/accessible-design-system-dashboard/

Tech Stack

React 19
Vite
JavaScript (ES2023)
CSS (Custom components, no Tailwind)
ARIA / WAI-ARIA 1.2
GitHub Pages Deployment
gh-pages (for build automation)

Accessibility Features (WCAG 2.1 AA)

This project is intentionally built with deep accessibility support:

Keyboard Navigation
Full TAB navigation across all interactive elements
Arrow-key navigation for tabs
Home/End key support
Enter + Space activation on tab triggers
Focus restoration after modal close

Screen Reader Support

Proper semantic roles:
role="tablist"
role="tab"
role="tabpanel"
role="dialog"
aria-selected, aria-controls, aria-labelledby

Consistent ID binding between tabs + panels
Focus management for dialog / modal

Color Contrast

Light + Dark theme with minimum contrast ratio met
Secondary buttons adjusted for readable text in dark mode
Hover states tuned for clarity

Other WCAG Considerations

Skip-to-content component ready
Outline and focus-visible styles
No keyboard traps
No layout shifting between components
All controls operable without a mouse

Components Included
Component	Features
Button	Primary/Secondary, ADA contrast, focus-visible
Card	Structured content with elevation
Modal/Dialog	Escape to close, backdrop click, focus trap, focus restore
Tabs	Fully WAI-ARIA 1.2 compliant, roving focus, arrow keys, Enter/Space activation
Theme Switcher	Light/Dark mode toggle, persisted state
Layout System	Consistent vertical rhythm + alignment using component-block

Project Structure
src/
  components/
    Button.jsx
    Card.jsx
    Modal.jsx
    Tabs.jsx
    ThemeSwitcher.jsx
  pages/
    Home.jsx
  styles/
    globals.css
    tabs.css
    button.css
    modal.css
    card.css
  context/
    ThemeContext.jsx
  main.jsx
  App.jsx

Dev Commands
npm install
npm run dev
npm run build
npm run deploy

Deployment Info

Built using vite build

Automatically pushed to gh-pages branch

Hosted at:
https://robbiesherre67.github.io/accessible-design-system-dashboard/

Uses Vite’s base config so assets load correctly under /accessible-design-system-dashboard/
