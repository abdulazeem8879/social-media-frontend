// import { useState } from "react";
// import { Link } from "react-router-dom";

// function RegisterForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name) newErrors.name = "Name is required.";
//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is not valid.";
//     }
//     if (!formData.password) newErrors.password = "Password is required.";
//     else if (formData.password.length < 6)
//       newErrors.password = "Password must be at least 6 characters.";

//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match.";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted successfully");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-sm bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg h-auto">
//         <h1 className="text-lg sm:text-xl font-semibold text-start mb-2 text-green-700 ">
//           SocialNest
//         </h1>
//         <h2 className="text-xl sm:text-2xl font-semibold text-center mb-3 text-gray-700">
//           Register
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-2">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={`mt-1 p-2 border rounded w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.name ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.name && (
//               <p className="text-xs text-red-500">{errors.name}</p>
//             )}
//           </div>

//           <div className="mb-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`mt-1 p-2 border rounded w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.email && (
//               <p className="text-xs text-red-500">{errors.email}</p>
//             )}
//           </div>

//           <div className="mb-2">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className={`mt-1 p-2 border rounded w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.password && (
//               <p className="text-xs text-red-500">{errors.password}</p>
//             )}
//           </div>

//           <div className="mb-3">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={`mt-1 p-2 border rounded w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 errors.confirmPassword ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.confirmPassword && (
//               <p className="text-xs text-red-500">{errors.confirmPassword}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             Register
//           </button>
//         </form>

//         <div className="flex justify-center mt-3">
//           <Link
//             to="/login"
//             className="text-sm sm:text-lg text-blue-700 hover:underline m-2"
//           >
//             Login Here
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegisterForm;

import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("form submitted");
    // Handle form submission (e.g., send to API or validate)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-[40%] h-[500px] mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-1">
        <div>
          <label className="block text-gray-600 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2" htmlFor="mobile">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-1 my-4  bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
