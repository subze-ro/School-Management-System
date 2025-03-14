'use client';

import { useForm, FieldError } from "react-hook-form";
import { useConfig } from "../../../context/ConfigContext";

export default function StreamsConfig() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ stream: string }>();
  const { streams, addStream } = useConfig();

  const onSubmit = (data: { stream: string }) => {
    addStream(data.stream);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Configure Streams</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-96">
        <input
          {...register("stream", { required: "Stream is required" })}
          placeholder="Stream (e.g., West, East)"
          className="mb-4 p-2 border rounded w-full"
        />
        {errors.stream && (
          <p className="text-red-500 text-sm">{(errors.stream as FieldError).message}</p>
        )}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Stream
        </button>
      </form>
      <div className="mt-8 bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Current Streams</h2>
        <ul>
          {streams.map((stream, index) => (
            <li key={index} className="mb-2">
              {stream}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}