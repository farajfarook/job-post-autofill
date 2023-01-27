import { Link } from "react-router-dom"
import { useTokenContext } from "./token.context"

export function Header() {
    const { logout } = useTokenContext()
    return (
        <div className="flex flex-row items-center border-b pb-4 border-base-100">
            <div className="flex-1 flex flex-row space-x-2">
                <Link to={"/job-form"} className="btn">
                    Job Form
                </Link>
                <Link to={"/jd-assist"} className="btn">
                    JD Assist
                </Link>
            </div>
            <button className="btn" onClick={logout}>
                Logout
            </button>
        </div>
    )
}
