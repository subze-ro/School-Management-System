'use client';

import { useForm, FieldError } from "react-hook-form";
import { useConfig } from "../../../context/ConfigContext";

export default function GradesConfig() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ grade: string }>();
  const { grades, addGrade } = useConfig();

  const onSubmit = (data: { grade: string }) => {
    addGrade(data.grade);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Configure Grades</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <input
          {...register("grade", { required: "Grade is required" })}
          placeholder="Grade (e.g., A, B+, C-)"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.grade && (
          <p className="text-red-500 text-sm">{(errors.grade as FieldError).message}</p>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Grade
        </button>
      </form>
      <div className="mt-8 bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Current Grades</h2>
        <ul>
          {grades.map((grade, index) => (
            <li key={index} className="mb-2">
              {grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}