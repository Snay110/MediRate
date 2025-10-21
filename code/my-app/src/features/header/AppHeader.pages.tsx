import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
import { Modal } from "@/shared/modal";
import { AuthModal } from "@/shared/authModal";
import { useState } from "react";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <header className="bg-gray-100 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl text-gray-900 font-bold">Doctor Reviews</h1>
      <nav className="flex gap-6">
        <Link
          className=" bg-gray-150 text-gray-800  hover:bg-gray-300 border-gray-600 px-4 py-2 rounded-md shadow-md  "
          to={ROUTES.DOCTORS}
        >
          Doctors
        </Link>
        <button
          className=" bg-gray-150  text-gray-800  hover:bg-gray-300 border-gray-600 px-4 py-2 rounded-md shadow-md "
          onClick={() => {
            setMode("signin");
            setIsOpen(true);
          }}
        >
          login
        </button>
        <button
          className="bg-gray-150 text-gray-800  hover:bg-gray-300 border-gray-600 px-4 py-2 rounded-md shadow-md "
          onClick={() => {
            setMode("signup");
            setIsOpen(true);
          }}
        >
          Register
        </button>
        <div>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <AuthModal mode={mode} onClose={() => setIsOpen(false)} />
          </Modal>
        </div>
      </nav>
    </header>
  );
}
