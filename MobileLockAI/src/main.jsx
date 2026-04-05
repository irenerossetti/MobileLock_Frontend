import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"  // ← Importa esto
import App from "./App"
import { AuthProvider } from "./context/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>  {/* ← Envuelve aquí */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)