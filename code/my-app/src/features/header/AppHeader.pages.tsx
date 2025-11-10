import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
import { Modal } from "@/shared/modal";
import { AuthModal } from "@/shared/authModal";
import { useHeader } from "../auth/api/hooks/useHeader";

export default function AppHeader() {
  const { isOpen, setIsOpen, mode, setMode } = useHeader();

  return (
    <header className="bg-gray-100 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl text-blue-900 font-bold">Doctor Reviews</h1>

      <nav className="flex gap-6">
        <Link
          to={ROUTES.DOCTORS}
          className="bg-gray-100 text-blue-900 hover:bg-gray-300 border border-gray-300 px-4 py-2 rounded-md shadow-md"
        >
          Doctors
        </Link>

        <button
          className="bg-gray-100 text-blue-900 hover:bg-gray-300 border border-gray-300 px-4 py-2 rounded-md shadow-md font-semibold"
          onClick={() => {
            setMode("signin");
            setIsOpen(true);
          }}
        >
          Login
        </button>

        <button
          className="bg-gray-100 text-blue-900 hover:bg-gray-300 border border-gray-300 px-4 py-2 rounded-md shadow-md font-semibold"
          onClick={() => {
            setMode("signup");
            setIsOpen(true);
          }}
        >
          Register
        </button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <AuthModal mode={mode} onClose={() => setIsOpen(false)} />
        </Modal>
      </nav>
    </header>
  );
}
