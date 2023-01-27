import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProviderWithRoutes } from "./routes"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProviderWithRoutes />
    </React.StrictMode>
)
