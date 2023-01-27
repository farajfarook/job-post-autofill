import { useGenerateService } from "./generate.service"
import { HelpBtn } from "./help-btn.component"
import { JobFormContextProvider, useJobFormContext } from "./job-form.context"

function JobForm() {
    const form = useJobFormContext()
    const generate = useGenerateService()

    function generateAll() {
        form.clearAll()
        generate.title()
        generate.jd()
        generate.salaryComments()
    }

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 items-end">
                <div className="form-control flex-1">
                    <label className="label">Role</label>
                    <input
                        className="input input-bordered"
                        type="text"
                        value={form.role}
                        onChange={(e) => form.setRole(e.target.value)}
                    />
                </div>
                <div className="form-control flex-1">
                    <label className="label">Location</label>
                    <input
                        className="input input-bordered"
                        type="text"
                        value={form.location}
                        onChange={(e) => form.setLocation(e.target.value)}
                    />
                </div>
                <button className="btn" onClick={generateAll}>
                    Generate all
                </button>
            </div>
            <div className="form-control">
                <label className="label">
                    Job Title
                    <HelpBtn onClick={generate.title}>
                        Generate a good job title
                    </HelpBtn>
                </label>
                <input
                    className="input input-bordered"
                    type="text"
                    value={form.title}
                    onChange={(e) => form.setTitle(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span>Job Description</span>
                    <HelpBtn onClick={generate.jd}>
                        Generate a sample JD
                    </HelpBtn>
                </label>
                <textarea
                    rows={10}
                    className="textarea textarea-bordered"
                    value={form.jobDescription}
                    onChange={(e) => form.setJobDescription(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label className="label">
                    Salary
                    <HelpBtn onClick={generate.salaryComments}>
                        Find a good salary range
                    </HelpBtn>
                </label>
                <input
                    className="input input-bordered"
                    type="number"
                    value={form.salary}
                    onChange={(e) => form.setSalary(Number(e.target.value))}
                />
                {form.salaryComments && (
                    <label className="label">
                        <span className="label-text-alt text-warning">
                            {form.salaryComments}
                        </span>
                    </label>
                )}
            </div>
            <div className="flex flex-row pt-8">
                <button className="btn" onClick={form.clearAll}>
                    Clear Form
                </button>
            </div>
        </div>
    )
}

export function JobFormPage() {
    return (
        <JobFormContextProvider>
            <JobForm />
        </JobFormContextProvider>
    )
}
