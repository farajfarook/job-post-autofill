import { useState } from "react"
import { useTokenContext } from "./token.context"

export function Login() {
    const { login } = useTokenContext()
    const [token, setToken] = useState("")
    return (
        <div className="flex flex-col space-y-4">
            <div className="form-control flex-1">
                <label className="label">Open AI Secret Key</label>
                <input
                    className="input input-bordered"
                    type="text"
                    defaultValue={token}
                    onChange={(e) => setToken(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={() => login(token)}>
                Login
            </button>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body">
                    <span className="card-title">How to get your token</span>
                    <ol className="pl-4 list-decimal">
                        <li>
                            visit{" "}
                            <a
                                className="link"
                                target="_blank"
                                rel="noreferrer"
                                href="https://beta.openai.com/account/api-keys"
                            >
                                beta.openai.com/account/api-keys
                            </a>
                        </li>
                        <li>Click "Create new secret key"</li>
                        <li>Copy the key and paste it in the above textbox</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
