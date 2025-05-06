import React from "react";
 // Replace with your image path

const features = [
  {
    title: "Hands-on training",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.",
    isHighlighted: true,
  },
  {
    title: "Certification prep",
    description:
      "Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.",
    linkText: "Explore courses",
  },
  {
    title: "Insights and analytics",
    description:
      "Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.",
    tag: "Enterprise Plan",
    linkText: "Find out more",
  },
  {
    title: "Customizable content",
    description:
      "Create tailored learning paths for team and organization goals and even host your own content and resources.",
    tag: "Enterprise Plan",
    linkText: "Find out more",
  },
];

const GoalsSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Learning focused on your goals
      </h2>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Features */}
        <div className="flex-1 space-y-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border ${
                feature.isHighlighted
                  ? "border-purple-500 bg-white shadow-lg"
                  : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {feature.title}
                {feature.tag && (
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">
                    {feature.tag}
                  </span>
                )}
              </h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
              {feature.linkText && (
                <a
                  href="#"
                  className="text-purple-700 font-semibold text-sm mt-2 inline-block"
                >
                  {feature.linkText} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right: Image panel */}
        <div className="flex-1 flex justify-center items-start">
          <img
            src="https://img.freepik.com/free-vector/online-test-concept-illustration_114360-30971.jpg?uid=R198973728&ga=GA1.1.531482967.1718194025&semt=ais_hybrid&w=740"
            alt="Score Panel"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;

