'use client';

import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { useStudent } from "../../context/StudentContext";
import { useAuth } from "../../context/AuthContext";

interface FormData {
  name: string;
  form: string;
  stream: string;
}

export default function ProfileManagement() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { students, updateStudent } = useStudent();
  const { user } = useAuth();

  const student = students.find((s) => s.name === user?.email);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (student) {
      updateStudent(student.id, data);
      alert("Profile updated successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-black mb-6">Profile Management</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              defaultValue={student?.name}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{(errors.name as FieldError).message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Form</label>
            <input
              {...register("form", { required: "Form is required" })}
              placeholder="Form (e.g., Form 1)"
              defaultValue={student?.form}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.form && (
              <p className="text-red-500 text-sm mt-1">{(errors.form as FieldError).message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Stream</label>
            <input
              {...register("stream", { required: "Stream is required" })}
              placeholder="Stream (e.g., West)"
              defaultValue={student?.stream}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.stream && (
              <p className="text-red-500 text-sm mt-1">{(errors.stream as FieldError).message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}