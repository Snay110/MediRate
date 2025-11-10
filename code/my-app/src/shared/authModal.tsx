// import { Link } from "react-router-dom";
// import { ROUTES } from "@/shared/model/routes";
import { userRegister } from "../features/auth/api/user/userRegister";
import { userLogin } from "@/features/auth/api/user/userLogin";
import useAuthModal from "@/features/auth/api/hooks/useAuthModal";

interface AuthModalProps {
  mode: "signin" | "signup";
  onClose: () => void;
}
export function AuthModal({ mode, onClose }: AuthModalProps) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    loading,
    setLoading,
    full_name,
    setFull_Name,
  } = useAuthModal();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        await userRegister({ email, password, full_name });
      } else {
        await userLogin({ email, password });
      }
      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className=" flex flex-col justify-center px-10 py-12 backdrop-blur-xl border rounded-2xl shadow-xl sm:mx-auto sm:w-full sm:max-w-sm text-gray-900">
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
        type="button"
        onClick={onClose}
      >
        ✕
      </button>

      <h2 className="text-3xl font-semibold text-center mb-8 tracking-tight">
        {mode === "signin" ? "Welcome back" : "Create account"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {mode === "signup" && (
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={full_name}
              onChange={(e) => setFull_Name(e.target.value)}
              required
              className="w-full mt-2 rounded-xl bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-2 rounded-xl bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-2 rounded-xl bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 rounded-full bg-indigo-500 py-3 font-semibold text-white hover:bg-indigo-400 active:scale-95 disabled:opacity-50 transition-all"
        >
          {loading ? "Loading..." : mode === "signin" ? "Sign in" : "Sign up"}
        </button>
      </form>
    </main>
  );
}
