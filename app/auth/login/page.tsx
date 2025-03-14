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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{(errors.email as FieldError).message}</p>
        )}
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{(errors.password as FieldError).message}</p>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
}