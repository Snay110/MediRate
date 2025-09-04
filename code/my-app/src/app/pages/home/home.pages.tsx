import { useState } from "react";
import { Modal } from "@/shared/ui/modal";
import { AuthModal } from "@/features/auth/authModal";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <main className="min-h-svh flex flex-col items-center justify-center px-6 py-12 lg:px-8 bg-gray-900">
      <p>
        <span className="text-white">Welcome to the MediRate</span>
      </p>
      <img
        className=" h-auto border-2"
        src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-robe-with-stethoscope-isolated_1303-29803.jpg"
        alt=""
      />
      <div>
        <button
          onClick={() => {
            setMode("signin");
            setIsOpen(true);
          }}
        >
          login
        </button>
        <button
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
      </div>
    </main>
  );
}
