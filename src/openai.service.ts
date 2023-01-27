import { useContext } from "react"
import { TokenContext } from "./state"

export function useOpenAiService() {
    const { token } = useContext(TokenContext)

    async function textCompletion(props: {
        prompt: string
        maxToken: number
    }): Promise<string> {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "text-davinci-001",
                prompt: props.prompt,
                temperature: 0.4,
                max_tokens: props.maxToken,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            }),
        })
        const { choices } = await response.json()
        return (choices as []).length > 0 ? choices[0].text.trim() : undefined
    }

    return { textCompletion }
}
