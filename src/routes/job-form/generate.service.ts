import { useOpenAiService } from "../root/openai.service"
import { useJobFormContext } from "./job-form.context"

export function useGenerateService() {
    const { textCompletion } = useOpenAiService()
    const {
        role,
        location,
        title,
        setTitle,
        setSalaryComments,
        setJobDescription,
    } = useJobFormContext()

    async function generateJd() {
        setJobDescription("...")
        let promptText = `
        Generate a job description for the role for ${role} in ${location}. 
        Our Job title is ${title}.
        Make sure to add a list of technical and non technical skills.`
        const generatedText = await textCompletion({
            prompt: promptText,
            maxToken: 1000,
        })
        setJobDescription(generatedText || "error generating job description")
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

    async function generateSalaryComments() {
        setSalaryComments("...")
        let promptText = `Write a salary range for a job posting of ${role} in ${location}.
            Our Job title is ${title}`
        const generatedText = await textCompletion({
            prompt: promptText,
            maxToken: 100,
        })
        setSalaryComments(generatedText || "")
    }

    return {
        jd: generateJd,
        title: generateTitle,
        salaryComments: generateSalaryComments,
    }
}
