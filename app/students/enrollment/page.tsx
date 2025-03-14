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
      <h1 className="text-2xl font-bold mb-4">Student Enrollment</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Student Name"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{(errors.name as FieldError).message}</p>
        )}
        <input
          {...register("form", { required: "Form is required" })}
          placeholder="Form (e.g., Form 1)"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.form && (
          <p className="text-red-500 text-sm">{(errors.form as FieldError).message}</p>
        )}
        <input
          {...register("stream", { required: "Stream is required" })}
          placeholder="Stream (e.g., West)"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.stream && (
          <p className="text-red-500 text-sm">{(errors.stream as FieldError).message}</p>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Enroll Student
        </button>
      </form>
    </div>
  );
}