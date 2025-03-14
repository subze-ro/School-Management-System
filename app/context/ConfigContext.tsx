'use client'
import { createContext, useContext, useState } from "react";

interface ConfigContextType {
  grades: string[];
  subjects: string[];
  forms: string[];
  streams: string[];
  addGrade: (grade: string) => void;
  addSubject: (subject: string) => void;
  addForm: (form: string) => void;
  addStream: (stream: string) => void;
}

const ConfigContext = createContext<ConfigContextType | null>(null);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [grades, setGrades] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [forms, setForms] = useState<string[]>([]);
  const [streams, setStreams] = useState<string[]>([]);

  const addGrade = (grade: string) => {
    setGrades([...grades, grade]);
  };

  const addSubject = (subject: string) => {
    setSubjects([...subjects, subject]);
  };

  const addForm = (form: string) => {
    setForms([...forms, form]);
  };

  const addStream = (stream: string) => {
    setStreams([...streams, stream]);
  };

  return (
    <ConfigContext.Provider value={{ grades, subjects, forms, streams, addGrade, addSubject, addForm, addStream }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext)!;