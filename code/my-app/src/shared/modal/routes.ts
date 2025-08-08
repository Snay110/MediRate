import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  DOCTORS: "/doctors",
  DOCTOR: "/doctor:id",
  CLINICS: "/clinics",
  CLINIC: "/clinic:id",
  ADD_REVIEW: "doctor:id/add-review",
} as const;

export type PathParams = {
  [ROUTES.DOCTOR]: {
    id: string;
  };
  [ROUTES.CLINIC]: {
    id: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
