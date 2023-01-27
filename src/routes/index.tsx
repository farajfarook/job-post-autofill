import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { JDAssist } from "./jd-assist"
import { JobForm } from "./job-form"
import { Root } from "./root"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "job-form",
                    element: <JobForm />,
                },
                {
                    path: "jd-assist",
                    element: <JDAssist />,
                },
            ],
        },
    ],
    { basename: "/job-post-autofill" }
)

export function RouterProviderWithRoutes() {
    return <RouterProvider router={router} />
}
