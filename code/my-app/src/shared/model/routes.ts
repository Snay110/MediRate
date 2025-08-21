import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  DOCTORS: "/doctors",
  DOCTOR: "/doctors/:id",
  CLINICS: "/clinics",
  CLINIC: "/clinics/:id",
  ADD_REVIEW: "/doctors/:id/add-review",
  SIGNUP: "/signup",
  FORGOT: "/forgot",
} as const;

export type PathParams = {
  [ROUTES.DOCTOR]: {
    id: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
