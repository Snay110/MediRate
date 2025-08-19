import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router";
import { store } from "@/app/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback="Loading...">
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
);
