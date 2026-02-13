import { ClipboardList, Leaf, Phone } from "lucide-react";

const differences = [
  {
    icon: ClipboardList,
    title: "Professional Project Management",
    description:
      "An open line of communication is fundamental to delivering the highest quality results. As an elite Denver painting company, we have Customer Success Managers who are assigned to oversee your entire painting project from start to finish. They will keep you informed on the status of your project and will be your go-to resource for any and all questions or concerns you may have.",
  },
  {
    icon: Leaf,
    title: "Environmentally Friendly Paint",
    description:
      "It's important to us to make sure you and your family are safe and sound long after your house painting project has been completed. That's why we only use state-of-the-art, high-quality, low and zero VOC paint. Rest easy knowing your paint job will last and preserve the air quality in and around your home.",
  },
  {
    icon: Phone,
    title: "We Call Back After the Paint Has Dried",
    description:
      "Our prerogative is to amaze every one of our customers with our Denver house painting services, which is why we created our Quality Assurance Program. It's a Paint Denver promise that we ensure you are satisfied before we consider any job complete. We always check in after the paint has dried to ensure we've met, and ideally exceeded your expectations.",
  },
];

export default function Difference() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-0.5 bg-paint-green" />
          <h2 className="font-oswald font-bold text-2xl md:text-3xl text-paint-green uppercase whitespace-nowrap text-center">
            The Paint Denver Difference
          </h2>
          <div className="flex-1 h-0.5 bg-paint-green" />
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We strive to be the most referred paint contractor in Denver by
          providing the best possible service to our customers while making a
          positive impact in your community. Additionally, we offer competitive
          prices while reducing the environmental impact of the paint job on your
          home.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {differences.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-paint-green/10 rounded-full flex items-center justify-center">
                  <item.icon size={24} className="text-paint-green" />
                </div>
              </div>
              <h3 className="font-oswald font-semibold text-lg text-paint-orange mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
