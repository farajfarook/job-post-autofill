import { useState } from "react"
import { Header } from "./header"
import { JobForm } from "./job-form"
import { Login } from "./login"

function App() {
    const [token, setToken] = useState<string | undefined>()
    const [error, setError] = useState("")
    return (
        <div className="flex flex-row h-screen">
            <div className="flex-1 bg-base-200"></div>
            <div className="w-[800px] bg-base-300 h-screen p-4 flex flex-col space-y-8">
                {!token && <Login onLogin={setToken} />}
                {token && <Header onLogout={() => setToken(undefined)} />}
                {token && <JobForm token={token} onError={setError} />}
                {error}
            </div>
            <div className="flex-1 bg-base-200"></div>
        </div>
    )
}

export default App
