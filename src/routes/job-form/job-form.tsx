import { useContext, useState } from "react"
import { HelpBtn } from "./help-btn"
import { useOpenAiService } from "../../openai.service"

export function JobForm() {
    const [jobDesc, setJobDesc] = useState("")
    const [salaryComment, setSalaryComment] = useState("")
    const [role, setRole] = useState("Software Developer")
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("Melbourne")
    const [salary, setSalary] = useState("")

    const { textCompletion } = useOpenAiService()

    async function generateJd() {
        setJobDesc("...")
        let promptText = `
        Generate a job description for the role for ${role} in ${location}. 
        Our Job title is ${title}.
        Make sure to add a list of technical and non technical skills.`
        const generatedText = await textCompletion({
            prompt: promptText,
            maxToken: 1000,
        })
        setJobDesc(generatedText || "error generating job description")
    }

    async function generateTitle() {
        setTitle("...")
        let promptText = `Write a good job post title for ${role}`
        const generatedText = await textCompletion({
            prompt: promptText,
            maxToken: 100,
        })
        setTitle(generatedText || "error generating title")
    }

    async function generateSalaryComment() {
        setSalaryComment("...")
        let promptText = `Write a salary range for a job posting of ${role} in ${location}.
            Our Job title is ${title}`
        const generatedText = await textCompletion({
            prompt: promptText,
            maxToken: 100,
        })
        setSalaryComment(generatedText || "")
    }

    async function generateAll() {
        clearForm()
        await generateTitle()
        await generateJd()
        await generateSalaryComment()
    }

    function clearForm() {
        setJobDesc("")
        setSalaryComment("")
        setTitle("")
    }

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 items-end">
                <div className="form-control flex-1">
                    <label className="label">Role</label>
                    <input
                        className="input input-bordered"
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <div className="form-control flex-1">
                    <label className="label">Location</label>
                    <input
                        className="input input-bordered"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button className="btn" onClick={generateAll}>
                    Generate all
                </button>
            </div>
            <div className="form-control">
                <label className="label">
                    Job Title
                    <HelpBtn onClick={generateTitle}>
                        Generate a good job title
                    </HelpBtn>
                </label>
                <input
                    className="input input-bordered"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span>Job Description</span>
                    <HelpBtn onClick={generateJd}>Generate a sample JD</HelpBtn>
                </label>
                <textarea
                    rows={10}
                    className="textarea textarea-bordered"
                    value={jobDesc}
                    onChange={(e) => setJobDesc(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label className="label">
                    Salary
                    <HelpBtn onClick={generateSalaryComment}>
                        Find a good salary range
                    </HelpBtn>
                </label>
                <input
                    className="input input-bordered"
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                {salaryComment && (
                    <label className="label">
                        <span className="label-text-alt text-warning">
                            {salaryComment}
                        </span>
                    </label>
                )}
            </div>
            <div className="flex flex-row pt-8">
                <button className="btn" onClick={clearForm}>
                    Clear Form
                </button>
            </div>
        </div>
    )
}
