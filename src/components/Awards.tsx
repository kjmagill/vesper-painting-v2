import { Award, Star, CheckCircle, ThumbsUp } from "lucide-react";

const awards = [
  { name: "BBB A+ Rating", year: "" },
  { name: "Best of Houzz", year: "2024" },
  { name: "Best of Houzz", year: "2023" },
  { name: "Best of Houzz", year: "2022" },
  { name: "Best of Houzz", year: "2021" },
  { name: "Nextdoor Fave", year: "" },
  { name: "5-Star Google", year: "" },
  { name: "Expertise.com", year: "" },
];

export default function Awards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-0.5 bg-paint-green" />
          <h2 className="font-oswald font-bold text-2xl md:text-3xl text-paint-green uppercase whitespace-nowrap">
            Awards and Affiliates
          </h2>
          <div className="flex-1 h-0.5 bg-paint-green" />
        </div>

        {/* Badge Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
            >
              {index % 4 === 0 && <Award size={20} className="text-paint-green" />}
              {index % 4 === 1 && <Star size={20} className="text-yellow-500 fill-yellow-500" />}
              {index % 4 === 2 && <CheckCircle size={20} className="text-paint-green" />}
              {index % 4 === 3 && <ThumbsUp size={20} className="text-paint-orange" />}
              <div className="text-center">
                <p className="font-oswald font-semibold text-sm text-gray-800 uppercase">
                  {award.name}
                </p>
                {award.year && (
                  <p className="text-xs text-paint-orange font-bold">{award.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
