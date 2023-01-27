import { LifebuoyIcon } from "@heroicons/react/24/solid"

export function HelpBtn(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { children, className, ...otherProps } = props
    return (
        <button
            className={"btn btn-primary btn-xs gap-2 " + className}
            {...otherProps}
        >
            <LifebuoyIcon className="w-4 h-4" /> {children}
        </button>
    )
}
