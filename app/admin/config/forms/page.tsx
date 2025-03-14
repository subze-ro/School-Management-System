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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Configure Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <input
          {...register("form", { required: "Form is required" })}
          placeholder="Form (e.g., Form 1, Form 2)"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.form && (
          <p className="text-red-500 text-sm">{(errors.form as FieldError).message}</p>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Form
        </button>
      </form>
      <div className="mt-8 bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Current Forms</h2>
        <ul>
          {forms.map((form, index) => (
            <li key={index} className="mb-2">
              {form}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}