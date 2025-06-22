import React from "react";

const Work = () => {
  return (
    <div>
      <section class="py-16 px-4 sm:px-6 lg:px-20">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-center dark:text-red-500 mb-12">
            Projects
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Project 1: React --> */}
            <div class="bg-red-500 rounded-lg shadow hover:shadow-xl transition duration-300 p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Portfolio Website
              </h3>
              <p class="text-sm text-[#fff] mb-4">
                A personal portfolio built with React and Tailwind CSS. Fully
                responsive and deployed on Netlify.
              </p>
              <span class="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white text-[18px] font-medium px-2 py-1 rounded">
                React
              </span>
            </div>

            {/* <!-- Project 2: Django --> */}
            <div class="bg-red-500 rounded-lg shadow hover:shadow-xl transition duration-300 p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                SARA-AI
              </h3>
              <p class="text-sm text-[#fff] mb-4">
                A full-stack chatbot application having AI's for Study, Coding, Health and for general use using Django and Sqlite3
                with authentication and admin panel.
              </p>
              <span class="inline-block bg-green-100 dark:bg-green-800 text-green-800 dark:text-white text-[18px] font-medium px-2 py-1 rounded">
                Django
              </span>
            </div>

            {/* <!-- Project 3: ML --> */}
            <div class="bg-red-500 rounded-lg shadow hover:shadow-xl transition duration-300 p-6">
              <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Spam Email & Message Checker
              </h3>
              <p class="text-sm 0 text-[#fff] mb-4">
                A machine learning project using Scikit-learn and Python to
                predict whether a message or an email is Spam or not from dataset features.
              </p>
              <span class="inline-block bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-white text-[18px] font-medium px-2 py-1 rounded">
                ML / Python
              </span>
            </div>

            {/* <!-- Add more projects below if needed --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
