// import React from "react";

// const Contact = () => {
//   return (
//     <div className="flex flex-col items-center justify-center my-[5rem] px-4">
//       <span className="text-4xl font-extrabold flex justify-center my-8">
//         Contact
//       </span>

//       <div className="w-full flex justify-center">
//         <form
//           action="https://api.web3forms.com/submit"
//           method="POST"
//           className="w-full max-w-xl border-2 rounded-lg py-10 px-6 sm:px-10 lg:px-20 flex flex-col justify-center"
//         >
//           <input
//             type="hidden"
//             name="access_key"
//             value="587ebdde-7315-448b-999e-b12c876a6b5c"
//           />

//           <label>Name:</label>
//           <input
//             className="bg-red-500 rounded-lg text-white p-2 my-2 w-full lg:w-[25rem] sm:w-[240px]"
//             type="text"
//             name="name"
//             placeholder="Enter your Name..."
//           />

//           <label>Email:</label>
//           <input
//             className="bg-red-500 rounded-lg lg:w-[25rem] text-white p-2 my-2 w-full sm:w-[240px]"
//             type="email"
//             name="email"
//             placeholder="Enter your Email..."
//           />

//           <label>Phone:</label>
//           <input
//             className="bg-red-500 rounded-lg lg:w-[25rem] text-white p-2 my-2 w-full sm:w-[240px]"
//             type="number"
//             name="phone"
//             placeholder="Enter your Phone..."
//           />

//           <label>Message:</label>
//           <textarea
//             className="bg-red-500 rounded-lg lg:w-[25rem] text-white p-2 my-2 w-full h-[10rem] sm:w-[240px]"
//             name="message"
//             placeholder="Enter your Message..."
//           ></textarea>

//           <button className="inline-block px-6 py-2 border border-red-500 text-red-500 hover:bg-white hover:text-red-500 transition duration-300 rounded-full text-[1rem] uppercase tracking-widest self-center mt-4">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10–15 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 100) {
      newErrors.message = "Message must not exceed 100 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      e.preventDefault(); // stop form submission
      setErrors(validationErrors);
    } else {
      setErrors({});
      // allow submission to Web3Forms
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-[5rem] px-4">
      <span className="text-4xl font-extrabold flex justify-center my-8">
        Contact
      </span>

      <div className="w-full flex justify-center">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-xl border-2 rounded-lg py-10 px-6 sm:px-10 lg:px-20 flex flex-col justify-center"
        >
          <input
            type="hidden"
            name="access_key"
            value="587ebdde-7315-448b-999e-b12c876a6b5c"
          />

          <label>Name:</label>
          <input
            className="bg-red-500 rounded-lg text-white p-2 my-2 w-full lg:w-[25rem] sm:w-[240px]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name..."
          />
          {errors.name && (
            <span className="text-white text-sm">{errors.name}</span>
          )}

          <label>Email:</label>
          <input
            className="bg-red-500 rounded-lg lg:w-[25rem] text-white p-2 my-2 w-full sm:w-[240px]"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email..."
          />
          {errors.email && (
            <span className="text-white text-sm">{errors.email}</span>
          )}

          <label>Phone:</label>
          <input
            className="bg-red-500 rounded-lg lg:w-[25rem] text-white p-2 my-2 w-full sm:w-[240px]"
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone..."
          />
          {errors.phone && (
            <span className="text-white text-sm">{errors.phone}</span>
          )}

          <label>Message:</label>
          <textarea
            className="bg-red-500 rounded-lg lg:w-[25rem] text-white p-2 my-2 w-full h-[10rem] sm:w-[240px]"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message..."
          ></textarea>
          {errors.message && (
            <span className="text-white text-sm">{errors.message}</span>
          )}

          <button className="inline-block px-6 py-2 border border-red-500 text-red-500 hover:bg-white hover:text-red-500 transition duration-300 rounded-full text-[1rem] uppercase tracking-widest self-center mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
