import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter ([
    {
path:"/",
element: <Layout />,
errorElement: <ErrorPage />,
children: [
    {}
],

},
]);

export default router;