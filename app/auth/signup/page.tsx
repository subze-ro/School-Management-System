'use client';

import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  role: string;
}

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { signup } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    signup(data.email, data.password, data.role);
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Create an Account</h2>
        <p className="text-gray-500 text-center mb-6">Join us today!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-gray-700 text-sm font-medium">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none focus:border-blue-400"
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
              className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none focus:border-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError).message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-700 text-sm font-medium">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none focus:border-blue-400"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{(errors.role as FieldError).message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
          >
            Signup
          </button>
        </form>

        <p className="text-gray-500 text-sm text-center mt-4">
          Already have an account? <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">Login</a>
        </p>
      </div>
    </div>
  );
}