import { ROUTES } from "@/shared/modal/routes";
import App from "./App";
import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/features/auth"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/features/board"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/features/boards-list"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/features/header"),
      },
      {
        path: ROUTES.DOCTOR,
        loader: () => redirect(ROUTES.CLINIC),
      },
    ],
  },
]);

