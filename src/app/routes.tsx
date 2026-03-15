import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import CropSolutionPage from "./pages/CropSolutionPage";
import CropDetailPage from "./pages/CropDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/crop-solution",
    Component: CropSolutionPage,
  },
  {
    path: "/crop-solution/:cropId",
    Component: CropDetailPage,
  },
]);
