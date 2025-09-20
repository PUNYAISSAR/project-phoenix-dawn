import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootEl = document.getElementById("root");
console.log("[Debug] Root element:", rootEl);
if (rootEl) {
  createRoot(rootEl).render(<App />);
  console.log("[Debug] App rendered");
} else {
  console.error("[Debug] Root element not found");
}
