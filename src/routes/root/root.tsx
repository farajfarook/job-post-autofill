import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { TokenContext } from "../../state"
import { Header } from "./header"
import { Login } from "./login"

export function Root() {
    const { token } = useContext(TokenContext)
    return (
        <div className="flex flex-row h-screen">
            <div className="flex-1 bg-base-200"></div>
            <div className="w-[800px] bg-base-300 h-screen p-4 flex flex-col space-y-8">
                {!token && <Login />}
                {token && (
                    <>
                        <Header />
                        <Outlet />
                    </>
                )}
            </div>
            <div className="flex-1 bg-base-200"></div>
        </div>
    )
}
