import HomePage from "../page";
import ExperiencePage from "../ExperiencePage/page";
import ProjectsPage from "../ProjectsPage/page";
import SkillsPage from "../SkillsPage/page";
import RenderPage from "../RenderPage/page";

const router = [
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
];

export default router;
