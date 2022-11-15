import { useEffect, useState } from "react";
import { api } from "./utils/api";

function App() {
  const [loadEducatorsData, setLoadEducatorsData] = useState([]);

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
        <pre>{JSON.stringify(loadEducatorsData, null, 2)}</pre>
      </h1>
    </div>
  );
}

export default App;

