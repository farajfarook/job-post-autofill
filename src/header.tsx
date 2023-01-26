export function Header(props: { onLogout: () => void }) {
    return (
        <div className="flex flex-row items-center border-b pb-4 border-base-100">
            <div className="flex-1 text-2xl font-medium">Post a job</div>
            <button className="btn" onClick={props.onLogout}>
                Logout
            </button>
        </div>
    )
}
