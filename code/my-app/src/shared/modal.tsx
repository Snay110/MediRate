import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <button onClick={onClose} className="absolute inset-0 w-full h-full">
        ❌
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white p-6 rounded shadow-lg z-10"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
