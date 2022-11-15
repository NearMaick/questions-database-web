import { useEffect, useState } from "react";
import { api } from "../utils/api";

interface EducatorProps {
  id: string;
  name: string;
  course: string;
}

export function Educators() {
  const [loadEducatorsData, setLoadEducatorsData] = useState<EducatorProps[]>(
    []
  );

  async function loadEducators() {
    const response = await api.get("educators");
    setLoadEducatorsData(response.data);
  }

  useEffect(() => {
    loadEducators();
  }, []);

  return (
    <div className='bg-black w-full h-screen'>
      <h1 className='text-white'>
        {loadEducatorsData.map((educator) => (
          <div key={educator.id}>
            <p className='font-semibold'>{educator.name}</p>
            <p className='pb-2'>{educator.course}</p>
          </div>
        ))}
      </h1>
    </div>
  );
}

