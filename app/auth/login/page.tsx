'use client'; // Mark this component as a Client Component

import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation"; // Use the correct import for useRouter

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { login, user } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login(data.email, data.password);

    // Redirect based on role
    if (user) {
      switch (user.role) {
        case "admin":
          router.push("/admin"); // Navigate to /admin
          break;
        case "teacher":
          router.push("/teacher"); // Navigate to /teacher
          break;
        case "student":
          router.push("/students"); // Navigate to /student
          break;
        default:
          router.push("/");
      }
    }
  };

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-gray-200">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-600 text-white p-2 rounded-full">
          {/* You can replace this with an actual logo */}
          
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
        Welcome back
      </h2>
      <p className="text-gray-500 text-center mb-6">Login to your account below</p>

     

      <div className="relative text-center mb-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-gray-700 text-sm font-medium">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-300 focus:border-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError).message}</p>
          )}
        </div>

        <div>
          <label className="text-gray-700 text-sm font-medium">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none border border-gray-300 focus:border-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError).message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
        >
          Login
        </button>
      </form>

      <p className="text-gray-500 text-sm text-center mt-4">
        Don’t have an account? <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">Sign up for free</a>
      </p>
    </div>
  </div>
);

}