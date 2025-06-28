import React from "react";

const Education = () => {
  return (
    <div>
      <section class="my-[2rem] py-12 px-4 sm:px-6 mx-4 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-300 dark:text-[#8245ec] mb-8 text-center">
            Education
          </h2>

          <div class="space-y-8">
            {/* <!-- Education Item --> */}
            <div class="border-[#8245ec] border-2 rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-semibold text-gray-300 ">
                Maticulation
              </h3>
              <p class="text-sm text-gray-300">
                New Cantt Public School System, LHR. | 2021 – 2022
              </p>
              <p class="mt-2 text-gray-300 text-sm">
                Focused on learning, math problems, computer science and design.
              </p>
            </div>

            {/* <!-- Education Item --> */}
            <div class="border-[#8245ec] border-2 rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-semibold text-gray-300 ">
                Intermidate
              </h3>
              <p class="text-sm text-gray-300 ">
                Punjab Group of Colleges, LHR. | 2022– 2024
              </p>
              <p class="mt-2 text-gray-300  text-sm">
                Focused on computer systems, c programming, and digital design.
              </p>
            </div>

            {/* <!-- Education Item --> */}
            <div class="border-[#8245ec] border-2 rounded-lg p-6 shadow-md">
              <h3 class="text-xl font-semibold text-gray-300 ">
                Bachelor of Computer Engineering
              </h3>
              <p class="text-sm text-gray-300 ">
                University of Engineering and Technology, LHR. | 2024 – Present
              </p>
              <p class="mt-2 text-gray-300  text-sm">
                Focused on python, java, hardware systems, embedded programming and digital
                design. Learned concepts in circuit theory, microcontrollers,
                and VLSI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
