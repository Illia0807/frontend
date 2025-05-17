import { useEffect, useState } from "react";
import PublicRoute from "./routes/PublicRoute";

function App() {
  // State to store data fetched from the server
  const [data, setData] = useState(null);

  // useEffect runs once on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {

        // Request to API to fetch clinner data
        const response = await fetch("http://localhost:3000/clinners");

        // Handle error if request is not successful
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }

        // Convert response to JSON and save to state
        const json = await response.json();
        setData(json);

        // Debug: log the data
        console.log(json);
        
      } catch (err) {

        // Error handling during request
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    
        {data!=null
          ? data.map((c) => {
              <p >{c.name}</p>;
            })
          : "hi"}
            <PublicRoute />
    </>
  );
}

export default App;
