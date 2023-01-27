import { createContext, ReactNode, useState } from "react"

export interface TokenContextState {
    token: string | undefined
    login: (token: string) => void
    logout: () => void
}

export const TokenContext = createContext<TokenContextState>(
    {} as TokenContextState
)

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
