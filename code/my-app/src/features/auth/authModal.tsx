import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";

interface AuthModalProps {
  mode: "signin" | "signup";
  onClose: () => void;
}

export function AuthModal({ mode, onClose }: AuthModalProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Handle form submission logic here
    onClose();
  }

  return (
    <main className="min-h-svh flex flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <div>
        <h2>{mode === "signin" ? "Login" : "Register"}</h2>
        <button
          className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-red-500"
          type="button"
          onClick={onClose}
        >
          ❌
        </button>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl leading-9 font-bold tracking-tight text-white">
          {mode === "signin"
            ? "Sign in to your account"
            : "Create your account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm leading-6 font-medium text-gray-100"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm leading-6 font-medium text-gray-100"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to={ROUTES.FORGOT}
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            {mode === "signin" ? "Sign in" : "Register"}
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <Link
            to={ROUTES.SIGNUP}
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
