'use client';

import { useForm, FieldError } from "react-hook-form";
import { useStudent } from "../../context/StudentContext";

export default function StudentEnrollment() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ name: string; form: string; stream: string }>();
  const { addStudent } = useStudent();

  const onSubmit = (data: { name: string; form: string; stream: string }) => {
    addStudent(data.name, data.form, data.stream);
    alert("Student enrolled successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-black mb-6">Student Enrollment</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Student Name"
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
            Enroll Student
          </button>
        </form>
      </div>
    </div>
  );
}