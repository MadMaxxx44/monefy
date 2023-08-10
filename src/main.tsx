import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MonefyProvider } from "./context/MonefyContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MonefyProvider>
    <App />
  </MonefyProvider>
);
