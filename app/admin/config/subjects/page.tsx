'use client';

import { useForm, FieldError } from "react-hook-form";
import { useConfig } from "../../../context/ConfigContext";

export default function SubjectsConfig() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ subject: string }>();
  const { subjects, addSubject } = useConfig();

  const onSubmit = (data: { subject: string }) => {
    addSubject(data.subject);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Configure Subjects</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <input
          {...register("subject", { required: "Subject is required" })}
          placeholder="Subject (e.g., Math, Science)"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{(errors.subject as FieldError).message}</p>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Subject
        </button>
      </form>
      <div className="mt-8 bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Current Subjects</h2>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} className="mb-2">
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}