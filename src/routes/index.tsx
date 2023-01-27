import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { JDAssistPage } from "./jd-assist"
import { JobFormPage } from "./job-form"
import { RootPage } from "./root"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootPage />,
            children: [
                {
                    path: "job-form",
                    element: <JobFormPage />,
                },
                {
                    path: "jd-assist",
                    element: <JDAssistPage />,
                },
            ],
        },
    ],
    { basename: "/job-post-autofill" }
)

export function RouterProviderWithRoutes() {
    return <RouterProvider router={router} />
}
