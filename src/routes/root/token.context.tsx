import { createContext, ReactNode, useContext, useState } from "react"

interface TokenState {
    token: string | undefined
    login: (token: string) => void
    logout: () => void
}

const TokenContext = createContext<TokenState>({} as TokenState)

export function TokenContextProvider(props: { children: ReactNode }) {
    const [token, setToken] = useState<string | undefined>()
    return (
        <TokenContext.Provider
            value={{
                token,
                login: setToken,
                logout: () => setToken(undefined),
            }}
            {...props}
        />
    )
}

export function useTokenContext() {
    return useContext(TokenContext)
}
