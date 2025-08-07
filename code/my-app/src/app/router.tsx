import { ROUTES } from "@/shared/modal/routes";
import App from "./App";
import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.BOARD,
        lazy: () => import("@/features/auth"),
      },
      {
        path: ROUTES.BOARD,
        lazy: () => import("@/features/board"),
      },
      {
        path: ROUTES.BOARD,
        lazy: () => import("@/features/boards-list"),
      },
      {
        path: ROUTES.BOARD,
        lazy: () => import("@/features/header"),
      },
      {
          path: ROUTES.BOARD,
          loader:() =>redirect(ROUTES.BOARDS)
      }
    ],
  },
]);eslint.boundaries.js
