import { ROUTES } from "@/shared/model/routes";

export default function AppHeader() {
  return (
    //TODO: использовать константы
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Doctor Reviews</h1>
      <nav className="flex gap-6">
        <link
          className="hover:text-gray-300"
          rel="stylesheet"
          href={ROUTES.DOCTOR}
        />
        <link
          className="hover:text-gray-300"
          rel="stylesheet"
          href={ROUTES.DOCTORS}
        />
      </nav>
    </header>
  );
}
