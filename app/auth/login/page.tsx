'use client';

import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    login(data.email, data.password);
    router.push("/students");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-black mb-6">Login</h2>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}