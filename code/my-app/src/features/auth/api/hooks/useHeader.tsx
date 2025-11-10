import { useState } from "react";

export function useHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return { isOpen, setIsOpen, mode, setMode };
}
