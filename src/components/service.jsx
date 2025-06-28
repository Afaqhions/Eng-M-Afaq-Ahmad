import React from "react";

const Service = () => {
  return (
    <div>
      <section
        id="services"
        class="py-16 px-4 sm:px-6 lg:px-20"
      >
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-3xl text-[#8245ec] font-bold mb-4">
            Services
          </h2>
          <p class="mb-12 text-gray-300">
            Things I specialize in as a Web Developer & Junior ML Engineer
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Service Card --> */}
            <div class="border-2 border-[#8245ec] p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div class=" mb-4 text-4xl">🖥️</div>
              <h3 class="text-xl font-semibold text-gray-300 mb-2">
                Frontend Development
              </h3>
              <p class="text-gray-300 text-sm">
                Building responsive React apps with Tailwind CSS, custom
                components, and interactive UI.
              </p>
            </div>

            <div class="border-2 border-[#8245ec] p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div class=" mb-4 text-4xl">⚙️</div>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Backend Developement
              </h3>
              <p class="text-gray-300 text-sm">
                Designing full-stack backend using Django
                and Sqlite3 & MongoDB.
              </p>
            </div>

            <div class="border-2 border-[#8245ec] p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div class=" mb-4 text-4xl">🤖</div>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Machine Learning
              </h3>
              <p class="text-[white] text-sm">
                Developing ML models in Python (Scikit‑learn) for predictive
                analytics and automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
