export function PopularDoctors() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Popular Doctors</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((doc) => (
            <div key={doc} className="bg-white p-6 rounded-xl shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Doctor"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-center">
                Dr. John Doe
              </h4>
              <p className="text-sm text-gray-500 text-center">Cardiologist</p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
