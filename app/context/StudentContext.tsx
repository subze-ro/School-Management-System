'use client'
import { createContext, useContext, useState } from "react";

interface Student {
  id: string;
  name: string;
  form: string;
  stream: string;
  grades: { subject: string; grade: string }[];
}

interface StudentContextType {
  students: Student[];
  addStudent: (name: string, form: string, stream: string) => void;
  updateStudent: (id: string, updatedData: Partial<Student>) => void;
  addGrade: (studentId: string, subject: string, grade: string) => void;
}

const StudentContext = createContext<StudentContextType | null>(null);

export const StudentProvider = ({ children }: { children: React.ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (name: string, form: string, stream: string) => {
    const newStudent: Student = {
      id: Date.now().toString(),
      name,
      form,
      stream,
      grades: [],
    };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (id: string, updatedData: Partial<Student>) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, ...updatedData } : student
      )
    );
  };

  const addGrade = (studentId: string, subject: string, grade: string) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? { ...student, grades: [...student.grades, { subject, grade }] }
          : student
      )
    );
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, addGrade }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext)!;