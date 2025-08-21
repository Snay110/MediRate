export default function AppHeader() {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Doctor Reviews</h1>
      <nav className="flex gap-6">
        <a href="/doctors" className="hover:text-gray-300">
          Doctors
        </a>
        <a href="/auth" className="hover:text-gray-300">
          Login
        </a>
      </nav>
    </header>
  );
}
