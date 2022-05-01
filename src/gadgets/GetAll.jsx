import React, { useState } from "react";
import { useEffect } from "react";
import getAllFetch from './getAllFetch';
function GetAll() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData(){
      await getAllFetch(error, result);
      async function result(gadgets){
        gadgets = await gadgets.json();
        setData(gadgets);
      }
      function error(error){
        console.error(error);
        setError(error);
      }
    }
    getData();
  }, []);
  if (!data) return error;
  return (
    <div>
      {data.map((gadget) => (
        <div key={gadget.gadgetId}>{gadget.Title}</div>
      ))}
    </div>
  );
}
export default GetAll;
