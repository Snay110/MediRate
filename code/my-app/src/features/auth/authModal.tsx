import { Link } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";
import { useState } from "react";
import { signUp, signIn } from "@/shared/lib/supabaseAuth";

interface AuthModalProps {
  mode: "signin" | "signup";
  onClose: () => void;
}

export function AuthModal({ mode, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        await signUp(email, password);
        console.log("Sign-up successful");
      } else {
        await signIn(email, password);
      }
      onClose(); // Закрываем только после успеха
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to authenticate");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex flex-col justify-center px-8 py-10 bg-white rounded-xl shadow-lg sm:mx-auto sm:w-full sm:max-w-md">
      <button
        className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500"
        type="button"
        onClick={onClose}
      >
        ❌
      </button>

      <h2 className="text-gray-900 text-2xl font-bold mb-6 text-center">
        {mode === "signin" ? "Login" : "Register"}
      </h2>

      {/* Лого */}
      <div className="flex justify-center mb-6">
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          className="h-12 w-auto"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="block w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            {mode === "signin" && (
              <Link
                to={ROUTES.FORGOT}
                className="text-sm font-semibold text-indigo-500 hover:text-indigo-400"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="block w-full border-b-2 border-gray-300 bg-transparent py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full justify-center rounded-md bg-indigo-500 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : mode === "signin" ? "Sign in" : "Register"}
        </button>
      </form>

      {mode === "signin" && (
        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to={ROUTES.SIGNUP}
            className="font-semibold text-indigo-500 hover:text-indigo-400"
          >
            Register
          </Link>
        </p>
      )}
    </main>
  );
}
