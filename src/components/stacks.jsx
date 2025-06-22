import React from "react";

const Stack = () => {
  return (
    <div>
      <section class="py-16 px-4 sm:px-6 lg:px-20">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-red-500 mb-12">
            Tech Stack
          </h2>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* <!-- React --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                React
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Frontend Library
              </p>
            </div>

            {/* <!-- Django --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                Django
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Backend Framework
              </p>
            </div>

            {/* <!-- Tailwind CSS --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                Tailwind CSS
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Utility-first CSS
              </p>
            </div>

            {/* <!-- PostgreSQL --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                Sqlite & MondoDB
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Database
              </p>
            </div>

            {/* <!-- JavaScript --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                JavaScript
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Frontend Logic
              </p>
            </div>

            {/* <!-- Python --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                Python
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Backend Language
              </p>
            </div>

            {/* <!-- Git & GitHub --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                Git & GitHub
              </p>
              <p class="text-sm text-[#fff] mt-1">
                Version Control
              </p>
            </div>

            {/* <!-- REST APIs --> */}
            <div class="bg-red-500  p-6 rounded-lg shadow text-center hover:shadow-xl transition duration-300">
              <p class="text-lg font-semibold  text-[#fff]">
                REST APIs
              </p>
              <p class="text-sm text-[#fff] mt-1">
                API Integration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
