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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      {/* Header */}
      <h1 className="text-3xl font-light text-blue-700 mb-8 tracking-wide">Configure Subjects</h1>

      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-lg font-light text-gray-600 mb-6 tracking-wide">Add a New Subject</h2>
      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Input Field */}
          <div>
            <input
              {...register("subject", { required: "Subject is required" })}
              placeholder="Subject (e.g., Math, Science)"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">{(errors.subject as FieldError).message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-light py-3 rounded-lg shadow-md transition-all"
          >
            Add Subject
          </button>
        </form>
      </div>

      {/* Current Subjects List */}
      <div className="mt-10 bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-lg font-light text-gray-600 mb-6 tracking-wide">Current Subjects</h2>
        <ul className="space-y-4">
          {subjects.map((subject, index) => (
            <li
              key={index}
              className="p-3 bg-gray-100 rounded-lg text-gray-700 text-sm shadow-sm"
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}