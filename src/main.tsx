import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Register from "./pages/Registration.tsx";
import SignIn from "./pages/SignIn.tsx";
import { MonefyProvider } from "./context/MonefyContext";
import { HashRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <MonefyProvider>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="/registration" element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </MonefyProvider>
  </HashRouter>
);
