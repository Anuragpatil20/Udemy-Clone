import React from "react";

const PricingPlans = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Accelerate growth — for you or your organization
        </h2>
        <p className="text-gray-600 mb-10">
          Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Plan */}
          <div className="border p-6 rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Personal Plan</h3>
            <p className="text-gray-500 mb-1">For you</p>
            <p className="mb-4 text-gray-600">Individual</p>
            <p className="text-2xl font-bold mb-4">Starting at ₹850/month</p>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li>✔ Access to 12,000+ top courses</li>
              <li>✔ Certification prep</li>
              <li>✔ Goal-focused recommendations</li>
              <li>✔ AI-powered coding exercises</li>
            </ul>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Start Subscription
            </button>
          </div>

          {/* Team Plan */}
          <div className="border p-6 rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Team Plan</h3>
            <p className="text-gray-500 mb-1">For your team</p>
            <p className="mb-4 text-gray-600">2 to 20 people</p>
            <p className="text-2xl font-bold mb-4">₹2,000/month per user</p>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li>✔ Access to 12,000+ top courses</li>
              <li>✔ Certification prep</li>
              <li>✔ Goal-focused recommendations</li>
              <li>✔ AI-powered coding exercises</li>
              <li>✔ Analytics and adoption reports</li>
            </ul>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Start Subscription
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border p-6 rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
            <p className="text-gray-500 mb-1">For your whole organization</p>
            <p className="mb-4 text-gray-600">20+ people</p>
            <p className="text-2xl font-bold mb-4">Contact sales</p>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li>✔ Access to 27,000+ top courses</li>
              <li>✔ Certification prep</li>
              <li>✔ Goal-focused recommendations</li>
              <li>✔ AI-powered coding exercises</li>
              <li>✔ Advanced analytics and insights</li>
              <li>✔ Dedicated customer success team</li>
              <li>✔ Courses in 15 languages</li>
              <li>✔ Customizable content</li>
              <li>✔ Hands-on tech training</li>
            </ul>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Start Subscription
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
