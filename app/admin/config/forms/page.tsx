'use client';

import { useForm, FieldError } from "react-hook-form";
import { useConfig } from "../../../context/ConfigContext";

export default function FormsConfig() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ form: string }>();
  const { forms, addForm } = useConfig();

  const onSubmit = (data: { form: string }) => {
    addForm(data.form);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-10">
      {/* Header */}
      <h1 className="text-3xl font-light text-blue-700 mb-8 tracking-wide">Configure Forms</h1>

      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-lg font-light text-gray-600 mb-6 tracking-wide">Add a New Form</h2>
      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Input Field */}
          <div>
            <input
              {...register("form", { required: "Form is required" })}
              placeholder="Form (e.g., Form 1, Form 2)"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
            {errors.form && (
              <p className="text-red-500 text-sm mt-2">{(errors.form as FieldError).message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-light py-3 rounded-lg shadow-md transition-all"
          >
            Add Form
          </button>
        </form>
      </div>

      {/* Current Forms List */}
      <div className="mt-10 bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-lg font-light text-gray-600 mb-6 tracking-wide">Current Forms</h2>
        <ul className="space-y-4">
          {forms.map((form, index) => (
            <li
              key={index}
              className="p-3 bg-gray-100 rounded-lg text-gray-700 text-sm shadow-sm"
            >
              {form}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}