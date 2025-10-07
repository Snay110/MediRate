export function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-2">Who are we?</h3>
        <p className="text-gray-600">
          We are <strong>MediRate</strong>, a service for reviews of doctors and
          clinics.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-2">Our Mission</h3>
        <p className="text-gray-600">
          To provide a transparent platform for patients to share their
          experiences and rate healthcare providers.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold mb-2">Why trust us?</h3>
        <p className="text-gray-600">
          Real reviews, verified profiles, and fair ratings.
        </p>
      </div>
    </section>
  );
}
