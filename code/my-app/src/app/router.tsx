import { ROUTES } from "@/shared/model/routes";
import App from "./App";
import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/app/pages/doctor/doctor.pages"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/app/pages/doctor-details/details.pages"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/app/pages/home/home.pages"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () =>
          import("@/app/pages/doctor-details/add-review/add-review.pages"),
      },
      {
        path: ROUTES.DOCTOR,
        loader: () => redirect(ROUTES.CLINIC),
      },
    ],
  },
]);
