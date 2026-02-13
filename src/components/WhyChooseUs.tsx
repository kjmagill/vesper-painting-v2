const features = [
  {
    title: "Coastal Expertise",
    description:
      "Our team understands how salt air and Atlantic humidity affect paint adhesion. We don't just paint; we preserve with science-backed applications designed for the Jersey Shore.",
  },
  {
    title: "White-Glove Service",
    description:
      "Your property is a sanctuary. We treat it with impeccable cleanliness, strict timelines, and daily digital updates via PaintScout to keep you informed every step of the way.",
  },
  {
    title: "Digital Precision",
    description:
      "Receive a precise, itemized digital estimate that breaks down every room and coat. No hidden fees. No guesswork. Pure professionalism from start to finish.",
  },
  {
    title: "Premium Coatings",
    description:
      "We exclusively use premium lines like Sherwin-Williams Emerald and Benjamin Moore Aura for maximum UV and salt resistance, ensuring your finish lasts for years.",
  },
  {
    title: "Fully Licensed & Insured",
    description:
      "Vesper Painting is fully licensed in New Jersey (LIC# 13VH12963300) and carries comprehensive liability and workers' compensation insurance for your peace of mind.",
  },
  {
    title: "EPA Lead-Safe Certified",
    description:
      "We are EPA Lead-Safe Certified, which is a legal requirement for any professional painting contractor working on pre-1978 homes common in Cape May County.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-0.5 bg-vesper-charcoal" />
          <h2 className="font-oswald font-bold text-2xl md:text-3xl text-vesper-charcoal uppercase whitespace-nowrap text-center">
            Why Choose Vesper Painting?
          </h2>
          <div className="flex-1 h-0.5 bg-vesper-charcoal" />
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Why the Shore&apos;s most discerning property owners choose Vesper for their
          painting and finishing needs. We deliver uncompromising quality with
          total transparency.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-vesper-tan"
            >
              <h3 className="font-oswald font-semibold text-xl text-vesper-blue mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
