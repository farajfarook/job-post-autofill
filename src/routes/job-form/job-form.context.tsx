import { createContext, ReactNode, useContext, useState } from "react"

interface JobFormStateData {
    role: string
    location: string
    title: string
    jobDescription: string
    salary: number | undefined
    salaryComments: string
}

interface JobFormState extends JobFormStateData {
    setRole(role: string): void
    setLocation(location: string): void
    setTitle(title: string): void
    setJobDescription(description: string): void
    setSalary(salary: number): void
    setSalaryComments(salary: string): void

    clearAll(): void
}

const JobFormContext = createContext<JobFormState>({} as JobFormState)
export const useJobFormContext = () => useContext(JobFormContext)

export function JobFormContextProvider(props: { children: ReactNode }) {
    const [role, setRole] = useState("Monk")
    const [location, setLocation] = useState("Melbourne")
    const [title, setTitle] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [salaryComments, setSalaryComments] = useState("")
    const [salary, setSalary] = useState<number | undefined>(undefined)
    return (
        <JobFormContext.Provider
            value={{
                role,
                setRole,
                location,
                setLocation,
                salaryComments,
                setSalaryComments,
                jobDescription,
                setJobDescription,
                title,
                setTitle,
                salary,
                setSalary,

                clearAll: () => {
                    setTitle("")
                    setJobDescription("")
                    setSalaryComments("")
                    setSalary(undefined)
                },
            }}
            {...props}
        />
    )
}
