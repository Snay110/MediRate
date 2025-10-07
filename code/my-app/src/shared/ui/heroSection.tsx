export function HeroSection() {
  return (
    <section className="relative bg-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Find a doctor you can trust 👨‍⚕️
        </h1>
        <p className="text-lg mb-8">
          Read patient reviews, share your experiences, and choose the right
          doctor for you.
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search doctors..."
            className="px-4 py-2 rounded-md text-black w-64"
          />
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
