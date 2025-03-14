'use client';

import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { useStudent } from "../../context/StudentContext";

export default function GradeManagement() {
  const { register, handleSubmit, formState: { errors } } = useForm<{ studentId: string; subject: string; grade: string }>();
  const { students, addGrade } = useStudent();

  const onSubmit: SubmitHandler<{ studentId: string; subject: string; grade: string }> = (data) => {
    addGrade(data.studentId, data.subject, data.grade);
    alert("Grade added successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-black mb-6">Grade Management</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Student</label>
            <select
              {...register("studentId", { required: "Student is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            >
              <option value="">Select Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
            {errors.studentId && (
              <p className="text-red-500 text-sm mt-1">{(errors.studentId as FieldError).message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Subject</label>
            <input
              {...register("subject", { required: "Subject is required" })}
              placeholder="Subject"
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{(errors.subject as FieldError).message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Grade</label>
            <input
              {...register("grade", { required: "Grade is required" })}
              placeholder="Grade (e.g., A, B+)"
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
            />
            {errors.grade && (
              <p className="text-red-500 text-sm mt-1">{(errors.grade as FieldError).message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Grade
          </button>
        </form>
      </div>
    </div>
  );
}