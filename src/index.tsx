import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProviderWithRoutes } from "./routes"
import { TokenContextProvider } from "./state"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <React.StrictMode>
        <TokenContextProvider>
            <RouterProviderWithRoutes />
        </TokenContextProvider>
    </React.StrictMode>
)
