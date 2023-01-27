import { Outlet } from "react-router-dom"
import { useTokenContext } from "./token.context"
import { Header } from "./header.component"
import { Login } from "./login.component"
import { TokenContextProvider } from "./token.context"

function Root() {
    const { token } = useTokenContext()
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

export function RootPage() {
    return (
        <TokenContextProvider>
            <Root />
        </TokenContextProvider>
    )
}
