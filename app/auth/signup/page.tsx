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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-black mb-6">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{(errors.email as FieldError).message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{(errors.password as FieldError).message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
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
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}