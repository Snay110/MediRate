import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
export default function AppHeader() {
  return (
    //TODO: использовать константы
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Doctor Reviews</h1>
      <nav className="flex gap-6">
        <Link className="hover:text-gray-300" to={ROUTES.DOCTORS}>
          Doctors
        </Link>
      </nav>
    </header>
  );
}
