import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home/Home.jsx";
import "./styles/base/reset.css"; // Suponiendo que tengas un archivo de reset global
import "./styles/utilities.css"; // Utilidades globales
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/benefits",
		element: <Home />,
	},
	{
		path: "/products",
		element: <Home />,
	},
	{
		path: "/faqs",
		element: <Home />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
