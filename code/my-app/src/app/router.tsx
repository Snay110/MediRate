import { ROUTES } from "@/shared/model/routes";
import App from "./App";
import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import("@/app/pages/home/home.pages"),
      },
      {
        path: ROUTES.DOCTORS,
        lazy: () => import("@/app/pages/doctor/doctor.pages"),
      },
      {
        path: ROUTES.DOCTOR,
        lazy: () => import("@/app/pages/doctor-details/details.pages"),
      },
      {
        path: ROUTES.ADD_REVIEW,
        lazy: () =>
          import("@/app/pages/doctor-details/add-review/add-review.pages"),
      },
      {
        path: ROUTES.CLINIC,
        loader: () => redirect(ROUTES.CLINICS),
      },
    ],
  },
]);
