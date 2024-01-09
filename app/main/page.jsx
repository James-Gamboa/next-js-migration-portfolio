// @ts-nocheck

import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import HomePage from "./HomePage"
import ExperiencePage from "./ExperiencePage";
import ProjectsPage from "./ProjectsPage"
import SkillsPage from "./SkillsPage"
import RenderPage from "./RenderPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProjectsPage",
    element: <ProjectsPage />,
  },
  {
    path: "/ExperiencePage",
    element: <ExperiencePage />,
  },
  {
    path: "/SkillsPage",
    element: <SkillsPage />,
  },
  {
    path: "/RenderPage",
    element: <RenderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)